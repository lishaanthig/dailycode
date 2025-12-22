<h1 id="head">name</h1>
<button onclick="update(event)">Lishaa</button>
<button onclick="update(event)">Sri</button>
<button onclick="update(event)">Nishaan</button>


<script>
    var h1=document.getElementById("head")
    
    function update(event)
    {
        h1.textContent=event.target.textContent

        
    }
</script> 
