import { Component } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-betaal-pagina',
  standalone: true,
  imports: [],
  templateUrl: './betaal-pagina.component.html',
  styleUrl: './betaal-pagina.component.css'
})
export class BetaalPaginaComponent {
  constructor(private router: Router) {}

    OnCash() {
    alert('De kassa wordt geopend');
    setTimeout(() => {
      this.router.navigate(['/drinken']); 
    }, 2000);
    localStorage.clear();    
  }

  OnBancontact() {
    alert('Kijk op de betaalterminal');
    setTimeout(() => {
      this.router.navigate(['/drinken']); 
    }, 2000);
    localStorage.clear();    
  }

  OnStudentenkaart() {
    alert('Leg de kaart op de terminal');
    setTimeout(() => {
      this.router.navigate(['/drinken']); 
    }, 2000);
    localStorage.clear();    
  }

  OnPaypal() {
    alert('U kunt nu betalen met paypal. Kijk op het schermpje');
    setTimeout(() => {
      this.router.navigate(['/drinken']); 
    }, 2000);
    localStorage.clear();    
  }

  OnPayconic() {
    alert('U kunt nu betalen met payconic. Kijk op het schermpje');
    setTimeout(() => {
      this.router.navigate(['/drinken']); 
    }, 2000);
    localStorage.clear();    
  }
}
