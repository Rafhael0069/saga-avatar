import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.page.html',
  styleUrls: ['./five.page.scss'],
})
export class FivePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title5').textContent = localStorage.getItem('name');
  }
}
