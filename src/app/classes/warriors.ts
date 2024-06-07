import { IWarrior } from "./iwarrior";

export class SkeletonKnight implements IWarrior {
  getDailyCost(): number[] {
    return [0, 1, 2]; // [Gold, Human, Feed]
  }

  getSpeed(): number {
    return 25;
  }
}

export class Elephant implements IWarrior {
  getDailyCost(): number[] {
    return [0, 0, 5]; // [Gold, Human, Feed]
  }

  getSpeed(): number {
    return 30;
  }
}

export class HeavyInfantry implements IWarrior {
  getDailyCost(): number[] {
    return [1, 0, 0]; // [Gold, Human, Feed]
  }

  getSpeed(): number {
    return 3;
  }
}
