/** const getMean = (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0); // reduce va itérer sur chaque élément du tableau, va ajouter chaque élément qui s'ajouteront à chaque fois sur acc pour donner au final le résultat de l'addition de chaque élément du tableau.
    const mean = sum / array.length;
    return mean;
}*/

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el)).filter(el => !isNaN(el))
    .filter(el => !isNaN(el));
}
