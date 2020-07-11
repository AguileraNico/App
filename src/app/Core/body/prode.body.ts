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