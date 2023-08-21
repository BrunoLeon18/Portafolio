
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import './style/Projects.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Projects = () => {
  return (
    <section className="container__section-projects" id="projects" >
      <div style={{overflow:'hidden'}}>
    <h2 data-aos='fade-up' data-aos-delay='500' className="projects__title"><span>pro</span><span  className="letter">yectos</span></h2>
      </div>
    <article className="container__text-projects">
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
          dynamicBullets: true,
        }}
        modules={[EffectCoverflow, Pagination]}
      >
        <SwiperSlide>
          <figure className="slider-contain" data-aos='zoom-in' data-aos-delay='500'>
            <img src="crudApp.png" alt=""  />
            <div className="slider-contain-text">
              <h3 className="slider-text">crud</h3>
              <p>
                aplicacion para la creacion de usuarios, consumiendo una api
                local.
                <a
                  href="https://crud-app-bru.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="slider-contain"  >
            <img src="ecommerce.png" alt="" data-aos='zoom-in' data-aos-delay='800' />
            <div className="slider-contain-text">
              <h3 className="slider-text">Ecommerce</h3>
              <p>
                aplicacion de un ecommerce desarrollado con javascrip.
                <a
                  href="https://app-ecommerce-bru.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="slider-contain">
            <img src="galletaDeLaSuerte.png" data-aos='zoom-in' data-aos-delay='1100' alt="" />
            <div className="slider-contain-text">
              <h3 className="slider-text">Cookie fortune</h3>
              <p>
                aplicacion web del juego de la galleta de la fortuna.
                <a
                  href="https://app-fortune-cookie-bru.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="slider-contain">
            <img src="giftExpertApp.png" data-aos='zoom-in' data-aos-delay='1400' alt=""/>
            <div className="slider-contain-text">
              <h3 className="slider-text">gift app</h3>
              <p>
                aplicacion que se utiliza para la busqueda de diferentes
                gift.
                <a
                  href="https://gif-expert-bru.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="slider-contain">
            <img src="rickAndMortyApi.png" alt="" />
            <div className="slider-contain-text">
              <h3 className="slider-text">rick and morty api</h3>
              <p>
                aplicacion que consume la API de rick and morty.
                <a
                  href="https://app-rick-and-morty-bru.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="slider-contain">
            <img src="weatherApp.png" data-aos='zoom-in' data-aos-delay='1400' alt="" />
            <div className="slider-contain-text">
              <h3 className="slider-text">weather</h3>
              <p>
                app creada para la consulta del clima consumiendo la api de
                openweathermap.
                <a
                  href="https://weather-app-bru.netlify.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="slider-contain">
            <img src="pokedex.png" alt="" data-aos='zoom-in' data-aos-delay='1100'/>
            <div className="slider-contain-text">
              <h3 className="slider-text">pokedex</h3>
              <p>
                app que sirve para la consulta de pokemones. Consumiendo la poqeu api.
                <a
                  href="https://pokedex-bru.netlify.app/#/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          <figure className="slider-contain">
            <img src="ecomercereactjs.png" alt="" data-aos='zoom-in' data-aos-delay='800'/>
            <div className="slider-contain-text">
              <h3 className="slider-text">ecommerce</h3>
              <p>
                aplicacion web de una tienda virtual consumiendo api local.
                <a
                  href="https://ecommerce-bru-rjs.netlify.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  ver
                </a>
              </p>
            </div>
          </figure>
        </SwiperSlide>
      </Swiper>
      <div className="slider-controler">
        <div className="swiper-pagination"></div>
      </div>
    </article>
  </section>
  )
}

export default Projects