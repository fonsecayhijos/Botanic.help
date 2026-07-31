import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import Link from "next/link";

export default function PrivacidadPage() {
  return (
    <>
      <Header />
      <main className="bg-gradient-to-b from-brand-50/80 to-white">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 sm:py-14">
          <Link href="/" className="text-sm font-medium text-brand-600 hover:text-brand-700">
            ← BotanicaHelp
          </Link>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-brand-950">Política de privacidad</h1>
          <div className="mt-6 space-y-4 text-brand-900/90 leading-relaxed">
            <p><strong>Responsables:</strong> Vicente Fonseca Rodríguez y Abdón Fonseca Gual, Chipiona (Cádiz), España.</p>
            <p><strong>Contacto:</strong> info@botanicahelp.com</p>
            <p><strong>Datos que tratamos:</strong> email, datos de cuenta, uso del asistente, fotos de plantas que subas y datos de pago gestionados por Stripe.</p>
            <p><strong>Finalidad:</strong> prestar el servicio BotanicaHelp, gestionar suscripciones, mejorar el asistente y cumplir obligaciones legales.</p>
            <p><strong>Base legal:</strong> ejecución del contrato y, cuando proceda, tu consentimiento.</p>
            <p><strong>Conservación:</strong> mientras mantengas la cuenta o el tiempo exigido por la ley.</p>
            <p><strong>Encargados del tratamiento:</strong> Supabase (infraestructura de datos), Stripe (pagos) y xAI (procesamiento de IA).</p>
            <p><strong>Derechos:</strong> puedes solicitar acceso, rectificación, supresión, oposición, limitación y portabilidad escribiendo a info@botanicahelp.com.</p>
            <p>No vendemos tus datos personales a terceros con fines comerciales.</p>
            <p className="text-sm text-brand-800/70">Última actualización: julio 2026.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
