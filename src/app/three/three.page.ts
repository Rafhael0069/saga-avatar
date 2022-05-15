import { Component, OnInit } from '@angular/core';
import { Poster } from '../models/poster';

@Component({
  selector: 'app-three',
  templateUrl: './three.page.html',
  styleUrls: ['./three.page.scss'],
})
export class ThreePage implements OnInit {
  poster: Poster;

  constructor() {
    this.poster = new Poster(
      'Avatar: The Seed Bearer',
      '../../assets/imgs/poster avatar 3.png',
      'James Cameron',
      's/n',
      'Aventura, Ficção científica',
      '2024',
      false,
      false,
      true,
      false,
      false
    );
  }

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title3').textContent = localStorage.getItem('name');
  }
}
