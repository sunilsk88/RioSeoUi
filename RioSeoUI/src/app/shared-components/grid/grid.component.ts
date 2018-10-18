import { Component, Input,OnInit } from '@angular/core';

@Component({
  selector: 'grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() titles: any[];
  @Input() gridData: any[];

  constructor() { }

  ngOnInit() {
  }

}
