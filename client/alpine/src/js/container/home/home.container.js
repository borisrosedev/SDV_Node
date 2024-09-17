import BaseContainer from "../../core/BaseContainer.js";
import NotificationService from "../../services/notification/notification.service.js";

class HomeContainer extends BaseContainer {
  constructor(Alpine) {
    super(Alpine);
    const self = this;
    document.addEventListener("alpine:init", () => {
      this.Alpine.bind("NavigateButton", () => ({
        type: "button",

        "@click"() {
          self.onClick();
        },
      }));
    });

    NotificationService.getInstance().setContent({type: "info", value: "Bienvenue sur MatchUp"})
  }

  onClick() {
    window.location.pathname = "client/alpine/src/html/login.html";
  }
}

export default HomeContainer;
