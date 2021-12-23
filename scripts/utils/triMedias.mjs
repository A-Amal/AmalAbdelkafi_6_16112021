//trier media par titre
function applyOrderByTitle (medias) {
    return medias.sort((a, b) => a.title < b.title ? -1 : 0);
 }
 //trier media par date
 function applyOrderByDate (medias) {
     return medias.sort((a, b) => new Date(b.date) - new Date(a.date));
 }
 //trier media par likes
 function applyOrderByLikes (medias) {
     return medias.sort((a, b) => b.likes - a.likes);
 }
 //appliquer filtre
 export function  applyFilter (medias, order) {
     let filtered = [];
     if (order == 'title') filtered = applyOrderByTitle(medias);
     else if (order == 'Popularité') filtered = applyOrderByLikes(medias);
     else if (order == 'date') filtered = applyOrderByDate(medias);
     return filtered;
 }