export interface ITeams {
    TeamCd: number;
    Name: string;
    Division: number;
}

export interface IPositions {
    Equipo: string;
    Pts: number;
    Pj: number;
    Pg: number;
    Pe: number;
    Pp: number;
    Gf: number;
    Ge: number;
    Dif: number;
}

export interface IFixture {
    Day: string;
    Hour: string;
    Local: string;
    LocalGoal: number;
    VisitorGoal: number;
    Visitor: string;
}

export interface IPromedios {
    Equipo: string;
    Tercero: number;
    Segundo: number;
    Primero: number;
    Pts: number;
    Pj: number;
    Dif: number;
}
