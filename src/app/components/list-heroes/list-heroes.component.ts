import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Hero } from 'src/app/models/hero';
import { HeroesService } from 'src/app/services/heroes.service';
import { ConfirmationMessageComponent } from '../shared/confirmation-message/confirmation-message.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.scss']
})
export class ListHeroesComponent implements AfterViewInit  {

  public displayedColumns: string[] = ['position', 'name', 'race', 'gender', 'action'];
  public dataSource = new MatTableDataSource<Hero>();
  public heroList: Hero[];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private heroService: HeroesService, 
    private dialog: MatDialog,
    private snackBar: MatSnackBar
    ){}

  ngAfterViewInit (): void {
    //Inicia la carga de heroes
    this.loadHeros();
  }

  public applyFilter(event: Event): void{
    // recibe cada una de las teclas
    const filterValue = (event.target as HTMLInputElement).value;
    // le hace un lowerCase y las filtra en el Data Source
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

  public loadHeros(){
    this.heroList = this.heroService.getAllHeroes();
    console.log('Lista de heroList: ', this.heroList);
    this.dataSource = new MatTableDataSource(this.heroList);
    // inicializan el sort y paginacion
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  public deleteHero(index:number):void{
    const dialogRef= this.dialog.open(ConfirmationMessageComponent, {
      width: '350px',
      data: {mensaje: '¿Estas seguro que deseas eliminar el héroe?'}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result === 'aceptar'){
        this.heroService.deleteHero(index);
        this.loadHeros();
        // mensaje al eliminar el Heroe
        this.snackBar.open('Heroe eliminado con éxito', '', {
          duration: 3000
        });
      }
    });
  }

}
