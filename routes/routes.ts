import * as express from "express";
const router = express.Router();
const passport = require("passport");
const UserController = require("../controller/UserController");
const jwt = require("jsonwebtoken");
// seralize user Object
import LocaleRoute from "./provider/Locale";
import * as expressJoiValidator from "express-joi-validator";
import expressJoi from "../lib/requestValidator";
import FacebookRoutes from "./provider/Facebook";
import GoogleRoutes from "./provider/Google";
import LinkedinRoutes from "./provider/Linkedin";
import Template from "../helper/responseTemplate";
import TwitterRoute from "./provider/Twitter";
import * as template from '../helper/responseTemplate';
const boom = require("express-boom");
import { Router, Request, Response, NextFunction } from "express";

export class AuthRouter {
  router: Router;

  /**
   * Initialize the HeroRouter
   */
  constructor() {
    this.router = Router();
    this.init();
  }
  public register(req: any, res: any) {
    UserController.registerDefault(req, res, (error, user) => {
      if (error) {
        res.status(400).json(Template.userAlreadyExist(error.message));
      } else {
        res.json({
          statusCode: 200,
          message: "success",
          user
        });
      }
    });
  }
  public login(req: any, res: any) {
    UserController.validateUser(req, res, (err, token) => {
      if (err) {
        res.status(401).json(Template.userdoesNotExist(err));
      } else {
        res.status(200).json({
          success: true,
          message: "success",
          token
        });
      }
    });
  }
  public redirectSocialUser(req, res) {
    jwt.sign({ user: req.user }, "secretkey", (tokError, token) => {
      if (tokError) {
        res.boom.badImplementation(tokError);
      } else {
        // redirect app to FE app routes with Token
        res.json({
          statusCode: 200,
          message: "success",
          token
        });
      }
    });
  }
  /**
   * Take each handler, and attach to one of the Express.Router's
   * endpoints.
   */
  init() {
    this.router.post("/login", this.login);
    this.router.post(
      "/register",
      expressJoiValidator(expressJoi.createUser),
      this.register
    );
    /**
     * @api {POST} /auth/login/facebook Social Login
     * @apiName google
     * @apiGroup Auth
     * @apiSuccess {String} code HTTP status code from API.
     * @apiSuccess {String} message Message from API.
     */
    this.router.get("/login/facebook", FacebookRoutes.authenticate());
    this.router.get(
      "/callback/facebook",
      FacebookRoutes.callback(),
      this.redirectSocialUser
    );

    /**
     * @api {POST} /auth/login/google Social Login
     * @apiName google
     * @apiGroup Auth
     * @apiSuccess {String} code HTTP status code from API.
     * @apiSuccess {String} message Message from API.
     */
    this.router.get("/login/google", GoogleRoutes.authenticate());
    this.router.get(
      "/callback/google",
      GoogleRoutes.callback(),
      this.redirectSocialUser
    );

    /**
     * @api {POST} /auth/login/twitter Social Login
     * @apiName twitter
     * @apiGroup Auth
     * @apiSuccess {String} code HTTP status code from API.
     * @apiSuccess {String} message Message from API.
     */
    /*this.router.get("/login/twitter", TwitterRoute.authenticate("twitter"));
    this.router.get(
      "/callback/twitter",
      TwitterRoute.callback(),
      this.redirectSocialUser
    ); */

    /**
     * @api {POST} /auth/login/linkedin Social Login
     * @apiName linkedin
     * @apiGroup Auth
     * @apiSuccess {String} code HTTP status code from API.
     * @apiSuccess {String} message Message from API.
     */
    this.router.get("/login/linkedin", LinkedinRoutes.authenticate());
    this.router.get(
      "/callback/linkedin",
      LinkedinRoutes.callback(),
      this.redirectSocialUser
    );
  }
}

// Create the HeroRouter, and export its configured Express.Router
const authRoutes = new AuthRouter();
authRoutes.init();

export default authRoutes.router;
