import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ant-Man', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Aquaman', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Asterix', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'The Atom', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'The Avengers', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Batgirl', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Batman', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Batwoman', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Black Canary', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Black Panther', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-list-heroes',
  templateUrl: './list-heroes.component.html',
  styleUrls: ['./list-heroes.component.css']
})
export class ListHeroesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  public applyFilter(event: Event): void{
    // recibe cada una de las teclas
    const filterValue = (event.target as HTMLInputElement).value;
    // le hace un lowerCase y las filtra en el Data Source
    this.dataSource.filter = filterValue.trim().toLocaleLowerCase();
  }

}
