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
      setTimeout(function(){
        selectResult.classList.remove('hidden');
      }, 500)
    } else {
      btn.classList.remove('unhappy');
    }
  });
}