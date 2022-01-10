$(function () {
    // カレンダー
    $(function () {
        $('input[name="date"]').datepicker({
            dateFormat: 'yy/mm/dd',
        });
    });

    // 参加人数分の氏名欄を生成
    $('#form-number').click(function () {
        $('#form-name').empty();
        var num = $('input[name="number"]:checked').val();
        for (i = 0; i < num; i++) {
            $('#form-name').append(
                `<input class="form-control w-100 mt-1" name="name" maxlength="10">`
            );
        }
    });

    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="volume"]').val();
        var name = $('input[name="name"]').val();
        var adress = $('input[name="adress"]').val();
        var names = '';
        $('#form-name').children().each(function (i, elm) {
            names += $(elm).val() + '、';
        })
        names = names.slice(0, -1);

        var msg = `①氏名:${name} ②住所:${adress} ③希望日:${date} ④数量:${volume}`;
        sendMessage(msg);

        return false;
    });
});