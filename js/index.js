// utilities function
//các định dạng tiền tệ
const USDollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});
/**
 * Hàm lấy giá tri của DOM thông qua ID của tag
 * @param {*} ID ID của tab muốn lấy về giá trị
 * @returns Gía tri value của the tag có id là 'ID'
 */
function getValueById(ID) {
    return document.getElementById(ID).value;
}

// BÀI TẬP 1

// input
var soNgayCong = 0;
var luongNgay = 0;
// output
var tongLuong = 0;

document.getElementById('tinh-tien-luong').onclick = function () {
    // process
    soNgayCong = +getValueById('ngay-cong');
    luongNgay = +getValueById('luong-ngay');
    //tính  tổng lương;
    tongLuong = soNgayCong * luongNgay;

    //in kêt quả ra màn hình
    document.getElementById('ket-qua-bai-1').innerHTML = VND.format(tongLuong);
}


//BÀI TẬP 2
//lấy danh sách các thẻ input nhapso
//input
var numberArr = [];
var Tb5So = 0;
// khởi tạo mảng numberArr
for (let i = 0; i < 5; i++) {
    numberArr[i] = 0;
}

/**
 * nhập các giá trị input của các phần tử dựa vào id của chúng theo tứ tự dựa vào mảng idList vào mảng data2
 * @param {*} id id của input cần lấy giá trị
 * @param {*} idList mảng các id của input cần lấy giá trị
 * @param {*} data2 mảng chứa các giá trị input nhâp vào
 * @returns tra về mảng đã nhập vào từ input
 */
function mappingById(id, idList, data2) {
    for (let i = 0; i < idList.length; i++) {
        if (id === idList[i]) {
            data2[i] = +getValueById(id);
        }
    }
    return data2;
}

/**
 * Hàm tính trung bình cộng của mảng các số 
 * @param {*} data mảng các giá trị cần tính trung bình
 * @returns trả về Trung bình cộng của các số trong mang data
 */
function tinhTB(data){
    var tong = 0;
    var soPhanTu = 0;
    for (let i = 0; i < data.length; i++) {
        tong += data[i];
        soPhanTu++;
    }
    return tong / soPhanTu;
}

//lấy mảng các DOM nhập liệu dựa trên class nhap-so
var listNhapSo = document.querySelectorAll('.nhapso');
//add xự kiên change cho tất cả các phần tử của listNhapSo
listNhapSo.forEach(element => {
    element.addEventListener('change', function () {
        // lấy input
        mappingById(this.getAttribute('id'), ['so-thu-1', 'so-thu-2', 'so-thu-3', 'so-thu-4', 'so-thu-5'], numberArr);

        //in kết quả ra màn hình
        document.getElementById('ket-qua-bai-2').innerHTML = tinhTB(numberArr).toFixed(2);
    })
});

//CHUYỂN ĐỔI TIỀN TỆ

// input
var soTien = 0;
// outPut
var soTienQuyDoi = 0;


/**
 * Quy đổi tiền thông quá số tiền và tỉ giá
 * @param {*} soSTien Số tiền cần chuyển đổi
 * @param {*} tiGia tỉ giá quy đổi
 * @returns số tiền quy đổi
 */
function quyDoiTien(soSTien, tiGia) {
    return soSTien * tiGia;
}

/**
 * add sự kiên cho input.nhap-so-tien
 */
document.getElementById('nhap-so-tien').onchange = function () {
    //lấy input soTien
    soTien = +this.value;
    //quy đổi và hiển thị ra màn hình
    soTienQuyDoi = quyDoiTien(soTien, 23500);
    document.getElementById('tien-quy-doi').innerHTML = VND.format(soTienQuyDoi);
}


//bài 4: Tính diện tích, chu vi của hình chủ nhật
//input
var chieuDai = 0;
var chieuRong = 0;

//output
var dienTich = 0;
var chuVi = 0;

/**
 * Tính diện tích của hình chủ nhật dựa vào chiều dài và chiều rộng nhập vào
 * @param {*} dai chiều dài hình chử nhật
 * @param {*} rong chiều rộng hình chủ nhật
 * @returns diện tích của hình chủ nhật
 */
function tinhDienTich(dai, rong) {
    return dai * rong;
}

/**
 * Tính chu vi của hình chủ nhật dựa vào chiều dài , chiều rộng nhập vào
 * @param {*} dai chiều dài
 * @param {*} rong chiều rộng
 * @returns Chu vi của hình chủ nhật
 */
function tinhChuVi(dai, rong) {
    return (dai + rong) * 2;
}

/**
 * hàm hiển thị diện tích, chu vi của hình chủ nhật nhập vào ra màn hình
 */
function hienThiHCN() {
    chuVi = tinhChuVi(chieuDai, chieuRong);
    dienTich = tinhDienTich(chieuDai, chieuRong);
    document.getElementById('dien-tich').innerHTML = dienTich;
    document.getElementById('chu-vi').innerHTML = chuVi;
}

/**
 * thêm xử lý xự kiện change cho input.chieu-dai
 */
document.getElementById('chieu-dai').onchange = function () {
    chieuDai = +this.value;
    hienThiHCN();
}
/**
 * Thêm xử lý xự kiện change cho input.chieu-rong
 */
document.getElementById('chieu-rong').onchange = function () {
    chieuRong = +this.value;
    hienThiHCN();
}


// bài 5: Tính tổng hai ký số;
//input
var soNhap = 0;
//output
var tongKySo = 0;


/**
 * Tính tổng hai ký số của số nhập vào có hai chử số
 * @param {*} number số có hai chư số
 * @returns Tổng của hai ký số của number
 */
function tinhTongKySo(number) {
    var kySoDau = Math.floor(number / 10);
    var kySoDuoi = (number) % 10;
    return kySoDau + kySoDuoi;
}


/**
 * Add sự kiện change cho input.chu-so
 */
document.getElementById('chu-so').onchange = function () {

    //lấy giá trị số nhập vào
    soNhap = +document.getElementById('chu-so').value;
    //kiểm tra dử liệu
    if(!(soNhap >=10 && soNhap <= 99)){
        alert('Bạn cần nhập vào số có hai chử số');
        return;
    }
    //tính và in kết qua ra màn hình
    tongKySo = tinhTongKySo(soNhap);
    document.getElementById('tong-ky-so').innerHTML = tongKySo;
}