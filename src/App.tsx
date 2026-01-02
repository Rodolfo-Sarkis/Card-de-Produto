import './App.css'

function App() {
  return (
    <div className="flex justify-center items-center p-4">
      {/* Container do Card */}
      <div className="bg-card-dark w-80 rounded-card overflow-hidden shadow-2xl border border-white/5">

        {/* Área da Imagem */}
        <div className="bg-white m-2 rounded-t-xl overflow-hidden">
          <img
            src="./camiseta-2 (2).png"
            alt="Camiseta Dev em Dobro"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Informações do Produto */}
        <div className="p-6 pt-4 flex flex-col gap-1 text-left">
          <h2 className="text-white text-xl font-semibold ">
            Camiseta Dev em Dobro
          </h2>

          <div className="text-zinc-300 text-sm mt-2">
            <p>Cor: roxa</p>
            <p>Tamanho: M</p>
          </div>

          <div className="flex justify-end mt-4">
            <span className="text-[#6BB27C] text-2xl font-medium">
              R$ 89,00
            </span>
          </div>

          {/* Botão */}
          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 rounded-lg mt-4 transition-colors duration-200">
            Adicionar ao carrinho
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
