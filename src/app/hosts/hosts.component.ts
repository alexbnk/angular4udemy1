import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {

  log = [{time:'Sometime',text: 'details viewed'}];

  showDetails=false;
  i=0;



  constructor() { }

  ngOnInit() {
  }
  clickDetails() {
    this.showDetails =!this.showDetails;

    if (this.showDetails) {
      this.log.push({time:Date(),text: 'details viewed'});
      this.i++;
    console.log(this.log);
  }
  }
}
