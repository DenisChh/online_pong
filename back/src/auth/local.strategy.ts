import { Strategy } from "passport-local";
import { PassportStrategy } from "@nestjs/passport";
import { Injectable } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { User } from "src/database";

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private authenticationService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<User> {
    console.log('local validate')
    console.log(username)
    console.log(password)
    const user = await this.authenticationService.validateAdmin(
      username, password
    );

    console.log('user')
    return user;
  }
}
