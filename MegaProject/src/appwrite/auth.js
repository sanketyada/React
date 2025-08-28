import conf from "../config/conf";
import { Client, Account, ID } from "appwrite";
//declaring A Class
export class AuthServices {
  client = new Client();

  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }
  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );
      if (userAccount) {
        //Call Another Method
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  //Login
  async login({ email, password }) {
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
  //GetCurrentuser
  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.log(`AppWrite Service Error in  getCurrentUser ${error}`);
    }
    return null;
  }
  //LogOut
  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log(`AppWrite Service Error in  LogOut ${error}`);
    }
  }
}

const authService = new AuthServices();//Object of Class AuthServices
//Exporting object
export default authService;
