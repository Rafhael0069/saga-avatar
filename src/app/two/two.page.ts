import { Component, OnInit } from '@angular/core';
import { Poster } from '../models/poster';

@Component({
  selector: 'app-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.scss'],
})
export class TwoPage implements OnInit {
  poster: Poster;

  constructor() {
    this.poster = new Poster(
      'Avatar: The Way of Water',
      '../../assets/imgs/avatar-the-way-of-water_poster.jpeg',
      'James Cameron',
      's/n',
      'Ficção científica',
      '2022',
      false,
      true,
      false,
      false,
      false
    );
  }

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title2').textContent =
      localStorage.getItem('name');
  }
}
