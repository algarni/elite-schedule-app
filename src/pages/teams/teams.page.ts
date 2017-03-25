import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TeamDetailPage } from "../team-detail/team-detail.page";

@Component({
    templateUrl: './teams.page.html'
})
export class TeamsPage implements OnInit {
    constructor(private nav: NavController) { }

    ngOnInit() { }

    itemTapped() {
        this.nav.push(TeamDetailPage);
    }
}