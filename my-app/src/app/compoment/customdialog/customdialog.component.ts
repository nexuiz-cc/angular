import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  templateUrl: './customdialog.component.html',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  styleUrls: ['./customdialog.component.scss'],
})
export class CustomDialogComponent {
  resdata: any = {
    content:'resdata'
  };
  constructor(
    public dialogRef: MatDialogRef<CustomDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.resdata = data;
  }
}
