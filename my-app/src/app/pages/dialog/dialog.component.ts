import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CustomDialogComponent } from 'src/app/compoment/customdialog/customdialog.component';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog
    ) {}
data:any={
  title:'DialogTitle',
  content:'Dialogcontent'
}
  openDialog(data:any): void {
    const dialogRef = this.dialog.open(CustomDialogComponent, {
      panelClass: 'custom-dialog-container',
      data:data
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


