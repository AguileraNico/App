export class TeamsDivisionBody {
    DivisionCd: number;

    constructor(divisionCd: number) {
        this.DivisionCd = divisionCd;
    }
}

export class TeamsLigaBody {
    LigaCd: number;
    DivisionCd: number;

    constructor(LigaCd: number, DivisionCd: number) {
        this.LigaCd = LigaCd;
        this.DivisionCd = DivisionCd;
    }
}

export class TeamsFixtureBody {
    LigaCd: number;
    DivisionCd: number;
    RoundCd: number;

    constructor(liga: number, division: number, round: number) {
        this.LigaCd = liga;
        this.DivisionCd = division;
        this.RoundCd = round;
    }
}
