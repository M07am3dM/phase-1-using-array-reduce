const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

const totalBatteries = batteryBatches.reduce((batteries, number) => batteries + number, 0);

// const totalBatteries = batteryBatches.reduce(reducer = (batteries, number) => (batteries + number), 0);

// const reducer = (batteries, number) => batteries + number;
// const totalBatteries = batteryBatches.reduce(reducer, 0);


