import { Photo, BackgroundImage } from "./types";

// Import the generated background assets using exact paths
import bg1 from "./assets/images/fashion_bg_one_1779412474092.png";
import bg2 from "./assets/images/fashion_bg_two_1779412489163.png";
import bg3 from "./assets/images/fashion_bg_three_1779412504036.png";
import bg4 from "./assets/images/fashion_bg_four_1779412519104.png";

export const CAROUSEL_IMAGES: BackgroundImage[] = [
  {
    id: "bg-1",
    url: bg1,
    title: "Sinfonía en Rojo y Azul"
  },
  {
    id: "bg-2",
    url: bg2,
    title: "Fumata Naranja y Turquesa"
  },
  {
    id: "bg-3",
    url: bg3,
    title: "Prismas del Alma"
  },
  {
    id: "bg-4",
    url: bg4,
    title: "El Destello de la Penumbra"
  }
];

export const BIOGRAPHY_TEXT = {
  header: "MODA, LUZ Y SURREALISMO",
  subtitle: "Antonio y Daniel — Fotografía artística de moda, conceptualización visual y dirección de arte.",
  storyTitle: "Estética Visual e Identidad Única",
  paragraphs: [
    "Antonio y Daniel no capturan momentos; construyen mundos. Como dupla de fotografía artística y dirección de arte de moda, su filosofía gira en torno a una premisa radical: que cada imagen es un lienzo donde la luz, el volumen y las sombras se esculpen con precisión matemática y sensibilidad poética.",
    "Su juego con la iluminación y el color es alquímico. Moldean haces de luz directa y difusa para resaltar complejas texturas, mientras que su paleta cromática se convierte en un diálogo narrativo específico que evoca emociones surrealistas y claroscuros dramáticos de alto contraste.",
    "Aclamados internacionalmente por su audacia y composiciones vanguardistas, Antonio y Daniel se han consolidado como un referente de la fotografía editorial de moda. Su capacidad para fundir el arte puro con marcas comerciales y publicidad de alto impacto crea narrativas místicas e imperecederas que trascienden las tendencias tradicionales."
  ],
  stats: [
    { label: "Años de Trayectoria", value: "12+" },
    { label: "Editoriales de Moda", value: "80+" },
    { label: "Exposiciones", value: "15" },
    { label: "Campañas de Marca", value: "100+" }
  ]
};

export const GALLERY_PHOTOS: Photo[] = [
  {
    id: "photo-1",
    url: "https://images.unsplash.com/photo-1509631179647-0177331693ae?auto=format&fit=crop&q=80&w=1200",
    title: "Cenizas Silenciosas",
    category: "Editorial",
    description: "Estudio sobre los contrastes de luz y las texturas orgánicas en la alta costura.",
    story: "Esta obra captura la soledad y la belleza de la fragilidad humana. El juego de luces de neón tiñe las telas vaporosas para representar el conflicto de la identidad contemporánea en un mundo que nunca descansa.",
    tags: ["Moda", "Luz de Neón", "Contraste", "Alta Costura"]
  },
  {
    id: "photo-2",
    url: "https://images.unsplash.com/photo-1549064482-6779ba3292fe?auto=format&fit=crop&q=80&w=1200",
    title: "El Eco del Espectro",
    category: "Vanguardia",
    description: "Composición minimalista donde el color bloque se intersecta con la silueta.",
    story: "Inspirada en el constructivismo europeo, esta foto utiliza proyecciones de sombras y matices complementarios para relatar la transformación y la resiliencia en la gran ciudad. Los contrastes cromáticos son crudos pero armónicos.",
    tags: ["Color Block", "Minimalismo", "Sombras", "Estructura"]
  },
  {
    id: "photo-3",
    url: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    title: "Ensayo Floral",
    category: "Retrato",
    description: "Moda de primavera enfocada mediante filtros de refracción óptica.",
    story: "Un retrato poético que habla del renacimiento de los recuerdos. La iluminación cálida del sol de la tarde atraviesa cristales facetados, derramando arcoíris efímeros sobre el rostro y la tela de seda pura.",
    tags: ["Primavera", "Cristal", "Luz Cálida", "Arcoíris"]
  },
  {
    id: "photo-4",
    url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?auto=format&fit=crop&q=80&w=1200",
    title: "La Reina Estructural",
    category: "Editorial",
    description: "Enfoque sobre volumen extravagante y texturas en penumbra.",
    story: "Una imagen pensada para reflejar la fuerza arquitectónica de la indumentaria de vanguardia. La luz cenital perfila únicamente los bordes del atuendo, insinuando que la ropa misma es el caparazón y el templo del sujeto.",
    tags: ["Vanguardia", "Cenital", "Silueta", "Arquitectura"]
  },
  {
    id: "photo-5",
    url: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&q=80&w=1200",
    title: "Manifiesto en Amarillo",
    category: "Concept",
    description: "Iluminación solar directa potenciada con reflectores áureos sobre fondo plano.",
    story: "El color amarillo como símbolo de la energía desbordante y la libertad desenfrenada. Capturado en un mediodía extremo, desafiando las sombras tradicionales para evocar un sentimiento de plenitud absoluta.",
    tags: ["Amarillo", "Mediodía", "Cálido", "Energía"]
  },
  {
    id: "photo-6",
    url: "https://images.unsplash.com/photo-1496449903678-c8dd735011ba?auto=format&fit=crop&q=80&w=1200",
    title: "Susurros Urbanos",
    category: "Cine",
    description: "Retrato callejero nocturno con luces difusas de la ciudad de Tokio.",
    story: "La soledad de una mirada en medio de la gran metrópolis. Las fuentes de croma cruzado de las vallas publicitarias se funden con los reflejos de la lluvia sobre la calle, enmarcando una historia de destino y encuentro.",
    tags: ["Neon", "Tokio", "Lluvia", "Cinematográfico"]
  },
  {
    id: "photo-7",
    url: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=1200",
    title: "La Hora Dorada del Misticismo",
    category: "Editorial",
    description: "Luz solar oblicua y sombras profundas modelando telas en constante movimiento.",
    story: "Inspirada en las pinturas clásicas del barroco, la tela en movimiento se convierte en las olas en el aire. La modelo parece flotar en una atmósfera líquida de atardecer, donde la gravedad se rinde ante el color.",
    tags: ["Atardecer", "Gasa", "Movimiento", "Barroco"]
  },
  {
    id: "photo-8",
    url: "https://images.unsplash.com/photo-1509319117193-57bab727e09d?auto=format&fit=crop&q=80&w=1200",
    title: "Nostalgia en la Pradera",
    category: "Retrato",
    description: "Estilo rústico de alta moda integrado con paisajes abiertos e iluminación suave.",
    story: "Una reflexión sobre la simbiosis humana con la naturaleza virgen. La iluminación sobreexpuesta limpia la escena, evocando la melancolía literaria de las cartas antiguas y la calma de los horizontes lejanos.",
    tags: ["Naturaleza", "Rustic", "Luz Suave", "Melancolía"]
  },
  {
    id: "photo-9",
    url: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?auto=format&fit=crop&q=80&w=1200",
    title: "Fiebre Carmesí",
    category: "Concept",
    description: "Focalización extrema en sombras rojizas y maquillaje editorial gráfico.",
    story: "El carmín puro asume la carga emocional de la escena. Mediante un haz de luz quirúrgico, Antonio y Daniel exploran el misterio escarlata, fusionando moda y drama psicológico en una toma inolvidable.",
    tags: ["Rojo", "Impacto", "Contraste", "Iluminación focal"]
  },
  {
    id: "photo-10",
    url: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&q=80&w=1200",
    title: "Encuentro de Dos Almas",
    category: "Moda Dupla",
    description: "Retrato editorial sincronizado utilizando dos modelos en una geometría de sombras espejo.",
    story: "La compleja dinámica de la complicidad humana. Las dos siluetas se intercalan bajo una red de iluminación geométrica que proyecta rascacielos invisibles sobre la ropa, simbolizando la unión y el aislamiento simultáneos.",
    tags: ["Dupla", "Geometría", "Sombras", "Blancos y Grises"]
  },
  {
    id: "photo-11",
    url: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1200",
    title: "La Revelación Cromática",
    category: "Retrato",
    description: "Cerrado de rostro con luz estroboscópica y geles de color rosa y azul.",
    story: "La deconstrucción del retrato tradicional a través del uso audaz de geles cromáticos. Esta composición demuestra cómo las matices opuestos pueden coexistir para esculpir el volumen más allá de la luz ordinaria.",
    tags: ["Geles", "Magenta", "Retrato", "Luz Estroboscópica"]
  },
  {
    id: "photo-12",
    url: "https://images.unsplash.com/photo-1505022610485-0249ba5b3675?auto=format&fit=crop&q=80&w=1200",
    title: "La Sombra del Pensador",
    category: "Vanguardia",
    description: "Moda de autor en combinación con iluminación lateral y texturas de hormigón.",
    story: "Una oda al silencio de los talleres de diseño. La modelo luce prendas con cortes simétricos que replican las formas brutales del entorno, donde la luz del ocaso genera profundidades monumentales.",
    tags: ["Simetría", "Ocaso", "Brutalista", "Moda Industrial"]
  },
  {
    id: "photo-13",
    url: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1200",
    title: "Danza Eléctrica",
    category: "Cine",
    description: "Luz ultravioleta e hilados fluorescentes capturados con obturación lenta.",
    story: "Una metáfora de las conexiones neuronales y los hilos Invisibles que tejen nuestras emociones. Antonio y Daniel usaron tiempos de exposición prolongados para dibujar trazos de luz realistas en el espacio.",
    tags: ["Obturación Lenta", "Neon", "Fluorescente", "Artes Visuales"]
  },
  {
    id: "photo-14",
    url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?auto=format&fit=crop&q=80&w=1200",
    title: "Esmeralda en Reposo",
    category: "Editorial",
    description: "Composición en plano medio bajo un dosel de iluminación verde esmeralda y tonos joya.",
    story: "Una composición regia inspirada en el esplendor de las gemas preciosas. La riqueza cromática del verde satura el ambiente, logrando una sensación táctil y una atmósfera lujosa y envolvente.",
    tags: ["Verde", "Joyas", "Texturas", "Suntuosidad"]
  },
  {
    id: "photo-15",
    url: "https://images.unsplash.com/photo-1578932750294-f5075e85f44a?auto=format&fit=crop&q=80&w=1200",
    title: "Pasarela del Claroscuro",
    category: "Moda Dupla",
    description: "Estudio dinámico en pasarela simulada utilizando focos de luz polarizada de alto contraste.",
    story: "La velocidad de las tendencias reflejada en el misterio del claroscuro. Se congela el paso de la modelo en el umbral exacto donde la luz de alta intensidad elimina toda la tridimensionalidad excepto los pliegues metálicos del vestido.",
    tags: ["Pasarela", "Claroscuro", "Metalizados", "Alta Velocidad"]
  },
  {
    id: "photo-16",
    url: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&q=80&w=1200",
    title: "Minimalismo Sastrial",
    category: "Concept",
    description: "Encuadre asimétrico con iluminación suave e indirecta enfocando joyería escultural.",
    story: "Un homenaje al minimalismo sastrial de los noventa. Se combinan líneas de sastrería sobria y joyas de vanguardia que atrapan un punto resplandeciente de luz difusa, cerrando de manera magistral la colección narrativa del dúo.",
    tags: ["Minimalismo", "Sastrería", "Joyas", "Luz Difusa"]
  }
];

// Content for additional full portfolio photos when "Portafolio Completo" is toggled
export const EXTRA_GALLERY_PHOTOS: Photo[] = [
  {
    id: "photo-17",
    url: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    title: "El Caballero de las Sombras",
    category: "Sartorial",
    description: "Estudio de sastrería masculina clásica complementada con iluminación azul cobalto de ambiente.",
    story: "Un retrato donde la sobriedad clásica se distorsiona artísticamente por luces de neón enigmáticas, representando los contrastes de la sofisticación masculina contemporánea.",
    tags: ["Hombre", "Sartorial", "Neón Cobalto", "Misterio"]
  },
  {
    id: "photo-18",
    url: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?auto=format&fit=crop&q=80&w=1200",
    title: "Retrato Ópalo",
    category: "Retrato",
    description: "Luz difusa de gran angular capturada en un día de niebla costera.",
    story: "Estudio íntimo donde la iluminación nítida pero sin sombras perfila las facciones del sujeto en un fondo minimalista, creando una sensación de conexión y vulnerabilidad total.",
    tags: ["Retrato", "Luz Suave", "Niebla", "Intimidad"]
  },
  {
    id: "photo-19",
    url: "https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&q=80&w=1200",
    title: "Metamorfosis Escarlata",
    category: "Vanguardia",
    description: "Danza con sedas rojas expuestas a ráfagas de luz cálida concentrada.",
    story: "Las sedas se retuercen en el aire simulando fuego. Un disparo a alta velocidad congela los fluidos del aire e inmortaliza la transformación del cuerpo en energía lumínica.",
    tags: ["Estilo Libre", "Fuego", "Sedas", "Alta Velocidad"]
  },
  {
    id: "photo-20",
    url: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&q=80&w=1200",
    title: "Brillo Mercurio",
    category: "Concept",
    description: "Moda futurista con telas metalizadas e iluminación líquida azulada.",
    story: "Inspirada en visiones cibernéticas clásicas, el maquillaje metalizado y los reflejos fríos del cromo sugieren una modelo proveniente de un futuro distante gobernado por la elegancia digital.",
    tags: ["Futurismo", "Plateado", "Cromo", "Fidelidad"]
  }
];
