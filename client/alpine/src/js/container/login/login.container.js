import BaseContainer from "../../core/BaseContainer.js";
import AuthService from "../../services/auth/auth.service.js";

class LoginContainer extends BaseContainer {
  constructor(Alpine) {
    super(Alpine);
    const self = this;
    document.addEventListener("alpine:init", () => {
      this.Alpine.bind("LoginForm", () => ({
        "@submit.prevent"() {
          self.onSubmit();
        },
      }));
    });
  }

  onSubmit() {
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    AuthService.login({ email: emailValue, password: passwordValue });
  }
}

export default LoginContainer;
