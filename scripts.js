<script>
    document.cookie = "session=test GDPR";
    document.cookie = "favorite_task=collect Data";
    document.cookie = "name=Oeschger; SameSite=None; Secure";
    document.cookie = "favorite_food=tripe; SameSite=None; Secure";
    document.cookie = "test1=Hello; SameSite=None; Secure";
    document.cookie = "test2=World; SameSite=None; Secure";
    document.cookie = "reader=1; SameSite=None; Secure";

    function alertCookie() {
      alert(document.cookie);
    }

    function showCookies() {
      const output = document.getElementById("cookies");
      output.textContent = `> ${document.cookie}`;
    }

    function clearOutputCookies() {
      document.getElementById("cookies").textContent = "";
    }

    function showCookieValue() {
      const cookieValue = document.cookie
        .split("; ")
        .find((row) => row.startsWith("test2="))
        ?.split("=")[1];
      const output = document.getElementById("cookie-value");
      output.textContent = `> ${cookieValue}`;
    }

    function clearOutputCookieValue() {
      document.getElementById("cookie-value").textContent = "";
    }

    function doOnce() {
      if (!document.cookie.split("; ").find((row) => row.startsWith("doSomethingOnlyOnce"))) {
        document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT; SameSite=None; Secure";
        document.getElementById("do-once").textContent = "> Do something here!";
      }
    }

    function clearOutputDoOnce() {
      document.getElementById("do-once").textContent = "";
    }

    function resetOnce() {
      document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT; SameSite=None; Secure";
      document.getElementById("reset-once").textContent = "> Reset!";
    }

    function clearOutputResetOnce() {
      document.getElementById("reset-once").textContent = "";
    }

    function checkACookieExists() {
      if (document.cookie.split(";").some((item) => item.trim().startsWith("reader="))) {
        document.getElementById("a-cookie-existence").textContent = '> The cookie "reader" exists';
      }
    }

    function clearOutputACookieExists() {
      document.getElementById("a-cookie-existence").textContent = "";
    }

    function checkCookieHasASpecificValue() {
      if (document.cookie.split(";").some((item) => item.includes("reader=1"))) {
        document.getElementById("a-specific-value-of-the-cookie").textContent = '> The cookie "reader" has a value of "1"';
      }
    }

    function clearASpecificValueOfTheCookie() {
      document.getElementById("a-specific-value-of-the-cookie").textContent = "";
    }
  </script>
</body>
