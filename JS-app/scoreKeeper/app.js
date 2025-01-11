let p1_score = document.querySelector('#player_1_score')
let p2_score = document.querySelector('#player_2_score')

let add_p1 = document.querySelector('#p_1_add')
let add_p2 = document.querySelector('#p_2_add')
let resetBtn = document.querySelector('#resetBtn')
let roundMaxBtn = document.querySelector('#roundScore')

let p1 = 0
let p2 = 0
let isGameOver = false
let roundMax = roundMaxBtn.value

p1_score.innerText = 0
p2_score.innerText = 0

function setResult() {
    console.log(`P1: ${p1}, P2: ${p2}`);
    p1_score.innerText = p1
    p2_score.innerText = p2
    if (!isGameOver) {
        if (parseInt(p1) === parseInt(roundMax)) {
            p1_score.style.color = 'green'
            p2_score.style.color = 'red'
            alert('Player 1 WINS!')
            console.log('Player 1 WINS!')
            disableBTN();
        }
        else if (parseInt(p2) === parseInt(roundMax)) {
            p1_score.style.color = 'red'
            p2_score.style.color = 'green'
            alert('Player 2 WINS!')
            console.log('Player 2 WINS!')
            disableBTN();
        }
        else {
            p1_score.style.color = 'black'
            p2_score.style.color = 'black'
        }
    }
}

function resetGame() {
    console.log('Reset Game')
    p1 = 0
    p2 = 0
    roundMax = roundMaxBtn.value;
    isGameOver = false;
    add_p1.disabled = false;
    add_p2.disabled = false;
    setResult()
}

resetBtn.addEventListener(('click'), (evt) => {
    console.log('RESET Game');
    console.log(`P1: ${p1}, P2: ${p2}`);
    resetGame();
})

add_p1.addEventListener(('click'), (evt) => {
    if (!isGameOver) {
        if (parseInt(p1) === parseInt(roundMax)) {
            isGameOver = true;

        }
        else {
            p1 += 1;
        }
    }
    setResult()
})

add_p2.addEventListener(('click'), (evt) => {
    if (!isGameOver) {
        if (parseInt(p2) === parseInt(roundMax)) {
            isGameOver = true;
        }
        else {
            p2 += 1;
        }
    }
    setResult()
})

roundMaxBtn.addEventListener(('change'), (evt) => {
    roundMax = roundMaxBtn.value;
    resetGame();
    console.log(roundMax)
})

function disableBTN() {
    add_p1.disabled = true;
    add_p2.disabled = true;
}