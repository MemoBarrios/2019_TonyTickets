import { Component } from '@angular/core';

@Component({
    selector: 'app-captura',
    templateUrl: './captura.component.html',
    styleUrls: ['./captura.component.css']
})
/** captura component*/
export class CapturaComponent {
    /** captura ctor */
    constructor() {

    }

files: any = [];

  uploadFile(event) {
    for (let index = 0; index < event.length; index++) {
      const element = event[index];
      this.files.push(element.name)
    }  
  }
  deleteAttachment(index) {
    this.files.splice(index, 1)
  }

}
