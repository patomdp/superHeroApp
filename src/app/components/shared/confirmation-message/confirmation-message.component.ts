import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation-message',
  templateUrl: './confirmation-message.component.html',
  styleUrls: ['./confirmation-message.component.css']
})
export class ConfirmationMessageComponent implements OnInit {
  public mensaje: string;
  public btn = 'aceptar';
  constructor(public dialogRef: MatDialogRef<ConfirmationMessageComponent>,
  @Inject(MAT_DIALOG_DATA) public data: any){
    this.mensaje = data.mensaje;
   }
  

  ngOnInit(): void {
  }

  public onNoClick():void {
    this.dialogRef.close();
  }
}
