// const { resolve } = require('path');
// const { error } = require('console');
// const prompt = require('prompt-sync')();

let tidakAda = undefined;

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

function input(question){
    return new Promise(resolve => {
        readline.question(question, data => {
            return resolve(data);
    });
});
}
async function menu()
{
    console.log(`===MENU PILIHAN===
    1. tambah
    2. Kurang
    3. Perkalian
    4. Pembagian
    5. Menghitung Akar
    6. Menghitung Kuadrat
    7. Menghitung Luas Persegi
    8. Menghitung Volume Kubus
    9. Menghitung Volume tabung`)
    const pilihan = await input('Masukan Pilihan : ')
    if (pilihan == 1){
        tambah()
    }
    else if (pilihan == 2){
        kurang()
    }
    else if (pilihan == 3){
        kali()
    }
    else if (pilihan == 4){
        bagi()
    }else if (pilihan == 5){
        akar()
    }else if (pilihan == 6){
        kuadrat()
    }else if (pilihan == 7){
        luasPersegi()
    }else if (pilihan == 8){
        volumeKubus()
    }else if (pilihan == 9){
        volumeTabung()
     }
    // else if (pilihan == null){
    //     console.log("Anda Belum memasukkan angka")
    //     lanjut()
    // }
    else {
        console.log("%s adalah inputan yang salah", pilihan);;
        lanjut()
    }
}
async function tambah(){
    let A1 = await input(`Masukan Angka 1 : `)
    let A2 = await input(`Masukan Angka 2 : `)
    console.log(+A1 + +A2)
    lanjut()
}
async function kurang(){
    let A1 = await input(`Masukan Angka 1 : `)
    let A2 = await input(`Masukan Angka 2 : `)
    console.log(+A1 - +A2)
    lanjut()
}
async function kali(){
    let A1 = await input(`Masukan Angka 1 : `)
    let A2 = await input(`Masukan Angka 2 : `)
    console.log(+A1 * +A2)
    lanjut()
}
async function bagi(){
    let A1 = await input(`Masukan Angka 1 : `)
    let A2 = await input(`Masukan Angka 2 : `)
    console.log(+A1 / +A2)
    lanjut()
}
async function akar(){
    let A1 = await input(`Masukan Angka untuk diakar : `)
    console.log(Math.sqrt(+A1))
    lanjut()
}
async function kuadrat(){
    let A1 = await input(`Masukan Angka : `)
    let A2 = await input(`Masukan pangkat : `)
    console.log(A1 ** A2)
    lanjut()
}
async function luasPersegi(){
    let A1 = await input(`Masukan panjang : `)
    let A2 = await input(`Masukan lebar : `)
    console.log(+A1 * +A2)
    lanjut()
}
async function volumeKubus(){
    let A1 = await input(`Masukan Sisi : `)
    console.log(A1**3)
    lanjut()
}
async function volumeTabung(){
    const phi = 3.14
    let r = await input(`Masukan jari-jari : `)
    let tinggi = await input(`Masukan Tinggi : `)
    console.log(phi * r**2 * +tinggi)
    lanjut()
}
async function lanjut(){
    let data = await input('Apakah Anda Ingin Lanjut? (Y/N)')
    if (data == ('Y'&&'y')){
        menu()
    } else if(data == ('N'&&'n')){
        readline.close()
    } else{
        console.log(tidakAda);
        readline.close();
    }
}

menu()