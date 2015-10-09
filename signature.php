<?php
/*
 * The MIT License (MIT)
 *
 * Copyright (c) 2015 Lyra-Network & contributor
 *
 * PayZen Demonstrator
 * This project provide an easy way to test
 * and demonstrate all the Payzen Capabilities
 *
 * AngularJS and PHP
 *
 * Author link : www.payzen.eu
 *               www.lyra-network.com
 *
 * NOTICE OF LICENSE
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 *
 * @author    Parslow
 * @copyright 2015 Lyra-Network and contributors
 * @license   The MIT License (MIT)
 * @version   X.X.X (revision xxxxxxx)
*/

header("Content-Type: text/plain");

// Instantiate Class and variables
//

// Initialise var
//
$arg       = (isset($_GET["arg"]))  ? $_GET["arg"]  : NULL;
$name      = (isset($_GET["name"])) ? $_GET["name"] : NULL;

// die if unknown parameters
//
if (empty($name)) die("Unknown request");

// Initialize data
//
$ini_array = parse_ini_file("config/key.ini",true);
$array     = $ini_array[$name];
$arg       = stripslashes($arg);
$tab       = json_decode($arg,true);
$key       = '';

// Get key from parameters
//
if ($tab['vads_ctx_mode']=="TEST") {
  $key = $array["key_test"];
  $array["key"] = $array["key_test"];
} elseif ($tab['vads_ctx_mode']=="PRODUCTION") {
  $key = $array["key_prod"];
  $array["key"] = $array["key_prod"];
}

// todo handle when no PRODUCTION/TEST key

// Calculate signature
//
$tab["vads_site_id"] = $array["site_id"];
ksort($tab);

// build string
$kstring = "";
foreach($tab as $k => $value) {
 $kstring .= $value;
 $kstring .= "+";
}
$kstring  .= $key;
$sign     =  sha1($kstring);

// Return result
//
$array["sign"] = $sign;

// Fire the result as a json object
echo   json_encode($array);

// END
?>
