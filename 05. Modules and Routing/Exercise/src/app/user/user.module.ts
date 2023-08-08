import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './list/list.component';
import { Test } from '../test';
import { RouterModule } from '@angular/router';
import { UserDetailsComponent } from '../user-details/user-details.component';
import { UserResolver } from './user-details-resolver';
import { AuthGuard } from './user-details-guard';

@NgModule({
  declarations: [
    UserListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: 'user/list', component: UserListComponent },
      { path: 'user/details/:id', resolve: { UserResolver }, canActivate: [AuthGuard], component: UserDetailsComponent }
    ])
  ],
  providers: [
    Test // -> { provide: Test, useClass: Test}
  ],
  exports: [
    UserListComponent
  ]
})
export class UserModule { }