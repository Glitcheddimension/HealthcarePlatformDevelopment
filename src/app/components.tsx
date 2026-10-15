import type { ButtonHTMLAttributes, ReactNode } from "react"
import {
  Activity,
  ArrowRight,
  BookOpen,
  ChevronRight,
  ClipboardCheck,
  Dna,
  FileText,
  FlaskConical,
  HeartPulse,
  LockKeyhole,
  Menu,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  X,
} from "lucide-react"
import { Link, NavLink } from "react-router"
import { useState } from "react"

export function Logo({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link className={`logo ${inverse ? "logo--inverse" : ""}`} to="/">
      <span className="logo__mark" aria-hidden="true">
        <Dna size={21} strokeWidth={2.4} />
      </span>
      <span>
        <strong>THALASSURE</strong>
        <small>Awareness to action</small>
      </span>
    </Link>
  )
}

export function Button({
  children,
  className = "",
  variant = "primary",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "quiet" | "dark"
}) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      {children}
    </button>
  )
}

export function ButtonLink({
  children,
  to,
  variant = "primary",
  className = "",
}: {
  children: ReactNode
  to: string
  variant?: "primary" | "secondary" | "quiet" | "dark"
  className?: string
}) {
  return (
    <Link className={`button button--${variant} ${className}`} to={to}>
      {children}
    </Link>
  )
}

export function PublicHeader() {
  const [open, setOpen] = useState(false)
  return (
    <header className="public-header">
      <div className="container header-inner">
        <Logo />
        <nav
          className={`public-nav ${open ? "public-nav--open" : ""}`}
          aria-label="Primary navigation"
        >
          <Link to="/" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link to="/learn" onClick={() => setOpen(false)}>
            Learn
          </Link>
          <Link to="/screening" onClick={() => setOpen(false)}>
            Screening
          </Link>
          <a href="/#how-it-works" onClick={() => setOpen(false)}>
            How it works
          </a>
          <a href="/#resources" onClick={() => setOpen(false)}>
            Resources
          </a>
          <ButtonLink to="/sign-in" variant="quiet">
            Sign in
          </ButtonLink>
          <ButtonLink to="/sign-in">
            Get started <ArrowRight size={16} />
          </ButtonLink>
        </nav>
        <Button
          className="menu-button"
          variant="quiet"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen(!open)}
        >
          {open ? <X /> : <Menu />}
        </Button>
      </div>
    </header>
  )
}

const appLinks = [
  { to: "/dashboard", label: "Overview", icon: Activity },
  { to: "/learn", label: "Learn", icon: BookOpen },
  { to: "/screening", label: "Screening journey", icon: ClipboardCheck },
  { to: "/reports", label: "My reports", icon: FileText },
  { to: "/analytics", label: "Programme insights", icon: FlaskConical },
]

export function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="app-shell">
      <aside className="app-sidebar">
        <Logo inverse />
        <nav className="app-nav" aria-label="Workspace navigation">
          <span className="app-nav__label">Your workspace</span>
          {appLinks.map(({ to, label, icon: Icon }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) => (isActive ? "active" : "")}
            >
              <Icon size={19} /> <span>{label}</span>
            </NavLink>
          ))}
        </nav>
        <div className="privacy-note">
          <ShieldCheck size={20} />
          <div>
            <strong>Private by design</strong>
            <span>You control who can access your records.</span>
          </div>
        </div>
      </aside>
      <main className="app-main">
        <div className="app-topbar">
          <div className="mobile-brand">
            <Logo />
          </div>
          <div className="demo-label">Demo workspace</div>
          <div className="profile-chip">
            <span>AD</span>
            <div>
              <strong>Aarav Dev</strong>
              <small>Participant</small>
            </div>
          </div>
        </div>
        {children}
      </main>
      <nav className="bottom-nav" aria-label="Mobile navigation">
        {appLinks.slice(0, 4).map(({ to, label, icon: Icon }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            <Icon size={20} />
            <span>{label.replace(" journey", "")}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  )
}

export const featureIcons = {
  Understand: BookOpen,
  Navigate: Stethoscope,
  "Follow up": MessageCircleHeart,
}

export function JourneyIllustration() {
  return (
    <div
      className="journey-visual"
      aria-label="A connected path from learning to testing and counselling"
    >
      <div className="visual-orbit visual-orbit--one" />
      <div className="visual-orbit visual-orbit--two" />
      <div className="visual-card visual-card--learn">
        <BookOpen />
        <span>Learn</span>
      </div>
      <div className="visual-card visual-card--lab">
        <FlaskConical />
        <span>Testing</span>
      </div>
      <div className="visual-card visual-card--care">
        <MessageCircleHeart />
        <span>Counselling</span>
      </div>
      <div className="visual-center">
        <HeartPulse size={44} />
        <strong>Informed care</strong>
        <span>At your pace</span>
      </div>
      <div className="cell cell--one" />
      <div className="cell cell--two" />
      <div className="cell cell--three" />
      <Sparkles className="visual-sparkle" size={22} />
    </div>
  )
}

export function StatusPill({
  children,
  tone = "info",
}: {
  children: ReactNode
  tone?: "info" | "success" | "warning" | "neutral"
}) {
  return <span className={`status status--${tone}`}>{children}</span>
}

export function PageIntro({
  eyebrow,
  title,
  text,
  actions,
}: {
  eyebrow?: string
  title: string
  text: string
  actions?: ReactNode
}) {
  return (
    <div className="page-intro">
      <div>
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
      {actions && <div className="page-intro__actions">{actions}</div>}
    </div>
  )
}

export function SectionTitle({
  eyebrow,
  title,
  text,
  centered = false,
}: {
  eyebrow?: string
  title: string
  text?: string
  centered?: boolean
}) {
  return (
    <div
      className={`section-title ${centered ? "section-title--centered" : ""}`}
    >
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <h2>{title}</h2>
      {text && <p>{text}</p>}
    </div>
  )
}

export function ArrowAction({ children }: { children: ReactNode }) {
  return (
    <span className="arrow-action">
      {children}
      <ChevronRight size={16} />
    </span>
  )
}

export const Icons = {
  ArrowRight,
  LockKeyhole,
  ShieldCheck,
  FileText,
  BookOpen,
  ClipboardCheck,
  MessageCircleHeart,
}
