//Q1 Write a JavaScript function that takes an array of temperatures in Celsius and uses the `map` method to convert each temperature to Fahrenheit using the formula `(Celsius * 9/5) + 32`. Return a new array containing the converted temperatures.
function convertToFahtrenheit(temperaturesCelsius) {
    const temperaturesFahrenheit = temperaturesCelsius.map(celsius => (celsius * 9/5) + 32);
    return temperaturesFahrenheit;
  }
  const celsiusTemperatures = [0, 10, 20, 30, 40];
  const fahrenheitTemperatures = convertToFahtrenheit(celsiusTemperatures);
  console.log(fahrenheitTemperatures)
  
  
  //Q2 Write a JavaScript function that takes an array of expenses and uses the `reduce` method to calculate the total amount spent. Return the total amount.
  function calculateTotalExpenses(expenses) {
    const totalExpenses = expenses.reduce((acc, expense) => acc + expense, 0);
    return totalExpenses;
  }
  const expenses = [100, 200, 300, 400, 500];
  const totalExpenses = calculateTotalExpenses(expenses);
  console.log(totalExpenses);
  
  
  // Q3 Write a JavaScript function that takes an array of test scores and uses the `filter` method to return a new array containing only the passing scores (scores greater than or equal to 60). Return the new array.
  function getpassingScores(scores) {
    const passingScores = scores.filter(score => score >= 60);
    return passingScores;
  }
  const scores = [50, 60, 70, 80, 90, 100];
  const passingScores = getpassingScores(scores);
  console.log(passingScores);
  
  
  
  // Q4 Write a JavaScript function that takes an array of names and uses the `forEach` method to log each name to the console.
  function logNames(names) {
    names.forEach(name => console.log(name));
  }
  const names = ["John", "Jane", "Bob", "Alice"];
  logNames(names);
  
  
  
  // Q5 Write a JavaScript function that takes an array of numbers and uses the `sort` method to sort the numbers in ascending order. Return the sorted array.
  function sortNumbers(numbers) {
    const sortedNumbers = numbers.sort((a, b) => a - b);
    return sortedNumbers;
  }
  const numbers = [5, 2, 8, 1, 9, 4];
  const sortedNumbers = sortNumbers(numbers);
  console.log(sortedNumbers);
  
  
  
  
  // Q6 Write a JavaScript function that takes an array of zeros and uses the `fill` method to fill the array with a specified value. Return the modified array.
  function fillArray(array, value) {
    const modifiedArray = array.fill(value);
    return modifiedArray;
  }
  const array = [0, 1, 2, 3, 4, 5];
  const modifiedArray = fillArray(array, 6);
  console.log(modifiedArray);
  
  
  
  
  // Q7 Write a JavaScript function that takes an array of test scores and uses the `every` method to check if all the scores are passing (scores greater than or equal to 60). Return `true` if all scores are passing, otherwise `false`.
    function allScoresPassing(scores) {
      return scores.every(score => score >= 60);
    }
    const testScores = [85, 70, 90, 65];
    const allPassing = allScoresPassing(testScores);
    console.log(allPassing); 
  
    const mixedScores = [85, 50, 70, 90, 55];
    const allPassingMixed = allScoresPassing(mixedScores);
    console.log(allPassingMixed); 
  
  
  
  
  // Q8 Write a JavaScript function that takes an array containing nested arrays and uses the `flat` method to flatten the array (remove nesting). Return a single-level array.
  function flattenArray(nestedArray) {
    return nestedArray.flat();
  }
  
  
//   const nestedArray = [1, [2, 3], [4, [5, 6]]];
  const flattened = flattenArray(nestedArray);
  console.log(flattened); 
  
  
  
  // Q9 Write a JavaScript function that takes an array of words and uses the `flatMap` method to split each word into its individual characters and return a single-level array of characters.
  function splitWords(words) {
    return words.flatMap(word => word.split(''));
  }
  const words = ['hello', 'world'];
  const characters = splitWords(words);
  console.log(characters);
  
  
  
  // Q10 Write a JavaScript function that takes an array of objects representing books and uses the `find` method to find and return the book with a specific title.
  function findBookByTitle(books, title) {
    return books.find(book => book.title === title);
  }
  const books = [
    { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
    { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    { title: '1984', author: 'George Orwell' },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' }
  ];
  
  const bookTitle = '1984';
  const foundBook = findBookByTitle(books, bookTitle);
  console.log(foundBook);
  
  
  
  // Q11 Write a JavaScript function that takes an array of strings representing colors and uses the `findIndex` method to find and return the index of a specific color in the array.
  function findColorIndex(colors, color) {
    return colors.findIndex(c => c === color);
  }
  const colors = ['red', 'blue', 'green', 'yellow'];
  const colorIndex = findColorIndex(colors, 'blue');
  console.log(colorIndex); 
  
  
  
  //Q12 Write a JavaScript function that takes an array of numbers and uses the `map` method to calculate the square of each number. Return a new array containing the squared values.
  function squareNumbers(numbers) {
    const squaredNumbers = numbers.map(number => number * number);
    return squaredNumbers;
  }
//   const numbersArray = [1, 2, 3, 4, 5];
  const squaredArray = squareNumbers(numbersArray);
  console.log(squaredArray);
  
  
  
  // Q13 Write a JavaScript function that takes an array of full names and uses the `map` method to extract and return an array of first names.
  function extractFirstNames(fullNames) {
    const firstNames = fullNames.map(name => name.split(' ')[0]);
    return firstNames;
  }
  const fullNames = ['John Doe', 'Jane Doe', 'Bob Smith'];
  const firstNames = extractFirstNames(fullNames);
  console.log(firstNames);
  
  
  
  // Q14 Write a JavaScript function that takes an array of numbers and uses the `reduce` method to calculate the product of all the numbers. Return the product.
  function calculateProduct(numbers) {
    const product = numbers.reduce((acc, num) => acc * num, 1);
    return product;
  }
  const numbersarry = [1, 2, 3, 4, 5];
  const product = calculateProduct(numbers);
  console.log(product);
  
  
  
  
  //  Q15 Write a JavaScript function that takes an array containing nested arrays and uses the `reduce` method to flatten the array (remove nesting). Return a single-level array.
  function flatten(arr) {
    return arr.reduce((acc, item) => acc.concat(Array.isArray(item) ? flatten(item) : item), []);
  }
  const nestedArray = [1, [2, 3], [4, [5, 6]]];
  const flattenedArray = flatten(nestedArray);
  
  console.log(flattenedArray); 
  
  
  
  // Q16 Write a JavaScript function that takes an array of words and uses the `filter` method to return a new array containing only the palindromic words (words that read the same forwards and backwards).
  function filterPalindromes(words) {
    return words.filter(word => {
      const reversed = word.split('').reverse().join('');
      return word === reversed;
    });
  }
  const wordArray = ['level', 'hello', 'radar', 'world', 'noon'];
  const palindromes = filterPalindromes(wordArray);
  console.log(palindromes);
  
  
  // Q17 Write a JavaScript function that takes an array of numbers and uses the `filter` method to return a new array containing only the unique numbers (remove duplicates).
  function filterUnique(numbers) {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
  }
  const numberArray = [1, 2, 3, 4, 5, 1, 2, 3, 4, 5];
  const uniqueArray = filterUnique(numberArray);
  console.log(uniqueArray);
  
  
  
  
  // Q18 Write a JavaScript function that takes an array of numbers and uses the `forEach` method to calculate the sum of all the numbers. Log the sum to the console.
    function calculateSum(numbers) {
      let sum = 0;
      numbers.forEach(number => {
        sum += number;
      });
      console.log('The sum is:', sum);
    }
    // const numbersArray = [1, 2, 3, 4, 5];
    calculateSum(numbersArray);
  
  
  
  
  //Q19 Write a JavaScript function that takes an array of numbers and uses the `forEach` method to display (console.log) only the even numbers
  function displayEvenNumbers(numbers) {
    numbers.forEach(number => {
      if (number % 2 === 0) {
        console.log(number);
      }
    });
  }
  const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  displayEvenNumbers(numbersArray);
  
  
  
  
  
  // Q20 Write a JavaScript function that takes an array of strings and uses the `sort` method to sort the strings in alphabetical order. Return the sorted array
  function sortStringsAlphabetically(strings) {
    const sortedArray = strings.slice().sort();
    return sortedArray;
  }
  const unsortedStrings = ['banana', 'apple', 'orange', 'grape'];
  const sortedStrings = sortStringsAlphabetically(unsortedStrings);
  console.log(sortedStrings);
  
  
  
  // Q21 Write a JavaScript function that takes an array of objects representing people with `name` and `age` properties, and uses the `sort` method to sort the objects by age in ascending order. Return the sorted array.
  
    function sortByAge(people) {
      const sortedPeople = people.slice().sort((a, b) => a.age - b.age);
      return sortedPeople;
    }
    const peopleArray = [
      { name: 'Alice', age: 30 },
      { name: 'Bob', age: 25 },
      { name: 'Charlie', age: 35 },
      { name: 'David', age: 20 }
    ];
    const sortedByAge = sortByAge(peopleArray);
    console.log(sortedByAge);
    
  
  
  
  
  
  
    
  
  
   
  
  
  
      
  
  
  