import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MailIcon from "@mui/icons-material/Mail";
import { motion } from "framer-motion";
import "../themes.css";

import { PaletteIcon, MenuIcon, Menu, SunIcon, MoonIcon } from "lucide-react";

export function Home() {
  const [theme, setTheme] = useState(() => {
    const storageTheme = localStorage.getItem("theme");

    return storageTheme;
  });

  function handleTheme(event) {
    event.preventDefault();

    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
      className="w-full min-h-screen items-center justify-center overflow-x-hidden flex flex-col font-sans"
      style={{
        backgroundColor: "var(--gray-900)",
        color: "var(--text-default)",
      }}
    >
      <div className="flex justify-center w-full  p-4  items-center">
        <div className="fixed  top-0 left-0 m-4 bg-none border-none "></div>
        <div className="flex items-center gap-2 justify-center">
          <img className="w-16 h-16" src="assets/react.png" />
          <h2 className="text-3xl font-bold font-sans">Portfolio</h2>

          {theme === "dark" ? (
            <button
              onClick={handleTheme}
              className="w-11 h-11 cursor-pointer ml-6"
            >
              <MoonIcon />
            </button>
          ) : (
            <button
              onClick={handleTheme}
              className="w-11 h-11 cursor-pointer ml-6"
            >
              <SunIcon />
            </button>
          )}
        </div>
      </div>

      <motion.div>
        <div className="flex flex-col-reverse justify-center items-center gap-8 mt-20 md:mt-30">
          <div className="flex flex-col w-full max-w-xs md:max-w-md text-center md:text-left items-center md:items-start gap-4 px-4">
            <h1 className="text-3xl md:text-4xl">
              Olá, meu nome é
              <span className="block md:inline font-bold text-teal-400">
                {" "}
                João Gustavo
              </span>
            </h1>
            <h2 className="text-xl md:text-2xl">E eu desenvolvo coisas!</h2>
          </div>
          <img
            className="w-48 h-48 transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer rounded-full object-cover shadow-xl border-2 border-teal-500"
            src="assets/photo.png"
            alt="Foto de João Gustavo"
          />
        </div>
      </motion.div>

      <motion.div
        id="sobremim"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.8 }}
        className="flex flex-col items-center mt-16 md:mt-24 px-4"
      >
        <div className="flex justify-center items-center md:justify-start gap-10 w-full max-w-4xl">
          <motion.div
            initial="initial"
            animate="animate"
            transition={{ staggerChildren: 0.2, delayChildren: 1.0 }}
            className="flex flex-col mb-10 gap-6 w-full md:max-w-3xl"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-lg md:text-2xl font-bold text-teal-400 text-center md:text-left"
            >
              Sobre mim
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <p className="text-base md:text-lg font-semibold leading-relaxed text-center md:text-left">
                Meu nome é João Gustavo, sou estudante do 7º período de
                Engenharia de Software na Universidade de Vassouras, Tenho
                experiência em criar soluções inteligente na área do
                desenvolvimento. Minhas habilidades técnicas incluem o
                ecossistema JavaScript (ReactJS, TypeScript, Node.js), HTML, CSS
                e Tailwind CSS. Essa base é complementada por conhecimentos em
                consumo de APIs RESTful e familiaridade com bancos de dados
                relacionais (como PostgreSQL).
              </p>
              <p className="text-base md:text-lg font-semibold leading-relaxed text-center md:text-left mt-4">
                Em todos os meus projetos, priorizo a criação de interfaces
                acessíveis e intuitivas, com foco na experiência do usuário.
                Adoto princípios de clean code e as melhores práticas de
                engenharia de software para desenvolver código manutenível e de
                alta qualidade. Utilizo Git para um controle de versão eficaz.
              </p>
            </motion.div>
            <motion.div
              initial="initial"
              animate="animate"
              transition={{ staggerChildren: 0.1, delayChildren: 0.3 }}
              className="flex flex-col items-center gap-4 mt-6"
            >
              <h3 className="text-xl font-semibold mb-2">Tecnologias</h3>
              <div className="flex items-center flex-wrap justify-center gap-4">
                <motion.img
                  src="assets/react.png"
                  alt="ReactJS Logo"
                  title="ReactJS"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 150, damping: 10 }}
                  className="w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
                />
                <motion.img
                  src="assets/node.png"
                  alt="Node.js Logo"
                  title="Node.js"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.1,
                  }}
                  className="w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
                />
                <motion.img
                  src="assets/html.png"
                  alt="HTML5 Logo"
                  title="HTML5"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.2,
                  }}
                  className="w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
                />
                <motion.img
                  src="assets/css.png"
                  alt="CSS3 Logo"
                  title="CSS3"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.3,
                  }}
                  className="w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
                />
                <motion.img
                  src="assets/js.png"
                  alt="JavaScript Logo"
                  title="JavaScript"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 10,
                    delay: 0.4,
                  }}
                  className="w-16 h-16 transform transition-transform duration-200 ease-in-out hover:scale-110 cursor-pointer"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>

      <div className="flex flex-col items-center gap-8 mb-16 md:mb-20 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-teal-400">
          Projetos Recentes
        </h2>
        <div className="flex flex-wrap justify-center gap-8 items-stretch h-full w-full max-w-6xl">
          <Card
            sx={{
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0, 128, 128, 0.3)",
              },
              maxWidth: 400,
              width: "100%",
              backgroundColor: "#1e293b",
              color: "#cbd5e1",
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="assets/download.png"
              title="Projeto Refund"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#f1f5f9" /* slate-100 */ }}
              >
                Refund
              </Typography>

              <Typography
                variant="body2"
                className="!text-md !text-slate-300 !font-sans !font-semibold"
              >
                O Refund é uma aplicação web destinada a facilitar o processo de
                solicitação de reembolsos. <br />
                Desenvolvida com tecnologias modernas, a plataforma permite que
                os usuários submetam pedidos de reembolso de forma eficiente e
                organizada.
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: "16px" }}>
              <Button
                sx={{
                  transition:
                    "transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#0d9488" /* teal-700 */,
                  },
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                target="_blank"
                href="https://refund-nine.vercel.app/"
                className="!border-2 !bg-teal-600 !text-md !text-white !border-teal-700 !w-auto !px-6 !h-12 !text-center !rounded-md"
                size="medium"
              >
                Acessar projeto
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0, 128, 128, 0.3)",
              },
              maxWidth: 400,
              width: "100%",
              backgroundColor: "#1e293b",
              color: "#cbd5e1",
            }}
          >
            <CardMedia
              sx={{ height: 200 }}
              image="assets/card.png"
              title="Cardápio de Pizzaria"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#f1f5f9" }}
              >
                Cardápio de Pizzaria
              </Typography>
              <Typography
                variant="body2"
                className="!text-md !text-slate-300 !font-sans !font-semibold"
              >
                Este é um cardápio online que exibe pizzas com seus detalhes e
                preços. A aplicação informa se a pizzaria está aberta
                (permitindo "pedidos") ou fechada e oculta itens esgotados, tudo
                em uma interface simples para consulta do menu.
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: "16px" }}>
              <Button
                sx={{
                  transition:
                    "transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#0d9488",
                  },
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                target="_blank"
                href="https://pizza-menu-mauve-pi.vercel.app/"
                variant="contained"
                className="!border-2 !bg-teal-600 !text-md !text-white !border-teal-700 !w-auto !px-6 !h-12 !text-center !rounded-md"
                size="medium"
              >
                Acessar projeto
              </Button>
            </CardActions>
          </Card>

          <Card
            sx={{
              transition:
                "transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 10px 20px rgba(0, 128, 128, 0.3)",
              },
              maxWidth: 400,
              width: "100%",
              backgroundColor: "#1e293b",
              color: "#cbd5e1",
            }}
          >
            <CardMedia
              sx={{ height: 220 }}
              image="assets/far.png"
              title="Aplicação de Viagem"
            />
            <CardContent>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "#f1f5f9" }}
              >
                Aplicação de viagem
              </Typography>
              <Typography
                variant="body2"
                className="!text-md !text-slate-300 !font-sans !font-semibold"
              >
                Este projeto é uma aplicação bem dinâmica e completo para
                gerenciar uma lista de itens que você precisa levar em uma
                viagem. Com ela, você pode adicionar, marcar como embalado e
                excluir itens da lista.
              </Typography>
            </CardContent>
            <CardActions sx={{ padding: "16px" }}>
              <Button
                sx={{
                  transition:
                    "transform 0.2s ease-in-out, backgroundColor 0.2s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    backgroundColor: "#0d9488",
                  },
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                component="a"
                href="https://travel-list-ruby-delta.vercel.app/"
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
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex flex-col items-center py-16 md:py-20 px-4"
      >
        <div className="bg-slate-800 p-8 md:p-12 rounded-xl shadow-2xl max-w-xl w-full text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeOut", delay: 0.1 }}
            className="text-xl md:text-3xl font-bold text-teal-400 mb-8"
          >
            Contatos
          </motion.h2>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.2, delayChildren: 0.2 }}
            className="flex justify-center gap-8 md:gap-12"
          >
            <motion.a
              href="mailto:gustavociscotto@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Enviar Email para João Gustavo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 150, damping: 12 }}
              className="text-slate-400 hover:text-teal-400"
            >
              <MailIcon
                sx={{
                  width: { xs: 32, md: 40 },
                  height: { xs: 32, md: 40 },
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.25)" },
                }}
              />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/joao-gustavo-ferreira-canepa-0a2572226/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no LinkedIn de João Gustavo"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 12,
                delay: 0.1,
              }}
              className="text-slate-400 hover:text-teal-400"
            >
              <LinkedInIcon
                sx={{
                  width: { xs: 32, md: 40 },
                  height: { xs: 32, md: 40 },
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.25)" },
                }}
              />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/canepadev/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil no Instagram de Canepadev"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 12,
                delay: 0.2,
              }}
              className="text-slate-400 hover:text-teal-400"
            >
              <InstagramIcon
                sx={{
                  width: { xs: 32, md: 40 },
                  height: { xs: 32, md: 40 },
                  transition: "transform 0.2s ease-in-out",
                  "&:hover": { transform: "scale(1.25)" },
                }}
              />
            </motion.a>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
