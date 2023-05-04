import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {

  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://api.ibeng.tech/api/info/openai?text=${text}&apikey=${global.ibeng}`)
    let komcol = await res.json()
   m.reply(komcol.data.data)
}
handler.help = ['ai','openai']
handler.tags = ['ai']
handler.command = /^(ai|openai|lia)$/i
handler.limit = true
export default handler
