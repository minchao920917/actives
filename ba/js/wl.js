
//挽留功能
if (!$('#confirm_stay').size()) {
    $('head').append('<link rel="stylesheet" type="text/css" href="css/cssconfirm_m.css">');
    var confirm = '<div class="confirm_stay" id="confirm_stay">\n' + '    <p class="confirm_stay_txt">您确定要放弃这次让<span>资产翻倍</span>的机会吗？</p>\n' + '    <p class="confirm_refuse"></p>\n' + '    <p class="confirm_accept"></p>\n' + '</div>';
    $('body').append(confirm);
}
//confirm拒绝
$('.confirm_refuse').on('click', function() {
    $('.confirm_stay,.zhegai').hide();
})
//confirm接受
$('.confirm_accept').on('click', function() {
    $('.confirm_stay').hide();
    $("[data-v='" + $(this).attr('data-v') + "']").show();
})

//诊股弹窗文案封装
zgSaticText();

function zgSaticText() {
    $('.s-zg-title').text('每个手机号限领一次');
}

//带确认弹窗的cancel事件
function cancelComfirm(t) {
    $(t).parent().css("display", "none");
    $(t).parent().attr('data-v', Math.random());
    $('.confirm_stay').css("display", "block");
    $('.confirm_accept').attr('data-v', $(t).parent().attr('data-v'));
}
// JavaScript Document