import { Component, OnInit } from '@angular/core';
import { Host } from './host.model';

@Component({
  selector: 'app-hosts',
  templateUrl: './hosts.component.html',
  styleUrls: ['./hosts.component.css']
})
export class HostsComponent implements OnInit {
  log=[];

  hosts: Host[] =[
    new Host('Router','192.168.1.1','4c:17:eb:e7:76:d2', '/assets/router.png','Appliance','Sagem','Home, second floor', 'http://192.168.1.1','admin','admin','router,dhcp,firewall,hub')
  ];

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
    //console.log(this.log);
  }
  }
}
