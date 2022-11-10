let userName = prompt("Введіть ім'я");
if (userName != null && userName != "") {
   document.getElementById("UserName").innerText = userName;
}
let round = 0, userNumber, PCNumber, userScore = 0, PCScore = 0;
let cards = {
    2:{ // Валет
        0: "img/rRombvalet.png",
        1: "img/rHeartvalet.png",
        2: "img/bKrestvalet.png",
        3: "img/bHeartvalet.png"
    },
    3:{ // Королева
        0: "img/bHeartdama.png",
        1: "img/bKrestdama.png",
        2: "img/rHeartdama.png",
        3: "img/rRombdama.png"
    },
    4:{ // Король
        0: "img/rRombking.png",
        1: "img/rHeartking.png",
        2: "img/bKrestking.png",
        3: "img/bHeartking.png"
    },
    6:{ // 6
        0: "img/bHeartsix.png",
        1: "img/bKrestsix.png",
        2: "img/rHeartsix.png",
        3: "img/rRombsix.png"
    },
    7:{ // 7
        0: "img/rRombseven.png",
        1: "img/rHeartseven.png",
        2: "img/bHeartseven.png",
        3: "img/bKrestseven.png"
    },
    8:{ // 8
        0: "img/bHearteight.png",
        1: "img/bKresteight.png",
        2: "img/rHearteight.png",
        3: "img/rRombeight.png"
    },
    9:{ // 9
        0: "img/rRombnine.png",
        1: "img/rHeartnine.png",
        2: "img/bKrestnine.png",
        3: "img/bHeartnine.png"
    },
    10:{ // 10
        0: "img/bHeartten.png",
        1: "img/bKrestten.png",
        2: "img/rHeartten.png",
        3: "img/rRombten.png"
    },
    11:{ // Туз
        0: "img/rRombtyz.png",
        1: "img/rHearttyz.png",
        2: "img/bHearttyz.png",
        3: "img/bKresttyz.png"
    },
};
function Random() {
    let random;
    do {
        random = Math.floor(Math.random() * 9 + 2);
    } while (random == 5);
    return random;
}
function Generate() {
    if (round == 3) {
        if (userScore > PCScore) {
            alert(userName +" ВИ виграли вітаю!!!!");
            location.reload();
            return;
        }
        else if (PCScore > userScore) {
            alert("Ти навіть компютер не обіграв :(!");
            location.reload();
            return;
        } else {
            alert("Оголошено нічию!")
            location.reload();
            return;
        }
    }
    userNumber = Random();
    PCNumber = Random();
    document.getElementById("UserCard").src = cards[userNumber][Math.floor(Math.random() * 4)];
    document.getElementById("PCCard").src = cards[PCNumber][Math.floor(Math.random() * 4)];
    console.log(`user:comp - ${userNumber}:${PCNumber}`);
    document.getElementById("UserScore").innerText = userScore += userNumber;
    document.getElementById("PCScore").innerText = PCScore += PCNumber;
    round++;
    document.getElementById("RoundCnt").innerText = `Спроба ${round} з 3`;
}
