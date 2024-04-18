export interface MajorCredits {
    credit: number;
}

export interface MinorCredits {
    credit: number;
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): number {
    return subject1.credit + subject2.credit;
}
function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): number {
    return subject1.credit + subject2.credit;
}