/** const getMean = (array) => {
    const sum = array.reduce((acc, el) => acc + el, 0); // reduce va itérer sur chaque élément du tableau, va ajouter chaque élément qui s'ajouteront à chaque fois sur acc pour donner au final le résultat de l'addition de chaque élément du tableau.
    const mean = sum / array.length;
    return mean;
}*/

const getMean = (array) => array.reduce((acc, el) => acc + el, 0) / array.length;

const getMedian = (array) => {
    const sorted = array.sort((a, b) => a - b);
    const median =
        array.length % 2 === 0
            ? getMean([sorted[array.length /2], sorted[array.length / 2 - 1]])
            : sorted[Math.floor(array.length / 2)];
    return median;
}

// The mode is the number that appears most often is the list.
const getMode = (array) => {
    const counts = {}; // Used to track the number of times each number appears in the list
    array.forEach((el) => { // looping through the array.
        counts[el] = (counts[el] || 0) + 1; // accessing the counts object and incrementing the count for each number.
    })
    if (new Set(Object.values(counts)).size === 1) { // set object lets you store unique value of any type, Object.values returns an array of a given object, and size displays the number of unique values present in the set object.
        return null; // so if there is only one unique value present its gonna return null
    }
    const highest = Object.keys(counts).sort((a, b) => counts[b] - counts[a])[0]; // sorting the keys of the counts array in descending order, and retrieving the first key from the sorted array
    const mode = Object.keys(counts).filter((el) => counts[el] === counts[highest]);
    return mode.join(", ");
}

const getVariance = (array) => {
    const mean = getMean(array);
    const differences = array.map(el => el - mean);
    const squaredDifferences = differences.map((el) => el ** 2);
    const sumSquaredDifferences = squaredDifferences.reduce((acc, el) => acc + el, 0);

}

const getRange = (array) => {
    return Math.max(...array) - Math.min(...array);
}

const calculate = () => {
    const value = document.querySelector("#numbers").value;
    const array = value.split(/,\s*/g);
    const numbers = array.map(el => Number(el))
    .filter(el => !isNaN(el))

    const mean = getMean(numbers);
    const median = getMedian(numbers);
    const mode = getMode(numbers);
    const range = getRange(numbers);

    document.querySelector("#range").textContent = range;
    document.querySelector("#mode").textContent = mode;
    document.querySelector("#mean").textContent = mean;
    document.querySelector("#median").textContent = median;

}
