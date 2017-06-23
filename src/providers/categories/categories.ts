import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CategoriesProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CategoriesProvider {

  private categoriesEndpoint: string = "http://horecaapi20170615121454.azurewebsites.net/api/category"

  constructor(public http: Http) {
    console.log('Hello CategoriesProvider Provider');
  }


  listCategories() {
        var response = this.http.get(this.categoriesEndpoint).map(res => res.json());
        return response;
    }
}
