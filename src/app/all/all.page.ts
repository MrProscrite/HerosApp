import { Component, OnInit } from '@angular/core';
import { Hero } from '../models/heros.model';
import { DataService} from '../Services/data.service';

@Component({
  selector: 'app-all',
  templateUrl: './all.page.html',
  styleUrls: ['./all.page.scss'],
})
export class AllPage implements OnInit {
  heros: Hero[] = []
  busca = '';

  constructor(
    private data: DataService
  ) { 
    this.data.getHeros().subscribe(response => this.heros = response)
  }

  ngOnInit() {
  }

  buscarHero(event){
    const text = event.target.value;
    console.log(text)
    this.busca = text;
  }

}
