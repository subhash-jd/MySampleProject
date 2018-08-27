import { Component, OnInit } from '@angular/core';
import { TestserviceService } from './testservice.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Servicerest';
  constructor(private service:TestserviceService) { }
  myname:string;
  ngOnInit() {
   
  }

  onNameChange():void{
    this.service.MyName=this.myname;
  }

}
