import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from '@angular/common/http';

@Component({
  selector: "employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.css"]
})
export class EmployeesListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router,private http: HttpClient) {}
  
  titles : any;
  gridData: any;

  ngOnInit() {
    this.titles = [
      { headerName: 'Id', field: 'make' },
      { headerName: 'firstName', field: 'firstName' },
      { headerName: 'lastName', field: 'lastName' },
      { headerName: 'email', field: 'email' },
      { headerName: 'titledId', field: 'titledId' }

    ];
    var data = this.http.get('http://localhost:9999/employee/getAll');
    console.log(data);
  }

  addEmployee() {
    this.router.navigate(["employeeSummary"]);
  }
}
