function autoLogin() {
  browser.storage.sync.get(["userId", "userPw"]).then((result) => {
    if (result.userId && result.userPw) {
      const idField = document.querySelector("#loginId");
      if (idField) idField.value = result.userId;

      const pwField = document.querySelector("#loginPwd");
      if (pwField) pwField.value = result.userPw;

      const loginButton = document.evaluate(
        "/html/body/div[1]/div/div/div[2]/form/div[2]/button",
        document,
        null,
        XPathResult.FIRST_ORDERED_NODE_TYPE,
        null
      ).singleNodeValue;

      if (loginButton) loginButton.click();
    }
  });
}

if (window.location.href.includes("klas.kw.ac.kr")) {
  autoLogin();
}
