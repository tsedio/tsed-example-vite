import {Controller, Post, Get, QueryParams} from "@tsed/common";
import {Inject} from "@tsed/di";
import {Name, Returns} from "@tsed/schema";

@Controller("/auth")

export class AuthenticationController {
    @Post("/login")
    loginUser() {

    }

    @Post("/whoami")
    who() {

    }
}
