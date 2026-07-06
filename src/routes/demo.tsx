import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, Check, Lock } from "lucide-react";

export const Route = createFileRoute("/demo")({
  head: () => ({
    meta: [
      { title: "Solicitar una demo — Nevra" },
      {
        name: "description",
        content:
          "Solicita una demostración personalizada del servidor de IA privada Nevra. Descubre cómo llevar la inteligencia artificial a tus instalaciones.",
      },
      { property: "og:title", content: "Solicitar una demo — Nevra" },
      {
        property: "og:description",
        content: "Solicita una demostración personalizada del servidor de IA privada Nevra.",
      },
    ],
  }),
  component: DemoPage,
});

type Fields = {
  name: string;
  company: string;
  email: string;
  address: string;
  phone: string;
  postalCode: string;
};

const emptyFields: Fields = {
  name: "",
  company: "",
  email: "",
  address: "",
  phone: "",
  postalCode: "",
};

const fieldMeta: {
  key: keyof Fields;
  label: string;
  type: string;
  placeholder: string;
  autoComplete: string;
  full?: boolean;
}[] = [
  { key: "name", label: "Nombre", type: "text", placeholder: "Tu nombre completo", autoComplete: "name" },
  { key: "company", label: "Nombre de empresa", type: "text", placeholder: "Nombre de tu empresa", autoComplete: "organization" },
  { key: "email", label: "Correo electrónico", type: "email", placeholder: "nombre@empresa.com", autoComplete: "email" },
  { key: "phone", label: "Número de teléfono", type: "tel", placeholder: "+34 600 000 000", autoComplete: "tel" },
  { key: "address", label: "Dirección", type: "text", placeholder: "Calle, número, ciudad", autoComplete: "street-address", full: true },
  { key: "postalCode", label: "Código postal", type: "text", placeholder: "28001", autoComplete: "postal-code" },
];

function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2">
      <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary text-primary-foreground shadow-soft">
        <Lock className="h-4 w-4" />
      </div>
      <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
        Nevra
      </span>
    </Link>
  );
}

function validate(fields: Fields): Partial<Record<keyof Fields, string>> {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (!fields.name.trim()) errors.name = "Introduce tu nombre.";
  if (!fields.company.trim()) errors.company = "Introduce el nombre de la empresa.";
  if (!fields.email.trim()) errors.email = "Introduce tu correo electrónico.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim()))
    errors.email = "El correo no es válido.";
  if (!fields.phone.trim()) errors.phone = "Introduce tu número de teléfono.";
  else if (!/^[+\d][\d\s()-]{6,}$/.test(fields.phone.trim()))
    errors.phone = "El teléfono no es válido.";
  if (!fields.address.trim()) errors.address = "Introduce tu dirección.";
  if (!fields.postalCode.trim()) errors.postalCode = "Introduce el código postal.";
  else if (!/^\d{4,10}$/.test(fields.postalCode.trim()))
    errors.postalCode = "El código postal no es válido.";
  return errors;
}

function DemoPage() {
  const navigate = useNavigate();
  const [fields, setFields] = useState<Fields>(emptyFields);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (key: keyof Fields, value: string) => {
    setFields((f) => ({ ...f, [key]: value.slice(0, 200) }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-hero-gradient">
      <header className="mx-auto max-w-3xl px-6 pt-8">
        <div className="flex items-center justify-between">
          <Logo />
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" /> Volver al inicio
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-3xl px-6 py-14">
        {submitted ? (
          <div className="rounded-3xl border border-border bg-card p-10 text-center shadow-soft sm:p-14">
            <div className="mx-auto grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary">
              <Check className="h-7 w-7" />
            </div>
            <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-foreground">
              ¡Solicitud recibida!
            </h1>
            <p className="mx-auto mt-3 max-w-md text-muted-foreground">
              Gracias, {fields.name.split(" ")[0]}. Nuestro equipo se pondrá en
              contacto contigo muy pronto para organizar tu demostración
              personalizada.
            </p>
            <div className="mt-8 flex justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                Volver al inicio
              </Link>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-semibold text-muted-foreground">
              <Lock className="h-3.5 w-3.5 text-primary" /> Demo personalizada
            </span>
            <h1 className="mt-5 font-display text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl">
              Solicitar una demo
            </h1>
            <p className="mt-3 max-w-xl text-muted-foreground">
              Completa el formulario y te mostraremos cómo el servidor Nevra
              puede llevar la inteligencia artificial privada a tu organización.
            </p>

            <form onSubmit={handleSubmit} noValidate className="mt-8 grid gap-5 sm:grid-cols-2">
              {fieldMeta.map((f) => (
                <div key={f.key} className={f.full ? "sm:col-span-2" : ""}>
                  <label
                    htmlFor={f.key}
                    className="mb-1.5 block text-sm font-semibold text-foreground"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.key}
                    name={f.key}
                    type={f.type}
                    value={fields[f.key]}
                    onChange={(e) => handleChange(f.key, e.target.value)}
                    placeholder={f.placeholder}
                    autoComplete={f.autoComplete}
                    aria-invalid={!!errors[f.key]}
                    className={`w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:ring-2 focus:ring-primary/20 ${
                      errors[f.key] ? "border-destructive" : "border-input"
                    }`}
                  />
                  {errors[f.key] && (
                    <p className="mt-1.5 text-xs font-medium text-destructive">
                      {errors[f.key]}
                    </p>
                  )}
                </div>
              ))}

              <div className="sm:col-span-2 mt-2 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:brightness-110"
                >
                  Enviar solicitud
                </button>
                <button
                  type="button"
                  onClick={() => navigate({ to: "/" })}
                  className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                >
                  Cancelar
                </button>
              </div>
            </form>
          </div>
        )}
      </main>
    </div>
  );
}
