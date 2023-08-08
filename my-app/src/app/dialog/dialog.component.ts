import { Component } from '@angular/core';
import { MatDialog ,MatDialogRef,MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {
  constructor(public dialog: MatDialog
    ) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(Dialog, {
      width: '1000px',
      panelClass: 'custom-dialog-container',
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


@Component({
  selector: 'dialog-animations-example-dialog',
  templateUrl: './dialog-animations-example-dialog.html',
  standalone: true,
  imports: [MatButtonModule, MatDialogModule],
})
export class Dialog {
  
  constructor(public dialogRef: MatDialogRef<Dialog>
    ) {}
    close(){
      this.dialogRef.close()
    }
}
