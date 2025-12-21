<button onclick="update()">Add</button>
<div id="result"></div>
<script>
    var div=document.getElementById("result")

    function update()
    {
        var headlist=document.createElement("h1")
        headlist.textContent="hello"
        div.append(headlist)
    }
</script>
