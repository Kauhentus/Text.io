const generate_embed = require('../util/generate_embed.js');

module.exports = async (text) => {
    const filtered_text = text.replace(/[^\x00-\x7F]/g, '')
                              .replace(/\s+/g, ' ');
    const final_text = filtered_text.length > 0 ? filtered_text : '⠀'; // empty braille unicode as invisible non-whitespace char

    const embed = await generate_embed(
        'Cleaned text:',
        final_text
    );

    return embed;
}