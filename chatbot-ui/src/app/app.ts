import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Chat } from './chat/chat';
import { Main } from './main/main';
import { Setting } from './setting/setting';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Chat, Main, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'chatbot-ui';
}
