window.mov = window.mov || {};


(function (mov) {
    //表单验证提示
    var tipShow = function (box, tip) {
        tipHide(box);
        var tipElm = $(['<img src="http://tv.sohu.com/upload/bjiff3/img/icon_w.gif" width="12" height="12" alt=""></em> <span>', tip, '</span>'].join(''));
        if (box.length > 0) {
            tipElm.insertAfter(box);
            box[0].tipElm = tipElm;
        }
        tipElm = null;
    }

    //表单验证隐藏提示信息
    var tipHide = function (box) {
        if (box && box[0].tipElm) {
            box[0].tipElm.remove();
            box[0].tipElm = null;
        }
    }

    mov.tipShow = tipShow;
    mov.tipHide = tipHide;
    mov.LANG = window.___LANG || 'cn';
    mov.tip = {
        en: {
            //注册用户
            userExist: 'Username is occupied',
            mailExist: 'E-mail is occupied',
            mailError: 'E-mail format error',
            mailNull: 'E-mail can not be empty',
            userNull: 'User\'s name can not be empty',
            userError: 'Accounts can only be data or English',
            passNull: 'Please enter a password',
            repassNull: 'Please enter the confirmed password',
            passError: 'Two password input is inconsistent',
            yzmNull: 'Please enter the verification code',
            yzmError: 'Verification code is wrong',

            //修改密码
            oldpasswordNull: 'Please enter the old password',
            newpasswordNull: 'Please enter the new password',
            renewpasswordNull: 'Please enter the confirmed password',
            renewpasswordError: 'Two password input is inconsistent',
            oldpasswordError: 'Old password is error',
            updateFail: 'Update failed',

            //上传
            uploadError: 'Upload failed,please try again later',

            //登录
            loginUsernameNull: 'Please enter the user name',
            loginPasswordNull: 'Please enter the password',
            loginError: 'Username or password is error',

            //找回密码
            findMailError: 'E-mail format error',
            findMailNull: 'E-mail can not be empty',
            findMailNoExist: 'The email does not exist',
            findMallSendFail: 'Message sending failed',

            //欢迎信息
            welcomeTip: 'Welcome!',
            logoutBtn: 'Exit',
            mediaTip: 'Distinguished Guest and Correspondents  please press The Media Journalists Botton to sign up.',
            changePass: 'Update password'

        },
        cn: {
            //注册用户
            userExist: '用户名被占用',
            mailExist: '邮箱被占用',
            mailError: 'email格式错误',
            mailNull: 'email不能为空',
            userNull: '用户名不能为空',
            userError: '用户名只能是英文数字或下划线',
            passNull: '请输入密码',
            repassNull: '请输入确认密码',
            passError: '两次密码输入不一致',
            yzmNull: '请输入验证码',
            yzmError: '验证码错误',

            //修改密码
            oldpasswordNull: '请输入旧密码',
            newpasswordNull: '请输入新密码',
            renewpasswordNull: '请输入确认密码',
            renewpasswordError: '两次密码输入不一致',
            oldpasswordError: '旧密码不正确',
            updateFail: '更新失败',

            //上传
            uploadError: '上传失败，请稍后再试',

            //登录
            loginUsernameNull: '请输入用户名',
            loginPasswordNull: '请输入密码',
            loginError: '用户名或密码错误',

            //找回密码
            findMailError: 'email格式错误',
            findMailNull: 'email不能为空',
            findMailNoExist: '该email不存在',
            findMallSendFail: '邮件发送失败',

            //欢迎信息
            welcomeTip: '欢迎回来！',
            logoutBtn: '退出',
            mediaTip: '嘉宾媒体注册现已开启！请点击媒体注册。',
            changePass: '修改密码'
        }
    };


    //登录
    //
    var loginFunc = function () {

        $.getJSON('/user/getUserInfo.jhtml?callback=?', function (data) {
            if (data.status == 1) {
                mov.loginData = data;
                if (typeof mov.onLoginFunc == 'function') {
                    mov.onLoginFunc();
                }
                $('#userNav').html([mov.tip[mov.LANG].welcomeTip, '<a href="#" class="sub_user">', data.username, '</a><a href="#" act="logout">', mov.tip[mov.LANG].logoutBtn, '</a>'].join(''));
                $('body').undelegate('click.logout');
                $('body').delegate('[act="logout"]', 'click.logout', function (e) {
                    e.preventDefault();
                    $.getJSON('/user/logout_json.jhtml?callback=?', function (data) {
                        if (data.status == '1') {
                            loginFunc();
                        } else {

                        }
                    });
                });
            } else {
                $('#userNav').html('');
                if (typeof mov.onLogoutFunc == 'function') {
                    mov.onLogoutFunc();
                }
            }
        });
    }
    $(function () {
        loginFunc();
    });
    mov.loginFunc = loginFunc;

    //退出

})(window.mov)

//nav menu


//var slide={i:2};
var timer;
var hovertimer, hovertimer2;
$(function () {
    //var width=document.body.clientWidth;
    //$('.Cont').css('width',width+'px');
    //alert(width);

    $('.nav_li').eq(1).hover(function () {
        clearTimeout(hovertimer);
        hovertimer2 = setTimeout(function () {
            $(".xl_out").slideDown("slow");
        }, 300);
    }, function () {
        clearTimeout(hovertimer2);
        hovertimer = setTimeout(function () {
            $(".xl_out").slideUp("slow");
        }, 300);
    });
    $(".xl_out").hover(function () {
        clearTimeout(hovertimer);
    }, function () {
        hovertimer = setTimeout(function () {
            $(".xl_out").slideUp("slow");
        }, 300);
    });
    $('.nav_lis').hover(function () {
        $(this).find("ul").show();
        $(this).find(".nav_lia").addClass("nav_liah");
    }, function () {
        $(this).find("ul").hide();
        $(this).find(".nav_lia").removeClass("nav_liah");
    });
})
