class Statemachine {
    constructor(){
        this.currentState="Menu"
    }
    transition (event) {
    switch (this.currentState) {
        case "Menu":
            if(event == "start"){
                this.currentState="Play";
            }
            if(event == "shop"){
                this.currentState="Shop";
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
            if(event == "back"){
                this.currentState="Play"
            }
            if(event == "menu"){
                this.currentState="Menu"
            }
            break;
        }
    }
}

function use (model){
    switch(model.currentState){
        case "Menu":
            menu()
            break;
        case "Play":
            runGame()
            break;
        case "Shop":
            shop()
            break;
    }
}