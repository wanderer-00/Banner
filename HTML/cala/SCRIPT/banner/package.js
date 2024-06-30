/* Создание меню выбора упаковки */
var banner_package = document.querySelector('.package');

banner_package.innerHTML = `
            <div class="title">Упаковка</div>
            <form method="post">
                <select size="1">${banner_package_build()}</select>
            </form>`;



function banner_package_build() {

    var result = "";

    for (i = 0; i < banner_materials.length; i++) {
        result += `<option value="">${banner_materials[i]}</option>`;
    };
    return result;
};