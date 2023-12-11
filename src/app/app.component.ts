import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo:string = 'Temporizador';
  hora:string="";
  minutos:string="";
  segundos:string="";
  centesimas:string="";
  numero:number=0;
  tiempo:number=0;
  temp:NodeJS.Timer | undefined;
  constructor(){
    this.temp=setInterval(()=>{
         this.tiempo++;
         this.numero=Math.round(Math.random()*100);
         this.hora=new Date().getHours().toString();
        this.centesimas=new Date().getMilliseconds().toString();
    },100)

  }





}
