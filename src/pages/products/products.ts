import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, PopoverController } from 'ionic-angular';


/**
 * Generated class for the ProductsPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage({ name: "products" })
@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
  
})
export class ProductsPage {


  

  constructor(public navCtrl: NavController, public navParams: NavParams, public popoverCtrl: PopoverController) {
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductsPage');
  }

  onProductSelection() {
    console.log("hello world")
    let popover = this.popoverCtrl.create("product-details");
    popover.present();

  }
}
