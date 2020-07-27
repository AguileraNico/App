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
    Editable: number;
    Dia: string;
    Hora: string;
    Local: string;
    LocalGol: number;
    VisitanteGol: number;
    Visitante: string;
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

export interface IRound {
    RoundCd: number;
}
