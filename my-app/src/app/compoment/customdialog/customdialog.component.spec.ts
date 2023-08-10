import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomdialogComponent } from './customdialog.component';

describe('CustomdialogComponent', () => {
  let component: CustomdialogComponent;
  let fixture: ComponentFixture<CustomdialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CustomdialogComponent]
    });
    fixture = TestBed.createComponent(CustomdialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
