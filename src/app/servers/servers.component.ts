import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  styleUrl: './servers.component.css'
})
export class ServersComponent implements OnInit{
  
  constructor(){}
  ngOnInit(): void {
    
  }

}
