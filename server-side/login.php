<?php
	//id13291320_dbprojet
	//id13291320_user
	//4M^N()MWUQ6!9UNx
	try {
		$dbh = new PDO('mysql:host=localhost;dbname=id13334617_dbprojet', 'id13334617_user', 'ThisIsA_Password12',array(\PDO::MYSQL_ATTR_INIT_COMMAND =>  'SET NAMES utf8'));
	} catch (PDOException $e) {
		echo "MySQL connection error.";
		echo 'Exception reçue : ',  $e->getMessage(), "\n";
		exit();
	}

	if (isset($_REQUEST['email']) && isset($_REQUEST['password'])) {
		$stmt = $dbh->query("SELECT password FROM user WHERE email=".($dbh->quote($_REQUEST['email'])));
		$row = $stmt->fetch();
		if ($_REQUEST['password'] == $row['password']) {
			echo "Réussi";
			exit();
		} else {
			echo "Echoué";
			exit();
		}
	} else {
		echo 'Bad Request.';
	}
?>

