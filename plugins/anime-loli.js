import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
let res = `https://api.ibeng.tech/api/wallpaper/loli?apikey=${global.ibeng}`
let kata = 'Cih Dasar Pedoo'
conn.sendMessage(m.chat, { image : { url: res}, caption: kata}, m)
}
handler.command = /^(loli)$/i
handler.tags = ['anime']
handler.help = ['loli']
handler.limit = true
export default handler
