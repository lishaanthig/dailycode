<input id="inputbox" onkeyup="update()">

<h1 id="result"></h1>
<script>
    var input1=document.getElementById("inputbox")
    var h1=document.getElementById("result")
    function update()
    {
       h1.textContent=input1.value
    }
</script>
