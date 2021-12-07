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
     let filtered = applyOrderByTitle(medias);
     if (order == 'rate') filtered = applyOrderByLikes(filtered);
     else if (order == 'date') filtered = applyOrderByDate(filtered);
     return filtered;
 }