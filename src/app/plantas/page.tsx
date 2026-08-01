import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

const plants = [
  {
    name: "Tomate",
    scientific: "Solanum lycopersicum",
    emoji: "🍅",
    color: "from-red-100 to-orange-50",
    ideal: "Huerto, balcón y maceta grande",
    light: "Mucho sol (mínimo 6 horas al día)",
    water: "Regular, sin encharcar. En verano en maceta, a menudo cada 1–2 días",
    tips: [
      "Tutoriza la planta para que no se tumbe",
      "Evita mojar las hojas (menos hongos)",
      "Cuando cuaje el fruto, un poco más de agua y abono ayuda",
    ],
    problems: [
      "Hojas amarillas → exceso o falta de riego, o falta de nutrientes",
      "Manchas en hojas → posible hongo; mejora aireación",
      "Punta negra del tomate → calcio / riego irregular",
    ],
  },
  {
    name: "Limonero",
    scientific: "Citrus limon",
    emoji: "🍋",
    color: "from-yellow-100 to-lime-50",
    ideal: "Terraza o patio en maceta grande",
    light: "Sol directo la mayor parte del día",
    water: "Moderado. Deja secar un poco la superficie entre riegos",
    tips: [
      "Maceta con buen drenaje",
      "Abono para cítricos en primavera y verano",
      "Protege del frío intenso si hay heladas",
    ],
    problems: [
      "Hojas amarillas → riego irregular, falta de hierro o mal drenaje",
      "Hojas pegajosas / negrilla → posible cotonet o pulgón",
      "Poca flor o fruto → falta de sol, abono o estrés por riego",
    ],
  },
  {
    name: "Albahaca",
    scientific: "Ocimum basilicum",
    emoji: "🌿",
    color: "from-green-100 to-emerald-50",
    ideal: "Maceta en cocina, balcón o huerto",
    light: "Sol o mucha luz; en verano fuerte, algo de sombra a mediodía",
    water: "Tierra húmeda, no encharcada. No dejes secar del todo",
    tips: [
      "Pellizca las puntas para que se ramifique",
      "Quita flores si quieres más hojas",
      "Sensible al frío: en invierno mejor resguardada",
    ],
    problems: [
      "Hojas caídas → falta de agua o demasiado calor",
      "Manchas o pudrición → exceso de riego",
      "Hojas agujereadas → posibles insectos; revisa el envés",
    ],
  },
  {
    name: "Pimiento",
    scientific: "Capsicum annuum",
    emoji: "🌶️",
    color: "from-orange-100 to-red-50",
    ideal: "Huerto y maceta grande en balcón soleado",
    light: "Mucho sol (6+ horas)",
    water: "Regular; húmeda pero no encharcada. En maceta en verano, casi a diario",
    tips: [
      "Tutoriza si carga mucho fruto",
      "Abono cuando empiece a florar",
      "En climas frescos, zona cálida y protegida",
    ],
    problems: [
      "Flores que caen → estrés por riego, calor o nutrientes",
      "Hojas amarillas → riego irregular o falta de abono",
      "Manchas en frutos → sol fuerte, frío o falta de calcio",
    ],
  },
  {
    name: "Fresa",
    scientific: "Fragaria × ananassa",
    emoji: "🍓",
    color: "from-pink-100 to-rose-50",
    ideal: "Jardineras, macetas y balcones",
    light: "Sol o sol suave; en mucho calor, sombra por la tarde",
    water: "Constante, sin encharcar. Humedad uniforme",
    tips: [
      "Buen drenaje (no toleran raíces pudridas)",
      "Quita estolones si quieres más fruto en la madre",
      "Mantén frutos elevados para evitar pudrición",
    ],
    problems: [
      "Frutos blandos / moho → exceso de humedad",
      "Hojas manchadas → posibles hongos",
      "Pocas fresas → falta de sol o de abono",
    ],
  },
  {
    name: "Romero",
    scientific: "Salvia rosmarinus",
    emoji: "🌱",
    color: "from-teal-100 to-green-50",
    ideal: "Maceta, terraza y jardín seco",
    light: "Sol directo",
    water: "Poco. Deja secar bien la tierra entre riegos",
    tips: [
      "Sustrato que drene muy bien",
      "No necesita mucho abono",
      "Tolera calor y sequía; mal el encharcamiento",
    ],
    problems: [
      "Hojas secas desde abajo → a menudo exceso de riego",
      "Planta triste tras lluvias → mal drenaje",
      "Poco aroma o crecimiento flojo → falta de sol",
    ],
  },
  {
    name: "Lechuga",
    scientific: "Lactuca sativa",
    emoji: "🥬",
    color: "from-lime-100 to-green-50",
    ideal: "Huerto, jardinera y maceta en balcón",
    light: "Sol suave o semisombra. En verano, sombra a mediodía",
    water: "Constante. Tierra húmeda, sin encharcar",
    tips: [
      "Siembra sucesiva cada 2–3 semanas",
      "Cosecha hojas exteriores o el cogollo entero",
      "En calor, variedades de verano más resistentes",
    ],
    problems: [
      "Hojas amargas o espigado → calor o falta de agua",
      "Bordes quemados → sol excesivo o riego irregular",
      "Agujeros en hojas → caracoles, babosas o insectos",
    ],
  },
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
            Guías rápidas para las plantas más comunes en Europa. Si tienes un problema, sube una
            foto al asistente.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((p) => (
              <article
                key={p.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm shadow-brand-900/5"
              >
                <div
                  className={`flex aspect-[4/3] w-full items-center justify-center bg-gradient-to-br ${p.color}`}
                >
                  <span className="text-7xl" role="img" aria-label={p.name}>
                    {p.emoji}
                  </span>
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
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      Consejos
                    </p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-brand-800/85">
                      {p.tips.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">
                      Problemas frecuentes
                    </p>
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
