import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilesService } from '../../services/files.service';
import { ViewFlags } from '@angular/compiler/src/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import * as $ from 'jquery';
@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.page.html',
  styleUrls: ['./add-file.page.scss'],
})
export class AddFilePage implements OnInit {

  myForm = new FormGroup({
    idUsuario: new FormControl('', [Validators.required]),
    idCaso: new FormControl('', [Validators.required]),
    file: new FormControl('', [Validators.required]),
    fileSource: new FormControl('', [Validators.required])
  });
  public usuario = { idUsuario: 0, idCaso: 0, File: '' };
  private path = '';

  constructor(private modalController: ModalController, private fileService: FilesService) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }


  onSubmit() {
    const files = { File: this.myForm.get('fileSource').value };
    console.log(this.usuario);
    console.log(files);
    this.fileService.postUploadfile(this.usuario, files.File)
      .subscribe(res => {
       this.dismiss();
      }, (err) => {
        console.warn(err);
      });
  }

  get f(){
    return this.myForm.controls;
  }
     
  onFileChange(event) {
    this.path = event.target.value;
    this.path = this.path.replace(/^.*\\/, '');
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }
}
