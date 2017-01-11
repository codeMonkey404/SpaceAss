#pragma strict

var i = 0;
var limit = 120;
function Start () {

}

function Update () {
	if (i >= limit && Time.timeScale == 1.0){
		Destroy(this.gameObject);
	}
	i++;
}