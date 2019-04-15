const generate_embed = require('../util/generate_embed.js');
const generate_large_embed = require('../util/generate_large_embed.js');

const letter_dictionary = { 
    a: '🇦',
    b: '🇧',
    c: '🇨',
    d: '🇩',
    e: '🇪',
    f: '🇫',
    g: '🇬',
    h: '🇭',
    i: '🇮',
    j: '🇯',
    k: '🇰',
    l: '🇱',
    m: '🇲',
    n: '🇳',
    o: '🇴',
    p: '🇵',
    q: '🇶',
    r: '🇷',
    s: '🇸',
    t: '🇹',
    u: '🇺',
    v: '🇻',
    w: '🇼',
    x: '🇽',
    y: '🇾',
    z: '🇿' };

const number_dictionary = { 
    '1': '1⃣',
    '2': '2⃣',
    '3': '3⃣',
    '4': '4⃣',
    '5': '5⃣',
    '6': '6⃣',
    '7': '7⃣',
    '8': '8⃣',
    '9': '9⃣',
    '0': '0⃣'};

module.exports = async (input_text) => {
    const raw_text = input_text.toLowerCase();

    if(/\d/.test(input_text) || /[a-zA-Z]/.test(input_text)){
        const split_text = raw_text.toLowerCase().split('')
        const filtered_text = split_text.filter(char => /\s/.test(char) || /^[a-z0-9]+$/i.test(char));
        if(filtered_text.length < 340){
            const tokenified_text = filtered_text.map(char => {
                if(/\s/.test(char)){ // is whitespace
                    return '▪️';
                } else if(!isNaN(parseInt(char))){ // is numeric
                    return `${number_dictionary[char]}`;
                } else { // is alphabetic
                    return `${letter_dictionary[char]}`;
                }
            });
        
            const embed = await generate_large_embed(
                'Hugified Text',
                [{
                    name: 'Preview',
                    value: tokenified_text.join('​') + '\n\r** ** ** **',
                },
                {
                    name: 'Copy + Paste this:',
                    value: `\`${tokenified_text.join('​')}\`\n\r** ** ** **`,
                }],
                
            );
    
            return embed;
        } else {
            const error = await generate_embed(
                'Your message is too long',
                'Shorten it and try again.',
                16711680);
            return error;
        }
    } else {
        const error = await generate_embed(
            'Invalid Message',
            'Your message much contain at least one letter or number',
            16711680);
        return error;
    }   
}