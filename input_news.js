var date;
window.onload = function () {
  // 時間の取得
  var dt = new Date(); //今日>Sun Jun 16 2019 21:28:54 GMT+0900 (Japan Standard Time)
  var y = dt.getFullYear(); // 4桁の年>2019
  var m = ("00" + (dt.getMonth() + 1)).slice(-2); //月>06 #getMonthは0を1月なので+1
  var d = ("00" + dt.getDate()).slice(-2); //日>16
  date = y + m + d;
  date_md = m + "/" + d + "の新聞分です。" + "\n";
  var div = document.getElementById("date_tag");
  div.innerHTML = date;
};

$(function () {
  // HTMLタグの取得＋結合
  $("#btn").click(function () {
    //HTMLタグの取得
    let indu = $("#indu").val();
    let news = $("#news").val();
    let head = $("#head").val(); //見出し
    let cont = $("#cont").val(); //見出し

    //結合
    var out =
      date_md +
      indu +
      "\n" +
      date +
      news +
      "「" +
      head +
      "」" +
      "\n" +
      "・・・" +
      cont;

    //出力
    //document.getElementById("out").textContent = out;
    $("#out").val(out);
    $("#Filename").val(date + "(新聞)");
    //document.getElementById("Filename").textContent = date + "(新聞)";
  });
});

//今後の改良予定_20191009
//日付のカウントアップ、ダウン
//新聞とWEBの選択
//2つ入力を可能に
