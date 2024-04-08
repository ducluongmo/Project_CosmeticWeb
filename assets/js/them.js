
let previewContainer = document.querySelector('.product-preview')
let previewBox = document.querySelectorAll('.preview')
console.log(window.document.querySelector('.preview'))

document.querySelectorAll('.btn').forEach(button => {
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