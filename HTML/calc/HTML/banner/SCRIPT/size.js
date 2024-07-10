var size = document.body.getElementsByClassName('size')[0];

size.innerHTML = `
    <div class="title">Размер (см)</div>
    <input type="number" value="300" placeholder="Высота" min="1" id="height">
    <input type="number" value="200" placeholder="Ширина" min="1" id="width">
`;