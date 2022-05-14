import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-three',
  templateUrl: './three.page.html',
  styleUrls: ['./three.page.scss'],
})
export class ThreePage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title3').textContent = localStorage.getItem('name');
  }
}
