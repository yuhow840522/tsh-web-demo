$(document).ready(function () {

    // click calculte button 
    $(".submit-icon").click(function (event) {
        event.preventDefault();
        // 計算得分
        $(".Health-grade").empty().append('您的得分是 ');

        let client_score = 0;

        for (let i = 1; i < 7; i++) {
            let temp = 0;
            temp = $('input:radio:checked[name="healthcheck$Q' + i + '"]').val();
            client_score += parseInt(temp);
            // client_score += parseInt($('input:radio:checked[name="healthcheck$Q' + i + '"]').val());
        }
        console.log(client_score);
        // document.write("<h1>This is a heading</h1>");
        // 隱藏所有測驗項目，顯示測驗成果
        $(".Healthcheck-bar").fadeOut();
        $(".Health-grade").append(client_score);
        switch (client_score) {
            case 0:
            case 1:
            case 2:
            case 3:
                console.log("良好");
                break;
            case 4:
            case 5:
            case 6:
                console.log("需關注");
                break;
            case 7:
            case 8:
            case 9:
            case 10:
                console.log("嚴重");
                break;
            default:
                console.log("error QAQ");
                break;
        }
        $(".Health-suggestion").append('建議撥打0800-636363 並考慮門診協助您戒菸成功，或留下資料讓戒菸專線主動與您聯絡。');
        // show reset button
        $('.Healthcheck-reset').addClass('active');
    });

    // click calculte button 
    $(".reset-icon").click(function (event) {
        event.preventDefault();
        //show form ele & submit buttom, hide reset button
        // console.log('123');
        $(".Healthcheck-reset").removeClass('active');
        $(".Healthcheck-bar").fadeIn();
        $(".Health-grade").empty();
        $(".Health-suggestion").empty();

        //需要做表單初始化 clean
        // for (let i = 1; i < 7; i++) {
        //     let temp = 0;
        //     temp = $('input:radio:checked[name="healthcheck$Q' + i + '"]').val();
        //     client_score += parseInt(temp);
        //     // client_score += parseInt($('input:radio:checked[name="healthcheck$Q' + i + '"]').val());
        // }

    });

});


// function processFormData() {
//     var name_element = document.getElementById('name');
//     var name = name_element.value;
//     var email_element = document.getElementById('email');
//     var email = email_element.value;
//     alert('你的姓名是' + name + '\n電子郵件是' + email);
// }