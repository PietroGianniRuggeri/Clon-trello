import { Component, OnInit } from '@angular/core';
import { faTrello } from '@fortawesome/free-brands-svg-icons';
import { faAngleDown, faAngleUp, faBorderAll, faBox, faClock, faGrinHearts, faHeart, faUsers, faWaveSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html'
})
export class BoardsComponent implements OnInit {

  faTrello = faTrello;
  faBox = faBox;
  faWavesSquare = faWaveSquare;
  faclock = faClock;
  faAngleDown = faAngleDown;
  faAngleUp = faAngleUp;
  faHeart = faHeart;
  faBorderAll = faBorderAll;
  faUsers = faUsers;
  faGear = faGrinHearts;




  constructor() { }

  ngOnInit(): void {
  }

}
