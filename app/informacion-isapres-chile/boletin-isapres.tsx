type KeyValueObject = { [key: string]: string | string[] }; // Usa un tipo más específico que 'any' si es posible
export type Article = KeyValueObject[];

export const articlesData: Article[] = [
  [
    { 
      urlImg: "/images/noticias-isapres/excedentes.jpg" 
    },
    {
      h1: "Excedentes de Isapres",
    },
    {
      h2: "¿Qué Son los Excedentes de Isapre?",
    },
    {
      p: "Los excedentes de Isapre son fondos que se generan cuando las cotizaciones obligatorias del 7% del salario de un afiliado superan el costo del plan de salud contratado. Estos excedentes se acumulan en una cuenta a favor del afiliado y pueden utilizarse para diversos gastos relacionados con la salud.",
    },
    {
      h2: "¿Cómo Puedo Utilizar Mis Excedentes de Isapre?",
    },
    {
      p: "Los excedentes se pueden utilizar de varias maneras:",
    },
    {
      Vineta: [
        "Cubrir cotizaciones en caso de desempleo del trabajador",
        "Pagar copagos de atenciones de salud",
        "Financiar servicios de salud no cubiertos por el contrato, como atenciones dentales.",
        "Abonar cotizaciones voluntarias adicionales.",
      ],
    },
    {
      h2: "¿Se Devuelven los Excedentes No Utilizados?",
    },
    {
      p: "Si los excedentes no se utilizan en un año, se devuelven al afiliado. Esta devolución se efectúa anualmente, asegurando que los fondos no gastados regresen al beneficiario.",
    },
    {
      h2: "¿Qué Sucede con Mis Excedentes si Cambio de Isapre?",
    },
    {
      p: "En caso de cambio de Isapre, los excedentes acumulados deben ser reintegrados al afiliado. Esta devolución se realiza a más tardar el día 15 del mes siguiente al término de las ventajas del contrato de salud.",
    },
    {
      h2: "¿Todos los Planes de Isapre Permiten el Uso de Excedentes?",
    },
    {
      p: "Es importante destacar que los beneficios y usos de los excedentes varían según el plan de Isapre. Por lo tanto, es recomendable consultar con un asesor para comprender los beneficios específicos de cada plan y cómo optimizar el uso de los excedentes.",
    },
  ],
  [
    { urlImg: "/images/isapres/coleman.png" },
    {
      h1: "¿Qué es el Seguro de Salud Complementario para Empresas?",
    },
    {
      p: "El seguro de salud complementario para empresas ofrece protección adicional a los empleados. Estos seguros, generalmente destinados a contratos colectivos, proporcionan una cobertura similar a los seguros individuales pero a tarifas más bajas. Esta reducción en el costo se debe al control colectivo de gastos y la diversificación de riesgos.",
    },
    {
      h2: "¿Cuáles son los Beneficios de Contratar un Seguro Complementario para Empresas?",
    },
    {
      p: "Contratar un seguro complementario aporta beneficios tanto para el empleador como para los empleados. Ofrece una cobertura de salud más amplia y puede resultar más económico que los seguros individuales. Además, al manejar los riesgos de forma colectiva, se pueden reducir los costos generales.",
    },
    {
      h2: "¿Qué Deberías Saber Antes de Contratar un Seguro Complementario?",
    },
    {
      p: "Es crucial entender que estos seguros suelen excluir las preexistencias, es decir, condiciones de salud ya presentes antes de contratar el seguro. Las empresas interesadas deben considerar las preferencias y necesidades de sus empleados, así como los requisitos de la aseguradora, como el mínimo de empleados necesarios para acceder al seguro.",
    },
    {
      h2: "¿Cómo Afecta el Uso del Seguro al Coste?",
    },
    {
      p: "El costo del seguro complementario puede variar según el uso que le den los empleados. Un uso responsable puede evitar aumentos en la tarifa anual. Compartir el coste del seguro entre empleador y empleados puede incentivar un uso más cuidadoso, beneficiando a todos en la empresa.",
    },
    {
      h2: "¿Cuál es el Primer Paso Antes de Contratar un Seguro Complementario?",
    },
    {
      p: "El primer paso es asegurarse de estar afiliado a una isapre adecuada. Luego, se puede considerar la contratación de un seguro complementario, evaluando las opciones y necesidades específicas de la empresa y sus trabajadores.",
    },
  ],
  [
    { urlImg: "/images/noticias-isapres/excedentes.jpg" },
    {
      h1: "¿Cómo Elegir la Isapre Adecuada?",
    },
    {
      h2: "¿Qué Debo Saber Antes de Elegir una Isapre?",
    },
    {
      p: "Para elegir correctamente una isapre, comienza calculando el 7% de tu salario, ya que por ley este porcentaje se destina a salud. Esta cifra te ayudará a determinar qué opción es más conveniente para ti.",
    },
    {
      h2: "¿Puedo Optar por un Plan que Supere el 7% de mi Salario?",
    },
    {
      p: "Sí, es posible elegir un plan de isapre que exceda el 7% de tu salario. El porcentaje adicional se descontará de tu salario. También puedes seleccionar un plan que sea menor a este porcentaje, pero el excedente no se devuelve, sino que se acumula como excedentes.",
    },
    {
      h2: "¿Qué son los Excedentes en una Isapre?",
    },
    {
      p: "Los excedentes son fondos acumulados en tu cuenta de la isapre cuando el costo del plan es menor al 7% de tu salario. Puedes usar estos fondos para varios propósitos como comprar medicamentos, pagar bonos, financiar servicios no cubiertos por tu plan, o incluso para tus cotizaciones en situaciones de desempleo o jubilación.",
    },
    {
      h2: "¿Cómo Elegir el Plan Adecuado?",
    },
    {
      p: "No te guíes solo por recomendaciones familiares; elige un plan basado en tus necesidades y prioridades personales. Cada plan ofrece diferentes coberturas y beneficios que deben alinearse con tus requerimientos específicos.",
    },
    {
      h2: "¿Qué son las Prestaciones Restringidas?",
    },
    {
      p: "Las prestaciones restringidas son aquellas que tienen una cobertura limitada, usualmente solo del 25%. Comúnmente incluyen servicios como psiquiatría, psicología, cirugía bariátrica y cirugía refractiva. Es importante revisar cómo cubre tu plan los embarazos y partos.",
    },
    {
      h2: "¿Qué son los Aranceles en una Isapre?",
    },
    {
      p: "Los aranceles son los costos establecidos por la isapre para diversas prestaciones. Por ejemplo, si el arancel de un examen de sangre es de $1.000 y el plan cubre 1,4 veces el arancel, la isapre cubrirá $1.400 de ese examen.",
    },
    {
      h2: "¿Cómo Obtener Más Información?",
    },
    {
      p: "Si tienes dudas sobre qué plan de isapre es el mejor para ti, puedes rellenar un formulario para recibir asesoramiento personalizado basado en tus necesidades y situación.",
    },
  ],
  [
    { urlImg: "/images/noticias-isapres/excedentes.jpg" },
    {
      h1: "¿Qué Son las Isapres y Cómo Funcionan?",
    },
    {
      p: "Las Isapres (Instituciones de Salud Previsional) son parte del sistema privado de salud en Chile. Funcionan bajo un esquema de seguros y están autorizadas para recibir y gestionar las cotizaciones de los afiliados que optan por este sistema en lugar de FONASA, con deducciones directas de su salario.",
    },
    {
      h2: "¿Cuál es el Porcentaje de Cotización en las Isapres?",
    },
    {
      p: "El porcentaje de cotización para el sistema de salud, ya sea público o privado, es del 7% de la remuneración o renta imponible. Este es el monto que las Isapres descuentan de los afiliados.",
    },
    {
      h2: "Diferencias entre Cotizaciones en FONASA e Isapres",
    },
    {
      p: "En FONASA, el 7% descuenta al trabajador y lo coloca en uno de los tramos de coberturas. Las coberturas se adaptan automáticamente al monto que representa este 7%. En Isapres, cada afiliado puede elegir su plan de salud basado en el 7% descontado. Además, tiene la opción de cotizar un porcentaje mayor para obtener coberturas adicionales en su plan de salud.",
    },
    {
      h2: "Tramos de Cobertura en FONASA",
    },
    {
      vineta: [
        "Tramo A: Individuos sin fondos, reciben atención médica gratuita en la red pública.",
        "Tramo B: Personas con remuneración imponible ≤ $250,000 o beneficiarios de Pensión Elemental Solidaria. Reciben atención gratuita.",
        "Tramo C: Afiliados que ganan > $250,000 pero < $365,000, con hasta 2 cargas. Cobertura del 90% (10% copago).",
        "Tramo D: Afiliados que ganan > $365,000, con hasta 2 cargas. Cobertura del 80% (20% copago).",
      ],
    },
    {
      h2: "Otros Porcentajes de Cotización Obligatoria",
    },
    {
      vineta: [
        "Fondo de pensiones: 10% a AFP o IPS",
        "Comisión de AFP: Porcentaje variable",
        "Seguro de Invalidez y Sobrevivencia: 2,3%",
        "Accidentes del Trabajo: 0,93% a mutualidad",
        "Aporte de Compensación Forzosa: 1,11% para trabajadores con menos de 11 años en el mismo empleo",
        "Seguro de Cesantía: 3% hasta 11 años de aporte, luego 0,8% al Fondo Solidario",
      ],
    },
    {
      h2: "Cotizaciones Voluntarias",
    },
    {
      vineta: [
        "Cuenta de Ahorro Voluntario (Cuenta 2)",
        "Ahorro Previsional Voluntario (APV)",
      ],
    },
    {
      p: "En resumen, el sistema de Isapres permite a los afiliados mayor flexibilidad en la elección de su plan de salud en comparación con FONASA, basado en el mismo porcentaje de cotización del 7%",
    },
  ],
];
