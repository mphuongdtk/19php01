function checkList(){
	var name = document.getElementById('name').value;
	var address = document.getElementById('address').value;
	var phone = document.getElementById('phone').value;
	var number1 = document.getElementById('number1').value;
	var number2 = document.getElementById('number2').value;
	var firstday = document.getElementById('firstday').value;
	var lastday = document.getElementById('lastday').value;

	var checkRegisterSuccess = true;
	if (name == ''){
		document.getElementById('errorName').innerHTML = 'Hãy nhập họ tên!';
		checkRegisterSuccess = false;
	} else{
		document.getElementById('errorName').innerHTML=' ';
		document.getElementById('hoten').innerHTML='Họ tên: '+name;
	}
		if (address ==''){
		document.getElementById('errorAddress').innerHTML = 'Hãy nhập địa chỉ!';
		checkRegisterSuccess = false;
	} else{
  		document.getElementById('errorAddress').innerHTML=' ';
		document.getElementById('diachi').innerHTML='Địa chỉ: ' +address;
	}
		if (phone == ''){
		document.getElementById('errorPhone').innerHTML = 'Hãy nhập số điện thoại!';
		checkRegisterSuccess = false;
	} else{
		document.getElementById('errorPhone').innerHTML=' ';
		document.getElementById('sodienthoai').innerHTML='Số điện thoại: ' +phone;

	}
		if (number1 == ''){
		document.getElementById('errorNumber1').innerHTML = 'Hãy nhập số đầu kỳ!';
		checkRegisterSuccess = false;
	} else{
		document.getElementById('errorNumber1').innerHTML=' ';
		document.getElementById('sodauky').innerHTML='Số đầu kỳ: ' + number1;
	}
		if (number2 ==  ''){
		document.getElementById('errorNumber2').innerHTML = 'Hãy nhập số cuối kỳ!';
		checkRegisterSuccess = false;
	} else if(number2 < number1){
		document.getElementById('errorNumber2').innerHTML ='Số cuối kỳ chưa chính xác!';
		document.getElementById('errorNumber2').style.color = 'red';
	}
	else{
		document.getElementById('errorNumber2').innerHTML=' ';
		document.getElementById('socuoiky').innerHTML='Số cuối kỳ: ' + number2;

	}
		if (firstday ==  ''){
		document.getElementById('errorFirstday').innerHTML = 'Hãy nhập đầy đủ ngày đầu kỳ!';
		checkRegisterSuccess = false;
	} else{
		document.getElementById('errorFirstday').innerHTML=' ';
		document.getElementById('ngaydauky').innerHTML='Ngày đầu kỳ: ' +firstday;

	}
		if (lastday ==  ''){
		document.getElementById('errorLastday').innerHTML = 'Hãy nhập đầy đủ ngày cuối kì!';
		checkRegisterSuccess = false;
	} else if(lastday < firstday){
		document.getElementById('errorLastday').innerHTML = 'Ngày cuối kỳ chưa chính xác!';
			document.getElementById('errorLastday').style.color = 'red';
	}
	else{
		document.getElementById('errorLastday').innerHTML=' ';
		document.getElementById('ngaycuoiky').innerHTML='Ngày cuối kỳ: ' + lastday;
	}
	if (checkRegisterSuccess !=''){
		document.getElementById('registerSuccess').innerHTML = 'Đã Đăng Nhập!';
	}  else{
		document.getElementById('registerSuccess').innerHTML = 'Hãy nhập đầy đủ!';
	}
}
function tinhTienDien(){
	var chuSoDau = document.getElementById('number1').value;
	var chuSoCuoi = document.getElementById('number2').value;
	var TienDien ;
	TienDien= chuSoCuoi - chuSoDau;
	var tongTienDien;
	if(TienDien <= 100){
		var tongTienDien = TienDien*1500;
	} 
	else if ((TienDien> 100) && (TienDien <=300)){
		 var tongTienDien = 100*1500 + (TienDien-100)*2000;
	}
	else if (TienDien>300){
		var tongTienDien = 100*1500 + 100*2000 + (TienDien-200)*3000;
	}
	document.getElementById('tinhtiendien').innerHTML = 'Số tiền điện: ' + tongTienDien + ' đồng';
}