const settings = require('../settings');
const fs = require('fs');
const path = require('path');
const os = require('os');

async function helpCommand(sock, chatId, message) {
    const start = Date.now();

    let mode = 'Public';
    try {
        const data = JSON.parse(fs.readFileSync('./data/messageCount.json'));
        if (typeof data.isPublic === 'boolean') mode = data.isPublic ? 'Public' : 'Private';
    } catch (_) {}

    const ping = Date.now() - start;
    const ramMB = Math.round(process.memoryUsage().rss / 1024 / 1024);
    const uptimeSec = Math.floor(process.uptime());
    const uptimeStr = `${Math.floor(uptimeSec/3600)}h ${Math.floor((uptimeSec%3600)/60)}m`;
    const userName = message.pushName || 'Vigilante';
    const hour = new Date().getHours();
    const sleeping = hour >= 1 && hour < 6;

    const menu = `🦇 *IANENIGMA MD BOT* 🦇
_"I am vengeance. I am the night."_

┌─── 👤 *WELCOME, ${userName.toUpperCase()}*
│ 📡 Ping: *${ping}ms*
│ ⏱️ Uptime: *${uptimeStr}*
│ 💾 RAM: *${ramMB}MB*
│ 🔓 Mode: *${mode}*
│ 🌙 Sleep: *${sleeping ? 'Active (1am–6am)' : 'Off'}*
│ 🔖 Version: *v1.0.0*
└────────────────────

━━━━━━━━━━━━━━━━━━━━━━━━━
⚡ *GENERAL ARSENAL* — 17 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .help  ▸ .menu  ▸ .ping
▸ .alive  ▸ .owner  ▸ .tts <text>
▸ .joke  ▸ .quote  ▸ .fact
▸ .weather <city>  ▸ .news
▸ .attp <text>  ▸ .lyrics <song>
▸ .8ball <question>  ▸ .groupinfo
▸ .vv  ▸ .trt <text> <lang>

━━━━━━━━━━━━━━━━━━━━━━━━━
👮 *GCPD PROTOCOLS* — 18 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .ban @user  ▸ .unban @user
▸ .promote @user  ▸ .demote @user
▸ .mute <mins>  ▸ .unmute
▸ .kick @user  ▸ .delete / .del
▸ .warn @user  ▸ .warnings @user
▸ .antilink  ▸ .antibadword
▸ .antitag <on/off>  ▸ .clear
▸ .tag <msg>  ▸ .tagall
▸ .tagnotadmin  ▸ .hidetag <msg>

━━━━━━━━━━━━━━━━━━━━━━━━━
🏰 *GROUP MANAGEMENT* — 8 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .chatbot  ▸ .resetlink
▸ .welcome <on/off>  ▸ .goodbye <on/off>
▸ .setgdesc <text>  ▸ .setgname <name>
▸ .setgpp  ▸ .topmembers

━━━━━━━━━━━━━━━━━━━━━━━━━
🔒 *WAYNE TECH — OWNER* — 11 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .mode <public/private>
▸ .autotyping <on/off>  ▸ .autoread <on/off>
▸ .autostatus <on/off>  ▸ .antidelete
▸ .anticall <on/off>  ▸ .pmblocker <on/off>
▸ .setpp  ▸ .setmenuimage
▸ .cleartmp  ▸ .clearsession  ▸ .settings

━━━━━━━━━━━━━━━━━━━━━━━━━
🤖 *BATCOMPUTER AI* — 5 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .gpt <question>   ▸ .gemini <question>
▸ .imagine <prompt>  ▸ .flux <prompt>
▸ .sora <prompt>

━━━━━━━━━━━━━━━━━━━━━━━━━
🎨 *FORENSICS LAB* — 10 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .sticker  ▸ .simage  ▸ .take <pack>
▸ .removebg  ▸ .remini  ▸ .crop
▸ .emojimix <e1>+<e2>  ▸ .meme
▸ .attp <text>  ▸ .tgsticker

━━━━━━━━━━━━━━━━━━━━━━━━━
📥 *BAT-SIGNAL DOWNLOADS* — 7 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .play <song>  ▸ .song <name>
▸ .video <name>  ▸ .spotify <q>
▸ .instagram <link>  ▸ .tiktok <link>
▸ .facebook <link>

━━━━━━━━━━━━━━━━━━━━━━━━━
🎮 *ARKHAM GAMES* — 7 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .tictactoe @user  ▸ .hangman
▸ .guess <letter>  ▸ .trivia
▸ .answer <ans>  ▸ .truth  ▸ .dare

━━━━━━━━━━━━━━━━━━━━━━━━━
🃏 *JOKER'S PLAYGROUND* — 11 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .compliment @user  ▸ .insult @user
▸ .flirt  ▸ .shayari  ▸ .goodnight
▸ .roseday  ▸ .character @user
▸ .wasted @user  ▸ .ship @user
▸ .simp @user  ▸ .stupid @user

━━━━━━━━━━━━━━━━━━━━━━━━━
🔤 *RIDDLER'S CIPHERS* — 17 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .metallic  ▸ .ice  ▸ .snow
▸ .matrix  ▸ .neon  ▸ .fire
▸ .glitch  ▸ .hacker  ▸ .devil
▸ .thunder  ▸ .sand  ▸ .light
▸ .purple  ▸ .leaves  ▸ .1917
▸ .arena  ▸ .blackpink

━━━━━━━━━━━━━━━━━━━━━━━━━
😽 *CATWOMAN'S CLOSET* — 8 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .hug  ▸ .kiss  ▸ .pat  ▸ .poke
▸ .cry  ▸ .wink  ▸ .nom  ▸ .facepalm

━━━━━━━━━━━━━━━━━━━━━━━━━
🎭 *HARLEY'S CHAOS* — 14 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .heart  ▸ .jail  ▸ .wasted
▸ .triggered  ▸ .gay  ▸ .glass
▸ .tweet  ▸ .ytcomment  ▸ .comrade
▸ .namecard  ▸ .oogway  ▸ .passed
▸ .its-so-stupid  ▸ .horny

━━━━━━━━━━━━━━━━━━━━━━━━━
🕵️ *DISGUISE PROTOCOLS* — 5 cmds
━━━━━━━━━━━━━━━━━━━━━━━━━
▸ .pies <country>  ▸ .china
▸ .indonesia  ▸ .japan  ▸ .korea

━━━━━━━━━━━━━━━━━━━━━━━━━

🦇 *Total: 138+ commands*
📌 _Type_ *.help* _to see this menu_
💬 _Type_ *.alive* _for bot status_

_The night is darkest just before dawn._`;

    try {
        const imagePath = path.join(__dirname, '../assets/bot_image.jpg');
        if (fs.existsSync(imagePath)) {
            const imageBuffer = fs.readFileSync(imagePath);
            await sock.sendMessage(chatId, {
                image: imageBuffer,
                caption: menu
            }, { quoted: message });
        } else {
            await sock.sendMessage(chatId, { text: menu }, { quoted: message });
        }
    } catch (error) {
        console.error('Error in help command:', error);
        await sock.sendMessage(chatId, { text: menu }, { quoted: message });
    }
}

module.exports = helpCommand;
