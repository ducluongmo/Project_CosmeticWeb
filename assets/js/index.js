
$(document).ready(function(){
    $(".slider-promotion").owlCarousel({
        dots: false,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:2,
            },
            1000:{
                items:2,
            }
        }
    });

    $(".slider-banner").owlCarousel({
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        loop: true,
        responsive:{
            0:{
                items:0,
            },
            600:{
                items:1,
            },
            1000:{
                items:1,
            }
        }
    });

    $(".slider-new-product").owlCarousel({
        dots: false,
        loop: true,
        margin: 20,
        responsive:{
            0:{
                items:0,
            },
            600:{
                items:4,
            },
            1000:{
                items:4,
            }
        }
    });
});



const API_URL = 'http://localhost:3000/product';

let rowProduct = document.querySelector('.row-js')

// Get API
let getProduct = async(url) => {
    // console.log(url);
    // tao mot promise serve
    let response = axios.get(url)
    // thuc thi loi hua
    let result = await response
    // tra ve du lieu phim cho function showMovie
    return showProduct(result.data)
}
getProduct(API_URL)

let showProduct = (data) => {
    let listProduct = data
    let HTML = ``
    listProduct.forEach((value, index) => {
        HTML = HTML + `
        <div class="col-md-3 col-sm-6 col-12">
            <a href="./detail1.html?id=${value.id}">
                <div class="content">
                    <div class="box-image">
                        <img src="./assets/image/merchandise1.png" alt="">
                    </div>
                    <div class="box-text">
                        <h3 class="name-product">${value.name}</h3>
                    </div>
                </div>
            </a>
            <p class="price-product">${value.price} VND</p>
        </div>
        `
    })
    rowProduct.innerHTML = HTML
}

