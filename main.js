//Intial Ratings
const ratings = {
    sony: 4.7,
    samsung: 3.4,
    vizio: 2.3,
    panasonic: 3.6,
    philips: 4.1
};

//Total Stars
const starsTotal = 5;

//Run getRating when DOM Loaded
document.addEventListener('DOMContentLoaded', getRatings);

//Form Elements
const productSelect = document.querySelector('#product-select');
const ratingControl = document.querySelector('#rating-control');

//Init product
let product;

//Product select change
productSelect.addEventListener('change', (e)=>{
    product = e.target.value;
    //Enable Rating Control
    ratingControl.disabled = false;

    ratingControl.value = ratings[product];
});

//Rating Control Change
ratingControl.addEventListener('blur', (e) =>{
    const rating = e.target.value;

    if(rating > 5){
        alert('Please Rate Product Under 5');
        return;
    };

    ratings[product] = rating;
    getRatings();
});


//get Ratings
function getRatings(){ 
    for(let rating in ratings){
        //Get Percentage Value
        const starPercentage = (ratings[rating] / starsTotal)*100;

        //Round Nearest To 10s
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;

        //set width
        document.querySelector(`.${rating} .star-inner`).style.width = starPercentageRounded
    };
};