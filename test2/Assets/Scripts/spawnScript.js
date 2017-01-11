#pragma strict

public var enemy : GameObject;
public var enemyShip : GameObject;
var script : ScoreScript;
var spawnTime : float = 1.5;
var isChanged : boolean;
var isShipTime : boolean;

function Start() {
	spawnTime = 1.5;
	isChanged = false;
	isShipTime = false;
	script = GameObject.Find("ScoreUI").GetComponent(ScoreScript) as ScoreScript;
    InvokeRepeating("addEnemy", 0, spawnTime);
}

function Update(){
	updateTimer();
	if (isChanged && !isShipTime){
		CancelInvoke();
		InvokeRepeating("addEnemy", 0, spawnTime);
	}
	else if (isChanged && isShipTime) {
		CancelInvoke();
		InvokeRepeating("addEnemyShip", 0, spawnTime);
	}
}

function updateTimer(){
	isChanged = false;
	var score = script.getScoretCount();
	var temp : float = spawnTime;
	if (score > 50){ 
		isShipTime = true;
		spawnTime = 0.7;
	}
	else if (score > 45){
		isShipTime = true;
		spawnTime = 1;
	}
	else if (score > 40){
		isShipTime = true;
		spawnTime = 5;
	}
	else if (score > 30){
		spawnTime = 0.1;
	}
	else if (score > 25){
		spawnTime = 0.2;
	}
	else if (score > 20){
		spawnTime = 0.3;
	}
	else if (score > 15){
		spawnTime = 0.5;
	}
	else if (score > 10){
		spawnTime = 0.7;
	}
	else if (score > 5){
		spawnTime = 1;
	}
	
	if (temp != spawnTime){
		isChanged = true;
	}
}

function addEnemyShip(){
	var rd = GetComponent(Renderer);
    var x1 = transform.position.x - rd.bounds.size.x/2;
    var x2 = transform.position.x + rd.bounds.size.x/2;
    var spawnPoint = Vector2(Random.Range(x1, x2), transform.position.y);
    Instantiate(enemyShip, spawnPoint, Quaternion.identity);
}

function addEnemy() {
    var rd = GetComponent(Renderer);
    var x1 = transform.position.x - rd.bounds.size.x/2;
    var x2 = transform.position.x + rd.bounds.size.x/2;
    var spawnPoint = Vector2(Random.Range(x1, x2), transform.position.y);
    Instantiate(enemy, spawnPoint, Quaternion.identity);
} 