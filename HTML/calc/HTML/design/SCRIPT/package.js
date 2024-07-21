/* Создание меню выбора упаковки */
var banner_package = document.querySelector('.package');

banner_package.innerHTML = `<div class="title">Упаковка</div>
                            <div class="cluster">${banner_package_build()}</div>`;



function banner_package_build() {

    var result = "";

    for (i = 0; i < banner_package_data.length; i++) {
        result += `
    <input type="radio" checked id="p${i}" name="package">
    <label class="button_border" for="p${i}" style="background-image: url(IMG/package/${i}.webp)"></label>
`;
    };
    return result;
};