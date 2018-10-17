import { Component, Input, OnInit, ViewChild, ElementRef } from "@angular/core";

@Component({
  selector: "button",
  templateUrl: "./button.component.html",
  styleUrls: ["./button.component.css"],
  host: {
    "(click)": "canClick($event)"
  }
})
export class ButtonComponent implements OnInit {
  @Input()
  id: string;

  @Input()
  type: string = "button";

  @Input()
  title: string = "";

  @Input()
  icon: string;

  @Input()
  disabled: boolean;

  @Input()
  loading: boolean;

  @Input()
  focus: boolean;

  constructor() {}

  @ViewChild("btn")
  btn: ElementRef;

  get disabledOrLoading() {
    return this.disabled || this.loading;
  }
  get tabIndex(): number {
    return 1;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    this.focus && setTimeout(_ => this.btn.nativeElement.focus());
  }

  get fieldId(): string {
    return this.id;
  }

  canClick(event: Event) {
    if (this.disabled) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}
