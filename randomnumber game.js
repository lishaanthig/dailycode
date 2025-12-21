<h1> Guess the Number </h1>
<input id="guess number">
<button onclick="check">check</button>
<p id="result">you are Right/Wrong</p>
<p id="score">score:10</p>
<script>
    var guessnumber = document.getElementById("guess number")
    var result = document.getElementById("result")
    var score=document.getElementById("score")
    var randomnumber=Math.floor(Math.random()*10)+1
    var tscore=10
    function check()
    {
        var enterednumber = guessnumber.value
        if(randomnumber== enterednumber)
        {
            console.log("Right")
            result.textContent="right"
            alert("you win")

        }
        else{
            score=score-1
            result.textContent="Wrong"
            score.textContent="score:"+tscore
            alert("you lose")
        }
    }
</script>





        
