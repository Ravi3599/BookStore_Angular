import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-developerdetails',
  templateUrl: './developerdetails.component.html',
  styleUrls: ['./developerdetails.component.css']
})
export class DeveloperdetailsComponent implements OnInit {

  title:string="Developer";
  constructor() { }

  ngOnInit(): void {
  }

}
