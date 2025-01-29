class Player {
    constructor(name, type) {
        console.log('player', this);
        this.name = name;
        this.type = type;
    }
    introduce(){
        console.log(`Hi I am ${this.name}, I am a ${this.type}`);
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
        console.log('wizard', this);
    }
    play(){
        console.log(`WEEEEEEE I am a ${this.type}`);
    }
}

const wizard1 = new Wizard('Donald', 'Goal machine');
wizard1.introduce();
wizard1.play();


