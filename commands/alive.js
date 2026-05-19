const settings = require("../settings");
const os = require("os");

async function aliveCommand(sock, chatId, message) {
    try {
        const start = Date.now()
        const ping = Date.now() - start
        const uptimeSec = Math.floor(process.uptime())
        const uptimeStr = (() => {
            const h = Math.floor(uptimeSec / 3600)
            const m = Math.floor((uptimeSec % 3600) / 60)
            const s = uptimeSec % 60
            return `${h}h ${m}m ${s}s`
        })()
        const ramUsedMB = Math.round(process.memoryUsage().rss / 1024 / 1024)
        const ramTotalMB = Math.round(os.totalmem() / 1024 / 1024)
        const hour = new Date().getHours()
        const sleeping = hour >= 1 && hour < 6
        const mode = settings.commandMode || 'public'

        const quotes = [
            '"I am vengeance. I am the night. I am Batman."',
            '"Criminals are a superstitious, cowardly lot."',
            '"It\'s not who I am underneath, but what I do that defines me."',
            '"Why do we fall? So we can learn to pick ourselves back up."',
            '"The night is darkest just before the dawn."',
        ]
        const quote = quotes[Math.floor(Math.random() * quotes.length)]

        const aliveMsg = `🦇 *IANENIGMA MD BOT — STATUS* 🦇

*${quote}*

━━━━━━━━━━━━━━━━━━━
⚡ *SYSTEM REPORT*
━━━━━━━━━━━━━━━━━━━
🟢 *Status:*   Online & Patrolling
🏙️ *Mode:*     ${mode.charAt(0).toUpperCase() + mode.slice(1)}
🌙 *Sleep mode:* ${sleeping ? 'Active (1am–6am)' : 'Off'}
📡 *Ping:*    ${Date.now() - start}ms
⏱️ *Uptime:*  ${uptimeStr}
💾 *RAM:*     ${ramUsedMB}MB / ${ramTotalMB}MB
🤖 *Version:* v1.0.0
━━━━━━━━━━━━━━━━━━━

_Type_ *.menu* _to see all commands._`

        await sock.sendMessage(chatId, { text: aliveMsg }, { quoted: message })
    } catch (error) {
        console.error('Error in alive command:', error)
        await sock.sendMessage(chatId, { text: '🦇 IANENIGMA MD BOT is alive!' }, { quoted: message })
    }
}

module.exports = aliveCommand
