<html>
<header>
	<link rel="stylesheet" href="styles.css">
	<title>View Player by Position</title>
</header>

<body>
<h5>
	<a class="goBack" href="http://www.csce.uark.edu/~tlfloyd/index.html">
		<i class="fa fa-caret-square-o-left" style="font-size: 24px;"></i> &nbsp;Go Back</a>
</h5>

<h3>View Player by Position</h3>
<h4>Please enter the player information: </h4>

<form action="viewPlayersFromPosition.php" method="post">
	<p>
		<label for="position">Position: &nbsp; </label>
		<input id="position" type="text" name="position"><br>
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
	$position = escapeshellarg($_POST[position]);


	// build linux command
	$argument = "4";
	$command = "python3 main.py " . $argument . ' ' . $position;
	$command = escapeshellcmd($command);
	system($command);
}

?>