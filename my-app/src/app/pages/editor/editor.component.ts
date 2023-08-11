import { Component, OnDestroy, OnInit, ViewEncapsulation } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Validators, Editor, Toolbar } from 'ngx-editor';
import jsonDoc from './doc';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class EditorComponent implements OnInit, OnDestroy {
  editordoc = jsonDoc;

constructor(public editor:Editor){}

  toolbar: Toolbar = [
    ['bold', 'italic'],
    ['underline', 'strike'],
    ['code', 'blockquote'],
    ['ordered_list', 'bullet_list'],
    [{ heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'] }],
    ['link', 'image'],
    ['text_color', 'background_color'],
    ['align_left', 'align_center', 'align_right', 'align_justify'],
  ];

  form = new FormGroup({
    editorContent: new FormControl(
      { value: jsonDoc, disabled: false },
      Validators.required()
    ),
  });


  ngOnInit(): void {
    this.editor = new Editor();
  }

  ngOnDestroy(): void {
    this.editor.destroy();
  }
}
