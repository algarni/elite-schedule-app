import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

// import { MyTeamsPage } from '../my-teams/my-teams.page';
import { TeamsPage } from '../teams/teams.page';
import { EliteApi } from '../../shared/elite-api.service';


@Component({
    templateUrl: './tournaments.page.html'
})
export class TournamentsPage {

    tournaments: any;

    constructor(
        private nav: NavController,
        private eliteApi: EliteApi,
        private loadinController: LoadingController
    ) { }


    itemTapped($event, tourney) {
        this.nav.push(TeamsPage, tourney);
    }

    ionViewDidLoad() {
        let loader = this.loadinController.create({
            content: 'Getting tournaments...'
        });

        loader.present().then(() => {
            this.eliteApi.getTournaments()
                .then(data => {
                    this.tournaments = data;
                    loader.dismiss();
                });
        });

    }

}