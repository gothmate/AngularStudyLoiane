import { Component, OnInit } from '@angular/core';
import { CursosService } from './cursos.service';


@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.sass']
})
export class CursosComponent implements OnInit {

  cursos: string[]


  constructor(private CursosService: CursosService) {
    this.cursos = this.CursosService.getCursos()
    // let servico = new CursosService()
  }

  ngOnInit(): void {
  }

}
