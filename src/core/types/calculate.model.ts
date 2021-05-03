export interface InvestmentDetails {
    principal: number,
    rate: number,
    compound_period: number,
    time: number,
    addition?: number,
    esclation? : number,
    results?:number,
    total_contributions?:number
}