import BaseContainer from "../../core/BaseContainer.js";

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
  }

  onClick() {
    window.location.pathname = "client/alpine/src/html/login.html";
  }
}

export default HomeContainer;
