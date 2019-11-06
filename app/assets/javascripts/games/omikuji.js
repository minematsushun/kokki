'use strict';

{
  const btn = document.getElementById('btn');
  const selectResult = document.getElementById('selectResult');


  btn.addEventListener('click', () => {
    const results = ['我慢', '我慢', '我慢', '我慢', '我慢', '我慢', '我慢', '我慢', '解放', '睡眠']
    // const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[Math.floor(Math.random() * results.length)];
    if (btn.textContent === "解放"){
      btn.classList.add('unhappy');
      // formを出現させる
      selectResult.classList.remove('hidden');
    } else {
      btn.classList.remove('unhappy');
    }
  });
}

$(document).on('turbolinks:load',function(){

  function buildHtml(points){
    let html = `${points}ポイント`
    return html
  }



  $("#kokki_form").on('submit', function(e){
    e.preventDefault();
    let point = new FormData(this);
    let url = $(this).attr('action');

    console.log(this)
    $.ajax({
      url: url,
      type: "POST",
      data: point,
      dataType: "json",
      processData: false,
      contentType: false
    })
    .done(function(data){
      console.log("point",data)
      let html = buildHtml(data);
      $('.user_top_info__point').text(html);
    });
    return false;  //フォームが２回送られてしまうのを強制的にストップさせる
  });
});