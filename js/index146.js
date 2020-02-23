const user = {username: 'batman',
              password: 'Alfred1960KPOd!'}

function shouldOpenBatCave(username, password) {
    if(username == 'batman' && password == 'Alfred1960KPO!') {
        console.log('Welcome back batman!!')
        return true;
    } else {
        console.log('Sorry, you cannot enter the Batcave, try again..')
        return false;
    }
}

shouldOpenBatCave(user.username, user.password)