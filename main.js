const cards_1 = document.querySelector('.cards_1');
const cards_2 = document.querySelector('.cards_2');
const message = document.querySelector('.message');


const player_1_name = prompt('プレイヤー１の名前');
const player_2_name = prompt('プレイヤー２の名前');

window.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
})

let isBattle = false;

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
            cards_1.style.display = 'none';

            message.innerHTML = player_2_name +'に渡してください。<button type="button" onclick="_createCard_2()">渡しました</button>';
        }, 1000);
    });

    cards_1.appendChild(card);
}

let _createCard_2 = () => {
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
            
        }, 5000);
        setTimeout(() => {
            
        }, 4000);
        setTimeout(() => {
            
        }, 5000);
        setTimeout(() => {
            
        }, 5000);
        setTimeout(() => {
            
        }, 5000);
    });

    cards_2.appendChild(card);
}

message.innerHTML = player_1_name + 'はカードを選択してください。'

for (let i = 0; i < 4; i++) {
    createCard(data[Math.floor(data.length * Math.random())]);
}


