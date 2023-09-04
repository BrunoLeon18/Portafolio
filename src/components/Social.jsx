import './style/Social.css'


const Social = () => {
  return (
    <div>
      <span className="social__linkedin"  >
       <a href="https://www.linkedin.com/in/bruno-leon-calderon-46046a212/" target="_blank" rel="noreferrer"><i className="bx bxl-linkedin" ></i></a>
      </span>
      <span className="social__github" >
        <a href="https://github.com/BrunoLeon18" target="_blank" rel="noreferrer"><i className="bx bxl-github"></i></a>
      </span>
      <span className="social__gmail" >
        <a href="mailto:brunoleoncalderon18@gmail.com" target="_blank" rel="noreferrer"><i className='bx bxl-gmail'></i></a>
      </span>
    </div>
  );
};

export default Social;
