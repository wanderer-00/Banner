var services = document.querySelector('.services');

for (i = 0; i < data_services.length; i++) {
    services.innerHTML += `
<div class="card">
    <div class="icon" style="background-image: url('IMG/services/0.jpg')"></div>
    <div class="name">Название блока</div>
</div>
    `
};



/*

<div class="card">
    <div class="icon" style="background-image: url('IMG/services/${data_services[i].ICON}')"></div>
    <div class="name">${data_services[i].NAME}</div>
</div>

*/