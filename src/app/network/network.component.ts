import { Component } from '@angular/core';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
  })

export class NetworkComponent {

  hosts = [
    {name: 'router', ip: '192.168.1.1', ha: '4c:17:eb:e7:76:d2'},
    {name: 'router', ip: '192.168.1.1', ha: '4c:17:eb:e7:76:d2'}


  ];


  showButton= false;

  constructor() { }

  ngOnInit() {
    }

    toggle() {
      this.showButton = !this.showButton;
    }
}
