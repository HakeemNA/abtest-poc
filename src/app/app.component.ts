import {Component, OnInit} from '@angular/core';
import { AbTestsService } from 'angular-ab-tests';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'abtest-poc';

  constructor( private abTestsService: AbTestsService ) {}

  ngOnInit() {
    console.log(this.abTestsService.getVersion());
  }
}
