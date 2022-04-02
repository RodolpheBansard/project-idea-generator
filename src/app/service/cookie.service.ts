import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CookieService {

  constructor() { }

  setCookie(cookieName:string, cookieValue:string, expiration:number){
    const d = new Date();
    d.setTime(d.getTime() + (expiration*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  removeCookie(cookieName:string, cookieValue:string){
    const d = new Date();
    d.setTime(d.getTime() + (1));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  isCookieAlreadyExist(cookieName:string): boolean {
    var dc = document.cookie;
    var prefix = cookieName + "=";
    var begin = dc.indexOf("; " + prefix);
    if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
    } else {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
        end = dc.length;
      }
    }
    // because unescape has been deprecated, replaced with decodeURI
    //return unescape(dc.substring(begin + prefix.length, end));
    if(decodeURI(dc.substring(begin + prefix.length, end)) == null){
      return false
    }
    return true;
  }
}
