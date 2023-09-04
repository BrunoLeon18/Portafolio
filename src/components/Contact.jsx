import "./style/Contact.css";
import FormContact from "./Contact/FormContact";

const Contact = () => {
  return (
    <section className="container__section-contact" id="contact"  >
      <div className="contact__group">
        <div className="contact__title" style={{overflow:'hidden'}}>
          <h2>
            <span data-aos='fade-down' data-aos-delay='300'>con</span><span data-aos='fade-right' data-aos-delay='500'>tac</span>
            <span className="letter" data-aos='fade-up' data-aos-delay='700'>to</span>
          </h2>
        </div>
        <article className="contact__info">
          <div className="contact__paragraph" >
            <p className="contact__par" data-aos='fade-left'>
              Gracias por visitar mi pagina de contacto. Si estas interesado de
              contar con mis servicios o en colaborar en un proyecto estaré
              encantado de escucharte. Espero que podamos trabajar juntos.
            </p>
              <a className="curriculum" href="./CurriculunVitaeBrunoLeon2023.pdf" data-aos='fade-right' target="_blank" rel="noreferrer"><span>cv</span><i className='bx bx-download'></i></a>
            <div className="contact__social" >
              <span className="contact__linkedin" data-aos='zoom-in' data-aos-delay='500'>
              <a href="https://www.linkedin.com/in/bruno-leon-calderon-46046a212/" target="_blank" rel="noreferrer"> <i className="bx bxl-linkedin" ></i></a>
              </span>
              <span className="contact__github" data-aos='zoom-in' data-aos-delay='800'>
              <a href="https://github.com/BrunoLeon18" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
              </span>
              <span className="contact__gmail" data-aos='zoom-in' data-aos-delay='1100'>
              <a href="mailto:brunoleoncalderon18@gmail.com" target="_blank" rel="noreferrer"><i className="bx bxl-gmail"></i></a>
              </span>
            </div>
          </div>
          <FormContact />
        </article>
      </div>
    </section>
  );
};

export default Contact;
