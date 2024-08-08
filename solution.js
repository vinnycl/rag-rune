class Solution {
    constructor(runes, stringRunes) {
        this.runes = runes;
        this.skillRunes = this.setSkillRunes(runes, stringRunes);
        this.attributeRunes = this.setAttributeRunes(runes);
        this.key = this.setKey(this.attributeRunes);
    }

    setKey(s) {
        return `Ataque:${this.countChar(s, 'A')} Defesa:${this.countChar(s, 'D')} Buff:${this.countChar(s, 'B')} U Any:${this.countChar(s, 'U')}`;
    }

    setSkillRunes(runes, stringRunes) {
        let s = "";
        for (let i = 0; i < runes.length; i++) {
            s += stringRunes[runes[i][4]];
            if (i < runes.length - 1) s += ",";
        }
        return s;
    }

    setAttributeRunes(runes) {
        return this.getRuneChar(runes[0][0]) + "," +
               this.getRuneChar(runes[0][1], runes[1][0]) + "," +
               this.getRuneChar(runes[0][2], runes[2][0]) + "," +
               this.getRuneChar(runes[1][1], runes[3][0]) + "," +
               this.getRuneChar(runes[1][2], runes[2][1], runes[4][0]) + "," +
               this.getRuneChar(runes[2][2], runes[5][0]) + "," +
               this.getRuneChar(runes[3][1]) + "," +
               this.getRuneChar(runes[3][2], runes[4][1]) + "," +
               this.getRuneChar(runes[4][2], runes[5][1]) + "," +
               this.getRuneChar(runes[5][2]);
    }

    toString() {
        return this.skillRunes + " | " + this.attributeRunes;
    }

    getRuneChar(i, j, k) {
        return this.getRuneChar(i, Math.min(j, k));
    }

    getRuneChar(i, j) {
        return this.getRuneChar(Math.min(i, j));
    }

    getRuneChar(i) {
        let c = '';
        switch (i) {
            case 1: c = 'A'; break;
            case 2: c = 'D'; break;
            case 3: c = 'B'; break;
            case 4: c = 'U'; break;
            default: break;
        }
        return c;
    }

    countChar(s, c) {
        let count = 0;
        for (let i = 0; i < s.length; i++) {
            if (s.charAt(i) === c) {
                count++;
            }
        }
        return count;
    }
}
