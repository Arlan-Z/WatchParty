import { Component, ElementRef, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'video-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './video-card.component.html',
  styleUrl: './video-card.component.css'
})
export class VideoCardComponent {
  @Input() viewersCount: number = 0; 
}
