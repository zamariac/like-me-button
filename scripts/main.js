var buttonText = document.querySelector('button');

// buttonText.innerHTML = "1 likes" ;

var buttonClick = document.querySelector('.click');
buttonClick.addEventListener('click', addLikes);

var buttonReset = document.querySelector('.reset')
buttonReset.addEventListener('click', resetLikes);

var numberLikes = 0;

function addLikes(){
	numberLikes = numberLikes + 1;

	if (numberLikes === 1){
		buttonText.innerHTML = ('1 Like');
	}
	else{
		buttonText.innerHTML = (numberLikes + " " + "Likes")
	}
}


function resetLikes(){
	numberLikes = 0;

	buttonText.innerHTML = numberLikes + " Likes";


	


}