
$(function () {
    var re1 = /^([a-z]|[A-Z])\w{5,15}$/;
    var re2 = /^\w{6,16}$/;
    var re3 = /^[0]?[1][0-9]{10}$/;
    var re4 = /^[1-9]\d{4,11}$/;
    var re5 = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;


    $('#userName').change(function () {
//            test方法  正则.test('str')
        if(re1.test($(this).val())){
            $('#userError').addClass('hide').text(date);
        }else{
            alert('帐号格式不正确，首字必须为字母，且长度为6-16');
            $('#userError').removeClass('hide').text(date);
        }
    });
    $('#userPassword').change(function () {
        if(re2.test($(this).val())){
            $('#passwordError').addClass('hide').text(date);
        }else {
            alert('密码长度为6-16位');
            $('#passwordError').removeClass('hide').text(date);
        }
    });
    $('#password-repeat').change(function () {
        if($('#userPassword').val() == $('#password-repeat').val()){
            $('#password-repeatError').addClass('hide').text(date);
        }else{
            alert('两次密码输入不一致');
            $('#password-repeatError').removeClass('hide').text(date);
        }
    })
    $('#phone').change(function () {
        if(re3.test($(this).val())){
            $('#phoneError').addClass('hide').text(date);
        }else{
            alert('请输入正确的手机号码');
            $('#phoneError').removeClass('hide').text(date);
        }
    });
    $('#qq').change(function () {
        if(re4.test($(this).val())){
            $('#qqError').addClass('hide').text(date);
        }else{
            alert('QQ格式不正确');
            $('#qqError').removeClass('hide').text(date);
        }
    })
    $('#email').change(function () {
        if(re5.test($(this).val())){
            $('#emailError').addClass('hide').text(date);
        }else{
            alert('email格式不正确');
            $('#emailError').removeClass('hide').text(date);
        }
    })
})