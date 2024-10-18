import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoCardComponent } from '../video-card/video-card.component';

@Component({
  selector: 'app-videos',
  standalone: true,
  imports: [CommonModule, VideoCardComponent],
  templateUrl: './videos.component.html',
  styleUrl: './videos.component.css'
})
export class VideosComponent {
  videos = [
    {viewers: 3},
    {viewers: 4},
    {viewers: 1},
    {viewers: 2},
    {viewers: 3},
    {viewers: 4},
    {viewers: 1},
    {viewers: 2},
    {viewers: 3},
    {viewers: 4},
    {viewers: 1},
    {viewers: 2},
  ]
}
