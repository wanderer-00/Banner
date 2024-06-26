/* Создание меню выбора материала */
var banner_material = document.querySelector('.material');

banner_material.innerHTML = `
            <h2>Материал</h2>
            <form method="post">
                <select size="1">${banner_material_build()}</select>
            </form>`;



function banner_material_build() {

    var result = "";

    for (i = 0; i < banner_materials.length; i++) {
        result += `<option value="">${banner_materials[i]}</option>`;
    };
    return result;
};
