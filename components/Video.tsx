export default function Video() {
    return(
        <>
        <div className="bg-gray-800 ">

        <div className="sm:p-12 p-4 max-w-6xl sm:mx-auto sm:flex rounded sm:gap-3 sm:items-center">
        <div className="sm:w-1/2">
            <h4 className="text-white sm:text-lg font-serif">Capacitando corretores</h4>
            <h2 className="sm:text-2xl text-xl text-white">Nossa missão é <span className="text-primary-blue font-semibold">capacitar pessoas</span> para que tenhamos um mercado segurador mais confiável, trazendo <span className="text-primary-blue font-semibold">apólices mais saudáveis.</span></h2>
        </div>
        <div className="mt-3 sm:mt-0 ">
    <iframe src="https://www.youtube.com/embed/jUmuJqiN0oo" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" className="sm:w-132 sm:h-33"></iframe>

        </div>
        </div>
        </div>
        </>
    )
}