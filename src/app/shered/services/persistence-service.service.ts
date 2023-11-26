import { Injectable } from '@angular/core';

@Injectable()
export class PersistenceService {
  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log('Error saving to LocalStorage'), e;
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) as string);
    } catch (e) {
      console.log('Error gating data from LocalStorage', e);
      return null;
    }
  }
}
