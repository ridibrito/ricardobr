import Image from "next/image"

export default function Clientes() {
    return(
        <>
      
        <div className='my-20 mx-3'> 
            <h4 className='text-gray-700 text-sm text-center'>Alguns de nossos Clientes</h4>
            <h2 className='text-center text-xl font-semibold'>Conheça algumas empresas que acreditam em nosso trabalho:</h2>
            <div className="">

            <div className="flex justify-around items-center max-w-5xl mx-auto">
            <div className="">
                <Image src="/clientes/etercc.png" alt="amil" width="150" height="150"/>
            </div>
            <div className="">
                <Image src="/clientes/atacadaoo.png" alt="amil" width="150" height="150"/>
            </div>
            <div className="">
                 <Image src="/clientes/ppnn.png" alt="amil" width="100" height="100"/>
            </div>
            <div className="">
                <Image src="/clientes/sefixx.png" alt="amil" width="150" height="100"/>
            </div>
          
            <div className="">
                <Image src="/clientes/tess.png" alt="amil" width="150" height="150"/>
            </div>
            </div>
            <div className="flex items-center justify-around max-w-5xl mx-auto">

            <div className="">
                <Image src="/clientes/intensivee.png" alt="amil" width="150" height="100"/>
            </div>
            <div className="">
                <Image src="/clientes/rvv.png" alt="amil" width="150" height="100"/>
            </div>
            <div className="">
                <Image src="/clientes/ecoss.png" alt="amil" width="150" height="150"/>
            </div>
                <div className="">
                <Image src="/clientes/drogaria.png" alt="amil" width="100" height="100"/>
            </div>
            <div className="">
                <Image src="/clientes/yeddaa.png" alt="amil" width="150" height="100"/>
            </div>
            
            
            </div>
            <h2 className='text-center font-semibold'>Mais de 2.000 mil empresas fazem parte de nossa carteira de clientes, entre elas empresas MEI, LTDA, Individuais e S/A</h2>
            </div>
        </div>
        
        </>
    )
}