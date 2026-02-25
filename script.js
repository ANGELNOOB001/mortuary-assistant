/* --- 1. ナビゲーション（ハンバーガーメニュー）の制御 --- */
// 変数名が重複しないよう、独自の名前にしています
const navToggleButton = document.querySelector('#mobile-menu');
const navLinksMenu = document.querySelector('#nav-links');

if (navToggleButton && navLinksMenu) {
    navToggleButton.addEventListener('click', function () {
        // ボタンの形を「三本線」⇔「×」で切り替え
        this.classList.toggle('is-active');
        // メニューの場所を「画面外」⇔「画面内」で切り替え
        navLinksMenu.classList.toggle('active');
    });

    // メニュー内のリンクをクリックしたら閉じる
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navToggleButton.classList.remove('is-active');
            navLinksMenu.classList.remove('active');
        });
    });
}

/* --- 2. レイモンドの裏の顔ギミック --- */
const raymondCardElement = document.getElementById('raymond-card');
const raymondNameElement = document.getElementById('raymond-name');
const raymondDescElement = document.getElementById('raymond-desc');

let isRaymondDark = false;

if (raymondCardElement) {
    raymondCardElement.addEventListener('click', () => {
        isRaymondDark = !isRaymondDark;

        if (isRaymondDark) {
            raymondCardElement.classList.add('dark-reveal');
            raymondNameElement.innerHTML = "？？？<span>Vassal of Abaddon</span>";
            raymondDescElement.innerHTML = "「レベッカを守ろうとしている」？ 違うな。利用しているだけだ。彼がレベッカを選んだのは、彼女が過去にトラウマを抱えていて、『悪魔の器になりやすい』からだ。";
        } else {
            raymondCardElement.classList.remove('dark-reveal');
            raymondNameElement.innerHTML = "レイモンド・デルバー<span>Raymond Delver</span>";
            raymondDescElement.innerHTML = "リバー・フィールズ葬儀場のオーナー。レベッカの師であり、彼女をこの「仕事」に引き込んだ人物。悪魔の存在を熟知しており、自らも過去に悪魔との戦いを経験している。冷徹に見えるが、彼なりの方法でレベッカを守ろうとしている。";
        }
    });
}

/* --- 3. 憑依度のランダム設定 --- */
window.addEventListener('DOMContentLoaded', () => {
    const meter = document.getElementById('meter-fill');
    const percentText = document.getElementById('possession-percent');

    if (meter && percentText) {
        let val = Math.floor(Math.random() * 50) + 40;
        meter.style.width = val + '%';
        percentText.innerText = val + ' %';
    }
});

/* --- 4. ページ更新時のスクロール制御 --- */
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};

if (history.scrollRestoration) {
    history.scrollRestoration = 'manual';
}

