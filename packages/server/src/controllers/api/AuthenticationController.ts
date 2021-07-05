import {Controller, Post} from "@tsed/common";

@Controller("/auth")
export class AuthenticationController {
  @Post("/login")
  loginUser() {

  }

  @Post("/whoami")
  who() {

  }
}
