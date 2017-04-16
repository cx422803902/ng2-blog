import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';
@Injectable()
export class GlobalState {
  private static instance: GlobalState;

  private _subject: Subject<EventData> = new Subject<EventData>();
  private _observableSubject: Observable<EventData> = this._subject.asObservable();

  private _subscriptions: Map<GlobalEvent, Array<Function>> = new Map<GlobalEvent, Array<Function>>();

  private constructor() {
    this._observableSubject.subscribe(eventData => this._onEvent(eventData));
  }

  notify(event: GlobalEvent, data: any) {
    this._subject.next({
      event: event,
      data: data
    });
  }

  subscription(event: GlobalEvent, caller: Function): void {
    let subscribers = this._subscriptions.get(event) || [];
    subscribers.push(caller);
    this._subscriptions.set(event, subscribers);
  }

  private _onEvent(event: EventData) {
    let subscribers: Array<Function> = this._subscriptions.get(event.event);
    subscribers.forEach(subscriber => subscriber.call(null, event.data));
  }

  static getSingleton(): GlobalState {
    if (GlobalState.instance == null) {
      GlobalState.instance = new GlobalState();
    }
    return GlobalState.instance;
  }
}

export enum GlobalEvent {
  ADMIN_MENU_COLLAPSE
}

interface EventData {
  event: GlobalEvent,
  data: any;
}
