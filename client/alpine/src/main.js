import Alpine from "../../node_modules/alpinejs/dist/module.esm.js";
import HomeContainer from "./js/container/home/home.container.js";
import LoginContainer from "./js/container/login/login.container.js";

window.Alpine = Alpine;

const pathname = document.location.pathname.split("/");
const page = pathname[pathname.length - 1];

switch (page) {
  case "index.html":
    console.log("home");
    new HomeContainer(Alpine);
    Alpine.start();
    break;
  case "login.html":
    console.log("login");
    new LoginContainer(Alpine);
    Alpine.start();
    break;
  case "register.html":
    console.log("register");
    Alpine.start();
    break;
  default:
    console.log("404 redirect");
    Alpine.start();
    break;
}
