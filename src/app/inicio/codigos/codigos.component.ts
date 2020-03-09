import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-codigos',
  templateUrl: './codigos.component.html',
  styleUrls: ['./codigos.component.scss']
})
export class CodigosComponent implements OnInit {
  message:string = '';
  @ViewChild('codeValue', { static: false }) code_value: ElementRef;
  numeros:number[] = [1,2,3,4,5,6,8,9,10]
  
  numero_de_columna:number = 1;
  posicion:number = 0;

  ngOnInit(){}

  restar(){
    if(this.posicion === 1) {
      this.numero_de_columna = 1;
    } else { 
      this.numero_de_columna = this.numeros[this.posicion--];
    }
  }
  
  sumar():void {
    if(this.posicion === 9){
      this.numero_de_columna = 10;
    } else {
      this.numero_de_columna = this.numeros[this.posicion++];
    } 
  }

  copy() {
    const boton:HTMLInputElement =  this.code_value.nativeElement as HTMLInputElement;
    const pre = boton.querySelectorAll('pre');
    console.log(pre);
    document.execCommand('copy');
    this.message = 'copiado!';
  }
}
