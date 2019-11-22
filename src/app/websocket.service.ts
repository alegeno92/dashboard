import {Injectable} from '@angular/core';
import {Observable, ReplaySubject} from 'rxjs';
import {map, share} from 'rxjs/operators';
import {ApplicationData} from './data-models/application-data';

class DataStore {
  data: ApplicationData;

  constructor() {
    this.data = {
      memory: {
        total: 100,
        free: 10
      },
      loads: {
        total: 100,
        free: 10
      },
      storage: {
        total: 100,
        free: 10
      },
      people: {
        number: 10,
      }
    };
  }

  update(message): ApplicationData {
    this.data = {
      ...this.data,
      ...message
    };
    return Object.assign({}, this.data);
  }

}

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: WebSocket;

  PORT = '8086';
  URL = '';

  dataStore: DataStore = new DataStore();

  constructor() {
    const {hostname} = window.location;
    this.URL = `ws://${hostname}:${this.PORT}`;
  }

  private subject: Observable<MessageEvent>;

  public connect(): Observable<ApplicationData> {
    if (!this.subject) {
      this.subject = this.create(this.URL);
      console.log('Successfully connected: ' + this.URL);
    }
    return this.subject
      .pipe(
        map(message => {
          let jsonPayload;
          try {
            jsonPayload = JSON.parse(message.data);
            console.log(jsonPayload);
          } catch (e) {
            jsonPayload = null;
          }

          const data = this.dataStore.update(jsonPayload);
          console.log(data);
          return data;
        }),
        share()
      );
  }

  private create(url): Observable<any> {
    this.ws = new WebSocket(url);
    const replaySubject = new ReplaySubject();

    this.ws.onmessage = (data) => {
      replaySubject.next(data);
    };

    this.ws.onerror = (data) => {
      replaySubject.error(data);
    };
    this.ws.onopen = () => {
      this.ws.send(JSON.stringify({stream: 'start'}));
    };
    return replaySubject;
  }
}
