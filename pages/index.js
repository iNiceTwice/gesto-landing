import Head from 'next/head'
import Image from 'next/image'
import { RiVipDiamondLine } from "react-icons/ri"
import { TbOld } from "react-icons/tb"
import { IoBriefcase, IoHome } from "react-icons/io5"
import Nav from '../components/Nav'
import Stars from "../components/RatingStars"
import { motion } from "framer-motion"
import { useEffect, useState, useRef } from "react"
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home ({ mailKey }) {

  const [ services, setServices ] = useState({
    anses:false,
    jubilacion:false,
    inmob:false
  })
  const [ width, setWidth ] = useState(0)
  const carousel = useRef()

  useEffect(()=>{
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[])

  return (
    <div>
      <Head>
        <title>Gesto</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Nav/>
        <section className='relative overflow-hidden py-32 w-full h-[55rem] bg-main text-white'>
          <div className="ocean">
            <div className="wave"></div>
            <div className="wave"></div>
          </div> 
          <div className='w-full flex flex-col lg:flex-row justify-center items-center gap-20 mt-10 md:mt-16'>
            <div className='text-center md:text-left w-fit sm:w-[28rem] px-5 lg:px-0'>
              <h1 className='text-4xl font-heading font-bold'>En <span className='cursor-pointer hover:text-secondary font-medium'>Gesto</span> te asesoramos y gestionamos tus trámites por vos.</h1>
              <p className='mt-4 font-sans text-lg'>Sin complicaciones, fácil y rápido. Enterate cómo:</p>
                <a href="#services">
                  <button className='mt-4 border border-secondary rounded-3xl py-3 px-8 font-sans bg-secondary hover:bg-transparent hover:text-secondary transition-all'>Servicios</button>
                </a>
            </div>
            <div className="-mt-10 hidden lg:block">
              <RiVipDiamondLine stroke={2} size={400} />
            </div>
          </div>
        </section>
        <section className='py-28 text-slate-800/80 w-11/12 lg:w-[40vw] text-center mx-auto'>
          <span id="about" className='relative top-[-250px]'></span>
          <h2 className='text-2xl mb-4 font-semibold font-heading text-main'>Expertos en gestiones administrativas en diversos trámites.</h2>
          <p className='font-sans text-lg mb-4'>&quot;Actuamos con responsabilidad, compromiso, seriedad y sobre todo con  amplios conocimientos en los procedimientos para agilizar los trámites, brindando asesoramiento técnico a las personas.&quot;</p>
          <div className='w-full flex justify-center mb-2'>
            <div className='rounded-full border-[3px] border-main w-fit p-4'>
              <RiVipDiamondLine className='text-main' size={35} />
            </div>
          </div>
            <p className='font-sans text-lg font-semibold'>Gesto Team</p>
        </section>
        <section className='mb-32 w-11/12 md:w-[30rem] lg:w-[60rem] xl:w-[75vw] mx-auto text-slate-800/80'>
          <span id="services" className='relative top-[-250px]'></span>
          <div className='w-full text-center my-10'>
            <h3 className='text-secondary font-semibold font-heading'>SERVICIOS</h3>
            <h2 className='text-slate-800/80 font-semibold font-heading text-xl'>Qué ofrecemos:</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6'>
            <div className={`text-slate-800/90 flex flex-col items-center gap-y-4 ${ services.anses ? "h-fit" : "h-[38rem]" } bg-slate-50 shadow-lg p-12`}>
              <div className=' p-3 mt-4'>
                <IoBriefcase className='text-main' size={40}/>
              </div>
              <h3 className='font-heading text-lg font-semibold'>Anses</h3>
              <div>
                <p className='font-sans'>
                  Si valoras tu tiempo y no lo querés perder haciendo largas colas o esperando al teléfono, dejá que nos encarguemos de los trámites y las gestiones:
                </p>
              </div>
              <ul className='w-full font-sans list-disc ml-8'>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Recibos de haberes</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Turnos</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Historial laboral</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Créditos ANSES</div>
                </li>
                {
                  services.anses ?
                  <>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Cambiar el lugar de cobro de tus prestaciones</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Fecha y lugar de cobro</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Estado de tus trámites</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Cambiar datos personales y de contacto</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Certificación negativa</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Efectuar reclamos o denuncias</div>
                    </li>
                  </>
                  : null
                  
                }
                <button onClick={ () => setServices( {...services, anses:!services.anses})} className='text-lg text-cyan-500'>{ services.anses ? "Leer menos" : "Leer más" }</button>
              </ul>
              <div className='w-full h-full flex flex-col-reverse'>
                <a href="#contact">
                  <button className='w-full py-1 rounded-xl shadow-lg border text-main border-main hover:bg-main transition-colors hover:text-white'>Contáctanos</button>
                </a>
              </div>
            </div>
            <div className={`text-slate-800/90 flex flex-col items-center gap-y-4 ${services.jubilacion ? "h-fit" : "h-[38rem]"} bg-slate-50 shadow-lg p-12`}>
              <div className=' p-3 mt-4'>
                <TbOld className='text-main' size={40}/>
              </div>
              <h3 className='font-heading text-lg font-semibold'>Jubilaciones y Pensiones</h3>
              <div>
                <p className='font-sans'>
                  Las personas mayores y los más vulnerables son nuestra <span className='font-semibold'>prioridad</span>, por eso, les facilitamos los trámites para mejorar su calidad de vida: 
                </p>
              </div>
              <ul className='w-full font-sans list-disc ml-8'>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Iniciar una jubilación/jubilación anticipada</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Pensión por discapacidad</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Retiro transitorio por invalidez</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Salario por hijos con discapacidad </div>
                </li>
                {
                  services.jubilacion ? 
                  <>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Consultar recibo de haberes</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Iniciar Pensión Universal para el Adulto Mayor</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Reclamar un beneficio no cobrado</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Iniciar una pensión por fallecimiento un jubilado/a</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Iniciar una pensión por fallecimiento de un trabajador/a</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Consulta de sentencia judicial por reajuste de haberes</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Consultar si tenés tu huella registrada</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Tramitar un poder</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Reclamar reajuste de haberes</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Rehabilitar el cobro de un beneficio previsional</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Consulta de descuentos de mutuales y otras entidades</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Segmentación energética</div>
                    </li>
                  </> : null
                }
                <button onClick={ () => setServices( { ...services, jubilacion:!services.jubilacion })} className='text-lg text-cyan-500'>{ services.jubilacion ? "Leer menos" : "Leer más" }</button>
              </ul>
              <div className='w-full h-full flex flex-col-reverse'>
                <a href="#contact">
                  <button className='w-full py-1 rounded-xl shadow-lg bg-secondary hover:bg-[#d6c50a] transition-all text-white hover:mb-1'>Contáctanos</button>
                </a>
              </div>
            </div>
            <div className={`text-slate-800/90 flex flex-col items-center gap-y-4 ${services.inmob ? "h-fit" : "h-[38rem]"} bg-slate-50 shadow-lg p-12`}>
              <div className=' p-3 mt-4'>
                <IoHome className='text-main' size={40}/>
              </div>
              <h3 className='font-heading text-lg font-semibold'>Inmobiliaria</h3>
              <div>
                <p className='font-sans'>
                  Compraste tu terreno sin documentación? Necesitas información de tu lote? Te apareció un supuesto dueño y querés saber quién es el dueño real?, <span className='font-semibold'>te averiguamos:</span>
                </p>
              </div>
              <ul className='w-full font-sans list-disc ml-8'>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Partida inmobiliaria</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Planos</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Datos catastrales</div>
                </li>
                <li className='text-main'>
                  <div className='text-slate-800/80'>Deuda/boleta de ARBA</div>
                </li>
                {
                  services.inmob ?
                  <>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Datos del titular</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Datos del destinatario de ARBA</div>
                    </li>
                    <li className='text-main'>
                      <div className='text-slate-800/80'>Valuación fiscal</div>
                    </li>
                  </> : null
                }
                <button onClick={ () => setServices( { ...services, inmob:!services.inmob })} className='text-lg text-cyan-500'>{ services.inmob ? "Leer menos" : "Leer más" }</button>  
              </ul>
              <div className='w-full h-full flex flex-col-reverse'>
                <a href="#contact">
                  <button className='w-full py-1 rounded-xl shadow-lg border text-main border-main hover:bg-main transition-colors hover:text-white'>Contáctanos</button>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className='w-11/12 lg:w-[60rem] xl:w-[75rem] mx-auto text-slate-800/80'>
          <span id="details" className='relative top-[-250px]'></span>
          <div className='w-full text-center mb-16 mt-10'>
            <h3 className='text-secondary font-semibold font-heading'>Detalles</h3>
            <h2 className='text-slate-800/80 font-semibold font-heading text-xl'>¿Por qué Gesto?</h2>
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-2'>
            <div className='h-[20rem] w-full relative p-10'>
              <Image src="/assets/computer.svg" alt="" layout='fill'/>
            </div>
            <div className='p-14 flex flex-col items-center justify-center'>
              <h2 className='w-full mb-4 text-2xl font-heading text-slate-800/90 font-semibold'>Comodidad y Seguridad</h2>
              <p className='font-sans'>Garantizamos de manera transparente todas nuestras gestiones y nos adecuamos a su comodidad brindando nuestros servicios a través de internet.</p>
              <ul className='w-full flex flex-col gap-2 font-sans mt-4'>
                <li><span className='font-semibold'>Comodidad:</span> Simple, nos encargamos de todo por usted.</li>
                <li><span className='font-semibold'>Seguridad:</span> Compartimos en todo momento el procedimiento.</li>
              </ul>
            </div>
          </div>
        </section>
        <section className='my-8 lg:my-16 grid grid-cols-1 lg:grid-cols-2 w-11/12 lg:w-[60rem] xl:w-[75rem] mx-auto text-slate-800/80'>
          <div className='p-14 flex flex-col items-center justify-center'>
            <h2 className='w-full mb-4 text-2xl font-heading text-slate-800/90 font-semibold'>Versatilidad, Eficiencia y Rapidez</h2>
            <p className='font-sans'>Ofreciendo soluciones específicas a las necesidades de cada cliente, con un trato directo, profesional y personalizado.</p>
            <ul className='w-full flex flex-col gap-2 font-sans mt-4'>
              <li><span className='font-semibold'>Versatilidad:</span> Evaluamos cada caso y asesoramos con las mejores alternativas.</li>
              <li><span className='font-semibold'>Eficiencia:</span> Personal calificado en gestiones administrativas en diversos trámites.</li>
              <li><span className='font-semibold'>Rapidez:</span> En tan solo cuestión de horas.</li>
            </ul>
          </div>
          <div className='h-[20rem] w-full relative p-10'>
            <Image alt="" src="/assets/cloud.svg" layout='fill'/>
          </div>
        </section>
        <section className="mt-32 mb-32 px-5 lg:px-16 xl:px-40 text-slate-800/90">
          <span id="testimonials" className='relative top-[-250px]'></span>
          <div className='w-full text-center my-10'>
            <h3 className='text-secondary font-semibold font-heading'>TESTIMONIOS</h3>
            <h2 className='text-slate-800/80 font-semibold font-heading text-xl'>Clientes contentos</h2>
          </div>
            <motion.div 
                ref={ carousel } 
                whileTap={{ cursor:"grabbing" }}
                className="cursor-grab overflow-hidden w-full"
            >
                <motion.div 
                    className="flex lg:mt-10 p-6 gap-x-16"
                    dragConstraints={{ right:0, left:-width }}
                    drag="x"
                >
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[20rem] min-w-[20rem] md:w-[25rem] md:min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">Susana J.</h2>
                        <Stars filled={5}/>
                        <p className="font-medium font-sans">Se que esta fue una tramitación más para Uds, pero para mi fue muy importante, nunca pense que me saldria. Estoy muy contenta y agradecida, por su dedicación y la amabilidad con que fui atendida. Es por esto que le dejo este pequeño presente como muestra de mi agradecimiento.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[20rem] min-w-[20rem] md:w-[25rem] md:min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">Oscar M.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Habiendo recibido mi primer aporte jubilatorio, quiero agradecerles, su rápida y eficiente gestión.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[20rem] min-w-[20rem] md:w-[25rem] md:min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">David H.</h2>
                        <Stars filled={5}/>
                        <p className="font-medium font-sans">Para mi significa mucha felicidad y agradecimiento. Estuve desde el 2019 esperando esta pensión. Tengo un problema en la columna, una escoliosis avanzada que afectan también a mis piernas y pies.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[20rem] min-w-[20rem] md:w-[25rem] md:min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">Alicia C.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Compré un terreno y la cantidad de trámites y dudas que tuve me superaron. Doy gracias a Gesto por acompañarme en el proceso y brindarme toda la información que necesitaba.</p>
                    </motion.div>
                    <motion.div className="flex flex-col gap-y-3 rounded-md shadow-lg p-8 h-full w-[20rem] min-w-[20rem] md:w-[25rem] md:min-w-[25rem] lg:w-[35rem] lg:min-w-[35rem] text-slate-800/90"> 
                        <h2 className="font-heading font-semibold text-2xl ">Mariana L.</h2>
                        <Stars filled={4}/>
                        <p className="font-medium font-sans">Me recomendaron Gesto cuando diagnosticaron a mi hijo con Asperger. Pude conseguir una ayuda económica gracias a ellos y llego a fin de mes más tranquila.</p>
                    </motion.div>
                </motion.div>
            </motion.div>
        </section>
        <section className='my-8 lg:my-16 w-11/12 lg:w-[60rem] xl:w-[75rem] mx-auto text-slate-800/80'>
          <span id="contact" className='relative top-[-250px]'></span>
          <div className='w-full text-center my-10'>
            <h3 className='text-secondary font-semibold font-heading'>CONTACTO</h3>
            <h2 className='font-semibold font-heading text-xl'>Resolvamos ese problema</h2>
            <p>Escribinos desde acá o también a <a className='text-cyan-500' href='mailto:gesto.solucionesok@gmail.com'>gesto.solucionesok@gmail.com</a></p>
          </div>
          <Contact mailKey={ mailKey } />    
        </section>
        <Footer/>
      </main>
    </div>
  )
}

export const getServerSideProps = () => {
  const MAIL_KEY = process.env.MAIL_KEY

  return {
    props:{
      mailKey: MAIL_KEY
    }
  }
}
