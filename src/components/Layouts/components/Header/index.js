/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

function Header() {
  return (
    <header class="header">
    <div class="grid wide">
        
        <nav class="header__navbar hide-on-mobile-tablet">
            <ul class="header__nav-list">
                <li class="header__nav-item header__nav-item--hover header__nav-item--separate">Kênh Người Bán</li>
                <li class="header__nav-item header__nav-item--hover header__nav-item--separate">Trở thành Người bán Shopee</li>
                <li class="header__nav-item header__nav-item--hover header__nav-item--separate header__show-qr">
                    Tải ứng dụng
                </li>
                
                <div class="header__qrcode">
                    <img src="./assets/img/qr/qr-code.png" class="header__qr"/>
                    <div class="header__apps">
                        <a href="#" class="header__app-link">
                            <img src="./assets/img/qr/app-store.png" class="header__app-img"/>
                        </a>
                        <a href="#" class="header__app-link">
                            <img src="./assets/img/qr/gg-play.png" class="header__app-img"/>
                        </a>
                        <a href="#" class="header__app-link">
                            <img src="./assets/img/qr/app-gallery.png" class="header__app-img"/>
                        </a>
                        <a href="#" class="header__app-link">
                            <img src="./assets/img/qr/ltp-img.png" class="header__app-img"/>
                        </a>
                    </div>
                </div>
                <li class="header__nav-item">
                    Kết nối
                    <a href="#" class="header__nav-icon-link">
                        <i class="header__nav-icon fab fa-facebook"></i>
                    </a>
                    <a href="#" class="header__nav-icon-link">
                        <i class="header__nav-icon fab fa-instagram"></i>
                    </a>
                </li>
            </ul>
            <ul class="header__nav-list">
                <li class="header__nav-item header__show-note">
                    <a href="#" class="header__nav-item-link">
                        <i class="header__nav-icon far fa-bell"></i>
                        Thông báo
                    </a>
                    
                    <div class="header__notifi">
                        <header class="header__notifi-header">
                            <h3>Thông Báo Mới Nhận</h3>
                        </header>
                        <ul class="header__notifi-list">
                            <li class="header__notifi-item">
                                <a href="#" class="header__notifi-link">
                                    <img src="./assets/img/sp/casio.png" class="header__notifi-img"/>
                                    <div class="header__notifi-info">
                                        <div class="header__notifi-name">
                                            Casio fx 580 VN Plus
                                        </div>
                                        <div class="header__notifi-desc">
                                            Mua Casio 580 của LTP bao xịn, bao mượt, bao đẹp
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="header__notifi-item">
                                <a href="#" class="header__notifi-link">
                                    <img src="./assets/img/sp/iphone.png" class="header__notifi-img"/>
                                    <div class="header__notifi-info">
                                        <div class="header__notifi-name">
                                            Điện Thoại iPhone 13 Pro 128GB - Hàng Nhập Khẩu
                                        </div>
                                        <div class="header__notifi-desc">
                                            3 Camera: Ống kính góc rộng f/1.5 - Tele f/2.8 - Siêu rộng f/1.8
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="header__notifi-item">
                                <a href="#" class="header__notifi-link">
                                    <img src="./assets/img/sp/iphone2.png" class="header__notifi-img"/>
                                    <div class="header__notifi-info">
                                        <div class="header__notifi-name">
                                            Apple iPhone 12 Pro Max 128GB
                                        </div>
                                        <div class="header__notifi-desc">
                                            iPhone 12 Pro Max. Màn hình Super Retina XDR 6.7 inch
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="header__notifi-item">
                                <a href="#" class="header__notifi-link">
                                    <img src="./assets/img/sp/laptop.png" class="header__notifi-img"/>
                                    <div class="header__notifi-info">
                                        <div class="header__notifi-name">
                                            Laptop HP 650 g1 siêu khỏe bền
                                        </div>
                                        <div class="header__notifi-desc">
                                            Laptop siêu bền, HP 650 g1 siêu khỏe bền ssd 120gb 15,6inh FULL HD
                                        </div>
                                    </div>
                                </a>
                            </li>
                            <li class="header__notifi-item">
                                <a href="#" class="header__notifi-link">
                                    <img src="./assets/img/sp/laptop2.png" class="header__notifi-img"/>
                                    <div class="header__notifi-info">
                                        <div class="header__notifi-name">
                                            Laptop thinkpad x240 chất mỏng nhẹ i5 4300u Ram 4gb Ssd 128gb
                                        </div>
                                        <div class="header__notifi-desc">
                                            HP 650 g1 chip M đời 4, cpu i5 4200M ram 4gb -8gb
                                        </div>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        <footer class="header__notifi-footer">
                            <a href="#" class="header__notifi-footer-btn">Xem tất cả</a>
                        </footer>
                    </div>
                </li>
                <li class="header__nav-item">
                    <a href="#" class="header__nav-item-link">
                        <i class="header__nav-icon far fa-question-circle"></i>
                        Hỗ trợ
                    </a>
                </li>
                
                <li class="header__nav-item header__nav-item--bold header__nav-item--separate">
                    <a href="#" class="header__nav-item-link">Đăng ký</a>
                </li>
                <li class="header__nav-item header__nav-item--bold">
                    <a href="#" class="header__nav-item-link">Đăng nhập</a>
                </li>

                /* <li class="header__nav-item header__nav-user">
                    <img src="./assets/img/user.png" class="header__nav-user-avt"/>
                    <a href="#" class="header__nav-item-link header__nav-item--bold">Lục Thiên Phong</a>
                    <ul class="header__nav-user-menu">
                        <li class="header__nav-user-item">
                            <a href="#">Tài khoản của tôi</a>
                        </li>
                        <li class="header__nav-user-item">
                            <a href="#">Đơn mua</a>
                        </li>
                        <li class="header__nav-user-item">
                            <a href="#">Đăng xuất</a>
                        </li>
                    </ul>
                </li> */
            </ul>
        </nav>
        
        <div class="header__contain">
            <label for="mobile-search" class="header__mobile-search">
                <i class="header__mobile-search-icon fas fa-search"></i>
            </label>
            <div class="header__logo">
                <a href="#" class="header__logo-link">
                    <img src="./assets/img/logo/logo-full-white.png" class="header__logo-img"/>
                </a>
            </div>
            <input type="checkbox" id="mobile-search" class="header__search-check" hidden/>
            <div class="header__search">
                <div class="header__search-input-wrap">
                    <input type="text" class="header__search-input" placeholder="Tìm kiếm trên Shoppee"/>
                    <div class="header__search-history">
                        <ul class="header__search-history-list">
                            <li class="header__search-history-item">
                                <a href="#">Combo 30 điểm đại học khối A</a>
                                </li>
                        </ul>
                    </div>
                </div>
                <button class="btn header__search-btn">
                    <i class="header__search-btn-icon fas fa-search"></i>
                </button>
            </div>
           
            <div class="header__cart header__cart--has-cart">
                <i class="header__cart-icon fas fa-shopping-cart"></i>
                <div class="header__cart-count">4</div>
                
                <div class="header__cart-list no-cart">
                    <img src="./assets/img/sp/no-cart.png" class="header__no-cart-img"/>
                    <p class="header__no-cart-text">Chưa có sản phẩm</p>
                </div>
                
                <div class="header__cart-list has-cart">
                    <h4 class="header__cart-heading">Sản phẩm đã chọn</h4>
                    <ul class="header__cart-list-item">
                        <li class="header__cart-item">
                            <img src="./assets/img/buy/1.PNG" class="header__cart-item-img"/>
                            <div class="header__cart-item-info">
                                <div class="header__cart-item-heading">
                                    <h3 class="header__cart-item-name">Thanh Thanh 2000 1m57 46kg 88-62-89</h3>
                                    <p class="header__cart-item-price">2.000.000đ</p>
                                </div>
                                <div class="header__cart-item-body">
                                    <p class="header__cart-item-number">x 2</p>
                                    <div class="header__cart-item-close">
                                        Xoá
                                        <i class="fas fa-times"></i>
                                    </div>
                                </div>
                            </div>
                        </li>
                       
                       
                        
                       
                       
                        
                    </ul>
                    <div class="header__cart-footer">
                        <a href="#" class="btn btn--primary header__cart-see-cart">Xem giỏ hàng</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </header>
  )
}

export default Header
