<html>
<header>
	<link rel="stylesheet" href="styles.css">
	<title>Add Player</title>
</header>

<body>
<h5>
	<a class="goBack" href="http://www.csce.uark.edu/~tlfloyd/index.html">
		<i class="fa fa-caret-square-o-left" style="font-size: 24px;"></i> &nbsp;Go Back</a>
</h5>

<h3>Add Player Page</h3>
<h4>Please enter the player information: </h4>

<form action="addPlayer.php" method="post">
	<p>
		<label for="teamName">Team Name: &nbsp; </label>
		<input id="teamName" type="text" name="teamName"><br>
	</p>
	<p>
		<label for="playerName">Player Name: </label>
		<input id="playerName" type="text" name="playerName"><br>
	</p>
	<p>
		<label for="playerPosition">Player Position: </label>
		<input id="playerPosition" type="text" name="playerPosition"><br>
	</p>
	<p>
		<input type="submit" name="submit">
	</p>
</form>
<br><br>

</body>
</html>

<?php
if(isset($_POST['submit']))
{
	$teamName = escapeshellarg($_POST[teamName]);
	$playerName = escapeshellarg($_POST[playerName]);
	$playerPosition = escapeshellarg($_POST[playerPosition]);

	// build linux command
	$argument = "2";
	$command = "python3 main.py " . $argument . ' ' . $teamName . ' ' . $playerName . ' ' . $playerPosition;
	$command = escapeshellcmd($command);
	system($command);
}

?>