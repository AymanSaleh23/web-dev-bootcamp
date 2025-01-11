// let dataSet = [1];

// for (let iterato = 0; iterato < 4; iterato++) {
//     dataIntered = prompt("Enter Nums:")
//     interations = parseInt(dataIntered)

//     for (let i = 1; i < interations; i++) {
//         console.log((i * 1.2 * dataSet[i - 1]));
//         dataSet[i] = i * 1.2 * dataSet[i - 1];
//     }
//     for (let i = 0; i < interations; i++) {
//         console.log(dataSet[i]);
//     }
// }


// let arr = [0]
// arr[99] = 0
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = 12 * i;
// }
// for (let i of arr) {
//     console.log(i)
// }

// function add(num1, num2) {
//     return num1 + num2;
// }
// function sub(num1, num2) {
//     return num1 - num2;
// }
// function mul(num1, num2) {
//     return num1 * num2;
// }
// function div(num1, num2) {
//     if (num2 > 0) {
//         return num1 / num2;
//     }
//     else {
//         return false;
//     }
// }
// function exp(base, power) {
//     return base ** power;
// }


// function calculatorManager(num1, num2, operation) {
//     if (typeof (num1) !== 'number' || typeof (num2) !== 'number' || operation.length != 1) {
//         return false;
//     }
//     else {
//         console.log("parameters accepted");
//         let result = '';
//         switch (operation) {
//             case '+': console.log("add. "); result = add(num1, num2); break;
//             case '-': console.log("sub. "); result = sub(num1, num2); break;
//             case '*': console.log("mul. "); result = mul(num1, num2); break;
//             case '/': console.log("div. "); result = div(num1, num2); break;
//             case 'e': console.log("exp. "); result = exp(num1, num2); break;
//             default: return "opeartion not supported"; break;
//         }
//         console.log(result)
//     }
// }


// let varScope = "Hi there,"
// function greeting() {
//     console.log("before update." + varScope);
//     let varScope = "CHanged";
//     console.log("after update." + varScope);
// }
// console.log("before call." + varScope);
// greeting();
// console.log("after call." + varScope);


// let varHoldsFuncExpr = function (val1) {
//     console.log("Hi");
//     return val1;
// }
// varHoldsFuncExpr();


// let varHoldHigherOrderFunc = function () {
//     let innerFunc = function () {
//         console.log("@ innerFunc()");
//     }
//     innerFunc();
//     console.log("@ varHoldHigherOrderFunc()");
// }
// varHoldHigherOrderFunc();


// function add() {
//     console.log("@ADD");
// }
// function funcAsArrgument(funcAttr) {
//     funcAttr();
// }
// funcAsArrgument(add);


// let retFuncAsValue = function (min, max) {
//     return function (num) {
//         return num > min && num < max;
//     }
// }
// let inRange = retFuncAsValue(0, 100);

// let myCusotmObj = {
//     PI: 3.14,
//     add: function (a, b) {
//         return a + b;
//     },
//     sub: function (a, b) {
//         return a - b;
//     },
//     mul: function (a, b) {
//         return a * b;
//     },
//     power: function (a, b) {
//         return a ** b;
//     }
// };
// let myCusotmObj2 = {
//     PI: 3.14,
//     shortHandAdd(a, b) {
//         return a + b;
//     },
//     shortHandSub(a, b) {
//         return a - b;
//     },
//     shortHandMul(a, b) {
//         return a * b;
//     },
//     shortHandPower(a, b) {
//         return a ** b;
//     },
//     shortHandSquare(a) {
//         return this.shortHandMul(a, a);
//     }
// };

// console.log("PI:" + myCusotmObj.PI)
// console.log("add:" + myCusotmObj.add(1, 2))
// console.log("sub:" + myCusotmObj.sub(4, 1))
// console.log("mul:" + myCusotmObj.mul(3, 5))
// console.log("power:" + myCusotmObj.power(2, 6))

// console.log("PI:" + myCusotmObj2.PI)
// console.log("shortHand add:" + myCusotmObj2.shortHandAdd(1, 2))
// console.log("shortHand sub:" + myCusotmObj2.shortHandSub(4, 1))
// console.log("shortHand mul:" + myCusotmObj2.shortHandMul(3, 5))
// console.log("shortHand power:" + myCusotmObj2.shortHandPower(2, 6))
// console.log("shortHand Square:" + myCusotmObj2.shortHandSquare(6))

// animalScheme = {
//     fristName: '',
//     lastName: '',
//     sound: '',
//     behvior() {
//         console.log(`${this.fristName} says to his father ${this.lastName} a ${this.sound}`);
//     }
// }

// cat = animalScheme.behvior;
// cat.fristName = "loly";
// cat.lastName = "Pop";
// cat.sound = 'Meow';

// let listOfItems = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, -2, 8, 67, 54, 1, 4, 54, 43]
// let listOfMovies = [
//     { title: 'Game of gumpling', score: 80 },
//     { title: 'Game of throns', score: 94 },
//     { title: 'Night at the muesuem II', score: 85 },
//     { title: 'Iron Man I', score: 83 },
// ];

// listOfItems.forEach(
//     function (element) {
//         if ((element % 2)) {
//             console.log(element * element);
//         }
//     }
// );

// listOfMovies.forEach(function (movie) {
//     console.log(`Movie Title:${movie.title}, Movie Score ${movie.score}/10 `);
// });

// mappedItems = listOfItems.map(function (elem) {
//     return elem * 2;
// });
// mappedObjItemsTitles = listOfMovies.map(function (elem) {
//     return elem.title;
// });
// mappedObjItemsScores = listOfMovies.map(function (elem) {
//     return elem.score;
// });

// console.log(mappedItems)
// console.log(mappedObjItemsTitles)
// console.log(mappedObjItemsScores)

// let arrowFuncHolder = (x, y) => {
//     return x + y;
// }

// console.log(arrowFuncHolder(1, 5))

// let arrowFuncHolderImplicitReturn = (x, y) => (
//     x * y
// );
// console.log(arrowFuncHolderImplicitReturn(4, 5))

// let arrowFuncHolderImplicitReturnSingleLineFunc = (x, y) => x ** y;
// console.log(arrowFuncHolderImplicitReturnSingleLineFunc(4, 5))

// mappedObjItemsFull = listOfMovies.map(function (elem) {
//     return `${elem.title} - ${elem.score * 100}`;
// });

// mappedObjItemsFull2 = listOfMovies.map((elem) => {
//     return `${elem.title} - ${elem.score / 10}`;
// });

// mappedObjItemsFull3 = listOfMovies.map(elem => {
//     return `${elem.title} - ${elem.score / 10}`;
// });

// mappedObjItemsFull4 = listOfMovies.map(elem => (`${elem.title} - ${elem.score / 10}`));


// let intervalID = setInterval(() => { console.log(Math.floor(Math.random() * 10) + 1) }, 1000)

// // filteredObjs = listOfMovies.filter((movies) => (movies.score > 80))
// filteredObjsTitles = listOfMovies
//     .filter((movies) => (movies.score > 80))
//     .map((elem) => (elem.title))
// filteredObjsScores = listOfMovies
//     .filter((movies) => (movies.score > 80))
//     .map((elem) => (elem.score))

// let listOfBooks = [
//     { title: 'The 5 Love Languages', pages: 208, author: 'Gary Chapman', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Attached: The New Science of Adult Attachment', pages: 304, author: 'Amir Levine and Rachel Heller', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Men Are from Mars, Women Are from Venus', pages: 368, author: 'John Gray', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Hold Me Tight', pages: 320, author: 'Dr. Sue Johnson', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Getting the Love You Want', pages: 384, author: 'Harville Hendrix', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'The Seven Principles for Making Marriage Work', pages: 320, author: 'John Gottman and Nan Silver', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Mating in Captivity', pages: 272, author: 'Esther Perel', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Boundaries in Marriage', pages: 208, author: 'Dr. Henry Cloud and Dr. John Townsend', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Nonviolent Communication: A Language of Life', pages: 280, author: 'Marshall B. Rosenberg', rating: Math.floor(Math.random() * 100) + 1 },
//     { title: 'Modern Love', pages: 288, author: 'Daniel Jones', rating: Math.floor(Math.random() * 100) + 1 }
// ];

// reviewingBooksByPages = listOfBooks.map((item) => (item.pages))
// reviewingBooksByAuther = listOfBooks.map((item) => (item.author))
// reviewingBooksByTitle = listOfBooks.map((item) => (item.title))
// MappingBooksByRating = listOfBooks.map((item) => (item.rating))
// MappingBooksByPage = listOfBooks.map((item) => (item.pages))

// console.log(reviewingBooksByPages)
// console.log(reviewingBooksByAuther)
// console.log(reviewingBooksByTitle)
// console.log(MappingBooksByRating)
// console.log(MappingBooksByPage)

// reduceTotalPages = listOfBooks
//     .map((element) => (element.pages))
//     .reduce((total, item) => {
//         return total + item;
//     });

// filterTotalPages = listOfBooks
//     .map((element) => (element.pages))
//     .filter((item) => (item > 290));

// try {
//     reduceTotalPagesRating = listOfBooks
//         .map((element) => ({ pages: element.pages, rate: element.rating }))
//         .filter((element) => (element.rate > 70))
//         .map((ratedPassed) => (ratedPassed.pages))
//         .reduce((total, item) => (total + item));
//     console.log(reduceTotalPagesRating)
// }
// catch (e) {
//     console.log(`exeption occured ${e}`)
// }

// maxRating = listOfBooks
//     .map((i) => (i.rating))
//     .reduce((acc, i) => {
//         if (i > acc) {
//             acc = i;
//         }
//         return acc;
//     })
// minRating = listOfBooks
//     .map((i) => (i.rating))
//     .reduce((acc, i) => {
//         if (i < acc) {
//             acc = i;
//         }
//         return acc;
//     })
// console.log(minRating, maxRating)

// minPages = listOfBooks
//     .map((i) => (i.pages))
//     .reduce((acc, i) => {
//         if (i < acc) {
//             acc = i;
//         }
//         return acc;
//     })
// maxPages = listOfBooks
//     .map((i) => (i.pages))
//     .reduce((acc, i) => {
//         if (i > acc) {
//             acc = i;
//         }
//         return acc;
//     })
// console.log(minPages, maxPages)

// Book = {
//     title: 'Book Title',
//     pages: 420,
//     rate: 0.92,
//     auther: 'Antony Kueen',
//     autherBehaveFuncExprsion: function () {
//         console.log(`this auther ${this.auther} wrote this book ${this.title}`)
//     },
//     autherBehaveArrowFuncExprsion: function () {
//         console.log(`this auther ${this.auther} wrote this book ${this.title}`)
//     },
//     shouBookLog: function () {
//         setTimeout(
//             () => {
//                 this.autherBehaveArrowFuncExprsion();
//             }, 1000);
//     }
// }

// nums1 = [12, 3, 4, 23, 5, 6, 7, 7, 5, 4, 3, 23, 54, 56, 78, 45, 23, 23]
// nums2 = [4, 3, 23, 54, 56, 78, 45, 23, 23]

// //Spread Items in List/Objects
// combinedNums = [...nums1, ...nums2]

// //REST arguments
// function sum(...items) {
//     return items.reduce((acc, elem) => (acc + elem));
// }
// function Board(gold, silver, bronze, ...items) {
//     console.log(`GOLD: ${gold},\n SILVER: ${silver},\n BRONZE: ${bronze},\n ELSE: ${items}`)
// }

// //Destructure From List/Array
// let listOfValues = [112, 4, 56453, 12375, 787, 23, 54]
// let [elemnt1, elemnt2] = listOfValues
// let [elemnt3, elemnt4, ...anyAlse] = listOfValues

//Destrucutre from Objects
// let objectOfAnyThing = [
//     { metaData: 'any meta data1', names: 'any Name1', nums: 12, age: 35, books: 1 },
//     { metaData: 'any meta data2', names: 'any Name2', nums: 12, age: 36, books: 2 },
//     { metaData: 'any meta data3', names: 'any Name3', nums: 12, age: 37, books: 3 },
//     { metaData: 'any meta data4', names: 'any Name4', nums: 12, age: 38, books: 4 },
//     { metaData: 'any meta data5', names: 'any Name5', nums: 12, age: 39, books: 5 },
//     { metaData: 'any meta data6', names: 'any Name6', nums: 12, age: 40, books: 6 }
// ];

// for (element of objectOfAnyThing) {
//     let { names, age } = element; // {'any Name', 35}
//     let { metaData: meta, books: wrotenBooks } = element; // {'any meta data1', 1}
//     console.log(names, age);
//     console.log(meta, wrotenBooks);

// }

// let names = objectOfAnyThing.map((item) => (item.names))
// let ages = objectOfAnyThing
//     .filter((item) => (item.age > 37))
//     .map((item) => (item.names))
//     .forEach((itemNames) => (console.log(itemNames)))

// let oneObj = { metaData: 'any meta data6', names: 'any Name6', nums: 12, age: 40, books: 6 };
// let { notfoundkey = "NULLTANITA", age: ageanita } = oneObj;

//Destructure with Arguments
// let objectAsArgument = { firstName: 'Firsta', lastName: 'Lasta', age: 23, DOB: 2000 };
// function getFullName1(object) {
//     let { firstName, lastName } = object;
//     console.log(firstName, lastName)
// }
// function getFullName2({ firstName, lastName }) {
//     console.log(firstName, lastName)
// }
// function getFullName3({ firstName = 'Default First Name', lastName = 'Default Last Name' }) {
//     console.log(firstName, lastName)
// }

// getFullName1(objectAsArgument)
// getFullName2(objectAsArgument)
// getFullName3({ age: 23 })
let listOfBooks = [
    { title: 'The 5 Love Languages', pages: 208, author: 'Gary Chapman', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Attached: The New Science of Adult Attachment', pages: 304, author: 'Amir Levine and Rachel Heller', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Men Are from Mars, Women Are from Venus', pages: 368, author: 'John Gray', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Hold Me Tight', pages: 320, author: 'Dr. Sue Johnson', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Getting the Love You Want', pages: 384, author: 'Harville Hendrix', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'The Seven Principles for Making Marriage Work', pages: 320, author: 'John Gottman and Nan Silver', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Mating in Captivity', pages: 272, author: 'Esther Perel', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Boundaries in Marriage', pages: 208, author: 'Dr. Henry Cloud and Dr. John Townsend', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Nonviolent Communication: A Language of Life', pages: 280, author: 'Marshall B. Rosenberg', rating: Math.floor(Math.random() * 100) + 1 },
    { title: 'Modern Love', pages: 288, author: 'Daniel Jones', rating: Math.floor(Math.random() * 100) + 1 }
];

let highlyRated = listOfBooks.filter((item) => (item.rating > 90))
let highlyRatedDistruct = listOfBooks.filter(({ rating }) => (rating > 90))
console.log(highlyRated)
console.log(highlyRatedDistruct)
console.log(highlyRated.map(({ title }) => (title)))
console.log(highlyRatedDistruct.map(({ title }) => (title)))