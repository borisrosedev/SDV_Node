class ApiDataSource {
  static async get(endpoint, token) {
    try {
      const response = await fetch("http://localhost:3000/api/" + endpoint, {
        method: "GET",
        headers: {
          Authorization: "Bearer " + token,
        },
      });

      const deserializedResponse = await response.json();
      return deserializedResponse;
    } catch (e) {
      console.error(e);
    }
  }

  static async post(data, endpoint, token, method = "POST") {
    console.log(data);
    try {
      const response = await fetch("http://localhost:3000/api/" + endpoint, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + (token ?? ""),
        },
        body: JSON.stringify(data),
      });

      const deserializedResponse = await response.json();
      return deserializedResponse;
    } catch (e) {
      console.error(e);
    }
  }
}

export default ApiDataSource;
