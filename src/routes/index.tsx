import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  Award,
  CheckCircle2,
  ChevronDown,
  Dumbbell,
  Instagram,
  Loader2,
  MapPin,
  Menu,
  MessageCircle,
  Moon,
  Phone,
  Send,
  Star,
  Sun,
  Target,
  TrendingUp,
  Users,
  X,
  ShieldCheck,
} from "lucide-react";
import odairImg from "@/assets/odair.jpg";
import logoImg from "@/assets/logo.png";
import heroLogoAsset from "@/assets/logo-hero.png.asset.json";
const heroLogoImg = heroLogoAsset.url;
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Odair Filho Personal Trainer | Especialista em Dores Articulares" },
      {
        name: "description",
        content:
          "Personal Trainer especializado em dores articulares, quadril e joelhos. Mais de 14 anos ajudando pessoas a recuperarem qualidade de vida em Londrina-PR.",
      },
      {
        property: "og:title",
        content: "Odair Filho Personal Trainer | Especialista em Dores Articulares",
      },
      {
        property: "og:description",
        content:
          "Acabe com suas dores e recupere sua qualidade de vida. Metodologia comprovada, 14+ anos de experiência.",
      },
      { property: "og:url", content: "https://odairfilhopersonal.com.br/" },
    ],
    links: [
      { rel: "canonical", href: "https://odairfilhopersonal.com.br/" },
      { rel: "preload", as: "image", href: heroLogoImg, fetchpriority: "high" } as never,
    ],
  }),
  component: HomePage,
});

// ============ CONFIG — edit easily ============
const WHATSAPP_NUMBER = "5543991197602"; // (DDI+DDD+número, somente dígitos)
const WHATSAPP_MESSAGE = "Olá, gostaria de agendar uma avaliação.";
const INSTAGRAM_URL = "https://instagram.com/odairfilhopersonal";
const INSTAGRAM_HANDLE = "@odairfilhopersonal";
const waLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

const NAV = [
  { id: "inicio", label: "Início" },
  { id: "sobre", label: "Sobre" },
  { id: "servicos", label: "Serviços" },
  { id: "resultados", label: "Resultados" },
  { id: "planos", label: "Planos" },
  { id: "faq", label: "FAQ" },
  { id: "contato", label: "Contato" },
];

function HomePage() {
  useScrollReveal();
  useEffect(() => {
    console.log("[PageLoad] HomePage montada em", window.location.href);
    const onError = (e: ErrorEvent) => {
      console.error("[PageLoad] window.error:", e.message, e.filename, e.lineno, e.error);
    };
    const onRejection = (e: PromiseRejectionEvent) => {
      console.error("[PageLoad] unhandledrejection:", e.reason);
    };
    window.addEventListener("error", onError);
    window.addEventListener("unhandledrejection", onRejection);
    return () => {
      window.removeEventListener("error", onError);
      window.removeEventListener("unhandledrejection", onRejection);
    };
  }, []);
  return (
    <div className="bg-background text-foreground min-h-screen overflow-x-clip">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Results />
        <Plans />
        <FAQSection />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

// =================== HEADER ===================
function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [theme, setTheme] = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-border/40 bg-background/70 border-b backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <button onClick={() => go("inicio")} className="flex items-center gap-2.5 group">
          <img
            src={logoImg}
            alt="Odair Filho Personal Trainer"
            className="h-10 w-10 rounded-lg object-cover shadow-brand-glow md:h-11 md:w-11"
          />
          <span className="font-display text-sm font-extrabold leading-tight tracking-tight md:text-base">
            ODAIR FILHO
            <span className="text-muted-foreground block text-[10px] font-medium tracking-[0.2em] md:text-xs">
              PERSONAL TRAINER
            </span>
          </span>
        </button>

        <nav className="hidden items-center gap-1 lg:flex">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="text-foreground/80 hover:text-foreground hover:bg-accent/50 rounded-md px-3 py-2 text-sm font-medium transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            aria-label="Alternar tema"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="hover:bg-accent/60 hidden h-10 w-10 place-items-center rounded-lg transition md:grid"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button
            onClick={() => go("contato")}
            className="bg-gradient-brand hover:opacity-90 hidden h-10 rounded-lg px-5 font-semibold shadow-brand-glow transition md:inline-flex"
          >
            Agendar Avaliação
          </Button>
          <button
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
            className="hover:bg-accent/60 grid h-10 w-10 place-items-center rounded-lg lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "border-border/40 bg-background/95 overflow-hidden border-t backdrop-blur-xl transition-[max-height] duration-300 lg:hidden",
          open ? "max-h-[600px]" : "max-h-0",
        )}
      >
        <div className="container-wide flex flex-col gap-1 py-4">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => go(n.id)}
              className="hover:bg-accent rounded-md px-3 py-3 text-left text-base font-medium"
            >
              {n.label}
            </button>
          ))}
          <Button onClick={() => go("contato")} className="bg-gradient-brand mt-2 h-11 w-full rounded-lg font-semibold">
            Agendar Avaliação
          </Button>
        </div>
      </div>
    </header>
  );
}

// =================== HERO ===================
function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[100svh] items-center overflow-hidden pt-24 md:pt-28">
      <div aria-hidden className="absolute inset-0 -z-20 bg-background" />
      <img
        src={heroLogoImg}
        alt="Logo Odair Filho Personal Trainer"
        width={3368}
        height={2382}
        className="absolute inset-0 -z-20 h-full w-full object-contain object-center opacity-20 dark:opacity-30"
        fetchPriority="high"
      />

      <div aria-hidden className="absolute inset-0 -z-10" style={{ background: "var(--gradient-hero)" }} />
      <div
        aria-hidden
        className="from-background absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t to-transparent"
      />

      <div className="container-wide relative grid grid-cols-1 gap-10 py-16 md:py-24">
        <div className="max-w-3xl space-y-7">
          <div className="border-border/60 bg-background/50 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-medium backdrop-blur animate-fade-up">
            <span className="bg-brand h-1.5 w-1.5 rounded-full animate-pulse" />
            Atendendo em Londrina-PR · Online em todo Brasil
          </div>
          <h1
            className="font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl animate-fade-up"
            style={{ animationDelay: "80ms" }}
          >
            Personal Trainer Especializado em <span className="text-gradient-brand">Dores Articulares</span>
          </h1>
          <p
            className="max-w-2xl text-base text-white/80 sm:text-lg md:text-xl animate-fade-up"
            style={{ animationDelay: "160ms" }}
          >
            Acabe com suas dores e recupere sua qualidade de vida com acompanhamento profissional e metodologia
            comprovada.
          </p>

          <ul
            className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-white/90 animate-fade-up"
            style={{ animationDelay: "220ms" }}
          >
            {["14 anos de experiência", "Especialista em quadril e joelhos", "Presencial e online"].map((t) => (
              <li key={t} className="flex items-center gap-2">
                <CheckCircle2 className="text-brand h-4 w-4" />
                {t}
              </li>
            ))}
          </ul>

          <div
            className="flex flex-col gap-3 sm:flex-row sm:items-center animate-fade-up"
            style={{ animationDelay: "300ms" }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-brand h-12 rounded-lg px-7 text-base font-semibold shadow-brand-glow hover:opacity-95"
            >
              <a href="#contato">Agendar Avaliação Gratuita</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 rounded-lg border-white/30 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur hover:bg-white/15 hover:text-white"
            >
              <a href={waLink} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" /> Falar no WhatsApp
              </a>
            </Button>
          </div>
        </div>

        <div
          className="border-border/40 bg-background/40 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border backdrop-blur sm:grid-cols-3 animate-fade-up"
          style={{ animationDelay: "400ms" }}
        >
          {[
            { k: "+14", v: "Anos de experiência" },
            { k: "100%", v: "Atendimento personalizado" },
            { k: "★★★★★", v: "Resultados comprovados" },
          ].map((s) => (
            <div key={s.v} className="bg-background/40 px-6 py-5">
              <div className="text-gradient-brand font-display text-2xl font-extrabold md:text-3xl">{s.k}</div>
              <div className="text-muted-foreground mt-0.5 text-sm">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== ABOUT ===================
function About() {
  const badges = [
    { icon: Award, label: "14+ Anos de Experiência" },
    { icon: Activity, label: "Especialista em Reabilitação" },
    { icon: Users, label: "Atendimento Personalizado" },
    { icon: TrendingUp, label: "Resultados Comprovados" },
  ];
  return (
    <section id="sobre" className="relative py-24 md:py-32">
      <div className="container-wide grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="reveal relative">
          <div className="bg-gradient-brand absolute -inset-4 -z-10 rounded-3xl opacity-20 blur-2xl" />
          <div className="border-border/60 relative overflow-hidden rounded-3xl border shadow-elevated">
            <img
              src={odairImg}
              alt="Odair Filho — Personal Trainer"
              width={1024}
              height={1024}
              loading="lazy"
              className="aspect-[4/5] h-full w-full object-cover"
            />
            <div className="from-background/90 absolute inset-x-0 bottom-0 bg-gradient-to-t to-transparent p-6">
              <div className="text-xs uppercase tracking-[0.2em] text-white/70">Personal Trainer</div>
              <div className="font-display mt-1 text-2xl font-bold text-white">Odair Filho</div>
              <div className="font-display text-lg font-bold text-white/90">Cref 021795</div>
            </div>
          </div>
        </div>

        <div className="reveal space-y-6">
          <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">Sobre</span>
          <h2 className="font-display text-3xl font-extrabold leading-tight md:text-5xl">
            Mais de 14 anos transformando <span className="text-gradient-brand">vidas sem dor</span>
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed md:text-lg">
            Há mais de 14 anos ajudando pessoas a superar dores articulares e recuperar qualidade de vida através do
            treinamento personalizado, com metodologia que une ciência do exercício e reabilitação.
          </p>

          <ul className="grid gap-3 text-sm md:text-base">
            {[
              "Formado pela Universidade Estadual de Londrina",
              "Especialista em dores articulares",
              "Foco em quadril e joelhos",
              "Atendimento individualizado",
            ].map((t) => (
              <li key={t} className="flex items-start gap-3">
                <CheckCircle2 className="text-brand mt-0.5 h-5 w-5 shrink-0" />
                <span>{t}</span>
              </li>
            ))}
          </ul>

          <div className="grid grid-cols-2 gap-3 pt-2">
            {badges.map((b) => (
              <div
                key={b.label}
                className="border-border/60 bg-surface/60 flex items-center gap-3 rounded-xl border p-3.5"
              >
                <span className="bg-brand/10 text-brand grid h-9 w-9 shrink-0 place-items-center rounded-lg">
                  <b.icon className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold leading-tight">{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// =================== SERVICES ===================
function Services() {
  const items = [
    {
      icon: Activity,
      tag: "Online",
      title: "Consultoria Online Básico",
      desc: "Acompanhamento remoto com flexibilidade de horários.",
      benefits: [
        "Avaliação inicial (online)",
        "Troca de treino mensal",
        "Uso de aplicativo com vídeo dos exercícios",
        "Ajustes periódicos",
        "Flexibilidade de horários",
        "Pode tirar dúvidas através do whatsapp",
      ],
      message: "Olá! Gostaria de saber mais sobre a Consultoria Básica. Como funciona e como posso começar?",
    },
    {
      icon: Activity,
      tag: "Online",
      title: "Consultoria Online Avançado",
      desc: "Acompanhamento completo com aula presencial inclusa.",
      benefits: [
        "Avaliação inicial (Online)",
        "Troca de treino mensal",
        "Uso de aplicativo com vídeo dos exercícios",
        "Pode tirar dúvidas através do whatsapp",
        "Uma aula presencial (sob consulta de horário)",
        "Sob consulta de horário",
      ],
      message: "Olá! Tenho interesse na Consultoria Avançada. Qual é a melhor forma de começar?",
    },
  ];
  return (
    <section id="servicos" className="bg-surface/40 relative py-24 md:py-32">
      <div className="container-wide">
        <SectionHead
          eyebrow="Serviços"
          title={
            <>
              Treinos sob medida para <span className="text-gradient-brand">o seu objetivo</span>
            </>
          }
          description="Atendimento humano e técnico, com plano de treino construído a partir da sua condição atual."
        />

        <div className="reveal mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {items.map((s) => (
            <article
              key={s.title}
              className="group border-border/60 bg-background relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 hover:-translate-y-1 hover:border-[color:var(--brand)]/60 md:p-9"
            >
              <div
                aria-hidden
                className="bg-gradient-brand pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-30"
              />
              <div className="flex items-center justify-between">
                <span className="bg-gradient-brand grid h-12 w-12 place-items-center rounded-xl shadow-brand-glow">
                  <s.icon className="h-6 w-6 text-white" />
                </span>
                <span className="border-border/70 text-muted-foreground rounded-full border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest">
                  {s.tag}
                </span>
              </div>
              <h3 className="font-display mt-6 text-2xl font-bold md:text-3xl">{s.title}</h3>
              <p className="text-muted-foreground mt-2">{s.desc}</p>
              <ul className="mt-6 grid gap-2.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5 text-sm">
                    <CheckCircle2 className="text-brand h-4 w-4 shrink-0" />
                    {b}
                  </li>
                ))}
              </ul>
              <Button
                onClick={() =>
                  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(s.message)}`, "_blank")
                }
                variant="ghost"
                className="hover:bg-brand/10 hover:text-brand mt-7 h-11 w-full rounded-lg border border-border/70 font-semibold"
              >
                <a href={waLink} target="_blank" rel="noopener noreferrer">
                  Saiba Mais
                </a>
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== RESULTS ===================
function Results() {
  const data = [
    {
      name: "Tatiana Adam",
      problem: "Dor no joelho",
      result: "Zero dor, melhora nos exercícios e no dia a dia.",
      initials: "TA",
    },
    {
      name: "Fernanda Beffa",
      problem: "Tendinopatia do glúteo médio",
      result:
        "Após minha segunda gestação, fiquei com dores crônicas no quadril, que pioraram com o tempo devido ao sedentarismo. A dor era constante e os remédios já não ajudavam. Procurei o Odair, que avaliou meus exames e criou um treino específico para minha condição. Em poucas semanas, fiquei sem dor. Hoje pratico esportes de impacto e faço minhas atividades normalmente, sem limitações ou incômodos.",
      initials: "FB",
    },
    {
      name: "Lucas Mendes",
      problem: "Tendinopatia do tibial posterior",
      result:
        "Fiquei meses com canelite e sem evoluir na corrida até conhecer o trabalho do Odair. Ele criou treinos baseados em estudos científicos, que eliminaram minha dor e melhoraram meu desempenho. Com sua orientação, consegui treinar longas distâncias e completar uma maratona com estabilidade, sem dores e superando minhas expectativas.",
      initials: "LM",
    },
    {
      name: "Luiggi Bonezzi",
      problem: "Lesão Menisco",
      result: "As pernas estão bem mais fortes. Praticamente sem dor.",
      initials: "LGB",
    },
    {
      name: "Gilberto Soares",
      problem: "Síndrome do Impacto Femoroacetabular",
      result:
        "Me chamo Gilberto Soares, e contratei o Personal Trainee Odair devido a uma artrose do lado esquerdo do quadril, impacto fêmoro acetábulo (IFA) o que provoca dores intensas. Após os treinos e acompanhamento do Odair, obtive melhoras significativas, mais mobilidade e redução das dores.",
      initials: "GS",
    },
    {
      name: "Ricardo Souza",
      problem: "Hérnia de disco L4-L5",
      result:
        "No começo era uma fuga do sedentarismo e do sobrepeso. Depois, com o avanço da idade e a descoberta de uma hérnia de disco,surgiu também a necessidade de fortalecer o corpo para diminuir os incômodos. Hoje, o resultado é uma qualidade de vida adequada para minha idade e um alívio nas limitações que fazem parte do meu cotidiano. Sem a parceria e o acompanhamento do Odair, seria muito mais difícil lidar com as dores crônicas no dia a dia. Sinto uma evolução constante e eficaz no meu treino e tratamento.",
      initials: "RS",
    },
  ];
  return (
    <section id="resultados" className="py-24 md:py-32">
      <div className="container-wide">
        <SectionHead
          eyebrow="Depoimentos"
          title={
            <>
              Resultados <span className="text-gradient-brand">reais</span> de clientes reais
            </>
          }
          description="Histórias de quem deixou a dor para trás e recuperou a vida ativa."
        />
        <div className="reveal mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((d) => (
            <figure
              key={d.name}
              className="border-border/60 bg-surface/50 flex h-full flex-col rounded-2xl border p-6 transition hover:-translate-y-1 hover:border-[color:var(--brand)]/60"
            >
              <div className="flex items-center gap-3">
                <span className="bg-gradient-brand font-display grid h-11 w-11 place-items-center rounded-full text-sm font-bold text-white">
                  {d.initials}
                </span>
                <div className="min-w-0">
                  <div className="truncate font-semibold">{d.name}</div>
                  <div className="text-muted-foreground truncate text-xs">{d.problem}</div>
                </div>
              </div>
              <div className="text-brand mt-4 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-foreground/90">"{d.result}"</blockquote>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

// =================== PLANS ===================
function Plans() {
  const plans = [
    {
      name: "Plano Básico",
      tag: "Comece agora",
      price: 299.0,
      originalPrice: 360,
      period: "3 meses",
      monthlyPrice: 299 / 3,
      savings: 360 - 299,
      features: [
        "Avaliação inicial (online)",
        "Troca de treino mensal",
        "Uso de aplicativo com video dos exercícios",
        "Pode tirar dúvidas através do Whatsapp",
        "Ajustes períodicos",
        "Flexibilidade de horarios",
      ],
      cta: "Contratar",
      highlight: false,
      message: "Olá! Gostaria de começar minha transformação com o Plano Básico por R$ 299,00 em 3 meses!",
    },
    {
      name: "Plano Avançado",
      tag: "Mais Popular",
      price: 510.0,
      originalPrice: 600,
      period: "3 meses",
      monthlyPrice: 510 / 3,
      savings: 600 - 510,
      features: [
        "Avaliação inicial (online)",
        "Troca de treino mensal",
        "Uso de aplicativo com video dos exercícios",
        "Pode tirar dúvidas através do Whatsapp",
        "Ajustes períodicos",
        "Flexibilidade de horarios",
        "Uma aula presencial (sob consulta de horário)",
      ],
      cta: "Contratar Agora",
      highlight: true,
      message: "Olá! Quero contratar o Plano Avançado por R$ 510,00 em 3 meses!",
    },
  ];

  // Função para formatar moeda brasileira
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  return (
    <section id="planos" className="bg-surface/40 relative py-24 md:py-32">
      <div className="container-wide">
        <SectionHead
          eyebrow="Planos"
          title={
            <>
              Escolha o plano <span className="text-gradient-brand">ideal para você</span>
            </>
          }
          description="Acompanhamento profissional em diferentes níveis de proximidade."
        />

        {/* ✅ Grid centralizado com 2 colunas */}
        <div className="reveal mt-14 flex justify-center">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 max-w-4xl">
            {plans.map((p) => (
              <div
                key={p.name}
                className={cn(
                  "relative flex flex-col rounded-2xl border p-7 transition md:p-8 text-center",
                  p.highlight
                    ? "border-[color:var(--brand)] bg-background shadow-brand-glow md:scale-[1.02]"
                    : "border-border/60 bg-background hover:-translate-y-1",
                )}
              >
                {p.highlight && (
                  <div className="bg-gradient-brand absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-3.5 py-1 text-[10px] font-bold uppercase tracking-widest text-white shadow-brand-glow">
                    {p.tag}
                  </div>
                )}

                {/* Título e tag */}
                <div className="flex flex-col items-center gap-1.5">
                  <h3 className="font-display text-2xl font-bold">{p.name}</h3>
                  {!p.highlight && (
                    <span className="text-muted-foreground text-[10px] font-bold uppercase tracking-widest">
                      {p.tag}
                    </span>
                  )}
                </div>

                {/* ✅ PREÇO CLEAN - Tudo em uma linha */}
                <div className="mt-6 flex flex-col items-center gap-2">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-5xl md:text-6xl font-extrabold">{formatPrice(p.price)}</span>
                    <span className="text-muted-foreground text-sm font-medium">por {p.period}</span>
                  </div>

                  {/* Preço mensal e economia */}
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p>~{formatPrice(p.monthlyPrice)} por mês</p>
                    <p className="text-green-600 font-semibold">Economize {formatPrice(p.savings)}</p>
                  </div>
                </div>

                {/* Features */}
                <ul className="mt-6 grid flex-1 gap-3">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center justify-center gap-2.5 text-sm">
                      <CheckCircle2
                        className={cn("h-4 w-4 shrink-0", p.highlight ? "text-brand" : "text-foreground/70")}
                      />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  asChild
                  className={cn(
                    "mt-8 h-12 w-full rounded-lg font-semibold",
                    p.highlight
                      ? "bg-gradient-brand text-white shadow-brand-glow hover:opacity-95"
                      : "bg-surface-elevated text-foreground hover:bg-accent border border-border/70",
                  )}
                >
                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(p.message)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {p.cta}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* ✅ DIREITO DE ARREPENDIMENTO - Recomendação Final */}
        <div className="reveal mt-12 flex justify-center">
          <div className="max-w-2xl w-full rounded-xl border border-green-500/30 bg-gradient-to-r from-green-500/5 to-emerald-500/5 p-6 md:p-8 text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <ShieldCheck className="h-5 w-5 text-green-600" />
              <h4 className="font-semibold text-green-700 text-sm md:text-base">Compra Protegida</h4>
            </div>
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              Você tem <span className="font-semibold text-foreground">7 dias para arrependimento</span>, conforme
              garantido pelo{" "}
              <span className="font-semibold text-foreground">Artigo 49 do Código de Defesa do Consumidor (CDC)</span>.
              Desista sem necessidade de justificativa.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =================== FAQ ===================
function FAQSection() {
  const items = [
    {
      q: "Como funciona a consultoria online?",
      a: "Você recebe um treino 100% personalizado conforme seu objetivo e condição, com acompanhamento semanal via aplicativo e WhatsApp e ajustes periódicos.",
    },
    {
      q: "Preciso estar em forma para começar?",
      a: "Não. O programa é montado a partir da sua condição atual — iniciantes, sedentários e pessoas com dores são bem-vindos.",
    },
    {
      q: "Quanto tempo leva para sentir resultados?",
      a: "A maioria dos alunos relata alívio das dores e mais disposição entre a 3ª e a 6ª semana de treino consistente.",
    },
    {
      q: "Qual plano é ideal para mim?",
      a: "Depende do nível de proximidade que você deseja. Na avaliação gratuita indico o plano mais adequado para o seu caso.",
    },
    {
      q: "Existe acompanhamento contínuo?",
      a: "Sim. Em todos os planos há suporte direto comigo, com revisões periódicas do treino conforme sua evolução.",
    },
    {
      q: "Posso treinar mesmo sentindo dores?",
      a: "Sim — o trabalho é exatamente esse: respeitar limites, escolher os exercícios certos e progredir com segurança.",
    },
    {
      q: "Como funciona o atendimento presencial?",
      a: "O atendimento presencial é individual, em Londrina-PR, com horário marcado e plano de treino exclusivo.",
    },
    {
      q: "Há garantia de satisfação?",
      a: "Se nas primeiras semanas você sentir que a metodologia não é para você, conversamos e ajustamos o plano.",
    },
  ];
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container-wide max-w-4xl">
        <SectionHead
          eyebrow="FAQ"
          title={
            <>
              Dúvidas <span className="text-gradient-brand">frequentes</span>
            </>
          }
          description="As respostas para as perguntas que mais recebo."
        />
        <Accordion type="single" collapsible className="reveal mt-12 w-full space-y-3">
          {items.map((it, i) => (
            <AccordionItem
              key={i}
              value={`i-${i}`}
              className="border-border/60 bg-surface/50 overflow-hidden rounded-xl border px-5"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline md:text-lg">
                {it.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed">{it.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

// =================== CONTACT ===================
function Contact() {
  return (
    <section id="contato" className="bg-surface/40 relative py-24 md:py-32">
      <div className="container-wide">
        <SectionHead
          eyebrow="Contato"
          title={
            <>
              Vamos conversar sobre o <span className="text-gradient-brand">seu objetivo</span>
            </>
          }
          description="Responda em poucos minutos para agendar sua avaliação."
        />

        <div className="reveal mt-14 grid grid-cols-1 gap-6 lg:grid-cols-3">
          <ContactForm />
          <ContactCard
            icon={MessageCircle}
            title="WhatsApp"
            text="Fale diretamente comigo"
            cta="Abrir WhatsApp"
            href={waLink}
          />
          <ContactCard
            icon={Instagram}
            title="Instagram"
            text={INSTAGRAM_HANDLE}
            cta="Seguir perfil"
            href={INSTAGRAM_URL}
          />
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  text,
  cta,
  href,
}: {
  icon: typeof MessageCircle;
  title: string;
  text: string;
  cta: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group border-border/60 bg-background relative flex flex-col justify-between overflow-hidden rounded-2xl border p-7 transition hover:-translate-y-1 hover:border-[color:var(--brand)]/60"
    >
      <div
        aria-hidden
        className="bg-gradient-brand pointer-events-none absolute -right-20 -top-20 h-44 w-44 rounded-full opacity-0 blur-3xl transition duration-500 group-hover:opacity-25"
      />
      <div>
        <span className="bg-gradient-brand grid h-12 w-12 place-items-center rounded-xl shadow-brand-glow">
          <Icon className="h-6 w-6 text-white" />
        </span>
        <h3 className="font-display mt-5 text-xl font-bold">{title}</h3>
        <p className="text-muted-foreground mt-1.5 text-sm">{text}</p>
      </div>
      <div className="text-brand mt-6 inline-flex items-center gap-2 text-sm font-semibold">
        {cta}
        <span className="transition group-hover:translate-x-1">→</span>
      </div>
    </a>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ nome: "", email: "", telefone: "", mensagem: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [status, setStatus] = useState<"idle" | "loading" | "ok">("idle");

  const validate = (f: typeof form) => {
    const e: Record<string, string> = {};
    if (f.nome.trim().length < 2) e.nome = "Informe seu nome.";
    if (!/^\S+@\S+\.\S+$/.test(f.email)) e.email = "Email inválido.";
    if (f.telefone.replace(/\D/g, "").length < 10) e.telefone = "Telefone inválido.";
    if (f.mensagem.trim().length < 5) e.mensagem = "Conte um pouco mais.";
    return e;
  };

  const onChange = (k: keyof typeof form, v: string) => {
    const next = { ...form, [k]: v };
    setForm(next);
    if (errors[k]) setErrors(validate(next));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = validate(form);
    setErrors(v);
    if (Object.keys(v).length) return;
    setStatus("loading");
    setTimeout(() => {
      const msg = `Olá! Sou ${form.nome}.%0AEmail: ${form.email}%0ATelefone: ${form.telefone}%0A%0A${encodeURIComponent(form.mensagem)}`;
      window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, "_blank");
      setStatus("ok");
    }, 700);
  };

  return (
    <form onSubmit={onSubmit} className="border-border/60 bg-background rounded-2xl border p-6 md:p-8 lg:col-span-1">
      <h3 className="font-display text-xl font-bold">Envie sua mensagem</h3>
      <p className="text-muted-foreground mt-1 text-sm">Resposta em até 1 dia útil.</p>

      <div className="mt-6 grid gap-4">
        <Field label="Nome" error={errors.nome}>
          <Input
            value={form.nome}
            onChange={(e) => onChange("nome", e.target.value)}
            placeholder="Seu nome"
            className="h-11"
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <Input
            type="email"
            value={form.email}
            onChange={(e) => onChange("email", e.target.value)}
            placeholder="voce@email.com"
            className="h-11"
          />
        </Field>
        <Field label="Telefone" error={errors.telefone}>
          <Input
            value={form.telefone}
            onChange={(e) => onChange("telefone", e.target.value)}
            placeholder="(00) 00000-0000"
            className="h-11"
          />
        </Field>
        <Field label="Mensagem" error={errors.mensagem}>
          <Textarea
            value={form.mensagem}
            onChange={(e) => onChange("mensagem", e.target.value)}
            placeholder="Conte sobre seu objetivo ou dor..."
            rows={4}
          />
        </Field>
      </div>

      <Button
        type="submit"
        disabled={status === "loading"}
        className="bg-gradient-brand mt-6 h-12 w-full rounded-lg font-semibold shadow-brand-glow hover:opacity-95"
      >
        {status === "loading" ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : status === "ok" ? (
          <>
            <CheckCircle2 className="mr-2 h-5 w-5" /> Enviado!
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" /> Enviar Mensagem
          </>
        )}
      </Button>
    </form>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <label className="block">
      <span className="text-foreground/80 mb-1.5 block text-sm font-medium">{label}</span>
      {children}
      {error && <span className="text-brand mt-1 block text-xs">{error}</span>}
    </label>
  );
}

// =================== FOOTER ===================
function Footer() {
  return (
    <footer className="border-border/60 bg-background border-t py-12">
      <div className="container-wide grid gap-10 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="bg-gradient-brand grid h-9 w-9 place-items-center rounded-lg">
              <Dumbbell className="h-5 w-5 text-white" />
            </span>
            <span className="font-display text-sm font-extrabold">
              ODAIR FILHO
              <span className="text-muted-foreground block text-[10px] font-medium tracking-[0.2em]">
                PERSONAL TRAINER
              </span>
            </span>
          </div>
          <p className="text-muted-foreground mt-4 max-w-xs text-sm">
            Especialista em dores articulares. Mais de 14 anos transformando vidas em Londrina-PR e online.
          </p>
        </div>

        <nav className="grid grid-cols-2 gap-2 text-sm">
          {NAV.map((n) => (
            <a key={n.id} href={`#${n.id}`} className="text-muted-foreground hover:text-foreground transition">
              {n.label}
            </a>
          ))}
        </nav>

        <div className="space-y-3 text-sm">
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand flex items-center gap-2"
          >
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand flex items-center gap-2"
          >
            <Instagram className="h-4 w-4" /> {INSTAGRAM_HANDLE}
          </a>
          <div className="text-muted-foreground flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Londrina · PR
          </div>
        </div>
      </div>
      <div className="border-border/60 container-wide text-muted-foreground mt-10 border-t pt-6 text-xs">
        © 2026 Odair Filho Personal Trainer. Todos os direitos reservados.
      </div>
    </footer>
  );
}

// =================== WHATSAPP FLOAT ===================
function WhatsAppFloat() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="bg-gradient-brand fixed bottom-5 right-5 z-40 grid h-14 w-14 place-items-center rounded-full text-white shadow-brand-glow animate-float-pulse md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <MessageCircle className="h-6 w-6 md:h-7 md:w-7" />
    </a>
  );
}

// =================== SHARED ===================
function SectionHead({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
}) {
  return (
    <div className="reveal mx-auto max-w-3xl text-center">
      <span className="text-brand text-xs font-bold uppercase tracking-[0.25em]">{eyebrow}</span>
      <h2 className="font-display mt-3 text-3xl font-extrabold leading-tight md:text-5xl">{title}</h2>
      {description && <p className="text-muted-foreground mt-4 text-base md:text-lg">{description}</p>}
    </div>
  );
}

// =================== HOOKS ===================
function useScrollReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in-view");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function useTheme(): ["dark" | "light", (t: "dark" | "light") => void] {
  const [theme, setThemeState] = useState<"dark" | "light">("dark");
  useEffect(() => {
    const stored = localStorage.getItem("theme") as "dark" | "light" | null;
    if (stored) {
      setThemeState(stored);
      document.documentElement.classList.toggle("light", stored === "light");
      document.documentElement.classList.toggle("dark", stored === "dark");
    }
  }, []);
  const setTheme = (t: "dark" | "light") => {
    setThemeState(t);
    localStorage.setItem("theme", t);
    document.documentElement.classList.toggle("light", t === "light");
    document.documentElement.classList.toggle("dark", t === "dark");
  };
  return [theme, setTheme];
}
