<html>
<header>
  	<link rel="stylesheet" href="styles.css">
	<title>View All Teams</title>
</header>

<body>
<h5>
	<a class="goBack" href="http://www.csce.uark.edu/~tlfloyd/index.html">
		<i class="fa fa-caret-square-o-left" style="font-size: 24px;"></i> &nbsp; Go Back</a>
</h5>
<h3>View All Teams Page</h3>
</body>
</html>

<?php
	$argument = '5';
	$command = 'python3 main.py ' . $argument;
	system($command);
?>