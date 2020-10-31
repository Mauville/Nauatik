import {Injectable} from '@angular/core';
import {sessionVals} from './session.vals';
import {userVals} from './user.vals';
import {CategoryData} from './category/category.component';

@Injectable({
  providedIn: 'root'
})
export class MotherBrainService {
  session: sessionVals;
  user: userVals;

  // Terrible monkey patch cuz i was getting undefineds
  dummyuser: userVals = {
    username: 'mike',
    password: 'miller',
    phone: '55545556',
    add1: 'Icaiche44',
    add2: 'Icaiche48',
    ccnum: '1111222233334444',
  };

  dummyCat: CategoryData = {
    faIcon: 'assets/bottle.png',
    title: 'dummy',

  };

  dummysession: sessionVals = {
    chosenCat: this.dummyCat,
    choseCause: 'eco-brick',
    moneyearn: 10,
  };

  constructor() {
    this.user = this.dummyuser;
    this.session = this.dummysession;
  }

  public getChosenCat(): CategoryData {
    return this.session.chosenCat;
  }

  public getChosenCause(): string {
    return this.session.choseCause;
  }

  public getMoneyEarn(): number {
    return this.session.moneyearn;
  }

  public getUserName(): string {
    return this.user.username;
  }

  public getPassword(): string {
    return this.user.password;
  }

  public getAddress(): string[] {
    return [this.user.add1, this.user.add2];
  }

  public getCC(): string {
    return this.user.ccnum;
  }

  public getPhone(): string {
    return this.user.phone;
  }

  public setChosenCat(category: CategoryData): void {
    this.session.chosenCat = category;
  }

  public setChosenCause(cause: string): void {
    this.session.choseCause = cause;
  }

  public setMoneyEarn(money: number): void {
    this.session.moneyearn = money;
  }

  public setPhone(num: string): void {
    this.user.phone = num;
  }

  public setUserName(username: string): void {
    this.user.username = username;
  }

  public setPassword(pass: string): void {
    this.user.password = pass;
  }

  public setAddress(add: string[]): void {
    this.user.add1 = add[0];
    this.user.add2 = add[1];
  }

  public setCC(CC: string): void {
    this.user.ccnum = CC;
  }

}
