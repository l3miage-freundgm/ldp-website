export default function MissionStatement() {
  return (
    <div className="bg-sage-50 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-sage-700 mb-6">Mi Misión</h2>
          <p className="text-xl text-gray-700 mb-8">
            Acompañarte en tu camino hacia el bienestar emocional, proporcionándote herramientas y recursos para que
            puedas desarrollar todo tu potencial y vivir una vida más plena y satisfactoria.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl text-sage-600">🧠</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enfoque Integral</h3>
              <p className="text-gray-700">
                Trabajo con un enfoque que integra mente, cuerpo y emociones para un bienestar completo.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl text-sage-600">🤝</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Espacio Seguro</h3>
              <p className="text-gray-700">
                Creo un ambiente de confianza y libre de juicios donde puedas expresarte con total libertad.
              </p>
            </div>
            <div>
              <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 shadow-md">
                <span className="text-2xl text-sage-600">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Crecimiento Personal</h3>
              <p className="text-gray-700">
                Te acompaño en tu proceso de autoconocimiento y desarrollo de habilidades para la vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

