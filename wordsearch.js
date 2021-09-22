const wordSearch = (letters, word) => {
    const transposedLetters = [];
    const lettersRows = letters.length;
    const lettersColumns = letters[0].length;

    for (let i = 0; i < lettersColumns; i++) {
        transposedLetters.push([]);
    };
    for (let i = 0; i < lettersRows; i++) {
        for (let j = 0; j < lettersColumns; j++){
            transposedLetters[j].push(letters[i][j]);
        };
    };

    const horizontalJoin = letters.map(row => row.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    };

    const verticalJoin = transposedLetters.map(row => row.join(''))
    for (x of verticalJoin) {
        if(x.includes(word)) return true
    };
    return false
};

module.exports = wordSearch