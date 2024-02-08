import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isShrunk = false;
  @HostListener('window:scroll', ['$event'])
  onScroll(): void {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    this.isShrunk = scrollY > 50;
  }
}
