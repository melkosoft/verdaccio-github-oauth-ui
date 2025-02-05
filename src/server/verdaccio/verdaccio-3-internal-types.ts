// These are old flow types used in Verdaccio 3.
// https://github.com/verdaccio/verdaccio/blob/3.x/types/index.js

import { NextFunction as $NextFunctionVer } from "express"

export interface IUser {
  real_groups: string[]
  name: string
}

export interface IAuthWebUI {
  issueUIjwt(user: IUser, time: string): string
}

export interface IAuthMiddleware {
  apiJWTmiddleware(): $NextFunctionVer
  webUIJWTmiddleware(): $NextFunctionVer
}
