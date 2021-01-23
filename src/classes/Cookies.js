/**
 * LibertyPie (https://libertypie.com)
 * @author LibertyPie <hello@libertypie.com>
 * @license MIT
 */

export default class Cookies{
  
  /**
   * set cookie for x number of days
   * @param {string} cname 
   * @param {string} cvalue 
   * @param {integer} exdays 
   */
  setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }



  /**
   * set json cookie for x number of days
   * @param {string} cname 
   * @param {json object} cvalue 
   * @param {integer} exdays 
   */
  setJsonCookie(cname, cvalue, exdays) {
    setCookie(cname, JSON.stringify(cvalue), exdays);
  }



  /**
   * get cookie valye
   * @param {string} cname
   */
  getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }



  /**
   * get json cookie
   * @param {string} cname 
   */
  getJsonCookie(cname) {
    return JSON.parse(getCookie(cname));
  }



  /**
   * returns boolean, checks for cookie existence
   * @param {string} cname
   */
  checkCookie(cname) {
    var user = getCookie(cname);
    if (user != "") {
      return true;
    }

    return false;
  }

}