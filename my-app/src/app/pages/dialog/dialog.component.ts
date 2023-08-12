import {Component} from '@angular/core';
import {MatDialog,MatDialogModule} from '@angular/material/dialog';
import { CustomDialogComponent } from "../../compoment/customdialog/customdialog.component";
import { SnackBarComponent } from 'src/app/compoment/snack-bar/snack-bar.component';
import {MatSnackBar, MatSnackBarRef, MatSnackBarModule} from '@angular/material/snack-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';


/**
 * @title Dialog Animations
 */
@Component({
  selector: 'dialog-animations-example',
  styleUrls: ['dialog-animations-example.scss'],
  templateUrl: 'dialog-animations-example.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule,FormsModule,FormsModule,MatInputModule,MatSnackBarModule,MatFormFieldModule]
})
export class DialogAnimationsExample {
  durationInSeconds = 600;
  constructor(public dialog: MatDialog,
    public snackBar: MatSnackBar) {}

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

  openSnackBar() {
    this.snackBar.openFromComponent(SnackBarComponent, {
      duration: this.durationInSeconds*1000,
      panelClass:'cunstom-snackBar'
    });
  }
}