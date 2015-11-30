import {Component} from 'angular2/angular2';
import {ToScore} from '../../pipes/to-score/to-score';

@Component({
  selector: 'game',
  templateUrl: 'app/components/game/game.html',
  styleUrls: ['app/components/game/game.css'],
  providers: [],
  directives: [],
  pipes: [ToScore]
})
export class Game {
  private rotate:number = 0;
  private intervalHandle: number;
  private gameOn: boolean = false;
  private stoping: boolean = false;
  
  constructor() {
  }
  
  public startGame(): void {
    this.gameOn = true;
    this.stoping = false;
    
    this.intervalHandle = setInterval(() => this.gameTick(), 10);
  }
  
  public stopGame():void {
    if(!this.stoping) {
      this.stoping = true;
      let stopTime = this.rotate + Math.floor(Math.random() * 5000) + 1;

      setTimeout(() => {
        clearInterval(this.intervalHandle);
        this.gameOn = false
        this.rotate = 0;
      }, stopTime);
    }
  }
  
  private gameTick(): void {
    this.rotate++;
  }
}