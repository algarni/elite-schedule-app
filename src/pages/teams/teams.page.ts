import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home.page';
import { EliteApi } from "../../shared/elite-api.service";
// import { map } from "rxjs/operator/map";

@Component({
    templateUrl: './teams.page.html'
})
export class TeamsPage implements OnInit {

    teams = [];    

    constructor(
        private nav: NavController,
        private navParams: NavParams,
        private eliteApi: EliteApi
    ) { }

    ngOnInit() { }

    ionViewDidLoad() {
        let selectedTourney = this.navParams.data;
        this.eliteApi.getTournamentData(selectedTourney.id)
            .subscribe(data => {
                this.teams = data.teams;
            });
    }

    itemTapped($event, team) {
        this.nav.push(TeamHomePage, team);
    }
}