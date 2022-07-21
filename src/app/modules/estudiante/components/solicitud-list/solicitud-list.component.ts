import { Component, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Persona } from '@core/models/persona';
import { Estudiante } from '@core/models/estudiante';
// import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';
import { Solicitud } from '../../../../core/models/solicitud';

@Component({
  selector: 'app-solicitud-list',
  templateUrl: './solicitud-list.component.html',
  styleUrls: ['./solicitud-list.component.css']
})
export class SolicitudListComponent implements OnInit {

  displayedColumns: string[] = ['estudiante.codigo','empresa','estado_solicitud', 'estado'];
  dataSource = new MatTableDataSource<Solicitud>();
  message = '';

  constructor(private solicitudService: SolicitudService, public dialog: MatDialog) { }

  ngOnInit() {
    this.solicitudService.getSolicitud()
      .subscribe(
        res => {
          // this.solicitudes = res;
          this.dataSource.data = res;
        },
        err => console.log(err)
      )
  }
  

  editSolicitud(id: string) {
    const dialogRef = this.dialog.open(DialogSolicitud, {
      width: '500px',
      data: { id: id },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

  updateTutorial(id: string): void {
    
    this.message = '';
    // this.solicitudService.updateSolicitudById(this.currentSolicitud._id, this.currentSolicitud)
    //   .subscribe({
    //     next: (res) => {
    //       console.log(res);
    //       this.message = res.message ? res.message : 'This Solicitud was updated successfully!';
    //     },
    //     error: (e) => console.error(e)
    //   });
  }


}


@Component({
  selector: 'dialog-solicitud',
  templateUrl: 'dialog-solicitud.html',
})
export class DialogSolicitud implements OnInit {
  // currentPersona?: {};

  @Input() person: Persona = {
    _id: '',
    nombre: '',
    ape_paterno: '',
    ape_materno: '',
    sexo: '',
    f_nacimiento: undefined,
    direccion: '',
    telefono: ''
  };
  
  @Input() currentSolicitud: Solicitud = {
    estado_solicitud: [],
    _id: '',
    status: false,
    empresa: [],
    estudiante: []
  };
  passedId?: string;
  datar = 'Pass';

  constructor(
    public dialogRef: MatDialogRef<DialogSolicitud>,
    @Inject(MAT_DIALOG_DATA) public data: {id: string},
    private solicitudService: SolicitudService,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.passedId = this.data.id;
    this.solicitudService.getSolicitudById(this.passedId)
        .subscribe(
          data => {
            this.currentSolicitud = data;
            // this.currentPersona = data.estudiante[0].persona;
            for (var person of data.estudiante[0].persona) {
              this.person = person;
          }
            console.log('log');
            // console.log(this.currentPersona[0]);
          },
          err => console.error(err)
        );

    // console.log(this.currentSolicitud);
  }
}