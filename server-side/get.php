<?php
	if (isset($_REQUEST['user']) && isset($_REQUEST['pass']) /*&& isset($_REQUEST['request'])*/) {
		try {
			$dbh = new PDO('mysql:host=localhost;dbname=id13334617_dbprojet', $_REQUEST['user'], $_REQUEST['pass'],array(\PDO::MYSQL_ATTR_INIT_COMMAND =>  'SET NAMES utf8'));
		} catch (PDOException $e) {
			echo "MySQL connection error.";
			exit();
		}
		if (strtoupper(substr($_REQUEST['request'],0,6)) == "SELECT") {
			$a = "";
			$a = $a."[";
			foreach ($dbh->query($_REQUEST['request']) as $row) {
			    $a = $a.json_encode($row);
			    $a = $a.",";
			}
			$a = substr($a, 0, -1);
			$a = $a."]";
			print($a);
		} else {
			$req = $dbh->exec($_REQUEST['request']);
			echo $req.' ligne(s) modifiée(s).';
		}	
	} else {
		echo "user,pass ou request non renseigné.";
		exit();
	}
?>