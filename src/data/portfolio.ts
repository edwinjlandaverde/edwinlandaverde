export const sections = [
  { id: "hero", label: "Inicio" },
  { id: "about", label: "Sobre mí" },
  { id: "experience", label: "Experiencia" },
  { id: "services", label: "Servicios" },
  { id: "portfolio", label: "Portafolio" },
  { id: "ai", label: "IA Generativa" },
  { id: "stack", label: "Stack" },
  { id: "contact", label: "Contacto" },
];

import honey from "@/assets/portfolio/p-honey.jpg";
import cosmetic from "@/assets/portfolio/p-cosmetic.jpg";
import coffee from "@/assets/portfolio/p-coffee.jpg";
import branding from "@/assets/portfolio/p-branding.jpg";
import social from "@/assets/portfolio/p-social.jpg";
import editorial from "@/assets/portfolio/p-editorial.jpg";
import stand from "@/assets/portfolio/p-stand.jpg";
import aiRyobi from "@/assets/ai/ai-ryobi.jpg";
import aiPolar from "@/assets/ai/ai-polarbox.jpg";
import aiNinja from "@/assets/ai/ai-ninja.jpg";
import aiRain from "@/assets/ai/ai-rainx.jpg";
import aiBoots from "@/assets/ai/ai-boots.jpg";
import aiPoncho from "@/assets/ai/ai-poncho.jpg";

export type Project = {
  id: string;
  title: string;
  category: "Branding" | "3D GENERATIVO" | "Social Media" | "IA Generativa" | "Editorial" | "RETAIL" | "DISEÑO 3D";
  client: string;
  year: string;
  image: string;
  size: "S" | "M" | "L";
  tools: string[];
  description: string;
  ai?: boolean;
};

export const projects: Project[] = [
  { id: "ryobi", title: "Ryobi · Las Mejores Marcas", category: "IA Generativa", client: "Almacenes VIDRÍ", year: "2026", image: aiRyobi, size: "L", tools: ["Gemini", "NanoBanana", "Photoshop"], ai: true,
    description: "Campaña fotográfica producida íntegramente con IA generativa para la línea de herramientas eléctricas Ryobi." },
  { id: "honey", title: "Polarbox", category: "3D GENERATIVO", client: "Almacenes Vidrí", year: "2026", image: honey, size: "M", tools: ["NanoBanana Pro", "Illustrator", "Photoshop"],
    description: "Cover de álbum de Facebook" },
  { id: "polar", title: "Polarbox · Verano", category: "IA Generativa", client: "Almacenes VIDRÍ", year: "2026", image: aiPolar, size: "M", tools: ["Gemini", "NanoBanana"], ai: true,
    description: "Producción digital para campaña estacional de hieleras Polarbox." },
  { id: "coffee", title: "Omaha Glass Pro", category: "3D GENERATIVO", client: "Lingodocs Marketing", year: "2021", image: coffee, size: "M", tools: ["Photoshop", "Illustrator"],
    description: "Post cuadrado individual para Facebook" },
  { id: "ninja", title: "Ninja Crispi", category: "IA Generativa", client: "Almacenes VIDRÍ", year: "2026", image: aiNinja, size: "M", tools: ["NanoBanana 2", "Adobe CC"], ai: true,
    description: "Bodegón transformado IA para electrodoméstico Ninja Crispi." },
  { id: "branding", title: "Hydrocacao · Bioterra", category: "Branding", client: "UKN", year: "2022", image: branding, size: "L", tools: ["Illustrator", "InDesign"],
    description: "Sistema de identidad para línea de productos cacao orgánico." },
  { id: "social", title: "Rain-X", category: "Social Media", client: "Almacenes VIDRÍ", year: "2026", image: social, size: "M", tools: ["Photoshop", "Meta Ads"],
    description: "Post de retail para Facebook" },
  { id: "rainx", title: "Milwaukee", category: "RETAIL", client: "Almacenes VIDRÍ", year: "2023", image: aiRain, size: "S", tools: ["Adobe CC"],
    description: "Post individual utilizando branding de Toolfest Milwaikee" },
  { id: "editorial", title: "Vida Social Magazine", category: "Editorial", client: "Lingodocs marketing LLC", year: "2022", image: editorial, size: "S", tools: ["Photoshop", "Illustrator"],
    description: "Rebrand y dirección editorial para revista de estilo de vida." },
  { id: "boots", title: "Transformación de troquel", category: "DISEÑO 3D", client: "UKN Producciones", year: "2021", image: aiBoots, size: "S", tools: ["Cinema 4D"],
    description: "Imagen producto en 3D de un troquel inicial a una previsualización del producto finalizado." },
  { id: "stand", title: "Grupo Calvo · Stand", category: "Branding", client: "Almacenes Vidrí", year: "2026", image: stand, size: "L", tools: ["NanoBanana Pro"],
    description: "Stand publicitario 3D para alimentación especializada Calvo." },
  { id: "poncho", title: "Cover de facebook", category: "RETAIL", client: "Castro Realty Houses", year: "2021", image: aiPoncho, size: "S", tools: ["Illustrator", "Photoshop"],
    description: "Cover de carrusel de Facebook." },
];

export const categories = ["Todos", "Branding", "3D GENERATIVO", "Social Media", "IA Generativa", "Editorial", "RETAIL", "DISEÑO 3D"] as const;

export const experiences = [
  {
    company: "UNASA",
    role: "Docente de Educación Superior",
    period: "ENE 2025 — ACTUALIDAD",
    description: "Instrucción y desarrollo del pensum para asignaturas como Diseño Corporativo. Guío a estudiantes en metodologías de branding y proyectos de identidad visual alineados a la industria.",
    skills: ["Branding", "Diseño Corporativo", "Pedagogía", "IA generativa"],
  },
  {
    company: "Almacenes VIDRÍ",
    role: "Diseñador para Medios Sociales",
    period: "SEPT 2022 — Actualidad",
    description: "Diseño y ejecución de activos visuales para campaña digitales, redes, email y web. Auditoría de arte para garantizar consistencia y calidad de marca en todas las plataformas.",
    skills: ["Social Media", "Branding", "IA generativa", "Meta Ads"],
  },
  {
    company: "Lingodocs Marketing LLC",
    role: "Social Media Manager",
    period: "JUN 2021 — SEPT 2022",
    description: "Planificación, diseño y ejecución de proyectos centrados en estrategias digitales para captación de clientes. Gestión completa del ciclo, fusionando diseño y marketing de contenidos.",
    skills: ["Estrategia digital", "Content marketing", "Community"],
  },
  {
    company: "UKN Producciones",
    role: "Diseñador Gráfico (Pasantía)",
    period: "ENE 2021 — JUN 2021",
    description: "Conceptualización y creación de empaques y branding. Aplicación de habilidades en diseño 3D y motion graphics.",
    skills: ["Packaging", "3D", "Motion graphics"],
  },
];

export const services = [
  {
    n: "01",
    title: "Diseño Gráfico & Branding",
    body: "Sistemas de identidad, packaging 3D y dirección de arte para marcas con propósito.",
  },
  {
    n: "02",
    title: "Comunicación Digital & RRSS",
    body: "Estrategia de contenido, comunidad y gestión integral de plataformas sociales.",
  },
  {
    n: "03",
    title: "Marketing con IA Generativa",
    body: "Producción comercial con Gemini, NanoBanana y VEO. Workflows de prompt a arte final.",
  },
  {
    n: "04",
    title: "Docencia Universitaria",
    body: "Formación en diseño corporativo, señalética y fundamentos del diseño.",
  },
];

export const stack = {
  Diseño: ["Illustrator", "Photoshop", "Photoshop", "After Effects", "NanoBanana Pro"],
  "IA Generativa": ["Gemini", "NanoBanana 2 Pro", "VEO", "Qwen Video", "ChatGPT"],
  Desarrollo: ["React", "Tailwind", "HTML/CSS", "JavaScript"],
  Marketing: ["RETAIL", "Google Analytics", "NotebookLM"],
};

export const education = [
  { year: "2026 — Actualidad", school: "Escuela de Negocios Europea de Barcelona", degree: "Máster en Dirección Comercial y Marketing" },
  { year: "2024", school: "Universidad Tecnológica de El Salvador", degree: "Posgrado en Comunicación Digital y Creación de Contenido" },
  { year: "2022", school: "Universidad Autónoma de Santa Ana", degree: "Licenciatura en Diseño Gráfico Multimedia" },
  { year: "2017", school: "Curso en Marketing Digital", degree: "Ministerio de Industria Energía y Turismo de España" },
];