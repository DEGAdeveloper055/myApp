import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    { path: '', loadChildren: 'src/app/_components/home/home.module#HomeModule' },
    { path: 'pagina', loadChildren: 'src/app/_components/pagina/pagina.module#PaginaModule' },
    { path: 'pagina2', loadChildren: 'src/app/_components/pagina2/pagina2.module#Pagina2Module' },
    // { path: '**', loadChildren: 'src/app/_components/page-not-found/page-not-found.module#PageNotFoundModule' }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class RoutingModule { }