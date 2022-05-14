import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title1').textContent = localStorage.getItem('name');
  }
}
