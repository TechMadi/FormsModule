import { Component, OnInit } from '@angular/core';
import { IHero } from '../hero.model';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.scss'],
})
export class TemplateDrivenComponent implements OnInit {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  model: IHero = {
    id: 18,
    name: 'Dr IQ',
    power: this.powers[0],
    alterEgo: 'Chuck Overstreet',
  };

  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
  constructor() {}

  ngOnInit(): void {}

  get heroName() {
    return this.model.name;
  }

  get alterEgo() {
    return this.model.alterEgo;
  }
  get heroPower() {
    return this.model.power;
  }
  newHero() {
    this.model = {
      id: 42,
      name: '',
      power: '',
    };
    this.submitted = false;
  }
}
