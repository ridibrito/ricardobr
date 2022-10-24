import { useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import emailjs from '@emailjs/browser'

export default function Servicos() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [showAlert, setShowAlert] = useState(false)

  function sendEmail(e:any) {
    e.preventDefault()
   
    const templateParams = {
        from_name: name,
        message: message, 
        email:email
    }
    emailjs.send('service_j8yyfoo', 'template_zal6bkg', templateParams, 'RLfOeuYn3BknIPh4H')
    .then((response) => {
        setName('')
        setEmail('')
        setMessage('')  
        setShowAlert(true)
          
    }, (err) => {
        console.log('Erro',err)
    })
   
  }
  

  return (
    <>
      <div className="bg-gray-800">
        <Navbar />
        {showAlert ? <div className="bg-green-100 rounded py-5 px-6 mb-3 text-base text-green-700 inline-flex items-center w-full" role="alert">
            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="check-circle" className="w-4 h-4 mr-2 fill-current" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"></path>
            </svg>
            Mensagem enviada com sucesso - Em breve entraremos em contato!
        </div> : ''}
        <section className="bg-gradient-to-b from-gray-800 to-gray-700  bg-white dark:bg-gray-900">
          <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-300 dark:text-white">
              Solicite sua cotação
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
              Informe o máximo de informações possíveis, para que eu minha
              equipe possamos preparar a melhor solução.
            </p>
            <form onSubmit={sendEmail} className="space-y-8">
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Seu nome
                </label>
                <input
                  type="text"
                  className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Digite seu nome ou da empresa"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-300"
                >
                  Seu email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Digite seu email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="block mb-2 text-sm font-medium text-gray-300 dark:text-gray-400"
                >
                  Informações
                </label>
                <textarea
                  id="message"
                  className="block p-2.5 w-full h-32 text-sm text-gray-900    bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Informe a quantidade de funcionários, plano atual ou apenas informe data e hora para que possamos conversar por telefone( a ligação consiste em entender tais informações e montar a melhor proposta para sua empresa)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                type="submit"
                className="py-3 px-8 w-full shadow text-sm font-semibold text-center text-white rounded bg-primary-blue  hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}
