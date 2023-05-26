const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';


function generateKey(number, characters) {
    let keyTemp = '';
    for (let i = 0; i < number; i++) {
        keyTemp += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return keyTemp;
}
const key = generateKey(16, characters);
document.write(`Random key: ${key}`);
console.log(key);