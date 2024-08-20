<html>
<header>
	<link rel="stylesheet" href="styles.css">
	<title>Add Game</title>
</header>

<body>
<h5>
	<a class="goBack" href="http://www.csce.uark.edu/~tlfloyd/index.html">
		<i class="fa fa-caret-square-o-left" style="font-size: 24px;"></i> &nbsp;Go Back</a>
</h5>

<h3>Add Game Page</h3>
<h4>Please enter the game information: </h4>

<form action="addGame.php" method="post">
	<p>
		<label for="teamOneName">Home Team Name: &nbsp; </label>
		<input id="teamOneName" type="text" name="teamOneName"><br>
	</p>
	<p>
		<label for="teamTwoName">Away Team Name:</label>
		<input id="teamTwoName" type="text" name="teamTwoName"><br>
	</p>
	<p>
		<label for="date">Date: </label>
		<input id="date" type="text" name="date"><br>
	</p>
	<p>
		<label for="homeTeamScore">Home Team Score: </label>
		<input id="homeTeamScore" type="text" name="homeTeamScore"><br>
	</p>
    <p>
		<label for="awayTeamScore">Away Team Score: </label>
		<input id="awayTeamScore" type="text" name="awayTeamScore"><br>
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
	$teamOneName = escapeshellarg($_POST[teamOneName]);
	$teamTwoName = escapeshellarg($_POST[teamTwoName]);
	$date = escapeshellarg($_POST[date]);
	$homeTeamScore = escapeshellarg($_POST[homeTeamScore]);
    $awayTeamScore = escapeshellarg($_POST[awayTeamScore]);

	// build linux command
	$argument = "1";
	$command = "python3 main.py " . $argument . ' ' . $teamOneName . ' ' . $teamTwoName . ' ' . $date . ' ' . $homeTeamScore . ' ' . $awayTeamScore;
	$command = escapeshellcmd($command);
	system($command);
}

?>
