<?php
header("Content-Type: text/plain");


	
$arg = (isset($_GET["arg"])) ? $_GET["arg"] : NULL;
$name = (isset($_GET["name"])) ? $_GET["name"] : NULL;

if (!$name){header("Location: http://demo.pzen.eu/d/formdemo.html#/Démo");}

$arg = stripslashes($arg);
$ini_array = parse_ini_file("config/key.ini",true);
$array = $ini_array[$name];
$key = $array["key_test"];
$tab = json_decode($arg,true);
$tab["vads_site_id"]=$array["site_id"];
ksort($tab);

$text = "";

foreach($tab as $k => $value){
 $text.= $value;
 $text.= "+";
}

$text.=$key;
$sign = sha1($text);
$array["sign"]=$sign;
	
$ret = json_encode($array);
echo $ret;
	

$subject = "[signature-payzen] name = $name ";
$to      = 'demo.callback@pzen.eu';
$to      = 'demo.callback@pzen.eu,lpenou@m4p.li';
$headers = 'From: "CallBack10"<demo@pzen.eu>' . "\r\n" .
     'Reply-To: demo+callback@pzen.eu' . "\r\n" .
     'X-Mailer: PHP/' . phpversion();
$m      = "tab  ".implode($tab,'+')."  $text arg = $arg ";

//
  #$mailsent = mail($to, $subject, $m, $headers);

?>
