import "./style/AboutMe.css";

const AboutMe = () => {
  return (
    <section className="container__section-about" id="about">
      <article className="container__text-about">
        <h2 className="about__title" style={{ overflow: "hidden" }}>
          <span data-aos="fade-right">s</span>
          <span data-aos="fade-right">ob</span>
          <span data-aos="fade-right">
            <span>re</span>
          </span>
          <span className="about__title-me" data-aos="fade-right">
            mi
          </span>
        </h2>
        <div className="about__description__skills">
          <p
            className="about__description"
            style={{ overflow: "hidden" }}
          >
            <div data-aos="fade-left">
              <span>Soy un desarrollador frontend con una pasión</span>
            </div>
            <div data-aos="fade-left" data-aos-delay='200'>
              <span > por crear interfaces web asombrosas y funcionales.</span>
            </div>
            <div data-aos="fade-left" data-aos-delay='400'>
              <span >Con sólidos conocimientos en HTML, CSS y JavaScript, </span>
            </div>
            <div data-aos="fade-left" data-aos-delay='600'>
              <span > junto con experiencia en bibliotecas como React,</span>
            </div>
            <div data-aos="fade-left" data-aos-delay='800'>
              <span > me esfuerzo por combinar diseño y tecnología para</span>
            </div>
            <div data-aos="fade-left" data-aos-delay='1000'>
              <span > ofrecer experiencias digitales cautivadoras. Mi  </span>
            </div>
            <div data-aos="fade-left" data-aos-delay='1200'>
              <span > objetivo es convertir ideas en realidad através de la </span>
            </div>
            <div data-aos="fade-left" data-aos-delay='1400'>
              <span>programación creativa y la colaboración efectiva.</span>
            </div>
            <div data-aos="fade-left" data-aos-delay='1600'>
              <span >¡Bienvenido a mi mundo de desarrollo web!</span>
            </div>
          </p>
          <div className="skills" style={{overflow:'hidden'}}>
            <h2 className="skills__title" data-aos="fade-right">skills</h2>
            <ul className="about__list-skills">
              <li className="skills__html items" data-aos="fade-right" data-aos-delay='100'>HTML</li>
              <li className="skills__css items" data-aos="fade-right" data-aos-delay='200'>CSS</li>
              <li className="skills__rwd items" data-aos="fade-right" data-aos-delay='300'>rwd</li>
              <li className="skills__js items" data-aos="fade-right" data-aos-delay='400'>JavaScript</li>
              <li className="skills__react items" data-aos="fade-right" data-aos-delay='500'>React</li>
              <li className="skills__git items" data-aos="fade-right" data-aos-delay='600'>git</li>
              <li className="skills__redux items" data-aos="fade-right" data-aos-delay='700'>Redux</li>
            </ul>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutMe;
