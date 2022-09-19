class Plan{
    public planName: string;
    public speedPlan: string;
    public numberOfChairs: number;
}
const aviao = new Plan();

const planName = aviao.planName = 'Piper PA-28';
const speedPlan = aviao.planName = '800km/h';
const numberOfChairs = aviao.numberOfChairs = 4;

console.log(`plane data:\n`);
console.log(`Plan Name: ${planName}`);
console.log(`Plan speed: ${speedPlan}`);
console.log(`Number of chairs: ${numberOfChairs} `);