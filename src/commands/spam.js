const charsets = {
    english: 'abcdefjhijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ',
    javanese: ['ꦀ', 'ꦁ', 'ꦂ', 'ꦃ', 'ꦈ', 'ꦊ', 'ꦋ', 'ꦎ', 'ꦙ', '꦳', 'ꦴ', 'ꦵ', 'ꦶ', 'ꦷ', 'ꦸ', 'ꦹ', 'ꦺ', 'ꦻ', 'ꦼ', 'ꦽ', 'ꦾ', 'ꦿ', '꧀','꧁', '꧂', '꧃', '꧄', '꧅', '꧆', '꧊', '꧋', '꧌', '꧍', '꧒', '꧓', '꧕'],
    numbers: '123457890',
    ascii: 'abcdefjhijklmnopqrstuvwxyzABCDEFJHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()`~-_=+[{]}\\|;:\'"/?.>,<',
    asciisymbols: '`~!@#$%^&*()-_=+[{]}\\|;:\'",<.>/?',
    altcodes: 'ÇüéâäàåçêëèïîìæÆôöòûùÿ¢£¥PƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ‘’“”–—˜™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþÇüéâäàåçêëèïîìæÆôöòûùÿ¢£¥PƒáíóúñÑ¿¬½¼¡«»¦ßµ±°•·²€„…†‡ˆ‰Š‹Œ‘’“”–—˜™š›œŸ¨©®¯³´¸¹¾ÀÁÂÃÄÅÈÉÊËÌÍÎÏÐÒÓÔÕÖ×ØÙÚÛÜÝÞãðõ÷øüýþ',
    astrology: '☉☽☿♀︎⊕♁♂︎⚳♃♄♅⛢♆♇♋♌♍♎♏♐♒♓♈♊♉♑️',
    emoji: {
        nature: [...'🐶🐱🐭🐹🐰🦊🐻🐼🐨🐯🦁🐮🐷🐽🐸🐵🙈🙉🙊🐒🐔🐧🐦🐤🐣🐥🦆🦅🦉🦇🐺🐗🐴🦄🐝🐛🦋🐌🐚🐞🐜🦗🕷🕸🦂🐢🐍🦎🦖🦕🐙🦑🦐🦀🐡🐠🐟🐬🐳🐋🦈🐊🐅🐆🦓🦍🐘🦏🐪🐫🦒🐃🐂🐄🐎🐖🐏🐑🐐🦌🐩🐈🐓🦃🕊🐇🐁🐀🐿🦔🐾🐉🐲🌵🎄🌲🌳🌴🌱🌿☘️🍀🎍🎋🍃🍂🍁🍄🌾💐🌷🌹🥀🌺🌸🌼🌻🌞🌝🌛🌜🌚🌕🌖🌗🌘🌑🌒🌓🌔🌙🌎🌍🌏💫⭐️🌟✨⚡️☄️💥🔥🌪🌈☀️🌤⛅️🌥☁️🌦🌧⛈🌩🌨❄️☃️⛄️🌬💨💧💦☔️☂️🌊'],
        food: [...'🥫🥃🥦🥜🍌🍞🍣🥖🥑🍲🌶🌽🥚🍕🍚🥨🧀🍐🍶🍦🍇🍆🥡🍻🍨🍒🍸🍉🍅🍡🍋🍖️🥔🌯🥐🍱🍧🥓🍏🍤🍫🍍🍮🍔🥠🍴🍳🍛🍜🥤🥣🍝🥪🍗🍑🥟🍰🍟🍵🍺🥕🍙🍪🥂🌰🍽🥒🥄🥢🍹🍬🥥🍷🍥🍿🍠🍘🍎🥙🍾🥞🥛🍓🍢🍩🥧🥗🍭🥘🍊🍯🌭🍈🌮☕🥝🎂🍼'],
        symbols: [...'🏧🕐⚜🅾*#☣🆎↔♠️️🆔️️🕡️️🔊️◾🎦📣️✡️💹🔢✖🔉🔯🈵️⬜🈚️️⤵🈸⃣️🔻💔🔽♾🔅🆗🈳️️💞🈯♋⃣️⏯🈲️🚸🆕🔶↘️🕜💝♓️️🆙💯️🚾⬆️🛐🔴️↖️🆚️⃣💬💱️9🈁➖📶️🆖▫🕢⏏🕉🔝️💲➕️️▪🚫❗⃣🌐🕗♐⬅↙🎴️️↗‼️🈴️⏹🔞⏮🛄💜🔲✅🚼8️🔤⬛➡⁉️️🔇📢️📴✔❇️️️🔈🈷️️▶‍〽🆓↪🕝🔚🕑🔆❎🔔❣🗯🚱🔛🚷4⏫️🕣🚺♎️🉑2️👁🕘️◀️🔳✳🔸⃣↩◻️❔🕦️✴🔕⏭️🕠💭♉⃣🕎🎵️🕕️️⚠💠🕒🕥🛃️🕚7️🔠️🔃✝⏺💚❕♥️0⚫⏩♨⬇❓1🔜️♿️☪☑💮🔵🔟️💓♍🈺💖🔺️️♏🕟⚛🕧♈🕙️❌️🧡⛔⛎◽◼️💙⃣💕🚮️🔰🛂☢💟️♊🔣⃣🔘🕤️️♑6🚻🔄☸🗨⏬5📵️⃣🀄🔹🆒️️🆑🕞🛅〰️🚹🔁🅱🕛️️💤⭕🖤️♌🔙⤴️️💗➰💛️️️♻™🃏➿️🔀️®🕓🈂⚪🆘ℹ🅿🚳️️️️💘🅰🛑⏸💢⏪️☮♣🌀🔱️⃣️♦️☦➗3🕔⃣️️️🕖↕🚯㊗️Ⓜ🈶⃣🔡❤☯🈹📳♒🉐️📛🚭️©️㊙️🔂🔼🔷️🎶'],
        smileys: [...'😺😕😶😒🤪️🧐😁😡🤐😌☺😬😢😻😵😴🤡😟😄😓😉😿😋😃😀👺😤🤩🤒🤖😚😝😧😂😏🤨😼😙😇👻💀😾👹😐🤯👽🤢🤮😨😅☹😸🙂😲😫💩😣😘😯🤣🙁🙀🤗😛😱😠😰😊😗😩😔😹😍🤑🤥😈🤫😆😥😪👿🤧🙄😮🤠🤓😑😞😦😳🙃😖😷😽😎🤤😜🤕🤬🤭️🤔'],
        travel: [...'🚋🚨🏭🗾🚧🏤🎠🗺🚕🚗🕍🗽🚈🛴⚓🏛🚓🏎🗼🏚🚌🌁🛸🚖🚢🚡🛩🏘🏫🌌️🏖🌇🚊🛫🛵🚇🚥🏠🎑⛲🚀🎆🚉🌃🚦🛰⛱🏗🏡🗿🏥🚘🚲🚞🛥⛺🚄🏨🚁🛤️🚂🏔🏍🏪🏟🏩⛩⛵️🛬🌅🌋🛣💺⛽🌄🏰🏜🏝✈🏦🗻🎢🎇🚍🚠🚆🚃🚑🕋🏙🚟🛶️🚙🌉🚎🌠⛰️🏯🏕🚚🚏🏢🚔🚤💒🚝🚛⛴🌆🚜🏣🏞🚐🏬🛳🕌🎡️⛪🚅️']
    }
};

const keys = Object.keys(charsets);
const emoji_keys = Object.keys(charsets['emoji']);

const generate_embed = require('../util/generate_embed.js');

module.exports = async (args) => {
    let type = args[1], length = args[2];

    if(keys.includes(type)){
        const parsed_length = parseInt(length);
        const possible_parsed_length = parseInt(args[3]);
        const numberical_length = !isNaN(parsed_length) ? parsed_length : (!isNaN(possible_parsed_length) ? possible_parsed_length : 100);
        if(numberical_length > 1010) {
            const error = await generate_embed(
                'Length is too long',
                'Please choose a number under 1010',
                16711680
            );

            return error;
        } else {
            let string = '';

            if(type != 'emoji'){
                for(let i = numberical_length; i > 0; i--){
                    string += charsets[type][Math.floor(Math.random() * charsets[type].length)];
                }
            } else if(emoji_keys.includes(args[2])) {
                let data = args[2];
                for(let i = numberical_length; i > 0; i--){
                    string += charsets[type][data][Math.floor(Math.random() * charsets[type][data].length)];
                }
            } else {
                const error = await generate_embed(
                    'Invalid emoji type',
                    'Please check `!!help spam emoji` for a list of types',
                    16711680
                );
                
                return error;
            }

            if(args[args.length - 1] != 'view' && type == 'emoji'){
                string = `\`\`\`${string}\`\`\``;
            }

            const message = await generate_embed(
                `${type[0].toUpperCase()}${type.slice(1)} spam`,
                string
            );

            return message;
        }
    } 

    const error = await generate_embed(
        'Invalid type',
        'Please check `!!help spam` for a list of types',
        16711680
    );
    
    return error;
}