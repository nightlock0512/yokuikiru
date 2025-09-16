const cards_1 = document.querySelector('.cards_1');
const cards_2 = document.querySelector('.cards_2');
const message = document.querySelector('.message');


// const player_1_name = prompt('プレイヤー１の名前');
// const player_2_name = prompt('プレイヤー２の名前');
const player_1_name = 'プレイヤー１';
const player_2_name = 'プレイヤー２';

let score_1 = 0;
let score_2 = 0;

window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})

let isBattle = false;

let _createCard = () => {
    message.innerHTML = player_1_name + 'はカードを選択してください。';
    cards_1.classList.remove('rotate');
    cards_2.classList.remove('rotate');
    cards_1.classList.remove('hide');
    for (let i = 0; i < 4; i++) {
        createCard(data[Math.floor(data.length * Math.random())]);
    }
}

let createCard = (data) => {
    const card_inner = `
    <div class="peaple">
        <img class="img" src="${data['url']}" alt="">
        <span class="name">${data['name']}</span>
    </div>
    <ul class="keywords">
        ${
            data['keywords'].join("、")
        }
    </ul>
    `;
    
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = card_inner;

    card.querySelector('.keywords').addEventListener('click', ()=>{
        if (!isBattle) return;
        card.querySelector('.keywords').classList.toggle('show');
    });

    card.addEventListener('click', function (event) {
        if(isBattle) return;

        // クリックされた要素を取得
        const clickedElement = card;

        // 親要素を取得
        const parentElement = clickedElement.parentElement;

        // 親要素の子要素をすべて取得
        
        let siblings = parentElement.children;
        // 兄弟要素をループで回して、クリックされた要素以外を削除
        for (let i = 0; i < siblings.length; i++) {
            console.log(siblings[i])
            if (siblings[i] !== clickedElement) {
                siblings[i].classList.add('remove'); // または siblings[i].style.display = 'none'; で非表示にする
            }
        }
        document.querySelectorAll('.remove').forEach(elm=>elm.remove());

        setTimeout(() => {
            cards_1.classList.add('hide');

            message.innerHTML = player_2_name +'に渡してください。<button type="button" onclick="_createCard_2()">受け取りました</button>';
        }, 1000);
    });

    cards_1.appendChild(card);
}

let _createCard_2 = () => {
    cards_2.classList.remove('hide');
    message.innerHTML = player_2_name + 'はカードを選んでください。';
    for (let i = 0; i < 4; i++) {
        createCard_2(data[Math.floor(data.length * Math.random())]);
    }
}

let createCard_2 = (data) => {
    const card_inner = `
    <div class="peaple">
        <img class="img" src="${data['url']}" alt="">
        <span class="name">${data['name']}</span>
    </div>
    <ul class="keywords">
        ${
            data['keywords'].join("、")
        }
    </ul>
    `;
    
    let card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = card_inner;

    card.querySelector('.keywords').addEventListener('click', () => {
        if (!isBattle) return;
        card.querySelector('.keywords').classList.toggle('show');
    });

    card.addEventListener('click', function (event) {

        if(isBattle) return;

        // クリックされた要素を取得
        const clickedElement = card;

        // 親要素を取得
        const parentElement = clickedElement.parentElement;

        // 親要素の子要素をすべて取得
        
        let siblings = parentElement.children;
        // 兄弟要素をループで回して、クリックされた要素以外を削除
        for (let i = 0; i < siblings.length; i++) {
            console.log(siblings[i])
            if (siblings[i] !== clickedElement) {
                siblings[i].classList.add('remove'); // または siblings[i].style.display = 'none'; で非表示にする
            }
        }
        document.querySelectorAll('.remove').forEach(elm=>elm.remove());

        setTimeout(() => {
            cards_2.classList.add('hide');
            message.innerHTML = '試合を開始します。<button onclick="battle()">準備完了</button>'
        }, 1000);
    });

    cards_2.appendChild(card);
}

let battle = () => {
    isBattle = true;

    cards_1.classList.add('rotate');
    cards_2.classList.add('rotate');

    message.innerHTML = '3';
    setTimeout(() => {
        message.innerHTML = '2';
    }, 1000);
    setTimeout(() => {
        message.innerHTML = '1';        
    }, 2000);
    setTimeout(() => {
        message.innerHTML = 'START！';
        cards_1.classList.remove('hide');
        cards_2.classList.remove('hide');

        win_1.classList.add('active');
        win_2.classList.add('active');
    }, 3000);
}

let win_btn_1 = () => {
    win_1.classList.remove('active');
    win_2.classList.remove('active');
    score_1++;
    point_1.innerHTML = score_1 + "pt";
    isBattle = false;
    
    setTimeout(() => {
        cards_1.classList.add('hide');
        cards_2.classList.add('hide');
        cards_1.innerHTML = '';
        cards_2.innerHTML = '';
        message.innerHTML = 'ゲームを開始します。' + player_1_name + 'に渡してください。<button onclick="_createCard()"">受け取りました</button>';
    }, 1000);
}

let win_btn_2 = () => {
    win_1.classList.remove('active');
    win_2.classList.remove('active');
    score_2++;
    point_2.innerHTML = score_2 + "pt";
    isBattle = false;
    setTimeout(() => {
        cards_1.classList.add('hide');
        cards_2.classList.add('hide');
        cards_1.innerHTML = '';
        cards_2.innerHTML = '';
        message.innerHTML = 'ゲームを開始します。' + player_1_name + 'に渡してください。<button onclick="_createCard()"">受け取りました</button>';
    }, 1000);
}

const point_1_name = document.querySelector('.point_1 .name');
const point_2_name = document.querySelector('.point_2 .name');
const point_1 = document.querySelector('.point_1 .value');
const point_2 = document.querySelector('.point_2 .value');

const win_1 = document.querySelector('.win_1');
const win_2 = document.querySelector('.win_2');


point_1_name.innerHTML = player_1_name;
point_2_name.innerHTML = player_2_name;

message.innerHTML = 'ゲームを開始します。' + player_1_name + 'に渡してください。<button onclick="_createCard()"">受け取りました</button>';
