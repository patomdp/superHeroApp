import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';

interface Genders {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-edit-hero',
  templateUrl: './add-edit-hero.component.html',
  styleUrls: ['./add-edit-hero.component.css']
})
export class AddEditHeroComponent implements OnInit {

  genders: Genders[] = [
    { value: 'Male', viewValue: 'Male' },
    { value: 'Female', viewValue: 'Female' },
    { value: 'Other', viewValue: 'Other' },
  ];
  public myForm: FormGroup;
  public idHero: any;
  public action = 'Crear'
  public imgSrc = '../../../assets/img/new-hero.jpeg'
  constructor(
    private fb: FormBuilder,
    private heroeService: HeroesService,
    private snackBar: MatSnackBar,
    private route: Router,
    private aRoute: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      nombreCompleto: ['', [Validators.required, Validators.maxLength(20)]],
      genero: ['', [Validators.required]],
      raza: ['', [Validators.required]],
      colorPelo: ['', [Validators.required]],
      colorOjos: ['', [Validators.required]]
    });
    const idParam = 'id';
    this.idHero = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    //esta editando
    if (this.idHero !== undefined) {
      this.action = 'Editar'
      this.imgSrc= "../../../assets/img/new-hero-2.jpeg"
      this.isEditHero();
    }
  }

  public saveHero(): void {
    const heroe: Hero = {
      id: Math.floor(Math.random() * 10) + 10,
      name: this.myForm.get('nombreCompleto')?.value,
      appearance: {
        gender: this.myForm.get('genero')?.value,
        race: this.myForm.get('raza')?.value,
      },
      eyeColor: this.myForm.get('colorOjos')?.value,
      hairColor: this.myForm.get('colorPelo')?.value,
    }

    if(this.idHero !== undefined){
      //esta editando
      this.editHero(heroe);
    } else {
      this.addHero(heroe);
    }    
  }

  public editHero(heroe:Hero):void{
    this.heroeService.editHero(heroe, this.idHero);
    this.snackBar.open('Heroe ha sido editado con éxito', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }

  public addHero(heroe:Hero):void{
    this.heroeService.addHero(heroe);
    this.snackBar.open('Heroe ha sido guardado con éxito', '', {
      duration: 3000
    });
    this.route.navigate(['/']);
  }

  public isEditHero(): void {
    const hero: Hero = this.heroeService.getHero(this.idHero);
    console.log('Heroe a editar: ', hero);
    this.myForm.patchValue({
      nombreCompleto: hero.name,
      genero: hero.appearance?.gender,
      raza: hero.appearance?.race,
      colorOjos: hero.eyeColor,
      colorPelo: hero.hairColor
    })
  }

}
