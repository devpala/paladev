import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-palafire',
  templateUrl: './palafire.component.html',
  styleUrls: ['./palafire.component.scss']
})
export class PalafireComponent implements OnInit {
  code = '';
  moduleComponent:string = `
  import { addDoc, getDb, iniciarApp } from 'palafire';
  const keydev = require('./dev-key.json');

  const db = {coleccion:['user'],documento:'',subcoleccion:[''],subdocumento:'' }

  const app = async () => { 
    console.log('iniciando firebase....')
    await iniciarApp(keydev, 'https://{name}.firebaseio.com');
    getDb(db);
    const uid = await addDoc(0,{prueba:'exito'})
    console.log(uid.id);
  }
  app()
  `

  constructor() { }

  ngOnInit(): void {
  }

  html() {
    this.code = '';
  }
  css() {
    this.code = '';
  }
  ts() {
    this.code = '';
  }
  module() {
    this.code = this.moduleComponent;
  }
}
