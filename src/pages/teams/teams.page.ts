import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { TeamHomePage } from '../team-home/team-home.page';

@Component({
    templateUrl: './teams.page.html'
})
export class TeamsPage implements OnInit {

    teams = [
        { id: 1, name: 'HC Elite' },
        { id: 2, name: 'Team Takeover' },
        { id: 3, name: 'DC Thunder' }
    ];

    constructor(private nav: NavController) { }

    ngOnInit() { }

    itemTapped($event, team) {
        this.nav.push(TeamHomePage, team);
    }
}