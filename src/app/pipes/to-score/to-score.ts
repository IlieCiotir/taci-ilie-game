import {Pipe} from 'angular2/angular2';


@Pipe({
  name: 'ToScore'
})
export class ToScore {
  private over9000Value:number = 100;
  private lastValue:number = 0;
  
  transform(value: number,  args?) {
    let [gameOn] =args;
    
    if(gameOn) {
      this.lastValue = value;
    }
    
    return this.lastValue < this.over9000Value ? "over 9000" : 10000 - this.lastValue;
  }

}