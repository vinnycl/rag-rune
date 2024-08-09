const allRunes = Runes.allRunes;
const solutions = {};

const result = document.querySelector('#result');

var stringRunes = [
    "Shattered Falling Star Rune",
    "Cretaceous Barrier Rune",
    "Thunder Lightning Rune",
    "Heart Vortex - Star Rune",
    "Flare Protection - Star Rune",
    "Quick Sand Confinement - Star Rune",
];

// document.addEventListener("DOMContentLoaded", function() {
// var stringRunes = [
//     document.querySelector('#list1 option:checked').text,
//     document.querySelector('#list2 option:checked').text,
//     document.querySelector('#list3 option:checked').text,
//     document.querySelector('#list4 option:checked').text,
//     document.querySelector('#list5 option:checked').text,
//     document.querySelector('#list6 option:checked').text,
// ];
// });

function main() {
    // console.log("Starting...");

    document.getElementById('result').innerHTML = '';
    const runes = assembleRunes(stringRunes);
    // console.log("Runes assembled:");
    // console.log(JSON.stringify(runes));

    quickpermBigRunes(runes, 0);

    // console.log("Solutions:");
    for (const key in solutions) {
        if (solutions.hasOwnProperty(key)) {
            // console.log(`${key} -> ${JSON.stringify(solutions[key])}`);
            const list = document.createElement("li");
            list.textContent =`${key} === ${JSON.stringify(solutions[key].skillRunes)} === ${JSON.stringify(solutions[key].attributeRunes)}`
            result.appendChild(list);
        }
    }

    // console.log("The End!");
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