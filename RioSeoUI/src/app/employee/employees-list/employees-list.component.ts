import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "employees-list",
  templateUrl: "./employees-list.component.html",
  styleUrls: ["./employees-list.component.css"]
})
export class EmployeesListComponent implements OnInit {
  constructor(private route: ActivatedRoute, private router: Router) {}
  ngOnInit() {}

  addEmployee() {
    this.router.navigate(["employeeSummary"]);
  }
}
