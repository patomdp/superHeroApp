import { Injectable } from '@angular/core';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  listHeroes: Hero[] = [
    { 
      id: 1,
      name: 'SackMan',
      appearance: {
          gender: 'Male',
          race: 'Human',
          height: [
              "1'8",
              '320 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Brown',
      hairColor: 'Black'
    },
    {
      id: 2,
      name: 'MisterMan',
      appearance: {
          gender: 'Male',
          race: 'Human',
          height: [
              "1'4",
              '180 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Grey',
      hairColor: 'Red'
    },
    { 
      id: 3,
      name: 'El Calvo',
      appearance: {
          gender: 'Male',
          race: 'Human',
          height: [
              "1'3",
              '170 cm'
          ],
          weight: [
              '50lb', 
              '90kg'
          ],
      },
      eyeColor: 'Brown',
      hairColor: 'None'
    },
    { 
      id: 4,
      name: 'Rupert El Bacalao',
      appearance: {
          gender: 'Male',
          race: 'Fish',
          height: [
              "1'8",
              '20 cm'
          ],
          weight: [
              '50lb', 
              '7kg'
          ],
      },
      eyeColor: 'Blue',
      hairColor: 'None'
    },
    { 
      id: 5,
      name: 'CastroMan',
      appearance: {
          gender: 'Male',
          race: 'Human',
          height: [
              "1'8",
              '320 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Blue',
      hairColor: 'Blue'
    },
    { 
      id: 6,
      name: 'Lily Woman',
      appearance: {
          gender: 'Female',
          race: 'Human',
          height: [
              "1'8",
              '320 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Brown',
      hairColor: 'Black'
    },
    { 
      id: 7,
      name: 'Batwoman',
      appearance: {
          gender: 'Female',
          race: 'Human',
          height: [
              "1'8",
              '320 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Brown',
      hairColor: 'Black'
    },
    { 
      id: 8,
      name: 'Black Canary',
      appearance: {
          gender: 'Female',
          race: 'Human',
          height: [
              "1'8",
              '320 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Blue',
      hairColor: 'Blonde'
    },
    { 
      id: 9,
      name: 'Black Astrid',
      appearance: {
          gender: 'Female',
          race: 'Human',
          height: [
              "1'8",
              '320 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Black',
      hairColor: 'Black'
    },
    { 
      id: 10,
      name: 'She Cat',
      appearance: {
          gender: 'Female',
          race: 'Human',
          height: [
              "1'8",
              '320 cm'
          ],
          weight: [
              '50lb', 
              '70kg'
          ],
      },
      eyeColor: 'Red',
      hairColor: 'Black'
    }
    
  ]

  constructor() { }

  public getAllHeroes(): Hero[]{
    return this.listHeroes.slice();
  }

  public getOneHeroe(name:string){
    // filtrar toda la lista buscando una coincidencia
    // devolver ese heroe
    //return this.listHeroes[index]
  }

  public deleteHero(index:number){
    this.listHeroes.splice(index,1);
  }
}
