import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { UserService } from "./user.service";
import { IUser } from "../shared/interfaces";

@Injectable({
    providedIn: 'root'
})
export class UserResolver implements Resolve<IUser> {
    constructor(private userService: UserService) {

    }
    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        return this.userService.loadUser(route.params['id']);
    }
}
