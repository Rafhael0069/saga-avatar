import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-five',
  templateUrl: './five.page.html',
  styleUrls: ['./five.page.scss'],
})
export class FivePage implements OnInit {

  constructor() { }

  ngOnInit() {
     //console.log('localStorage '+localStorage.getItem('name')); // getting
     const titleAux = localStorage.getItem('name');
     console.log('titleaux '+ titleAux);
     document.getElementById('title').textContent = titleAux;
  }

}
