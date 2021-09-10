  window.addEventListener('DOMContentLoaded', () => {
    const $dom = document;
    console.log('loaded');

    // ハンバーガーメニュー挙動、600px以下で適応
    const navAction = () => {
      const $openIcon = $dom.querySelector('.responsive-icon');
      const $targetNav =  $dom.querySelector('.responsive-nav');
      const $closeIcon = $dom.querySelector('.close-icon');

      const openNav = () => {
      
        $openIcon.addEventListener('click', () => {
  
          if($targetNav.classList.contains('.active') === false) {
            $targetNav.classList.add('.active');
            console.log('addClass');
          }
        });
      }
      openNav();
  
      const closeNav = () => {
  
        $closeIcon.addEventListener('click', () => {
  
          if($targetNav.classList.contains('.active') === true) {
            $targetNav.classList.remove('.active');
            console.log('removeClass');
          }
        });
      }
      closeNav();
    }
    navAction();
    // ハンバーガーメニュー挙動、600px以下で適応


    // ページ下部のレポート専用
    const reportAction = () => {
      const $triger = $dom.querySelector('.report-icon');
      const $targetBox = $dom.querySelector('.report');
      const $target =$dom.querySelector('.report-text');
      
      $triger.addEventListener('click', () => {
        if($target.classList.contains('active') === false) {

          $triger.classList.add('rotate');
          $targetBox.classList.add('active');
          $target.classList.add('active');
        } else {
          
          $triger.classList.remove('rotate');
          $targetBox.classList.remove('active');
          $target.classList.remove('active');
        }
      });
    }
    reportAction();
    // ページ下部のレポート専用

  });