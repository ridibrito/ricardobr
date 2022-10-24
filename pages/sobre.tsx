import CtaFinal from '../components/CtaFinal'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Image from 'next/image'

export default function Sobre() {
  return (
    <>
    <div className='bg-gray-200'>
      <div className="bg-gray-800 ">
        <Navbar />
        <div className="text-center p-8">
          <h1 className="text-gray-300 font-semibold text-4xl">Sobre mim</h1>
        </div>
      </div>
      <div className='max-w-7xl mx-auto text-center'>
        <h2 className='text-center font-semibold text-gray-700 text-xl my-10 mx-3'>Sou Ricardo Albuquerque, tenho 38 anos e trabalho como consultor de seguros e benefícios há 12 anos.</h2>
        <p className='mx-3 text-gray-700 text-lg'>Estudei ciências economicas e me especializei em mercado financeiro, com certificações e formações complementares. Porem quis o destino que minha carreira seguisse para o mercado segurador.
       </p>
       <p className='mx-3 text-gray-700 text-lg'>Já nos primeiros anos supervisionei pessoas e equipes, apliquei treinamentos e palestras sobre planos de saúde.</p>
       <p className='mx-3 text-gray-700 text-lg'>E em 2016 criei um programa de treinamento para minha equipe de 110 consultores, chamava-se <q>o treinamento supera o talento</q>, programa que foi reconhecido em todo o pais, nas 28 filiais do grupo em que trabalhava.</p>
       <p className='mx-3 text-gray-700 text-lg'>Recebi diversos prêmios...</p>
      </div>
      <div className="mt-5 max-w-6xl mx-auto sm:flex justify-around items-center">
        <div className=''>
          <Image
            src="/treinamento2.png"
            alt="treinamento"
            width="400"
            height="600"
            className='rounded-lg shadow-2xl'
          />
        </div>
        <div className='bg-gray-300 rounded p-4'>
          <h2 className='text-xl ml-3'>Camisa <q>treinamento supera o talento</q></h2>
          <p className='text-lg ml-3'>Programa de treinamento continuado, para consultores de planos de saúde.</p>
        </div>
      </div>
      <div className="mt-5 max-w-6xl mx-auto sm:flex justify-around items-center">
      <div className='bg-gray-300 rounded p-4'>
          <h2 className='text-xl'>Dia de treinamento na filial Brasília-DF</h2>
          <p></p>
        </div>
        <div>
          <Image
            src="/treinamento1.png"
            alt="treinamento"
            width="700"
            height="500"
            className='rounded-lg shadow-2xl'


          />
        </div>
       
      </div>
      <div className="mt-5 max-w-6xl mx-auto sm:flex justify-around items-center">
        <div>
          <Image
            src="/premio.jpg"
            alt="premiação amil"
            width="400"
            height="600"
            className='rounded-lg shadow-2xl'

          />
        </div>
        <div className='bg-gray-300 rounded p-4'>
          <h2 className='text-xl'>Premiação Amil PME</h2>
          <p className='text-lg'>prêmio de melhor supervisor, melhor equipe DF</p>
        </div>
      </div>

      <CtaFinal />
      <Footer />
      </div>
    </>
  )
}
