// const { resolve } = require('path');

// const prompt = require('prompt-sync')();
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

async function menu()
{
    console.log('1. tambah\n2. Kurang\n3. Perkalian\n4. Pembagian\n5. Menghitung Akar\n6. Menghitung Kuadrat\n7. Menghitung Luas Persegi\n8. Menghitung Volume Kubus\n9. Menghitung Volume tabung')
    const pilihan = await input('Masukan Pilihan ')
    switch (pilihan) {
        case '1':
            tambah()
            break;
        case '2':
            kurang()
            break;
        case '3':
            kali()
            break;
        case '4':
            bagi()
            break;
        case '5':
            akar()
            break;
        case '6':
            kuadrat()
            break;
        case '7':
            luasPersegi()
            break;
        case '8':
            volumeKubus()
            break;
        case '9':
            volumeTabung()
            break;
        default:
            console.log('Terimakasih Sudah Berhitung');
    }  }
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
    if (data == 'Y'){
        menu()
    } else if(data == 'N'){
        readline.close()
    }
}
function input(question){
    return new Promise(resolve => {
        readline.question(question, data => {
            return resolve(data);
    });
});
}
menu()