import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { StandingsPage } from '../standings/standings.page';
import { TeamDetailPage } from '../team-detail/team-detail.page';
import { MyTeamsPage } from '../my-teams/my-teams.page';

/*
  Generated class for the TeamHome page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-team-home',
  templateUrl: 'team-home.page.html'
})
export class TeamHomePage implements OnInit{
team: any;
  teamDetailTab = TeamDetailPage;
  standingsTab = StandingsPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ngOnInit(){
    this.team = this.navParams.data;
  }

  goHome(){
    // this.navCtrl.push(MyTeamsPage);
    this.navCtrl.popToRoot();
  }

}
