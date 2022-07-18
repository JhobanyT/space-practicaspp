import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-secretaria',
  templateUrl: './nav-secretaria.component.html',
  styleUrls: ['./nav-secretaria.component.css']
})
export class NavSecretariaComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router:Router, private authService: AuthService) {}

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }
}
