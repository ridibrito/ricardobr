import Image from "next/image"

export default function Parceiros() {
    return(
        <>
      
        <div className='mt-20 '> 
            <h4 className='text-gray-700 text-sm text-center'>Operadoras parceiras</h4>
            <h2 className='text-center text-xl font-semibold'>Conheça nossos principais fornecedores:</h2>
            <div className="">

            <div className="flex justify-around items-center max-w-5xl mx-auto">
            <div className="">
                <Image src="/amill.png" alt="amil" width="100" height="50"/>
            </div>
            <div className="">
                 <Image src="/bradescoo.png" alt="amil" width="250" height="125"/>
            </div>
            <div className="">
                <Image src="/sulamericaa.png" alt="amil" width="150" height="75"/>
            </div>
            <div className="">
                <Image src="/unimedd.png" alt="amil" width="150" height="75"/>
            </div>
            <div className="">
                <Image src="/hapvidaa.png" alt="amil" width="150" height="75"/>
            </div>
            </div>
            <div className="flex items-center justify-around max-w-5xl mx-auto">

            <div className="">
                <Image src="/seguross.png" alt="amil" width="150" height="75"/>
            </div>
            <div className="">
                <Image src="/smilee.png" alt="amil" width="150" height="75"/>
            </div>
            <div className="">
                <Image src="/quallityy.png" alt="amil" width="150" height="75"/>
            </div>
                <div className="">
                <Image src="/amplaa.png" alt="amil" width="100" height="50"/>
            </div>
            <div className="">
                <Image src="/ideall.png" alt="amil" width="150" height="75"/>
            </div>
            <div className="">
                <Image src="/s11.png" alt="amil" width="150" height="75"/>
            </div>
            
            </div>
            </div>
        </div>
        
        </>
    )
}