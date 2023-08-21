import emailjs from '@emailjs/browser';
import { useForm } from "react-hook-form";

const FormContact = () => {

    const {
        handleSubmit,
        register,
        formState: { errors },
      } = useForm();
    
      const submit = (data, e) => {
        emailjs.sendForm('service_pi0p8wb','template_ps1agxd',e.target,'GeQQ1RujTSZH-tcA7')
        .then(res => console.log(res.text))
        .catch(err => console.log(err.text))
        e.target.reset()
      };
  return (
    <>
    <form onSubmit={handleSubmit(submit)} className="form__contact" autoComplete='off' data-aos='fade-up'>
            <div className="form__group">
              <input
                {...register("user_name", { required: "Nombre es requerido" })}
                className="form__input"
                name="user_name"
                type="text"
                placeholder="Nombre"
                maxLength={60}
              />
              <p className='form__error' >{errors.user_name?.message}</p>
            </div>
            <div className="form__group">
              <input
                {...register("user_email" , { required: "Email es requerido" }) }
                className="form__input"
                name="user_email"
                type="email"
                placeholder="Email"
              />
              <p className='form__error' >{errors.user_email?.message}</p>
            </div>
            <div className="form__group">
              <input
                {...register("user_phone", { required: "Telefono es requerido"})}
                className="form__input"
                name="user_phone"
                type="text"
                placeholder="Telefono"
                maxLength={20}
              />
              <p className='form__error' >{errors.user_phone?.message}</p>
            </div>
            <div className="form__group">
              <input
                {...register("message" , { required: "Mensaje es requerido" })}
                className="form__input"
                name="message"
                type="text"
                placeholder="Mensaje"
              />
               <p className='form__error' >{errors.message?.message}</p>
            </div>
            <input className="form__btn" type="submit" value="Enviar" />
          </form>
          </>
  )
}

export default FormContact