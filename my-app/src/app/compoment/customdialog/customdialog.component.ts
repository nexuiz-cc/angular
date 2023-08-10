import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'dialog',
  templateUrl: './customdialog.component.html',
  styleUrls: ['./customdialog.component.scss']
})
export class CustomDialogComponent {
resdata:any={
  title:'title',
  content:'content'
}
constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}
