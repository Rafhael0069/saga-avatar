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
    console.log('localStorage ' + localStorage.getItem('name')); // getting
    const titleAux = localStorage.getItem('name');
    //console.log('titleaux '+ titleAux);
    //document.getElementById('title').textContent = titleAux;
    document.getElementById('title').textContent = localStorage.getItem('name');
  }
}
