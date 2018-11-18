var time = $('#timedown');
var times = document.getElementById('s');
var login = $('#loginnav'),
    register = $('#registernav'),
    loginfrom = $('#login'),
    registerfrom = $('#register'),
    forget = $('#forgetpass');


var showregister = function(){
    login.removeClass('active');
    register.addClass('active');
    loginfrom.addClass('hide');
    registerfrom.removeClass('hide');
}
var showlogin = function(){
    register.removeClass('active');
    login.addClass('active');
    registerfrom.addClass('hide');
    loginfrom.removeClass('hide');
}
register.on('click',showregister);
login.on('click',showlogin);
forget.on('click',showregister);
time.on()

/*
计时器方法
*/
var x = 5;
time.on('click', timedown);
function timedown() {
  if (x > 0) {
    x--;
    setTimeout("timedown()", 1000);
    times.innerHTML = "&nbsp" + x + "<span style='color:#FF3030'> &nbsp秒后可重发</span>";
    // times.innerHTML = "<span></span>"
    time.addClass('hide');
  }else {
    x=5;
    times.innerHTML = " ";
    time.removeClass('hide');
  }
}

$('.signupbtn-s').on('click',function(){
  window.open("notice-super.html");
});
$('.signupbtn-g').on('click',function(){
  window.open("notice.html");
});
