const prompt = require('prompt-sync')();

let A1;
let A2;

function menu()
{
    console.log('1. tambah\n2. Kurang\n3. Perkalian\n4. Pembagian\n5. Menghitung Akar\n6. Menghitung pangkat')
    const pilihan = prompt('Masukan Pilihan ')
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
            pangkat()
            break;
    
        default:
            console.log('Terimakasih Sudah Berhitung');
    }  
}
function inputAngka(){
    A1 = prompt(`Masukan Angka 1 : `)
    A2 = prompt(`Masukan Angka 2 : `)
}
function input1(){
    A1 = parseInt(prompt('Masukan Angka :'))
}

function tambah(){
    inputAngka()
    console.log(+A1 + +A2)
    menu()
}
function kurang(){
    inputAngka()
    console.log(+A1 - +A2)
    menu()
}
function kali(){
    inputAngka()
    console.log(+A1 * +A2)
    menu()
}
function bagi(){
    inputAngka()
    console.log(+A1 / +A2)
    menu()
}
function pangkat(){
    inputAngka()
    console.log(A1**A2)
    menu()
}
function akar(){
    input1()
    console.log(Math.sqrt(A1))
    menu()
}
 
menu()