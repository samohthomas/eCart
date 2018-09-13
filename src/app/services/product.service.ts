import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
 
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: Http) { }


  // getAllProducts(): Observable<any> {
  //   return this.httpClient.get('/api/product')
  //     .pipe(
  //       tap(res => this.log('fetched heroes')),
  //       catchError(this.handleError('getHeroes', []))
  //     );
  // }

  getAllProducts() {
    return new Promise((resolve, reject) => {
      this.http.get('/api/product')            
        .subscribe(res => {          
          console.log('RESPONSE  :'+JSON.stringify(res));
          resolve(res.json());
        }, (err) => {
          reject(err);
        });
    });
  }

  

  showProduct(id) {
    return new Promise((resolve, reject) => {
        this.http.get('/api/product/' + id)          
          .subscribe(res => {
            resolve(res.json())
        }, (err) => {
          reject(err);
        });
    });
  }

  saveProduct(data) {
    return new Promise((resolve, reject) => {
        this.http.post('/product', data)
          // .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  updateProduct(id, data) {
    return new Promise((resolve, reject) => {
        this.http.put('/product/'+id, data)
          // .map(res => res.json())
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

  deleteProduct(id) {
    return new Promise((resolve, reject) => {
        this.http.delete('/product/'+id)
          .subscribe(res => {
            resolve(res);
          }, (err) => {
            reject(err);
          });
    });
  }

}
