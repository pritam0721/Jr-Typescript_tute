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

// if (isNameList(nameTocheck)) {
//   console.log(`${nameTocheck} is in the list`);
// } else {
//   console.log(`${nameTocheck}, it is not in the list`);
// }

// * Optional and Default Parameters

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0);
}

let priceAfterDiscount = calculatePrice(100);

// console.log(priceAfterDiscount);

// in this instance you don't have to do union when you returning just pass in the default value and when you call the function with or without the parameters

function calculateTotalScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints;
}

let scoreAfterPenalty = calculateTotalScore(100, 60);
let scoreWithoutPenalty = calculateTotalScore(60);
// console.log(scoreAfterPenalty);
// console.log(scoreWithoutPenalty);

//* Rest Parameters

function sum(message: string, ...numbers: number[]): string {
  const double = numbers.map((number) => number * 2);
  // console.log(double);

  const total = numbers.reduce((prev, current) => {
    return prev + current;
  }, 0);
  return `${message}${total}`;
}

const ans = sum('the total is :', 1, 2, 3, 4, 5);
// console.log(ans);

//** Challenge - using union types as function parameter */

function processInput(variable: number | string): void {
  if (typeof variable === 'number') {
    let x: number = variable;
    console.log(x * x);
  }
  if (typeof variable === 'string') {
    let x: string = variable.toUpperCase();
    console.log(x);
  }
}

// processInput('hello')

// ! Object as Parameter and Excess property type

function createEmployee({ id }: { id: number }): {
  id: number;
  isActive: boolean;
} {
  return { id, isActive: id % 2 === 0 };
}

// const first = createEmployee({id:1})
// const second = createEmployee({id:2})
// console.log(first,second);

// * alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(
    `The roll no is ${student.id} and the name is ${student.name.toUpperCase()}`
  );
}

const newStudent = {
  id: 10,
  name: 'Pritam',
};

// createStudent(newStudent)

// * Challenge
/**  my solution  
 function processData(data:{input:(number | string);config?:boolean}){
   const {input,config} = data;
   if(!config)
   {
    processInput(input)
   }
   else{

if (typeof input === 'number') {
   let x = input + ''
   console.log(x.toUpperCase());
}

if (typeof input === 'string') {
      let x:number = parseInt(input)
      console.log(x*x);
}
   }
 }

 const newData ={
  input:'17',
 }
 processData(newData)

*/

function processData(
  input: string | number,
  config: { reverse: boolean } = { reverse: false }
) {
  if (typeof input === 'number') {
    return input * input;
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase();
  }
}

// console.log(processData(10));
// console.log(processData('hello'));
// console.log(processData('hello',{reverse:true}));

// ! Type Alias
type User = { id: number; name: string; isActive: boolean };

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
};
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
};

function createUser(user: User): {
  id: number;
  name: string;
  isActive: boolean;
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`);

  return user;
}

type Employee = {
  id: number;
  name: string;
  department: string;
};

type Manager = {
  id: number;
  name: string;
  employees: Employee[];
};

type Staff = Employee | Manager;

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manger of ${staff.employees.length} employees.`
    );
  } else {
    console.log(
      `${staff.name} is an employee in the department of ${staff.department}`
    );
  }
}

const alice: Employee = {
  id: 1,
  name: 'alice',
  department: 'cse',
};
const bob: Employee = {
  id: 2,
  name: 'bob',
  department: 'cse',
};
const sundar: Manager = {
  id: 1,
  name: 'sundar',
  employees: [alice, bob],
};

// printStaffDetails(alice)
// printStaffDetails(sundar)

type Book = { id: number; name: string; price: number };
type DiscountedBook = Book & { discount: number };
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
};
const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 15,
};
const book3: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 15,
  discount: 0.15,
};
// ! Type Alias - Computed Properties

const propName = 'age';

type Animal = {
  [propName]: number;
};

let tiger: Animal = { [propName]: 5 };

// ! Interface Fundamentals

interface Booker {
  readonly isbn: number;
  title: string;
  author: string;
  genre?: string;
  // method
  printAuthor(): void;
  printTitle(message: string): string;
}

const deepWork: Booker = {
  isbn: 123,
  title: 'deepWork',
  author: 'cla newport',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author);
  },
  printTitle(message) {
    return `${this.title}${message}`;
  },
};
//  deepWork.printAuthor()
//  const r1 = deepWork.printTitle('is an awesome book')
//  console.log(r1);

// * Challenge
interface Computer {
  readonly id: number;
  brand: string;
  ram: number;
  // methods
  upgradeRam(increase: number): number;
  storage?: number;
}

const apple_laptop: Computer = {
  id: 1,
  brand: 'Mac 23',
  ram: 8,
  upgradeRam(amount: number) {
    this.ram += amount;
    return this.ram;
  },
};
apple_laptop.storage = 256;
apple_laptop.upgradeRam(8);
// console.log(apple_laptop.ram, apple_laptop.storage)

// ! interface merging , Extend , TypeGuard.

interface Person {
  name: string;
  getDetails(): string;
}

interface DogOwner {
  dogName: string;
  getDogDetails(): string;
}

// * merging

interface Person {
  age: number;
}
const person1: Person = {
  name: 'john',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age:${this.age}`;
  },
};

interface Employee1 extends Person {
  employeeId: number;
}
const aushoka: Employee1 = {
  name: 'aushoka',
  age: 23,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age:${this.age} and the employeeId is ${this.employeeId}`;
  },
};
interface Manager1 extends Person, DogOwner {
  managePeople(): void;
}

const manager: Manager1 = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`;
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`;
  },
  managePeople() {
    console.log('Managing people...');
  },
};
// console.log(aushoka)

interface Person2 {
  name: string;
}

interface DogOwner1 extends Person2 {
  dogName: string;
}
interface Manager2 extends Person2, DogOwner1 {
  managePeople(): void;
  delegateTask(): void;
}

const employee123: Person2 | DogOwner1 | Manager2 = getEmployee();
// console.log(employee123)

function getEmployee(): Person2 | DogOwner1 | Manager2 {
  const random = Math.random();
  if (random < 0.33) {
    return {
      name: 'john',
    };
  } else if (random < 0.66) {
    return {
      name: 'anna',
      dogName: 'rex',
    };
  } else {
    return {
      name: 'bob',
      managePeople: () => console.log('Managing People ....'),
      delegateTask: () => console.log('Delegating the task .... '),
    };
  }
}
function isManager(obj: Person2 | DogOwner1 | Manager2): obj is Manager2 {
  return 'managePeople' in obj;
}
// if (isManager(employee123)) {
//   employee123.delegateTask()
// }
// ! Tuples and Enums
let person_john: [string, number] = ['john', 34];
let person_john1: [string, number?] = ['john'];

function tuplesGetPerson(): [string, number] {
  return person_john;
}
// console.log(tuplesGetPerson())
enum ServerResponseStatus {
  Success = 200,
  Error = 500,
}
// Object.values(ServerResponseStatus).forEach((value) => {
//   if (typeof value === 'number') {
//     console.log(value)
//   }
// })
interface ServerResponse {
  result: ServerResponseStatus;
  data: string[];
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first time', 'second time'],
  };
}

// const res: ServerResponse = getServerResponse()
// console.log(res)
enum UserRole {
  Admin,
  Enum_Manager,
  Enum_Employee,
}
type Enum_User = {
  id: number;
  name: string;
  role: UserRole;
  contact: [string, number];
};

function createEnumUser(user: Enum_User): Enum_User {
  return user;
}
const x: Enum_User = {
  id: 123,
  name: 'santos',
  role: UserRole.Admin,
  contact: ['test@test.com', 90835667],
};
// const a = createEnumUser(x)
// console.log(a)

// ! Type assertion, Type Unknown and Type Never

let someValue: any = 'This is the awesome string';
let sLength = (someValue as string).length;

type Bird = {
  name: string;
};
let birdString = '{"name":"Eagle"}';
let dogString = '{"breed":"Poodle"}';

let birdObj = JSON.parse(birdString);
let dogdObj = JSON.parse(dogString);

let bird = birdObj as Bird;
let dog = dogdObj as Bird;
/*
console.log(bird.name);
* output : Eagle
console.log(dog.name)
*output : undefine
*/
enum Status {
  Pending = 'Pending',
  Declined = 'Declined',
}

type User_type_Assertion = {
  name: string;
  status: Status;
};

/*
save Status.Pending in the db as string 
retrieving from the database 
*/
const statusValue = 'pending';

const user_t_a: User_type_Assertion = {
  name: 'josh',
  status: statusValue as Status,
};

// function runSomeCode() {
//   const random = Math.random()
//   if (random < 0.5) {
//     throw new Error('something went wrong with the random number')
//   } else {
//     throw 'there was an error'
//   }
// }

// try {
//   runSomeCode()
// } catch (error) {
//   if (error instanceof Error) {
//     console.log(error.message) // this type of Error
//   } else {
//     console.log(error) // this the type of unknown
//     console.log('there was an error with the error block ')
//   }
// }

// *Type Never

type Theme = 'light' | 'dark';

function checkTheme(theme: Theme) {
  if (theme === 'light') {
    console.log('light theme');
    return;
  }
  if (theme === 'dark') {
    console.log('dark theme');
    return;
  }
  theme; // never type
}
enum Color {
  Red,
  Blue,
  Green,
}
function getTheColorName(color: Color) {
  switch (color) {
    case Color.Red:
      return 'red';
    case Color.Blue:
      return 'Blue';
    case Color.Green:
      return 'Green';
    default:
      let unexpectedColor: never = color;
      throw new Error(`Unexpected color value: ${unexpectedColor}`);
  }
}

// console.log(getTheColorName(Color.Blue))

//! Modules - Global Scope "Gotcha"

// If your TypeScript files aren't modules (i.e., they don't have any import or export statements), they're treated as scripts in the global scope. In this case, declaring the same variable in two different files would cause a conflict.
/*
!tutorial.ts

let name = 'shakeAdnBake';

const susan = 'susan';

export let something = 'something';

!actions.ts

const susan = 'susan';

export const something = 'something';

!tsconfig.json

"moduleDetection": "force",
output
tsconfig.json

"module": "ESNext"
*/

//! Type Guarding Challenge

type ValueType = string | number | boolean;

function checkTheValue(value: ValueType): ValueType {
  return typeof value === 'string'
    ? value.toLowerCase()
    : typeof value === 'number'
    ? value.toFixed(2)
    : value + '';
}
// setInterval(() => {
//   const random = Math.random()
//   let value: ValueType
//   value = random < 0.33 ? 'Hello' : random < 0.66 ? 123.456 : true
//   let a = checkTheValue(value)
//   console.log(a)
// }, 100)
type Dog = { type: 'dog'; name: string; bark: () => void };
type Cat = { type: 'cat'; name: string; meow: () => void };
type Animal_C = Dog | Cat;

// function makeSound(animal: Animal_C) {
//   if (animal.type === 'dog') {
//     animal.bark()
//   } else {
//     animal.meow()
//   }
// }
function makeSound(animal: Animal_C) {
  if ('bark' in animal) {
    animal.bark();
  } else {
    animal.meow();
  }
}
function printLength(str: string | null | undefined) {
  if (str) {
    console.log(str.length);
  } else {
    console.log('string not provided');
  }
}
// printLength()

// try {
//   throw new Error('This is an error')
// } catch (error) {
//   if (error instanceof Error) {
//     console.log('the error is the instance of the big Error')
//   } else {
//     console.log('this not a instance of an error')
//   }
// }
function checkTheInput(date: Date | string): string {
  return date instanceof Date
    ? date.getFullYear().toString()
    : date.toUpperCase();
}

// console.log(checkTheInput(new Date()), checkTheInput('2022-jun-8'))
// ! Type Predicate
type Student = {
  name: string;
  study: () => void;
};
type User_p = {
  name: string;
  login: () => void;
};
type Person_p = Student | User_p;
const randomPerson = (): Person_p => {
  return Math.random() > 0.5
    ? { name: 'john', study: () => console.log('studying ') }
    : { name: 'mary', login: () => console.log('logging in') };
};

const person_tp = randomPerson();

function isStudent(person: Person_p): person is Student {
  return (person as Student).study !== undefined;
}

// if (isStudent(person_tp)) {
//   person_tp.study()
// } else {
//   person_tp.login()
// }
// !Challenge Discriminate Unions and exhaustive check using the never type

type IncrementAction = {
  type: 'increment';
  amount: number;
  timestamp: number;
  user: string;
};

type DecrementAction = {
  type: 'decrement';
  amount: number;
  timestamp: number;
  user: string;
};

type Action = IncrementAction | DecrementAction;

function reducer(state: number, action: Action): number {
  /* return action.type === 'increment'? (state += action.amount)
   : (state -= action.amount)
  */
  switch (action.type) {
    case 'increment':
      return (state += action.amount);
    case 'decrement':
      return (state -= action.amount);
    default:
      const unexpectedAction: never = action;
      throw new Error(`Unexpected Action is the ${unexpectedAction}`);
  }
}

// const x_r = reducer(15, {
//   type: 'increment',
//   amount: 12,
//   timestamp: 2,
//   user: 'John',
// });
// console.log(x_r);
// ! Typescript Generics
// let array1: string[] = ['Apple', 'Banana', 'Mango'];
// let array2: number[] = [1, 2, 3];
// let array3: boolean[] = [true, false, true];
/*
 we can try the following approach using Generics
*/
// Example of variable declaration
let array1: Array<string> = ['Apple', 'Banana', 'Mango'];

let array7: Array<string> = array1.map((value: string): string => {
  return value.toUpperCase();
});
// console.log(array1, array7);

//Example of Generic function declaration

function someGenericFunction<T>(arg: T): T {
  return arg;
}

const someStringValue = someGenericFunction('hello world');
const someNumberValue = someGenericFunction(39);
// console.log(someStringValue, someNumberValue);

//Generic Interface

interface GenericSomeValue<T> {
  value: T;
  getValue: () => T;
}
const someRandomGenericInterface: GenericSomeValue<string> = {
  value: 'hello world',
  getValue() {
    return this.value;
  },
};
// console.log(someRandomGenericInterface);

async function someFunc(): Promise<string> {
  return 'hello World';
}
// Challenge
function createGenericArray<T>(len: number, input: T): Array<T> {
  let array: Array<T> = Array.from({ length: len }, () => input);
  // let array: T[] = Array(len).fill(input);
  return array;
}
// console.log(createGenericArray(10, 40), createGenericArray(12, 'hello world'));

// Set Multiples variable at a same time

// function pair<T, U>(param1: T, param2: U): [T, U] {
//   return [param1, param2];
// }
// let res = pair<number, string>(123, 'hello world');
// console.log(res);

type Student_tc = {
  name: string;
  age: number;
};
let ram: Student_tc = {
  name: 'ram',
  age: 24,
};
// function printName<T extends { name: string }>(input: T): void {
//   console.log(input.name);
// }
// printName(ram);
// ! Fetch Api
import { z } from 'zod';
const url_fetch = 'https://www.course-api.com/react-tours-project';
const tourSchema = z.object({
  id: z.string(),
  name: z.string(),
  info: z.string(),
  image: z.string(),
  price: z.string(),
});
// type Tour = {
//   id: string;
//   name: string;
//   info: string;
//   image: string;
//   price: string;
// };
type Tour = z.infer<typeof tourSchema>;
async function someFetchFunction(url: string): Promise<Tour[]> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const rawData: Tour[] = await response.json();
    const result = tourSchema.array().safeParse(rawData);
    if (!result.success) {
      throw new Error(`Invalid Data ${result.error}`);
    }
    return result.data;
  } catch (error) {
    const errorMsg =
      error instanceof Error ? error.message : 'there was some error...';
    console.log(errorMsg);
    return [];
  }
}

// const tours: Tour[] = await someFetchFunction(url_fetch);

// tours.map((tour: Tour): void => {
//   console.log(tour.name);
// });

// ! Classes
class Book_Classes_In_TypeScript {
  public readonly title: string;
  public author: string;
  private checkedOut: boolean = false;
  constructor(title: string, author: string) {
    this.title = title;
    this.author = author;
  }
  public checkOut() {
    this.checkedOut = true;
  }
  get info() {
    return `the title of the book is ${this.title}, and the author is ${this.author}
    `;
  }
}

// const deepWork2 = new Book_Classes_In_TypeScript('deep work', 'cal newport');
// deepWork2.checkOut();
// console.log(deepWork2);

interface IPerson {
  name: string;
  age: number;
  greet(): void;
}

class Person_cl implements IPerson {
  constructor(public name: string, public age: number) {}
  greet(): void {
    console.log(`Hello my name is ${this.name} and I'm ${this.age} years old`);
  }
}

// const person_l = new Person_cl('slim shady ', 65);
// console.log(person_l);
