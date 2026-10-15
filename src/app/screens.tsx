import { useMemo, useState } from "react"
import {
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  CircleHelp,
  ClipboardCheck,
  Clock3,
  Eye,
  FileCheck2,
  FileText,
  FlaskConical,
  HeartHandshake,
  Info,
  Lightbulb,
  LockKeyhole,
  MessageCircleHeart,
  Search,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  UserRoundCheck,
} from "lucide-react"
import { Link, useNavigate } from "react-router"
import { z } from "zod"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"
import {
  AppShell,
  ArrowAction,
  Button,
  ButtonLink,
  featureIcons,
  Icons,
  JourneyIllustration,
  Logo,
  PageIntro,
  PublicHeader,
  SectionTitle,
  StatusPill,
} from "./components"

const learningCards = [
  {
    title: "What is thalassemia?",
    text: "A group of inherited conditions that affect how the body makes haemoglobin.",
    icon: "DNA",
  },
  {
    title: "What is carrier status?",
    text: "A carrier has one altered gene and may have no obvious symptoms.",
    icon: "Trait",
  },
  {
    title: "Why can carriers feel well?",
    text: "Carrier status often does not cause illness, but it can still be inherited.",
    icon: "Health",
  },
  {
    title: "Understanding a CBC",
    text: "Learn what MCV, MCH and other red-cell measurements describe.",
    icon: "CBC",
  },
  {
    title: "HbA2 and HPLC",
    text: "Explore terms you may see in haemoglobin analysis and laboratory reports.",
    icon: "Lab",
  },
  {
    title: "Confirmatory testing",
    text: "Understand why a clinician may consider additional testing and review.",
    icon: "Review",
  },
]

export function HomePage() {
  return (
    <div>
      <PublicHeader />
      <main>
        <section className="hero">
          <div className="hero-glow" />
          <div className="container hero-grid">
            <div className="hero-copy">
              <span className="eyebrow">
                <ShieldCheck size={15} /> Trusted education. Guided next steps.
              </span>
              <h1>
                From Awareness to <em>Informed Action.</em>
              </h1>
              <p>
                Understand thalassemia, explore appropriate screening options,
                and navigate the path to informed healthcare decisions.
              </p>
              <div className="hero-actions">
                <ButtonLink to="/learn">
                  Start your awareness journey <ArrowRight size={17} />
                </ButtonLink>
                <a className="text-link" href="#how-it-works">
                  Explore how it works <ChevronRight size={16} />
                </a>
              </div>
              <div className="trust-row">
                <span>
                  <CheckCircle2 size={17} /> Plain-language guidance
                </span>
                <span>
                  <CheckCircle2 size={17} /> Privacy-first
                </span>
                <span>
                  <CheckCircle2 size={17} /> Clinician oversight
                </span>
              </div>
            </div>
            <JourneyIllustration />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionTitle
              eyebrow="Why THALASSURE"
              title="Clarity for every step of the journey"
              text="Health information can feel complex. We make the pathway understandable, without replacing professional care."
              centered
            />
            <div className="feature-grid">
              {[
                [
                  "Understand",
                  "Learn about thalassemia, carrier status, and inheritance in clear language.",
                ],
                [
                  "Navigate",
                  "Explore screening options and understand when professional review may help.",
                ],
                [
                  "Follow up",
                  "Keep referrals, reports, counselling and next steps organized in one place.",
                ],
              ].map(([title, text], index) => {
                const Icon = featureIcons[(title as keyof typeof featureIcons)]
                return (
                  <article className="feature-card" key={title}>
                    <span className="feature-number">0{index + 1}</span>
                    <div className="icon-box">
                      <Icon />
                    </div>
                    <h3>{title}</h3>
                    <p>{text}</p>
                    <Link to={index === 0 ? "/learn" : "/sign-in"}>
                      <ArrowAction>Explore</ArrowAction>
                    </Link>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section className="section process-section" id="how-it-works">
          <div className="container">
            <SectionTitle
              eyebrow="How it works"
              title="A connected path, shaped around you"
              text="Not everyone needs every step. Begin with education or pick up from an existing report or referral."
            />
            <div className="process-line">
              {[
                ["Learn", BookOpen],
                ["Share information", ClipboardCheck],
                ["Clinical review", UserRoundCheck],
                ["Recommended testing", FlaskConical],
                ["Results & counselling", HeartHandshake],
              ].map(([label, Icon], index) => {
                const StepIcon = Icon as typeof BookOpen
                return (
                  <div className="process-step" key={label as string}>
                    <div className="process-step__icon">
                      <StepIcon />
                      <span>{index + 1}</span>
                    </div>
                    <strong>{label as string}</strong>
                    {index < 4 && <ChevronRight className="process-arrow" />}
                  </div>
                )
              })}
            </div>
            <div className="safety-note">
              <Info size={20} />
              <p>
                <strong>Your pathway is personal.</strong> THALASSURE organizes
                information and supports conversations. It does not
                independently diagnose thalassemia or replace a qualified
                healthcare professional.
              </p>
            </div>
          </div>
        </section>

        <section className="section" id="resources">
          <div className="container">
            <SectionTitle
              eyebrow="Learn the basics"
              title="Medical terms, made understandable"
              text="Short introductions to the questions people ask most often."
            />
            <div className="learning-grid">
              {learningCards.map((card) => (
                <Link to="/learn" className="learning-card" key={card.title}>
                  <span>{card.icon}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.text}</p>
                  </div>
                  <ChevronRight />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="section research-section">
          <div className="container research-grid">
            <div>
              <span className="eyebrow eyebrow--light">
                Preliminary research example
              </span>
              <h2>Awareness is growing. Important knowledge gaps remain.</h2>
              <p>
                A descriptive survey of 58 college students offers an early view
                of awareness, screening knowledge, and educational needs.
              </p>
              <div className="research-stats">
                <div>
                  <strong>80–85%</strong>
                  <span>had heard of thalassemia</span>
                </div>
                <div>
                  <strong>~60%</strong>
                  <span>understood asymptomatic transmission</span>
                </div>
                <div>
                  <strong>&lt;50%</strong>
                  <span>reported prior HPLC or electrophoresis</span>
                </div>
              </div>
              <p className="research-caption">
                Findings from a survey of 58 college students. These descriptive
                results are not representative estimates for all Indian youth.
              </p>
            </div>
            <div className="research-card">
              <Lightbulb />
              <h3>Why this matters</h3>
              <p>
                Being aware of a condition is not the same as understanding
                carrier status or knowing how to navigate appropriate screening.
              </p>
              <ButtonLink to="/learn" variant="secondary">
                Explore the learning centre
              </ButtonLink>
            </div>
          </div>
        </section>

        <section className="section trust-section">
          <div className="container trust-grid">
            <div>
              <span className="eyebrow">Privacy and trust</span>
              <h2>Your information deserves careful protection.</h2>
              <p>
                Health and genetic information are highly sensitive. THALASSURE
                makes authorization and consent visible at each relevant step.
              </p>
            </div>
            <div className="trust-list">
              {[
                "Personal health records are never publicly visible",
                "Access depends on role and authorization",
                "Clinical decisions remain with qualified professionals",
                "Screening and counselling participation is voluntary",
              ].map((item) => (
                <div key={item}>
                  <ShieldCheck />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="final-cta">
          <div className="container">
            <Sparkles />
            <h2>Knowledge is the first step toward informed care.</h2>
            <p>
              Start with trusted education, then decide what feels right for
              you.
            </p>
            <div>
              <ButtonLink to="/learn">Explore educational resources</ButtonLink>
              <ButtonLink to="/sign-in" variant="secondary">
                Create an account
              </ButtonLink>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <Logo inverse />
            <p>
              Connecting thalassemia awareness with informed, appropriate
              healthcare action.
            </p>
          </div>
          <div>
            <strong>Explore</strong>
            <Link to="/learn">Educational resources</Link>
            <Link to="/screening">Screening support</Link>
            <Link to="/analytics">Programme insights</Link>
          </div>
          <div>
            <strong>Trust</strong>
            <a href="#">Privacy</a>
            <a href="#">Accessibility</a>
            <a href="#">Terms</a>
          </div>
          <div>
            <strong>Important</strong>
            <p>
              This platform provides education and workflow support. It does not
              provide a diagnosis or replace professional medical care.
            </p>
          </div>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 THALASSURE</span>
          <span>Demonstration version 1.0</span>
        </div>
      </footer>
    </div>
  )
}

const quizQuestions = [
  {
    q: "Can a person with beta-thalassemia trait have no obvious symptoms?",
    options: ["Yes", "No", "Only during childhood"],
    correct: 0,
    note: "Yes. Many carriers feel well and may not know they have the trait without appropriate testing.",
  },
  {
    q: "Does a low MCV alone confirm thalassemia?",
    options: ["Yes", "No", "Only in adults"],
    correct: 1,
    note: "No. A low MCV can occur for several reasons and needs appropriate clinical interpretation.",
  },
  {
    q: "What is HPLC used for in this context?",
    options: [
      "Measuring blood pressure",
      "Analysing haemoglobin types",
      "Treating anaemia",
    ],
    correct: 1,
    note: "HPLC is a laboratory method that can separate and measure different forms of haemoglobin.",
  },
]

export function LearnPage() {
  const [question, setQuestion] = useState(0)
  const [answer, setAnswer] = useState<number | null>(null)
  const [score, setScore] = useState(0)
  const [complete, setComplete] = useState(false)
  const current = quizQuestions[question]
  const choose = (index: number) => {
    if (answer !== null) return
    setAnswer(index)
    if (index === current.correct) setScore((value) => value + 1)
  }
  const next = () => {
    if (question === quizQuestions.length - 1) setComplete(true)
    else {
      setQuestion((value) => value + 1)
      setAnswer(null)
    }
  }

  return (
    <AppShell>
      <div className="app-page">
        <PageIntro
          eyebrow="Learning centre"
          title="Build confidence, one topic at a time"
          text="Reviewed, plain-language introductions to thalassemia, inheritance, screening, and care pathways."
        />
        <div className="learn-layout">
          <section className="panel topic-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Recommended for you</span>
                <h2>Thalassemia fundamentals</h2>
              </div>
              <StatusPill tone="success">3 of 6 complete</StatusPill>
            </div>
            <div className="progress-track">
              <span style={{ width: "50%" }} />
            </div>
            <div className="topic-list">
              {learningCards.map((card, index) => (
                <div
                  className={`topic-row ${index < 3 ? "topic-row--done" : ""}`}
                  key={card.title}
                >
                  <span>{index < 3 ? <Check /> : index + 1}</span>
                  <div>
                    <strong>{card.title}</strong>
                    <small>{index < 3 ? "Completed" : "5–7 min read"}</small>
                  </div>
                  <ChevronRight />
                </div>
              ))}
            </div>
          </section>
          <aside className="panel quiz-panel">
            {!complete ? (
              <>
                <div className="quiz-top">
                  <span>Knowledge check</span>
                  <strong>
                    {question + 1} / {quizQuestions.length}
                  </strong>
                </div>
                <div className="progress-track">
                  <span
                    style={{
                      width: `${((question + 1) / quizQuestions.length) * 100}%`,
                    }}
                  />
                </div>
                <h2>{current.q}</h2>
                <div className="quiz-options">
                  {current.options.map((option, index) => (
                    <Button
                      key={option}
                      variant="quiet"
                      className={`quiz-option ${
                        answer === index
                          ? index === current.correct
                            ? "correct"
                            : "incorrect"
                          : ""
                      }`}
                      onClick={() => choose(index)}
                    >
                      <span>{String.fromCharCode(65 + index)}</span>
                      {option}
                      {answer !== null && index === current.correct && (
                        <CheckCircle2 />
                      )}
                    </Button>
                  ))}
                </div>
                {answer !== null && (
                  <div className="explanation">
                    <Lightbulb />
                    <p>
                      <strong>
                        {answer === current.correct
                          ? "That's right."
                          : "Not quite."}
                      </strong>{" "}
                      {current.note}
                    </p>
                  </div>
                )}
                <Button disabled={answer === null} onClick={next}>
                  {question === quizQuestions.length - 1
                    ? "Finish check"
                    : "Next question"}{" "}
                  <ArrowRight size={16} />
                </Button>
              </>
            ) : (
              <div className="quiz-complete">
                <span>
                  <Check />
                </span>
                <h2>Knowledge check complete</h2>
                <p>
                  You answered{" "}
                  <strong>
                    {score} of {quizQuestions.length}
                  </strong>{" "}
                  questions correctly. This score is for learning only and is
                  not a medical assessment.
                </p>
                <Button
                  onClick={() => {
                    setQuestion(0)
                    setAnswer(null)
                    setScore(0)
                    setComplete(false)
                  }}
                >
                  Try again
                </Button>
              </div>
            )}
          </aside>
        </div>
      </div>
    </AppShell>
  )
}

const loginSchema = z.object({
  email: z.string().email("Enter a valid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
})
type LoginValues = z.infer<typeof loginSchema>

export function LoginPage() {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginValues>({ resolver: zodResolver(loginSchema) })
  return (
    <div className="auth-page">
      <div className="auth-brand">
        <Logo inverse />
        <div>
          <span className="eyebrow eyebrow--light">
            Secure participant access
          </span>
          <h1>Your journey, organized with care.</h1>
          <p>
            Continue learning, manage reports, and keep track of referrals and
            counselling in one private workspace.
          </p>
        </div>
        <div className="auth-assurance">
          <LockKeyhole />
          <span>
            <strong>Privacy comes first</strong>Your sensitive information is
            only available to authorized people.
          </span>
        </div>
      </div>
      <main className="auth-form-wrap">
        <Link className="back-link" to="/">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <form
          className="auth-form"
          onSubmit={handleSubmit(async () => {
            await new Promise((resolve) => setTimeout(resolve, 500))
            navigate("/dashboard")
          })}
        >
          <span className="eyebrow">Welcome back</span>
          <h2>Sign in to THALASSURE</h2>
          <p>Use your verified email address to continue.</p>
          <label>
            Email address
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email")}
            />
            {errors.email && (
              <small className="field-error">{errors.email.message}</small>
            )}
          </label>
          <label>
            Password
            <div className="password-input">
              <input
                type="password"
                placeholder="At least 8 characters"
                {...register("password")}
              />
              <Eye size={18} />
            </div>
            {errors.password && (
              <small className="field-error">{errors.password.message}</small>
            )}
          </label>
          <div className="form-row">
            <label className="check-label">
              <input type="checkbox" /> Keep me signed in
            </label>
            <a href="#">Forgot password?</a>
          </div>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Signing in…" : "Sign in securely"}{" "}
            <ArrowRight size={16} />
          </Button>
          <div className="demo-credentials">
            <Info />
            <span>
              <strong>Explore the demo workspace</strong>Use any valid email and
              a password of 8+ characters. All records are synthetic.
            </span>
          </div>
          <p className="auth-switch">
            New to THALASSURE? <a href="#">Create an account</a>
          </p>
        </form>
      </main>
    </div>
  )
}

export function DashboardPage() {
  const summary = [
    {
      label: "Awareness progress",
      value: "50% complete",
      note: "3 of 6 topics",
      icon: BookOpen,
      tone: "teal",
    },
    {
      label: "Screening journey",
      value: "Review suggested",
      note: "One action available",
      icon: ClipboardCheck,
      tone: "navy",
    },
    {
      label: "Referrals",
      value: "1 active",
      note: "Updated 2 days ago",
      icon: CalendarDays,
      tone: "aqua",
    },
    {
      label: "Learning",
      value: "2 recommended",
      note: "Based on your quiz",
      icon: Lightbulb,
      tone: "gold",
    },
  ]
  return (
    <AppShell>
      <div className="app-page">
        <PageIntro
          title="Welcome back, Aarav"
          text="Your health information and next steps, organized in one place."
          actions={
            <Button variant="secondary">
              <Search size={17} /> Find a service
            </Button>
          }
        />
        <div className="summary-grid">
          {summary.map(({ label, value, note, icon: Icon, tone }) => (
            <article className="summary-card" key={label}>
              <div className={`summary-icon summary-icon--${tone}`}>
                <Icon />
              </div>
              <span>{label}</span>
              <strong>{value}</strong>
              <small>{note}</small>
            </article>
          ))}
        </div>
        <section className="next-step">
          <div className="next-step__art">
            <FileCheck2 />
            <span>
              <Check />
            </span>
          </div>
          <div className="next-step__content">
            <span className="eyebrow eyebrow--light">Your next step</span>
            <h2>Understand your CBC report</h2>
            <p>
              Your synthetic demonstration report is ready to review. A
              laboratory value alone cannot establish whether you have
              thalassemia. You can review the report or prepare questions for a
              healthcare professional.
            </p>
            <div>
              <ButtonLink to="/reports" variant="secondary">
                View report <ArrowRight size={16} />
              </ButtonLink>
              <ButtonLink to="/learn" variant="quiet">
                Learn about CBC
              </ButtonLink>
            </div>
          </div>
          <div className="next-step__status">
            <StatusPill tone="warning">Awaiting clinical review</StatusPill>
            <small>Demo record · not a diagnosis</small>
          </div>
        </section>
        <div className="dashboard-columns">
          <section className="panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Shortcuts</span>
                <h2>Quick actions</h2>
              </div>
            </div>
            <div className="quick-grid">
              {[
                ["Learn about thalassemia", BookOpen, "/learn"],
                ["Take awareness quiz", CircleHelp, "/learn"],
                ["Upload a report", UploadCloud, "/reports"],
                ["View screening journey", ClipboardCheck, "/screening"],
                ["Find testing services", FlaskConical, "/screening"],
                ["Explore counselling", MessageCircleHeart, "/learn"],
              ].map(([label, Icon, to]) => {
                const QuickIcon = Icon as typeof BookOpen
                return (
                  <Link to={to as string} key={label as string}>
                    <span>
                      <QuickIcon />
                    </span>
                    <strong>{label as string}</strong>
                    <ChevronRight />
                  </Link>
                )
              })}
            </div>
          </section>
          <section className="panel activity-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Your account</span>
                <h2>Recent activity</h2>
              </div>
              <button className="plain-button">View all</button>
            </div>
            {[
              ["Report added", "Synthetic CBC report", "Today", FileText],
              [
                "Quiz completed",
                "Thalassemia fundamentals",
                "2 days ago",
                CheckCircle2,
              ],
              [
                "Referral updated",
                "Clinical consultation requested",
                "4 days ago",
                UserRoundCheck,
              ],
            ].map(([title, text, time, Icon]) => {
              const ActivityIcon = Icon as typeof FileText
              return (
                <div className="activity-row" key={title as string}>
                  <span>
                    <ActivityIcon />
                  </span>
                  <div>
                    <strong>{title as string}</strong>
                    <small>{text as string}</small>
                  </div>
                  <time>{time as string}</time>
                </div>
              )
            })}
          </section>
        </div>
      </div>
    </AppShell>
  )
}

export function ScreeningPage() {
  const [step, setStep] = useState(0)
  const [consent, setConsent] = useState(false)
  const steps = ["Purpose", "Your information", "Available results", "Review"]
  return (
    <AppShell>
      <div className="app-page narrow-page">
        <PageIntro
          eyebrow="Preliminary screening support"
          title="Organize information for a clinical conversation"
          text="This guided process helps you collect relevant information. It does not diagnose or rule out thalassemia."
        />
        <div className="stepper">
          {steps.map((label, index) => (
            <div
              className={`${index === step ? "active" : ""} ${
                index < step ? "done" : ""
              }`}
              key={label}
            >
              <span>{index < step ? <Check /> : index + 1}</span>
              <strong>{label}</strong>
            </div>
          ))}
        </div>
        <section className="panel form-panel">
          {step === 0 && (
            <>
              <div className="form-icon">
                <ShieldCheck />
              </div>
              <h2>Before you begin</h2>
              <p>
                This process can help organize existing information for
                discussion with a healthcare professional. It will never
                automatically create a diagnosis.
              </p>
              <div className="purpose-list">
                <div>
                  <CheckCircle2 />
                  <span>
                    <strong>You can skip unknown information</strong>Missing
                    values are never treated as zero.
                  </span>
                </div>
                <div>
                  <CheckCircle2 />
                  <span>
                    <strong>Every flag includes an explanation</strong>You will
                    see what triggered it and what it does not establish.
                  </span>
                </div>
                <div>
                  <CheckCircle2 />
                  <span>
                    <strong>You remain in control</strong>You can save, leave,
                    or delete a draft at any point.
                  </span>
                </div>
              </div>
              <label className="consent-box">
                <input
                  type="checkbox"
                  checked={consent}
                  onChange={(event) => setConsent(event.target.checked)}
                />
                <span>
                  <strong>I understand the purpose of this tool</strong>I
                  consent to using the information I choose to enter for
                  screening support.
                </span>
              </label>
            </>
          )}
          {step === 1 && (
            <>
              <span className="eyebrow">Step 2</span>
              <h2>What brings you here?</h2>
              <p>
                Select the option that best describes what you would like help
                with.
              </p>
              <div className="choice-grid">
                {[
                  "I want to understand screening options",
                  "I have an existing CBC report",
                  "A clinician suggested further review",
                  "Thalassemia is present in my family",
                ].map((item, index) => (
                  <label key={item} className="choice-card">
                    <input
                      type="radio"
                      name="reason"
                      defaultChecked={index === 1}
                    />
                    <span>
                      <strong>{item}</strong>
                      <small>You can add more detail later</small>
                    </span>
                  </label>
                ))}
              </div>
            </>
          )}
          {step === 2 && (
            <>
              <span className="eyebrow">Step 3</span>
              <h2>Add available CBC values</h2>
              <p>
                Enter only what is available on your report. Units and reference
                intervals can vary by laboratory.
              </p>
              <div className="field-grid">
                {[
                  "Haemoglobin",
                  "MCV",
                  "MCH",
                  "RBC count",
                  "RDW",
                  "Test date",
                ].map((field) => (
                  <label key={field}>
                    {field}
                    <span>Optional</span>
                    <input
                      placeholder={
                        field === "Test date" ? "DD / MM / YYYY" : "Enter value"
                      }
                    />
                  </label>
                ))}
              </div>
              <div className="info-strip">
                <Info />
                <span>
                  Values are saved as entered and should be verified against the
                  original report before clinical use.
                </span>
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <div className="form-icon form-icon--success">
                <ClipboardCheck />
              </div>
              <h2>Ready for your review</h2>
              <p>
                Your information will be saved with the current rule-set version
                and the explanation shown to you.
              </p>
              <div className="review-card">
                <div>
                  <span>Reason</span>
                  <strong>Understand an existing CBC report</strong>
                </div>
                <div>
                  <span>Available information</span>
                  <strong>5 CBC values · synthetic demo</strong>
                </div>
                <div>
                  <span>Workflow status</span>
                  <StatusPill tone="warning">Awaiting review</StatusPill>
                </div>
              </div>
              <div className="safety-note">
                <AlertCircle />
                <p>
                  <strong>What this does not establish</strong> A CBC pattern
                  alone cannot confirm carrier status or a diagnosis. A
                  qualified professional may consider history, laboratory
                  reference intervals, iron status, haemoglobin analysis, or
                  other information.
                </p>
              </div>
            </>
          )}
          <div className="form-actions">
            {step > 0 ? (
              <Button variant="quiet" onClick={() => setStep(step - 1)}>
                <ArrowLeft size={16} /> Back
              </Button>
            ) : (
              <Link className="button button--quiet" to="/dashboard">
                <ArrowLeft size={16} /> Cancel safely
              </Link>
            )}
            <Button
              disabled={step === 0 && !consent}
              onClick={() => (step < 3 ? setStep(step + 1) : undefined)}
            >
              {step === 3 ? "Save for review" : "Continue"}{" "}
              <ArrowRight size={16} />
            </Button>
          </div>
        </section>
      </div>
    </AppShell>
  )
}

export function ReportsPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploaded, setUploaded] = useState(false)
  return (
    <AppShell>
      <div className="app-page">
        <PageIntro
          eyebrow="Private document centre"
          title="Reports and laboratory documents"
          text="Upload a report, review extracted values, and keep source documents connected to verified information."
          actions={
            <Button
              onClick={() => document.getElementById("report-file")?.click()}
            >
              <UploadCloud size={17} /> Add report
            </Button>
          }
        />
        {!uploaded ? (
          <section className="upload-panel">
            <div className="upload-icon">
              <UploadCloud />
            </div>
            <h2>Add an existing laboratory report</h2>
            <p>
              PDF, JPG, JPEG, or PNG. The demonstration upload remains in this
              browser session and is not sent to a laboratory.
            </p>
            <label className="dropzone" htmlFor="report-file">
              <input
                id="report-file"
                type="file"
                accept=".pdf,.jpg,.jpeg,.png"
                onChange={(event) => setFile(event.target.files?.[0] || null)}
              />
              <span>{file ? <FileCheck2 /> : <UploadCloud />}</span>
              <strong>
                {file ? file.name : "Choose a file or drag it here"}
              </strong>
              <small>
                {file
                  ? `${(file.size / 1024).toFixed(1)} KB · ready to upload`
                  : "Maximum file size: 10 MB"}
              </small>
            </label>
            <div className="upload-safety">
              <LockKeyhole />
              <span>
                <strong>Private by default</strong>Documents require
                authorization and are never placed in a public folder.
              </span>
            </div>
            <Button disabled={!file} onClick={() => setUploaded(true)}>
              Upload securely <ArrowRight size={16} />
            </Button>
          </section>
        ) : (
          <section className="panel report-review">
            <div className="success-banner">
              <CheckCircle2 />
              <div>
                <strong>Report uploaded successfully</strong>
                <span>Possible fields are ready for manual verification.</span>
              </div>
              <StatusPill tone="warning">Extracted — not verified</StatusPill>
            </div>
            <div className="report-split">
              <div className="document-preview">
                <FileText />
                <strong>{file?.name}</strong>
                <span>Synthetic source preview</span>
                <Button variant="secondary">
                  <Eye size={16} /> View original
                </Button>
              </div>
              <div>
                <div className="panel-heading">
                  <div>
                    <span className="eyebrow">Review extraction</span>
                    <h2>Possible laboratory values</h2>
                  </div>
                </div>
                <div className="extracted-table">
                  {[
                    ["Haemoglobin", "12.1", "g/dL", "High"],
                    ["MCV", "72", "fL", "High"],
                    ["MCH", "24", "pg", "Medium"],
                    ["RBC count", "5.1", "10⁶/µL", "Medium"],
                  ].map(([name, value, unit, confidence]) => (
                    <div key={name}>
                      <span>{name}</span>
                      <strong>
                        {value} <small>{unit}</small>
                      </strong>
                      <StatusPill
                        tone={confidence === "High" ? "success" : "warning"}
                      >
                        {confidence} confidence
                      </StatusPill>
                    </div>
                  ))}
                </div>
                <div className="info-strip">
                  <Info />
                  <span>
                    Check every value against the original report. Extracted
                    values are not used in screening support until verified.
                  </span>
                </div>
                <Button>
                  Confirm values reviewed <Check size={16} />
                </Button>
              </div>
            </div>
          </section>
        )}
      </div>
    </AppShell>
  )
}

const awarenessData = [
  { topic: "Fundamentals", score: 82 },
  { topic: "Inheritance", score: 64 },
  { topic: "Carrier status", score: 71 },
  { topic: "Screening", score: 58 },
  { topic: "Counselling", score: 76 },
]
const referralData = [
  { month: "Jan", created: 28, completed: 17 },
  { month: "Feb", created: 34, completed: 22 },
  { month: "Mar", created: 31, completed: 25 },
  { month: "Apr", created: 45, completed: 33 },
  { month: "May", created: 52, completed: 39 },
  { month: "Jun", created: 49, completed: 42 },
]

export function AnalyticsPage() {
  const metrics = useMemo(
    () => [
      ["Participants reached", "1,248", "+12.4%", BookOpen],
      ["Assessments completed", "864", "69.2% of reached", ClipboardCheck],
      ["Referrals created", "239", "27.7% of assessed", UserRoundCheck],
      ["Referrals completed", "178", "74.5% of referrals", CheckCircle2],
      ["Counselling sessions", "92", "51.7% of completed", HeartHandshake],
    ],
    [],
  )
  return (
    <AppShell>
      <div className="app-page analytics-page">
        <PageIntro
          eyebrow="Authorized programme workspace"
          title="Community health intelligence"
          text="Understand awareness activity, referral completion, and service-access gaps without exposing individual records."
          actions={<Button variant="secondary">Export aggregate CSV</Button>}
        />
        <div className="demo-banner">
          <Info />
          <span>
            <strong>DEMO DATA — NOT REAL PATIENT STATISTICS</strong> All metrics
            below use synthetic programme records for January–June 2026.
          </span>
        </div>
        <div className="filter-bar">
          <label>
            Date range
            <select defaultValue="6months">
              <option value="6months">Jan–Jun 2026</option>
            </select>
          </label>
          <label>
            Programme
            <select>
              <option>All outreach programmes</option>
            </select>
          </label>
          <label>
            Region
            <select>
              <option>All broad regions</option>
            </select>
          </label>
          <Button variant="quiet">
            <Search size={16} /> Apply filters
          </Button>
        </div>
        <div className="metric-grid">
          {metrics.map(([label, value, note, Icon]) => {
            const MetricIcon = Icon as typeof BookOpen
            return (
              <article key={label as string}>
                <span>
                  <MetricIcon />
                </span>
                <small>{label as string}</small>
                <strong>{value as string}</strong>
                <p>{note as string}</p>
              </article>
            )
          })}
        </div>
        <div className="chart-grid">
          <section className="panel chart-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Education</span>
                <h2>Awareness knowledge by topic</h2>
                <p>
                  Correct answers as a share of completed assessments (n=864)
                </p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={290}>
              <BarChart
                data={awarenessData}
                layout="vertical"
                margin={{ left: 8, right: 18 }}
              >
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis
                  type="number"
                  domain={[0, 100]}
                  tickFormatter={(value) => `${value}%`}
                />
                <YAxis dataKey="topic" type="category" width={95} />
                <Tooltip formatter={(value) => [`${value}%`, "Correct"]} />
                <Bar
                  dataKey="score"
                  fill="var(--teal)"
                  radius={[0, 6, 6, 0]}
                  barSize={18}
                />
              </BarChart>
            </ResponsiveContainer>
            <p className="chart-footnote">
              Source: synthetic awareness assessment responses · Denominator:
              participants completing each topic.
            </p>
          </section>
          <section className="panel chart-panel">
            <div className="panel-heading">
              <div>
                <span className="eyebrow">Service pathway</span>
                <h2>Referral completion over time</h2>
                <p>Monthly created and completed referrals</p>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={290}>
              <LineChart data={referralData} margin={{ left: -12, right: 18 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="created"
                  stroke="var(--navy)"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
                <Line
                  type="monotone"
                  dataKey="completed"
                  stroke="var(--teal)"
                  strokeWidth={3}
                  dot={{ r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
            <div className="chart-legend">
              <span className="navy-dot">Created</span>
              <span className="teal-dot">Completed</span>
            </div>
            <p className="chart-footnote">
              Source: synthetic referral status events · Reporting period:
              Jan–Jun 2026.
            </p>
          </section>
        </div>
      </div>
    </AppShell>
  )
}

export function NotFoundPage() {
  return (
    <div className="not-found">
      <Logo />
      <div>
        <Search />
        <h1>We couldn't find that page</h1>
        <p>
          The link may have changed, or you may not have permission to view this
          area.
        </p>
        <ButtonLink to="/">Return home</ButtonLink>
      </div>
    </div>
  )
}
