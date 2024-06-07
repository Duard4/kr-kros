// src/app/home/home.page.ts
import { Component, OnInit } from '@angular/core';
import { Army } from '../classes/army';
import { SkeletonKnight, Elephant, HeavyInfantry } from '../classes/warriors';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  army: Army;
  totalCosts: number[];
  averageSpeed: number;
  descriptions: string[];
  skeletonKnightCount: number;
  elephantCount: number;
  heavyInfantryCount: number;
  errorMessage?: string;
  constructor() {
    this.army = new Army();
    this.totalCosts = [0, 0, 0];
    this.averageSpeed = 0;
    this.descriptions = [];
    this.skeletonKnightCount = 0;
    this.elephantCount = 0;
    this.heavyInfantryCount = 0;
  }

  ngOnInit() {
    this.calculateResults();
  }

  addWarriors() {
    if (this.skeletonKnightCount < 1 || this.elephantCount < 1 || this.heavyInfantryCount < 1) {
      this.errorMessage = 'Кожного типу має бути принаймні одна одиниця';
      return;
    }

    this.errorMessage = '';
    this.army.clearArmy();
    for (let i = 0; i < this.skeletonKnightCount; i++) {
      this.army.addWarrior(new SkeletonKnight());
    }
    for (let i = 0; i < this.elephantCount; i++) {
      this.army.addWarrior(new Elephant());
    }
    for (let i = 0; i < this.heavyInfantryCount; i++) {
      this.army.addWarrior(new HeavyInfantry());
    }
    this.calculateResults();
  }

  calculateResults() {
    this.totalCosts = this.army.calculateTotalDailyCost();
    this.averageSpeed = this.army.calculateAverageSpeed();
    this.descriptions = this.army.getWarriorDescriptions();
  }
}