// let someString: string = `it's string`;
// someString = someString.charAt(3);
// console.log(someString);
// console.log(`------------------`);

// let someNumber: number = 20;
// someNumber = someNumber + 5;
// console.log(someNumber);
// console.log(`------------------`);

// let someBoolean: boolean = someNumber >= 24;
// someBoolean = !someBoolean;
// console.log(someBoolean);
// console.log(`------------------`);

// let requestStatus: 'pending' | 'success' | 'error' = 'pending';

// requestStatus = 'success';

// const books = ['1984', 'Brave New World', 'Fahrenheit 451'];

// let foundBook: string | undefined;

// for (let book of books) {
//   if (book === '1983') {
//     foundBook = book;
//   }
// }

// console.log(foundBook?.length);

// let orderStatus: 'processing' | 'shipped' | 'delivered' = 'processing';

// orderStatus = 'shipped';
// orderStatus = 'delivered';

// console.log(orderStatus);

// let discount: number | string = 20;

// discount = '20%';
// console.log(discount);

let temperatures: number[] = [12, 22, 27, 45];

//! temperatures.push('hot');

let colors: string[] = ['red', 'green', 'orange'];
// !colors.push(true);

let mixedArray: (number | string)[] = [1, 'two', 3];
//! mixedArray.push(true);

// * Objects in type script

let car: { brand: string; year: number } = { brand: 'toyota', year: 2023 };

car.brand = 'ford';

let book = { title: 'book', cost: 23 };
let pen = { title: 'pen', cost: 21 };
let noteBook = { title: 'noteBook' };

let items: { readonly title: string; cost?: number }[] = [book, pen, noteBook];

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2018 };
let laptop: { brand: string; year: number } = { brand: 'hp', year: 2019 };
let laptop2: { brand: string; year?: number } = { brand: 'hp' };

let products: { title: string; price?: number }[] = [
  { title: 'shirt', price: 24 },
  { title: 'pants' },
];

// * function on typescript

function calculateDiscount(price: number): number {
  return price * 0.9;
}

let finalPrice = calculateDiscount(100);

// ! challenges

const names: string[] = ['john', 'susan', 'jim', 'jill', 'jane'];

function isNameList(name: string): boolean {
  return names.includes(name);
}

let nameTocheck: string = 'anna';

if (isNameList(nameTocheck)) {
  console.log(`${nameTocheck} is in the list`);
} else {
  console.log(`${nameTocheck}, it is not in the list`);
}
