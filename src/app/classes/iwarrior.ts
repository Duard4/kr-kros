export interface IWarrior {
    getDailyCost(): number[]; // Повертає [gold, human, feed]
    getSpeed(): number;
}
