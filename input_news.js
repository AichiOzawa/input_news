
window.onload = function(){
    // 時間の取得
    var dt = new Date();//今日>Sun Jun 16 2019 21:28:54 GMT+0900 (Japan Standard Time)
    var y = dt.getFullYear();// 4桁の年>2019
    var m = ("00" + (dt.getMonth()+1)).slice(-2);//月>06 #getMonthは0を1月なので+1
    var d = ("00" + dt.getDate()).slice(-2);//日>16
    var date = y + m + d;
    }


 
// HTMLタグの取得＋結合
document.getElementById("btn").onclick = function(){
    //HTMLタグの取得
    var Indu=document.getElementById("Industry");//業界オブジェクト
    var Indus=Indu.options;//業界オブジェクトのリスト全部>Indus[i]
    var n_name=document.getElementById("news_name");//新聞名オブジェクト
    var n_names=n_name.options;
    var head=document.getElementById("Heading");//見出し
    var head_txt=head.value//見出しの値
    var cont = document.getElementById( "Contents");//内容
    var cont_txt="\n"+cont.value

    //選んだ業界のみ取得
    for (var indu_sel="",i=0,l=Indus.length; l>i;i++){
        if ( Indus[i].selected ) {
            indu_sel += Indus[i].value + "\n" ;//改行する
        }
    }
    //選んだ新聞名のみ取得
    for (var n_names_sel="",i=0,l=n_names.length; l>i;i++){
        if ( n_names[i].selected ) {
            n_names_sel += n_names[i].value + "" ;
        }
    }
 
     //結合
     var out=indu_sel+date+n_names_sel+"「"+head_txt+"」"+cont_txt;
 
     //出力
     document.getElementById("out").textContent = out;
 }