import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reduce',
  //pure: false => not pure function will re-render
  //pure: true => pure function will be memoized //DEFAULT
})
export class ReducePipe<T> implements PipeTransform {
  transform(value: any, ...args: any[]) {
    throw new Error('Method not implemented.');
  }
  // transform(array: T[], reduceFn(acc: any, curr: T) => any, initialValue: T): unknown {
  //   return array.reduce(reduceFn, initialValue);
  // }
}
