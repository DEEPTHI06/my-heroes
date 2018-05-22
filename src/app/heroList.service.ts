import { Hero } from "./hero.model";
import { Injectable, Output, EventEmitter } from '@angular/core';

export class heroListService {

 @Output() isDetailCompLoaded = new EventEmitter<boolean>();
private heroes : Hero[] =
[
    new Hero (1, 'Suraj'),
    new Hero (2, 'Deeraj'),
    new Hero (3, 'Shraukh'),
    new Hero (4, 'Hritik'),
    new Hero (5, 'Abhishek'),
    
];

getHeroes()
{
    return this.heroes.slice();
}
getHero(id : number )
{
    return this.heroes.find(hero => hero.id === id);
}
}