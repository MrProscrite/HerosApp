import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Editoras } from '../models/editoras.model';
import {  Hero } from '../models/heros.model';
import { Top3 } from '../models/top.model';
import { DataService} from '../Services/data.service';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{
  heros: Hero[] = []
  hero: Hero[] = []
  publisher: Editoras[];
  top1: Top3[] = []
  top2: Top3[] = []
  top3: Top3[] = []
  slidesOptions: any = { slidesPerView: 4, freeMode: true, spaceBetween: 10};
  slidesHeaderOptions: any = { slidesPerView: 1.6, spaceBetween: 30, initialSlide: 1, centeredSlides: true};
  constructor(private data: DataService,
              private numbers: AppComponent) {
    this.data.getHeros().subscribe(response => this.heros = response);
    this.data.getEditoras().subscribe(response => this.publisher = response);
    this.data.getTop3(1).subscribe(response => this.top1 = response);
    this.data.getTop3(2).subscribe(response => this.top2 = response);
    this.data.getTop3(3).subscribe(response => this.top3 = response);

  }

  ngOnInit(){
  }

  getHeros(editora): Hero[] {
    const hero: Hero[] = []
    for(const key in this.heros){
      if(this.heros[key].biography.editora === editora){
        hero.push(this.heros[key]);
      }
    }
    return hero;
  }
  

}
