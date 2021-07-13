import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  constructor(private http:HttpClient,private activatedRoute: ActivatedRoute,private ngxLoader: NgxUiLoaderService) { }
   user:any=[];
   userId:number;
  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.userId=params.uid;
    })
    this.ngxLoader.start();
    this.http.get(`https://reqres.in/api/users/${this.userId}`).subscribe((response)=>{
      this.user=response['data'];
      console.log(this.user);
      this.ngxLoader.stop();
    })
  }

}
