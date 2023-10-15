class SurvivorGame {
    constructor() {
      this.name = ["Lola", "Joachim", "Jay", "Ad", "Mark"]
      this.features = ["curly", "sportif", "rapide", "talent", "smart"]
      this.survivors = []
      this.killerHp = 100
    }
  
    survivorGenerator() {
      let Name = this.name[Math.floor(Math.random() * this.name.length)]
      let Feat = this.features[Math.floor(Math.random() * this.features.length)]
      return { Name, Feat }
    }
  
    attackSurvivor(survivor) {
      let probMort = Math.random()
      let probDmg = Math.random()
      let probMortDmg = Math.random()
  
      if (probMort < 0.3) {
        console.log("Jason a tué " + survivor.Name + ", RIP " + survivor.Name + "...")
      } else if (probDmg < 0.5) {
        console.log(survivor.Name + " a esquivé l'attaque de Jason et a infligé 10 points de dégâts.")
      } else if (probMortDmg < 0.2) {
        console.log(survivor.Name + " a infligé 15 points de dégâts à Jason mais est mort en le faisant.")
      } else {
        console.log(survivor.Name + " a survécu à l'attaque de Jason")
      }
    }
  
    createSurvivors() {
      for (let x = 0; x < 5; x++) {
        this.survivors.push(this.survivorGenerator())
      }
    }
  
    Play() {
      while (this.killerHp > 0 && this.survivors.length > 0) {
        let survivorAttack = this.survivors[Math.floor(Math.random() * this.survivors.length)]
        this.attackSurvivor(survivorAttack)
  
        if (survivorAttack.Name !== undefined) {
          this.survivors.splice(this.survivors.indexOf(survivorAttack), 1)
        }
  
        if (this.survivors.length > 0) {
          this.killerHp -= 15
          console.log("Jason a " + this.killerHp + " points de vie restants")
        }
      }
  
      if (this.survivors.length > 0) {
        console.log("Les survivants ont gagné ! mais RIP à : ")
        for (let survivor of this.survivors) {
          console.log(survivor.Name)
        }
      } else {
        console.log("Jason a gagné. RIP aux survivants...")
      }
    }
  }
  
  let game = new SurvivorGame()
  game.createSurvivors()
  game.Play()
  