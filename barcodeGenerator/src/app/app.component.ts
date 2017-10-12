import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Retro Barcode Generator';
  arrColor = [];


  fillarrColor() {
    for (let y = 0; y < 10; y++) {
      const randNum = (Math.floor(Math.random() * 6) ) + 1;
      if (randNum === 1) {
        this.arrColor.push('#DC143C');
      } else if (randNum === 2) {
        this.arrColor.push('#1E90FF');
      } else if (randNum === 3) {
        this.arrColor.push('#7FFF00');
      } else if (randNum === 4) {
        this.arrColor.push('#5F9EA0');
      } else if (randNum === 5) {
        this.arrColor.push('#A52A2A');
      } else if (randNum === 6) {
        this.arrColor.push('#8A2BE2');
      } else if (randNum === 7) {
        this.arrColor.push('#0000FF');
      }
    }
  }

  ngOnInit() {
    this.fillarrColor();
  }
}
