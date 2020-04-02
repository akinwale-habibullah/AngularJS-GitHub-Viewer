// JavaScript Design Patterns common in AngularJS

/**
 * 1. Functions as Abstractions
 * We use the function, as a basis for Abstraction
 * We can pass functions around like any other variable
 */

// let work = function () {
//     console.log('working hard!');
// };

// let doWork = function (f) {
//     console.log('starting');

//     f();

//     console.log('end');
// };

// doWork(work);



/**
 * 2. Functions to build modules
 * Functions are useful abstractions in JS
 * But sometimes we need more for example: An object
 * that house both method and data
 * 
 * Module in CS: 
 * Some collection of components with features that you can put together to perform some job
 */

//  const createWorker = function() {

//     let task1 = () => {
//         console.log('task1')
//     };

//     let task2 = () => {
//         console.log('task2')
//     }

//     // revealing module pattern
//      return {
//         job1: task1,
//         job2: task2
//      };

//  };

//  let worker = createWorker();
//  worker.job1();
//  worker.job2();


/**
 * Functions to avoid global variables - IIFE
 * IIFE: Immediately Invoked Function Expression
 * 
 * Global variables are bad. They easily become source of bugs
 * JS is a dynamic language and its very easy to overrite an existing variable
 * 
 * Perform functions without introducing any variable to the global scope
 * 
 * Program is the only global variable below
 */

// (function () {
//     const createWorker = function () {

//         let task1 = () => {
//             console.log('task1')
//         };

//         let task2 = () => {
//             console.log('task2')
//         }

//         // revealing module pattern
//         return {
//             job1: task1,
//             job2: task2
//         };

//     };

//     let worker = createWorker();
//     worker.job1();
//     worker.job2();
// }());
