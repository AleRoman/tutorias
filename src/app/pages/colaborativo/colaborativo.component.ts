import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colaborativo',
  templateUrl: './colaborativo.component.html',
  styleUrls: ['./colaborativo.component.scss']
})
export class ColaborativoComponent implements OnInit {

  profes = [
    {
      nombre: 'Rafael Villegas', correo: 'rafa@gmail.com', areas: 'Ingeniería', tel: 9998881234,
      foto: 'https://cdn.pixabay.com/photo/2016/11/18/23/38/child-1837375_960_720.png',
      color: 'text-danger'
    },
    {
      nombre: 'Julio Profe', correo: 'julio@gmail.com', areas: 'Matemáticas', tel: 9998881234, foto:
        'https://mir-s3-cdn-cf.behance.net/project_modules/disp/ce54bf11889067.562541ef7cde4.png',
        color: 'text-primary'
    },
    {
      nombre: 'Valeria Alejandra', correo: 'vale@gmail.com', areas: 'Ciencias', tel: 9998881234,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXKDLJP77LgT7tWsW7cyRFZxfWe7pCyclp0NHYR_OMRcbn7Qz9',
      color: 'text-success'
    },
    {
      nombre: 'Laura Pérez', correo: 'laura@gmail.com', areas: 'Tecnología', tel: 9998881234,
      foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA4CeJTb7_5G06WGLDaR5Ln5a_4sLwfhxDXzsgA6SYsFkD0j-C',
      color: 'text-warning'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
