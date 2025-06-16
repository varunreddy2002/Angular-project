import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-setting',
  imports: [CommonModule, FormsModule],
  templateUrl: './setting.html',
  styleUrl: './setting.css'
})
export class Setting {
  voiceType: 'male' | 'female' = 'male';
}
