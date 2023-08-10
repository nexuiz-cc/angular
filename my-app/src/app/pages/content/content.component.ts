import { Component } from '@angular/core';

interface Irow {
  header: string;
  items: any[];
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent {
  rows: any = [
    { header: 'title1', items: [1, 2] },
    { header: 'title2', items: [3, 4] },
    { header: 'title3', items: [5, 6] },
    { header: 'title4', items: [7, 8] },
    { header: 'title5', items: [9] },
  ];
  rs: any = {
    pp: [],
  };

  getParam() {
    this.rows.forEach((row: any, index: number) => {
      this.rs.pp.push({
        type: 'title' + (index + 1),
        slide: row.items.map((item: any) => 'slide' + (item.toString().padStart(2, '0'))),
      });
    });
    return this.rs;
  }

  ngOnInit() {
    
  }
}
