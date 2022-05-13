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
    console.log('localStorage ' + localStorage.getItem('name')); // getting
    const titleAux = localStorage.getItem('name');
    //console.log('titleaux '+ titleAux);
    //document.getElementById('title').textContent = titleAux;
    document.getElementById('title').textContent = localStorage.getItem('name');
  }
}
