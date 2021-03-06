import {Component, Inject} from '@angular/core';
import {AppStore} from "./app-store";
import {Store} from "redux";
import {AppState} from "./reducers/index";
import ChatExampleData from "./ChatExampleData";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(@Inject(AppStore) private store: Store<AppState>) {
    ChatExampleData(store);
  }
}
