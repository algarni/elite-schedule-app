import { Injectable } from '@angular/core';
import { Storage } from "@ionic/storage";
import { Events } from "ionic-angular";
// import * as _ from 'lodash';

@Injectable()
export class UserSettings {

    constructor(
        private storage: Storage,
        private events: Events
    ) { }

    favoriteTeam(team, tournamentId, tournamentName) {
        let item = {
            team: team,
            tournamentId: tournamentId,
            tournamentName: tournamentName
        }
        this.storage.set(team.id.toString(), JSON.stringify(item));
        this.events.publish('favorites:changed');
    }

    unfavoriteTeam(team) {
        this.storage.remove(team.id.toString());
        this.events.publish('favorites:changed');
    }

    isFavoriteTeam(teamId) {
        return this.storage.get(teamId.toString()).then(value => value ? true : false);
    }

    getAllFavorites() {
        let results: any[] = [];
        this.storage.forEach(data => {
            results.push(JSON.parse(data));
            console.log('data', data);
        });
        return results;
    }
}