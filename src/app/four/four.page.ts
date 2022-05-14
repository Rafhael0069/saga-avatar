import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-four',
  templateUrl: './four.page.html',
  styleUrls: ['./four.page.scss'],
})
export class FourPage implements OnInit {
  constructor() {}

  ngOnInit() {}

  ionViewDidEnter() {
    document.getElementById('title4').textContent = localStorage.getItem('name');
  }
}
