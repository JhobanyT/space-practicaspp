import { Component, OnInit } from '@angular/core';
import { ConvenioService } from '../../../../services/convenio.service';

@Component({
  selector: 'app-convenio',
  templateUrl: './convenio.component.html',
  styleUrls: ['./convenio.component.css']
})
export class ConvenioComponent implements OnInit {

  listConvenios: any[] =[];

  constructor(private convenioService:ConvenioService) { }

  ngOnInit(): void {
    this.onList();
  }
    onList(){
      this.convenioService.getConvenio().subscribe((convenios:any)=>{
       console.log(convenios);
      this.listConvenios=convenios;
    }) 

}
}
