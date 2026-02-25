const raymondCard = document.getElementById('raymond-card');
const raymondName = document.getElementById('raymond-name');
const raymondDesc = document.getElementById('raymond-desc');
const raymondImg = document.getElementById('raymond-img');

let isDarkSide = false;

raymondCard.addEventListener('click', () => {
    isDarkSide = !isDarkSide;

    if (isDarkSide) {
        // 裏の紹介
        raymondCard.classList.add('dark-reveal');
        raymondName.innerHTML = "？？？<span>Vassal of Abaddon</span>";
        raymondDesc.innerHTML = "「レベッカを守ろうとしている」？ 違うな。利用しているだけだ。彼がレベッカを選んだのは、彼女が過去にトラウマを抱えていて、『悪魔の器になりやすい』からだ。";
        // もし裏用の画像があればここで切り替え
        // raymondImg.src = "images/Characters/raymond_dark.jpg"; 
    } else {
        // 表の紹介に戻す
        raymondCard.classList.remove('dark-reveal');
        raymondName.innerHTML = "レイモンド・デルバー<span>Raymond Delver</span>";
        raymondDesc.innerHTML = "リバー・フィールズ葬儀場のオーナー。レベッカの師であり、彼女をこの「仕事」に引き込んだ人物。悪魔の存在を熟知しており、自らも過去に悪魔との戦いを経験している。冷徹に見えるが、彼なりの方法でレベッカを守ろうとしている。";
        // raymondImg.src = "images/Characters/raymond.jpg";
    }
});

// ページ読み込み時に憑依度をランダムに設定
window.addEventListener('DOMContentLoaded', () => {
    const meter = document.getElementById('meter-fill');
    const percentText = document.getElementById('possession-percent');

    // 40%〜90%の間でランダムな憑依度を表示
    let val = Math.floor(Math.random() * 50) + 40;

    meter.style.width = val + '%';
    percentText.innerText = val + ' %';
});

// ページ更新（リロード）時に強制的に最上部へスクロールさせる
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
};