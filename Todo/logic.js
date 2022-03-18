// button.addEventListener("click", addCourse);
// get sum of even and odd numbers  in an array
// const numList = [1, 3, 55, 22, 44];
// // const oddEven = {
// //   odd: 0,
// //   even: 0,
// // };

// function oddAndEvenSumReducer(acc, num) {
//   if (num % 2 === 0) {
//     return { ...acc, even: acc.even + num };
//   } else {
//     return { ...acc, odd: acc.odd + num };
//   }
// }
// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, { odd: 0, even: 0 });
// console.log(oddAndEvenSum);
const numList = [
  { type: "odd", payload: 1 },
  { type: "odd", payload: 3 },
  { type: "odd", payload: 55 },
  { type: "even", payload: 22 },
  { type: "even", payload: 44 },
];

// function oddAndEvenSumReducer(acc, num) {
//   if (num.type === "even") {
//     return { ...acc, even: acc.even + num.payload };
//   } else {
//     return { ...acc, odd: acc.odd + num.payload };
//   }
// }

// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducer, { odd: 0, even: 0 });
// console.log(oddAndEvenSum);

// function oddAndEvenSumReducerSwitch(acc, num) {
//   switch ((acc, num)) {
//     case "even":
//       return { ...acc, even: acc.even + num.payload };
//     case "odd":
//       return { ...acc, odd: acc.odd + num.payload };
//   }
// }
// const oddAndEvenSum = numList.reduce(oddAndEvenSumReducerSwitch, {
//   odd: 0,
//   even: 0,
// });
// console.log(oddAndEvenSum);
