import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ErrorComponent } from './error/error.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HeroComponent, title: 'home' },
  { path: 'about', component: AboutComponent, title: 'about' },
  { path: 'portfolio', component: PortfolioComponent, title: 'portfolio' },
  { path: 'contact', component: ContactComponent, title: 'contact' },
  { path: '**', component: ErrorComponent, title: 'Not Found' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
