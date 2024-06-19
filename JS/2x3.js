var data_2x3 = [
    "Визитки",
    "Листовки",
    "Буклеты",
    "Каталоги",
    "Календари",
    "Открытки"
];

var cluster = document.querySelector('.cluster');

for (i = 0; i < data_2x3.length; i++) {
    cluster.innerHTML += `
        <div class="box">
            <div class="txt">${data_2x3[i]}</div>
            <div class="img" style="background-image: url('IMG/${i+1}.jpg')"></div>
        </div>
`
};