import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';



import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TournamentsPage } from "../pages/tournaments/tournaments.page";
import { TeamsPage } from "../pages/teams/teams.page";
import { TeamDetailPage } from "../pages/team-detail/team-detail.page";
import { StandingsPage } from "../pages/standings/standings.page";
import { TeamHomePage } from "../pages/team-home/team-home.page";

import { EliteApi } from '../shared/elite-api.service';
import { GamePage } from "../pages/game/game.page";
import { IonicStorageModule } from "@ionic/storage";
import { UserSettings } from "../shared/user-settings.service";

@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage,
    GamePage,
  ],
  imports: [
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    TournamentsPage,
    TeamsPage,
    TeamDetailPage,
    StandingsPage,
    TeamHomePage,
    GamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    EliteApi,
    UserSettings
  ]
})
export class AppModule {}
