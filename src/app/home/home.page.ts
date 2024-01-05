import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data:any;
  constructor(private loadingCtrl: LoadingController,private activeroute:ActivatedRoute,private router:Router) {
    this.activeroute.queryParams.subscribe(params =>{
      if(this.router.getCurrentNavigation().extras.state){
        this.data=this.router.getCurrentNavigation().extras.state.user;
        console.log(this.data)
      }else {this.router.navigate(["/login"])}
    });
  }
 
  ngOnInit() {
    //this.presentLoading();
  }

  /*async presentLoading(){
    const loading = await this.loadingCtrl.create({
      message: 'Cargando',
      duration: 2000
    });
    return await loading.present();
  }*/
}
