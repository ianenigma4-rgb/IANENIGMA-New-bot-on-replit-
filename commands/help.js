const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const start = Date.now();

    let mode = 'public';
    try {
        const data = JSON.parse(fs.readFileSync('./data/messageCount.json'));
        if (typeof data.isPublic === 'boolean') mode = data.isPublic ? 'public' : 'private';
    } catch (_) {}

    const ping = Date.now() - start;
    const userName = message.pushName || 'Vigilante';

    const helpMessage = `
╔═══🦇 *IANENIGMA MD BOT* 🦇═══╗
║   Version: *v1.0.0* 
║   by *IANENIGMA* 
║   YT: *Mr Unique Hacker*
║   Status: *VIGILANTE MODE*
║   Mode: ${mode} | Ping: ${ping}ms
╚═══🦇════════════════════🦇═══╝

*"I am vengeance. I am the night. I am IANENIGMA."*

╔═══⚡ *GENERAL ARSENAL* ⚡═══╗
║ ➤ .help
║ ➤ .menu
║ ➤ .ping
║ ➤ .alive
║ ➤ .tts <text>
║ ➤ .owner
║ ➤ .joke
║ ➤ .quote
║ ➤ .fact
║ ➤ .weather <city>
║ ➤ .news
║ ➤ .attp <text>
║ ➤ .lyrics <song>
║ ➤ .8ball <question>
║ ➤ .groupinfo
║ ➤ .staff
║ ➤ .vv
║ ➤ .trt <text> <lang>
║ ➤ .ss <link>
║ ➤ .jid
║ ➤ .url
╚═══⚡══════════════════════⚡═══╝

╔═══👮 *GCPD PROTOCOLS* 👮═══╗
║ ➤ .ban @user
║ ➤ .promote @user
║ ➤ .demote @user
║ ➤ .mute <minutes>
║ ➤ .unmute
║ ➤ .delete / .del
║ ➤ .kick @user
║ ➤ .warnings @user
║ ➤ .warn @user
║ ➤ .antilink
║ ➤ .antibadword
║ ➤ .clear
║ ➤ .tag <message>
║ ➤ .tagall
║ ➤ .tagnotadmin
║ ➤ .hidetag <message>
║ ➤ .chatbot
║ ➤ .resetlink
║ ➤ .antitag <on/off>
║ ➤ .welcome <on/off>
║ ➤ .goodbye <on/off>
║ ➤ .setgdesc <description>
║ ➤ .setgname <name>
║ ➤ .setgpp (reply to image)
╚═══👮══════════════════════👮═══╝

╔═══🔒 *WAYNE TECH ACCESS* 🔒═══╗
║ ➤ .mode <public/private>
║ ➤ .clearsession
║ ➤ .antidelete
║ ➤ .cleartmp
║ ➤ .update
║ ➤ .settings
║ ➤ .setpp (reply to image)
║ ➤ .autoreact <on/off>
║ ➤ .autostatus <on/off>
║ ➤ .autostatus react <on/off>
║ ➤ .autotyping <on/off>
║ ➤ .autoread <on/off>
║ ➤ .anticall <on/off>
║ ➤ .pmblocker <on/off/status>
║ ➤ .pmblocker setmsg <text>
║ ➤ .setmention (reply to msg)
║ ➤ .mention <on/off>
╚═══🔒══════════════════════🔒═══╝

╔═══🎨 *FORENSICS LAB* 🎨═══╗
║ ➤ .blur (reply to image)
║ ➤ .simage (reply to sticker)
║ ➤ .sticker (reply to image)
║ ➤ .removebg
║ ➤ .remini
║ ➤ .crop (reply to image)
║ ➤ .tgsticker <link>
║ ➤ .meme
║ ➤ .take <packname>
║ ➤ .emojimix <emj1>+<emj2>
║ ➤ .igs <instagram link>
║ ➤ .igsc <instagram link>
╚═══🎨══════════════════════🎨═══╝

╔═══🕵️ *DISGUISE PROTOCOLS* 🕵️═══╗
║ ➤ .pies <country>
║ ➤ .china
║ ➤ .indonesia
║ ➤ .japan
║ ➤ .korea
║ ➤ .hijab
╚═══🕵️══════════════════════🕵️═══╝

╔═══🎮 *ARKHAM GAMES* 🎮═══╗
║ ➤ .tictactoe @user
║ ➤ .hangman
║ ➤ .guess <letter>
║ ➤ .trivia
║ ➤ .answer <answer>
║ ➤ .truth
║ ➤ .dare
╚═══🎮══════════════════════🎮═══╝

╔═══🤖 *BATCOMPUTER AI* 🤖═══╗
║ ➤ .gpt <question>
║ ➤ .gemini <question>
║ ➤ .imagine <prompt>
║ ➤ .flux <prompt>
║ ➤ .sora <prompt>
╚═══🤖══════════════════════🤖═══╝

╔═══🃏 *JOKER'S PLAYGROUND* 🃏═══╗
║ ➤ .compliment @user
║ ➤ .insult @user
║ ➤ .flirt
║ ➤ .shayari
║ ➤ .goodnight
║ ➤ .roseday
║ ➤ .character @user
║ ➤ .wasted @user
║ ➤ .ship @user
║ ➤ .simp @user
║ ➤ .stupid @user [text]
╚═══🃏══════════════════════🃏═══╝

╔═══🔤 *RIDDLER'S CIPHERS* 🔤═══╗
║ ➤ .metallic <text>
║ ➤ .ice <text>
║ ➤ .snow <text>
║ ➤ .impressive <text>
║ ➤ .matrix <text>
║ ➤ .light <text>
║ ➤ .neon <text>
║ ➤ .devil <text>
║ ➤ .purple <text>
║ ➤ .thunder <text>
║ ➤ .leaves <text>
║ ➤ .1917 <text>
║ ➤ .arena <text>
║ ➤ .hacker <text>
║ ➤ .sand <text>
║ ➤ .blackpink <text>
║ ➤ .glitch <text>
║ ➤ .fire <text>
╚═══🔤══════════════════════🔤═══╝

╔═══📥 *BAT SIGNAL DOWNLOADS* 📥═══╗
║ ➤ .play <song name>
║ ➤ .song <song name>
║ ➤ .spotify <query>
║ ➤ .instagram <link>
║ ➤ .facebook <link>
║ ➤ .tiktok <link>
║ ➤ .video <song name>
║ ➤ .ytmp4 <link>
╚═══📥══════════════════════📥═══╝

╔═══🎭 *HARLEY'S CHAOS* 🎭═══╗
║ ➤ .heart
║ ➤ .horny
║ ➤ .circle
║ ➤ .lgbt
║ ➤ .lolice
║ ➤ .its-so-stupid
║ ➤ .namecard
║ ➤ .oogway
║ ➤ .tweet
║ ➤ .ytcomment
║ ➤ .comrade
║ ➤ .gay
║ ➤ .glass
║ ➤ .jail
║ ➤ .passed
║ ➤ .triggered
╚═══🎭══════════════════════🎭═══╝

╔═══😽 *CATWOMAN'S CLOSET* 😽═══╗
║ ➤ .nom
║ ➤ .poke
║ ➤ .cry
║ ➤ .kiss
║ ➤ .pat
║ ➤ .hug
║ ➤ .wink
║ ➤ .facepalm
╚═══😽══════════════════════😽═══╝

╔═══💻 *WAYNE ENTERPRISES* 💻═══╗
║ ➤ .git
║ ➤ .github
║ ➤ .sc
║ ➤ .script
║ ➤ .repo
╚═══💻══════════════════════💻═══╝

*The night is darkest just before dawn.*
*Type .help <command> for details*

🦇 *Gotham needs IANENIGMA MD BOT* 🦇
`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');

        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: helpMessage
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { text: helpMessage }, { quoted: message });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
