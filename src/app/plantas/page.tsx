import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";

const plants = [
  { name: "Tomate", scientific: "Solanum lycopersicum", image: "/plantas/tomate.jpg", ideal: "Huerto, balcón y maceta grande", light: "Mucho sol (mínimo 6 horas al día)", water: "Regular, sin encharcar. En maceta en verano, a menudo cada 1–2 días", tips: ["Tutoriza la planta", "Evita mojar las hojas", "Más agua y abono al cuajar el fruto"], problems: ["Hojas amarillas → riego o nutrientes", "Manchas → posible hongo", "Punta negra → calcio / riego irregular"] },
  { name: "Limonero", scientific: "Citrus limon", image: "/plantas/limonero.jpg", ideal: "Terraza o patio en maceta grande", light: "Sol directo la mayor parte del día", water: "Moderado; deja secar un poco la superficie entre riegos", tips: ["Buen drenaje", "Abono para cítricos en primavera y verano", "Protege de heladas fuertes"], problems: ["Hojas amarillas → hierro o riego", "Pegajosas / negrilla → cotonet o pulgón", "Poca flor → sol o estrés"] },
  { name: "Albahaca", scientific: "Ocimum basilicum", image: "/plantas/albahaca.jpg", ideal: "Maceta en cocina, balcón o huerto", light: "Sol o mucha luz; sombra suave a mediodía en verano fuerte", water: "Tierra húmeda, no encharcada", tips: ["Pellizca puntas para ramificar", "Quita flores si quieres más hojas", "Sensible al frío"], problems: ["Hojas caídas → falta de agua o calor", "Pudrición → exceso de riego", "Agujeros → insectos"] },
  { name: "Menta", scientific: "Mentha sp.", image: "/plantas/menta.jpg", ideal: "Maceta (se extiende mucho en suelo)", light: "Sol o semisombra", water: "Constante; le gusta la humedad", tips: ["Mejor en maceta para controlar raíces", "Cosecha a menudo", "Renueva cada cierto tiempo"], problems: ["Hojas secas → falta de agua", "Mildiu → poca aireación", "Se invade el huerto si va libre"] },
  { name: "Pimiento", scientific: "Capsicum annuum", image: "/plantas/pimiento.jpg", ideal: "Huerto y maceta grande soleada", light: "Mucho sol (6+ horas)", water: "Regular; en maceta en verano casi a diario", tips: ["Tutoriza si carga fruto", "Abono al florir", "Zona cálida si el clima es fresco"], problems: ["Flores que caen → estrés", "Hojas amarillas → riego o abono", "Manchas en fruto → sol, frío o calcio"] },
  { name: "Fresa", scientific: "Fragaria × ananassa", image: "/plantas/fresa.jpg", ideal: "Jardineras, macetas y balcones", light: "Sol o sol suave", water: "Constante, sin encharcar", tips: ["Buen drenaje", "Controla estolones", "Frutos un poco elevados"], problems: ["Moho en frutos → humedad", "Hojas manchadas → hongos", "Pocas fresas → sol o abono"] },
  { name: "Lechuga", scientific: "Lactuca sativa", image: "/plantas/lechuga.jpg", ideal: "Huerto, jardinera y maceta", light: "Sol suave o semisombra; sombra a mediodía en verano", water: "Constante; tierra húmeda", tips: ["Siembra sucesiva cada 2–3 semanas", "Cosecha hojas o cogollo", "Variedades de verano si hace calor"], problems: ["Espigado → calor o falta de agua", "Bordes quemados → sol o riego", "Agujeros → caracoles o insectos"] },
  { name: "Romero", scientific: "Salvia rosmarinus", image: "/plantas/romero.jpg", ideal: "Maceta, terraza y jardín seco", light: "Sol directo", water: "Poco; deja secar entre riegos", tips: ["Drenaje excelente", "Poco abono", "Tolera sequía, no el encharque"], problems: ["Hojas secas abajo → exceso de riego", "Tras lluvias → mal drenaje", "Poco aroma → falta de sol"] },
  { name: "Pepino", scientific: "Cucumis sativus", image: "/plantas/pepino.jpg", ideal: "Huerto o maceta grande con soporte", light: "Mucho sol", water: "Generoso y regular", tips: ["Tutoriza o enrejado", "Abono al crecer", "Buena aireación"], problems: ["Hojas amarillas → riego o nutrientes", "Mildiu → humedad en hojas", "Frutos amargos → estrés hídrico"] },
  { name: "Zanahoria", scientific: "Daucus carota", image: "/plantas/zanahoria.jpg", ideal: "Suelo suelto y profundo; jardineras altas", light: "Sol o sol parcial", water: "Regular y uniforme", tips: ["Tierra sin piedras", "Aclara plántulas", "No abones en exceso con nitrógeno"], problems: ["Raíces torcidas → suelo duro", "Pocas raíces → exceso de abono N", "Partidas → riego irregular"] },
  { name: "Cebolla", scientific: "Allium cepa", image: "/plantas/cebolla.jpg", ideal: "Huerto o mesa de cultivo", light: "Sol", water: "Moderado; menos al engrosar el bulbo", tips: ["Suelo suelto", "No enterrar demasiado el bulbo", "Cosecha cuando se sequen las hojas"], problems: ["Pudrición → exceso de agua", "Poco tamaño → falta de sol o espacio", "Plagas → revisa hojas"] },
  { name: "Ajo", scientific: "Allium sativum", image: "/plantas/ajo.jpg", ideal: "Huerto; macetas profundas", light: "Sol", water: "Poco; no encharcar", tips: ["Planta dientes en otoño/invierno según zona", "Suelo bien drenado", "Cosecha al secarse la parte aérea"], problems: ["Pudrición → humedad", "Dientes pequeños → suelo pobre o poca luz", "Hongos → mala aireación"] },
  { name: "Perejil", scientific: "Petroselinum crispum", image: "/plantas/perejil.jpg", ideal: "Maceta o huerto", light: "Sol suave o semisombra", water: "Regular; no dejes secar del todo", tips: ["Germinación lenta", "Cosecha hojas exteriores", "Bienal: el segundo año florece"], problems: ["Hojas amarillas → riego o nutrientes", "Seco → falta de agua", "Pocas hojas → poca luz"] },
  { name: "Cilantro", scientific: "Coriandrum sativum", image: "/plantas/cilantro.jpg", ideal: "Maceta o huerto; siembras sucesivas", light: "Sol suave; en calor, semisombra", water: "Regular", tips: ["Se espiga con calor", "Siembra cada pocas semanas", "Usa hojas frescas"], problems: ["Espigado rápido → calor", "Hojas flojas → falta de agua", "Poca producción → siembra única"] },
  { name: "Guindilla / chile", scientific: "Capsicum spp.", image: "/plantas/guindilla.jpg", ideal: "Maceta o huerto muy soleado", light: "Mucho sol", water: "Regular; algo más al fructificar", tips: ["Calor y sol", "Maceta con buen drenaje", "Guantes con variedades picantes"], problems: ["Flores que caen → estrés", "Hojas amarillas → riego", "Poco fruto → falta de sol"] },
  { name: "Berenjena", scientific: "Solanum melongena", image: "/plantas/berenjena.jpg", ideal: "Huerto o maceta grande; clima cálido", light: "Mucho sol", water: "Regular y generoso en calor", tips: ["Necesita calor", "Tutoriza", "Abono al florir y cuajar"], problems: ["Pocas flores → frío o falta de sol", "Hojas amarillas → riego o nutrientes", "Frutos pequeños → estrés"] },
];

export default function PlantasPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-brand-50/80 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Link href="/" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            ← BotanicaHelp
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-950">
            Plantas del huerto y balcón
          </h1>
          <p className="mt-2 max-w-2xl text-brand-800/80">
            Guías rápidas de las verduras, frutas y hierbas más habituales. Si tienes un problema,
            sube una foto al asistente.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((p) => (
              <article
                key={p.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm shadow-brand-900/5"
              >
                <div className="relative aspect-[4/3] w-full bg-brand-50">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-bold text-brand-950">{p.name}</h2>
                  <p className="text-xs italic text-brand-700/60">{p.scientific}</p>
                  <p className="mt-3 text-sm text-brand-800/90">
                    <span className="font-semibold">Ideal:</span> {p.ideal}
                  </p>
                  <p className="mt-1 text-sm text-brand-800/90">
                    <span className="font-semibold">Luz:</span> {p.light}
                  </p>
                  <p className="mt-1 text-sm text-brand-800/90">
                    <span className="font-semibold">Riego:</span> {p.water}
                  </p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Consejos</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-brand-800/85">
                      {p.tips.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">Problemas frecuentes</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-brand-800/85">
                      {p.problems.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-5">
                    <Link
                      href="/ayuda"
                      className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/25 transition hover:bg-brand-700"
                    >
                      Preguntar al asistente
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
