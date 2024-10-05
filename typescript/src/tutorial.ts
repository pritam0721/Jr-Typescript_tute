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

let temperatures: number[] = [12, 22, 27, 45]

//! temperatures.push('hot');

let colors: string[] = ['red', 'green', 'orange']
// !colors.push(true);

let mixedArray: (number | string)[] = [1, 'two', 3]
//! mixedArray.push(true);

// * Objects in type script

let car: { brand: string; year: number } = { brand: 'toyota', year: 2023 }

car.brand = 'ford'

let book = { title: 'book', cost: 23 }
let pen = { title: 'pen', cost: 21 }
let noteBook = { title: 'noteBook' }

let items: { readonly title: string; cost?: number }[] = [book, pen, noteBook]

let bike: { brand: string; year: number } = { brand: 'yamaha', year: 2018 }
let laptop: { brand: string; year: number } = { brand: 'hp', year: 2019 }
let laptop2: { brand: string; year?: number } = { brand: 'hp' }

let products: { title: string; price?: number }[] = [
  { title: 'shirt', price: 24 },
  { title: 'pants' },
]

// * function on typescript

function calculateDiscount(price: number): number {
  return price * 0.9
}

let finalPrice = calculateDiscount(100)

// ! challenges

const names: string[] = ['john', 'susan', 'jim', 'jill', 'jane']

function isNameList(name: string): boolean {
  return names.includes(name)
}

let nameTocheck: string = 'anna'

// if (isNameList(nameTocheck)) {
//   console.log(`${nameTocheck} is in the list`);
// } else {
//   console.log(`${nameTocheck}, it is not in the list`);
// }

// * Optional and Default Parameters

function calculatePrice(price: number, discount?: number): number {
  return price - (discount || 0)
}

let priceAfterDiscount = calculatePrice(100)

// console.log(priceAfterDiscount);

// in this instance you don't have to do union when you returning just pass in the default value and when you call the function with or without the parameters

function calculateTotalScore(
  initialScore: number,
  penaltyPoints: number = 0
): number {
  return initialScore - penaltyPoints
}

let scoreAfterPenalty = calculateTotalScore(100, 60)
let scoreWithoutPenalty = calculateTotalScore(60)
// console.log(scoreAfterPenalty);
// console.log(scoreWithoutPenalty);

//* Rest Parameters

function sum(message: string, ...numbers: number[]): string {
  const double = numbers.map((number) => number * 2)
  // console.log(double);

  const total = numbers.reduce((prev, current) => {
    return prev + current
  }, 0)
  return `${message}${total}`
}

const ans = sum('the total is :', 1, 2, 3, 4, 5)
// console.log(ans);

//** Challenge - using union types as function parameter */

function processInput(variable: number | string): void {
  if (typeof variable === 'number') {
    let x: number = variable
    console.log(x * x)
  }
  if (typeof variable === 'string') {
    let x: string = variable.toUpperCase()
    console.log(x)
  }
}

// processInput('hello')

// ! Object as Parameter and Excess property type

function createEmployee({ id }: { id: number }): {
  id: number
  isActive: boolean
} {
  return { id, isActive: id % 2 === 0 }
}

// const first = createEmployee({id:1})
// const second = createEmployee({id:2})
// console.log(first,second);

// * alternative

function createStudent(student: { id: number; name: string }): void {
  console.log(
    `The roll no is ${student.id} and the name is ${student.name.toUpperCase()}`
  )
}

const newStudent = {
  id: 10,
  name: 'Pritam',
}

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
    return input * input
  } else {
    return config.reverse
      ? input.toUpperCase().split('').reverse().join('')
      : input.toUpperCase()
  }
}

// console.log(processData(10));
// console.log(processData('hello'));
// console.log(processData('hello',{reverse:true}));

// ! Type Alias
type User = { id: number; name: string; isActive: boolean }

const john: User = {
  id: 1,
  name: 'john',
  isActive: true,
}
const susan: User = {
  id: 1,
  name: 'susan',
  isActive: false,
}

function createUser(user: User): {
  id: number
  name: string
  isActive: boolean
} {
  console.log(`Hello there ${user.name.toUpperCase()} !!!`)

  return user
}

type Employee = {
  id: number
  name: string
  department: string
}

type Manager = {
  id: number
  name: string
  employees: Employee[]
}

type Staff = Employee | Manager

function printStaffDetails(staff: Staff) {
  if ('employees' in staff) {
    console.log(
      `${staff.name} is a manger of ${staff.employees.length} employees.`
    )
  } else {
    console.log(
      `${staff.name} is an employee in the department of ${staff.department}`
    )
  }
}

const alice: Employee = {
  id: 1,
  name: 'alice',
  department: 'cse',
}
const bob: Employee = {
  id: 2,
  name: 'bob',
  department: 'cse',
}
const sundar: Manager = {
  id: 1,
  name: 'sundar',
  employees: [alice, bob],
}

// printStaffDetails(alice)
// printStaffDetails(sundar)

type Book = { id: number; name: string; price: number }
type DiscountedBook = Book & { discount: number }
const book1: Book = {
  id: 2,
  name: 'How to Cook a Dragon',
  price: 15,
}
const book2: Book = {
  id: 3,
  name: 'The Secret Life of Unicorns',
  price: 15,
}
const book3: DiscountedBook = {
  id: 4,
  name: 'Gnomes vs. Goblins: The Ultimate Guide',
  price: 15,
  discount: 0.15,
}
// ! Type Alias - Computed Properties

const propName = 'age'

type Animal = {
  [propName]: number
}

let tiger: Animal = { [propName]: 5 }

// ! Interface Fundamentals

interface Booker {
  readonly isbn: number
  title: string
  author: string
  genre?: string
  // method
  printAuthor(): void
  printTitle(message: string): string
}

const deepWork: Booker = {
  isbn: 123,
  title: 'deepWork',
  author: 'cla newport',
  genre: 'self-help',
  printAuthor() {
    console.log(this.author)
  },
  printTitle(message) {
    return `${this.title}${message}`
  },
}
//  deepWork.printAuthor()
//  const r1 = deepWork.printTitle('is an awesome book')
//  console.log(r1);

// * Challenge
interface Computer {
  readonly id: number
  brand: string
  ram: number
  // methods
  upgradeRam(increase: number): number
  storage?: number
}

const apple_laptop: Computer = {
  id: 1,
  brand: 'Mac 23',
  ram: 8,
  upgradeRam(amount: number) {
    this.ram += amount
    return this.ram
  },
}
apple_laptop.storage = 256
apple_laptop.upgradeRam(8)
// console.log(apple_laptop.ram, apple_laptop.storage)

// ! interface merging , Extend , TypeGuard.

interface Person {
  name: string
  getDetails(): string
}

interface DogOwner {
  dogName: string
  getDogDetails(): string
}

// * merging

interface Person {
  age: number
}
const person1: Person = {
  name: 'john',
  age: 30,
  getDetails() {
    return `Name: ${this.name}, Age:${this.age}`
  },
}

interface Employee1 extends Person {
  employeeId: number
}
const aushoka: Employee1 = {
  name: 'aushoka',
  age: 23,
  employeeId: 123,
  getDetails() {
    return `Name: ${this.name}, Age:${this.age} and the employeeId is ${this.employeeId}`
  },
}
interface Manager1 extends Person, DogOwner {
  managePeople(): void
}

const manager: Manager1 = {
  name: 'Bob',
  age: 35,
  dogName: 'Rex',
  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}`
  },
  getDogDetails() {
    return `Dog Name: ${this.dogName}`
  },
  managePeople() {
    console.log('Managing people...')
  },
}
// console.log(aushoka)

interface Person2 {
  name: string
}

interface DogOwner1 extends Person2 {
  dogName: string
}
interface Manager2 extends Person2, DogOwner1 {
  managePeople(): void
  delegateTask(): void
}

const employee123: Person2 | DogOwner1 | Manager2 = getEmployee()
// console.log(employee123)

function getEmployee(): Person2 | DogOwner1 | Manager2 {
  const random = Math.random()
  if (random < 0.33) {
    return {
      name: 'john',
    }
  } else if (random < 0.66) {
    return {
      name: 'anna',
      dogName: 'rex',
    }
  } else {
    return {
      name: 'bob',
      managePeople: () => console.log('Managing People ....'),
      delegateTask: () => console.log('Delegating the task .... '),
    }
  }
}
function isManager(obj: Person2 | DogOwner1 | Manager2): obj is Manager2 {
  return 'managePeople' in obj
}
if (isManager(employee123)) {
  employee123.delegateTask()
}
// ! Tuples and Enums
let person_john: [string, number] = ['john', 34]
let person_john1: [string, number?] = ['john']

function tuplesGetPerson(): [string, number] {
  return person_john
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
  result: ServerResponseStatus
  data: string[]
}

function getServerResponse(): ServerResponse {
  return {
    result: ServerResponseStatus.Success,
    data: ['first time', 'second time'],
  }
}

// const res: ServerResponse = getServerResponse()
// console.log(res)
enum UserRole {
  Admin,
  Enum_Manager,
  Enum_Employee,
}
type Enum_User = {
  id: number
  name: string
  role: UserRole
  contact: [string, number]
}

function createEnumUser(user: Enum_User): Enum_User {
  return user
}
const x: Enum_User = {
  id: 123,
  name: 'santos',
  role: UserRole.Admin,
  contact: ['test@test.com', 90835667],
}
const a = createEnumUser(x)
console.log(a)
