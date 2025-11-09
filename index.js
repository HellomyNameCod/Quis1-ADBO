class Karyawan {
  constructor(nama, gaji) {
    this.nama = nama;
    this.gaji = gaji;
  }

  hitungBonus() {
    return 0;
  }
}

class KaryawanTetap extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.10; 
  }
}

class KaryawanKontrak extends Karyawan {
  hitungBonus() {
    return this.gaji * 0.05; 
  }
}

const daftarKaryawan = [
  new KaryawanTetap("Budi", 8000000), 
  new KaryawanKontrak("Sita", 6000000)
];

let totalBonus = 0;
daftarKaryawan.forEach(karyawan => {
  const bonus = karyawan.hitungBonus();
  console.log(`${karyawan.nama} mendapatkan bonus: Rp ${bonus.toLocaleString()}`);
  totalBonus += bonus;
});

console.log(`Total bonus semua karyawan: Rp ${totalBonus.toLocaleString()}`);
