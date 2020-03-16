import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('../pages/home/home.module').then( m => m.HomePageModule)},
  {
    path: 'BidingPage',
    loadChildren: () => import('../pages/angular/biding/biding.module').then( m => m.BidingPageModule)
  },
  {
    path: 'FormPage',
    loadChildren: () => import('../pages/angular/form/form.module').then( m => m.FormPageModule)
  },
  {
    path: 'NgClassPage',
    loadChildren: () => import('../pages/angular/ngclass/ngclass.module').then( m => m.NgclassPageModule)
  },
  {
    path: 'NgForPage',
    loadChildren: () => import('../pages/angular/ngfor/ngfor.module').then( m => m.NgforPageModule)
  },
  {
    path: 'NgIfPage',
    loadChildren: () => import('../pages/angular/ngif/ngif.module').then( m => m.NgifPageModule)
  },
  {
    path: 'NgSwitchPage',
    loadChildren: () => import('../pages/angular/ngswitch/ngswitch.module').then( m => m.NgswitchPageModule)
  },
  {
    path: 'ComponentsPage',
    loadChildren: () => import('../pages/api/components/components.module').then( m => m.ComponentsPageModule)
  },
  {
    path: 'DirectivesPage',
    loadChildren: () => import('../pages/api/directives/directives.module').then( m => m.DirectivesPageModule)
  },
  {
    path: 'PipesPage',
    loadChildren: () => import('../pages/api/pipes/pipes.module').then( m => m.PipesPageModule)
  },
  {
    path: 'ServicesPage',
    loadChildren: () => import('../pages/api/services/services.module').then( m => m.ServicesPageModule)
  },
  {
    path: 'ActionSheetPage',
    loadChildren: () => import('../pages/components/action-sheet/action-sheet.module').then( m => m.ActionSheetPageModule)
  },
  {
    path: 'AlertPage',
    loadChildren: () => import('../pages/components/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'BadgesChipsPage',
    loadChildren: () => import('../pages/components/badges-chips/badges-chips.module').then( m => m.BadgesChipsPageModule)
  },
  {
    path: 'ButtonsPage',
    loadChildren: () => import('../pages/components/buttons/buttons.module').then( m => m.ButtonsPageModule)
  },
  {
    path: 'CardsPage',
    loadChildren: () => import('../pages/components/cards/cards.module').then( m => m.CardsPageModule)
  },
  {
    path: 'DatetimePage',
    loadChildren: () => import('../pages/components/datetime/datetime.module').then( m => m.DatetimePageModule)
  },
  {
    path: 'FabsPage',
    loadChildren: () => import('../pages/components/fabs/fabs.module').then( m => m.FabsPageModule)
  },
  {
    path: 'FooterPage',
    loadChildren: () => import('../pages/components/footer/footer.module').then( m => m.FooterPageModule)
  },
  {
    path: 'GesturesPage',
    loadChildren: () => import('../pages/components/gestures/gestures.module').then( m => m.GesturesPageModule)
  },
  {
    path: 'GridPage',
    loadChildren: () => import('../pages/components/grid/grid.module').then( m => m.GridPageModule)
  },
  {
    path: 'HeaderPage',
    loadChildren: () => import('../pages/components/header/header.module').then( m => m.HeaderPageModule)
  },
  {
    path: 'IconsPage',
    loadChildren: () => import('../pages/components/icons/icons.module').then( m => m.IconsPageModule)
  },
  {
    path: 'InfiniteScrollPage',
    loadChildren: () => import('../pages/components/infinite-scroll/infinite-scroll.module').then( m => m.InfiniteScrollPageModule)
  },
  {
    path: 'InputsPage',
    loadChildren: () => import('../pages/components/inputs/inputs.module').then( m => m.InputsPageModule)
  },
  {
    path: 'ItemPage',
    loadChildren: () => import('../pages/components/item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'ListsPage',
    loadChildren: () => import('../pages/components/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'LoadingPage',
    loadChildren: () => import('../pages/components/loading/loading.module').then( m => m.LoadingPageModule)
  },
  {
    path: 'MenusPage',
    loadChildren: () => import('../pages/components/menus/menus.module').then( m => m.MenusPageModule)
  },
  {
    path: 'ModalPage',
    loadChildren: () => import('../pages/components/modal/modal.module').then( m => m.ModalPageModule)
  },
  {
    path: 'PopoverPage',
    loadChildren: () => import('../pages/components/popover/popover.module').then( m => m.PopoverPageModule)
  },
  {
    path: 'RangePage',
    loadChildren: () => import('../pages/components/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'RefresherPage',
    loadChildren: () => import('../pages/components/refresher/refresher.module').then( m => m.RefresherPageModule)
  },
  {
    path: 'SearchbarPage',
    loadChildren: () => import('../pages/components/searchbar/searchbar.module').then( m => m.SearchbarPageModule)
  },
  {
    path: 'SegmentPage',
    loadChildren: () => import('../pages/components/segment/segment.module').then( m => m.SegmentPageModule)
  },
  {
    path: 'SpinnerPage',
    loadChildren: () => import('../pages/components/spinner/spinner.module').then( m => m.SpinnerPageModule)
  },
  {
    path: 'TabsPage',
    loadChildren: () => import('../pages/components/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'ToastPage',
    loadChildren: () => import('../pages/components/toast/toast.module').then( m => m.ToastPageModule)
  },
  {
    path: 'TogglePage',
    loadChildren: () => import('../pages/components/toggle/toggle.module').then( m => m.TogglePageModule)
  },
  {
    path: 'VirtualScrollPage',
    loadChildren: () => import('../pages/components/virtual-scroll/virtual-scroll.module').then( m => m.VirtualScrollPageModule)
  },
  {
    path: 'CameraPage',
    loadChildren: () => import('../pages/plugins/camera/camera.module').then( m => m.CameraPageModule)
  },
  {
    path: 'GeolocationPage',
    loadChildren: () => import('../pages/plugins/geolocation/geolocation.module').then( m => m.GeolocationPageModule)
  },
  {
    path: 'NetworkPage',
    loadChildren: () => import('../pages/plugins/network/network.module').then( m => m.NetworkPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
