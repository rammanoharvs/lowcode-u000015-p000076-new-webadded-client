import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutsRoutingModule } from './layouts-routing.module';
import { LayoutsComponent } from './layouts.component';
import { NgbDropdownModule, NgbDropdown } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from '../../shared/shared.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SidePanelComponent } from './components/side-panel/side-panel.component';
import { PageLoaderComponent } from './components/page-loader/page-loader.component';
import { NeepageComponent } from './components/neepage/neepage.component';
import { Section1Component } from './components/neepage/section1/section1.component';


@NgModule({
  declarations: [
    LayoutsComponent,
    HeaderComponent,
    FooterComponent,
    SidePanelComponent,
    PageLoaderComponent,
    NeepageComponent,
    Section1Component
  ],
  imports: [
    CommonModule,
    LayoutsRoutingModule,
    NgbDropdownModule,
    NgbDropdown,
    SharedModule
  ]
})
export class LayoutsModule { }
