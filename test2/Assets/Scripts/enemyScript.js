#pragma strict

public var speed : int = -5;
var script : ScoreScript;
public var boom: GameObject;

function Start () {
    var r2d = GetComponent(Rigidbody2D);

    r2d.velocity.y = speed;
    r2d.angularVelocity = Random.Range(-200, 200);

    script = GameObject.Find("ScoreUI").GetComponent(ScoreScript) as ScoreScript;
}

function OnBecameInvisible() {
    Destroy(gameObject);
} 

function destroyThis(){
	Destroy(gameObject);
	Instantiate(boom, new Vector3(transform.position.x, transform.position.y, transform.position.z), Quaternion.identity);
}

function OnTriggerEnter2D(obj : Collider2D) {
	var name = obj.gameObject.name;
    if (name == "bullet(Clone)") {
		destroyThis();
		script.upScore();
    }

    if (name == "spaceship") {
		destroyThis();
    }
   
} 