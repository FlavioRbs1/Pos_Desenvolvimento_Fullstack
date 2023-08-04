import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AutorizacaoService } from '../services/autorizacao.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn:'root'
})
export class autorizadoGuard implements CanActivate{
 
  constructor(
    private autorizadoService:AutorizacaoService,
    private routerService:Router
  ){}
  
  canActivate(
    route: ActivatedRouteSnapshot, 
    state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    const usuarioEstaLogado = this.autorizadoService.obterLoginStatus();
    if (usuarioEstaLogado)
      return true;
      this.routerService.navigate(["/login"]);
      return false;
    }
}

