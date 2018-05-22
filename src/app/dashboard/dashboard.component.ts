import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero.model";
import { heroListService } from "../heroList.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [heroListService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  constructor(private heroListservices: heroListService) {
  }

  ngOnInit() {

    this.heroes = this.heroListservices.getHeroes();

  }


}
