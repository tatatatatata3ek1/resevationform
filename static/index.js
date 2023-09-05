
    // 送信
    $('form').submit(function () {
        var date = $('input[name="date"]').val();
        var number = $('input[name="volume"]').val();
        var name = $('input[name="name"]').val();
        var adress = $('input[name="adress"]').val();
        })
        
        var msg = `①氏名:${name} ②住所:${adress} ③希望日:${date} ④数量:${volume}`;
        sendMessage(msg);

        return false;
    });
});
