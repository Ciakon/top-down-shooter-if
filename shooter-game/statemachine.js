class Statemachine {
    constructor(){
        this.currentState="Play"
    }
    transition (event) {
    switch (this.currentState) {
        case "Menu":
            if(event == "start"){
                this.currentState="Play";
            }
            break;
        case "Play":
            if(event == "open shop"){
                this.currentState="Shop";
            }
            if(event == "dead"){
                this.currentState="Menu"
            }
            break;
        case "Shop":
            if(event == "start"){
                this.currentState="Play";
            }
            break;
        }
    }
}

function use (model){
    switch(model.currentState){
        case "Menu":

            break;
        case "Play":
            runGame()
            break;
        case "Shop":
            push()
            rectMode(CENTER);
            rect(width/2,height/2,100,100)
            pop()
            break;
    }
}