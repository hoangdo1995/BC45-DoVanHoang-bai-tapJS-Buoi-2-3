// utilities function

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
// hiên thị tiền tệ Việt Nam đồng
const VND = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
});

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
for(let i = 0; i < 5; i++){
    numberArr[i] = 0;
}

function mappingById(id,idList,data2){
    for(let i = 0; i < idList.length; i++){
        if(id === idList[i]){
            data2[i] = +getValueById(id);
        }
    }
}
/**
 * Hàm tính trung bình cộng của mảng các số 
 * @param {*} data mảng các giá trị cần tính trung bình
 * @returns trả về Trung bình cộng của các số trong mang data
 */
function tinhTB(data){
    var tong = 0;
    var soPhanTu = 0;
    for(let i =0; i < data.length; i++){
        tong += data[i];
        soPhanTu ++;
    }
    return tong/soPhanTu;
}

var listNhapSo = document.querySelectorAll('.nhapso');
listNhapSo.forEach(element =>{
    element.addEventListener('change',function(){
        

        // lấy input
        mappingById(this.getAttribute('id'),['so-thu-1','so-thu-2','so-thu-3','so-thu-4','so-thu-5'],numberArr);

        //in kết quả ra màn hình
        document.getElementById('ket-qua-bai-2').innerHTML = tinhTB(numberArr).toFixed(2);
    })
});