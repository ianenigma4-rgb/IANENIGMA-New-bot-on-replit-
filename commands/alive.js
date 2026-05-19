const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const start = Date.now();
        const mode = settings.commandMode || 'public';

        const aliveMsg = `
🦇 *IANENIGMA MD BOT IS AWAKE* 🦇

*"Criminals are a superstitious, cowardly lot."*

▢ Version: v1.0.0
▢ Status: Patrolling Gotham
▢ Ping: ${Date.now() - start}ms
▢ Mode: ${mode}

*Mr Unique Hacker's creation is online.*
`;

        await sock.sendMessage(chatId, {
            text: aliveMsg
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
