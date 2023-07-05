import { Observable, map } from 'rxjs';

const p = new Promise((resolve, reject) => {
    console.log('from Promise invoked');
  
    setTimeout(() => {
      resolve(1200);
    }, 4000);
  });
  
  p.then((data) => console.log('promise', data));
  
  //async analogy Promise
  Promise.resolve(100)
    .then((d) => d * 1.2)
    .then((x) => console.log(x));
  
  //sync analogy Promise
  [1].map((x) => x * 2).map((x) => x * 10);
  
  //sync analogy Observable
  [1, 2, 3, 4].map((x) => x * 2).map((x) => x * 10);
  
  //async analogy Observable
  // const obs = new Observable((observer) => {
  //   // observer.next(1000);
  //   // observer.next(2000);
  //   // observer.next(3000);
  
  //   let counter = 0;
  //   const timer = setInterval(() => {
  //     observer.next(counter++);
  //   }, 2000);
  
  //   //this code is invoked on destroy
  //   return () => {
  //     clearInterval(timer);
  //   }  
  // });
  
  function inteval(intervalValue: number) {
    return new Observable<number>((observer) => {   
    
      let counter = 0;
      const timer = setInterval(() => {
        observer.next(counter++);
      }, intervalValue);
    
      //this code is invoked on destroy
      return () => {
        clearInterval(timer);
      }  
    });
  }
  
  const stream$ = inteval(3000).subscribe(data => {
    console.log('data from observer', data);
  });
  
  const stream2$ = inteval(3000).pipe(map((x) => x * 2)); //transfor, filter, accumulate
  
  setTimeout(() => {
    stream2$.subscribe({
      next: (x) => console.log('data', x),
      error: (err) => console.error(`Error occured: ${err}`),
      complete: () => console.log('Stream has been completed')
    });
  }, 3000);