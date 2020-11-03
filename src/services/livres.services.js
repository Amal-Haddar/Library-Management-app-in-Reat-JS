const livres = [
  {
    id: "1",
    libelle: 1023,
    titre: "Le monde s'effondre",
    auteur: "Chinua Achebe",
    genre: "Roman, Fiction historique",
    edition: "05/04/1958",
    description:
      "Tout s'effondre (titre original : Things Fall Apart ; titre de la première traduction française : Le monde s'effondre) est un roman de l'écrivain nigerian Chinua Achebe. Publié en 1958, le roman raconte la vie précoloniale dans le sud-est du Nigeria et l'arrivée des Britanniques à la fin du XIX e siècle.",
    nombre_exemplaire: 3,
    photo: "b",
  },
  {
    id: "2",
    libelle: 4523,
    titre: "Corporate Identity Design",
    auteur: "Veronica Napoles",
    genre: "Roman, Fiction historique",
    edition: "12/07/200",
    description:
      "Tout s'effondre (titre original : Things Fall Apart ; titre de la première traduction française : Le monde s'effondre) est un roman de l'écrivain nigerian Chinua Achebe. Publié en 1958, le roman raconte la vie précoloniale dans le sud-est du Nigeria et l'arrivée des Britanniques à la fin du XIX e siècle.",
    nombre_exemplaire: 3,
    photo: "c",
  },

  {
    id: "3",
    libelle: 3000,
    titre: "Nouvelles de voyageurs",
    auteur: "Sébastien Acacia",
    genre: "Fantasie",
    edition: "04/04/2004",
    description:
      "Juste un regard est un roman policier de Harlan Coben, paru en 2004. La version française, traduite par Roxane Azimi, est parue la même année aux éditions Belfond.",
    nombre_exemplaire: 5,
    photo: "d",
  },

  {
    id: "4",
    libelle: 10958,
    titre: "Juste un regard",
    auteur: "Harlan Coben",
    genre: "Policier",
    edition: "04/04/2004",
    description:
      "Juste un regard est un roman policier de Harlan Coben, paru en 2004. La version française, traduite par Roxane Azimi, est parue la même année aux éditions Belfond.",
    nombre_exemplaire: 5,
    photo: "3",
  },
  {
    id: "5",
    libelle: 10784,
    titre: "L'ecole des sorciers",
    auteur: "Joanne Rowling",
    genre: "Aventure, fiction",
    edition: "05/04/2001",
    description:
      "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir.",
    nombre_exemplaire: 3,
    photo: "h",
  },
  {
    id: "6",
    libelle: 17799,
    titre: "Harry Potter",
    auteur: "Joanne Rowling",
    genre: "Aventure, fiction",
    edition: "05/04/2001",
    description:
      "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir.",
    nombre_exemplaire: 1,
    photo: "i",
  },

  {
    id: "7",
    libelle: 10799,
    titre: "L'ecole des sorciers",
    auteur: "Joanne Rowling",
    genre: "Aventure, fiction",
    edition: "05/04/2001",
    description:
      "Orphelin, le jeune Harry Potter peut enfin quitter ses tyranniques oncle et tante Dursley lorsqu'un curieux messager lui révèle qu'il est un sorcier. À 11 ans, Harry va enfin pouvoir intégrer la légendaire école de sorcellerie de Poudlard, y trouver une famille digne de ce nom et des amis, développer ses dons, et préparer son glorieux avenir.",
    nombre_exemplaire: 3,
    photo: "h",
  },
];

const Archivelivres = [
  {
    id: "1",
    libelle: 56478,
    titre: "Les miserables",
    auteur: "Vuctor Hugo",
    genre: "Drame",
    edition: "04/04/1994",
    description: "A recommander vivement.",
    nombre_exemplaire: 0,
    photo: "m",
  },
  {
    id: "2",
    libelle: 7777,
    titre: "Le chat botté",
    auteur: " Charles Perraul",
    genre: "Conte merveilleux",
    edition: "04/04/1697",
    description:
      "Le Maître chat ou le Chat botté est un conte franco-italien en prose racontant l'histoire d'un chat qui utilise la ruse et la tricherie pour offrir le pouvoir, la fortune et la main d'une princesse à son maître mal-né et sans-le-sou..",
    nombre_exemplaire: 0,
    photo: "chat",
  },
];

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const fetchLivreById = async (livreId) => {
  await delay(500);
  return livres.find((livre) => livre.id === livreId);
};

export const fetchLivres = async (searchValue) => {
  await delay(500);
  return livres.filter(
    (livre) =>
      livre.titre.toLowerCase().includes(searchValue.toLowerCase()) ||
      livre.auteur.toLowerCase().includes(searchValue.toLowerCase())
  );
};

export const AfficherLivres = async () => {
  await delay(500);
  return livres;
};

export const AfficherArchiveLivres = async () => {
  await delay(500);
  return Archivelivres;
};
