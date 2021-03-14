import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../models/heros.model';

@Pipe({
  name: 'filtro'
})

export class FiltroPipe implements PipeTransform {

  transform(heros: Hero[], texto: string): Hero[] {
    if (texto.length === 0){ return heros;}
    
    texto = texto.toLowerCase();
    return heros.filter(hero =>{
      return hero.name.toLowerCase().includes(texto)
            || hero.biography.editora.toLowerCase().includes(texto);
    })

  }


}
