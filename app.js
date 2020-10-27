const canvas = document.getElementById("tanksGameWindow");
const ctx = canvas.getContext("2d");
const FPS = 60

let matrix = [];

let directions = {
    up: 1,
    down: 2,
    left: 3,
    right: 4
};

let cube = 48;

function initEmptyMatrix() {
    matrix = [];
    matrix[0] = [];
    for (let a = 0; a < 14; a++) {
        matrix[a] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }
    for (let a = 0; a < 17; a++) {
        matrix[0][a] = -1
    }

    for (let out = 1; out < 14; out++) {
        matrix[out] = [];
        for (let ins = 1; ins < 17; ins++) {
            matrix[out][ins] = 0;
        }
    }

    for (let ins = 0; ins < 14; ins++) {
        matrix[ins][0] = -1;
        matrix[ins][matrix[ins].length - 1] = -1
    }


    for (let a = 0; a < 17; a++) {
        matrix[13][a] = -1
    }

    console.log(matrix)
}

let gameLevel = 0;
let currentLevelMobs = 0;

function changeLevel(level = 0) {
    initEmptyMatrix();
    boomArray = []
    bigBoomsArray = []
    killedDudeForThisLevel = 0
    enemiesTanks = []
    if (level === 0) {
        gameLevel++;
    } else gameLevel = level;
    switch (gameLevel) {
        case 1:
            currentLevelMobs = 4
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initFirstLevel();
            break;
        case 2:
            currentLevelMobs = 6
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initSecondLevel();
            break;
        case 3:
            currentLevelMobs = 8
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initThirdLevel();
            break;
        case 4:
            currentLevelMobs = 10
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initFirthLevel();
            break;
        case 5:
            currentLevelMobs = 12
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initFifthMap();
            break;
        case 6:
            currentLevelMobs = 14
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initSixthMap();
            break;
        case 7:
            currentLevelMobs = 16
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initSeventhMap();
            break;
        case 8:
            currentLevelMobs = 18
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initEightMap();
            break;
        case 9:
            currentLevelMobs = 20
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initNinthMap();
            break;
        case 10:
            currentLevelMobs = 20
            gameBoard.tanksLeft.setText(currentLevelMobs)
            initTenthMap();
            break;
    }
    fillMap()
}

let map = [];


function initFirstLevel() {
    matrix[1] = [-1, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, -1];
    matrix[2] = [-1, 2, 1, 0, 0, 1, 0, 0, 9, 0, 0, 1, 0, 0, 1, 2, -1];
    matrix[3] = [-1, 2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 1, 2, -1];
    matrix[4] = [-1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, -1];
    matrix[5] = [-1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, -1];
    matrix[6] = [-1, 2, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 2, -1];
    matrix[7] = [-1, 1, 0, 7, -7, 1, 7, -7, 1, 7, -7, 1, 7, -7, 0, 1, -1];
    matrix[8] = [-1, 2, 0, -7, -7, 1, -7, -7, 1, -7, -7, 1, -7, -7, 0, 2, -1];
    matrix[9] = [-1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, -1];
    matrix[10] = [-1, 2, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 2, -1];
    matrix[11] = [-1, 2, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 2, -1];
    matrix[12] = [-1, 2, 2, 2, 0, 0, 11, 1, 10, 1, 0, 0, 0, 2, 2, 2, -1];
}

function initSecondLevel() {
    matrix[1] = [-1, 9, 0, 0, 7, -7, 0, 0, 0, 7, -7, 0, 0, 0, 0, 9, -1];
    matrix[2] = [-1, 2, 1, 0, -7, -7, 0, 0, 9, -7, -7, 0, 1, 0, 1, 0, -1];
    matrix[3] = [-1, 2, 1, 0, 2, 2, 2, 0, 1, 1, 1, 1, 1, 1, 1, 0, -1];
    matrix[4] = [-1, 2, 0, 0, 1, 1, 0, 1, 0, 0, 0, 0, 1, 2, 1, 1, -1];
    matrix[5] = [-1, 2, 2, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 2, 0, 0, -1];
    matrix[6] = [-1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 0, 3, 0, 0, 1, -1];
    matrix[7] = [-1, 0, 0, 0, 7, -7, 0, 1, 0, 1, 1, 0, -3, 0, 0, 1, -1];
    matrix[8] = [-1, 3, 1, 0, -7, -7, 0, 1, 1, 1, 0, 0, 1, 7, -7, 1, -1];
    matrix[9] = [-1, -3, 1, 0, 1, 1, 0, 1, 1, 1, 0, 0, 1, -7, -7, 1, -1];
    matrix[10] = [-1, 2, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, -1];
    matrix[11] = [-1, 3, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, -3, -1];
    matrix[12] = [-1, -3, 1, 0, 1, 1, 11, 1, 10, 1, 0, 0, 1, 1, 1, 0, -1];
}

function initThirdLevel() {
    matrix[1] = [-1, 9, 0, 0, 0, 0, 1, 0, 0, 0, 1, 7, -7, 7, -7, 9, -1];
    matrix[2] = [-1, 0, 2, 2, 2, 2, 1, 0, 9, 0, 1, -7, -7, -7, -7, 0, -1];
    matrix[3] = [-1, 5, -5, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1];
    matrix[4] = [-1, -5, -5, 2, 2, 2, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, -1];
    matrix[5] = [-1, -5, -5, 2, 2, 2, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, -1];
    matrix[6] = [-1, 5, -5, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, -1];
    matrix[7] = [-1, -5, -5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 2, -1];
    matrix[8] = [-1, -5, -5, 1, 0, 1, 0, 0, 0, 1, 1, 1, 2, 2, 2, 2, -1];
    matrix[9] = [-1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 2, 2, 2, 2, -1];
    matrix[10] = [-1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 4, -4, 2, 3, -1];
    matrix[11] = [-1, 7, -7, 1, 0, 0, 0, 1, 1, 1, 0, 0, 2, 2, 2, -3, -1];
    matrix[12] = [-1, -7, -7, 1, 1, 0, 11, 1, 10, 1, 0, 0, 1, 1, 0, 0, -1]
}

function initFirthLevel() {
    matrix[1] = [-1, 9, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 9, -1];
    matrix[2] = [-1, 2, 1, 1, 0, 0, 0, 1, 9, 2, 2, 2, 2, 2, 2, 2, -1];
    matrix[3] = [-1, 2, 1, 1, 0, 0, 1, 2, 2, 0, 1, 1, 1, 1, 0, 0, -1];
    matrix[4] = [-1, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 2, 2, 1, 0, -1];
    matrix[5] = [-1, 3, 0, 0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 0, -1];
    matrix[6] = [-1, -3, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 0, -1];
    matrix[7] = [-1, 7, -7, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 0, 4, -4, -1];
    matrix[8] = [-1, -7, -7, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, -1];
    matrix[9] = [-1, 2, 2, 0, 1, 1, 2, 1, 1, 1, 1, 1, 0, 0, 2, 1, -1];
    matrix[10] = [-1, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 2, -1];
    matrix[11] = [-1, 7, -7, 2, 2, 0, 0, 1, 1, 1, 0, 1, 1, 0, 2, 2, -1];
    matrix[12] = [-1, -7, -7, 2, 2, 0, 11, 1, 10, 1, 0, 0, 0, 2, 2, 0, -1];
}

function initFifthMap() {
    matrix[1] = [-1, 9, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 9, -1];
    matrix[2] = [-1, 0, 0, 0, 0, 0, 1, 0, 9, 0, 1, 1, 1, 1, 0, 0, -1];
    matrix[3] = [-1, 1, 1, 0, 1, 0, 1, 0, 1, 1, 0, 6, -6, -6, 4, -4, -1];
    matrix[4] = [-1, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, -6, -6, -6, 4, -4, -1];
    matrix[5] = [-1, 2, 2, 0, 0, 6, -6, -6, 0, 6, -6, -6, 0, 0, 1, 1, -1];
    matrix[6] = [-1, 0, 0, 1, 0, -6, -6, -6, 0, -6, -6, -6, 0, 0, 0, 0, -1];
    matrix[7] = [-1, 1, 1, 0, 0, 5, -5, 1, 1, 1, 1, 1, 0, 0, 0, 0, -1];
    matrix[8] = [-1, 6, -6, -6, 0, -5, -5, 0, 7, -7, 0, 7, -7, 0, 1, 1, -1];
    matrix[9] = [-1, -6, -6, -6, 0, -5, -5, 1, -7, -7, 1, -7, -7, 0, 1, 1, -1];
    matrix[10] = [-1, 7, -7, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, -1];
    matrix[11] = [-1, -7, -7, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 0, 0, -1];
    matrix[12] = [-1, 1, 1, 1, 0, 0, 11, 1, 10, 1, 0, 0, 0, 0, 1, 0, -1]
}

function initSixthMap() {
    matrix[1] = [-1, 9, 0, 7, -7, 0, 0, 1, 0, 1, 0, 2, 2, 0, 0, 9, -1];
    matrix[2] = [-1, 0, 1, -7, -7, 1, 0, 0, 9, 0, 0, 1, 2, 0, 1, 2, -1];
    matrix[3] = [-1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 2, 0, 1, 2, -1];
    matrix[4] = [-1, 1, 1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 2, 0, 1, 2, -1];
    matrix[5] = [-1, 7, -7, 0, 1, 0, 0, 2, 1, 2, 0, 0, 1, 0, 2, 2, -1];
    matrix[6] = [-1, -7, -7, 0, 0, 0, 1, 2, 2, 2, 1, 0, 0, 0, 1, 1, -1];
    matrix[7] = [-1, 4, -4, 1, 0, 1, 1, 2, 2, 2, 1, 1, 0, 0, 4, -4, -1];
    matrix[8] = [-1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 1, -1];
    matrix[9] = [-1, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 1, 0, 0, 0, 0, -1];
    matrix[10] = [-1, 2, 1, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 2, -1];
    matrix[11] = [-1, 0, 0, 7, -7, 0, 0, 1, 1, 1, 0, 0, 0, 2, 2, 2, -1];
    matrix[12] = [-1, 0, 0, -7, -7, 0, 11, 1, 10, 1, 0, 0, 0, 0, 2, 2, -1]
}

function initSeventhMap() {
    matrix[1] = [-1, 9, 0, 0, 0, 7, -7, 0, 0, 0, 0, 0, 7, -7, 0, 9, -1];
    matrix[2] = [-1, 0, 0, 3, 0, -7, -7, 0, 9, 0, 0, 0, -7, -7, 0, 0, -1];
    matrix[3] = [-1, 1, 0, -3, 0, 0, 0, 2, 0, 0, 0, 0, 1, 3, 0, 1, -1];
    matrix[4] = [-1, 0, 1, 0, 0, 0, 2, 7, -7, 0, 0, 0, 0, -3, 1, 0, -1];
    matrix[5] = [-1, 7, -7, 1, 0, 2, 3, -7, -7, 2, 2, 2, 0, 3, 7, -7, -1];
    matrix[6] = [-1, -7, -7, 2, 2, 0, -3, 0, 0, 0, 0, 1, 2, -3, -7, -7, -1];
    matrix[7] = [-1, 2, 2, 2, 7, -7, 0, 1, 0, 0, 1, 0, 0, 2, 0, 0, -1];
    matrix[8] = [-1, 0, 0, 0, -7, -7, 0, 1, 1, 2, 0, 0, 0, 0, 2, 2, -1];
    matrix[9] = [-1, 0, 0, 0, 0, 0, 1, 0, 2, 1, 0, 7, -7, 0, 0, 2, -1];
    matrix[10] = [-1, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, -7, -7, 0, 0, 2, -1];
    matrix[11] = [-1, 1, 4, -4, 1, 0, 0, 1, 1, 1, 0, 0, 0, 7, -7, 2, -1];
    matrix[12] = [-1, 1, 1, 1, 0, 0, 11, 1, 10, 1, 0, 0, 0, -7, -7, 0, -1]
}

function initEightMap() {
    matrix[1] = [-1, 9, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 9, -1];
    matrix[2] = [-1, 2, 1, 1, 1, 0, 0, 1, 9, 1, 0, 0, 0, 1, 0, 0, -1];
    matrix[3] = [-1, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, -1];
    matrix[4] = [-1, 2, 4, -4, 4, -4, 4, -4, 4, -4, 1, 4, -4, 2, 2, 2, -1];
    matrix[5] = [-1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 1, 0, -1];
    matrix[6] = [-1, 1, 2, 1, 0, 0, 0, 0, 1, 1, 1, 1, 2, 7, -7, 0, -1];
    matrix[7] = [-1, 1, 1, 0, 1, 2, 1, 1, 1, 2, 2, 2, 2, -7, -7, 0, -1];
    matrix[8] = [-1, 2, 2, 0, 4, -4, 4, -4, 4, -4, 4, -4, 0, 0, 1, 1, -1];
    matrix[9] = [-1, 7, -7, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, -1];
    matrix[10] = [-1, -7, -7, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 1, 1, -1];
    matrix[11] = [-1, 2, 2, 1, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, -1];
    matrix[12] = [-1, 2, 0, 1, 1, 0, 11, 1, 10, 1, 0, 0, 0, 0, 0, 1, -1]
}

function initNinthMap() {
    matrix[1] = [-1, 9, 0, 0, 1, 0, 0, 0, 0, 0, 2, 7, -7, 2, 0, 9, -1,];
    matrix[2] = [-1, 1, 1, 0, 0, 0, 0, 0, 9, 0, 2, -7, -7, 0, 1, 1, -1];
    matrix[3] = [-1, 2, 3, 2, 0, 0, 2, 0, 0, 2, 2, 0, 0, 2, 3, 1, -1,];
    matrix[4] = [-1, 1, -3, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, -3, 2, -1];
    matrix[5] = [-1, 1, 2, 0, 0, 0, 7, -7, 0, 7, -7, 0, 0, 0, 3, 1, -1];
    matrix[6] = [-1, 7, -7, 0, 0, 0, -7, -7, 0, -7, -7, 0, 0, 0, -3, 1, -1];
    matrix[7] = [-1, -7, -7, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 1, 1, -1];
    matrix[8] = [-1, 1, 2, 0, 0, 0, 7, -7, 0, 7, -7, 0, 0, 0, 3, 2, -1];
    matrix[9] = [-1, 1, 3, 0, 0, 0, -7, -7, 0, -7, -7, 0, 0, 0, -3, 1, -1];
    matrix[10] = [-1, 2, -3, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 1, -1];
    matrix[11] = [-1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, -1];
    matrix[12] = [-1, 1, 1, 1, 1, 0, 11, 1, 10, 1, 0, 0, 1, 1, 1, 1, -1];
}

function initTenthMap() {
    matrix[1] = [-1, 9, 0, 0, 7, -7, 0, 0, 0, 7, -7, 0, 0, 0, 0, 9, -1];
    matrix[2] = [-1, 7, -7, 0, -7, -7, 2, 2, 9, -7, -7, 2, 1, 1, 1, 1, -1];
    matrix[3] = [-1, -7, -7, 1, 1, 0, 2, 2, 7, -7, 2, 2, 1, 0, 7, -7, -1];
    matrix[4] = [-1, 1, 0, 0, 7, -7, 2, 2, -7, -7, 2, 2, 1, 0, -7, -7, -1];
    matrix[5] = [-1, 1, 0, 0, -7, -7, 4, -4, 4, -4, 4, -4, 1, 0, 0, 0, -1];
    matrix[6] = [-1, 1, 7, -7, 1, 0, 7, -7, 1, 7, -7, 7, -7, 0, 0, 0, -1];
    matrix[7] = [-1, 1, -7, -7, 0, 0, -7, -7, 1, -7, -7, -7, -7, 1, 1, 1, -1];
    matrix[8] = [-1, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, -1];
    matrix[9] = [-1, 1, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, -1];
    matrix[10] = [-1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, -1];
    matrix[11] = [-1, 0, 0, 2, 2, 2, 0, 0, 0, 0, 0, 2, 2, 2, 2, 0, -1];
    matrix[12] = [-1, 0, 0, 0, 0, 0, 11, 0, 10, 0, 0, 0, 0, 1, 1, 0, -1];
}

function fillMap() {
    map = [];
    for (let element in matrix) {
        for (let el in matrix[element]) {
            switch (matrix[element][el]) {
                case 1:
                    map.push(new ViewComponent(ctx, "images/tanks/brick.png", {x: 0, y: 0}, {x: 48, y: 48}, () => {
                    }, 1, el, element));
                    break;
                case 2:
                    map.push(new ViewComponent(ctx, "images/tanks/bush.png", {x: 0, y: 0}, {x: 48, y: 48}, () => {
                    }, 1, el, element));
                    break;
                case 3:
                    map.push(new ViewComponent(ctx, "images/tanks/water.png", {x: 0, y: 0}, {x: 48, y: 48 * 2}, () => {
                    }, 1, el, element));
                    break;

                case 4:
                    map.push(new ViewComponent(ctx, "images/tanks/waterHor.png", {x: 0, y: 0}, {
                        x: 48 * 2,
                        y: 48
                    }, () => {
                    }, 1, el, element));
                    break;

                case 6:
                    map.push(new ViewComponent(ctx, "images/tanks/bigWater.png", {x: 0, y: 0}, {
                        x: 48 * 3,
                        y: 48 * 2
                    }, () => {
                    }, 1, el, element));
                    break;

                case 5:
                    map.push(new ViewComponent(ctx, "images/tanks/bigWaterVert.png", {x: 0, y: 0}, {
                        x: 48 * 2,
                        y: 48 * 3
                    }, () => {
                    }, 1, el, element));
                    break;

                case 7:
                    map.push(new ViewComponent(ctx, "images/tanks/rock.png", {x: 0, y: 0}, {
                        x: 48 * 2,
                        y: 48 * 2
                    }, () => {
                    }, 1, el, element));
                    break;
                case 8:
                    map.push(new ViewComponent(ctx, "images/tanks/enemyBase.png", {x: 0, y: 0}, {x: 48, y: 48}, () => {
                    }, 1, el, element));
                    break;
                case 10:
                    map.push(new ViewComponent(ctx, "images/tanks/myBase.png", {x: 0, y: 0}, {x: 48, y: 48}, () => {
                    }, 1, el, element));
                    break;

            }
        }
    }
}


function onClickHandler(e) {
    if (e.button) {
        e.preventDefault();
        e.stopPropagation();
    }
    if (gameState === gameStates.startMenu) {
        handleStartMenuWindow(e)
    }
    if (gameState === gameStates.chooseLevel) {
        handleChooseLevelWindow(e)
    } else if (gameState === gameStates.gamePlay) {
        handleMovingWindow(e)
    } else if (gameState === gameStates.dead) {
        handleDeadWindow(e)
    } else if (gameState === gameStates.win) {
        handleWinWindow(e)
    } else if (gameState === gameStates.chooseHard) {
        handleChooseHardWindow(e)
    } else if (gameState === gameStates.question) {
        handleQuestionWindow(e)
    }
}

function handleQuestionWindow(e) {
    switch (currentQuestion) {
        case 1:
            checkClick(e, question1)
            break
        case 2:
            checkClick(e, question2)
            break
        case 3:
            checkClick(e, question3)
            break
        case 4:
            checkClick(e, question4)
            break
        case 5:
            checkClick(e, question5)
            break
        case 6:
            checkClick(e, question6)
            break
        case 7:
            checkClick(e, question7)
            break
        case 8:
            checkClick(e, question8)
            break
        case 9:
            checkClick(e, question9)
            break
        case 10:
            checkClick(e, question10)
            break
        case 11:
            checkClick(e, question11)
    }
}

function handleChooseHardWindow(e) {
    checkClick(e, chooseHardWindow)
}

function handleStartMenuWindow(e) {
    checkClick(e, startWindow)
}

function handleWinWindow(e) {
    checkClick(e, winWindow)
}

function handleDeadWindow(e) {
    checkClick(e, loseWindow)
}

function handleChooseLevelWindow(e) {
    checkClick(e, chooseLevelMenu)
}

function handleMovingWindow(e) {
    checkClick(e, movingElements)
}

function checkClick(e, screen) {
    const pos = getRelativeCords(e);
    let element = null;
    for (let menuKey in screen) {
        element = screen[menuKey];
        if (element.onClick) {
            if (
                pos.x >= element.getX()
                && (pos.x <= element.getX() + element.getWidth())
                && pos.y >= element.getY()
                && (pos.y <= element.getY() + element.getHeight())
            ) {
                element.onClick(e);
            }
        }
    }
}

function getRelativeCords(event) {
    return {
        x: event.offsetX || event.layerX,
        y: event.offsetY || event.layerY
    };
}

canvas.addEventListener('click', onClickHandler);


function drawWindow(window) {
    for (let key in window) {
        if (typeof window[key].draw === "function") {
            window[key].draw();
        }
    }
}

let booms = {
    1: new SpriteSheet("images/tanks/boomUp.png", 48, 48, 48, 48),
    2: new SpriteSheet("images/tanks/boomDown.png", 48, 48, 48, 48),
    3: new SpriteSheet("images/tanks/boomLeft.png", 48, 48, 48, 48),
    4: new SpriteSheet("images/tanks/boomRight.png", 48, 48, 48, 48),
};


function SpriteSheet(path, frameWidth, frameHeight, width, height) {
    this.image = new Image();
    this.frameWidth = frameWidth;
    this.frameHeight = frameHeight;
    this.height = height;
    this.width = width;
    let self = this;
    this.image.onload = function () {
        self.framesPerRow = Math.floor(self.image.width / self.frameWidth);
    };
    this.image.src = path;
}

function Animation(spritesheet, frameSpeed, startFrame, endFrame, onClick, loop = true, onEnd) {
    let animationSequence = [];
    let currentFrame = 0;
    let counter = 0;
    let count = 0;
    for (let frameNumber = startFrame; frameNumber <= endFrame; frameNumber++)
        animationSequence.push(frameNumber);
    let _x = 0;
    let _y = 0;
    let firstly = true;

    this.setFirstly = function (res) {
        firstly = res
    };

    this.setX = function (x) {
        _x = x
    };

    this.setY = function (y) {
        _y = y
    };

    this.update = function () {
        if (firstly) {
            if (counter === (frameSpeed - 1)) {
                currentFrame = (currentFrame + 1) % animationSequence.length;
                count++
            }
            counter = (counter + 1) % frameSpeed;
            if (count === endFrame && !loop) {
                firstly = false;
                if (onEnd) {
                    onEnd()
                }
            }
        }
    };

    this.getX = function () {
        return _x;
    };

    this.getY = function () {
        return _y;
    };

    this.getWidth = () => {
        return spritesheet.width;
    };

    this.getHeight = () => {
        return spritesheet.height;
    };


    this.onClick = onClick;

    this.draw = function (x = _x, y = _y) {
        if (firstly) {
            _x = x;
            _y = y;
            let row = Math.floor(animationSequence[currentFrame] / spritesheet.framesPerRow);
            let col = Math.floor(animationSequence[currentFrame] % spritesheet.framesPerRow);
            ctx.drawImage(
                spritesheet.image,
                col * spritesheet.frameWidth, row * spritesheet.frameHeight,
                spritesheet.frameWidth, spritesheet.frameHeight,
                _x, _y,
                spritesheet.width, spritesheet.height);
        }
    };
}

let teams = {
    me: 1,
    enemy: 2
};

function ViewComponent(ctx, imgUrl, pos, size, onClick, transp = 1, col = -1, row = -1, movable = true, direction = directions.up, shooting = false, isTank = false, pictures = {}, team = teams.enemy) {
    let _ctx = ctx;
    let image = new Image();
    image.src = imgUrl;
    let _pos = pos;
    let _size = size;
    let _transp = transp;
    let _row = row;
    let _col = col;
    let _movable = movable;
    let _direction = direction;
    let _shooting = shooting;
    let _isTank = isTank;
    let _pictures = pictures;
    let _team = team;
    let _hp = 1;

    this.getHp = () => {
        return _hp
    }

    this.setHp = (hp) => {
        _hp = hp
    }

    if (_row !== -1 || col !== -1) {
        _pos = {x: (1024 - 720) / 2 + cube * (col - 1), y: ((744 - 576) / 2 + cube * (row - 1))}
    }

    this.getTeam = () => {
        return _team
    };

    this.setShooting = (isShooting) => {
        _shooting = isShooting
    };

    this.getShooting = () => {
        return _shooting
    };

    this.setPictures = (array) => {
        _pictures = array
        image.src = _pictures[_direction]
        this.draw()
    }

    this.setDirection = (direction) => {
        _direction = direction;
        image.src = _pictures[direction]
        this.draw()
    };

    this.getDirection = () => {
        return _direction
    };

    this.setMovable = (state) => {
        _movable = state
    };

    this.getMovable = () => {
        return _movable
    };

    this.setPositionByColRow = (col, row) => {
        _pos = {x: (1024 - 720) / 2 + cube * (col - 1), y: ((744 - 576) / 2 + cube * (row - 1))};

        _col = col;
        _row = row
    };

    this.getRow = () => {
        return _row
    };

    this.getCol = () => {
        return _col
    };

    this.getTransp = () => {
        return _transp;
    };

    this.setImage = (imageURL) => {
        image.src = imageURL;
    };

    this.setTransp = (transp) => {
        _transp = transp;
    };

    this.setSize = (x, y) => {
        _size.x = x;
        _size.y = y;
    };

    this.setPosition = (x, y) => {
        _pos.x = x;
        _pos.y = y;
    };

    this.getX = () => {
        return _pos.x;
    };

    this.getY = () => {
        return _pos.y;
    };

    this.getWidth = () => {
        return _size.x;
    };

    this.getHeight = () => {
        return _size.y;
    };

    this.draw = () => {
        _ctx.globalAlpha = _transp;
        _ctx.drawImage(image, _pos.x, _pos.y, _size.x, _size.y);
    };

    this.onClick = onClick;

    this.setOnClick = (onClick) => {
        this.onClick = onClick;
    };

    this.getOnClick = () => {
        return this.onClick
    }
}

let soundOn = true;
let musicOn = true;

function TextLabel(ctx, text, textSize, x, y, isBold = false, color = "white", transp = 1) {
    let _ctx = ctx;
    let _text = text;
    let _textSize = textSize;
    let _x = x;
    let _y = y;
    let _color = color;
    let _transp = transp;

    this.getX = () => {
        return _x
    };

    this.getY = () => {
        return _y
    };

    this.getText = () => {
        return _text;
    };

    this.setTransp = (transp) => {
        _transp = transp;
    };

    this.setText = (text) => {
        if (_text.length < text.length) {
            _x -= 4;
        } else if (_text.length > text.length) {
            _x += 4;
        }
        _text = text;
    };

    this.setPosition = ({x, y}) => {
        _x = x;
        _y = y;
    };

    this.draw = () => {
        if (isBold) {
            _ctx.font = `bold ${_textSize}px Pixeled, sans-serif`;
        } else {
            _ctx.font = `${_textSize}px Pixeled, sans-serif`;
        }
        _ctx.globalAlpha = _transp;
        _ctx.fillStyle = _color;
        _ctx.fillText(_text, _x, _y);
        _ctx.globalAlpha = 1;
    };
}

let audioManager = {
    currentBackground: undefined,
    music: {
        //TODO: Change content
        background: 'images/tanks/bg.wav'
    },
    effects: {
        //TODO: Change content
        boom: 'images/tanks/boom.wav',
        moving: 'images/tanks/moving.wav',
        miss: 'images/signals/wrong.mp3',
        catches: 'images/signals/congrat.mp3',
    },

    playEffect: (effect) => {
        if (soundOn) {
            if (audioManager.effects.hasOwnProperty(effect)) {
                let t = new Audio(audioManager.effects[effect]);
                t.volume = 0.1;
                t.play();
            }
        }
    },
    playMusic: (musicName) => {
        if (musicOn) {
            if (audioManager.music.hasOwnProperty(musicName)) {
                if (audioManager.currentBackground) {
                    audioManager.currentBackground.volume = 0.04;
                    audioManager.currentBackground.play().catch(
                        reason => {
                            console.log(reason);
                        }
                    );
                } else {
                    audioManager.currentBackground = new Audio(audioManager.music[musicName]);
                    audioManager.currentBackground.volume = 0.04;
                    audioManager.currentBackground.onended = () => {
                        audioManager.currentBackground.play();
                    };
                    audioManager.currentBackground.play().then(
                        () => {
                            console.log("music is playing");
                        }
                    ).catch(
                        reason => {
                            console.log(reason);
                        }
                    );
                }
            }
        }
    },
    stopMusic: () => {
        if (audioManager.currentBackground) {
            audioManager.currentBackground.pause();
        }
    }
};

//windows
let gameBoard = {
    bg: new ViewComponent(ctx, "images/tanks/bodyBg.png", {x: (1024 - 810) / 2, y: (744 - 658) / 2}, {
        x: 810,
        y: 658
    }, () => {
    }, 1),
    body: new ViewComponent(ctx, "images/tanks/body.png", {x: (1024 - 720) / 2, y: (744 - 576) / 2}, {
        x: 720,
        y: 576
    }, () => {
    }, 1),
    enemyBgOfNum: new ViewComponent(ctx, "images/tanks/enemyNum.png", {x: 1024 - 6 - 110, y: 200}, {
        x: 110,
        y: 65
    }, () => {
    }, 1),
    myBgOfNum: new ViewComponent(ctx, "images/tanks/myNum.png", {x: 6, y: 200}, {
        x: 110,
        y: 65
    }, () => {
    }, 1),
    tanksLeft: new TextLabel(ctx, "20",
        30,
        950,
        250,
        false,
        "#d7c3a9"
    ),
    myTanksLeft: new TextLabel(ctx, "3",
        30,
        50,
        250,
        false,
        "#d7c3a9"
    ),
    unarmiaLogo: new ViewComponent(ctx, "images/tanks/unarmiaLogo.png", {x: 50, y: 25}, {
        x: 60,
        y: 60
    }, () => {
    }, 1),
};

let movingElements = {
    bottom: new ViewComponent(ctx, "images/tanks/background.png", {x: 39, y: 487}, {
        x: 228,
        y: 228
    }, () => {

    }, 1),

    up: new ViewComponent(ctx, "images/tanks/buttonUp.png", {x: 98, y: 472}, {
        x: 115*1.2,
        y: 115*1.2
    }, () => {
        moveIt(tank.tank, directions.up)
    }, 1),
    down: new ViewComponent(ctx, "images/tanks/buttonDown.png", {x: 98, y: 623}, {
        x: 115*1.2,
        y: 115*1.2
    }, () => {
        moveIt(tank.tank, directions.down)

    }, 1),
    left: new ViewComponent(ctx, "images/tanks/buttonLeft.png", {x: 15, y: 546}, {
        x: 115*1.2,
        y: 115*1.2
    }, () => {
        moveIt(tank.tank, directions.left)

    }, 1),

    right: new ViewComponent(ctx, "images/tanks/buttonRight.png", {x: 184, y: 546}, {
        x: 115*1.2,
        y: 115*1.2
    }, () => {
        moveIt(tank.tank, directions.right)

    }, 1),

    shoot: new ViewComponent(ctx, "images/tanks/fireButton.png", {x: 814, y: 513}, {
        x: 188*1.2,
        y: 188*1.2
    }, () => {
        shootIt({col: tank.tank.getCol(), row: tank.tank.getRow()}, tank.tank.getDirection(), tank.tank)
    }, 1),
};

let casualTank = {
    1: "images/tanks/tankUp.png",
    2: "images/tanks/tankDown.png",
    3: "images/tanks/tankLeft.png",
    4: "images/tanks/tankRight.png",
};

let secondType = {
    1: "images/tanks/secondTankUp.png",
    2: "images/tanks/secondTankDown.png",
    3: "images/tanks/secondTankLeft.png",
    4: "images/tanks/secondTankRight.png",
}

let thirdType = {
    1: "images/tanks/thirdTankUp.png",
    2: "images/tanks/thirdTankDown.png",
    3: "images/tanks/thirdTankLeft.png",
    4: "images/tanks/thirdTankRight.png",
}

let fourthType = {
    1: "images/tanks/fourthTankUp.png",
    2: "images/tanks/fourthTankDown.png",
    3: "images/tanks/fourthTankLeft.png",
    4: "images/tanks/fourthTankRight.png",
}

let boomArray = [];
let tank = {
    tank: new ViewComponent(ctx, "images/tanks/tankUp.png", {x: 0, y: 0}, {x: 48, y: 48}, () => {
    }, 1, 6, 12, true, directions.up, false, true, casualTank, teams.me)
};

let currentMapImage = {};
let enemiesNum = 0;

let hpCount = 3;


window.addEventListener('keydown', onKeyDownHandler);

let bigBoomSH = new SpriteSheet("images/tanks/bigBoom.png", 48, 48, 48, 48);
let bigBoomsArray = [];
let killedDudeForThisLevel = 0;
let killedDudesBeforeDeath = 0;
let boofs = [];

function clearLevel() {
    enemiesTanks = [];
    secondArmy = [];
    enemiesNum = 0;
    stars = [];
    hpCount = 3;
    gameBoard.myTanksLeft.setText(hpCount)
    firstly = true
    killedDudeForThisLevel = 0;
    tank = {}
    tank = {
        tank: new ViewComponent(ctx, "images/tanks/tankUp.png", {
            x: 0,
            y: 0
        }, {x: 48, y: 48}, () => {
        }, 1, 6, 12, true, directions.up, false, true, casualTank, teams.me)
    }
}

function killMe(tanks, col, row) {
    if (tanks.getRow() == row && tanks.getCol() == col) {
        let boom = new Animation(bigBoomSH, 5, 0, 3, () => {
        }, false, () => {
        });
        boom.setX(tanks.getX());
        boom.setY(tanks.getY());
        bigBoomsArray.push(boom);
        tank = {};
        tanklvl = 0;
        hpCount--
        gameBoard.myTanksLeft.setText(hpCount)

        if (!firstly) {
            gameState = gameStates.dead;
            enemiesTanks = [];
            secondArmy = [];
            enemiesNum = 0;
            stars = [];
            hpCount = 3;
            gameBoard.myTanksLeft.setText(hpCount)
            killedDudeForThisLevel = 0;
            tank = {
                tank: new ViewComponent(ctx, "images/tanks/tankUp.png", {
                    x: 0,
                    y: 0
                }, {x: 48, y: 48}, () => {
                }, 1, 6, 12, true, directions.up, false, true, casualTank, teams.me)
            }
            return;
        }
        if (hpCount === 0 && firstly) {
            gameState = gameStates.question
            currentQuestion = randomInteger(1, 11)
            return
        }
        tanks.setPictures(casualTank)
        setTimeout(
            () => {
                tank = {
                    tank: new ViewComponent(ctx, "images/tanks/tankUp.png", {
                        x: 0,
                        y: 0
                    }, {x: 48, y: 48}, () => {
                    }, 1, 6, 12, true, directions.up, false, true, casualTank, teams.me)
                }
            }, 3000
        )
    }
}

function killTank(tank, col, row, expert = false) {
    if (tank.getCol() == col && tank.getRow() == row) {
        let boom = new Animation(bigBoomSH, 5, 0, 3, () => {
        }, false, () => {
        });
        boom.setX(tank.getX());
        boom.setY(tank.getY());
        bigBoomsArray.push(boom);
        tank.setPositionByColRow(-100, -100);
        enemiesNum--;
        if (!expert) {
            killedDudeForThisLevel++;
            killedDudesBeforeDeath++;
            let a = randomInteger(0, 3)

            if (a === 0) {
                matrix[row][col] = 12;
                stars.push(new ViewComponent(ctx, "images/tanks/star.png", {
                    x: 0,
                    y: 0
                }, {x: 48, y: 48}, () => {
                }, 1, col, row, true, directions.up, false, true, casualTank, teams.me))

            }
        }
        gameBoard.tanksLeft.setText(currentLevelMobs - killedDudeForThisLevel)
        if (currentLevelMobs === killedDudeForThisLevel) {
            gameState = gameStates.win;
            killedDudeForThisLevel = 0;
            clearLevel()
        }
        return true
    }
    return false
}

function brokeElement(row, col, newCube) {
    matrix[row][col] = -matrix[row][col]
    for (let a in map) {
        if (map[a].getCol() == col && map[a].getRow() == row) {
            let brokenImage;
            if (newCube === 1) {
                brokenImage = "images/tanks/brokenBrick.png"
            } else if (newCube === 2) {
                brokenImage = "images/tanks/brokenBush.png"
            } else if (matrix[row][col] == 10){
                loseGame(row,col)
                return
            }
            map[a].setImage(brokenImage)
        }
    }
}

function destroyElement(row, col) {
    for (let a in map) {
        if (map[a].getCol() == col && map[a].getRow() == row) {
            map[a].setPositionByColRow(-100, -100)
            matrix[row][col] = 0
        }
    }
}

function loseGame(row, col) {
    if (matrix[row][col] === 10) {
        enemiesTanks = [];
        secondArmy = [];
        enemiesNum = 0;
        stars = [];
        hpCount = 3;
        gameBoard.myTanksLeft.setText(hpCount)
        killedDudeForThisLevel = 0;
        gameState= gameStates.dead
        tank = {
            tank: new ViewComponent(ctx, "images/tanks/tankUp.png", {
                x: 0,
                y: 0
            }, {x: 48, y: 48}, () => {
            }, 1, 6, 12, true, directions.up, false, true, casualTank, teams.me)
        }
        return true
    }
    return false
}

let gameModes = {
    veryEasy: 1,
    easy: 2,
    hard: 3
}

let gameMode = gameModes.hard

function hurtTank(tank, col, row) {
    if (tank.getCol() == col && tank.getRow() == row) {
        let boom = new Animation(bigBoomSH, 5, 0, 3, () => {
        }, false, () => {
        });
        if (tank.getHp() === 1) {
            tank.setHp(0)
        } else {
            boom.setX(tank.getX());
            boom.setY(tank.getY());
            bigBoomsArray.push(boom);
            tank.setPositionByColRow(-100, -100);
            enemiesNum--;
            killedDudeForThisLevel++;
            killedDudesBeforeDeath++;
            gameBoard.tanksLeft.setText(currentLevelMobs - killedDudeForThisLevel)
            clearLevel();
            return true
        }
    }
    return false
}


function destroyAll(row, col, shootingElement, shootingInterval) {
    let newCube = Math.abs(matrix[row][col]);
    let boom = new Animation(bigBoomSH, 5, 0, 3, () => {
    }, false, () => {
    });
    let wait = false;
    if( loseGame(row, col)){
        return;
    }
    if (row !== 0) {
        if (shootingElement.getTeam() === teams.me) {
            for (let a in secondArmy) {
                if(killTank(secondArmy[a], col, row, true) && !wait){
                    wait = true;
                }
            }
            for (let a in enemiesTanks) {
                if (gameMode === gameModes.veryEasy) {
                    if (killTank(enemiesTanks[a], col, row)&& !wait) {
                        wait = true;
                    }
                } else if (gameMode === gameModes.easy) {
                    if (hurtTank(enemiesTanks[a], col, row) && !wait) {
                        wait = true;
                    }
                } else if (gameMode === gameModes.hard) {
                    if (killTank(enemiesTanks[a], col, row) && !wait) {
                        secondArmy.push(new ViewComponent(ctx, "images/tanks/enemyTankUp.png", {x: 0, y: 0}, {
                            x: 48,
                            y: 48
                        }, () => {
                        }, 1, col, row, true, directions.up, false, true, enemyTank))

                        secondArmy.push(new ViewComponent(ctx, "images/tanks/enemyTankUp.png", {x: 0, y: 0}, {
                            x: 48,
                            y: 48
                        }, () => {
                        }, 1, col, row, true, directions.up, false, true, enemyTank))
                        wait = true
                    }
                }
            }

            for (let a in enemiesTanks) {
                if (killTank(enemiesTanks[a], col, row) && !wait) {
                    wait = true;
                }
            }
        } else {
            killMe(tank.tank, col, row)
        }

        if(wait){
            clearInterval(shootingInterval);
            shootingElement.setShooting(false)
        }

        if (newCube !== 0 && newCube !== 9 && newCube !== 11 && newCube !== 12 && !wait) {
            if (Math.abs(matrix[row][col]) === 1 || Math.abs(matrix[row][col]) === 2 || matrix[row][col] === 10) {


                if (col > 0 && col < 16 && row > 0 && row < 13) {
                    boom.setX((1024 - 720) / 2 + cube * (col - 1))
                    boom.setY((744 - 576) / 2 + cube * (row - 1))
                    bigBoomsArray.push(boom)
                }

                if (matrix[row][col] < 0) {
                    destroyElement(row, col)
                } else {
                    brokeElement(row, col, newCube);
                }
            }
            clearInterval(shootingInterval);
            shootingElement.setShooting(false)
        }
    }
}

function shootIt(startPoint, where, shootingElement) {
    try {
        if (!shootingElement.getShooting()) {
            shootingElement.setShooting(true);
            if (shootingElement.getTeam() === teams.me) {
                audioManager.playEffect("boom")
            }

            let animat = new Animation(booms[where], 2, 0, 2, () => {
            }, false, () => {
            });
            switch (where) {
                case directions.up:
                    animat.setX((1024 - 720) / 2 + cube * (shootingElement.getCol() - 1));
                    animat.setY((744 - 576) / 2 + cube * (shootingElement.getRow() - 2));
                    break;

                case directions.down:
                    animat.setX((1024 - 720) / 2 + cube * (shootingElement.getCol() - 1));
                    animat.setY((744 - 576) / 2 + cube * (shootingElement.getRow()));
                    break;

                case directions.right:
                    animat.setX((1024 - 720) / 2 + cube * (shootingElement.getCol()));
                    animat.setY((744 - 576) / 2 + cube * (shootingElement.getRow() - 1));
                    break;

                case directions.left:
                    animat.setX((1024 - 720) / 2 + cube * (shootingElement.getCol() - 2));
                    animat.setY((744 - 576) / 2 + cube * (shootingElement.getRow() - 1));
                    break;
            }

            let row = startPoint.row;
            let col = startPoint.col;
            let shootingInterval;
            switch (where) {
                case directions.up:
                    if (row !== 1) {
                        shootingInterval = setInterval(() => {
                            try {
                                row -= 1;
                                destroyAll(row, col, shootingElement, shootingInterval)
                            } catch (e) {
                                clearInterval(shootingInterval)
                                shootingElement.setShooting(false)
                            }
                        }, 20);
                    } else {
                        shootingElement.setShooting(false)
                    }
                    break;

                case directions.down:
                    if (row !== 12) {
                        shootingInterval = setInterval(() => {
                            try {
                                row += 1
                                destroyAll(row, col, shootingElement, shootingInterval)

                            } catch (e) {
                                clearInterval(shootingInterval)
                                shootingElement.setShooting(false)
                            }
                        }, 20);
                    } else {
                        shootingElement.setShooting(false)
                    }
                    break

                case directions.left:
                    if (col !== 1) {
                        shootingInterval = setInterval(() => {
                            try {
                                col -= 1
                                destroyAll(row, col, shootingElement, shootingInterval)
                            } catch (e) {
                                clearInterval(shootingInterval)
                                shootingElement.setShooting(false)
                            }
                        }, 20);
                    } else {
                        shootingElement.setShooting(false)
                    }
                    break

                case directions.right:
                    if (col !== 15) {
                        shootingInterval = setInterval(() => {
                            try {
                                col += 1
                                destroyAll(row, col, shootingElement, shootingInterval)
                            } catch (e) {
                                clearInterval(shootingInterval)
                                shootingElement.setShooting(false)
                            }
                        }, 20);
                    } else {
                        shootingElement.setShooting(false)
                    }
                    break
            }
            boomArray.push(animat);

        }
    } catch (e) {

    }
}

let matrixOfEnemies = []
let enemiesTanks = []

function readEnemiesMap() {
    matrixOfEnemies = [];
    for (let el in matrix) {
        matrixOfEnemies[el] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    }

    console.log(matrixOfEnemies)

    for (let el in matrix) {
        for (let element in matrix[el]) {
            if (matrix[el][element] === -1) {
                matrixOfEnemies[el][element] = -1
            } else if (matrix[el][element] === 1 || matrix[el][element] === 2) {
                matrixOfEnemies[el][element] = -2
            } else if (matrix[el][element] === 10) {
                matrixOfEnemies[el][element] = -3
            } else if (Math.abs(matrix[el][element]) === 3 || Math.abs(matrix[el][element]) === 4 || Math.abs(matrix[el][element]) === 5
                || Math.abs(matrix[el][element]) === 6 || Math.abs(matrix[el][element]) === 7) {
                matrixOfEnemies[el][element] = -1
            } else if (matrix[el][element] === 8) {
                matrixOfEnemies[el][element] = -4
            }
        }
    }

    matrixOfEnemies[Math.round(tank.tank.getRow())][Math.round(tank.tank.getCol())] = -3;
    for (let alt in enemiesTanks) {
        matrixOfEnemies[Math.abs(enemiesTanks[alt].getRow())][Math.abs(enemiesTanks[alt].getCol())] = -4
    }
}

// function aStar(enemy) {
//     let colStart = 1
//     let rowStart = 1
//     matrixOfEnemies[rowStart][colStart] = 1
//
//     // console.log(alpha)
//     let found = false;
//
//     let unchanged = false;
//     while (!found && !unchanged) {
//         unchanged = true;
//         for (let element in matrixOfEnemies) {
//             for (let el in matrixOfEnemies[element]) {
//                 if (matrixOfEnemies[element][el] != -1 && matrixOfEnemies[element][el] != -4) {
//                     try {
//                         if (matrixOfEnemies[element - 1][el] > 0 ||
//                             matrixOfEnemies[element][el] > matrixOfEnemies[element - 1][el] + 1) {
//                             if (matrixOfEnemies[element][el] == -3) {
//                                 found = true
//                                 break
//                             }
//                             matrixOfEnemies[element][el] = matrixOfEnemies[element - 1][el] + 1
//                             unchanged = false;
//                         }
//                     } catch (e) {
//
//                     }
//
//                     try {
//                         if (matrixOfEnemies[element + 1][el] > 0 ||
//                             matrixOfEnemies[element][el] > matrixOfEnemies[element + 1][el] + 1) {
//                             if (matrixOfEnemies[element][el] == -3) {
//                                 found = true
//                                 break
//                             }
//                             matrixOfEnemies[element][el] = matrixOfEnemies[element + 1][el] + 1
//                             unchanged = false;
//
//                         }
//                     } catch (e) {
//
//                     }
//
//                     try {
//                         if (matrixOfEnemies[element][el - 1] > 0 ||
//                             matrixOfEnemies[element][el] > matrixOfEnemies[element][el - 1] + 1) {
//                             if (matrixOfEnemies[element][el] == -3) {
//                                 found = true
//                                 break
//                             }
//                             matrixOfEnemies[element][el] = matrixOfEnemies[element][el - 1] + 1
//                             unchanged = false;
//
//                         }
//                     } catch (e) {
//
//                     }
//
//                     try {
//                         if (matrixOfEnemies[element][el + 1] > 0 ||
//                             matrixOfEnemies[element][el] > matrixOfEnemies[element][el + 1] + 1) {
//                             if (matrixOfEnemies[element][el] == -3) {
//                                 found = true
//                                 break
//                             }
//                             matrixOfEnemies[element][el] = matrixOfEnemies[element][el + 1] + 1
//                             unchanged = false;
//
//                         }
//                     } catch (e) {
//
//                     }
//                 }
//             }
//         }
//     }
//     console.log(matrixOfEnemies)
// }

function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
}


let stoped = false

let enemyTank = {
    1: "images/tanks/enemyTankUp.png",
    2: "images/tanks/enemyTankDown.png",
    3: "images/tanks/enemyTankLeft.png",
    4: "images/tanks/enemyTankRight.png",
}

let secondArmy = []

function mobGenerator() {
    if (enemiesNum < 3 && !stoped) {
        enemiesNum++;
        stoped = true
        setTimeout(() => {
                stoped = false;
                let place = randomInteger(1, 3)
                let col;
                let row;
                switch (place) {
                    case 1:
                        col = 1;
                        row = 1;
                        break;
                    case 2:
                        col = 8;
                        row = 2;
                        break;
                    case 3:
                        col = 15;
                        row = 1;
                        break;
                }
                enemiesTanks.push(new ViewComponent(ctx, "images/tanks/enemyTankUp.png", {x: 0, y: 0}, {
                    x: 48,
                    y: 48
                }, () => {
                }, 1, col, row, true, directions.up, false, true, enemyTank))
            }, randomInteger(700, 1500)
        )

    }
}

let tanklvl = 0;

function updateTank(tank) {
    tanklvl++;
    switch (tanklvl) {
        case 1:
            tank.setPictures(secondType)
            break

        case 2:
            tank.setPictures(thirdType)
            break

        case 3:
            tank.setPictures(fourthType)
            break
    }
}

function moveIt(element, where) {
    try {
        let newPlace;
        if (element.getMovable() && element.getCol() > 0 && element.getRow() > 0) {
            // readEnemiesMap();
            element.setMovable(false)
            if (element.getDirection() === where) {
                if (element === tank.tank) {
                    // audioManager.playEffect("moving")
                }
                switch (where) {
                    case directions.up:
                        try {
                            newPlace = matrix[element.getRow() - 1][element.getCol()]
                            if (element.getRow() > 1 && newPlace === 0 || newPlace === 9 || newPlace === 11 || newPlace === 12) {
                                let moving = 0
                                if (newPlace === 12 && element.getTeam() === teams.me) {
                                    matrix[element.getRow() - 1][element.getCol()] = 0
                                    for (let alp in stars) {
                                        if (stars[alp].getCol() == element.getCol() && stars[alp].getRow() == element.getRow() - 1) {
                                            stars[alp].setPositionByColRow(-100, -100)
                                        }
                                    }
                                    updateTank(tank.tank)
                                }
                                let movingInterval = setInterval(
                                    () => {
                                        moving++
                                        element.setPositionByColRow(element.getCol(), element.getRow() - 0.125)
                                        if (moving === 8) {
                                            clearInterval(movingInterval)
                                            element.setMovable(true)
                                        }
                                    }, 25)
                            } else {
                                element.setMovable(true)

                            }
                        } catch (e) {

                        }
                        break;

                    case directions.down:
                        try {
                            // audioManager.playEffect("moving")
                            newPlace = matrix[element.getRow() + 1][element.getCol()]
                            if (element.getRow() < 12 && newPlace === 0 || newPlace === 9 || newPlace === 11 || newPlace === 12) {
                                let moving = 0
                                if (newPlace === 12 && element.getTeam() === teams.me) {
                                    matrix[element.getRow() + 1][element.getCol()] = 0
                                    for (let alp in stars) {
                                        if (stars[alp].getCol() == element.getCol() && stars[alp].getRow() == element.getRow() + 1) {
                                            stars[alp].setPositionByColRow(-100, -100)
                                        }
                                    }
                                    updateTank(tank.tank)
                                }
                                let movingInterval = setInterval(
                                    () => {
                                        moving++
                                        element.setPositionByColRow(element.getCol(), element.getRow() + 0.125)
                                        if (moving === 8) {
                                            clearInterval(movingInterval)
                                            element.setMovable(true)
                                        }
                                    }, 25)
                            } else {
                                element.setMovable(true)

                            }
                        } catch (e) {

                        }
                        break

                    case directions.left:
                        // audioManager.playEffect("moving")
                        newPlace = matrix[element.getRow()][element.getCol() - 1]
                        if (element.getCol() > 1 && newPlace === 0 || newPlace === 9 || newPlace === 11 || newPlace === 12) {
                            let moving = 0
                            if (newPlace === 12 && element.getTeam() === teams.me) {
                                matrix[element.getRow()][element.getCol() - 1] = 0
                                for (let alp in stars) {
                                    if (stars[alp].getCol() == element.getCol() - 1 && stars[alp].getRow() == element.getRow()) {
                                        stars[alp].setPositionByColRow(-100, -100)
                                    }
                                }
                                updateTank(tank.tank)
                            }
                            let movingInterval = setInterval(
                                () => {
                                    moving++
                                    element.setPositionByColRow(element.getCol() - 0.125, element.getRow())
                                    if (moving === 8) {
                                        clearInterval(movingInterval)
                                        element.setMovable(true)
                                    }
                                }, 25)
                        } else {
                            element.setMovable(true)

                        }
                        break

                    case directions.right:
                        // audioManager.playEffect("moving")
                        newPlace = matrix[element.getRow()][element.getCol() + 1]
                        if (element.getCol() < 15 && newPlace === 0 || newPlace === 9 || newPlace === 11 || newPlace === 12) {
                            let moving = 0
                            if (newPlace === 12 && element.getTeam() === teams.me) {
                                matrix[element.getRow()][element.getCol() + 1] = 0
                                for (let alp in stars) {
                                    if (stars[alp].getCol() == element.getCol() + 1 && stars[alp].getRow() == element.getRow()) {
                                        stars[alp].setPositionByColRow(-100, -100)
                                    }
                                }
                                updateTank(tank.tank)
                            }
                            let movingInterval = setInterval(
                                () => {
                                    moving++
                                    element.setPositionByColRow(element.getCol() + 0.125, element.getRow())
                                    if (moving === 8) {
                                        clearInterval(movingInterval)
                                        element.setMovable(true)
                                    }
                                }, 25)
                        } else {
                            element.setMovable(true)
                        }
                }
            } else setTimeout(() => {
                element.setDirection(where)
                element.setMovable(true)
            }, 1)
        }
    } catch (e) {

    }
}


function onKeyDownHandler(event) {
    event.preventDefault()
    if (gameState === gameStates.gamePlay) {
        if (event.keyCode === 87 || event.keyCode === 38) {
            moveIt(tank.tank, directions.up)
        }

        if (event.keyCode === 65 || event.keyCode === 37) {
            moveIt(tank.tank, directions.left)
        }

        if (event.keyCode === 40 || event.keyCode === 83) {
            moveIt(tank.tank, directions.down)
        }

        if (event.keyCode === 68 || event.keyCode === 39) {
            moveIt(tank.tank, directions.right)
        }

        if (event.keyCode === 32) {
            shootIt({col: tank.tank.getCol(), row: tank.tank.getRow()}, tank.tank.getDirection(), tank.tank)
        }
    }
}

let timer = false

function tanksMoving(enemiesTanks) {
    if (!timer) {
        for (let tank in enemiesTanks) {
            let a = randomInteger(0, 20)
            if (a == 0) {
                moveIt(enemiesTanks[tank], randomInteger(2, 4))
            }
            if (enemiesTanks[tank].getRow() !== 1) {
                let a = randomInteger(0, 20)
                if (a == 0) {
                    shootIt({
                        col: Math.ceil(enemiesTanks[tank].getCol()),
                        row: Math.ceil(enemiesTanks[tank].getRow())
                    }, enemiesTanks[tank].getDirection(), enemiesTanks[tank])
                }
            }
        }
    }
}

let gameStates = {
    startMenu: 1,
    gamePlay: 2,
    dead: 3,
    win: 4,
    chooseLevel: 5,
    chooseHard: 6,
    question: 7
};

let gameState = gameStates.startMenu;

let questionWindow = {
    label: new ViewComponent(ctx, "images/tanks/answerBottom.png", {x: 129 - 75, y: 33}, {
        x: 917,
        y: 629
    }, () => {
    }, 1),
};

let currentQuestion;

function loseAllGame() {
    gameState = gameStates.dead
    enemiesTanks = [];
    secondArmy = []
    enemiesNum = 0;
    tank = {
        tank: new ViewComponent(ctx, "images/tanks/tankUp.png", {
            x: 0,
            y: 0
        }, {x: 48, y: 48}, () => {
        }, 1, 6, 12, true, directions.up, false, true, casualTank, teams.me)
    }
}

let firstly = true;

let question1 = {
    question: new ViewComponent(ctx, "images/tanks/question1.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer1.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer1.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer1.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),
}

function continueGame() {
    gameState = gameStates.gamePlay
    hpCount++;
    gameBoard.myTanksLeft.setText(hpCount)
    firstly = false;
    tank = {
        tank: new ViewComponent(ctx, "images/tanks/tankUp.png", {
            x: 0,
            y: 0
        }, {x: 48, y: 48}, () => {
        }, 1, 6, 12, true, directions.up, false, true, casualTank, teams.me)
    }
}


let question2 = {
    question: new ViewComponent(ctx, "images/tanks/question2.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer2.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer2.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer2.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),
}


let question3 = {
    question: new ViewComponent(ctx, "images/tanks/question3.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer3.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer3.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer3.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),
}


let question4 = {
    question: new ViewComponent(ctx, "images/tanks/question4.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer4.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer4.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer4.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),
}


let question5 = {
    question: new ViewComponent(ctx, "images/tanks/question5.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer5.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer5.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer5.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),
}


let question6 = {
    question: new ViewComponent(ctx, "images/tanks/question6.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer6.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer6.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer6.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),
}


let question7 = {
    question: new ViewComponent(ctx, "images/tanks/question7.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer7.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer7.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer7.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),
}


let question8 = {
    question: new ViewComponent(ctx, "images/tanks/question8.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer8.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer8.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
        }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer8.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
        }, 1),
}


let question9 = {
    question: new ViewComponent(ctx, "images/tanks/question9.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer9.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer9.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer9.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
      loseAllGame()
    }, 1),
}


let question10 = {
    question: new ViewComponent(ctx, "images/tanks/question10.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer10.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer10.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer10.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        continueGame();
        }, 1),
}


let question11 = {
    question: new ViewComponent(ctx, "images/tanks/question11.png", {x: 344 - 75, y: 179}, {
        x: 484,
        y: 103
    }, () => {
    }, 1),

    answer1: new ViewComponent(ctx, "images/tanks/1answer11.png", {x: 342 - 75, y: 290}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
    }, 1),

    answer2: new ViewComponent(ctx, "images/tanks/2answer11.png", {x: 342 - 75, y: 405}, {
        x: 456,
        y: 115
    }, () => {
        continueGame()
    }, 1),

    answer3: new ViewComponent(ctx, "images/tanks/3answer11.png", {x: 342 - 75, y: 517}, {
        x: 456,
        y: 115
    }, () => {
        loseAllGame()
        }, 1),
}

let chooseHardWindow = {
    label: new ViewComponent(ctx, "images/tanks/chooseHard.png", {x: 258 - 75, y: 105}, {
        x: 655,
        y: 179
    }, () => {
    }, 1),

    1: new ViewComponent(ctx, "images/tanks/1.png", {x: 319 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        gameMode = gameModes.veryEasy
        changeLevel(1);
        gameState = gameStates.gamePlay
    }, 1),

    2: new ViewComponent(ctx, "images/tanks/2.png", {x: 522 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        gameMode = gameModes.easy
        changeLevel(1);
        gameState = gameStates.gamePlay
    }, 1),

    3: new ViewComponent(ctx, "images/tanks/3.png", {x: 720 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        gameMode = gameModes.hard
        changeLevel(1);
        gameState = gameStates.gamePlay
    }, 1),
};

let startWindow = {
    startBG: new ViewComponent(ctx, "images/tanks/startBG.png", {x: 242 - 75, y: 115}, {
        x: 689,
        y: 354
    }, () => {
    }, 1),
    startGameButton: new ViewComponent(ctx, "images/tanks/startGameButton.png", {x: (1024 - 461) / 2, y: 500}, {
        x: 461,
        y: 129
    }, () => {
        gameState = gameStates.chooseHard
    }, 1),
};

let chooseLevelMenu = {
    levels: new ViewComponent(ctx, "images/tanks/level.png", {x: 258 - 75, y: 105}, {
        x: 655,
        y: 179
    }, () => {
    }, 1),
    1: new ViewComponent(ctx, "images/tanks/1.png", {x: 166 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(1)
        gameState = gameStates.gamePlay
    }, 1),
    2: new ViewComponent(ctx, "images/tanks/2.png", {x: 341 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(2)
        gameState = gameStates.gamePlay
    }, 1),
    3: new ViewComponent(ctx, "images/tanks/3.png", {x: 509 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(3)
        gameState = gameStates.gamePlay
    }, 1),
    4: new ViewComponent(ctx, "images/tanks/4.png", {x: 670 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(4)
        gameState = gameStates.gamePlay
    }, 1),
    5: new ViewComponent(ctx, "images/tanks/5.png", {x: 845 - 75, y: 330}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(5)
        gameState = gameStates.gamePlay
    }, 1),
    6: new ViewComponent(ctx, "images/tanks/6.png", {x: 166 - 75, y: 493}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(6)
        gameState = gameStates.gamePlay
    }, 1),
    7: new ViewComponent(ctx, "images/tanks/7.png", {x: 341 - 75, y: 493}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(7)
        gameState = gameStates.gamePlay
    }, 1),
    8: new ViewComponent(ctx, "images/tanks/8.png", {x: 509 - 75, y: 493}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(8)
        gameState = gameStates.gamePlay
    }, 1),
    9: new ViewComponent(ctx, "images/tanks/9.png", {x: 670 - 75, y: 493}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(9)
        gameState = gameStates.gamePlay
    }, 1),
    10: new ViewComponent(ctx, "images/tanks/10.png", {x: 845 - 75, y: 493}, {
        x: 143,
        y: 143
    }, () => {
        changeLevel(10)
        gameState = gameStates.gamePlay
    }, 1),
};

let winWindow = {
    bg: new ViewComponent(ctx, "images/tanks/winWindow.png", {x: 301 - 75, y: 147}, {
        x: 574,
        y: 463
    }, () => {
        // changeLevel(9)
        // gameState = gameStates.gamePlay
    }, 1),

    menuButton: new ViewComponent(ctx, "images/tanks/chooseLvl.png", {x: 340 - 75, y: 300}, {
        x: 489,
        y: 118
    }, () => {
        hpCount = 3;
        clearLevel()
        gameState = gameStates.chooseLevel
    }, 1),

    nextLevelButton: new ViewComponent(ctx, "images/tanks/nextLevel.png", {x: 340 - 75, y: 450}, {
        x: 489,
        y: 118
    }, () => {
        changeLevel()
        clearLevel()
        hpCount = 3;
        gameState = gameStates.gamePlay

    }, 1),
};

let loseWindow = {
    bg: new ViewComponent(ctx, "images/tanks/loseWindow.png", {x: 301 - 75, y: 147}, {
        x: 574,
        y: 463
    }, () => {
    }, 1),

    menuButton: new ViewComponent(ctx, "images/tanks/again.png", {x: 340 - 75, y: 399}, {
        x: 489,
        y: 118
    }, () => {
        changeLevel(gameLevel)
        clearLevel()
        gameState = gameStates.gamePlay
    }, 1)
};

let stars = [];

function render() {
    setInterval(() => {
        audioManager.playMusic("background");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (gameState === gameStates.question) {
            drawWindow(questionWindow);
            drawWindow(question1)
            switch (currentQuestion) {
                case 1:
                    drawWindow(question1)
                    break
                case 2:
                    drawWindow(question2)
                    break
                case 3:
                    drawWindow(question3)
                    break
                case 4:
                    drawWindow(question4)
                    break
                case 5:
                    drawWindow(question5)
                    break
                case 6:
                    drawWindow(question6)
                    break
                case 7:
                    drawWindow(question7)
                    break
                case 8:
                    drawWindow(question8)
                    break
                case 9:
                    drawWindow(question9)
                    break
                case 10:
                    drawWindow(question10)
                    break
                case 11:
                    drawWindow(question11)
            }
        } else if (gameState === gameStates.chooseHard) {
            drawWindow(chooseHardWindow)
        } else if (gameState === gameStates.startMenu) {
            drawWindow(startWindow)
        } else if (gameState === gameStates.chooseLevel) {
            drawWindow(chooseLevelMenu)
        } else if (gameState === gameStates.win) {
            drawWindow(winWindow)
        } else if (gameState === gameStates.dead) {
            drawWindow(loseWindow)
        } else if (gameState === gameStates.gamePlay) {
            mobGenerator();
            drawWindow(gameBoard);
            drawWindow(currentMapImage);
            drawWindow(map);
            drawWindow(tank);
            drawWindow(stars)
            tanksMoving(enemiesTanks);
            tanksMoving(secondArmy);
            drawWindow(enemiesTanks);
            drawWindow(secondArmy);
            for (let element in boomArray) {
                boomArray[element].draw();
                boomArray[element].update();
            }

            for (let element in bigBoomsArray) {
                bigBoomsArray[element].draw();
                bigBoomsArray[element].update();
            }

            drawWindow(movingElements);
        }
    }, 1000 / FPS)
}

render();