import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { CategorylistComponent } from './categorylist/categorylist.component';
import { CategorytitleComponent } from './categorytitle/categorytitle.component';
import { MaincontentComponent } from './maincontent/maincontent.component';
import { ArrayComponent } from './categorylist/array/array.component';
import { DatabaseComponent } from './categorylist/database/database.component';
import { DateComponent } from './categorylist/date/date.component';
import { EngineeringComponent } from './categorylist/engineering/engineering.component';
import { FinancialComponent } from './categorylist/financial/financial.component';
import { FilterComponent } from './categorylist/filter/filter.component';
import { GoogleComponent } from './categorylist/google/google.component';
import { LogicalComponent } from './categorylist/logical/logical.component';
import { InfoComponent } from './categorylist/info/info.component';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    CategorylistComponent,
    CategorytitleComponent,
    MaincontentComponent,
    ArrayComponent,
    DatabaseComponent,
    DateComponent,
    EngineeringComponent,
    FinancialComponent,
    FilterComponent,
    GoogleComponent,
    LogicalComponent,
    InfoComponent,
    SearchComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> {
  throw new Error('Function not implemented.');
}
