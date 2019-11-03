# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/

{
onPageLoad 'games#omikuji', ->
  const btn = document.getElementById('btn');

  btn.addEventListener('click', () => {
    const results = ['大吉', '吉', '吉', '吉', '吉', '小吉', '小吉', '小吉', '凶', '中吉']
    // const n = Math.floor(Math.random() * results.length);
    btn.textContent = results[Math.floor(Math.random() * results.length)];
    console.log(btn.textContent);
    if (btn.textContent === "凶"){
      console.log("aaaaaa");
      btn.classList.add('unhappy');
    } else {
      btn.classList.remove('unhappy');
    }
  });
}