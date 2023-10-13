/*class Pokemon {
    constructor(name, attack, defense, hp, luck) {
        this.name = name
        this.attack = attack 
        this.defense = defense
        this.hp = hp
        this.luck = luck
    }

    isLucky() {
        let chance = Math.floor(Math.random() * 10)
        if(chance<this.luck) {
            return true 
        } else {
            return false
        }
    }

    attackPokemon(defenseur) {
        if (this.isLucky() == true ) {
            let Degat = this.attack - defenseur.defense
            defenseur.hp -= Degat
            if(defenseur.hp < 0){
                defenseur.hp = 0
            }
            console.log(defenseur.hp + " hp de " + defenseur.name)
            console.log(Degat + " dégats" )
        } else {
            console.log("attack false")
        }
    }
}

let Carapuce = new Pokemon ("Carapuce", 40, 30, 40, 6)
let Mew = new Pokemon ("Mew", 35, 37, 35, 6)

while(Mew.hp >= 0 && Carapuce.hp >= 0) {
    Carapuce.attackPokemon(Mew);
    if(Mew.hp <= 0) {
        console.log("Mew est mort") 
        break
    } else {
        Mew.attackPokemon(Carapuce);
    if(Carapuce.hp <= 0){
        console.log("Carapuce est mort")
        break
    
        }
    }
 }*/


