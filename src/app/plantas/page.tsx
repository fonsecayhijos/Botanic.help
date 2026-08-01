"use client";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const plants = [
  { name: { es: "Tomate", de: "Tomate", en: "Tomato" }, scientific: "Solanum lycopersicum", image: "/Plantas/tomate.jpg", ideal: { es: "Huerto, balcón y maceta grande", de: "Garten, Balkon und großer Topf", en: "Garden, balcony and large pot" }, light: { es: "Mucho sol (mínimo 6 horas al día)", de: "Viel Sonne (mindestens 6 Stunden täglich)", en: "Full sun (at least 6 hours a day)" }, water: { es: "Regular, sin encharcar", de: "Regelmäßig, ohne Staunässe", en: "Regular, without waterlogging" }, tips: { es: ["Tutoriza la planta", "Evita mojar las hojas", "Más agua y abono al cuajar el fruto"], de: ["Stütze die Pflanze", "Blätter nicht nass machen", "Mehr Wasser und Dünger beim Fruchtansatz"], en: ["Stake the plant", "Avoid wetting the leaves", "More water and feed when fruit sets"] }, problems: { es: ["Hojas amarillas → riego o nutrientes", "Manchas → posible hongo", "Punta negra → calcio / riego"], de: ["Gelbe Blätter → Gießen oder Nährstoffe", "Flecken → mögliche Pilze", "Blütenendfäule → Kalzium / Gießen"], en: ["Yellow leaves → water or nutrients", "Spots → possible fungus", "Blossom end rot → calcium / watering"] } },
  { name: { es: "Limonero", de: "Zitronenbaum", en: "Lemon tree" }, scientific: "Citrus limon", image: "/Plantas/limonero.jpg", ideal: { es: "Terraza o patio en maceta grande", de: "Terrasse oder Hof im großen Topf", en: "Terrace or patio in a large pot" }, light: { es: "Sol directo", de: "Direkte Sonne", en: "Direct sun" }, water: { es: "Moderado; deja secar un poco entre riegos", de: "Mäßig; Oberfläche antrocknen lassen", en: "Moderate; let surface dry between waterings" }, tips: { es: ["Buen drenaje", "Abono para cítricos", "Protege de heladas"], de: ["Gute Drainage", "Zitrusdünger", "Vor Frost schützen"], en: ["Good drainage", "Citrus fertilizer", "Protect from hard frost"] }, problems: { es: ["Hojas amarillas → hierro o riego", "Pegajosas → cotonet o pulgón", "Poca flor → sol o estrés"], de: ["Gelbe Blätter → Eisen oder Gießen", "Klebrig → Wollläuse/Blattläuse", "Wenig Blüten → Sonne oder Stress"], en: ["Yellow leaves → iron or watering", "Sticky → mealybug or aphids", "Few flowers → sun or stress"] } },
  { name: { es: "Albahaca", de: "Basilikum", en: "Basil" }, scientific: "Ocimum basilicum", image: "/Plantas/albahaca.jpg", ideal: { es: "Maceta en cocina, balcón o huerto", de: "Topf in Küche, Balkon oder Garten", en: "Pot in kitchen, balcony or garden" }, light: { es: "Sol o mucha luz", de: "Sonne oder viel Licht", en: "Sun or bright light" }, water: { es: "Tierra húmeda, no encharcada", de: "Feuchte Erde, keine Nässe", en: "Moist soil, not soggy" }, tips: { es: ["Pellizca puntas", "Quita flores para más hojas", "Sensible al frío"], de: ["Spitzen kneifen", "Blüten entfernen", "Kälteempfindlich"], en: ["Pinch tips", "Remove flowers for more leaves", "Cold sensitive"] }, problems: { es: ["Hojas caídas → agua o calor", "Pudrición → exceso de riego", "Agujeros → insectos"], de: ["Welke Blätter → Wasser oder Hitze", "Fäulnis → zu viel Gießen", "Löcher → Insekten"], en: ["Drooping leaves → water or heat", "Rot → overwatering", "Holes → insects"] } },
  { name: { es: "Menta", de: "Minze", en: "Mint" }, scientific: "Mentha sp.", image: "/Plantas/menta.jpg", ideal: { es: "Maceta (se extiende mucho)", de: "Topf (breitet sich stark aus)", en: "Pot (spreads aggressively)" }, light: { es: "Sol o semisombra", de: "Sonne oder Halbschatten", en: "Sun or partial shade" }, water: { es: "Constante; le gusta la humedad", de: "Gleichmäßig feucht", en: "Consistent moisture" }, tips: { es: ["Mejor en maceta", "Cosecha a menudo", "Controla las raíces"], de: ["Besser im Topf", "Oft ernten", "Wurzeln kontrollieren"], en: ["Better in a pot", "Harvest often", "Control the roots"] }, problems: { es: ["Hojas secas → falta de agua", "Mildiu → poca aireación"], de: ["Trockene Blätter → Wassermangel", "Mehltau → wenig Luft"], en: ["Dry leaves → lack of water", "Mildew → poor airflow"] } },
  { name: { es: "Pimiento", de: "Paprika", en: "Pepper" }, scientific: "Capsicum annuum", image: "/Plantas/pimiento.jpg", ideal: { es: "Huerto y maceta soleada", de: "Garten und sonniger Topf", en: "Garden and sunny pot" }, light: { es: "Mucho sol", de: "Viel Sonne", en: "Full sun" }, water: { es: "Regular; en verano casi a diario en maceta", de: "Regelmäßig; im Topf im Sommer fast täglich", en: "Regular; almost daily in pots in summer" }, tips: { es: ["Tutoriza si carga fruto", "Abono al florir"], de: ["Stützen bei Fruchtbehang", "Düngen bei Blüte"], en: ["Stake if heavy with fruit", "Feed when flowering"] }, problems: { es: ["Flores que caen → estrés", "Hojas amarillas → riego o abono"], de: ["Blütenfall → Stress", "Gelbe Blätter → Gießen oder Dünger"], en: ["Flower drop → stress", "Yellow leaves → water or feed"] } },
  { name: { es: "Fresa", de: "Erdbeere", en: "Strawberry" }, scientific: "Fragaria × ananassa", image: "/Plantas/fresa.jpg", ideal: { es: "Jardineras y balcones", de: "Balkonkisten und Töpfe", en: "Planters and balconies" }, light: { es: "Sol o sol suave", de: "Sonne oder leichte Sonne", en: "Sun or gentle sun" }, water: { es: "Constante, sin encharcar", de: "Gleichmäßig, ohne Staunässe", en: "Even moisture, no waterlogging" }, tips: { es: ["Buen drenaje", "Controla estolones"], de: ["Gute Drainage", "Ausläufer kontrollieren"], en: ["Good drainage", "Control runners"] }, problems: { es: ["Moho → humedad", "Pocas fresas → sol o abono"], de: ["Schimmel → Feuchtigkeit", "Wenig Früchte → Sonne oder Dünger"], en: ["Mold → humidity", "Few berries → sun or feed"] } },
  { name: { es: "Lechuga", de: "Salat", en: "Lettuce" }, scientific: "Lactuca sativa", image: "/Plantas/lechuga.jpg", ideal: { es: "Huerto y maceta", de: "Garten und Topf", en: "Garden and pot" }, light: { es: "Sol suave o semisombra", de: "Leichte Sonne oder Halbschatten", en: "Gentle sun or partial shade" }, water: { es: "Constante", de: "Gleichmäßig feucht", en: "Consistent" }, tips: { es: ["Siembra sucesiva", "Cosecha hojas o cogollo"], de: ["Staffelaussaat", "Blätter oder Kopf ernten"], en: ["Succession sowing", "Harvest leaves or head"] }, problems: { es: ["Espigado → calor", "Agujeros → caracoles"], de: ["Schießen → Hitze", "Löcher → Schnecken"], en: ["Bolting → heat", "Holes → snails"] } },
  { name: { es: "Romero", de: "Rosmarin", en: "Rosemary" }, scientific: "Salvia rosmarinus", image: "/Plantas/romero.jpg", ideal: { es: "Maceta y jardín seco", de: "Topf und trockener Garten", en: "Pot and dry garden" }, light: { es: "Sol directo", de: "Volle Sonne", en: "Full sun" }, water: { es: "Poco; deja secar entre riegos", de: "Wenig; antrocknen lassen", en: "Sparse; let dry between waterings" }, tips: { es: ["Drenaje excelente", "Poco abono"], de: ["Sehr gute Drainage", "Wenig Dünger"], en: ["Excellent drainage", "Little fertilizer"] }, problems: { es: ["Hojas secas → exceso de riego", "Poco aroma → falta de sol"], de: ["Trockene Blätter → zu viel Wasser", "Wenig Duft → zu wenig Sonne"], en: ["Dry leaves → overwatering", "Little aroma → lack of sun"] } },
  { name: { es: "Pepino", de: "Gurke", en: "Cucumber" }, scientific: "Cucumis sativus", image: "/Plantas/pepino.jpg", ideal: { es: "Huerto o maceta con soporte", de: "Garten oder Topf mit Rankhilfe", en: "Garden or pot with support" }, light: { es: "Mucho sol", de: "Viel Sonne", en: "Full sun" }, water: { es: "Generoso y regular", de: "Reichlich und regelmäßig", en: "Generous and regular" }, tips: { es: ["Tutoriza o enrejado", "Buena aireación"], de: ["Rankhilfe", "Gute Luftzirkulation"], en: ["Trellis", "Good airflow"] }, problems: { es: ["Mildiu → humedad en hojas", "Frutos amargos → estrés"], de: ["Mehltau → nasse Blätter", "Bittere Früchte → Stress"], en: ["Mildew → wet leaves", "Bitter fruit → stress"] } },
  { name: { es: "Zanahoria", de: "Möhre", en: "Carrot" }, scientific: "Daucus carota", image: "/Plantas/zanahoria.jpg", ideal: { es: "Suelo suelto y profundo", de: "Lockerer, tiefer Boden", en: "Loose, deep soil" }, light: { es: "Sol o sol parcial", de: "Sonne oder Halbschatten", en: "Sun or partial sun" }, water: { es: "Regular y uniforme", de: "Gleichmäßig", en: "Even and regular" }, tips: { es: ["Tierra sin piedras", "Aclara plántulas"], de: ["Steinfreier Boden", "Vereinzeln"], en: ["Stone-free soil", "Thin seedlings"] }, problems: { es: ["Raíces torcidas → suelo duro", "Partidas → riego irregular"], de: ["Krumme Wurzeln → harter Boden", "Platzen → unregelmäßiges Gießen"], en: ["Twisted roots → hard soil", "Split roots → uneven watering"] } },
  { name: { es: "Cebolla", de: "Zwiebel", en: "Onion" }, scientific: "Allium cepa", image: "/Plantas/cebolla.jpg", ideal: { es: "Huerto o mesa de cultivo", de: "Garten oder Hochbeet", en: "Garden or raised bed" }, light: { es: "Sol", de: "Sonne", en: "Sun" }, water: { es: "Moderado", de: "Mäßig", en: "Moderate" }, tips: { es: ["Suelo suelto", "Cosecha al secarse las hojas"], de: ["Lockerer Boden", "Ernten wenn Laub trocknet"], en: ["Loose soil", "Harvest when tops dry"] }, problems: { es: ["Pudrición → exceso de agua"], de: ["Fäulnis → zu viel Wasser"], en: ["Rot → too much water"] } },
  { name: { es: "Ajo", de: "Knoblauch", en: "Garlic" }, scientific: "Allium sativum", image: "/Plantas/ajo.jpg", ideal: { es: "Huerto; macetas profundas", de: "Garten; tiefe Töpfe", en: "Garden; deep pots" }, light: { es: "Sol", de: "Sonne", en: "Sun" }, water: { es: "Poco", de: "Wenig", en: "Little" }, tips: { es: ["Buen drenaje", "Planta dientes según temporada"], de: ["Gute Drainage", "Zehen je nach Saison stecken"], en: ["Good drainage", "Plant cloves in season"] }, problems: { es: ["Pudrición → humedad"], de: ["Fäulnis → Nässe"], en: ["Rot → moisture"] } },
  { name: { es: "Perejil", de: "Petersilie", en: "Parsley" }, scientific: "Petroselinum crispum", image: "/Plantas/perejil.jpg", ideal: { es: "Maceta o huerto", de: "Topf oder Garten", en: "Pot or garden" }, light: { es: "Sol suave o semisombra", de: "Leichte Sonne oder Halbschatten", en: "Gentle sun or partial shade" }, water: { es: "Regular", de: "Regelmäßig", en: "Regular" }, tips: { es: ["Germinación lenta", "Cosecha hojas exteriores"], de: ["Langsame Keimung", "Äußere Blätter ernten"], en: ["Slow to germinate", "Harvest outer leaves"] }, problems: { es: ["Hojas amarillas → riego o nutrientes"], de: ["Gelbe Blätter → Gießen oder Nährstoffe"], en: ["Yellow leaves → water or nutrients"] } },
  { name: { es: "Cilantro", de: "Koriander", en: "Cilantro / coriander" }, scientific: "Coriandrum sativum", image: "/Plantas/cilantro.jpg", ideal: { es: "Maceta o huerto; siembras sucesivas", de: "Topf oder Garten; Staffelaussaat", en: "Pot or garden; succession sowing" }, light: { es: "Sol suave", de: "Leichte Sonne", en: "Gentle sun" }, water: { es: "Regular", de: "Regelmäßig", en: "Regular" }, tips: { es: ["Se espiga con calor", "Siembra cada pocas semanas"], de: ["Schießt bei Hitze", "Alle paar Wochen säen"], en: ["Bolts in heat", "Sow every few weeks"] }, problems: { es: ["Espigado rápido → calor"], de: ["Schnelles Schießen → Hitze"], en: ["Fast bolting → heat"] } },
  { name: { es: "Guindilla / chile", de: "Chili", en: "Chili pepper" }, scientific: "Capsicum spp.", image: "/Plantas/guindilla.jpg", ideal: { es: "Maceta o huerto soleado", de: "Topf oder sonniger Garten", en: "Pot or sunny garden" }, light: { es: "Mucho sol", de: "Viel Sonne", en: "Full sun" }, water: { es: "Regular", de: "Regelmäßig", en: "Regular" }, tips: { es: ["Calor y sol", "Buen drenaje"], de: ["Wärme und Sonne", "Gute Drainage"], en: ["Heat and sun", "Good drainage"] }, problems: { es: ["Flores que caen → estrés"], de: ["Blütenfall → Stress"], en: ["Flower drop → stress"] } },
  { name: { es: "Berenjena", de: "Aubergine", en: "Eggplant" }, scientific: "Solanum melongena", image: "/Plantas/berenjena.jpg", ideal: { es: "Huerto o maceta grande; clima cálido", de: "Garten oder großer Topf; warm", en: "Garden or large pot; warm climate" }, light: { es: "Mucho sol", de: "Viel Sonne", en: "Full sun" }, water: { es: "Regular y generoso en calor", de: "Regelmäßig und reichlich bei Hitze", en: "Regular and generous in heat" }, tips: { es: ["Necesita calor", "Tutoriza"], de: ["Braucht Wärme", "Stützen"], en: ["Needs heat", "Stake"] }, problems: { es: ["Pocas flores → frío o falta de sol"], de: ["Wenig Blüten → Kälte oder zu wenig Sonne"], en: ["Few flowers → cold or lack of sun"] } },
];

type Lang = "es" | "de" | "en";

export default function PlantasPage() {
  const { t, locale } = useLanguage();
  const lang = (locale as Lang) || "es";
  const p = t.plants;

  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-brand-50/80 to-white">
        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
          <Link href="/" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            {p.back}
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-950">{p.title}</h1>
          <p className="mt-2 max-w-2xl text-brand-800/80">{p.subtitle}</p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {plants.map((item) => (
              <article
                key={item.scientific}
                className="flex flex-col overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-sm shadow-brand-900/5"
              >
                <div className="relative aspect-[4/3] w-full bg-brand-50">
                  <Image
                    src={item.image}
                    alt={item.name[lang]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <h2 className="text-xl font-bold text-brand-950">{item.name[lang]}</h2>
                  <p className="text-xs italic text-brand-700/60">{item.scientific}</p>
                  <p className="mt-3 text-sm text-brand-800/90">
                    <span className="font-semibold">{p.ideal}:</span> {item.ideal[lang]}
                  </p>
                  <p className="mt-1 text-sm text-brand-800/90">
                    <span className="font-semibold">{p.light}:</span> {item.light[lang]}
                  </p>
                  <p className="mt-1 text-sm text-brand-800/90">
                    <span className="font-semibold">{p.water}:</span> {item.water[lang]}
                  </p>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{p.tips}</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-brand-800/85">
                      {item.tips[lang].map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-3">
                    <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{p.problems}</p>
                    <ul className="mt-1 list-disc space-y-0.5 pl-4 text-sm text-brand-800/85">
                      {item.problems[lang].map((x) => (
                        <li key={x}>{x}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-auto pt-5">
                    <Link
                      href="/ayuda"
                      className="inline-flex w-full items-center justify-center rounded-full bg-brand-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-brand-600/25 transition hover:bg-brand-700"
                    >
                      {p.askAssistant}
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
