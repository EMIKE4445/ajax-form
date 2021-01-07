<?php

if(isset($_POST['name']) && isset($_POST['quantity']) && isset($_POST['price'])){
    
    $name = $_POST['name'];
    $price = $_POST['price'];
    $quantity = $_POST['quantity'];
    $posted_time= date('m/d/y h:m:s',time());

    $item=[
        'name' => $name,
        'price' => $price,
        'quantity'=> $quantity,
        'time' => $posted_time
    ];
    
    
    $database=file_get_contents('data.json');
    $database= json_decode($database,TRUE);
    array_push($database,$item);
    
    $database= json_encode($database);

    if(file_put_contents('data.json', $database)){
        echo json_encode('data updated');
    }else{
        echo json_encode('could not update data');
    }
    
    exit();
}


if(isset($_GET['read'])){

    $database=file_get_contents('data.json');
    //$database= json_decode($database, TRUE);
    //var_dump($database);
    echo $database;

    exit();
}

exit();
?>