// 時間の取得
var dt = new Date();//今日
var y = dt.getFullYear();
var m = ("00" + (dt.getMonth()+1)).slice(-2);
var d = ("00" + dt.getDate()).slice(-2);
var result = y + m + d;
document.write(result); 
console.log(result)

//新聞の取得＋文章の結合
onload=function(){
    document.getElementById('btn').onclick = function(){
        var Indu=document.getElementById("Industry");
        var Indus=Indu.options;
        var n_name=document.getElementById("news_name");
        var n_names=n_name.options;
        var head=document.getElementById("Heading");
        var head_txt=head.value
        var Cont = document.getElementById( "Contents");

        //for (var a="",i=0,l=Indus.length; l>i;i++){
        //    if ( elements[i].selected ) {
        //        a += elements[i].value + " " ;
        //    }
        //}
        for (var a="",i=0,l=Indus.length; l>i;i++){
            if ( Indus[i].selected ) {
              a += Indus[i].value + "" ;
           }
        }
        for (var b="",i=0,l=n_names.length; l>i;i++){
            if ( n_names[i].selected ) {
              b += n_names[i].value + "" ;
           }
        }
        var ele=result+"%0D"+b+"「"+head_txt+"」";
        //document.write(ele); 
        console.log(ele);
        document.getElementById("id05").textContent = ele;
    }
}