function shop (){
    push()
    rectMode(CENTER);
    rect(width/2,height/2,100,100)
    pop()
}
 function keyPressed () {
    if(keyCode == 66){
        let event="open shop";
        statemachine.transition(event);
    }
 }