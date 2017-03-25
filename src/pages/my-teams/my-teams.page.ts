import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TournamentsPage } from '../tournaments/tournaments.page';

@Component({
    templateUrl: './my-teams.page.html'
})
export class MyTeamsPage {
    constructor(public nav: NavController) { }



    goToTournaments() {
        this.nav.push(TournamentsPage);
        console.log('Button is clicked!');
    }
}