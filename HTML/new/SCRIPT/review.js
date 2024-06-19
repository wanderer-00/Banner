var review = document.querySelector('.review');

for (i = 0; i < data_reviews.length; i++) {
    review.innerHTML += `
<div>
    <div class="icon" style="background-image: url('IMG/review/${data_reviews[i].ICON}');"></div>
    <h2>${data_reviews[i].NAME}</h2>
    <div class="star">${star()}</div>
    <div class="note">${data_reviews[i].NOTE}</div>
</div>
    `
};

function star() {
    var result = '';
    
    var s = data_reviews[i].STAR;
    
    for(n=0; n<s; n=0){
        if(s>=1){
            result += '<svg fill="gold" width="20px" height="20px"><use xlink:href="#full"></use></svg>'
        } else {
            result += '<svg fill="gold" width="20px" height="20px"><use xlink:href="#half"></use></svg>'
        };
        s--;
    }; return result;
}
