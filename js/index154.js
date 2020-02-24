const player = {
    name: null,
    energy: 100,
    lives: 3,
    loseEnergy: function(damage) {
        
        if ((this.energy - damage) <= 0) {
            this.energy = 0;
        } else {this.energy = this.energy - damage}
    },
    recoverEnergy: function(energyUp){
        
        if ((this.energy + energyUp) >= 101) {
            this.energy = 100;
        } else {
            this.energy = this.energy + energyUp
        }
    },
    loseLife: function(){
        this.lives = this.lives - 1
    },
    recoverLife: function(){
        this.loves + this.lives + 1
    }
}

player.name = 'Brian'
player.loseLife()
player.loseEnergy(10)
player.loseEnergy(5)
player.loseEnergy(15)
player.loseEnergy(20)
player.recoverEnergy(10)
player.loseEnergy(30)
player.loseEnergy(40)
player.loseLife()
player.recoverLife()
player.recoverLife()

console.log(`The ${player.name} has ${player.energy} energy and ${player.lives} lives`)

