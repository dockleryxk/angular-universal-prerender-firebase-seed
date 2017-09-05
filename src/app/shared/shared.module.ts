import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MdButtonModule, MdButtonToggleModule, MdCardModule, MdCheckboxModule, MdChipsModule, MdDatepickerModule, MdDialogModule, MdGridListModule,
  MdIconModule,
  MdInputModule, MdListModule,
  MdMenuModule, MdNativeDateModule,
  MdProgressBarModule, MdProgressSpinnerModule, MdRadioModule, MdSlideToggleModule, MdTabsModule,
  MdToolbarModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MdToolbarModule,
    MdChipsModule,
    MdButtonModule,
    MdInputModule,
    MdDatepickerModule,
    MdMenuModule,
    MdButtonToggleModule,
    MdGridListModule,
    MdTabsModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdSlideToggleModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule,
    MdListModule,
    MdRadioModule
  ],
  exports: [
    CommonModule,
    MdToolbarModule,
    MdChipsModule,
    MdButtonModule,
    MdInputModule,
    MdDatepickerModule,
    MdNativeDateModule,
    MdCheckboxModule,
    MdMenuModule,
    MdButtonToggleModule,
    MdGridListModule,
    MdTabsModule,
    MdProgressBarModule,
    MdProgressSpinnerModule,
    MdSlideToggleModule,
    MdIconModule,
    MdCardModule,
    MdDialogModule,
    MdListModule,
    MdRadioModule
  ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule
    };
  }
}
