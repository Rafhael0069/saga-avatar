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
    console.log('localStorage ' + localStorage.getItem('name')); // getting
    const titleAux = localStorage.getItem('name');
    //console.log('titleaux '+ titleAux);
    //document.getElementById('title').textContent = titleAux;
    document.getElementById('title').textContent = localStorage.getItem('name');
  }
}
