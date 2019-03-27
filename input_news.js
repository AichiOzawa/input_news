<head>
    <title>新聞入力ツール</title>
</head>
<body>
 
    <h1>新聞入力ツール</h1s>
    <p>日付
        <script>
            var dt = new Date();
            var y = dt.getFullYear();
            var m = ("00" + (dt.getMonth()+1)).slice(-2);
            var d = ("00" + dt.getDate()).slice(-2);
            var result = y + m + d;
            document.write(result); 
        </script>
    </p>
    <p>新聞
    <select name="新聞">
        <option value="1">日刊工業新聞</option>
        <option value="2">日本経済新聞</option>
        <option value="3">讀賣新聞</option>
        <option value="4">電気新聞</option>
        <option value="5">日経産業新聞</option>
    </select></p>
    <p>見出し <input type="text" name="Title"></p>
    <p>内容　 <textarea name="kanso" rows="4" cols="40"></textarea></p>

</body>