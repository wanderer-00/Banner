var result = document.body.getElementsByClassName('result')[0];


/* Получение текущей даты */
var now = new Date();
var date = `${now.getDate()}.${now.getMonth()}.${now.getFullYear()}`;
console.log(date);


result.innerHTML = `
    <div>Готовность: ${date}</div>
    <div>ЦЕНА: </div>
    <div>
        <div class="no-select">В корзину</div>
    </div>
    <div>при оформлении заказа сегодня до 16:00</div>
`