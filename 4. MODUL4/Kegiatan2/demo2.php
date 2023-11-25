<?php

namespace PemesananOnline;

// Trait untuk alamat pengiriman
trait AlamatTrait {
    private $alamat;

    public function setAlamat($alamat) {
        $this->alamat = $alamat;
    }

    public function getAlamat() {
        return $this->alamat;
    }
}

// Abstract class sebagai dasar untuk produk
abstract class Produk {
    protected $nama;
    protected $harga;

    public function __construct($nama, $harga) {
        $this->nama = $nama;
        $this->harga = $harga;
    }

 }

// Class untuk produk makanan
class Makanan extends Produk {
    private $kadaluarsa;

    public function __construct($nama, $harga, $kadaluarsa) {
        parent::__construct($nama, $harga);
        $this->kadaluarsa = $kadaluarsa;
    }

    public function getInfo() {
        return "Makanan: {$this->nama}, Harga: {$this->harga}, Kadaluarsa: {$this->kadaluarsa}";
    }
}

// Class untuk produk elektronik
class Elektronik extends Produk {
    private $garansi;

    public function __construct($nama, $harga, $garansi) {
        parent::__construct($nama, $harga);
        $this->garansi = $garansi;
    }

    public function getInfo() {
        return "Elektronik: {$this->nama}, Harga: {$this->harga}, Garansi: {$this->garansi}";
    }
}

// Class pemesanan dengan menggunakan trait AlamatTrait
class Pemesanan {
    use AlamatTrait;

    private $produk;
    private $jumlah;

    public function __construct($produk, $jumlah) {
        $this->produk = $produk;
        $this->jumlah = $jumlah;
    }

    public function getInfoPemesanan() {
        $infoPemesanan = "Pemesanan:\n";
        $infoPemesanan .= "- Produk: " . $this->produk->getInfo() . "\n";
        $infoPemesanan .= "- Jumlah: " . $this->jumlah . "\n";
        $infoPemesanan .= "- Alamat: " . $this->getAlamat() . "\n";

        return $infoPemesanan;
    }
}

// Contoh penggunaan
$makanan = new Makanan("Nasi Goreng", 25000, "2023-12-31");
$elektronik = new Elektronik("Laptop", 12000000, "1 Tahun");

$pemesananMakanan = new Pemesanan($makanan, 3);
$pemesananMakanan->setAlamat("Jl. Pahlawan No. 123");

$pemesananElektronik = new Pemesanan($elektronik, 1);
$pemesananElektronik->setAlamat("Jl. Teknologi No. 456");

// Menampilkan output ke layar
echo $pemesananMakanan->getInfoPemesanan();
echo "\n";
echo $pemesananElektronik->getInfoPemesanan();
