import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Clase } from '../../models/clase.model'; // Asegúrate de importar Clase

@Component({
  selector: 'app-tu-componente',
  templateUrl: './tu-componente.component.html',
  styleUrls: ['./tu-componente.component.css']
})
export class TuComponente implements OnInit {
  classes: Clase[] = [];

  constructor(private classService: ClassService) {}

  ngOnInit() {
    this.classService.getClasses().subscribe(res => {
      this.classes = res;
    });
  }
  eliminar(id: string) {
  if (confirm('¿Eliminar esta clase?')) {
    this.classService.deleteClass(id);
  }
}
}
