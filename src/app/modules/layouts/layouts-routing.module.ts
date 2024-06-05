import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from './layouts.component';
import { NeepageComponent } from './components/neepage/neepage.component';

const routes: Routes = [{ path: '', component: LayoutsComponent, children: [{path : 'neepage', component : NeepageComponent , pathMatch : "full" }]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }
