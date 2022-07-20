import { Component, OnInit } from '@angular/core';
import { Solicitud } from '@core/models/solicitud';
// import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from '../../../../services/solicitud.service';

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

   listSolicitudes: Solicitud[] =[];

  constructor(private solicitudService:SolicitudService) { }

  ngOnInit(): void {
    this.onList();
    // alert("hola");
  }
    onList(){
      this.solicitudService.getSolicitud().subscribe((solicitudes:any)=>{
       console.log(solicitudes);
      this.listSolicitudes=solicitudes;
     //  console.log(this.listSolicitudes[0]._id);
    })
   
   
}
  // onList() {
  //   this.solicitudService.getSolicitud().subscribe(data => {
  //     console.log(data);
  //     this.listSolicitudes = data;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
}
  // onList(){
  //     this.solicitudService.getSolicitud().subscribe((solicitudes:any)=>{
  //     console.log(solicitudes);
  //     this.solicitudList=solicitudes;
  //     })
  // }

  // onList(){
  //   this.solicitudService.getSolicitud()
  //     .subscribe((solicitudes:any)=> {
  //         this.solicitudList = solicitudes;
  //         console.log(solicitudes);
  //       },
  //       error => {
  //         console.log(error);
  //       });
  // }
//}
