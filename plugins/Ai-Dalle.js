import fetch from 'node-fetch'

let handler = async (m, { conn, text, command }) => {
    if (!text) throw `Teksnya`
	let url = `https://api.lolhuman.xyz/api/dall-e?apikey=${global.lolkey}&text=${text}`
	conn.sendMessage(m.chat, { image : { url : url }, caption : 'Nih Kak Hasilnya' }, m)
}
handler.command = /^(dalle|aidalle|openaiimage)$/i
handler.tags = ['ai']
handler.help = ['openaiimage','dalle']
handler.limit = true
handler.premium = false
export default handler
