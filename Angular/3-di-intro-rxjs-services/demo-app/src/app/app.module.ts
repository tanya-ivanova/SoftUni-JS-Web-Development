import { NgModule, Provider, InjectionToken, Injectable } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';

@Injectable({
  providedIn: 'root'
})
export class MyClass {
  constructor() {
    console.log('Nameless class was constructed');
  }
}

export const myCustomToken = new InjectionToken('Test');

// const myProvider: Provider = {
//   //useValue: 123,
//   // useClass: class MyClass {
//   //   constructor() {
//   //     console.log('Nameless class was constructed');
//   //   }
//   // },
//   // provide: 'Test'
//   provide: myCustomToken,

//   useClass: MyClass,
//   //provide: MyClass
// }

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    // myProvider,
    // MyClass
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
