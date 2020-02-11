const getHexaColor = function (color) {

    if (typeof(color) !== 'string') {
        console.log('Please enter a valid color.')
        return; }

    if (color == 'white') {
        console.log ('#FFFFFF')
        return;
    } else if (color == 'black') {
        console.log ('#000000')
        return;
    } else if (color == 'blue') {
        console.log ('0b24fb')
        return;
    } else if (color == 'green') {
        console.log ('0e7e12')
        return;
    } else if (color == 'yellow') {
        console.log ('#fffd38')
        return;
    } else if (color == 'pink') {
        console.log ('#fec1cc')
        return;
    } else {
        console.log ('Color Not Found')
    }
}

getHexaColor (8)