import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatButtonModule,MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule, MatDatepickerModule, MatNativeDateModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule,MatIconModule, MatDatepickerModule, MatNativeDateModule],
  exports: [MatButtonModule, MatCheckboxModule,MatToolbarModule,MatInputModule,MatProgressSpinnerModule,MatCardModule,MatMenuModule, MatIconModule, MatDatepickerModule, MatNativeDateModule]
})


export class MaterialModule{}