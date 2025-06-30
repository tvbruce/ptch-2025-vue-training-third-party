// This file is part of the Helps library.
export const PI = 3.141592653589793

// This file contains basic mathematical functions.
export function add(a: number, b: number) {
  return a + b
}

// This file contains basic mathematical functions.
export function multiply(a: number, b: number) {
  return a * b
}

// This file contains basic mathematical functions.
export function subtract(a: number, b: number) {
  return a - b
}

// This file contains basic mathematical functions.
export function divide(a: number, b: number) {
  if (b === 0) {
    throw new Error('Cannot divide by zero')
  }
  return a / b
}

// This file contains basic mathematical functions.
export function square(a: number) {
  return a * a
}

// This file contains basic mathematical functions.
export function squareRoot(a: number) {
  if (a < 0) {
    throw new Error('Cannot take square root of a negative number')
  }
  return Math.sqrt(a)
}

// This file contains basic mathematical functions.
export function convertToRadians(degrees: number) {
  return degrees * (PI / 180)
}
