// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>Algorithm challenge 5</h1>`;

function adjacentElementsProduct(inputArray: number[]): number {
  let prod = inputArray[0] * inputArray[1];
  for (let i = 1; i < inputArray.length - 1; i++) {
    const product = inputArray[i] * inputArray[i + 1];
    if (prod < product) {
      prod = product;
    } else {
      prod;
    }
  }
  return prod;

}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3,]));