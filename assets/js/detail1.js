
let IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

let url = window.location.search

let urlParams = new URLSearchParams(url)
const id = urlParams.get('id')

let apiDetail = `http://localhost:3000/product/${id}`

console.log(apiDetail)

let callApiDetail = async(url) => {
    let response = axios.get(url)
    let detail = await response

    return showDetail(detail.data)
}

callApiDetail(apiDetail)

let rowDetail = document.querySelector('.detail')

let showDetail = (data) => {
    console.log(data)
    rowDetail.innerHTML = `
    <div class="image-detail">
        <img src="./assets/image/merchandise1.png" alt="">
    </div>
    <div class="content">
        <h3>${data.name}</h3>
        <h4>${data.price}vnd</h4>
        <div class="policy">
            <div class="policy-1">
                <p>
                    <img src="./assets/image/image_service_1.png" alt="">
                    Giao hàng toàn quốc
                </p>
                <p>
                    <img src="./assets/image/image_service_1.png" alt="">
                    Thanh toán khi nhận hàng
                </p>
            </div>
            <div class="policy-2">
                <p>
                    <img src="./assets/image/image_service_1.png" alt="">
                    Hàng chính hãng/Bảo hành 10 năm
                </p>
                <p>
                    <img src="./assets/image/image_service_1.png" alt="">
                    Cam kết đổi trả hàng miễn phí
                </p>
            </div>
        </div>
        <p>Còn hàng</p>
        <div class="buy-item">
            <div class="quantity-change">
                <button class="dtl-btn-decrease">-</button>
                <input type="text" value="1">
                <button class="dtl-btn-increase">+</button>
            </div>
            <button class="dtl-btn-add">Them vao gio hang</button>
            <button class="dtl-btn-buy">Mua ngay</button>
        </div>
        <h4>Thong tin san pham</h4>
            <p>${data.infor}</p>
    </div>
    `
}