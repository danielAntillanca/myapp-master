import { Router,NavigationExtras,Route } from '@angular/router'
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;
  user={
    usuario:"",
    password:""
  }
  constructor(public fb: FormBuilder,
    public alertController: AlertController, private loadingCtrl: LoadingController,
    private router:Router) { 

    this.formularioLogin = this.fb.group({
      'nombre': new FormControl("",Validators.required),
      'password': new FormControl("",Validators.required)
    })

  }

  ngOnInit() {
    //this.presentLoading();
  }

   Ingresar(){

   /* var f = this.formularioLogin.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
    }else{
      const alert = await this.alertController.create({
        header: 'Datos completos',
        message: 'Los datos que ingresaste son correctos.',
        buttons: ['Aceptar']
      });
      await alert.present();
    }*/
    let NavigationExtras:NavigationExtras={
      state:{user:this.user}
    };
    this.router.navigate(['/home'],NavigationExtras)
  }
  /**async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando',
      duration: 2000
    });
    return await loading.present();
  }*/
}

