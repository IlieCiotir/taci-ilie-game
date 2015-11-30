import {Component, bootstrap} from 'angular2/angular2';
import {Game} from './components/game/game';

@Component({
  selector: 'taci-ilie-app',
  providers: [],
  templateUrl: 'app/taci-ilie.html',
  directives: [Game],
  pipes: []
})
export class TaciIlieApp {

  constructor() {}

}
