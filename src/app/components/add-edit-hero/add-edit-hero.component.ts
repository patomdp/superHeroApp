import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }
  genders: Genders[] = [
    {value: 'male', viewValue: 'Male'},
    {value: 'female', viewValue: 'Female'},
    {value: 'other', viewValue: 'Other'},
  ];
  
}
