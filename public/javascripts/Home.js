
$(function () {
    var re1 = /^[0]?[1][0-9]{10}$/;
    var re2 = /^[1-9]\d{4,11}$/;
    var re3 = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/;

    $('#phone').change(function () {
        if(re1.test($(this).val())){
            $('#phoneError').addClass('hide').text(date);
        }else{
            alert('请输入正确的手机号码');
            $('#phoneError').removeClass('hide').text(date);
        }
    });
    $('#qq').change(function () {
        if(re2.test($(this).val())){
            $('#qqError').addClass('hide').text(date);
        }else{
            alert('QQ格式不正确');
            $('#qqError').removeClass('hide').text(date);
        }
    })
    $('#email').change(function () {
        if(re3.test($(this).val())){
            $('#emailError').addClass('hide').text(date);
        }else{
            alert('email格式不正确');
            $('#emailError').removeClass('hide').text(date);
        }
    })
})