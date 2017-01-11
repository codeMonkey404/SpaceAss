#pragma strict

public var bullet : GameObject;
var r2d : Rigidbody2D;
var HPUI : UnityEngine.UI.Text;
var hp : int;

var isAndroid : boolean;

var uiKey;

function Start () {
	hp = 3;
	HPUI = GameObject.Find("HPUI").GetComponent(UnityEngine.UI.Text);
	updateUI();
	r2d = GetComponent(Rigidbody2D);
	isAndroid = SystemInfo.operatingSystem.IndexOf("Android") != -1;
	
}

function Update() {

	if (Input.GetKey("right"))
       moveRight();
    else if (Input.GetKey("left"))
       moveLeft();
	else if (!isAndroid) {
		Stay();
	}

	if (Input.GetKeyDown("space"))
        Fire();

	}

function updateUI(){
	HPUI.text = "HP: " + hp;
}
	
public function hit(){
	hp = hp - 1;
	updateUI();
	if (hp == 0)
		Application.LoadLevel (2);
}
	
public function Fire(){
	Instantiate(bullet, transform.position, Quaternion.identity);
	}

public function moveLeft(){
	r2d.velocity.x = -10;
	}

public function moveRight(){
	r2d.velocity.x = 10;
	}

public function Stay(){
	r2d.velocity.x = 0;
}

function OnTriggerEnter2D(obj : Collider2D) {
	var name = obj.gameObject.name;
    if (name == "enemySpaceshipBulletLong(Clone)") {
		Destroy(obj.gameObject);
        hit();
    }
	if (name == "enemy(Clone)") {
        hit();
    }
}