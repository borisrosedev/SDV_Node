class NotificationService {
    static instance;
    static timeoutId = 0;
    constructor() {}
    static getInstance() {
        if(NotificationService.instance == null){
            NotificationService.instance = new NotificationService()
        }
        return NotificationService.instance
    }

    setContent(data) {
        const notificationAside = document.getElementById("app-notification")
        notificationAside.innerHTML = `<p class="custom-notification ${data.type}-notification"> ${data.value}</p>`
        clearTimeout(this.timeoutId);

        this.timeoutId = setTimeout(() => {
            notificationAside.innerHTML = "";
        }, 5000)
    }
}

export default NotificationService