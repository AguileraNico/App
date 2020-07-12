export class UserMatchBody {
    TournamentCd: number;
    MatchCd: number;
    UserCd: string;
    LocalGoal: number;
    VisitorGoal: number;

    constructor(tournamentCd: number, matchCd: number, userCd: string, localGoal: number, visitorGoal: number) {
        this.TournamentCd = tournamentCd;
        this.MatchCd = matchCd;
        this.UserCd = userCd;
        this.LocalGoal = localGoal;
        this.VisitorGoal = visitorGoal;
    }
}

export class TeamsUserProdeBody {
    LigaCd: number;
    DivisionCd: number;
    UserCd: string;

    constructor(liga: number, division: number, user: string) {
        this.LigaCd = liga;
        this.DivisionCd = division;
        this.UserCd = user;
    }
}