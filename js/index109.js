let validateUser = function (username, password) {
    if (username == 'nacho' && password == 'Nerd1979') {
        console.log('Welcome ' + username + ', nice to see you again')
        return true;
    }
    else if (username == 'pedro' && password == 'Batman0217') {
        console.log('Welcome ' + username + ', nice to see you again')
        return true;
    }
    else if (username == 'marta' && password == 'Mother2312') {
        console.log('Welcome ' + username + ', nice to see you again')
        return true;
    }
    else {
        console.log ('Please input valid credentials')
        return false;
    }
}


validateUser ('pedro', 'Batman0217')