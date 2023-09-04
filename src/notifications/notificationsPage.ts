import { LocalNotifications } from "@capacitor/local-notifications";
import  ScheduleOptions  from "@capacitor/local-notifications";

export class NotificationsPage{
constructor(){}

async ngOnInit(){
 await LocalNotifications.requestPermissions();

}

async scheduleNotification(){
 await LocalNotifications.schedule({
     notifications: [
        {
            title: "tome agua",
            body: "tome agua",
            id: 1
        }
     ]
 })
}
}