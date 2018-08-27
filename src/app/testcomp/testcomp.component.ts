import { Component, OnInit } from '@angular/core';
import { TestserviceService } from '../testservice.service';

@Component({
  selector: 'app-testcomp',
  templateUrl: './testcomp.component.html',
  styleUrls: ['./testcomp.component.css']
})
export class TestcompComponent implements OnInit {
  name1:string;
  constructor(private service:TestserviceService) { }


  ngOnInit() {
    
  }
  
  onGetNameChange():void{
    this.name1=this.service.MyName;
  }

}
