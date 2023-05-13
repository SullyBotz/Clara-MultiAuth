import moment from 'moment-timezone'
let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
if (!text) throw 'Pesan?'
    let get = participants.filter(v => v.id.endsWith('.net')).map(v => v.id)
          m.reply('*_Sedang Push Kontak..._*');
          for (let i = 0; i < get.length; i++) {
              conn.sendMessage(get[i], { caption: text }, m)
                m.reply(`*_Berhasil Push Kontak:_*`);
              }
            }

handler.command = ['pushkontak']
handler.admin = false
handler.group = true

export default handler
