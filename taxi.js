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
    constructor(redStop, radio, nbrChange) {
    this.redStop = 30
    this.radio = ["Anissa - Wejdene" , "Back on 74 - Jungle" , "call me - Kali Uchis" , "Nerves - DPR ian", "Ay-yo - NCT 127"]
    this.nbrChange = 0 
}
    Backhome() {
        if(this.redStop == 0) {
            return true
        }
    }
    MusicRandom(Character) {
    let song = Math.floor(Math.random() * 5)
    console.log(this.radio[song])
    if(song == 0) {
    Character.hp -= 1
    this.nbrChange += 1
    console.log("Oh non Anissa ! Je change de taxi")
    console.log("Aïe ! Santé mentale : " + Character.hp)
    }
    //console.log(this.radio[song])
    }
    RedStop() {
    this.redStop -= 1
    console.log(this.redStop + " feux rouges restants")
    }
}

let John = new Character ("John", 10)
let trajet = new Trajet ()
let trajet_on = true 

while(trajet_on == true) {
    if(trajet.Backhome() == true) {
    console.log(John.name +  " est bien arrivé !")
    trajet_on = false
    break
    }
    if(John.MentalHealth() == true) {
    console.log(John.name + " a explosé")
    trajet_on = false
    break
    }
    trajet.RedStop()
    trajet.MusicRandom(John)
   }*/