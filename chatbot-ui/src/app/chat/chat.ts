import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Setting } from '../setting/setting';

@Component({
  selector: 'app-chat',
  imports: [CommonModule,Setting],
  templateUrl: './chat.html',
  styleUrl: './chat.css'
})
export class Chat {
  showSettings = false;
  newChat() { /* ... */ }
  toggleSettings() {
   this.showSettings = !this.showSettings;
}
}
