import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Animation, AnimationController, AnimationDirection, createAnimation } from '@ionic/angular';
import { Hero } from '../models/heros.model';
import { DataService} from '../Services/data.service';

@Component({
  selector: 'app-view-hero',
  templateUrl: './view-hero.page.html',
  styleUrls: ['./view-hero.page.scss'],
})
export class ViewHeroPage implements OnInit {
  @ViewChild('header') header: ElementRef;
  private headerEl: any;
  private lastScrollTop = 0;
  private animation: Animation;
  id: any;
  heros: Hero[] = []
  hero: Hero[] = []

  constructor(
    private data: DataService,
    private activatedRoute: ActivatedRoute,
    private animationCtrl: AnimationController
  ) {
    this.id = this.activatedRoute.snapshot.paramMap.get('id'); 
    this.data.getHeroById(this.id).subscribe(response => this.heros = response)
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
    this.headerEl = this.header.nativeElement;

    this.createAnimation();
  }

  createAnimation(){
    this.animation = this.animationCtrl.create()
    .addElement(this.headerEl)
    .duration(300)
    .direction('reverse')
    .fromTo('transform', 'translateY(0)', `translateY(-${this.headerEl.clientHeight}px)`);
  }

  onScroll(event){
    const scrollTop: number = event.detail.scrollTop;
    const direction: AnimationDirection = scrollTop > this.lastScrollTop ? 'normal' : 'reverse';

    if (this.animation.getDirection() != direction) {
      this.animation.direction(direction).play();
    }

    this.lastScrollTop = scrollTop;
  }

}
