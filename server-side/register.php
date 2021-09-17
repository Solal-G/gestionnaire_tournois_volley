<?php
	 
	try {
		$dbh = new PDO('mysql:host=localhost;dbname=id13334617_dbprojet', 'id13334617_user', 'ThisIsA_Password12',array(\PDO::MYSQL_ATTR_INIT_COMMAND =>  'SET NAMES utf8'));
	} catch (PDOException $e) {
		echo "MySQL connection error.";
		echo 'Exception reçue : ',  $e->getMessage(), "\n";
		exit();
	}

	if (isset($_REQUEST['password']) && isset($_REQUEST['email']) && isset($_REQUEST['dateN']) && isset($_REQUEST['firstname']) && isset($_REQUEST['lastname']) && isset($_REQUEST['level'])) {
		$stmt = $dbh->query("SELECT count(*) as nb FROM user WHERE email=".($dbh->quote($_REQUEST['email'])));
		$row = $stmt->fetch();
		if ($row['nb']) {
			echo 'Existe déjà';
			exit();
		} else {
			$stmt = $dbh->prepare("INSERT INTO user (email,firstname, lastname,level,dateNaissance, password) VALUES (?,?,?,?,?,?)");
			$stmt->bindParam(1, $email);
			$stmt->bindParam(2, $firstname);
			$stmt->bindParam(3, $lastname);
			$stmt->bindParam(4, $level);
			$stmt->bindParam(5, $dateN);
			$stmt->bindParam(6, $password);

			$email = $_REQUEST['email'];
			$firstname = $_REQUEST['firstname'];
			$lastname = $_REQUEST['lastname'];
			$level = $_REQUEST['level'];
			$dateN = $_REQUEST['dateN'];
			$password = $_REQUEST['password'];
			
			$stmt->execute();
			echo 'Compte créé';
			exit();
		}
	} else {
		echo 'Bad Request.';
	}
?>