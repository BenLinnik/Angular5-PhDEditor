import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

import { EditorpageRoutingModule } from './editorpage-routing.module';
import { EditorpageComponent } from './editorpage.component';
import { CKEditorModule } from 'ng2-ckeditor';

import { FormsModule } from '@angular/forms';


@NgModule({
    imports: [
        CommonModule,
        TranslateModule,
        EditorpageRoutingModule,
        CKEditorModule,
        FormsModule
    ],
    declarations: [
      EditorpageComponent
    ]
})
export class EditorpageModule { }