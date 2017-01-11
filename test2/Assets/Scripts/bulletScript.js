#pragma strict

public var speed : int = 8;

function Start () {
    var r2d = GetComponent(Rigidbody2D);

    r2d.velocity.y = speed;
}

function OnBecameInvisible() {
    Destroy(gameObject);
} 

function Update () {

}

function OnTriggerEnter2D(obj : Collider2D) {
	var name = obj.gameObject.name;
    if (name != "spaceship") {
		Destroy(gameObject);
    }
}