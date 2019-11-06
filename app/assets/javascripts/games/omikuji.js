'use strict';

{
  const btn = document.getElementById('btn');
  const selectResult = document.getElementById('selectResult');


  btn.addEventListener('click', () => {
    const results = ['我慢', '我慢', '我慢', '我慢', '我慢', '我慢', '我慢', '我慢', '解放', '睡眠']
    // const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[Math.floor(Math.random() * results.length)];
    console.log(btn.textContent);
      if (btn.textContent === "解放"){
        console.log("aaaaaa");
        btn.classList.add('unhappy');
        // formを出現させる
        selectResult.classList.remove('hidden');
      } else {
        btn.classList.remove('unhappy');
      }
    });
  }