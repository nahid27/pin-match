(function() {
    var pin;
    var tryLeft = 3;
    document.getElementsByClassName("generate-btn")[0].onclick = function(){
        tryLeft = 3;
        pin = Math.floor(1000 + Math.random() * 9000);
        document.querySelector(".pin-generator input").value = pin;
        document.getElementsByClassName("action-left")[0].innerText = tryLeft+" try left"
    }


    var buttons = document.querySelectorAll(".calc-body .button");
        for (i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', function() {
                var text = this.innerText;
                var old_value =  document.querySelector(".input-section input").value;
                if(text == "C"){
                    document.querySelector(".input-section input").value = "";
                }
                else if(text == "<"){
                    document.querySelector(".input-section input").value =  old_value.slice(0, -1); 
                }
                else {
                    document.querySelector(".input-section input").value = old_value+text;
                }
                
        });
    }


    document.getElementsByClassName("submit-btn")[0].onclick = function(){
        var current_value =  document.querySelector(".input-section input").value;
        if(current_value.length > 0){
            if(tryLeft > 0){
            if(pin == current_value){
                tryLeft = 3;
                document.getElementsByClassName("notify")[0].style.display = "none"; 
                document.getElementsByClassName("notify")[1].style.display = "block";
            }
            else {
                document.getElementsByClassName("notify")[1].style.display = "none";
                document.getElementsByClassName("notify")[0].style.display = "block"; 
                tryLeft--;
            }
            document.getElementsByClassName("action-left")[0].innerText = tryLeft+" try left"
            }
        }

    }
 
 })();