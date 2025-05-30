import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';


import { Link, useNavigate } from 'react-router';



export function Home() {
  const navigate = useNavigate()
  return (
    <div className='w-full h-max overflow-x-hidden flex flex-col font-sans'>
      
  <nav className='flex text-black w-full rounded-md shadow-2xs gap-4 bg-white pr-30 p-6 justify-between'> 
    <div className='flex gap-4 items-center'>
      <img className='w-12 h-11' src="assets/img2.png" alt="" />
      <h1 className=' text-3xl font-sans'>João Gustavo</h1>
    </div>
      <ul className=" flex gap-8 justify-around items-center list-none m-0 p-0">
        <li>
          <button
            onClick={() => navigate("/")}
            className=" hover:text-blue-800 cursor-pointer text-lg font-medium transition-colors duration-300" 
          >
            Home
          </button>
        </li>
        <li>
          <button
           
            className=" hover:text-blue-800 cursor-pointer text-lg font-medium transition-colors duration-300"
          >
            Sobre mim
          </button>
        </li>
        <li>
          <a
            href="#projetos"
            className=" hover:text-blue-800 text-lg font-medium transition-colors duration-300"
          >
            Projetos
          </a>
        </li>
        <li >
        <a href='#contato' className=" hover:text-blue-800 cursor-pointer  p-2 text-lg font-medium transition-colors duration-300">
          Contato

        </a>
          
        </li>
        
      </ul>
      
    </nav>
    <div className='flex flex-col gap-6 justify-center items-center mt-8'>
      <h1 className='text-2xl font-semibold'>
        João Gustavo - Desenvolvedor de software
      </h1>
      <h1 className='text-lg w-2xl font-semibold'>
        Apaixonado por tecnologia e inovação, tenho experiência em desenvolver soluções para websites e aplicações web de diferentes escalas e complexidades.
      </h1>
      
         
          <h2 className="text-2xl mt-4 font-semibold">
            Entre em contato comigo 🚀
          </h2>
           <div>
            <a href='mailto:gustavociscotto@gmail.com'>
            <MailIcon sx={{width: 100,height: 50, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)',  },}}/>
            </a>
           <a href='https://www.linkedin.com/in/joao-gustavo-ferreira-canepa-0a2572226/'>
           <LinkedInIcon  sx={{width: 100,height: 50, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)',  },}}/>
           </a>
           <a href='https://www.instagram.com/canepadev/'> <InstagramIcon  sx={{width: 100,height: 50, transition: 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)',  },}}/></a>
          </div>
    </div>
    <div>
      <img src="" alt="" />
    </div>
    <div className='flex gap-8 flex-col justify-center ml-60 mt-5'>
      
        <h2 className='text-3xl font-semibold'>
          Projetos recentes
        </h2>
      
      <div className='flex gap-8 items-center  w-full'>
        <Card sx={{ maxWidth: 400 }}>
      <CardMedia
        sx={{ height: 200 }}
        image="assets/download.png"
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Refund
        </Typography>
        <Typography className='!text-md !text-black !font-sans  !font-semibold' variant="body2" sx={{ color: 'text.secondary' }}>
         O Refund é uma aplicação web destinada a facilitar o processo de solicitação de reembolsos. <br>
         </br>Desenvolvida com tecnologias modernas, a plataforma permite que os usuários submetam pedidos de reembolso de forma eficiente e organizada.
        </Typography>
      </CardContent>
      <CardActions>
        
           <Button sx={{transition : 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)'}}}  target='_blank' href='https://refund-nine.vercel.app/' className= "!border-2  !bg-blue-700 !text-md  !text-white !border-blue-800 !w-44 !h-12 !p-2 !text-center !rounded-md" size="medium">Acessar projeto</Button>

        
       
       
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 430 }}>
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
       <Button sx={{transition : 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)'}}}  target='_blank' href='https://pizza-menu-mauve-pi.vercel.app/' variant='contained' className= "!border-2  !bg-blue-700 !text-md   !text-white !border-blue-800 !w-44 !h-12 !p-2 !text-center !rounded-md"  
       size="medium">Acessar projeto</Button>
        
      </CardActions>
    </Card><Card sx={{ maxWidth: 430 }}>
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
        sx={{transition : 'transform 0.2s ease-in-out', '&:hover': { transform: 'scale(1.1)'}}} 
        component="a" // Diz ao MUI para renderizar o botão como uma tag <a>
        href='https://travel-list-ruby-delta.vercel.app/'
        
        target="_blank" // Opcional: para abrir em uma nova aba
        rel="noopener noreferrer" // Opcional: recomendado por segurança ao usar target="_blank"
        className="!border-2 !bg-blue-700 !text-md !text-white !border-blue-800 !w-44 !h-12 !p-2 !text-center !rounded-md"
        size="medium"
>
  Acessar projeto
</Button>
       
      </CardActions>
    </Card>

      </div>
      
      
    </div>
</div>

  )
}

