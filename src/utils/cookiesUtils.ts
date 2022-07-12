export const setCookie = (cUser: string, cvalue: {}, exdays: number) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cUser + "=" + JSON.stringify(cvalue) + ";" + expires;
    console.log("user :", cvalue);
  };

  export const getCookie = (cUser: string) => {
    let user = cUser + "=";
    let ca = document.cookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(user) == 0) {
        console.log("cookie", c.substring(user.length, c.length));
        return c.substring(user.length, c.length);
      }
    }
    return "";
  };

