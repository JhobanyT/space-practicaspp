import { Component, OnInit } from '@angular/core';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Solicitud } from '../../../../core/models/solicitud';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  solicitudes = [];

  constructor(private solicitudService: SolicitudService) { }

  ngOnInit() {
    this.solicitudService.getSolicitud()
      .subscribe(
        res => {
          this.solicitudes = res;
          console.log(res);
        },
        err => console.log(err)
      )
  }

}
