var locations = [
    'The HOP', 'FOCO', 'Collis', 'Ramekin (not open for dinner)'
]

var mealTime = [
    'Breakfast', 'Lunch', 'Dinner'
]

var conversationStarters = [
    'What has been the highlight of your term?', 
    'If you could try something new over spring break, what would it be?',
    'What is the meaning of life and why is it FOCO cookies?', 
    'What is your dream research project?',
    'If you could change your skin to any other texture, what would it be and why?',
    'How did you get involved with CU and what has been your favorite memory?',
    'Do we poop in heaven?'
]

// var locationPics = [
//     'https://media.thetab.com/blogs.dir/97/files/2016/01/IMG_20160120_170825363.jpg', 
//     'https://snworksceo.imgix.net/drt/c5341a66-c565-45f2-8b17-f14db5ed63e2.sized-1000x1000.jpg?w=1000', 
//     'https://spoonuniversity.com/wp-content/uploads/2015/04/©-Gary-Hall-14-115-29_cropped-670x300.jpg', 
//     'https://scontent.fzty2-1.fna.fbcdn.net/v/t1.0-9/82196577_568171260414270_5780632643016065024_o.jpg?_nc_cat=100&_nc_sid=6e5ad9&_nc_ohc=6GaJ7UgGhc0AX-dhdQM&_nc_ht=scontent.fzty2-1.fna&oh=e9eda3ff0e024ae840a57b4ae546be35&oe=5EF10289'
// ]
var randomNumber = 0;

function newLocation(){
    var newRandomNumber = Math.floor(Math.random() * (locations.length)); 
    while (randomNumber == newRandomNumber){
        newRandomNumber = Math.floor(Math.random() * (locations.length));
    }
    randomNumber = newRandomNumber;
    diningPlace = locations[randomNumber];

    // var img = '<img src="' + locationPics[randomNumber] + '">';
    var output = document.getElementById('Location Display');
    output.innerHTML = diningPlace;
    // output.innerHTML = diningPlace + img;
}


function newTime(){
    var newRandomNumber = Math.floor(Math.random() * (mealTime.length)); 
    while (randomNumber == newRandomNumber){
        newRandomNumber = Math.floor(Math.random() * (mealTime.length));
    }
    randomNumber = newRandomNumber;
    var diningTime = mealTime[randomNumber];
    var output = document.getElementById('Time Display');
    output.innerHTML = diningTime;
}

function newConversation(){
    var newRandomNumber = Math.floor(Math.random() * (conversationStarters.length)); 
    while (randomNumber == newRandomNumber){
        newRandomNumber = Math.floor(Math.random() * (conversationStarters.length));
    }
    randomNumber = newRandomNumber;
    var conversation = conversationStarters[randomNumber];
    var output = document.getElementById('Conversation Display');
    output.innerHTML = conversation;
}

