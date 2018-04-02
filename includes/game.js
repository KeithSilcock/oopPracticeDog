

class PetGame{
	constructor(){
		//create a new dog object, save it to the property in this object call dog.  Pass in a name of your choice, a string of 'dog'
		//call the dog's render method and store the return value.
		//append the dom element to the element with an ID of gameArea
		//call the attach handlers method of this object
		this.dog = new Dog('Dash', 'dog');
		this.dogElement = this.dog.render();
		$('#gameArea').append(this.dogElement)
		this.attachHandlers();
	}
	attachHandlers(){
		//attach a click handler to the #gameArea.  have it call handleBoardClick.  Make sure to bind it to the object!
		$("#gameArea").on('click', this.handleBoardClick.bind(this));

	}
	handleBoardClick(clickEvent){
		var posClicked = {x:clickEvent.clientX, y:clickEvent.clientY};
		var dogsPos = this.dog.currentPosition;

		var distance = Math.sqrt(Math.pow(posClicked.x-dogsPos.left, 2) + Math.pow(posClicked.y-dogsPos.top, 2));
		var speed = distance * 2;
		var timeOfTravel = speed; //ms

		//call the dog's move method.  Give it an object with an x and y property.  You can get the x/y coordinate from the event variable (it is available by default in an event handler)
		this.dog.move(posClicked, timeOfTravel, this.handleMovementFinished.bind(this))
	}
	handleMovementFinished(){
		//call the dog's bark method, give it a message of your choice
		this.dog.bark('*Bark!*')
	}
}