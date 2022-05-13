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
    console.log('localStorage ' + localStorage.getItem('name')); // getting
    const titleAux = localStorage.getItem('name');
    //console.log('titleaux '+ titleAux);
    //document.getElementById('title').textContent = titleAux;
    document.getElementById('title').textContent = localStorage.getItem('name');
  }
}
