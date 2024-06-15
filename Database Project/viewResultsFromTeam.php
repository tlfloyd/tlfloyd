<html>
<header>
	<link rel="stylesheet" href="styles.css">
	<title>View Games by Team</title>
</header>

<body>
<h5>
	<a class="goBack" href="http://www.csce.uark.edu/~tlfloyd/index.html">
		<i class="fa fa-caret-square-o-left" style="font-size: 24px;"></i> &nbsp;Go Back</a>
</h5>

<h3>View Games by Team</h3>
<h4>Please enter the Team Name Below: </h4>

<form action="viewResultsFromTeam.php" method="post">
	<p>
		<label for="teamName">Team Name: &nbsp; </label>
		<input id="teamName" type="text" name="teamName"><br>
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

	// build linux command
	$argument = "6";
	$command = "python3 main.py " . $argument . ' ' . $teamName;
	$command = escapeshellcmd($command);
	system($command);
}

?>