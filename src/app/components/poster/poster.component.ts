import { Component, Input, OnInit, NgModule } from '@angular/core';
import { Poster } from 'src/app/models/poster';

@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {

  @Input()
  poster: Poster;

  constructor() {}

  ngOnInit() {}
}
