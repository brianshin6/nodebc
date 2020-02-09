const getLongerText = function(word1, word2) {
    
    if (typeof(word1) !== 'string' || typeof(word2) !== 'string') {
        console.log('Please enter a valid word.')
        return; }

    
    if (word1.length < word2.length) {
        console.log(word2)
        return;
    } else if (word1.length > word2.length) {
        console.log(word1)
        return;
    } else if (word1.length == word2.length) {
        console.log('Both words are the same length')
        return;
    }
}

getLongerText (8, 'pineapple')