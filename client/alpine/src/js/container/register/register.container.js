import BaseContainer from "../../core/BaseContainer.js";
import PretenderService from "../../services/pretender/pretender.service.js";

class RegisterContainer extends BaseContainer {
  constructor(Alpine) {
    super(Alpine);
    const self = this;
    document.addEventListener("alpine:init", () => {
      this.Alpine.bind("RegisterForm", () => ({
        "@submit.prevent"() {
          self.onSubmit();
        },
      }));
    });
  }

  async onSubmit() {
    const emailValue = document.getElementById("email").value 
    const passwordValue = document.getElementById("password").value 
    const confirmedPasswordValue = document.getElementById("confirmed-password").value
    const response = await PretenderService.register({ email: emailValue, password: passwordValue, confirmedPassword: confirmedPasswordValue})
    if(response == "Registering completed with success") {
      //setTimeout()
      window.location.pathname = "client/alpine/src/html/login.html"
    }
  }
}

export default RegisterContainer;
