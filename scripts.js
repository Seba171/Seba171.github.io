// Set cookies (basic, without SameSite or Secure for local testing)
document.cookie = "session=test_GDPR";
document.cookie = "favorite_task=collect_Data";
document.cookie = "name=Oeschger";
document.cookie = "favorite_food=tripe";
document.cookie = "test1=Hello";
document.cookie = "test2=World";
document.cookie = "reader=1";

function alertCookie() {
  alert(document.cookie);
}

function showCookies() {
  document.getElementById("cookies").textContent = `> ${document.cookie}`;
}

function clearOutputCookies() {
  document.getElementById("cookies").textContent = "";
}

function showCookieValue() {
  const cookieValue = document.cookie
    .split("; ")
    .find((row) => row.startsWith("test2="))
    ?.split("=")[1];
  document.getElementById("cookie-value").textContent = `> ${cookieValue}`;
}

function clearOutputCookieValue() {
  document.getElementById("cookie-value").textContent = "";
}

function doOnce() {
  if (!document.cookie.split("; ").find((row) => row.startsWith("doSomethingOnlyOnce"))) {
    document.cookie = "doSomethingOnlyOnce=true; expires=Fri, 31 Dec 9999 23:59:59 GMT";
    document.getElementById("do-once").textContent = "> Do something here!";
  }
}

function clearOutputDoOnce() {
  document.getElementById("do-once").textContent = "";
}

function resetOnce() {
  document.cookie = "doSomethingOnlyOnce=; expires=Thu, 01 Jan 1970 00:00:00 GMT";
  document.getElementById("reset-once").textContent = "> Reset!";
}

function clearOutputResetOnce() {
  document.getElementById("reset-once").textContent = "";
}

function checkACookieExists() {
  if (document.cookie.split(";").some((item) => item.trim().startsWith("reader="))) {
    document.getElementById("a-cookie-existence").textContent = '> The cookie "reader" exists';
  } else {
    document.getElementById("a-cookie-existence").textContent = '> The cookie "reader" does NOT exist';
  }
}

function clearOutputACookieExists() {
  document.getElementById("a-cookie-existence").textContent = "";
}

function checkCookieHasASpecificValue() {
  const hasValue = document.cookie.split(";").some((item) => item.trim() === "reader=1");
  if (hasValue) {
    document.getElementById("a-specific-value-of-the-cookie").textContent = '> The cookie "reader" has a value of "1"';
  } else {
    document.getElementById("a-specific-value-of-the-cookie").textContent = '> The cookie "reader" does NOT have value "1"';
  }
}

function clearASpecificValueOfTheCookie() {
  document.getElementById("a-specific-value-of-the-cookie").textContent = "";
}
