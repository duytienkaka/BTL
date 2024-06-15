document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            navLinks.forEach(function(link) {
                link.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".news-item");
    slides.forEach(slide => {
        slide.addEventListener("click", function() {
            const url = this.getAttribute("data-url");
            if (url) {
                window.location.href = url;
            }
        });
    });
});


const cartIcon = document.getElementById('icon_cart');
const cartBox = document.getElementById('cartBox');
const closeCartBtn = document.getElementById('closeCart');

// Kiểm tra click để hiển thị thẻ
cartIcon.addEventListener('click', function() {
    cartBox.classList.toggle('show');
    renderCartItems();
});

// Kiểm tra click để đóng thẻ lại
closeCartBtn.addEventListener('click', function() {
    cartBox.classList.remove('show');
});


let cart = [];
function removeFromCart(index){
    cart.splice(index, 1); // Xóa 1 phần tử tại vị trí index trong mảng cart
    renderCartItems(); // Làm mới giỏ hàng được thay đổi
}
function renderCartItems() {
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Gán giá trị mặc định cho giỏ hàng là rỗng
    let tong_tien = 0;
    if(cart.length > 0){
        cart.forEach(function(item, index) {
            // Tạo và chèn thêm thẻ li để tạo những box trong giỏ hàng
            const li = document.createElement('li');
            li.innerHTML = `<img src = "${item.image}"><span>${item.name}</span> <span>$${item.price}</span><button class = "button" onclick="removeFromCart(${index})"><svg viewBox="0 0 448 512" class="svgIcon"><path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"></path></svg></button>`;
            cartItemsList.appendChild(li);
            tong_tien += parseFloat(item.price);
        });
    }else{
        cartItemsList.innerHTML = '<p style = "font-size: 15px; color: red;">Giỏ hàng của bạn đang trống</p>';
    }
    document.getElementById('price-total').innerText = `$${tong_tien}`;
}
document.querySelectorAll('.box').forEach(box => {
    const img = box.querySelector('img');
    const hoverSrc = box.getAttribute('data-hover-src');
    const defaultSrc = box.getAttribute('data-default-src');
    
    box.addEventListener('mouseover', () => {
        img.src = hoverSrc;
    });
    
    box.addEventListener('mouseout', () => {
        img.src = defaultSrc;
    });

    const cartIcon = box.querySelector('.fa-shopping-cart');
    cartIcon.addEventListener('click', () => {
    event.stopPropagation(); // ngưng sự kiện kiểm tra click
    const name = box.getAttribute('data-name');
    const price = box.getAttribute('data-price');
    const image = img.src;
    const product = { name, price, image }; // Tạo đối tượng product
    
    cart.push(product); // Thêm sản phẩm vào mảng cart
    alert("Đã thêm vào giỏ hàng của bạn"); // Thông báo cho người dùng biết đã thêm vào giỏ hàng thành công
});

    box.addEventListener('click', () => {
        const url = box.getAttribute('data-url');
        window.location.href = url;
    });
});