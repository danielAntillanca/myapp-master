import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
guardar() {
throw new Error('Method not implemented.');
}

  formularioRegistro: FormGroup;
  
  constructor(public fb: FormBuilder,
    public alertController: AlertController,private loadingCtrl: LoadingController) {
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
    //this.presentLoading();
  }

  async ingresar(): Promise<void>{
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: ' ',
        message: 'Se ha creado su cuenta ',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }
    

    var usuario = {
      nombre: f.nombre,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));
  }
  /*async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando',
      duration: 2000
    });
    return await loading.present();
  }*/
}
