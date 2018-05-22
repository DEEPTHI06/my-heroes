import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "../hero.model";
import { heroListService } from '../heroList.service';


@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor(
    private route: ActivatedRoute,
    private heroService: heroListService,
    private location: Location
    )
  { }

   ngOnInit(): void {
     this.getHero();
   }
   getHero() {
     const id = +this.route.snapshot.paramMap.get('id');
    this.hero =  this.heroService.getHero(id);
    // this.heroService.getHero(id)
    //   .subscribe(hero => this.hero = hero);
  }

 /*  ngOnInit() {
   this.route.params.subscribe((params: { id: number }) => {
      this.hero =  this.heroService.getHero(params.id);
      this.heroService.isDetailCompLoaded.emit(true);
    });
   }*/

  goBack(): void {
    this.location.back();
  }
}
