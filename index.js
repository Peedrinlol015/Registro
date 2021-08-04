const Discord = require('discord.js');
const config = require('./config.json');
const bot = new Discord.Client();

var logger_1 = require("./console/log");
var logger = new logger_1.default();

bot.on("ready", async => {
  logger.warn('Logado como ' + bot.user.tag + "\n");

  const status = [
    "dnd"
  ]

  const atividades = [
    [`BOT de Registro da Cleosan! Baixe-me em meu servidor!`, "PLAYING"],
	    [`Versão 1.0.0!`, "PLAYING"],
		    [`Bugs podem ser encontrados!`, "PLAYING"]
  ]

  setInterval(async () => {
    let i = Math.floor(Math.random() * atividades.length + 1) - 1
    await bot.user.setActivity(atividades[i][0], {
      type: atividades[i][1]
    });
  }, 4000)

  setInterval(async () => {
    let b = Math.floor(Math.random() * status.length + 1) - 1
    await bot.user.setStatus(status[b])
  }, 2500)
})

const categoria2 = config.principais[0].categoria
const canal = config.principais[0].canal_do_registro

const cargo_registrado = config.principais[0].cargo_registrado
const cargo_não_registrado = config.principais[0].cargo_não_registrado


const pagina_1_cargo_1 = config.cargos_pagina_1[0].cargo_1
const pagina_1_cargo_2 = config.cargos_pagina_1[0].cargo_2

const pagina_2_cargo_1 = config.cargos_pagina_2[0].cargo_1
const pagina_2_cargo_2 = config.cargos_pagina_2[0].cargo_2

const pagina_3_cargo_1 = config.cargos_pagina_3[0].cargo_1
const pagina_3_cargo_2 = config.cargos_pagina_3[0].cargo_2
const pagina_3_cargo_3 = config.cargos_pagina_3[0].cargo_3

const pagina_4_cargo_1 = config.cargos_pagina_4[0].cargo_1
const pagina_4_cargo_2 = config.cargos_pagina_4[0].cargo_2
const pagina_4_cargo_3 = config.cargos_pagina_4[0].cargo_3
const pagina_4_cargo_4 = config.cargos_pagina_4[0].cargo_4

const cor = config.principais[0].cor_das_embeds
const imagem = config.principais[0].imagem_das_embeds

  bot.on('message', async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;

    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    if(command === 'registrar'){
      let usuario = message.member;

      if(message.channel.id === canal){

      } else {
          message.delete();
          return;
      }
      let pagina = 0;
    let inicio = false;
    let terminou = false;

    let cargo1 = ""
    let cargo2 = ""
    let cargo3 = ""
    let cargo4 = ""

    const emoji_correto = message.guild.emojis.cache.find(emoji => emoji.id === config.emojis[0].emoji_correto);
    const emoji_cancelar = message.guild.emojis.cache.find(emoji => emoji.id === config.emojis[0].emoji_cancelar);
    const emoji_numero_1 = message.guild.emojis.cache.find(emoji => emoji.id === config.emojis[0].emoji_numero_1);
    const emoji_numero_2 = message.guild.emojis.cache.find(emoji => emoji.id === config.emojis[0].emoji_numero_2);
    const emoji_numero_3 = message.guild.emojis.cache.find(emoji => emoji.id === config.emojis[0].emoji_numero_3);
    const emoji_numero_4 = message.guild.emojis.cache.find(emoji => emoji.id === config.emojis[0].emoji_numero_4);

    console.log(emoji_correto.id)
      let registrando = new Discord.MessageEmbed()
      .setTitle("Registro de Usuário!")
   .setDescription(`*Como irá funcionar?* \n> **Você deverá reajir com os emojis corresponde conforme a sua escolha!**`)
   .setAuthor("Registro de: " + message.author.username)
   .addField('Atenção', 'Você possui 2 minutos para concluir, caso contrário, o seu registro será cancelado pelo sistema!')
   .setColor(cor)
   .setThumbnail(imagem)

   let embed_eventos = new Discord.MessageEmbed() // eventos
                        .setTitle('Escolha 1 cargo! | Parte 2 / 4')
                        .setDescription(`> <@&${pagina_2_cargo_1}> - ${emoji_numero_1} \n> <@&${pagina_2_cargo_2}> - ${emoji_numero_2}`)
                        .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor(cor)
                        .addField('Lembre-se', 'Você possui 2 minutos para concluir este registro!')
                        .setThumbnail(imagem)

                         let embed_besteirol = new Discord.MessageEmbed() // eventos
                         .setTitle('Escolha 1 cargo! | Parte 3 / 4')
                         .setDescription(`> <@&${pagina_3_cargo_1}> - ${emoji_numero_1} \n> <@&${pagina_3_cargo_2}> - ${emoji_numero_2} \n > <@&${pagina_3_cargo_3}> - ${emoji_numero_3}`)
                         .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                         .setThumbnail(imagem)
                        .addField('Lembre-se', 'Você possui 2 minutos para concluir este registro!')
                        .setColor(cor)

                          let embed_genero = new Discord.MessageEmbed() // genero
                          .setTitle('Escolha 1 cargo! | Parte 4 / 4')
                          .setDescription(`> <@&${pagina_4_cargo_1}> - ${emoji_numero_1} \n> <@&${pagina_4_cargo_2}> - ${emoji_numero_2} \n> <@&${pagina_4_cargo_3}> - ${emoji_numero_3} \n> <@&${pagina_4_cargo_4}> - ${emoji_numero_4}`)
                          .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                          .setThumbnail(imagem)
                        .addField('Lembre-se', 'Você possui 2 minutos para concluir este registro!')
                        .setColor(cor)
                         
      let categoria = message.guild.channels.cache.find(ct=>ct.id === categoria2 && ct.type === "category");
                 
      message.guild.channels.create(`registro-${message.author.username}`, { // Criando o canal
        
        permissionOverwrites: [
            {
                id: usuario.id,
                allow: ["SEND_MESSAGES", "READ_MESSAGE_HISTORY", "VIEW_CHANNEL"] // Adicionando permissão somente ao author do comando
            },
            {
                id: message.guild.roles.everyone,
                deny: ["VIEW_CHANNEL", "READ_MESSAGE_HISTORY", "SEND_MESSAGES" ] 
            }
        ],
              type: 'Text'
          }).then(async channel => {
              channel.setParent(categoria, { lockPermissions: false });
            const msg = await channel.send(`<@${message.author.id}>`, registrando);
            const emoji1 = [emoji_numero_1.id , emoji_numero_2.id, emoji_numero_3.id, emoji_numero_4.id, emoji_correto.id, emoji_cancelar.id];
            let mes = await message.channel.send(`<@${message.author.id}>, o seu registro foi iniciado na sala: ${channel}`)
            message.delete()
            mes.delete({ timeout: 5000 })
    
            setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                if(inicio === false){
                    channel.delete();
                usuario.send('O seu registro foi cancelado pelo sistema pelo motivo: Tempo para iniciar expirou! Tente novamente, más dessa vez seja mais rápido!')
               
                return;
                }
                }, 40000) // tempo em milessegundos
    
    
            msg.react(emoji_correto);
        
        
            const collector = msg.createReactionCollector((r, u) => emoji1.includes(r.emoji.id) && u.id === message.author.id);
        
            collector.on('collect', (r, u) => {
                r.users.remove(message.author.id);
        
                switch (r.emoji.id) {
                    case emoji_correto.id: // emoji check ====================
                    if(pagina === 5){
                        terminou = true;
                        
                        if(config.principais[0].adicionar_cargo_registrado === true){
                        usuario.roles.add(cargo_registrado)

                        }
                        if(config.principais[0].retirar_cargo_não_regitrado === true){
                            usuario.roles.remove(cargo_não_registrado)
                            }
                        usuario.roles.add(cargo1)
                        usuario.roles.add(cargo2)
                        usuario.roles.add(cargo3)
                        usuario.roles.add(cargo4)
                        msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                    let embed_final = new Discord.MessageEmbed()
                    .setTitle('Você agora está registrado!')
                    .setDescription(`> Os cargos escolhidos já foram aplicados á sua conta!`)
                    .addField('Problemas?', "Houve algum problema com o seu registro? Contate a Administração!")
                    .setFooter('Obrigado por se registrar!', message.guild.iconURL())
                    .setThumbnail(imagem)
                    .setColor(cor)
                    msg.edit(embed_final)
                    setTimeout(() => { // apagar o canal
                            channel.delete();
                        return;
                        }, 8000) // tempo em milessegundos

                    }
                        if(pagina === 0) {

                        msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                        msg.react(emoji_numero_1)
                        msg.react(emoji_numero_2)
                        let embed_programas = new Discord.MessageEmbed()
                        .setTitle('Escolha 1 cargo! | Pagina 1 / 4')
                        .setDescription(`> <@&${pagina_1_cargo_1}> - ${emoji_numero_1} \n> <@&${pagina_1_cargo_2}> - ${emoji_numero_2}`)
                        .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor(cor)       
                        .addField('Lembre-se', 'Você possui 2 minutos para concluir este registro!')
                        .setThumbnail(imagem)
                        msg.edit(embed_programas)

                        pagina = 1;
                        inicio = true;

                        setTimeout(() => { // Se o usuário não terminar em 2 minutos (120000 milissegundos) o canal será excluido.
                                if(terminou === false){
                                    channel.delete();
                                    usuario.send('O seu registro foi cancelado pelo sistema pelo motivo: Tempo para concluir expirou! Tente novamente, más dessa vez seja mais rápido!')

                            return;
                            }
                            }, 120000) // tempo em milessegundos
                        }
                        break;
                        case emoji_numero_1.id: // emoji numero 1 ====================
                        /// pagina 2
                        if(pagina === 4){
                            cargo4 = pagina_4_cargo_1
                            pagina = 5
                                msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                msg.react(emoji_correto)
                                msg.react(emoji_cancelar)
                                let preferencia11 = "";

                                preferencia11 = `<@&${cargo1}>, `
                                preferencia11 += `<@&${cargo2}>, `
                                preferencia11 += `<@&${cargo3}> e `
                                preferencia11 += `<@&${cargo4}>`
                                let embed_correto1 = new Discord.MessageEmbed()
                        .setTitle('Veja a baixo as suas preferências:')
                        .setDescription(`> ${preferencia11} \n\n *Caso esteja correto, reaja com o emoji ${emoji_correto}, caso contrario reaja com ${emoji_cancelar}*`)
                        .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor(cor)        

                        msg.edit(embed_correto1)
                        }
                        if(pagina === 3) {
                            msg.edit(embed_genero)
                            cargo3 = pagina_3_cargo_1
                            msg.react(emoji_numero_4)
                            pagina = 4

                        }
                        if(pagina === 2) {
                            msg.edit(embed_besteirol)
                            cargo2 = pagina_2_cargo_1 ;
                            msg.react(emoji_numero_3)
                            pagina = 3;
                        }
                        // pagina 1
                        if(pagina === 1) {
                            
                        msg.edit(embed_eventos)
                        cargo1 = pagina_1_cargo_1;

                        pagina = 2;

                        }

                             break;
 
                              case emoji_numero_2.id: // emoji numero 2 ================================
                              if(pagina === 4){
                                cargo4 = pagina_4_cargo_2
                                pagina = 5
                                msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                msg.react(emoji_correto)
                                msg.react(emoji_cancelar)

                                let preferencia1 = ""

                                preferencia1 = `<@&${cargo1}>, `
                                preferencia1 += `<@&${cargo2}>, `
                                preferencia1 += `<@&${cargo3}> e `
                                preferencia1 += `<@&${cargo4}>`
                                let embed_correto2 = new Discord.MessageEmbed()
                        .setTitle('Veja a baixo as suas preferências:')
                        .setDescription(`> ${preferencia1} \n\n *Caso esteja correto, reaja com o emoji ${emoji_correto}, caso contrario reaja com ${emoji_cancelar}*`)
                        .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor(cor)        

                        msg.edit(embed_correto2)
                    }
                              if(pagina === 3) {
                                cargo3 = pagina_3_cargo_2
                                msg.edit(embed_genero)
                                msg.react(emoji_numero_4)
                                pagina = 4
                            }
                            if(pagina === 2) {
                                cargo2 = pagina_2_cargo_2
                                msg.react(emoji_numero_3)
                                msg.edit(embed_besteirol)
                                pagina = 3
                            }
                              if(pagina === 1) {
                                  cargo1 = pagina_1_cargo_2
                                msg.edit(embed_eventos)   
                                pagina = 2;
        
                                }

                                  break; // emoji numero 3 ========================================
                                  case emoji_numero_3.id:
                                    if(pagina ===4) {
                                        cargo4 = pagina_4_cargo_3
                                          pagina = 5
                                msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                msg.react(emoji_correto)
                                msg.react(emoji_cancelar)

                                let preferencia3 = "";
                                
                                preferencia3 = `<@&${cargo1}>, `
                                preferencia3 += `<@&${cargo2}>, `
                                preferencia3 += `<@&${cargo3}> e `
                                preferencia3 += `<@&${cargo4}>`
                                let embed_correto3 = new Discord.MessageEmbed()
                        .setTitle('Veja a baixo as suas preferências:')
                        .setDescription(`> ${preferencia3} \n\n *Caso esteja correto, reaja com o emoji ${emoji_correto}, caso contrario reaja com ${emoji_cancelar}*`)
                        .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                        .setColor(cor)        

                                 msg.edit(embed_correto3)
                                      }
                                      if(pagina === 3) {
                                        cargo3 = pagina_3_cargo_3
                                        msg.edit(embed_genero)
                                        msg.react(emoji_numero_4)
                                        pagina = 4
                                      }
                                      break; // emoji numero 4 ===============================--
                                      case emoji_numero_4.id:
                                        if(pagina === 4) {
                                            cargo4 = pagina_4_cargo_4
                                            pagina = 5
                                            msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                            msg.react(emoji_correto)
                                            msg.react(emoji_cancelar)
            
                                            let preferencia1 = ""
            
                                            preferencia16 = `<@&${cargo1}>, `
                                            preferencia16 += `<@&${cargo2}>, `
                                            preferencia16 += `<@&${cargo3}> e `
                                            preferencia16 += `<@&${cargo4}>`
                                            let embed_correto2 = new Discord.MessageEmbed()
                                    .setTitle('Veja a baixo as suas preferências:')
                                    .setDescription(`> ${preferencia16} \n\n *Caso esteja correto, reaja com o emoji ${emoji_correto}, caso contrario reaja com ${emoji_cancelar}*`)
                                    .setFooter('Lembre-se que você só possuí 2 minutos para isto!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                                    .setColor(cor)        
            
                                    msg.edit(embed_correto2)
                                        }
                                          break;
                                           case emoji_cancelar.id:
                                               if(pagina === 5){
                                               pagina = 1
                                               msg.reactions.removeAll().catch(error => console.error('Error ao registrar. ', error));
                                               msg.react(emoji_numero_1)
                                               msg.react(emoji_numero_2)
                                               let embed_programas = new Discord.MessageEmbed()
                                               .setTitle('Escolha 1 cargoss | Pagina 1 / 4')
                                               .setDescription(`> <@&${pagina_1_cargo_1}> - ${emoji_numero_1} \n> <@&${pagina_1_cargo_2}> - ${emoji_numero_2}`)
                                               .setFooter('Você possui 2 minutos para concluir o seu registro!', 'https://cdn.discordapp.com/emojis/686486563638738964.gif?v=1')
                                               .setColor(cor)       
                                               .addField('Lembre-se', 'Você possui 2 minutos para concluir este registro!')
                                               .setThumbnail(imagem)
                                               msg.edit(embed_programas)
                                            }
                                               break; 
                                                case emoji_correto.id:
                                                    console.log('rola ' + pagina)
                                                    
                }
            })
        })
    }
    

})
bot.login(config.token);
