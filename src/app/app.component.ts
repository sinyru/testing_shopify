import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'app';
  orders;
  billing_address=[];
  // ordersUrl: string = environment.ordersUrl;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get("http://localhost:4741/weathers")
    // this.htto.get(this.environment.ordersUrl)
      .subscribe(res => {
        this.orders = res.orders;
        console.log(this.orders);
        console.log("length is ", this.orders.length);
        for(let i=0;i<this.orders.length;i++){
          this.billing_address.push(this.orders[i].billing_address);
        }

      });

  }
}
