import { Component, OnInit } from '@angular/core';
import { Poster } from '../models/poster';

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
})
export class FourPage implements OnInit {
  poster: Poster;

  constructor() {
    this.poster = new Poster(
      'Avatar: The Tulkun Rider',
      '../../assets/imgs/poster avatar 4.png',
      'James Cameron',
      's/n',
      'Ação, Aventura, Fantasia,  Ficção científica, Suspense',
      '2026',
      false,
      false,
      false,
      true,
      false
    );
  }

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title4').textContent = localStorage.getItem('name');
  }
}
