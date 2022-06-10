import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayComponent } from './categorylist/array/array.component';
import { DateComponent } from './categorylist/date/date.component';
import { CategorytitleComponent } from './categorytitle/categorytitle.component';
import { DatabaseComponent } from './categorylist/database/database.component';
import { EngineeringComponent } from './categorylist/engineering/engineering.component';
import { FilterComponent } from './categorylist/filter/filter.component';
import { FinancialComponent } from './categorylist/financial/financial.component';
import { GoogleComponent } from './categorylist/google/google.component';
import { InfoComponent } from './categorylist/info/info.component';
import { LogicalComponent } from './categorylist/logical/logical.component';

const routes: Routes = [
  {path:"",component:ArrayComponent},
  {path:"Database",component:DatabaseComponent},
  {path:"Date",component:DateComponent},
  {path:"Engineering",component:EngineeringComponent},
  {path:"Filter",component:FilterComponent},
  {path:"Financial",component:FinancialComponent},
  {path:"Google",component:GoogleComponent},
  {path:"Info",component:InfoComponent},
  {path:"Logical",component:LogicalComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
