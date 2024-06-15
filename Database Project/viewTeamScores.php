<html>
<header>
	<link rel="stylesheet" href="styles.css">
	<title>View Scores of All Teams</title>
</header>

<body>
<h5>
	<a class="goBack" href="http://www.csce.uark.edu/~tlfloyd/index.html">
		<i class="fa fa-caret-square-o-left" style="font-size: 24px;"></i> &nbsp;Go Back</a>
</h5>

<h3>View Average Scores of All Teams</h3>

</body>
</html>

<?php
	$argument = "8";
	$command = "python3 main.py " . $argument;
	$command = escapeshellcmd($command);
	system($command);
?>