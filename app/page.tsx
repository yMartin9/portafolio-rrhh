export default function Home() {
  return (
    <main className="min-h-screen bg-[#041C4A] text-white">

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center h-screen px-6">

      <img
  src="/silvana.jpg"
  alt="Silvana"
  className="w-40 h-40 rounded-full border-4 border-blue-400 object-cover"
/>

     <h1 className="text-4xl md:text-6xl font-bold mt-6">
          Silvana Maroi
      </h1>

        <p className="text-xl md:text-2xl text-blue-300 mt-4">Lic.</p>
          <p className="text-xl md:text-2xl text-blue-300 mt-4"> en Recursos Humanos, y coaching ontológico y organizacional
        </p>

    
       <a
  href="#contacto"
  className="mt-8 bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-xl transition inline-block"
>
  Contacto
</a>

      </section>

      {/* SOBRE MI */}
      <section className="py-20 px-6 text-center">

        <h2 className="text-4xl font-bold mb-6">
          Sobre mí
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg">
          Profesional en Recursos Humanos con capacidad de 
          aplicar mis conocimientos, deseos de crecer humana y 
          profesionalmente, trabajando en equipo.
        </p>

      </section>

      {/* EXPERIENCIA */}
<section className="py-20 px-6 bg-blue-900">

  <h2 className="text-4xl font-bold text-center mb-12">
    Experiencia Profesional
  </h2>

  <div className="max-w-5xl mx-auto grid gap-8">

    {/* SUPERINTENDENCIA */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300">
        Superintendencia de Riesgos del Trabajo
      </h3>

      <p className="text-gray-400 mt-2">
        2024 - Actualidad
      </p>

      <ul className="mt-4 space-y-2 text-gray-200">
        <li>• Asesoría y análisis en el área de estudios.</li>
        <li>• Gestión administrativa y organizacional.</li>
      </ul>

    </div>

    {/* FISCALÍA */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300">
        Fiscalía de Estado de Mendoza
      </h3>

      <p className="text-gray-400 mt-2">
        2012 - 2024
      </p>

      <ul className="mt-4 space-y-2 text-gray-200">
        <li>• Secretaria administrativa en Recursos Humanos.</li>
        <li>• Secretaria privada en distintas áreas institucionales.</li>
        <li>• Gestión administrativa y coordinación organizacional.</li>
      </ul>

    </div>

    {/* BODEGA */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300">
        Bodega A16
      </h3>

      <p className="text-gray-400 mt-2">
        2021 - 2022
      </p>

      <ul className="mt-4 space-y-2 text-gray-200">
        <li>• Gerencia y coordinación de Recursos Humanos.</li>
        <li>• Reclutamiento y selección de personal.</li>
        <li>• Capacitación y evaluación de desempeño.</li>
        <li>• Gestión de cultura organizacional y comunicación interna.</li>
        <li>• Implementación de herramientas digitales y mejora continua.</li>
      </ul>

    </div>

  </div>

</section>
      {/* HABILIDADES */}

<section className="py-20 px-6">

  <h2 className="text-4xl font-bold text-center mb-12">
    Habilidades
  </h2>

  <div className="max-w-4xl mx-auto flex flex-wrap gap-4 justify-center">

    <span className="bg-blue-500 px-4 py-2 rounded-full">
      Gestión de Personal
    </span>

    <span className="bg-blue-500 px-4 py-2 rounded-full">
      Comunicación
    </span>

    <span className="bg-blue-500 px-4 py-2 rounded-full">
      Trabajo en Equipo
    </span>

    <span className="bg-blue-500 px-4 py-2 rounded-full">
      Capacitación
    </span>

    <span className="bg-blue-500 px-4 py-2 rounded-full">
      RRHH
    </span>

  </div>

</section>
{/* FORMACIÓN ACADÉMICA */}
<section className="py-20 px-6 bg-blue-900">

  <h2 className="text-4xl font-bold text-center mb-12">
    Formación Académica
  </h2>

  <div className="max-w-5xl mx-auto grid gap-8">

    {/* FORMACIÓN */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300 mb-6">
        Formación
      </h3>

      <ul className="space-y-3 text-gray-200">
        <li>
          • Licenciatura en Recursos Humanos — UCES (2023)
        </li>

        <li>
          • Tecnicatura en Gestión de Recursos Humanos — Fundación Universitas (2017)
        </li>

        <li>
          • Formación en Coaching Ontológico y Organizacional — UNC (2015)
        </li>
      </ul>

    </div>

    {/* CURSOS */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300 mb-6">
        Cursos y Capacitación
      </h3>

      <ul className="space-y-3 text-gray-200">
        <li>• Administración Pública y Fiscalía de Estado.</li>

        <li>• Relaciones Humanas y Gestión Organizacional.</li>

        <li>• Programación Neurolingüística y Comunicación.</li>

        <li>• Gestión Pública y Metodologías Ágiles.</li>

        <li>• Perspectiva de Género y Formación Política.</li>

        <li>• Ley Micaela y abordaje de crisis suicida.</li>
      </ul>

    </div>

  </div>

</section>


{/* APTITUDES Y ACTITUDES */}

<section className="py-20 px-6 bg-blue-900">

  <h2 className="text-4xl font-bold text-center mb-12">
    Aptitudes y Actitudes
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

    {/* APTITUDES */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300 mb-6">
        Aptitudes
      </h3>

      <ul className="space-y-3 text-gray-200">
        <li>• Gestión de personal</li>
        <li>• Comunicación organizacional</li>
        <li>• Resolución de conflictos</li>
        <li>• Administración de RRHH</li>
        <li>• Trabajo interdisciplinario</li>
      </ul>

    </div>

    {/* ACTITUDES */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300 mb-6">
        Actitudes
      </h3>

      <ul className="space-y-3 text-gray-200">
        <li>• Empatía</li>
        <li>• Responsabilidad</li>
        <li>• Adaptabilidad</li>
        <li>• Compromiso profesional</li>
        <li>• Escucha activa</li>
      </ul>

    </div>

  </div>

</section>
{/* IDIOMAS Y HERRAMIENTAS */}

<section className="py-20 px-6">

  <h2 className="text-4xl font-bold text-center mb-12">
    Idiomas y Herramientas
  </h2>

  <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">

    {/* IDIOMAS */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300 mb-6">
        Idiomas
      </h3>

      <ul className="space-y-3 text-gray-200">
        <li>• Inglés intermedio oral y escrito.</li>
      </ul>

    </div>

    {/* HERRAMIENTAS */}
    <div className="bg-blue-950 p-8 rounded-2xl shadow-lg">

      <h3 className="text-2xl font-semibold text-blue-300 mb-6">
        Herramientas Informáticas
      </h3>

      <ul className="space-y-3 text-gray-200">
        <li>• Microsoft Excel y Word — Nivel avanzado.</li>

        <li>• Plataformas virtuales y herramientas digitales.</li>

        <li>• Sistemas GEDO, GDE y Signos.</li>

        <li>• Manejo de redes sociales e internet.</li>
      </ul>

    </div>

  </div>

</section>
{/* AFICIONES */}

<section className="py-20 px-6">

  <h2 className="text-4xl font-bold text-center mb-12">
    Aficiones
  </h2>

  <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">

    <div className="bg-blue-950 px-6 py-4 rounded-2xl shadow-lg">
      📚 Lectura
    </div>

    <div className="bg-blue-950 px-6 py-4 rounded-2xl shadow-lg">
      🎵 Música
    </div>

    <div className="bg-blue-950 px-6 py-4 rounded-2xl shadow-lg">
      ✈️ Viajes
    </div>

    <div className="bg-blue-950 px-6 py-4 rounded-2xl shadow-lg">
      🤝 Trabajo en equipo
    </div>

    <div className="bg-blue-950 px-6 py-4 rounded-2xl shadow-lg">
      💡 Desarrollo personal
    </div>
    <div className="bg-blue-950 px-6 py-4 rounded-2xl shadow-lg">
  🏋️ Deporte
</div>

  </div>

</section>
{/* INFORMACIÓN PERSONAL */}

<section id="contacto" className="py-20 px-6">

  <h2 className="text-4xl font-bold text-center mb-12">
    Información Personal
  </h2>

  <div className="max-w-3xl mx-auto bg-blue-950 p-8 rounded-2xl shadow-lg space-y-6">

    <div>
      <h3 className="text-blue-300 text-xl font-semibold">
        Lugar de nacimiento
      </h3>

      <p className="text-gray-200 mt-2">
        Mendoza, Argentina
      </p>
    </div>

    <div>
      <h3 className="text-blue-300 text-xl font-semibold">
        Domicilio
      </h3>

      <p className="text-gray-200 mt-2">
        Ciudad de Mendoza
      </p>
    </div>

    <div>
      <h3 className="text-blue-300 text-xl font-semibold">
        Teléfono
      </h3>

      <p className="text-gray-200 mt-2">
        +54 9 261 3839574
      </p>
    </div>

    <div>
      <h3 className="text-blue-300 text-xl font-semibold">
        Correo electrónico
      </h3>

      <p className="text-gray-200 mt-2">
        silvanamaroi@gmail.com
      </p>
    </div>

    <div>
      <h3 className="text-blue-300 text-xl font-semibold">
        LinkedIn
      </h3>

      <a
        href="https://www.linkedin.com/in/silvana-maroi-5093a7232"
        target="_blank"
        className="text-blue-400 hover:text-blue-300 transition"
      >
        linkedin.com/in/silvana-maroi-5093a7232
      </a>
    </div>

  </div>

</section>
    </main>
  )
}