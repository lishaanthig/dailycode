<h1  onclick="deleteitem(event)">0ne</h1>
<h1  onclick="deleteitem(event)">Two</h1>
<h1 onclick="deleteitem(event)">Three</h1>
<h1  onclick="deleteitem(event)">Four</h1>
<h1  onclick="deleteitem(event)">Five</h1>
<h1  onclick="deleteitem(event)">Six</h1>
<script>
    var h1=document.getElementById("one")
    var h1=document.getElementById("two")
    var h1=document.getElementById("three")
    
    
    function deleteitem(event)
    {
        event.target.remove()
        
    }
</script>
