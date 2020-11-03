const adhérentsAccéptées = [
  {
    id: "1",
    banni: "faux",
    email: "amal@gmail.com",
    pass: "123456",
    nom: "Amal",
    prenom: "Haddar",
    photo: "amal",
    emprunts: [
      {
        id: "6",
        libelle: 17799,
        titre: "Harry Potter",
        auteur: "Joanne Rowling",
        photo: "i",
        dateEmprunt: "2020-05-13T10:57:14.624Z",
        dateRetour: "2020-06-12T10:57:14.624Z",
      },
      {
        id: "4",
        libelle: 10958,
        titre: "Juste un regard",
        auteur: "Harlan Coben",
        photo: "3",
        dateEmprunt: "2020-04-17T10:57:14.624Z",
        dateRetour: "2020-05-11T10:57:14.624Z",
      },
    ],
  },
  {
    id: "2",
    banni: "faux",
    email: "fedi@gmail.com",
    pass: "123456",
    nom: "Fedi",
    prenom: "Guesmi",
    photo: "fedi",
    emprunts: [
      {
        id: "4",
        libelle: 1023,
        titre: "Le monde s'effondre",
        auteur: "Chinua Achebe",
        photo: "b",
        dateEmprunt: "2020-07-17T10:57:14.624Z",
        dateRetour: "2020-07-22T10:57:14.624Z",
      },
    ],
  },
];

const adhérentsDemande = [
  {
    id: "1",
    banni: "vrai",
    email: "ghaith@gmail.com",
    pass: "123456",
    nom: "Ghaith",
    prenom: "Weslati",
    photo: "ghaith",
    emprunts: [],
  },
  {
    id: "2",
    banni: "vrai",
    email: "ahmed@gmail.com",
    pass: "123456",
    nom: "Ahmed",
    prenom: "Cherif",
    photo: "ahmed",
    emprunts: [],
  },
];

const UtilisateurConnecté = [{ id: "" }];
const Admin = [
  {
    id: "1",
    banni: "faux",
    email: "bib@gmail.com",
    pass: "bib",
    nom: "bib",
    prenom: "bib",
    role: "bibliothécaire",
  },
];
if (localStorage.getItem("Admin") == null) {
  localStorage.setItem("Admin", JSON.stringify(Admin));
}

var retrievedData3 = localStorage.getItem("Admin");
var admin = JSON.parse(retrievedData3);

if (localStorage.getItem("UtilisateurConnecté") == null) {
  localStorage.setItem(
    "UtilisateurConnecté",
    JSON.stringify(UtilisateurConnecté)
  );
}

//Local storage tableau demande adhérent
if (localStorage.getItem("adhérentsAccéptées") == null) {
  localStorage.setItem(
    "adhérentsAccéptées",
    JSON.stringify(adhérentsAccéptées)
  );
}

var retrievedData1 = localStorage.getItem("adhérentsAccéptées");
var accepté = JSON.parse(retrievedData1);

//console.log(accepté[0].emprunts[0].titre);

//Local storage tableau demande adhérent
if (localStorage.getItem("tabDemande") == null) {
  localStorage.setItem("tabDemande", JSON.stringify(adhérentsDemande));
}

var retrievedData2 = localStorage.getItem("tabDemande");
var demande = JSON.parse(retrievedData2);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const AfficherAdhérentsAccéptées = async () => {
  await delay(500);
  return accepté;
};

export const AfficherAdhérentsDemande = async () => {
  await delay(500);
  return demande;
};

export const fetchAdhérentsAccéptéesById = async (adhérentId) => {
  await delay(500);
  //console.log("resultat service Adhérent: " + accepté[2].nom);
  return accepté.find((adhérent) => adhérent.id == adhérentId);
};

export const fetchAdhérentsDemandeById = async (adhérentId) => {
  await delay(500);
  return adhérentsDemande.find((adhérent) => adhérent.id == adhérentId);
};

export const fetchAdhérent = async (searchValue1, searchValue2) => {
  //await delay(500);
  return accepté.filter(
    (adhérent) =>
      adhérent.email.toLowerCase().includes(searchValue1.toLowerCase()) &&
      adhérent.pass.toLowerCase().includes(searchValue2.toLowerCase())
  );
};

export const fetchAdhérentDemande = async (searchValue1, searchValue2) => {
  await delay(500);
  return demande.filter(
    (adhérent) =>
      adhérent.email.toLowerCase().includes(searchValue1.toLowerCase()) &&
      adhérent.pass.toLowerCase().includes(searchValue2.toLowerCase())
  );
};

export const fetchAdmin = async (searchValue1, searchValue2) => {
  await delay(500);
  return admin.filter(
    (admin) =>
      admin.email.toLowerCase().includes(searchValue1.toLowerCase()) &&
      admin.pass.toLowerCase().includes(searchValue2.toLowerCase())
  );
};
