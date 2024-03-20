
// const ontem = new Date("2020-10-04T19:05:39.522Z");
// const ontem2 = new Date("2020-10-04T19:05:39.522Z");

// console.log(ontem === ontem2); //false 



// const ontem = new Date("2020-10-04T19:05:39.522Z");
// const ontem2 = ontem;

// console.log(ontem === ontem2); //true


// comparando com timestamp 

const ontem = new Date("2020-10-04T19:05:39.522Z");
const ontem2 = new Date("2020-10-05T19:05:39.522Z");

console.log(+ontem < +ontem2); // true
