// Tableau de prénoms et caractéristiques
const prenoms = ["Alice", "Bob", "Charlie", "David", "Eve"];
const caracteristiques = ["nerd", "sportif", "blonde", "brun", "costaud"];

// Fonction pour générer un nom et une caractéristique aléatoires pour les survivants
function genererSurvivant() {
  const nom = prenoms[Math.floor(Math.random() * prenoms.length)];
  const caract = caracteristiques[Math.floor(Math.random() * caracteristiques.length)];
  return { nom, caract };
}

// Fonction pour simuler une action du tueur
function attaquerSurvivant(survivant) {
  const probaMort = Math.random();
  const probaDegats = Math.random();
  const probaMortDegats = Math.random();

  if (probaMort < 0.3) {
    console.log(`Le tueur a tué ${survivant.nom}. RIP à ${survivant.nom}...`);
  } else if (probaDegats < 0.5) {
    console.log(`${survivant.nom} a esquivé l'attaque du tueur et inflige 10 points de dégâts.`);
  } else if (probaMortDegats < 0.2) {
    console.log(`${survivant.nom} a infligé 15 points de dégâts au tueur mais est mort en le faisant.`);
  } else {
    console.log(`${survivant.nom} a survécu à l'attaque du tueur.`);
  }
}

// Création des survivants
const survivants = [];
for (let i = 0; i < 5; i++) {
  survivants.push(genererSurvivant());
}

// Points de vie du tueur
let pointsDeVieTueur = 100;

// Boucle principale
while (pointsDeVieTueur > 0 && survivants.length > 0) {
  const survivantAttaque = survivants[Math.floor(Math.random() * survivants.length)];
  attaquerSurvivant(survivantAttaque);

  if (survivantAttaque.nom !== undefined) {
    survivants.splice(survivants.indexOf(survivantAttaque), 1);
  }

  if (survivants.length > 0) {
    pointsDeVieTueur -= 15;
    console.log(`Le tueur a ${pointsDeVieTueur} points de vie restants.`);
  }
}

// Affichage des survivants restants
if (survivants.length > 0) {
  console.log("Les survivants ont gagné, mais RIP à :");
  for (const survivant of survivants) {
    console.log(survivant.nom);
  }
} else {
  console.log("Le tueur a triomphé. RIP aux survivants...");
}