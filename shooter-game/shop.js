// visuals
function shop (){
    push()
    text("Shop",width/2,50)
    menubtn.show()
    shopbtn.hide()
    playbtn.show()
    playbtn.mousePressed(function(){statemachine.transition("back")})
    menubtn.mousePressed(function(){statemachine.transition("menu")})
    shopbtn.mousePressed(function(){statemachine.transition("menu")})

    rectMode(CENTER);
    rect(width/2 - 200,height/2,100,100)
    rect(width/2,height/2,100,100)
    rect(width/2 + 200,height/2,100,100)


    if(mouseIsPressed){
        if(mouseX > width / 2 - 250 && mouseX < width / 2 - 150 && mouseY < height / 2 + 50 && mouseY > height / 2 - 50){
            player.weapon = "shotgun"
            player.ammo = 8
            print("shotgun")
        }
        if(mouseX > width / 2 - 50 && mouseX < width / 2 + 50 && mouseY < height / 2 + 50 && mouseY > height / 2 - 50){
            player.weapon = "pistol"
            player.ammo = 12
            print("pistol")
        }
        if(mouseX > width / 2 + 150 && mouseX < width / 2 + 250 && mouseY < height / 2 + 50 && mouseY > height / 2 - 50){
            player.weapon = "assault riffle"
            player.maxAmmo=30
            print("assault riffle")
        }
    }
   

    pop()
}



// toggle shop
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