import { Component, inject } from '@angular/core';
import { CrashService } from '../../services/crash.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-galeria',
  standalone: true,
  imports: [ CommonModule],
  templateUrl: './galeria.component.html',
  styleUrl: './galeria.component.css'
})
export class GaleriaComponent {

  servicio= inject(CrashService)

  personajes:any
  
  ngOnInit(){
    this.servicio.getCrash().subscribe( c =>{
      this.personajes=c
    })
  }

}
