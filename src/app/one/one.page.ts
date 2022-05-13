import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.page.html',
  styleUrls: ['./one.page.scss'],
})
export class OnePage implements OnInit {

  constructor() {
  }

  ngOnInit() {
    //console.log('localStorage '+localStorage.getItem('name')); // getting
    const titleAux = localStorage.getItem('name');
    console.log('titleaux '+ titleAux);
    document.getElementById('title').textContent = titleAux;
  }

}
