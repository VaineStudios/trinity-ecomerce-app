import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabLinksPage } from './tab-links.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabLinksPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'menu',
        loadChildren: () => import('../Pages/menu/menu.module').then( m => m.MenuPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo:'/tabs/home',
    pathMatch: 'full',
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabLinksPageRoutingModule {}
