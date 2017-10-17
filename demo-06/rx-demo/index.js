const Rx = require("rxjs");
// const fetch = require('node-fetch')

const data = [1, 2, 3, 4];

// data.forEach(n => console.log(n));

// Rx.Observable.from(data)
//     .do(n => console.log(n))
//     .subscribe()

// Rx.Observable
//   .interval(1000)
//   .take(10)
//   .filter(n => n % 2 === 0)
//   .map(n => ({x: n}))
//   .subscribe(
//       console.log,
//       console.error,
//       () => console.log("All done"));

// var stream = new Rx.Observable(subscriber => {
//   var counter = 0;
//   setInterval(() => subscriber.next(new Date().toLocaleTimeString()), 1000);
//   subscriber.next({ firstName: "Maurice" });
//   setTimeout(() => subscriber.complete(), 4000);
// });

// stream.subscribe(console.log, console.error, () => console.log("All done"));

// setTimeout(() => stream.subscribe(console.log, console.error, () => console.log("All done")), 2000);

// fetch("http://google.com")
//   .then(rsp => rsp.json())
//   .then(console.log);

// const createPromise = () =>
//   new Promise(resolve => {
//       console.log('IN promise')
//     setTimeout(() => {
//         console.log('Resolve')
//         return resolve(42)
//     }, 2000);
//   });

// Rx.Observable
//   .interval(1000)
//   .do(e => console.log('Before ', e))
//   .switchMap(() => createPromise())
//   .do(e => console.log('After ', e))
//   .subscribe(console.log)

// createPromise().then(console.log)

Rx.Observable
  .from(data)
  .scan((p, c) => p.concat(c), [])
  .takeLast(1)
  .subscribe(console.log);
