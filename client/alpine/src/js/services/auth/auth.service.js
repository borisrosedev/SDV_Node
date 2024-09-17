import LocalStorageDataSource from "../../data-sources/local-data-sources/localstorage-data-source.js";
import ApiDataSource from "../../data-sources/remote-data-sources/api-data-source.js";

class AuthService {
  static async login(data) {
    if (!data.email || !data.password) {
      return "data missing";
    }
    const response = await ApiDataSource.post(data, "pretenders/login", null);
    if (!response.token) return "Authentication failed";
    LocalStorageDataSource.setSpecificItem("token", response.token);
    return "Authentication completed with success";
  }
}

export default AuthService;
