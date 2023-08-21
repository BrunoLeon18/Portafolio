
import { useEffect} from "react";
import "./style/Container.css";
import AOS from "aos";
import 'aos/dist/aos.css';





const Container = () => {
 
  useEffect(() => {
    AOS.init({
      duration:1500,
    });
    // return () => {
    //   AOS.refresh(); // Limpia las animaciones
    // };
  }, [])


  return (
    <section  className="container " id="home" >
      <div className= 'container__section ' >
        <article className="container__text">
          <div className="text__contain__primary">
            <span className='text__primary'   data-aos="fade-right">Hola, soy</span>
          </div>
          <div className="text__contain__name">
            <h2 className="text__name " data-aos="fade-up" data-aos-delay="500">Bruno</h2>
          </div>
          <div className="text__contain__description">
            <span className="text__description aos-item" data-aos="fade-left" data-aos-delay="1000">Desarrollador web</span>
            <span className="text__secondary aos-item" data-aos="fade-left" data-aos-delay="1500">frontend</span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Container;
