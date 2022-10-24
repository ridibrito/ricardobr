import Image from 'next/image'
import Link from 'next/link'
import { BsArrowRightShort } from 'react-icons/bs'

export default function Processos() {
  return (
    <>
      <div className="bg-[#A6D7E2]/90 flex p-8 max-w-6xl mx-auto rounded overflow-hidden">
        
        <div className='block sm:w-3/4 space-y-10 mt-12'>
        <div className="block">
          <h2 className="block text-gray-600 font-semibold text-xl">
            Implantação acompanhada
          </h2>
          <p className="text-gray-500">
            Acompanhamos seu processo de implantação passo a passo em parceria
            com a operadora
          </p>
        </div>
        <div>
          <h2 className="text-gray-600 font-semibold text-xl">Treinamento para rh</h2>
          <p className="text-gray-500">
            Após o processo de implantação, treinamos o rh para uma melhor
            gestão do plano de saúde empresarial.
          </p>
        </div>
       
        <div className="block">
          <h2 className="text-gray-600 font-semibold text-xl">
            Atendimento ao beneficiário
          </h2>
          <p className="text-gray-500">
            Atendemos os beneficiários quanto a quaisquer duvidas sobre
            utilização
          </p>
        </div>
        <div>
          <h2 className="text-gray-600 font-semibold text-xl">
            Utilização das plataformas Coruss
          </h2>
          <p className="text-gray-500">
            Nosso braço tecnológico, a Coruss tecnologia, disponibiliza várias
            ferrramentas e aplicativos para melhorar a experiência do cliente
          </p>
        </div>
        <Link href="/contato">
        <button className='p-4 border-2 border-primary-blue rounded text-primary-blue w-full sm:w-60 px-6 flex items-center gap-3'>Solicite uma cotação<BsArrowRightShort /></button>
          </Link>
        
        </div>
        <div className="pl-50 -mr-10 sm:block hidden">
          <Image src="/ok.png" alt="mockup" width="1000" height="1000" />
        </div>

      </div>
      
    </>
  )
}
