var size = document.body.getElementsByClassName('size')[0];

size.innerHTML = `
    <div class="title">Размер (см)</div>
    <input type="number" class="size" min="1" value="300" placeholder="ширина" id="width">
    <span>×</span>
    <input type="number" class="size" min="1" value="200" placeholder="высота" id="height">
`;

/*
    <input type="number" value="300" placeholder="Высота" min="1" id="height">
    <input type="number" value="200" placeholder="Ширина" min="1" id="width">
*/