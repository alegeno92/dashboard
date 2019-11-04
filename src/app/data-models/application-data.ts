import {People} from './people';
import {Loads} from './loads';
import {Memory} from './memory';
import {Storage} from './storage';

export interface ApplicationData {
  people: People;
  loads: Loads;
  memory: Memory;
  storage: Storage;
}
