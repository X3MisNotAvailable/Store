<?php
include_once("server.php");
$postdata = file_get_contents("php://input");
$request = json_decode($postdata);
if(isset($postdata) && !empty($postdata))
{
$Product_id = mysqli_real_escape_string($mysqli, trim($request->Product_id));
$ProductName = mysqli_real_escape_string($mysqli, trim($request->ProductName));
$Cat_Id = mysqli_real_escape_string($mysqli, trim($request->Cat_Id));
$unit_price = mysqli_real_escape_string($mysqli, trim($request->unit_price));
$quantity = mysqli_real_escape_string($mysqli, trim($request->quantity));
$product_des = mysqli_real_escape_string($mysqli, trim($request->product_des));
$prod_img = mysqli_real_escape_string($mysqli, trim($request->prod_img));

$sql = "SELECT * FROM product";
if($result = mysqli_query($mysqli,$sql))
{
$rows = array();
while($row = mysqli_fetch_assoc($result))
{
$rows[] = $row;
}
echo json_encode($rows);
}
else
{
http_response_code(404);
}
}
?>