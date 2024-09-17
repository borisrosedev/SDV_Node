import ApiDataSource from "../../data-sources/remote-data-sources/api-data-source.js";

class PretenderService {
    static async register(data) {
        if(!(data.email && data.password && data.confirmedPassword && data.password === data.confirmedPassword)) return "Missing Data"
        delete data.confirmedPassword
        const response = await ApiDataSource.post(data, "pretenders/register", null)
        if(response.id) return "Registering completed with success"
    }
}

export default PretenderService;