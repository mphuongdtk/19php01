// for , while , do while
for (var i =0 ; i < 10 ; i++){
	document.write(i);
	document.write('<br>');
}
	document.write('----------------<br>');
var x =5;
var y = 5;
x++;
y--;
document.write(x);
document.write('<br>');
document.write(y);
 
 var  a = 5 , b = 7;
 var c;
 c = ++a  +  ++b;
 c = a++  +  b++;
 document.write('<br>');
 document.write(c);


 document.write('<br>');
document.write('----------------<br>');
var i = 5;
while (i < 10){
	document.write(i);
	document.write('<br>');
	i++;
}

 document.write('<br>');
document.write('----------------<br>');
var i = 5;
do {
	document.write(i);
	document.write('<br>');
	i++;
} while(i<10);

//cho  một dãy số chạy từ 2 đến 15
//kiểm tra xem số đó có phải là ngày trong tuần không?
//Nếu có thì in ra: hôm nay là thứ x
//Nếu không thì in ra: số này không thuộc ngày trong tuần
document.write('<br>');
document.write('----------------<br>');
for(var i=2 ;  i<=15 ; i++){
	switch (i) {
		case 2:
		case 3:
		case 4:
		case 5:
		case 6:
		case 7:
				document.write('hom nay la thu' + i);
				document.write('<br>')
				break;
		case 8:
				document.write('hom nay la chu nhat');
				document.write('<br>');
				break;
		default:
				document.write('so nay khong phai la ngay trong tuan');
				document.write('<br>');
				break;
	}
}

// Hàm trong javascript
function myFunction() {
	var a = 5 , b = 6;
	document.write(a+b);
}
document.write('<br>');
myFunction();

//
function sub(x , y) {
	document.write(x + y);
}
document.write('<br>');
sub(6 , 7);
document.write('<br>');
sub(9 , 6);
// cho một dãy số n chạy từ 0 đến 10
//với n là số năm kinh nghiệm
//tính lương thực nhân với
//lương cỏ bản là 2.300.000
//số năm kinh nghiệm  <3 thì hệ số lương là 2
//số năm kinh nghiệm  <5 thì hệ số lương là 3
//số năm kinh nghiệm  =5 thì hệ số lương là 4
//số năm kinh nghiệm  >5 thì hệ số lương là 5
//ex: lương thực nhận = lương cơ bản x hệ số lương
//sử dụng: function , if else , for hoặc while
document.write('<br>');
document.write('----------------<br>');
var luongcoban = 2300000;
for(var namKN=0 ; namKN<=10;  namKN++) {
	if (namKN < 3) {
		luongthucnhan(luongcoban , 2);
		document.write('<br>');
	} else if (namKN < 5){
		luongthucnhan(luongcoban , 3);
		document.write('<br>');
	} else if (namKN==5){
		luongthucnhan(luongcoban , 4);
		document.write('<br>');
	} else{
		luongthucnhan(luongcoban , 5);
		document.write('<br>');
	}
	}
function  luongthucnhan(lcb, hesoluong){
	document.write(lcb * hesoluong);
}





