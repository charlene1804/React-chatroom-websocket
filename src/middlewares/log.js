// voici un middleware !
// n'ayez pas peur de la triple fléchée, dites vous que
// c'est comme si la fonction avait 3 paramètres.
// comprendre pourquoi ca s'écrit comme ca touche au fonctionnement interne de redux
// et c'est totalement facultatif pour utiliser les middlewares
// store : c'est l'instance de store (là ou on faisait .dispatch, .subscribe, .getState)
// next : c'est une fonction qui autorise l'action à passer à l'étape suivante.
// action : l'action que l'on recoit
// autrement dit -> toutes nos actions vont passer ici dans notre middleware.
// analogie du videur :
// action = personne
// middleware = videur
// next = avancer dans la file
// reducer = on rentre dans la boite de nuit
const logMiddleware = (store) => (next) => (action) => {
  // nous voici dans le corps du middleware...
  console.log('Je suis dans le logMiddleware et j\'affiche action : ', action);
  // pour laisser passer une action, il faut utiliser next()
  next(action);
};

export default logMiddleware;
