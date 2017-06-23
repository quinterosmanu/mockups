import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CategoriesProvider } from "../../providers/categories/categories";
import { Observable } from 'rxjs';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private categories: Observable<Array<any>>;

  constructor(public navCtrl: NavController, public categoriesProv: CategoriesProvider) {
    this.categories = categoriesProv.listCategories();
    console.log(this.categories);
  }

}
