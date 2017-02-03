
$(function () {
    var re1 = /^([a-z]|[A-Z])\w{5,15}$/;
    var re2 = /^\w{6,16}$/;
    $('#userName').change(function () {
//            test方法  正则.test('str')
        if(re1.test($(this).val())){
            $('#userError').addClass('hide').text(date);
            $('#buttonLogin').attr("disabled",false);
        }else{
            alert('帐号格式不正确，首字必须为字母，且长度为6-16');
            $('#userError').removeClass('hide').text(date);
            $('#buttonLogin').attr("disabled",true);
        }
    });
    $('#userPassword').change(function () {
        if(re2.test($(this).val())){
            $('#passwordError').addClass('hide').text(date);
            $('#buttonLogin').attr("disabled",false);
        }else {
            alert('密码长度为6-16位');
            $('#passwordError').removeClass('hide').text(date);
            $('#buttonLogin').attr("disabled",true);
        }
    });
})