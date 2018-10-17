import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "display-field",
  templateUrl: "./display-field.component.html",
  styleUrls: ["./display-field.component.css"]
})
export class DisplayFieldComponent implements OnInit {
  @Input()
  id: string;
  @Input()
  label: string;
  @Input()
  style: any;
  @Input()
  tooltip: string;
  @Input()
  wordWrap: boolean;

  constructor() {}

  ngOnInit() {}
}
