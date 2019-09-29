import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.scss']
})
export class PublicacionesComponent implements OnInit {

   array = [
    {status:"active", color:"success", area: "Ciencia", titulo: "La ciencia hoy dia", fecha: "Sep 03", texto:"Con frecuencia en la vida, nos enfrentamos con el problema de encontrar la mejor...", imagen:"undraw_science_fqhl.svg"},
    {color:"warning", area: "Tecnología", titulo: "Industria 4.0", fecha: "Ago 24", texto:"La ciencia, en su alianza con la tecnología son indudables. Nos han proporcio...", imagen:"undraw_pie_graph_x9dy.svg "},
    {color:"primary", area: "Ingenieria", titulo: "Introduccion IoT", fecha: "Jun 30", texto:"La ciencia, en su alianza con la tecnología son indudables. Nos han proporcio...", imagen:"ola.svg "},
    {color:"danger", area: "Matemáticas", titulo: "Derivadas Aplicadas.",fecha: "May 09", texto:"Con frecuencia en la vida, nos enfrentamos con el problema de encontrar la mejor...", imagen:"undraw_mathematics_4otb.svg "}
  ];

  constructor() { }

  ngOnInit() {
  }

}
