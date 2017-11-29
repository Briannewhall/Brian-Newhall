<?php
$data = file_get_contents('https://www.codeschool.com/users/Briannewhall.json');
$jason_data = json_decode($data, true);
$courses = $jason_data['courses']['completed'];

?>

<!doctype html>
<html>
	<head>
		<meta charset="UTF-8">
		<link href="https://fonts.googleapis.com/css?family=Coda" rel="stylesheet">
    	<link rel="stylesheet" href="css/grid.css" media="screen" title="no title" charset="utf-8">
		<title><?php echo $jason_data['user']['username']; ?>'s Code School Badges </title>
	</head>
	<body>
		<header>
			<h1>Brian Newhall</h1>
			<h1>Completed Badge Gallery</h1>
		</header>
		<div class="container">
      		<div class="grid">
				<?php
				foreach ($courses as $course) {
				  echo '<div class="grid-cell">';
				  echo '<img height="200px" src="' . $course["badge"] . '"/><br>';
				  echo '<a href="' . $course["url"] .'">' . $course["title"] . '</a>';
				  echo '</div>';
				}
				?>
			</div>	
		</div>
	</body>
</html>