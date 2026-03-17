import fotoPerfil from "/assets/imagem/barbara.jpeg";
import fotoSobre from "/assets/imagem/barbara2.jpeg";
import quizPrint from "/assets/imagem/quiz-print.png";

function App() {
  const whatsappLink =
    "https://wa.me/5535998231715?text=Olá%20Bárbara,%20vim%20pelo%20seu%20portfólio%20e%20gostaria%20de%20fazer%20um%20orçamento%20de%20serviço%20freelancer.";

  return (
    <>
      <header>
        <div className="interface">
          <div className="logo">
            <a href="#home">
              <h1>
                Bárbara Lima Marques <span>.Dev</span>
              </h1>
            </a>
          </div>

          <nav className="menu">
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#sobre">Sobre</a></li>
              <li><a href="#projetos">Projetos</a></li>
              <li><a href="#habilidades">Habilidades</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="topo-do-site">
          <div className="interface">
            <div className="flex">
              <div className="texto">
                <h2>
                  Transformando Ideias em <br />
                  <span>Realidade Digital.</span>
                </h2>
                <p>
                  Sou Bárbara Lima Marques, desenvolvedora Front-End dedicada à
                  criação de interfaces modernas, responsivas e eficientes.
                </p>
                <a href="#contato" className="botao">
                  Entrar em Contato
                </a>
              </div>

              <div className="imagem">
                <img src={fotoPerfil} alt="Foto de perfil" />
              </div>
            </div>
          </div>
        </section>

        <section id="sobre" className="sobre">
          <div className="interface">
            <div className="sobre-flex">
              <div className="sobre-img">
                <img
                  src={fotoSobre}
                  alt="Foto de Bárbara Lima Marques"
                />
              </div>

              <div className="sobre-txt">
                <h2>
                  Muito prazer,
                  <br />
                  <span>Sou Bárbara Lima Marques.</span>
                </h2>

                <p>
                  Sou graduanda em <strong>Ciência da Computação</strong> pela
                  Universidade Federal de Alfenas (UNIFAL-MG) e entusiasta do
                  ecossistema Front-End. Meu foco é transformar layouts
                  complexos em interfaces funcionais, priorizando a
                  acessibilidade e a performance.
                </p>

                <p>
                  Atualmente, dedico meus estudos ao desenvolvimento Front-end
                  com foco em JavaScript moderno, HTML5 e CSS3. Busco minha
                  primeira oportunidade profissional, seja como estagiária ou
                  desenvolvedora júnior, onde eu possa aplicar meus
                  conhecimentos acadêmicos em projetos reais e continuar
                  evoluindo tecnicamente. Tenho familiaridade com desenvolvimento
                  de interfaces responsivas, consumo de APIs REST, versionamento
                  de código utilizando Git e GitHub, além de boas práticas de
                  organização de código e estruturação de interfaces web.
                </p>

                <p>
                  Moro em Alfenas – MG, mas estou aberta a oportunidades remotas
                  e desafios que me permitam criar experiências digitais
                  memoráveis.
                </p>

                <div className="filosofia-box">
                  <p>
                    <em>
                      "Filosofia de vida: 'O amanhã é criado hoje'. Movida pela
                      curiosidade de entender como as coisas funcionam e pela
                      necessidade de otimizá-las."
                    </em>
                  </p>
                </div>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  className="freelancer-cta"
                >
                  💼 Ofereço serviços freelancer para criação de sites pessoais e
                  para demais demandas. Clique aqui para solicitar um orçamento
                  pelo WhatsApp.
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="habilidades" className="habilidades">
          <div className="interface">
            <h2 className="titulo">
              Minhas <span>Habilidades.</span>
            </h2>

            <div className="flex-habilidades">
              <div className="habilidades-card">
                <i className="fa-solid fa-code"></i>
                <h3>Hard Skills</h3>
                <p>C#, Java, Python, SQL e MySQL.</p>
                <p>React, Node.js, JavaScript, HTML5 e CSS3.</p>
                <p>
                  <strong>Inglês:</strong> Intermediário.
                </p>
              </div>

              <div className="habilidades-card">
                <i className="fa-solid fa-diagram-project"></i>
                <h3>Metodologias Ágeis</h3>
                <p>Scrum, Kanban e Trello, para gestão de projetos.</p>
              </div>

              <div className="habilidades-card">
                <i className="fa-solid fa-lightbulb"></i>
                <h3>Soft Skills</h3>
                <ul>
                  <li>Observadora e Atenciosa.</li>
                  <li>Dedicada e Simpática.</li>
                  <li>Pontual e Prestativa.</li>
                  <li>Disposta sempre a aprender tecnologias novas.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="projetos" className="projetos">
          <div className="interface">
            <h2 className="titulo">
              Meus <span>Projetos.</span>
            </h2>

            <div className="flex-projetos">
              <div
                className="img-port"
                style={{
                  backgroundImage: `url(${quizPrint})`,
                }}
              >
                <div className="overlay">
                  <h3>Quiz de Tecnologia</h3>
                  <p>Aplicação interativa desenvolvida com React e Vite.</p>
                  <a
                    href="https://blm23.github.io/dev-quiz/"
                    target="_blank"
                    rel="noreferrer"
                    className="btn-link"
                  >
                    Ver Projeto
                  </a>
                </div>
              </div>

              <div
                className="img-port"
                style={{ backgroundColor: "#111", border: "1px dashed #333" }}
              >
                <div className="overlay">
                  <h3>Em breve</h3>
                  <p>Novo projeto em desenvolvimento.</p>
                  <a href="#" className="btn-link desativado">
                    Aguarde
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="contato">
          <div className="interface">
            <h2 className="titulo">
              Meus <span>Contatos.</span>
            </h2>

            <div className="flex-contato">
              <div className="contato-box">
                <i className="fa-regular fa-envelope"></i>
                <p>
                  <a href="mailto:barbara.marques@sou.unifal-mg.edu.br">
                    barbara.marques@sou.unifal-mg.edu.br
                  </a>
                </p>
              </div>
            </div>

            <div className="flex-contato">
              <div className="contato-box">
                <i className="fa-brands fa-whatsapp"></i>
                <p>
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp para orçamento freelancer
                  </a>
                </p>
              </div>
            </div>

            <div className="social-contato">
              <a
                className="social-btn"
                href="https://github.com/blm23"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <i className="fa-brands fa-github"></i>
              </a>

              <a
                className="social-btn"
                href="https://www.linkedin.com/in/bárbara-marques-5a61aa258/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fa-brands fa-linkedin-in"></i>
              </a>

              <a
                className="social-btn"
                href="https://www.instagram.com/barbaramarques0623?igsh=MWxtenQzMzJmNnFzdA=="
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                className="social-btn"
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="rodape">
        <p>Bárbara Lima Marques.</p>
      </footer>
    </>
  );
}

export default App;