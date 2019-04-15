module.exports = {
    hugify: 
        `Format: \`!!hugify <text>\`\n
        - <text> represents the text you want to "enlarge"
        - <text>'s maximum length is unclear as Discord's emojis are buggy - improvements will be made in the future
        - Keeping <text>'s length at around 550 characters including spaces should be fine
        
        :regional_indicator_h: :regional_indicator_u: :regional_indicator_g: :regional_indicator_i: :regional_indicator_f: :regional_indicator_y:`,
    creepify:
        `Format: \`!!creepify <text>\`\n
        - <text> represents the text you want to "creepify", or add diacritics
        - The density of the extra "noise" is low, for Discord filters out high density creepy text`,
    clean:
        `Format: \`!!clean <text>\`\n
        - <text> represents the text you want to clean
        - This command will remove all non-ascii characters such as \`®\`, \`£\`, and \`ß\`
        - It will also replace all whitespace with a single space`,
    general_help:
        `__**Categories:**__
        \`- spam\`
        \`- spam emoji\`
        \`- hugify\`
        \`- creepify\`
        \`- clean\`
        
        Use \`!!help <category>\` for specific information`
}