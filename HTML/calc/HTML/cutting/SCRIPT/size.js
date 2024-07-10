var size = document.body.getElementsByClassName('size')[0];

size.innerHTML = `
    <div class="title">Размер (см)</div>
    <input type="number" value="300" placeholder="Высота" min="1" id="height">
    <input type="number" value="200" placeholder="Ширина" min="1" id="width">
`;

/* Получение значения input высоты и ширины */
var banner_size = document.body.querySelector('.size');
var banner_width_input = banner_size.children[2];
var banner_height_input = banner_size.children[1];

/* Изменение высоты холста */
banner_height_input.oninput = function() {
    var banner_width  = banner_width_input.value;
    var banner_height = banner_height_input.value;
    block.style.aspectRatio = `${banner_width}/${banner_height}`;
};

/* Изменение ширины холста */
banner_width_input.oninput = function() {
    var banner_width  = banner_width_input.value;
    var banner_height = banner_height_input.value;
    block.style.aspectRatio = `${banner_width}/${banner_height}`;
};