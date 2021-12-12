<?php
include_once("server.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$name = trim($request->name);
$username = mysqli_real_escape_string($mysqli, trim($request->username));
$phonenumber = mysqli_real_escape_string($mysqli, trim($request->phonenumber));
$address = mysqli_real_escape_string($mysqli, trim($request->address));
$pwd = mysqli_real_escape_string($mysqli, trim($request->pwd));

$sql = "INSERT INTO customerinfo(cx_name,phonenumber,Address,username,pwd) VALUES ('$name','$phonenumber','$address','$username','$pwd')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
    
'Address' => $address,    
'phonenumber' => $phonenumber,  
'cx_name' => $name,
'username' => $username,
'pwd' => $pwd,
'Cx_id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);

}
}
?>