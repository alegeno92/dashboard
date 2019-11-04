import {Injectable} from '@angular/core';
import {Observer, of, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  ws: WebSocket;

  constructor() {
  }

  private subject: Subject<MessageEvent>;

  public connect(url): Subject<MessageEvent> {
    if (!this.subject) {
      this.subject = this.create(url);
      console.log('Successfully connected: ' + url);
    }
    return this.subject;
  }

  private create(url): Subject<MessageEvent> {
    this.ws = new WebSocket(url);

    const observable = of((obs: Observer<MessageEvent>) => {
      this.ws.onmessage = event => {
        console.log('listener', event);
      };
      this.ws.onerror = obs.error.bind(obs);
      this.ws.onclose = obs.complete.bind(obs);

      return this.ws.close.bind(this.ws);
    });
    const observer = {
      next: (data) => {
        console.log('observer', data);
        if (this.ws.readyState === WebSocket.OPEN) {
          this.ws.send(JSON.stringify(data));
        }
      }
    };
    return Subject.create(observer, observable);
  }
}
