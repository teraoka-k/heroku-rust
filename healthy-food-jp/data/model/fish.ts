// provisonal tolerable weekly intake, unit is microgram per kilogram
const MERCURY_PTWI_MG_KG = 1.6

export default class Fish {
  name: string
  mercuryMgPerG: number
  ptwiGPerKg: number
  type: FishType

  constructor(name: string, mercuryMgPerG: number, type: FishType) {
    this.name = name
    this.mercuryMgPerG = mercuryMgPerG
    this.ptwiGPerKg = MERCURY_PTWI_MG_KG / mercuryMgPerG
    this.type = type
  }

  /**
   * get provisional tolerable weekly intake in gram
   */
  ptwiG(bodyWeightKg: number): number {
    return this.ptwiGPerKg * bodyWeightKg
  }

  /**
   * get provisional tolerable dayly intake in gram
   */
  ptdiG(bodyWeightKg: number): number {
    return (this.ptwiGPerKg / 7) * bodyWeightKg
  }
}

export type FishType =
  | '魚類'
  | '甲殻類'
  | '貝類'
  | 'イカ・タコ'
  | 'イルカ・クジラ'
  | '缶詰'
  | '内臓'
  | 'ウニ・ヒトデ'
