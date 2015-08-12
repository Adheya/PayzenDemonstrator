<?
header("Content-Type: text/plain");
#die(phpversion());

$arg       = (isset($_GET)) ? $_GET : NULL;
$siteId    = (isset($_GET["vads_site_id"])) ? $_GET["vads_site_id"] : NULL;
$signature = (isset($_GET["signature"])) ? $_GET["signature"] : NULL;

$iniValues = parse_ini_file("config/key.ini",true);
$id        = array_search($siteId, array_column($iniValues, 'site_id'));
$idKey     = array_keys($iniValues);
$key       = $iniValues[$idKey[$id]]['key_test']; //todo manage PRODUCTION mode too


$k = '';
ksort($arg);
foreach ($arg as $param => $val) {
    if(substr($param,0,5) == 'vads_') {
       $k .= $val."+";
    }
}
$hash = sha1($k.$key);



if ($key = $hash) {
   #echo "id='$id' !key: $key |";
   #echo " return $siteId $signature <br>\n";
   #echo " hash:$hash ";
   #echo "=".$arg['']."\n";
   echo "vads_trans_uuid=".$arg['vads_trans_uuid']."\n";
   echo "vads_ctx_mode=".$arg['vads_ctx_mode']."\n";
   echo "vads_trans_status=".$arg['vads_trans_status']."\n";
   echo "vads_amount=".$arg['vads_amount']."\n";
   echo "vads_currency=".$arg['vads_currency']."\n";
   echo "vads_operation_type=".$arg['vads_operation_type']."\n";
   #echo "=".$arg['']."\n";
   echo "vads_auth_mode=".$arg['vads_auth_mode']."\n";
   echo "vads_warranty_result=".$arg['vads_warranty_result']."\n";

   #print_r($arg);

} else {
   echo "WARNING";
}

