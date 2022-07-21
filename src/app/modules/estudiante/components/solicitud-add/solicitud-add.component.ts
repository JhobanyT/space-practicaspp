import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Solicitud } from 'src/app/models/solicitud';
import { AuthService } from 'src/app/services/auth.service';
import { SolicitudService } from 'src/app/services/solicitud.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Empresa } from '@core/models/empresa';
import { EmpresaService } from 'src/app/services/empresa.service';

export interface DialogData {
  nombre?:string;
  ruc?:string;
  direccion?:string;
  telefono?:string;
}
@Component({
  selector: 'app-solicitud-add',
  templateUrl: './solicitud-add.component.html',
  styleUrls: ['./solicitud-add.component.css']
})
export class SolicitudAddComponent implements OnInit {
  disableSelect = new FormControl(false);
  solicitud: Solicitud = {
    estado_solicitud: 'Pendiente',
    estado: true,
    empresa: '',
    estudiante: '',
  };
  empresa: Empresa = {
    nombre: '',
    ruc: '',
    direccion: '',
    telefono: '',
  }
  submitted = false;
  zero?: string;

  constructor(
    private solicitudService: SolicitudService, public dialog: MatDialog,
  ) { }

  ngOnInit(): void { }

  saveSolicitud(): void {
    const data = {
      empresa: this.solicitud.empresa,
      estudiante: this.solicitud.estudiante,
      estado_solicitud: 'Pendiente',
      estado: true,
    };
    this.solicitudService.createSolicitud(data)
      .subscribe(
        res => {
          console.log(res);
          this.submitted = true;
        },
        err => console.error(err)
      );

  }

  dialogEmpresa(): void { 
    console.log('Done');
    const dialogRef = this.dialog.open(DialogEmpresaOver, {
      width: '250px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
  }

}


@Component({
  selector: 'dialog-empresa',
  templateUrl: 'dialog-empresa.html',
})
export class DialogEmpresaOver implements OnInit {
  empresaId?: string;
  empresaForm = this._formBuilder.group({
    nombre: '',
    ruc: '',
    direccion: '',
    telefono: '',
  });
  constructor(
    private empresaService: EmpresaService,
    private _formBuilder: FormBuilder,
    public dialogRef: MatDialogRef<DialogEmpresaOver>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

  saveForm(form: any) {
    console.log(form.value);
    this.empresaService.createEmpresa(form.value)
      .subscribe(
        res => {
          console.log(res);
          this.empresaId = res._id;
          this.dialogRef.close();
          console.log(this.empresaId);
        },
        err => console.error(err)
      );
  }

}
