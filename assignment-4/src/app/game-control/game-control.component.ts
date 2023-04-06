import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() gameStarted = new EventEmitter<number>();
  
  num = 0;
  counting;

  onStartGame(){
    this.counting = setInterval( () => {
      this.gameStarted.emit(this.num + 1);
      this.num++;
    }, 1000);
  }
      
  onStopGame(){
    clearInterval(this.counting);
  }
}
