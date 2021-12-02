
import { OrdersService } from './../services/orders.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-all-orders',
  templateUrl: './all-orders.component.html',
  styleUrls: ['./all-orders.component.css']
})
export class AllOrdersComponent implements OnInit {
 orderList: any;
 result: any;
 getImage: any;
  datatables: any;
  form!: FormGroup;
  j=1;


  constructor(private orders: OrdersService, 
    public router:Router,   
     private fb: FormBuilder,
    ) { }

      


// getImage = sessionStorage.g etItem('image');
  getToken() {
    return localStorage.getItem('token')
  }
  ngOnInit(): void {

    this.form=this.fb.group({
      profileImage:['',Validators.required],
      
    })
    // let tokenStorage = localStorage.getItem('token');
   this.getImage= sessionStorage.getItem('image') 
    this.orders.GetLeveLOfCaresID().subscribe((data:any)=>{
    this.datatables=data;

    })
      
  
  }

  User(id){
    this.router.navigate(['order-detail/'+id])
  }


}

