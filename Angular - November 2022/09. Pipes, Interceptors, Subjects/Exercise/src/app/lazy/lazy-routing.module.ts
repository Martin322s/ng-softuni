import { RouterModule, Routes } from "@angular/router";
import { LazyComponent } from "./lazy/lazy.component";
import { HomeComponent } from "../home/home.component";

const routes: Routes = [
    { path: '', pathMatch: 'full', component: HomeComponent },
    { path: 'lazy', pathMatch: 'full', component: LazyComponent}
];

export const LazyRoutingModule = RouterModule.forChild(routes);