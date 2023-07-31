function fire(number) {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // キャンバスをクリア
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // テキストの描画
    ctx.font = '20px Arial';
    ctx.textAlign = 'center';
    const x = canvas.width / 2;
    const y = canvas.height / 2;

    if(number == 548)ctx.fillText("傘。雨に打たれたときにピアノの音がする。", x, y);
    if(number == 587)ctx.fillText("死体。瞬間的な出現能力を持っていた", x, y);
}
