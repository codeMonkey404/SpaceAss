#pragma strict

public var enemybullet : GameObject;
public var bullet : GameObject;
var r2d : Rigidbody2D;
var hp : int;
var playerPosition : int;
var spaceship : GameObject;
var position : int;
public var boom: GameObject;
var reloadTimer : int;
var reloadLimit : int;
var xSpeed : int;
var script : ScoreScript;
public var ySpeed : int = -3;

function Start() {
hp = 2;
reloadTimer = 0;
r2d = GetComponent(Rigidbody2D);
spaceship = GameObject.Find("spaceship");
xSpeed = 6;
reloadLimit = 50;
script = GameObject.Find("ScoreUI").GetComponent(ScoreScript) as ScoreScript;
}

function Update() {
	position = this.gameObject.transform.position.x;
	playerPosition = spaceship.gameObject.transform.position.x;
	
	//playLikeTeam();
	
	moveToPlayer();
	atackPlayer();
}

function moveToPlayer(){
	if (position > playerPosition){
		r2d.velocity.x = -xSpeed;
	} else if (position < playerPosition)
		r2d.velocity.x = xSpeed;
	else{
		r2d.velocity.x = 0;
	}
	
	r2d.velocity.y = ySpeed;
}

/*
function playLikeTeam(){
	GameObject [] arr = GameObject.FindGameObjectsWithTag(enemySpaceShip);
	if (arr.length < 2){return;}		
	for(var i = 1; i < arr.length; i++){
		arr[i].GetComponent(enemySpaceShip).playerPosition = 4;
	}
}
*/

function atackPlayer(){
	if (reloadTimer < reloadLimit){
		reloadTimer++;
	}
	
	if (Mathf.Abs(position - playerPosition) < 50 && reloadTimer >= reloadLimit){
		Instantiate(enemybullet, transform.position, Quaternion.identity);
		reloadTimer = 0;
	}
}

public function hit(){
	hp = hp - 1;
	if (hp == 0){
		Instantiate(boom, new Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
		Destroy(this.gameObject);
		script.upScore();
		script.upScore();
		
	}
}

function OnTriggerEnter2D(obj : Collider2D) {
	var name = obj.gameObject.name;
    if (name == "bullet(Clone)") {
        hit();
    }
}

function OnBecameInvisible() {
    Destroy(gameObject);
} 