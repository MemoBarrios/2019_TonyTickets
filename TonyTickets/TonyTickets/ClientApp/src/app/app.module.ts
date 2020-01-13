import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { HeadComponent } from './head/head.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';

import { PerfilComponent } from './perfil/perfil.component';
import { IncidentesComponent } from './tickets/incidentes/incidentes.component';
import { SolicitudesComponent } from './tickets/solicitudes/solicitudes.component';
import { ReportesComponent } from './reportes/reportes.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { CapturaComponent } from './tickets/captura/captura.component';
import { DragDropDirective } from './tickets/captura/drag-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    HeadComponent,
    SidebarComponent,
    FooterComponent,
    PerfilComponent,
    IncidentesComponent,
    SolicitudesComponent,
    ReportesComponent,
    UsuariosComponent,
    CapturaComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'perfil', component: PerfilComponent },
      { path: 'incidentes', component: IncidentesComponent },
      { path: 'solicitudes', component: SolicitudesComponent },
      { path: 'reportes', component: ReportesComponent },
      { path: 'usuarios', component: UsuariosComponent },
      { path: 'incidentes/captura', component: CapturaComponent },
      { path: 'solicitudes/captura', component: CapturaComponent }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
