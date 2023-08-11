import {Component} from '@angular/core';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import { CustomDialogComponent } from "../../compoment/customdialog/customdialog.component";

/**
 * @title Dialog Animations
 */
@Component({
  selector: 'dialog-animations-example',
  styleUrls: ['dialog-animations-example.scss'],
  templateUrl: 'dialog-animations-example.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class DialogAnimationsExample {
  constructor(public dialog: MatDialog) {}

  data:any={
    content:'MatDialogcnetent',
    width:500,
    title:'MatDialogtitle',
    height:150
  }
  openDialog(data:any): void {
    this.dialog.open(CustomDialogComponent, {
      minWidth: this.data.width,
      data:data
    });
  }
}