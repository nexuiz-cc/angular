import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {MatDialogModule,MatDialogRef} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'dialog',
  templateUrl: './customdialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  styleUrls: ['./customdialog.component.scss']
})
export class CustomDialogComponent {
resdata:any={
  title:'title',
  content:'content'
}
constructor(@Inject(MAT_DIALOG_DATA) public data: any,
public dialogRef: MatDialogRef<CustomDialogComponent>
) {}
}
