<?php

namespace app\Models;

include"app/Config/DatabaseConfiguration.php";

use app\Config\DatabaseConfiguration;
use mysqli;

class Product extends DatabaseConfiguration{
    public $conn;
    public function __construct(){
        $this->conn = new mysqli($this->host,$this->user,$this->password, $this->database_name, $this->port);
        if($this->conn->connect_error){
            die("Connection Failed: ". $this->conn->connect_error);
        }
    }

    public function findAll(){
        $sql = "SELECT p.id, p.id_manufacture, p.product_name, m.manufactur_name, m.type
        FROM manufacture m
        JOIN products p ON m.id_manufacture = p.id_manufacture";
        $result = $this->conn->query($sql);
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }

    public function findById($id_manufacture){
        $sql = "SELECT p.id, p.id_manufacture, p.product_name, m.manufactur_name, m.type 
        FROM manufacture m
        JOIN products p ON m.id_manufacture = p.id_manufacture
        WHERE p.id_manufacture = ?
        ";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id_manufacture);
        $stmt->execute();
        $result = $stmt->get_result();
        $this->conn->close();
        $data = [];
        while ($row = $result->fetch_assoc()) {
            $data[] = $row;
        }
        return $data;
    }
    public function create($data){ //harus buat id manufacture dan manufacture name nya dulu baru bisa create data
        $productName = $data["product_name"];
        $id_manufacture = $data["id_manufacture"];
        
        // $sql = "INSERT INTO products (product_name) VALUES (?)";
        $sql = "INSERT INTO products (product_name, id_manufacture) VALUES ( ?, ?)";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("si", $productName, $id_manufacture);
        $stmt->execute();
        $this->conn->close();
    }

    public function update($data, $id){
        $productName = $data["product_name"];
        // $id_manufacture = $data["id_manufacture"];

        $sql = "UPDATE products SET product_name = ? WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("si",$productName , $id);
        $stmt->execute();
        $this->conn->close();
    }

    public function delete($id){
        $sql = "DELETE FROM products WHERE id = ?";
        $stmt = $this->conn->prepare($sql);
        $stmt->bind_param("i", $id);
        $stmt->execute();
        $this->conn->close();
    }
}