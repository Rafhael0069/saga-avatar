import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  startForm: FormGroup;
  name;

  constructor(public formBuilder: FormBuilder, public navCtrl: NavController) {
    this.startForm = this.formBuilder.group({
      name: [null, [Validators.required, Validators.minLength(4)]],
    });
  }

  submitLogin() {
    localStorage.setItem('name', this.name); // setting
    this.navCtrl.navigateForward('one');
   // console.log(localStorage.getItem('name')); // getting
  }
}
