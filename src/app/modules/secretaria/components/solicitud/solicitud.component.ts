import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
import { Solicitud } from '@core/models/solicitud';
// import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from '../../../../services/solicitud.service';
=======
// import { Solicitud } from '@core/models/solicitud';
import { Solicitud } from 'src/app/models/solicitud';
import { SolicitudService } from '../../../../services/solicitud.service';
import { Estado } from '../../../../core/models/estado';
import { Router } from '@angular/router';
>>>>>>> fea5c4bf944a6e567c7f23900df162c42ddd7832

@Component({
  selector: 'app-solicitud',
  templateUrl: './solicitud.component.html',
  styleUrls: ['./solicitud.component.css']
})
export class SolicitudComponent implements OnInit {

<<<<<<< HEAD
   listSolicitudes: Solicitud[] =[];

  constructor(private solicitudService:SolicitudService) { }
=======
    public estado_solicitud = "Rechazado";

    // public estado: boolean = true;
    public estado_s: boolean = false;


   listSolicitudes: any[] =[];

  constructor(private solicitudService:SolicitudService, private router:Router) { }
  filterSolicitud = '';
>>>>>>> fea5c4bf944a6e567c7f23900df162c42ddd7832

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
<<<<<<< HEAD
=======
  }
    eliminarsol(_id:any)
    {
    this.solicitudService.deleteSolicitudById(_id).subscribe(
      res=>{
        console.log('solicitud eliminada');
        this.onList();
      },
      err=> console.log(err)
      );
    }
  
>>>>>>> fea5c4bf944a6e567c7f23900df162c42ddd7832
   
   
}
  // onList() {
  //   this.solicitudService.getSolicitud().subscribe(data => {
  //     console.log(data);
  //     this.listSolicitudes = data;
  //   }, error => {
  //     console.log(error);
  //   })
  // }
<<<<<<< HEAD
}
=======
//}
>>>>>>> fea5c4bf944a6e567c7f23900df162c42ddd7832
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
