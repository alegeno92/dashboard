import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';
import {map} from 'rxjs/operators';
import {ApplicationData} from './data-models/application-data';
import {WebsocketService} from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ApplicationDataService {

  private WS_URL = ' ws://127.0.0.1:8086';
  public data: Subject<any>;

  private static mockData() {
    return {
      memory: {
        free: Math.trunc(Math.random() * 100),
        total: 100
      },
      storage: {
        free: Math.floor(Math.random() * 100),
        total: 100
      },
      loads: {
        free: Math.floor(Math.random() * 100),
        total: 100
      },
      people: {
        number: Math.floor(Math.random() * 100)
      }
    };
  }

  constructor(private webSocketService: WebsocketService) {
    this.data = webSocketService.connect(this.WS_URL)
      .pipe(
        map((response: MessageEvent) => {
          let data;
          console.log('application dtaa', response.data);
          try {
            data = JSON.parse(response.data);
          } catch (e) {
            console.log('Failed to parse json');
            data = ApplicationDataService.mockData();
          }
          console.log(data);
          return {
            memory: data.memory,
            loads: data.loads,
            people: data.people,
            storage: data.storage,
          };
        })) as Subject<ApplicationData>;
  }

  public send(message) {
    this.data.next(message);
  }


}
