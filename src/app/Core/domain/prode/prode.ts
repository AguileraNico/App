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
    Dia: string;
    Hora: string;
    Local: string;
    LocalGol: number;
    VisitanteGol: number;
    Visitante: string;
}
