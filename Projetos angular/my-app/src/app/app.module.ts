import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ListarComponent } from './pages/listar/listar.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ManipulandoJsonComponent } from './pages/manipulando-json/manipulando-json.component';
import { HttpClientModule } from '@angular/common/http';
import { SubRouteComponent } from './pages/sub-route/sub-route.component';
import { Page2Component } from './pages/sub-route/page2/page2.component';
import { Page1Component } from './pages/sub-route/page1/page1.component';
import { PrivadoComponent } from './pages/privado/privado.component';
import { DetalheComponent } from './detalhe/detalhe/detalhe.component';
import { ListaSimplesComponent } from './pages/lista-simples/lista-simples.component';
import { EditarComponent } from './pages/editar/editar.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { UserService } from './service/user.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { DialogContentExampleDialog, ModalComponent } from './pages/modal/modal.component';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { LestarComponent } from './pages/lestar/lestar.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListarComponent,
    HeaderComponent,
    FooterComponent,
    CadastroComponent,
    LoginComponent,
    MainComponent,
    ManipulandoJsonComponent,
    SubRouteComponent,
    Page2Component,
    Page1Component,
    PrivadoComponent,
    DetalheComponent,
    ListaSimplesComponent,
    EditarComponent,
    ModalComponent,
    LestarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDialogModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatBottomSheetModule,
    HttpClientModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    NgxMaskDirective,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatIconModule,
    NgxMaskPipe,
    DialogContentExampleDialog,
    MatDatepickerModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule
  ],
  providers: [UserService,provideNgxMask()],
  bootstrap: [AppComponent]
})
export class AppModule { }
