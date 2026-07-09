import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  SlidersHorizontal,
  Gauge,
  Server,
  Database,
  Sparkles,
  ArrowRight,
  Check,
  X,
  Scale,
  Stethoscope,
  Building2,
  UserRound,
  CloudOff,
  Wallet,
  Wrench,
  Zap,
  Lock,
  Linkedin,
  Users,
  HeadphonesIcon,
  HardDrive,
} from "lucide-react";
import heroServer from "@/assets/hero-server.png";
import benefitsServer from "@/assets/benefits-server.png";
import { Reveal } from "@/components/Reveal";

export const Route = createFileRoute("/")({
  component: Index,
});

const nav = [
  { label: "Producto", href: "#producto" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Precios", href: "#precios" },
  { label: "Casos de uso", href: "#casos" },
  { label: "Comparativa", href: "#comparativa" },
];

function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <Lock className="h-4 w-4" />
      </div>
      <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
        Nex Ram
      </span>
    </div>
  );
}

function PrimaryButton({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      to="/demo"
      className={`group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110 ${className}`}
    >
      {children}
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}

function SecondaryButton({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="/demo"
      className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40"
    >
      {children}
    </Link>
  );
}

function Index() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-background pt-20">
      {/* NAV */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-3 sm:px-6">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-full glass px-5 py-3 shadow-soft">
          <Logo />
          <nav className="hidden items-center gap-8 md:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <Link
            to="/demo"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:brightness-110"
          >
            Solicitar demo
          </Link>
        </div>
      </header>

      {/* HERO */}
      <section className="relative bg-hero-gradient">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 pb-16 pt-16 lg:grid-cols-[1.05fr_1fr] lg:pb-28 lg:pt-24">
          <div>
            <Reveal>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-muted-foreground backdrop-blur">
                <Sparkles className="h-3.5 w-3.5 text-primary" />
                IA privada, 100% local
              </span>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="mt-6 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                Tu IA.
                <br />
                Tus datos.
                <br />
                <span className="text-primary">Tu control.</span>
              </h1>
            </Reveal>
            <Reveal delay={160}>
              <p className="mt-6 text-lg font-medium text-foreground/80 sm:text-xl">
                Sin nube. Sin suscripciones obligatorias. Con el rendimiento que
                tu empresa necesita.
              </p>
            </Reveal>
            <Reveal delay={220}>
              <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
                Nuestro servidor ejecuta inteligencia artificial completamente
                privada desde las propias instalaciones del cliente. Toda la
                información permanece protegida y bajo tu control, sin salir
                nunca de tu organización.
              </p>
            </Reveal>
            <Reveal delay={300}>
              <div className="mt-8 flex flex-wrap gap-3">
                <PrimaryButton>Da el salto a la IA privada</PrimaryButton>
                <SecondaryButton>Solicitar una demo</SecondaryButton>
              </div>
            </Reveal>
          </div>

          <Reveal delay={200} className="relative">
            <div className="absolute inset-0 -z-10 mx-auto h-[80%] w-[80%] rounded-full bg-primary/20 blur-3xl" />
            <img
              src={heroServer}
              alt="Render premium del servidor de IA privada Nex Ram con iluminación azul"
              width={1280}
              height={1280}
              className="float-slow mx-auto w-full max-w-md drop-shadow-2xl"
            />
          </Reveal>
        </div>
      </section>

      {/* WHY */}
      <section id="producto" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            ¿Por qué elegir nuestra solución?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tres principios que definen una nueva forma de trabajar con
            inteligencia artificial.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: ShieldCheck,
              title: "Privacidad absoluta",
              text: "Tus datos nunca abandonan la empresa. El procesamiento ocurre en local, así que la información sensible jamás se envía a la nube ni a terceros.",
            },
            {
              icon: SlidersHorizontal,
              title: "Control total",
              text: "Gestionas tu propia inteligencia artificial sin depender de proveedores externos. Tú decides qué datos usa, cómo y cuándo.",
            },
            {
              icon: Gauge,
              title: "Alto rendimiento",
              text: "Infraestructura optimizada para un uso eficiente de memoria y recursos, manteniendo respuestas rápidas y un rendimiento sostenido.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 100}
              as="article"
              className="group rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <div className="grid h-12 w-12 place-items-center rounded-2xl bg-accent/50 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 text-xl font-bold text-foreground">
                {c.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.text}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="como-funciona" className="bg-softgray/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Cómo funciona
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Tres pasos sencillos para tener tu IA privada en marcha.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: Server,
                step: "01",
                title: "Instala el servidor",
                text: "Recibes y conectas el servidor Nex Ram en tus propias instalaciones. Listo para funcionar desde el primer día.",
              },
              {
                icon: Database,
                step: "02",
                title: "Conecta tus datos",
                text: "Vinculas tus documentos y bases de datos internas de forma segura, sin que nada salga de tu red.",
              },
              {
                icon: Sparkles,
                step: "03",
                title: "Empieza a trabajar",
                text: "Utiliza una inteligencia artificial completamente privada y segura para tu equipo, sin depender de la nube.",
              },
            ].map((s, i) => (
              <Reveal
                key={s.step}
                delay={i * 100}
                as="article"
                className="relative rounded-3xl border border-border bg-card p-8 shadow-soft"
              >
                <span className="font-display text-5xl font-extrabold text-accent">
                  {s.step}
                </span>
                <div className="mt-4 grid h-11 w-11 place-items-center rounded-2xl bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-foreground">
                  {s.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal className="relative order-2 lg:order-1">
            <div className="absolute inset-0 -z-10 mx-auto h-3/4 w-3/4 rounded-full bg-aqua/40 blur-3xl" />
            <img
              src={benefitsServer}
              alt="Ilustración 3D del servidor de IA privada"
              width={1024}
              height={1024}
              loading="lazy"
              className="mx-auto w-full max-w-sm drop-shadow-2xl"
            />
          </Reveal>

          <div className="order-1 lg:order-2">
            <Reveal>
              <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
                Todas las ventajas, sin renuncias
              </h2>
              <p className="mt-4 text-lg text-muted-foreground">
                Potencia de IA de última generación con la tranquilidad de
                mantener tu información en casa.
              </p>
            </Reveal>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                { icon: Lock, t: "IA privada" },
                { icon: ShieldCheck, t: "Datos siempre bajo tu control" },
                { icon: CloudOff, t: "Funcionamiento sin nube" },
                { icon: Wallet, t: "Sin suscripciones obligatorias" },
                { icon: Wrench, t: "Instalación sencilla" },
                { icon: Zap, t: "Alto rendimiento" },
                { icon: Building2, t: "Solución preparada para empresas" },
              ].map((b, i) => (
                <Reveal
                  key={b.t}
                  delay={i * 60}
                  as="li"
                  className="flex items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 shadow-soft"
                >
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-xl bg-accent/50 text-primary">
                    <b.icon className="h-4 w-4" />
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {b.t}
                  </span>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON */}
      <section id="comparativa" className="bg-softgray/60 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              IA en la nube vs. servidor Nex Ram
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              La diferencia entre depender de terceros y tener el control
              absoluto.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <Reveal className="rounded-3xl border border-border bg-card p-8 shadow-soft">
              <h3 className="text-lg font-bold text-muted-foreground">
                IA basada en la nube
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Requiere enviar tus datos fuera de la empresa",
                  "Depende por completo de una conexión a Internet",
                  "Funciona mediante suscripciones recurrentes",
                  "Privacidad limitada y sujeta a terceros",
                  "Costes variables y difíciles de prever",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-destructive/10 text-destructive">
                      <X className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-muted-foreground">{t}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal
              delay={120}
              className="rounded-3xl border-2 border-primary/30 bg-card p-8 shadow-glow"
            >
              <h3 className="flex items-center gap-2 text-lg font-bold text-primary">
                <Lock className="h-5 w-5" /> Servidor Nex Ram
              </h3>
              <ul className="mt-6 space-y-4">
                {[
                  "Procesa toda la información localmente",
                  "Control total sobre tu inteligencia artificial",
                  "Funcionamiento local, sin depender de la nube",
                  "Máxima privacidad de tus datos sensibles",
                  "Costes predecibles y sin sorpresas",
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-6 w-6 shrink-0 place-items-center rounded-full bg-primary/15 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm font-medium text-foreground">
                      {t}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section id="casos" className="mx-auto max-w-6xl px-6 py-24">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Casos de uso
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Diseñado para quienes no pueden permitirse comprometer su
            información.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {[
            {
              icon: Scale,
              title: "Despachos de abogados",
              text: "Protege documentación confidencial y expedientes de clientes con una IA que nunca expone información fuera del despacho.",
            },
            {
              icon: Stethoscope,
              title: "Hospitales y clínicas",
              text: "Trabaja con historiales médicos de forma segura, cumpliendo con la máxima confidencialidad y sin exponer datos sensibles.",
            },
            {
              icon: Building2,
              title: "Empresas",
              text: "Centraliza y consulta el conocimiento interno de tu organización de forma privada, manteniendo el control absoluto.",
            },
            {
              icon: UserRound,
              title: "Profesionales",
              text: "Aprovecha todo el potencial de la inteligencia artificial sin comprometer la privacidad de tu información profesional.",
            },
          ].map((c, i) => (
            <Reveal
              key={c.title}
              delay={i * 90}
              as="article"
              className="group flex gap-5 rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-glow"
            >
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-accent/50 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <c.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {c.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="precios" className="bg-softgray/60 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="mx-auto max-w-2xl text-center">
            <h2 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
              Precios
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Elige el plan que mejor se adapte a las necesidades de tu
              organización.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                name: "Básico",
                price: "~1.000€",
                highlighted: false,
                specs: [
                  { label: "CPU", value: "Gama media (Ryzen 5)" },
                  { label: "RAM", value: "32 GB" },
                  { label: "GPU", value: "Sin GPU dedicada" },
                  { label: "Almacenamiento", value: "SSD NVMe 1 TB" },
                ],
                useCases:
                  "Chatbot interno básico, pruebas, pocos usuarios simultáneos, modelos ligeros (Llama 3 8B, Mistral 7B).",
              },
              {
                name: "Estándar",
                price: "~5.000€",
                highlighted: true,
                specs: [
                  { label: "CPU", value: "Ryzen 7" },
                  { label: "RAM", value: "64 GB" },
                  { label: "GPU", value: "RTX 4070 Ti" },
                  { label: "Almacenamiento", value: "NVMe 1 TB" },
                ],
                useCases:
                  "Empresa pequeña-mediana, varios usuarios simultáneos, modelos más capaces, RAG con documentos.",
              },
              {
                name: "Premium",
                price: "~10.000€",
                highlighted: false,
                specs: [
                  { label: "CPU", value: "Threadripper" },
                  { label: "RAM", value: "128 GB+" },
                  { label: "GPU", value: "RTX 4090" },
                  { label: "Almacenamiento", value: "NVMe 2 TB+ en RAID, redundancia real" },
                  { label: "Extras", value: "Fuente redundante, mejor refrigeración para uso 24/7 intensivo" },
                ],
                useCases:
                  "Empresa con carga de trabajo real, múltiples departamentos, modelos grandes o varios modelos cargados a la vez, alta concurrencia.",
              },
            ].map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 100}
                as="article"
                className={`relative flex flex-col rounded-3xl border p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 ${
                  plan.highlighted
                    ? "border-2 border-primary/30 bg-card shadow-glow"
                    : "border-border bg-card"
                }`}
              >
                {plan.highlighted && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-bold text-primary-foreground">
                    Recomendado
                  </span>
                )}
                <h3 className="text-lg font-bold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-4xl font-extrabold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground">
                  Configuración orientativa
                </p>

                <div className="mt-6 flex flex-1 flex-col gap-4">
                  <div className="rounded-2xl bg-softgray/50 p-4">
                    <h4 className="mb-3 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Especificaciones técnicas
                    </h4>
                    <dl className="space-y-2">
                      {plan.specs.map((s) => (
                        <div key={s.label} className="flex gap-2">
                          <dt className="shrink-0 text-xs font-semibold text-foreground">
                            {s.label}:
                          </dt>
                          <dd className="text-xs leading-relaxed text-muted-foreground">
                            {s.value}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="rounded-2xl bg-skyblue/30 p-4">
                    <h4 className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      Casos de uso
                    </h4>
                    <p className="text-xs leading-relaxed text-muted-foreground">
                      {plan.useCases}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link
                    to="/demo"
                    className={`inline-flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                      plan.highlighted
                        ? "bg-primary text-primary-foreground shadow-glow hover:brightness-110"
                        : "border border-border bg-card/70 text-foreground backdrop-blur hover:border-primary/40"
                    }`}
                  >
                    Solicitar demo
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Maintenance & support plans */}
          <Reveal className="mx-auto mt-16 max-w-3xl text-center">
            <h3 className="text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl">
              Mantenimiento y soporte
            </h3>
            <p className="mt-3 text-base text-muted-foreground">
              Mantén tu servidor protegido, actualizado y con respaldo profesional.
            </p>
          </Reveal>

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              {
                name: "Básica",
                price: "150€",
                period: "/mes",
                features: [
                  "Backup automático (retención 7 días)",
                  "Monitorización básica de uptime",
                  "Actualizaciones de seguridad",
                  "Soporte por email sin SLA",
                ],
              },
              {
                name: "Estándar",
                price: "200€",
                period: "/mes",
                features: [
                  "Backup inmutable (30 días)",
                  "Alertas proactivas (CPU/disco/caídas)",
                  "Soporte con SLA de respuesta",
                  "Horas de soporte incluidas",
                ],
              },
              {
                name: "Premium",
                price: "250€",
                period: "/mes",
                features: [
                  "Todo lo del plan Estándar",
                  "SLA de restauración <24h",
                  "Informe mensual automático",
                  "Soporte prioritario y revisión trimestral",
                ],
              },
            ].map((plan, i) => (
              <Reveal
                key={plan.name}
                delay={i * 80}
                as="article"
                className="flex flex-col rounded-3xl border border-border bg-card p-6 shadow-soft"
              >
                <h4 className="text-lg font-bold text-foreground">{plan.name}</h4>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="font-display text-3xl font-extrabold tracking-tight text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-sm text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mt-5 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3 w-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="cta" className="px-6 py-24">
        <Reveal className="mx-auto max-w-4xl overflow-hidden rounded-4xl border border-primary/20 bg-skyblue/40 px-8 py-16 text-center shadow-soft sm:px-16">
          <h2 className="mx-auto max-w-2xl text-3xl font-extrabold leading-tight tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            La inteligencia artificial no debería costarte tu privacidad.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base text-foreground/70 sm:text-lg">
            Lleva la inteligencia artificial a tus propias instalaciones y
            mantén el control absoluto de tus datos desde el primer día.
          </p>
          <div className="mt-8 flex justify-center">
            <PrimaryButton>Da el salto a la IA privada</PrimaryButton>
          </div>
        </Reveal>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              Servidores de inteligencia artificial privada. Potencia sin
              renunciar al control de tus datos.
            </p>
          </div>

          {[
            { title: "Producto", links: ["Características", "Casos de uso", "Comparativa"] },
            { title: "Empresa", links: ["Sobre nosotros", "Contacto", "Preguntas frecuentes"] },
            { title: "Legal", links: ["Aviso legal", "Política de privacidad"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-bold text-foreground">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="border-t border-border">
          <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-6 sm:flex-row">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Nex Ram. Todos los derechos reservados.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs font-semibold text-muted-foreground transition-colors hover:text-foreground"
            >
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
