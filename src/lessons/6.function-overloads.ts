// overload signatures
function calculateArea(radius: number): number;
function calculateArea(length: number, width: number): number;

// implementation signature
function calculateArea(arg1: number, arg2?: number): number {
  if (arg2 === undefined) {
    return Math.PI * arg1 ** 2;
  }

  return arg1 * arg2;
}

const circleArea = calculateArea(5);
const rectangleArea = calculateArea(10, 4);

function sumNumbers(...args: number[]): number;
function sumNumbers(x: number[]): number;
function sumNumbers(...args: any[]): number {
  if (Array.isArray(args[0])) {
    return (args[0] as number[]).reduce((sum, num) => sum + num, 0);
  }

  return (args as number[]).reduce((sum, num) => sum + num, 0);
}

const sum1 = sumNumbers(1, 2, 3, 4);
const sum2 = sumNumbers([5, 10, 15]);

interface Person {
  id: number;
  firstName: string;
  lastName: string;
  address?: string;
}

const persons: Person[] = [
  { id: 1, firstName: 'John', lastName: 'Doe', address: '123 Main St' },
  { id: 2, firstName: 'Jane', lastName: 'Doe', address: '456 Oak Ave' },
  { id: 3, firstName: 'Alice', lastName: 'Smith', address: '789 Pine Rd' },
];

// overload signatures
function findPerson(personId: number): Person[];
function findPerson(firstName: string, lastName: string): Person[];
function findPerson(arg1: number | string, arg2?: string): Person[] {
  if (arg2 === undefined) {
    // Search by personId (arg1 is the ID)
    const person = persons.find((p) => p.id === arg1);
    return person ? [person] : [];
  } else {
    // Search by partial match on firstName and lastName
    return persons.filter(
      (p) =>
        p.firstName.toLowerCase().includes((arg1 as string).toLowerCase()) &&
        p.lastName.toLowerCase().includes(arg2.toLowerCase())
    );
  }
}

const personById = findPerson(1);
const personsByName = findPerson('John', 'Doe');
