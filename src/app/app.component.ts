import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Angular EuroConversor';
  euro:number=0;
  yen:number=0;
  dolar:number=0;
  e_y:number=138.39;
  e_d:number=1.08;
  d_e:number=0.93;
  d_y:number=128.16;
  y_e:number=0.007;
  y_d:number=0.008;
  cargarDolares(){
   this.euro= Number((this.dolar * this.d_e).toFixed(3));
   this.yen= Number((this.dolar*this.d_y).toFixed(3));
  }
  cargarEuros(){
    this.dolar= Number((this.euro * this.e_d).toFixed(3));
   this.yen= Number((this.euro*this.e_y).toFixed(3));
  }

  cargarYenes(){
    this.euro= Number((this.yen * this.y_e).toFixed(3));
   this.dolar= Number((this.yen*this.y_d).toFixed(3));
  }


  limpiar() {
    this.euro=0;
    this.dolar=0;
    this.yen=0;
    }

}
