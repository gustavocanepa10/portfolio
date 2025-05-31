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
    <div className='w-full text-gray-100 bg-gray-900 min-h-screen  justify-center overflow-x-hidden flex flex-col font-sans'>

      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
        className='sticky top-0 z-50 flex justify-center text-gray-100 w-full rounded-md bg-gray-800 border-b border-gray-700  p-3  items-center shadow-lg'
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
      <div>
        
      </div>
      
        
            
            
      <motion.div
        id="sobremim"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut', delay: 0.8 }}
        className='flex flex-col items-center mt-16 md:mt-20 ml-20'
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
              className='text-2xl md:text-3xl font-bold text-center md:text-left'
            >
              Sobre mim
            </motion.h1>
            
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              <p className='text-base md:text-lg font-semibold leading-relaxed text-gray-300 text-center md:text-left'>
                Meu nome é João Gustavo, sou estudante do 7º período de Engenharia de Software na Universidade de Vassouras, um entusiasta da criação de soluções de software eficientes e apaixonado por desenvolvimento Front-End. Minhas habilidades técnicas incluem o ecossistema JavaScript (ReactJS, TypeScript, Node.js), HTML, CSS e Tailwind CSS. Essa base é complementada por conhecimentos em Python para automação de processos, design e consumo de APIs RESTful, e familiaridade com bancos de dados relacionais (como PostgreSQL) e NoSQL (como MongoDB).
              </p>
              <p className='text-base md:text-lg font-semibold leading-relaxed text-gray-300 text-center md:text-left mt-4'>
                Em todos os meus projetos, priorizo a criação de interfaces acessíveis e intuitivas, com foco na experiência do usuário. Adoto princípios de clean code e as melhores práticas de engenharia de software para desenvolver código manutenível e de alta qualidade. Utilizo Git para um controle de versão eficaz.
              </p>
            </motion.div>
            <motion.div
              initial="initial" 
              animate="animate" 
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              className='flex flex-col items-center gap-4'
            >
              <div className='flex mt-4 items-center flex-col gap-4 flex-wrap justify-center'>
               
                <div className='flex gap-4'>
                  <motion.img
                  src="assets/react.png" alt="ReactJS Logo" title="ReactJS Logo"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/node.png" alt="Node.js Logo" title="Node.js Logo"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.1 }} 
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/html.png" alt="HTML5 Logo" title="HTML5 Logo"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.2 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/css.png" alt="CSS3 Logo" title="CSS3 Logo"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.3 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />
                <motion.img
                  src="assets/js.png" alt="JavaScript Logo" title="JavaScript Logo"
                  initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 150, damping: 10, delay: 0.4 }}
                  className='w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer'
                />

                </div>
                
                
                
               
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>


      <div className='flex gap-8 flex-col mb-10 justify-center ml-60 '>
        <h2 className='text-3xl font-bold'>
          Projetos recentes
        </h2>
        <div className='flex gap-8 items-center h-full w-full'>
       
        

        <Card sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' }, maxWidth: 400 }}>

          <CardMedia

            sx={{ height: 200 }}

            image="assets/download.png"

            title="green iguana"

          />

          <CardContent  >

            <Typography gutterBottom variant="h5" component="div">

              Refund

            </Typography>

            <Typography className='!text-md !text-black !font-sans  !font-semibold' variant="body2" sx={{ color: 'text.secondary' }}>

              O Refund é uma aplicação web destinada a facilitar o processo de solicitação de reembolsos. <br>

              </br>Desenvolvida com tecnologias modernas, a plataforma permite que os usuários submetam pedidos de reembolso de forma eficiente e organizada.

            </Typography>

          </CardContent>

          <CardActions>



            <Button sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' } }} target='_blank' 
            href='https://refund-nine.vercel.app/' 
            className="!border-2 !bg-blue-700 !text-md !text-white !border-blue-800 !w-44 !h-12 !ml-3 !text-center !rounded-md" size="medium">Acessar projeto</Button>









          </CardActions>

        </Card>

        <Card sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' }, maxWidth: 400 }}>

          <CardMedia

            sx={{ height: 200 }}

            image="assets/card.png"

            title="green iguana"

          />

          <CardContent>

            <Typography gutterBottom variant="h5" component="div">

              Cardápio de Pizzaria

            </Typography>

            <Typography className='!text-md !text-black !font-sans !font-semibold' variant="body2" sx={{ color: 'text.secondary' }}>

              Este é um cardápio online que exibe pizzas com seus detalhes e preços. A aplicação informa se a pizzaria está aberta (permitindo "pedidos") ou fechada e oculta itens esgotados, tudo em uma interface simples para consulta do menu.

            </Typography>

          </CardContent>

          <CardActions>

            <Button sx={{ marginLeft: 2, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' } }} target='_blank' href='https://pizza-menu-mauve-pi.vercel.app/' variant='contained' className="!border-2 !bg-blue-700 !text-md !text-white !border-blue-800 !w-44 !h-12 !p-2 !text-center !rounded-md"

              size="medium">Acessar projeto</Button>



          </CardActions>

        </Card>

        <Card sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' }, maxWidth: 400 }}>

          <CardMedia

            sx={{ height: 220 }}

            image="assets/far.png"

            title="green iguana"

          />

          <CardContent>

            <Typography gutterBottom variant="h5" component="div">

              Aplicação de viagem

            </Typography>

            <Typography className='!text-md !text-black !font-sans !font-semibold' variant="body2" sx={{ color: 'text.secondary' }}>

              Este projeto é uma aplicação bem dinâmica e completo para gerenciar uma lista de itens que você precisa levar em uma viagem. Com ela, você pode adicionar, marcar como embalado e excluir itens da lista.

            </Typography>

          </CardContent>

          <CardActions>



            <Button

              sx={{ transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)' } }}

              component="a" 

              href='https://travel-list-ruby-delta.vercel.app/'



              target="_blank" 

              rel="noopener noreferrer" // Opcional: recomendado por segurança ao usar target="_blank"

              className="!border-2 !bg-blue-700 !text-md !text-white !border-blue-800 !w-44 !h-12 !ml-3 !text-center !rounded-md"

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
        className="flex flex-col items-center py-16 md:py-20 px-4"
      >
        <div className="bg-gray-800 p-8 md:p-12 rounded-xl shadow-2xl max-w-xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.1 }}
            className="text-xl md:text-3xl font-bold text-gray-100 mb-6"
          >
            Contatos
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
            className='flex justify-center gap-6 md:gap-10'
          >
            
            <motion.a
              href='mailto:gustavociscotto@gmail.com' target="_blank" rel="noopener noreferrer" aria-label="Enviar Email para João Gustavo"
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12 }}
              className="text-gray-400 hover:text-blue-400"
            >
              <MailIcon sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.25)' } }} />
              <p></p>
            </motion.a>
            <motion.a
              href='https://www.linkedin.com/in/joao-gustavo-ferreira-canepa-0a2572226/' target="_blank" rel="noopener noreferrer" aria-label="Perfil no LinkedIn de João Gustavo"
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.1 }} // Adicionando delay manual para stagger
              className="text-gray-400 hover:text-blue-400"
            >
              <LinkedInIcon sx={{ width: { xs: 32, md: 40 }, height: { xs: 32, md: 40 }, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.25)' } }} />
            </motion.a>
            <motion.a
              href='https://www.instagram.com/canepadev/' target="_blank" rel="noopener noreferrer" aria-label="Perfil no Instagram de Canepadev"
              initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ type: 'spring', stiffness: 150, damping: 12, delay: 0.2 }}
              className="text-gray-400 hover:text-blue-400"
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
        className={"text-center py-8 mt-auto border-t border-gray-700 bg-gray-800"}
      >
        <p className={"text-sm text-gray-400"}>
          &copy; {new Date().getFullYear()} João Gustavo
        </p>
      </motion.footer>
    </div>
  );
}