import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
  serverId:number=10;
  serverStatus:string='offline'
  serverCreated:string='No server was created';

  getServerStatus(){
    return this.serverStatus;
  }

serverName=''
  allowNewServer:boolean=false;

constructor(){
  setTimeout(() => {
    this.allowNewServer=!this.allowNewServer;
  }, 2000);
}

onCreateServer(){
  this.serverCreated='Server was created'
  
}
onUpdateServer(event:any){
this.serverName=(<HTMLInputElement>event.target).value

}

}
