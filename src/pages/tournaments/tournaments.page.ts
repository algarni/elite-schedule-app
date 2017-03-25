import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

// import { MyTeamsPage } from '../my-teams/my-teams.page';
import { TeamsPage } from '../teams/teams.page';


@Component({
    templateUrl: './tournaments.page.html'
})
export class TournamentsPage{
    constructor(private nav: NavController) { }


    itemTapped() {
        this.nav.push(TeamsPage); 
    }
    
}