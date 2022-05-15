import { Component, OnInit } from '@angular/core';
import { Poster } from '../models/poster';

@Component({
  selector: 'app-five',
  templateUrl: './five.page.html',
  styleUrls: ['./five.page.scss'],
})
export class FivePage implements OnInit {
  poster: Poster;

  constructor() {
    this.poster = new Poster(
      'Avatar: The Quest for Eywa',
      '../../assets/imgs/poster avatar 5.png',
      'James Cameron',
      's/n',
      'Ação, Aventura, Fantasia, Ficção científica',
      '2028',
      false,
      false,
      false,
      false,
      true
    );
  }

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title5').textContent =
      localStorage.getItem('name');
  }
}
