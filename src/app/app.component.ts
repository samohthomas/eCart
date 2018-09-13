import { Component,Input,OnChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnChanges {
  @Input() isHide : boolean = false;
  @Input() items : Array<Object> = [];
  title = 'mean-app';

  ngOnChanges(changes){
    
  }

  onClassChange(){
  this.isHide = true;
  }

  onClassReset(){
    this.isHide = false;
  }


}
