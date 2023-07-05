function luasLingkaran(r){
    const luasLingkaran = 22/7*r*r
    console.log(`Luas Lingkaran adalah ${luasLingkaran}cm2`)
}

function luasSegitiga(a, t){
    const luasSegitiga = 1/2*a*t
    console.log(`Luas Segitiga adalah ${luasSegitiga}cm2`)
}

function luasPersegiPanjang(p, l){
    const luasPersegiPanjang = p*l
    console.log(`Luas Persegi Panjang adalah ${luasPersegiPanjang}cm2`)                             
}

function luasJajarGenjang(a, t){
    const luasJajarGenjang = a*t
    console.log(`Luas Jajar Genjang adalah ${luasJajarGenjang}cm2`)
}

function totalGaji(namaKaryawan, gajiPerhari, jumlahHariMasukKerja){
    const totalGaji = gajiPerhari * jumlahHariMasukKerja
    console.log(`Nama = ${namaKaryawan}`)
    console.log(`Total Gaji = ${totalGaji}`)
}

luasLingkaran(14)
luasSegitiga(20, 16)
luasPersegiPanjang(5, 2)
luasJajarGenjang(2, 4)
totalGaji('Karyawan 1', 150000, 10)