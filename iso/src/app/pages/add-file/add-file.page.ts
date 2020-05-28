import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FilesService } from '../../services/files.service';
import { ViewFlags } from '@angular/compiler/src/core';

@Component({
  selector: 'app-add-file',
  templateUrl: './add-file.page.html',
  styleUrls: ['./add-file.page.scss'],
})
export class AddFilePage implements OnInit {

  public usuario = { idUsuario: 0, idCaso: 0, File: '' };
  private path = '';

  constructor(private modalController: ModalController, private fileService: FilesService) { }

  ngOnInit() {
  }

  dismiss() {
    this.modalController.dismiss();
  }

  handleUpload(event) {
   this.path = event.target.value;
   this.path = this.path.replace(/^.*\\/, '');
  }

  onSubmit() {
    const file = { File: this.path };
    console.log(this.usuario);
    console.log(file);
    this.fileService.postUploadfile(this.usuario, file)
      .subscribe(res => {
        console.log(res);
        console.warn(res);
      }, (err) => {
        console.warn(err);
      });
  }
}
