'use strict'

{
  class Panel {
    constructor() {
      const section = document.createElement('section');
      section.classList.add('panel');

      this.img = document.createElement('img');
      this.img.src = this.getRandomImage();

      this.timeoutId = undefined;

      this.stop = document.createElement('div');
      this.stop.textContent = 'STOP';
      this.stop.classList.add('stop', 'inactive');
      this.stop.addEventListener('click', () => {
        if (this.stop.classList.contains("inactive")){
          return;
        }
        this.stop.classList.add("inactive");
        clearTimeout(this.timeoutId);

        panelsLeft--;

        if (panelsLeft === 0){
          checkResult();
          spin.classList.remove("inactive");
          panelsLeft = 3;
        }
      });

      section.appendChild(this.img);
      section.appendChild(this.stop);

      const main = document.querySelector('main');
      main.appendChild(section);
    }

    getRandomImage(){
      const fever = document.getElementById('fever')
      if ( fever.classList.contains('inactive') == true) {
        var images = [
          '/assets/kaiji01-b75b6d8c0784fbc20747da8076f652999e138939f0a2bfcdbe571574d3639ab6.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png'
        ];
      }
      else {
        var images = [
          '/assets/kaiji01-b75b6d8c0784fbc20747da8076f652999e138939f0a2bfcdbe571574d3639ab6.png',
          '/assets/kaiji02-3f9f6b0a9d71e74f664b9420f1fb74e22784fff14991222cc2e4a3ad7a530872.png',
          '/assets/kaiji03-73f761ce2949770704ff6ece3577d2bda4b54cfb25754c429cae5fdf16526a27.png',
          '/assets/asanopaisen-a5286d63d78f87dfc3b7a83ec2d236aee1a1e7eec14a32357604a1db1e9ec041.png'
        ];
      }
      return images[Math.floor(Math.random() * images.length)];
    }

    spin() {
      this.img.src = this.getRandomImage();
      this.timeoutId = setTimeout(() => {
        this.spin();
      }, 50);
    }

    isUnmatched(p1, p2) {
      return this.img.src !== p1.img.src && this.img.src !== p2.img.src;
    }

    unmatch() {
      this.img.classList.add('unmatched');
    }

    activate() {
      this.img.classList.remove('unmatched')
      this.stop.classList.remove('inactive')
    }

    matched(p1,p2){
      return this.img.src === p1.img.src && this.img.src === p2.img.src;
    }
  }

  function checkResult() {
    if (panels[0].isUnmatched(panels[1], panels[2])){
      panels[0].unmatch();
    }
    if (panels[1].isUnmatched(panels[0], panels[2])){
      panels[1].unmatch();
    }
    if (panels[2].isUnmatched(panels[0], panels[1])){
      panels[2].unmatch();
    }
    if (panels[0].matched(panels[1],panels[2])){
      // formを出現させる
      setTimeout(function(){
        selectResult.classList.remove('hidden');
      }, 1000)
    }
  }

  const panels = [
    new Panel(),
    new Panel(),
    new Panel()
  ];

  let panelsLeft = 3;

  const spin = document.getElementById('spin');
  spin.addEventListener('click', () => {
    if (spin.classList.contains("inactive")){
      return;
    }
    spin.classList.add("inactive");
    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  });

  // fever mode
  const fever = document.getElementById('fever')

  fever.addEventListener('click', () => {
    if (fever.classList.contains("inactive")){
      return
    }else{
      fever.classList.add("inactive");
    }
    panels.forEach(panel => {
      panel.activate();
      panel.spin();
    });
  })
}