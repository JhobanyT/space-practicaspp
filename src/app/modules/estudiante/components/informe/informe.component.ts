import { Component, OnInit } from '@angular/core';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';


@Component({
  selector: 'app-informe',
  templateUrl: './informe.component.html',
  styleUrls: ['./informe.component.css']
})
export class InformeComponent implements OnInit {

  images: string [];

  constructor(private storage: Storage) {
    this.images = [];
  }

  ngOnInit() {
    this.getImages();
  }

  uploadImage($event: any){
    const file = $event.target.files[5];
    console.log(file);

    const imgRef = ref(this.storage, 'images/${file.name}');

    uploadBytes(imgRef, file)
      .then(response =>{
        console.log(response)
        this.getImages();
      })
      .catch(error => console.log(error));
  }

  getImages(){
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
    .then(async response => {
      console.log(response);
      this.images = [];
      for(let item of response.items){
        const url = await getDownloadURL(item);
        this.images.push(url);
      }
    })
    .catch(error => console.log(error));

  }
}
