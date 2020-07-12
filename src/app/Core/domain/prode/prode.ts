export interface IUserMatch {
    TournamentCd: number;
    MatchCd: number;
    UserCd: string;
    LocalGoal: number;
    VisitorGoal: number;
}

export interface IUserProde {
    MatchCd: number;
    Editable: number;
    DateTime: Date;
    Day: string;
    Hour: string;
    Local: string;
    LocalGoal: number;
    VisitorGoal: number;
    Visitor: string;
}