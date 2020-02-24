var locations = [
    'The HOP', 'FOCO', 'Collis', 'Ramekin (not open for dinner)'
]

function newLocation(){
    var randomNumber = Math.floor(Math.random() * (locations.length)); 
    document.getElementById('Location Display').innerHTML = locations[randomNumber];
}

