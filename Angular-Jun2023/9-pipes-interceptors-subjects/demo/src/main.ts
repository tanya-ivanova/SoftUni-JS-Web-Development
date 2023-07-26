import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { Observable, map, Subject, BehaviorSubject, ReplaySubject, AsyncSubject } from 'rxjs';


platformBrowserDynamic().bootstrapModule(AppModule)
    .catch(err => console.error(err));


// //Promise demo
// const p = new Promise((resolve) => {
//     resolve(100);
// });

// p.then(console.log);

// const o = new Observable<number>(obs => {
//     obs.next(1000);
//     obs.next(2000);
//     obs.next(3000);

//     obs.error(new Error('bad error here'));
// });

// o.pipe(map((num: number) => num + 1)).subscribe({
//     next: console.log,
//     error: (err) => console.error(`Error: ${err}`),
//     complete: () => console.log('Observable coompleted!')
// });

// function interval(delay: number, counter?: number) {
//     let count = 0;

//     return new Observable(obs => {
//         if(count === counter) {
//             obs.complete();
//             return;
//         }
//         const int = setInterval(() => {
//             obs.next(count++);
//         }, delay);

//         return () => {
//             clearInterval(int);
//         }
//     })
// }

// const subscription = interval(1000, 8).subscribe({
//     next: console.log,
//     error: (err) => console.error(`Error: ${err}`),
//     complete: () => console.log('Observable coompleted!')
// });

// setTimeout(() => {
//     subscription.unsubscribe();
// }, 3000)

// //SUBJECTS
// const subj$$ = new Subject();
// subj$$.subscribe({
//     next: console.log,
//     error: (err) => console.error(`Error: ${err}`),
//     complete: () => console.log('Observable coompleted!') 
// });

// subj$$.subscribe(console.log);  //A
// subj$$.next(123);  //A
// subj$$.subscribe(console.log); //B
// subj$$.subscribe(console.log); //C
// subj$$.next(400); //A, B, C

// setTimeout(() => {
//     subj$$.subscribe(console.log); //D
//     subj$$.next(100); //A, B, C, D
// }, 2000)

// //BEHAVIOR SUBJECTS
// const bSubj$$ = new BehaviorSubject(100);
// bSubj$$.subscribe((data) => console.log('Subscription 1', data));
// setTimeout(() => {
//     bSubj$$.next(200); 
//     bSubj$$.subscribe((data) => console.log('Subscription 2', data)); 

//     setTimeout(() => {
//         bSubj$$.next(300);
//         bSubj$$.subscribe((data) => console.log('Subscription 3', data));
//     }, 200)
// }, 2000)

// //REPLAY SUBJECT
// const rSubj$$ = new ReplaySubject(10);
// rSubj$$.next(1000);
// rSubj$$.subscribe((data) => console.log('Subscribe 1:', data));
// for (let index = 1; index <= 30; index++) {
//     rSubj$$.next(index);    
// }

// console.log('----------------');
// rSubj$$.subscribe((data) => console.log('Subscribe 2:', data));

// //ASYNC SUBJECTS
// const aSubj$$ = new AsyncSubject();
// aSubj$$.next(1);
// aSubj$$.next(2);
// aSubj$$.next(3);
// aSubj$$.subscribe((data) => console.log('Subscribe 1:', data));
// aSubj$$.next(5);
// aSubj$$.subscribe((data) => console.log('Subscribe 2:', data));
// aSubj$$.complete();