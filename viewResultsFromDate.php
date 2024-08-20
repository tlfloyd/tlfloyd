<html>
<header>
	<link rel="stylesheet" href="styles.css">
	<title>View Games on Date</title>
</header>

<body>
<h5>
	<a class="goBack" href="http://www.csce.uark.edu/~tlfloyd/index.html">
		<i class="fa fa-caret-square-o-left" style="font-size: 24px;"></i> &nbsp;Go Back</a>
</h5>

<h3>View Games on Date</h3>
<h4>Please enter the Date Below: </h4>

<form action="viewResultsFromDate.php" method="post">
	<p>
		<label for="date">Date: &nbsp; </label>
		<input id="date" type="text" name="date"><br>
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
	$date = escapeshellarg($_POST[date]);


	// build linux command
	$argument = "7";
	$command = "python3 main.py " . $argument . ' ' . $date;
	$command = escapeshellcmd($command);
	system($command);
}

?>