import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent {
  faUser = faUser;
  rooms = [
    { title: 'Toy Story', image: 'assets/images/toy-story.jpeg', users: 5 },
    { title: 'Toy Story', image: 'assets/images/toy-story.jpeg', users: 2 },
    { title: 'Toy Story', image: 'assets/images/toy-story.jpeg', users: 8 },
  ];

  
  getUserCount(room: any): number {
    return Math.min(3, room.users);
  }
}