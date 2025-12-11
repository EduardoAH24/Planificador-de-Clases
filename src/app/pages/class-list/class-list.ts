import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { Clase } from '../../models/clase.model';

@Component({
  selector: 'app-class-list',
  templateUrl: './class-list.component.html',
  styleUrls: ['./class-list.component.css']
})
export class ClassList implements OnInit {
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
