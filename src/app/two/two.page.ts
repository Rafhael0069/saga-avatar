import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two',
  templateUrl: './two.page.html',
  styleUrls: ['./two.page.scss'],
})
export class TwoPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title2').textContent = localStorage.getItem('name');
  }
}
