import { ISortable } from './ISortable';

export class NumberGroup implements ISortable {
  constructor(data: number[]) {
    this.data = data;
  }

  data: number[];

  get length(): number {
    return this.data.length;
  };

  compare(leftPos: number, rightPos: number): boolean {
    // Implement this part yourself
    if (this.data[leftPos] > this.data[rightPos]){
      return true;
    } else {
      return false;
    }
  }

  swap(left: number, right: number): void {
    // Implement this part yourself
    let tempLeft = this.data[left];
    this.data[left] = this.data[right];
    this.data[right] = tempLeft; 
  }
}
