import { Poster } from './../models/poster';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage implements OnInit {
  poster: Poster;

  constructor() {
    this.poster = new Poster(
      'Avatar',
      '../../assets/imgs/poster avatar.jpg',
      'James Cameron',
      '7.8 / 10',
      'Épico, Ação, Aventura, Ficção científica',
      '2009',
      true,
      false,
      false,
      false,
      false
    );
  }

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title1').textContent =
      localStorage.getItem('name');
  }
}
