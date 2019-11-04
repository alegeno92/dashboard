import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardComponent} from './dashboard/dashboard.component';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {LayoutModule} from '@angular/cdk/layout';
import {NavComponent} from './nav/nav.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {NgxGaugeModule} from 'ngx-gauge';
import {UiGaugeComponent} from './ui/ui-gauge/ui-gauge.component';
import {WidgetMemoryComponent} from './widget-memory/widget-memory.component';
import {WidgetProcessorComponent} from './widget-processor/widget-processor.component';
import {WidgetStorageComponent} from './widget-storage/widget-storage.component';
import {UiWidgetComponent} from './ui/ui-widget/ui-widget.component';
import {WidgetPeopleCounterComponent} from './widget-people-counter/widget-people-counter.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavComponent,
    UiGaugeComponent,
    UiWidgetComponent,
    WidgetMemoryComponent,
    WidgetProcessorComponent,
    WidgetStorageComponent,
    WidgetPeopleCounterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    NgxGaugeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
