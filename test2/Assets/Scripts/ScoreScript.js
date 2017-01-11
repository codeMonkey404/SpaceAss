#pragma strict
import UnityEngine.SceneManagement;

static var finalScoreStr; 
static public var score : int;
var scoreLable;
var finalScoreLable;
var textField : UnityEngine.UI.Text;

function Start() {
	DontDestroyOnLoad(this);

	if (SceneManager.GetActiveScene().name != "deadEnd"){
	score = 0;
	scoreLable = "Score: ";
	
	textField = GameObject.Find("ScoreUI").GetComponent(UnityEngine.UI.Text);
	updateUI();
	} else {
		finalScoreLable = "Your score: ";
		initFinalScore();
	}
}



public function getFinalScore(){
	finalScoreStr = finalScoreLable + score.ToString();
	return finalScoreStr;
}

public function upScore() {
	score++;
	updateUI();
}

public function initFinalScore(){
	var finalScoreTextField : UnityEngine.UI.Text = GameObject.Find("finalScoreUI").GetComponent(UnityEngine.UI.Text);
	finalScoreTextField.text = getFinalScore();
}

public function getScoretCount(){
	return score;
}

function updateUI(){
	textField.text = getScoretStr();
}

function getScoretStr(){
	return scoreLable + score.ToString();
}