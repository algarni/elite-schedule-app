import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { MyTeamsPage } from '../my-teams/my-teams.page';
import { TeamsPage } from '../teams/teams.page';
import { EliteApi } from '../../shared/elite-api.service';


@Component({
    templateUrl: './tournaments.page.html'
})
export class TournamentsPage{

    tournaments: any;    

    constructor(
        private nav: NavController,
        private eliteApi: EliteApi
    ) { }


    itemTapped($event, tourney) {
        this.nav.push(TeamsPage, tourney); 
    }

    ionViewDidLoad() {
        this.eliteApi.getTournaments()
            .then(data => this.tournaments = data);
    }
    
}