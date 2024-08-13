const allRunes = Runes.allRunes;

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


var solutions = {};

const result = document.querySelector('#result');


function updateArray() {
    var list1Selected = document.querySelector('#list1 option:checked').text;
    var list2Selected = document.querySelector('#list2 option:checked').text;
    var list3Selected = document.querySelector('#list3 option:checked').text;
    var list4Selected = document.querySelector('#list4 option:checked').text;
    var list5Selected = document.querySelector('#list5 option:checked').text;
    var list6Selected = document.querySelector('#list6 option:checked').text;

    stringRunes = [list1Selected, list2Selected, list3Selected, list4Selected, list5Selected, list6Selected]
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('list1').addEventListener('change', updateArray);
    document.getElementById('list2').addEventListener('change', updateArray);
    document.getElementById('list3').addEventListener('change', updateArray);
    document.getElementById('list4').addEventListener('change', updateArray);
    document.getElementById('list5').addEventListener('change', updateArray);
    document.getElementById('list6').addEventListener('change', updateArray);
});



function main() {
    solutions = {};

    document.getElementById('result').innerHTML = '';
    const runes = assembleRunes(stringRunes);

    quickpermBigRunes(runes, 0);

    for (const key in solutions) {
        if (solutions.hasOwnProperty(key)) {
            const list = document.createElement("li");
            list.textContent =`${key} === ${JSON.stringify(solutions[key].skillRunes)} === ${JSON.stringify(solutions[key].attributeRunes)}`
            result.appendChild(list);
        }
    }
}

function assembleRunes(stringRunes) {
    const runes = Array.from({ length: 6 }, () => Array(5).fill(0));
    for (let i = 0; i < stringRunes.length; i++) {
        for (const rune of allRunes) {
            if (rune[0] === stringRunes[i]) {
                for (let j = 0; j < 3; j++) {
                    runes[i][j] = getRuneInt(rune[j + 1]);
                }
                runes[i][3] = 0;
                runes[i][4] = i;
                break;
            }
        }
    }
    return runes;
}

function quickpermBigRunes(runes) {
    const N = runes.length;
    const p = Array.from({ length: N + 1 }, (_, i) => i);
    let i = 1;
    swapSmallRunes(runes);
    while (i < N) {
        p[i]--;
        const j = (i % 2 === 1) ? p[i] : 0;
        swapBigRunes(runes, j, i);
        i = 1;
        while (p[i] === 0) {
            p[i] = i;
            i++;
        }
    }
}

function swapBigRunes(runes, j, i) {
    [runes[j], runes[i]] = [runes[i], runes[j]];
    swapSmallRunes(runes);
}

function swapSmallRunes(runes) {
    while (!checkAllRotations(runes)) {
        rotate(runes);

        if (check(runes)) {
            saveSolution(runes);
        }
    }
    runes.forEach(rune => rune[3] = 0);
}

function checkAllRotations(runes) {
    return runes.every(rune => rune[3] === 5);
}

function rotate(runes) {
    for (let i = 0; i < runes.length; i++) {
        doRotation(runes, i);
        if (runes[i][3] === 5) {
            runes[i][3] = 0;
            continue;
        }
        runes[i][3]++;
        break;
    }
}

function doRotation(runes, i) {
    const aux = runes[i][1];
    if (runes[i][3] % 2 === 0) {
        runes[i][1] = runes[i][2];
        runes[i][2] = aux;
    } else {
        runes[i][1] = runes[i][0];
        runes[i][0] = aux;
    }
}

function check(runes) {
    return !(
        diff(runes[0][1], runes[1][0]) ||
        diff(runes[0][2], runes[2][0]) ||
        diff(runes[1][1], runes[3][0]) ||
        diff(runes[1][2], runes[2][1]) || diff(runes[1][2], runes[4][0]) || diff(runes[2][1], runes[4][0]) ||
        diff(runes[2][2], runes[5][0]) ||
        diff(runes[3][2], runes[4][1]) ||
        diff(runes[4][2], runes[5][1])
    );
}

function diff(x, y) {
    return !(x === y || x === 4 || y === 4);
}

function getRuneInt(s) {
    switch (s) {
        case "Atk":
            return 1;
        case "Def":
            return 2;
        case "Buff":
            return 3;
        default:
            return 4;
    }
}

function saveSolution(runes) {
    const solution = new Solution(runes, stringRunes);
    solutions[solution.key] = solution;
}


function run() {
    main();
}