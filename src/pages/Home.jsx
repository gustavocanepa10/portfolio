import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import { motion } from 'framer-motion';

export function Home() {
  return (
    // Fundo principal e cor de texto padrão
    <div className='w-full text-slate-100 bg-slate-900 min-h-screen items-center justify-center overflow-x-hidden flex flex-col font-sans'>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        // Navbar com novo esquema de cores
        className='sticky top-0 z-50 flex justify-center text-slate-200 w-full rounded-md bg-slate-900 border-b border-slate-700 p-3 items-center shadow-lg'
      >
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.4 }}
          className='flex gap-4 items-center'
        >
          <img className='w-12 h-11 rounded-full' src="assets/img2.png" alt="Logo João Gustavo" />
          <h1 className='text-2xl md:text-3xl font-sans font-semibold'>Portfolio</h1>
        </motion.div>
      </motion.nav>

      <div id="top"></div>
      
      <motion.div>
        {/* Seção de Introdução */}
        <div className='flex flex-col-reverse justify-center items-center gap-8 mt-20 md:mt-30'> {/* Aumentei o mt para dar mais espaço */}
          <div className='flex flex-col w-full max-w-xs md:max-w-md text-center md:text-left items-center md:items-start gap-4 px-4'> {/* Centralizado e responsivo */}
            <h1 className='text-3xl md:text-4xl text-slate-50'>Olá, meu nome é 
              <span className='block md:inline font-bold text-teal-400'> João Gustavo</span> {/* Nome destacado */}
            </h1>
            <h2 className='text-xl md:text-2xl text-slate-300'>E eu desenvolvo coisas!</h2>
          </div>
          <img
            className="w-48 h-48 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer rounded-full object-cover shadow-xl border-2 border-teal-500" // Adicionada borda e sombra maior
            src="assets/photo.png"
            alt="Foto de João Gustavo" 
          />
        </div>
      </motion.div>
      
      <motion.div
        id="sobremim"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
        className='flex flex-col items-center mt-16 md:mt-24 px-4' // Aumentei o mt e adicionei padding horizontal
      >
        <div className='flex justify-center items-center md:justify-start gap-10 w-full max-w-4xl'>
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2, delayChildren: 1.0 }}
            className='flex flex-col mb-10 gap-6 w-full md:max-w-3xl'
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className='text-lg md:text-2xl font-bold text-teal-400 text-center md:text-left' // Título destacado
            >
              Sobre mim
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Texto da seção "Sobre mim" com cor corrigida */}
              <p className='text-base md:text-lg font-semibold leading-relaxed text-slate-300 text-center md:text-left'>
                Meu nome é João Gustavo, sou estudante do 7º período de Engenharia de Software na Universidade de Vassouras, 
                Tenho experiência em criar soluções inteligente na área do desenvolvimento. 
                Minhas habilidades técnicas incluem o ecossistema JavaScript (ReactJS, TypeScript, Node.js), HTML, CSS e Tailwind CSS. 
                Essa base é complementada por conhecimentos em consumo de APIs RESTful
                 e familiaridade com bancos de dados relacionais (como PostgreSQL).
              </p>
              <p className='text-base md:text-lg font-semibold leading-relaxed text-slate-300 text-center md:text-left mt-4'>
                Em todos os meus projetos, priorizo a criação de interfaces acessíveis e intuitivas, com foco na experiência do usuário. Adoto princípios de clean code e as melhores práticas de engenharia de software para desenvolver código manutenível e de alta qualidade. Utilizo Git para um controle de versão eficaz.
              </p>
            </motion.div>
            <motion.div
              initial="initial" 
              animate="animate" 
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              className='flex flex-col items-center gap-4 mt-6' // Adicionado mt para espaçamento
            >
              <h3 className='text-xl font-semibold text-slate-200 mb-2'>Tecnologias</h3> {/* Título para a seção de tecnologias */}
              <div className='flex items-center flex-wrap justify-center gap-4'>
                <motion.img
                  src="assets/react.png" alt="ReactJS Logo" title="ReactJS"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/node.png" alt="Node.js Logo" title="Node.js"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.1 }} 
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/html.png" alt="HTML5 Logo" title="HTML5"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.2 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/css.png" alt="CSS3 Logo" title="CSS3"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.3 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/js.png" alt="JavaScript Logo" title="JavaScript"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      {/* Seção de Projetos Recentes */}
      <div className='flex flex-col items-center gap-8 mb-16 md:mb-20 px-4'> {/* Centralizado e com padding horizontal */}
        <h2 className='text-2xl md:text-3xl font-bold text-teal-400'> {/* Título destacado */}
          Projetos Recentes
        </h2>
        <div className='flex flex-wrap justify-center gap-8 items-stretch h-full w-full max-w-6xl'> {/* max-w para controlar a largura em telas grandes e items-stretch */}
        
          <Card sx={{ 
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', 
            '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 10px 20px rgba(0, 128, 128, 0.3)' }, // Sombra no hover com cor teal
            maxWidth: 400, 
            width: '100%', // Garante que o card ocupe o espaço disponível em layouts flexíveis
            backgroundColor: '#1e293b', // slate-800 
            color: '#cbd5e1' // slate-300 (cor de texto padrão para o card)
          }}>
            <CardMedia
              sx={{ height: 200 }}
              image="assets/download.png"
              title="Projeto Refund"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f1f5f9' /* slate-100 */ }}>
                Refund
              </Typography>
              {/* Texto da descrição do card com cor corrigida */}
              <Typography variant="body2" className='!text-md !text-slate-300 !font-sans !font-semibold'>
                O Refund é uma aplicação web destinada a facilitar o processo de solicitação de reembolsos. <br />
                Desenvolvida com tecnologias modernas, a plataforma permite que os usuários submetam pedidos de reembolso de forma eficiente e organizada.
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: '16px' }}> {/* Padding para os botões */}
              {/* Botão com novo esquema de cores */}
              <Button 
                sx={{ 
                  transition: 'transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out', 
                  '&:hover': { transform: 'scale(1.05)', backgroundColor: '#0d9488' /* teal-700 */ },
                  marginLeft: 'auto', // Alinha o botão à direita se for o único
                  marginRight: 'auto' // Centraliza o botão
                }} 
                target='_blank' 
                href='https://refund-nine.vercel.app/' 
                className="!border-2 !bg-teal-600 !text-md !text-white !border-teal-700 !w-auto !px-6 !h-12 !text-center !rounded-md" 
                size="medium"
              >
                Acessar projeto
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ 
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', 
            '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 10px 20px rgba(0, 128, 128, 0.3)' },
            maxWidth: 400, 
            width: '100%',
            backgroundColor: '#1e293b', 
            color: '#cbd5e1' 
          }}>
            <CardMedia
              sx={{ height: 200 }}
              image="assets/card.png"
              title="Cardápio de Pizzaria"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f1f5f9' }}>
                Cardápio de Pizzaria
              </Typography>
              <Typography variant="body2" className='!text-md !text-slate-300 !font-sans !font-semibold'>
                Este é um cardápio online que exibe pizzas com seus detalhes e preços. A aplicação informa se a pizzaria está aberta (permitindo "pedidos") ou fechada e oculta itens esgotados, tudo em uma interface simples para consulta do menu.
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: '16px' }}>
              <Button 
                sx={{ 
                  transition: 'transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out', 
                  '&:hover': { transform: 'scale(1.05)', backgroundColor: '#0d9488' },
                  marginLeft: 'auto', 
                  marginRight: 'auto'
                }} 
                target='_blank' 
                href='https://pizza-menu-mauve-pi.vercel.app/' 
                variant='contained' 
                className="!border-2 !bg-teal-600 !text-md !text-white !border-teal-700 !w-auto !px-6 !h-12 !text-center !rounded-md"
                size="medium"
              >
                Acessar projeto
              </Button>
            </CardActions>
          </Card>

          <Card sx={{ 
            transition: 'transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out', 
            '&:hover': { transform: 'scale(1.05)', boxShadow: '0px 10px 20px rgba(0, 128, 128, 0.3)' },
            maxWidth: 400, 
            width: '100%',
            backgroundColor: '#1e293b', 
            color: '#cbd5e1' 
          }}>
            <CardMedia
              sx={{ height: 220 }}
              image="assets/far.png"
              title="Aplicação de Viagem"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" sx={{ color: '#f1f5f9' }}>
                Aplicação de viagem
              </Typography>
              <Typography variant="body2" className='!text-md !text-slate-300 !font-sans !font-semibold'>
                Este projeto é uma aplicação bem dinâmica e completo para gerenciar uma lista de itens que você precisa levar em uma viagem. Com ela, você pode adicionar, marcar como embalado e excluir itens da lista.
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: '16px' }}>
              <Button
                sx={{ 
                  transition: 'transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out', 
                  '&:hover': { transform: 'scale(1.05)', backgroundColor: '#0d9488' },
                  marginLeft: 'auto', 
                  marginRight: 'auto'
                }}
                component="a" 
                href='https://travel-list-ruby-delta.vercel.app/'
                target="_blank" 
                rel="noopener noreferrer"
                className="!border-2 !bg-teal-600 !text-md !text-white !border-teal-700 !w-auto !px-6 !h-12 !text-center !rounded-md"
                size="medium"
              >
                Acessar projeto
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
      
      <motion.div
        id="contato"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="flex flex-col items-center py-16 md:py-20 px-4" // Padding vertical e horizontal
      >
        {/* Caixa de contato com novo esquema de cores */}
        <div className="bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl max-w-xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            // Título "Contatos" com cor de destaque
            className="text-xl md:text-3xl font-bold text-teal-400 mb-8" // Aumentado mb
          >
            Contatos
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
            className='flex justify-center gap-8 md:gap-12' // Aumentado gap
          >
            {/* Ícones de contato com novas cores */}
            <motion.a
              href='mailto:gustavociscotto@gmail.com' target="_blank" rel="noopener noreferrer" aria-label="Enviar Email para João Gustavo"
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              className="text-slate-400 hover:text-teal-400"
            >
              <MailIcon sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.25)' } }} />
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/joao-gustavo-ferreira-canepa-0a2572226/' target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn de João Gustavo"
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.1 }}
              className="text-slate-400 hover:text-teal-400"
            >
              <LinkedInIcon sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.25)' } }} />
            </motion.a>
            <motion.a
              href='https://www.instagram.com/canepadev/' target="_blank" rel="noopener noreferrer" aria-label="Perfil no Instagram de Canepadev"
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.2 }}
              className="text-slate-400 hover:text-teal-400"
            >
              <InstagramIcon sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.25)' } }} />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut', delay: 0.5 }}
        // Footer com novo esquema de cores
        className={"text-center py-8 mt-auto border-t border-slate-700 bg-slate-900"}
      >
        <p className={"text-sm text-slate-400"}>
          &copy; {new Date().getFullYear()} João Gustavo
        </p>
      </motion.footer>
    </div>
  );
}