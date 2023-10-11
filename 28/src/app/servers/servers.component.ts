import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverId:number=10;
  serverStatus:string='offline'


  getServerStatus(){
    return this.serverStatus;
  }


  allowNewServer:boolean=false;

constructor(){
  setTimeout(() => {
    this.allowNewServer=!this.allowNewServer;
  }, 2000);
}

}
