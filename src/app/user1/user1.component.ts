import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  result: any = 0;
  latest: any = 0;
  message: any = " "

  num(value: number) {
    this.latest =  value

    if (this.result == 0) {
      this.result = value
    }
    else {
      this.result = this.result + value
    }

  }
  operate(operation: string) {
    if (operation === '+') {
      if(this.latest == 0){
        this.result += 1;
      }
      else{
        this.result += this.latest;
      }
    
      this.war()
    }
    else if (operation === '-') {
      if(this.latest == 0){
        this.result -= 1
      }
      else{
        this.result -= this.latest;
      }
      
      this.war()
    }

  }
  reset() {
    this.result = 0;
    this.latest = 0 ;
    this.message= " "
  }
war(){
  if (this.result > 100) {
    this.message = " The value exceeds limit!";
} else if (this.result < 0) {
    this.message = " The value is below minimum!";
}
}

}
