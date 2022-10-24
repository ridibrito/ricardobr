export default function Produtos() {
    return(
        <>
        <div className="bg-gray-800 sm:flex justify-between items-center max-w-6xl mx-auto rounded p-12 sm:shadow-lg -mt-2">
        <div className="text-white sm:m-5 sm:w-1/3 sm:mt-0">Plano de saúde <span className="text-primary-blue"> empresarial</span> 
        <p className="text-sm sm:mt-3 mt-1">Plano contratado por meio de CNPJ, seja MEI, LTDA ou S/A, empresas de capital aberto e etc...<br/>
        <span className="text-primary-blue">Independente de faturamento, regime tributário ou número de funcionários, </span>
         uma empresa tem direito a contratar um plano de saúde com condições diferenciadas.</p>
        </div>
        <div className="text-white sm:m-5 sm:w-1/3 mt-5 sm:mt-0">Plano de saúde <span className="text-primary-blue"> Individual</span>  
        <p className="text-sm sm:mt-3 mt-1">Individual, familiar ou coletivo por adesão,<br /> são planos para pessoas fisicas de todas as idades. <span className="text-primary-blue">Contratação por meio de atividade profissional ou diretamente pelo CPF</span>, cada situação deve ser estudada em parceria com o corretor para que o cliente faça a melhor opção.</p>
        </div>
        
        <div className="text-white sm:m-5 sm:w-1/3 mt-5 sm:mt-0">Plano de saúde <span className="text-primary-blue"> Odontológico</span> 
        <p className="text-sm sm:mt-3 mt-1">Planos odontológicos tanto empresariais como inividuais, tem custo baixo e excelentes benefícios.
        <br />
        <span className="text-primary-blue"> Para empresas: </span> 
        retenção de talentos e aumento do nível de satisfação dos funcionários.<br />
        <span className="text-primary-blue"> Para beneficiários: </span>
        cuidado e prevenção com excelente custo x benefício.
        </p>
        </div>
        </div>
        
        </>
    )
}