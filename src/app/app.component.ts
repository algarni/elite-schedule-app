import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, LoadingController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HttpModule } from '@angular/http';

import { MyTeamsPage } from '../pages/my-teams/my-teams.page';
import { TournamentsPage } from '../pages/tournaments/tournaments.page';
import { UserSettings } from "../shared/user-settings.service";
import { EliteApi } from "../shared/elite-api.service";
import { TeamHomePage } from "../pages/team-home/team-home.page";


@Component({
  templateUrl: 'app.html',
  providers: [HttpModule]
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  favoriteTeams: any[];
  rootPage: any = MyTeamsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private userSettings: UserSettings,
    private loadingController: LoadingController,
    private eliteApi: EliteApi,
    private events: Events
  ) {
    this.initializeApp();

    

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.refreshFavorites();

      this.events.subscribe('favorites:changed', () => this.refreshFavorites());
    });
  }

  refreshFavorites() {
    this.favoriteTeams = this.userSettings.getAllFavorites();
    console.log('favoriteTeams:::', this.favoriteTeams);
  }

  goHome() {
    this.nav.push(MyTeamsPage);
  }

  goToTeam(favorite) {
    let loader = this.loadingController.create({
      content: 'Getting data...',
      dismissOnPageChange: true
    });
    loader.present();
    this.eliteApi.getTournamentData(favorite.tournamentId).subscribe(l => this.nav.push(TeamHomePage, favorite.team));
  }

  goToTournemants() {
    this.nav.push(TournamentsPage);
  }
}
