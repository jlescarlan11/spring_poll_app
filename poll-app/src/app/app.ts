import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PollComponent } from './poll/poll';

@Component({
  selector: 'app-root',
  imports: [PollComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('poll-app');
}
