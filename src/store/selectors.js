/* eslint-disable import/prefer-default-export */

// objectif : déterminer le nouvel ID a ajouter dans notre tableau
// il s'agit d'une projection de state (donnée calculée)
export const getHighestMessageId = (state) => {
  const { fakeMessages } = state;

  // on commence par récupérer tous les ids...
  const ids = fakeMessages.map((msg) => msg.id);

  // ensuite, je veux trouver l'id le plus grand
  const highestId = Math.max(...ids);

  return highestId;
};
