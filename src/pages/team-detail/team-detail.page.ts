import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
    templateUrl: './team-detail.page.html'
})
export class TeamDetailPage implements OnInit {

    team: any;
    
    constructor(
        private nav: NavController,
        private navParams: NavParams
    ) { }

    ngOnInit(){
        this.team = this.navParams.data;
        console.log('**nav params: ', this.navParams);
    }



}