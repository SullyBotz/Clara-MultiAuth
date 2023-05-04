import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let pp = await conn.profilePictureUrl(who).catch(_ => hwaifu.getRandom())
let name = await conn.getName(who)

if (command == 'owner') {
 let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp; Zeltoria\nNICKNAME: Zeltoria\nORG: Zeltoria\nTITLE:\nitem1.TEL;waid=6285760451683:+62 857 6045 1683\nitem1.X-ABLabel: Nomor Owner\nitem2.URL:https://www.zeltoria.my.id\nitem2.EMAIL;type=INTERNET: elistz21@gmail.com\nitem2.X-ABLabel:\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkontak })
}
const _0x5dfe15=_0x2d03;function _0x193e(){const _0x369876=['133gLowdr','719664otmxse','sendMessage','144030PXwwSW','2556280mKjRcc','992328saNutG','570200AQJyHu','chat','creator','BEGIN:VCARD\x0aVERSION:3.0\x0aN:WhatsApp;\x20Danil\x20Elistz\x0aNICKNAME:\x20Zeltoria\x0aORG:\x20Zeltoria\x0aTITLE:\x0aitem1.TEL;waid=6285760451683:+62\x20857\x206045\x201683\x0aitem1.X-ABLabel:\x20Nomor\x20Owner\x0aitem2.URL:https://www.zeltoria.my.id\x0aitem2.EMAIL;type=INTERNET:\x20elistz21@gmail.com\x0aitem2.X-ABLabel:\x0aitem4.ADR:;;🇮🇩\x20Indonesia;;;;\x0aEND:VCARD','1806741nUdFTR','605534TYVxSX'];_0x193e=function(){return _0x369876;};return _0x193e();}function _0x2d03(_0x2e76cb,_0x2576ec){const _0x193e5e=_0x193e();return _0x2d03=function(_0x2d03ac,_0x375f0d){_0x2d03ac=_0x2d03ac-0xbe;let _0x467b23=_0x193e5e[_0x2d03ac];return _0x467b23;},_0x2d03(_0x2e76cb,_0x2576ec);}(function(_0x393e4f,_0x973a3d){const _0x264997=_0x2d03,_0x47acfa=_0x393e4f();while(!![]){try{const _0x59d245=parseInt(_0x264997(0xc4))/0x1+parseInt(_0x264997(0xbe))/0x2+-parseInt(_0x264997(0xc3))/0x3+-parseInt(_0x264997(0xbf))/0x4+parseInt(_0x264997(0xc9))/0x5+parseInt(_0x264997(0xc8))/0x6*(-parseInt(_0x264997(0xc5))/0x7)+-parseInt(_0x264997(0xc6))/0x8;if(_0x59d245===_0x973a3d)break;else _0x47acfa['push'](_0x47acfa['shift']());}catch(_0x2b3ce3){_0x47acfa['push'](_0x47acfa['shift']());}}}(_0x193e,0x4ea38));if(command==_0x5dfe15(0xc1)){let vcard=_0x5dfe15(0xc2);const tag_own=await conn[_0x5dfe15(0xc7)](m[_0x5dfe15(0xc0)],{'contacts':{'displayName':wm,'contacts':[{'vcard':vcard}]}},{'quoted':fkontak});}
}
handler.help = ['owner', 'creator']
handler.tags = ['info','main']

handler.command = /^(creator|owner)$/i

export default handler
