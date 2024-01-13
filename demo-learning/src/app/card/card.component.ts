import { Component } from '@angular/core';

@Component({
  selector: 'app-my-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  heading: string = 'Football Match';

  isPassed = false;

  studentObj = { studName: 'Ram' };
}
