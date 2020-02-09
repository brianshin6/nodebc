const showNumbers = function (startNumber, endNumber) {
    if (typeof(startNumber) !== 'number' || typeof(endNumber) !== 'number') {
        console.log('Please enter a valid number.')
        return
    }
    if (startNumber == endNumber) {
        console.log(startNumber + ' and ' + endNumber + ' are the same number')
        return
    }

    let list = [];
    for (let i = Math.min(startNumber, endNumber); i <= Math.max(startNumber, endNumber); i++) {
        list.push(i);
    }

    if (startNumber < endNumber) {
        list.sort((a, b) =>  a - b);
    } else if (startNumber > endNumber) {
        list.sort(function (a, b) { return b - a });
    }
    console.log(list)
}

const showNumbers2 = function(startNumber, endNumber) {
    if (typeof(startNumber) !== 'number' || typeof(endNumber) !== 'number') {
        console.log('Please enter a valid number.')
        return
    }
    if (startNumber == endNumber) {
        console.log(startNumber + ' and ' + endNumber + ' are the same number')
        return
    }

    let list = [];
    if (startNumber < endNumber) {
        for (let i = startNumber; i <= endNumber; i++) {
            list.push(i);
        }
    } else if (startNumber > endNumber) {
        for (let i = startNumber; i >= endNumber; i--) {
            list.push(i);
        }
    }

    console.log(list)
}

const showNumbers3 = function (startNumber, endNumber) {
    var list = [];
    if (startNumber < endNumber) {
        for (var i = startNumber; i <= endNumber; i++) {
            list.push(i);
        }
    } else if (startNumber > endNumber) {
        for (var i = startNumber; i >= endNumber; i--) {
            list.push(i);
        }
    }
    if (startNumber < endNumber) {
        list.sort(function (a, b) { return a - b });
        console.log(list)
    } else if (startNumber > endNumber) {
        list.sort(function (a, b) { return b - a });
        console.log(list)
    } else if (startNumber == endNumber) {
        console.log(startNumber + ' and ' + endNumber + ' are the same number')
    } else
        console.log('Please enter a valid number')
}

const showNumbers4 = function (startNumber, endNumber) {
    if (typeof(startNumber) !== 'number' || typeof(endNumber) !== 'number') {
        console.log('Please enter a valid number.')
        return
    }
    if (startNumber == endNumber) {
        console.log(startNumber + ' and ' + endNumber + ' are the same number')
        return
    }

    let list = [];
    let i = Math.min(startNumber, endNumber);
    while (i <= Math.max(startNumber, endNumber)) {
        list.push(i);
        i++;
    }

    // for (let i = Math.min(startNumber, endNumber); i <= Math.max(startNumber, endNumber); i++) {
    //     list.push(i);
    // }

    if (startNumber < endNumber) {
        list.sort((a, b) =>  a - b);
    } else if (startNumber > endNumber) {
        list.sort(function (a, b) { return b - a });
    }
    console.log(list)
}


showNumbers(-10,10)
showNumbers(10, -10)
showNumbers(20, 10)
showNumbers(10, 20)
showNumbers(10, 10)
showNumbers('A', 10)
showNumbers(10, 'B')
showNumbers('C', 'C')
showNumbers(true, false)