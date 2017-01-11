#pragma strict

function Start () {

}

function Update () {

}

function PouseTrigger(){
	if (Time.timeScale == 1.0)
				Time.timeScale = 0;
			else
				Time.timeScale = 1;
}