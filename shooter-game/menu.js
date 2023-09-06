function menu() {
    menubtn.hide()
    playbtn.show()
    shopbtn.show()
    playbtn.mousePressed(function(){statemachine.transition("start")})
    shopbtn.mousePressed(function(){statemachine.transition("shop")})
    text("Menu",width/2,50)
}