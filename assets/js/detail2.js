const API_URL_1 = 'http://localhost:3000/detailProduct'

let preview = document.querySelector('.product-preview')

let getProductPreview = async(url) => {
    // console.log(url)
    let res = axios.get(url)

    let result_1 = await res

    return showPreview(result_1.data)
}

getProductPreview(API_URL_1)

let showPreview = (data_1) => {
    let listProductPreview = data_1
    let HTML_1 = ``

    listProductPreview.forEach((value) => {
        HTML_1 = HTML_1 + `
        <div class="preview" data-target="product-2">
            <i class="fa-solid fa-xmark"></i>
            <div class="img-preview">
                <img src="./assets/image/merchandise1.png" alt="">
            </div>
            <div class="content-preview">
                <h3>San pham 3</h3>
                <h4>100.000vnd</h4>
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
            </div>
        </div>
        `
    })
    preview.innerHTML = HTML_1
}











let previewContainer = document.querySelector('.product-preview')
let previewBox = previewContainer.querySelectorAll('.preview')
let btn = document.querySelectorAll('.btn-detail')

document.querySelectorAll('.btn-detail').forEach(button => {
    button.onclick = () => {
        previewContainer.style.display = 'flex'
        let name = button.getAttribute('data-name')
        console.log(name)
        previewBox.forEach(preview => {
            let target = preview.getAttribute('data-target')
            if(target == name) {
                preview.classList.add('active')
            }
        })
    }
})

previewBox.forEach(close => {
    close.querySelector('.fa-xmark').onclick = () => {
        close.classList.remove('active')
        previewContainer.style.display = 'none'
    }
})

