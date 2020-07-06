import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'circular-import-demo-lib1',
  templateUrl: './lib1.component.html',
  styleUrls: ['./lib1.component.scss']
})
export class Lib1Component implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

}
