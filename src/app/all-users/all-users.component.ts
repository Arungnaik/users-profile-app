import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgxUiLoaderService } from 'ngx-ui-loader';
@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css'],
})
export class AllUsersComponent implements OnInit {
  constructor(
    private http: HttpClient,
    private ngxLoader: NgxUiLoaderService
  ) {}
  userDetails = [];
  defaultList=[];
  ngOnInit(): void {
    this.ngxLoader.start();
    this.http
      .get('https://reqres.in/api/users?delay=3')
      .subscribe((response) => {
        this.userDetails = response['data'];
        console.log(this.userDetails);
        this.defaultList=response['data'];
        this.ngxLoader.stop();
        console.log(this.defaultList);
      });
  }


  sortByFirstName() {
    this.userDetails.sort(function (a, b) {
      if (a.first_name < b.first_name) {
        return -1;
      }
      if (a.first_name > b.first_name) {
        return 1;
      }
      return 0;
    });
  }

  sortByLastName() {
    this.userDetails.sort(function (a, b) {
      if (a.last_name < b.last_name) {
        return -1;
      }
      if (a.last_name > b.last__name) {
        return 1;
      }
      return 0;
    });
  }
}
