const prefix = 'a9'
const ten_numbers = ['8', '9', 'a', 'b', 'c', 'd'];
const ones = '0123456789abcdef'.split('');

let combos = [];

for(let j = 0; j < ten_numbers.length; j++){
    for(let i = 0; i < ones.length; i++){
        let combo = ten_numbers[j] + ones[i];
        if(!['da', 'db', 'dc', 'dd', 'ce'].includes(combo)){
            combos.push(combo);
        }
    }
}

const final_chars = combos.map(two_letter => {
    return String.fromCharCode(parseInt(`0x${prefix}${two_letter}`, 16))
});

console.log(final_chars);