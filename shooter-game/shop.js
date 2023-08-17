function shop (){
    push()
    rectMode(CENTER);
    rect(width/2,height/2,100,100)
    pop()
}
 function keyPressed () {
    if(keyIsPressed){
        if(keyCode == 66){
            if(statemachine.currentState == "Play"){
                let event="open shop";
                statemachine.transition(event);
            } else {
                let event="back";
                statemachine.transition(event);
            }
        }
    }
 }