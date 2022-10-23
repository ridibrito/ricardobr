import type { NextPage } from 'next'
import Link from 'next/link'
import Clientes from '../components/Clientes'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Parceiros from '../components/Parceiros'
import Processos from '../components/Processos'
import Produtos from '../components/Produtos'
import Video from '../components/Video'

const Home: NextPage = () => {
  return (
    <div className="h-screen bg-fixed bg-center bg-cover custom-img">
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/50 z-[2]">
        <Navbar />

        <div className="h-1/3"></div>

        <h1 className="text-center font-bold text-3xl sm:text-5xl mx-5 mb-5 sm:max-w-2xl text-white sm:mx-auto sm:mt-20">
          Consultoria comercial para sua empresa e sua familia.
        </h1>
        <h4 className="text-center text-sm font-semibold text-gray-300">
          Construindo futuros seguros desde 2010
        </h4>
        <div className=" sm:flex sm:justify-center max-w-5xl mx-auto text-center space-y-3 sm:space-y-0 mt-2 sm:gap-3">
          <button className="bg-primary-blue hover:shadow-white/30 shadow-2xl ease-in duration-150 text-white text-sm rounded w-11/12 sm:w-2/6 px-4 py-3">
            Fale comigo
          </button>
          <button className="bg-transparent border-2 text-sm hover:shadow-white/30 shadow-2xl ease-in duration-150  border-primary-blue text-primary-blue w-11/12 sm:w-2/6 px-4 py-3 font-semibol">
            Solicite uma cotação
          </button>
        </div>
        <h4 className="text-sm text-center mt-3 text-gray-400">
          Baixe gratuitamente o e-book{' '}
          <Link href="/">
            <a target="_blank">
              <q className="underline cursor-pointer">
                como contratar um plano de saúde
              </q>
            </a>
          </Link>
        </h4>
        <div className='mt-16'>
          <Produtos />
        </div>
        <div>
          <h4 className='text-center  text-gray-500 mt-32 font-serif mx-3'>Equipes administrativa, comercial e técnica próprias.</h4>
          <h1 className='text-xl font-semibold text-primary-blue text-center mt-2 sm:max-w-3xl sm:mx-auto mx-5'>A nossa equipe está pronta para atender à demandas de todos os tamanhos, conhecemos os cases de sucesso de cada modalidade de contratação.</h1>
          <h4 className='text-center mx-3 text-gray-500 mt-2'>Treinamentos periodicos e feedbacks nos tornam a melhor e mais preparada equipe independente do Brasil.</h4>
        </div>
        <div className='mt-32'>
          <Processos />
        </div>
        <div className='mt-20'>
          <Parceiros />
        </div>
        <div className='my-20'>
          <Video />
        </div>
      <div>
      <Clientes />
        
      </div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
