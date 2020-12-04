import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];
  errors: string[] = [];

  addError(error: string) {
    this.errors.push(error);
  }

  add(message: string) {
    this.messages.push(message);
    console.log('message from message', message);
  }

  clear() {
    this.messages = [];
    this.errors = [];
  }
}
