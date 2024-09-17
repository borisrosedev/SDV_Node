import BaseContainer from "../../core/BaseContainer.js";
import AuthService from "../../services/auth/auth.service.js";
import NotificationService from "../../services/notification/notification.service.js";

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

  async onSubmit() {
    const emailValue = document.getElementById("email").value;
    const passwordValue = document.getElementById("password").value;
    const response = await AuthService.login({ email: emailValue, password: passwordValue });
    if(response == "Authentication completed with success"){
      NotificationService.getInstance().setContent({ type: "success", value : "Connexion réussie" })
    } else {
      NotificationService.getInstance().setContent({ type: "error", value : "Connexion échouée" })  
    }
  }
}

export default LoginContainer;
