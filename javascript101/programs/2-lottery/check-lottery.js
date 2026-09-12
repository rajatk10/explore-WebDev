// A program to ask user to enter a number (1-100) and check if won the lottery
const number = document.getElementById('number');
const result = document.getElementById('result');
const resultPopup = document.getElementById('result-popup');
const lotteryForm = document.getElementById('lottery-form');


async function checkLottery(value) {
    const response = await fetch('http://localhost:4141/lottery', {
        method: 'GET',
    });
    const data = await response.json();
    console.log(data);
    if (response.status !== 200) {
        console.error("Failed to get lottery from server");
        throw new Error("Failed to get lottery from server");
        return false;
    }
    if (data["number"] === value) {
        console.log("WON the lottery");
        return true;
    }
    console.log("Lost the lottery, re-try");
    return false;
}

lotteryForm.addEventListener('submit', async (event) => {
    event.preventDefault();
    const value = Number(number.value);
    result.classList.remove('is-hidden',"won","lost");
    const isLotteryMatch = await checkLottery(value);
    if (isLotteryMatch) {
        console.log("Yes you WON lottery");
        result.textContent = "WON";
        result.classList.add('won');
    } else {
        console.log("Lost the lottery, re-try");
        result.textContent = "LOST, re-try";
        result.classList.add('lost');
    }
    //number.reset();
    lotteryForm.reset();
});
