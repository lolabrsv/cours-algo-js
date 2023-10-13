class Character {
    constructor(name,hp) {
    this.name = name
    this.hp = hp 
    }
    MentalHealth() {
    if(this.hp == 0) {
        return true
        }
    }
}




class Trajet {
    constructor(RedStop, radio, nbrChange) {
    this.RedStop = 30
    this.radio = ["Anissa - Wejdene" , "Back on 74 - Jungle" , "call me - Kali Uchis" , "Nerves - DPR ian", "Ay-yo - NCT 127"]
    this.nbrChange = 0 
}
    Backhome(Character) {
        if(this.RedStop == 0) {
            return true
        }
    }
    MusicRandom(Character) {
    let song = Math.floor(Math.random() * 5)
    if(song == 0) {
    Character.hp -= 1
    this.nbrChange += 1
    }
    console.log(this.radio[song])
    }
    RedStop() {
    this.RedStop -= 1
    console.log(this.RedStop + " feux rouges restants")
    }
}

let John = new Character ("John", 10)
let trajet = new Trajet ()
let trajet_on = true 

while(trajet_on == true) {
    if(John.Backhome(John) == true) {
    console.log(Character +  " est bien arrivé !")
    trajet_on = false
    }
    if(MentalHealth(John == true)) {
    console.log(Character + " a explosé")
    trajet_on = false
    }
   }




