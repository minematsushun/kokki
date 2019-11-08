$(document).on('turbolinks:load',function(){

  function buildHtml(points){
    let html = `${points}ポイント`
    return html
  }



  $("#kokki_form").off('submit'); //フォームの送信アクションを無効化する

  $("#kokki_form").on('submit', function(e){
    e.preventDefault();
    let point = new FormData(this);
    let url = $(this).attr('action');
    // $(this).off("submit", onsubmit).on("submit",false); //formの２回送信を防ぐ
    $('#selectResult').addClass('hidden');

    console.log("1段")
    $.ajax({
      url: url,
      type: "POST",
      data: point,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log("2段")
      let html = buildHtml(data);
      $('.user_top_info__point').text(html);
      $('form')[0].reset();
      $('.user_top_info__point').addClass('point_1up');
      // pointの表記を元に戻す
      setTimeout(function(){
        $('.user_top_info__point').removeClass('point_1up');
      }, 3000)
    })
    .fail(function(){
      alert('失敗です');
    })
    return false;  //フォームが２回送られてしまうのを強制的にストップさせる
  });
});