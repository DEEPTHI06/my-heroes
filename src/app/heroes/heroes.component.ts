import { Component, OnInit } from '@angular/core';
import { Hero } from "../hero.model";
import { heroListService } from "../heroList.service";


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
  
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];

  constructor(private heroListservices: heroListService) {

  }


  ngOnInit() {

    this.heroes = this.heroListservices.getHeroes();

  }


}