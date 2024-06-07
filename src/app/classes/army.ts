// army.ts
import { IWarrior } from './iwarrior';
import { SkeletonKnight, Elephant, HeavyInfantry } from './warriors';

export class Army {
    private warriors: IWarrior[] = [];

    addWarrior(warrior: IWarrior): void {
        this.warriors.push(warrior);
    }

    clearArmy(): void {
        this.warriors = [];
    }

    calculateTotalDailyCost(): number[] {
        return this.warriors.reduce((totals, warrior) => {
        const [gold, human, feed] = warrior.getDailyCost();
        return [
            totals[0] + gold,
            totals[1] + human,
            totals[2] + feed
        ];
        }, [0, 0, 0]);
    }

    calculateAverageSpeed(): number {
        if (this.warriors.length === 0) return 0;
        const totalSpeed = this.warriors.reduce((total, warrior) => total + warrior.getSpeed(), 0);
        return totalSpeed / this.warriors.length;
    }

    getWarriorDescriptions(): string[] {
        return this.warriors.map(warrior => warrior.getDescription());
    }
}
