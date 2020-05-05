import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {NameComponent} from "./components/name/name.component";
import {QuizComponent} from "./components/quiz/quiz.component";


const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'name'},
  {
    path: 'name',
    component: NameComponent
    // canActivate: [NameGuard], //TODO GUARD czy podane imie
  },
  {
    path: 'quiz',
    component: QuizComponent
    // canActivate: [NameGuard], //TODO GUARD czy podane imie
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{useHash: true})
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {
}
