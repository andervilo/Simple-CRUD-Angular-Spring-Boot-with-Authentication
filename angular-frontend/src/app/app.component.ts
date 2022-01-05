import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit  {

  isLoggedIn = false;
  title = 'Employee System';

  constructor(
  ) { }  

  ngOnInit(): void {
    
  }

  
  
}
