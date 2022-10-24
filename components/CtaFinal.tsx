import Link from 'next/link'

export default function CtaFinal() {
  return (
    <>
      <section className=" bg-gray-800">
        <div className="flex items-center justify-between max-w-7xl mx-auto  p-8">
          <div className="flex items-center">
            <h2 className="text-gray-300 text-xl">
              Solicite sua cotação ou fale comigo diretamente pelo WhatsApp
            </h2>
            </div>
            <div className="flex items-center w-1/2 gap-4">
              <Link href="https://wa.me/5561983555195">
                <button className="bg-primary-blue items-center justify-around hover:shadow-white/30 shadow-2xl ease-in duration-150 text-white text-sm rounded w-11/12 sm:w-2/6 px-4 py-3">
                  Fale comigo
                </button>
              </Link>

              <Link href="/contato">
                <button className="bg-transparent border-2 text-sm hover:shadow-white/30 shadow-2xl ease-in duration-150  border-primary-blue text-primary-blue w-11/12 sm:w-2/6 px-4 py-3 font-semibol">
                  Solicite uma cotação
                </button>
              </Link>
            </div>
          
        </div>
      </section>
    </>
  )
}
