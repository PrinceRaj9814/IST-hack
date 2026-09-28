import { FormEvent, ReactNode, useEffect, useState } from "react"

type Screen = "login" | "signup" | "forgot" | "reset" | "onboarding" | "home" | "discover" | "profile-riya" | "match" | "exchange" | "language" | "participation" | "cohort" | "ping" | "events" | "event" | "profile" | "feedback" | "notifications" | "settings"

type IconName = "home" | "discover" | "users" | "message" | "calendar" | "user" | "settings" | "bell" | "sun" | "search" | "arrow" | "check" | "clock" | "location" | "spark" | "plus" | "send" | "book" | "close" | "filter" | "chevron"

const paths: Record<IconName, ReactNode> = {
  home: (
    <>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-7h6v7" />
    </>
  ),
  discover: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z" />
    </>
  ),
  users: (
    <>
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
    </>
  ),
  message: (
    <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4Z" />
  ),
  calendar: (
    <>
      <rect x="3" y="5" width="18" height="16" rx="2" />
      <path d="M16 3v4M8 3v4M3 10h18" />
    </>
  ),
  user: (
    <>
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21a8 8 0 0 1 16 0" />
    </>
  ),
  settings: (
    <>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1-2.8 2.8-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.6v.2h-4V21a1.7 1.7 0 0 0-1-1.6 1.7 1.7 0 0 0-1.9.3l-.1.1L4.2 17l.1-.1a1.7 1.7 0 0 0 .3-1.9A1.7 1.7 0 0 0 3 14H2.8v-4H3a1.7 1.7 0 0 0 1.6-1 1.7 1.7 0 0 0-.3-1.9L4.2 7 7 4.2l.1.1a1.7 1.7 0 0 0 1.9.3A1.7 1.7 0 0 0 10 3v-.2h4V3a1.7 1.7 0 0 0 1 1.6 1.7 1.7 0 0 0 1.9-.3l.1-.1L19.8 7l-.1.1a1.7 1.7 0 0 0-.3 1.9 1.7 1.7 0 0 0 1.6 1h.2v4H21a1.7 1.7 0 0 0-1.6 1Z" />
    </>
  ),
  bell: (
    <>
      <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
    </>
  ),
  sun: (
    <>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-4-4" />
    </>
  ),
  arrow: (
    <>
      <path d="M5 12h14M13 6l6 6-6 6" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
  clock: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </>
  ),
  location: (
    <>
      <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  spark: (
    <path d="m12 3 1.5 5.5L19 10l-5.5 1.5L12 17l-1.5-5.5L5 10l5.5-1.5L12 3ZM19 17l.7 2.3L22 20l-2.3.7L19 23l-.7-2.3L16 20l2.3-.7L19 17Z" />
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  send: (
    <>
      <path d="m22 2-7 20-4-9-9-4 20-7Z" />
      <path d="M22 2 11 13" />
    </>
  ),
  book: (
    <>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20V3H6.5A2.5 2.5 0 0 0 4 5.5Z" />
      <path d="M4 5.5v14" />
    </>
  ),
  close: <path d="m6 6 12 12M18 6 6 18" />,
  filter: <path d="M4 5h16M7 12h10M10 19h4" />,
  chevron: <path d="m9 18 6-6-6-6" />,
}

function Icon({ name, size = 20 }: { name: IconName size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}

function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <div className="logo">
      <span className="logo-mark">En</span>
      {!compact && <span className="logo-tag">Discover. Connect. Grow.</span>}
    </div>
  )
}

function Button({
  children,
  variant = "primary",
  icon,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}: {
  children: ReactNode
  variant?: "primary" | "secondary" | "ghost" | "soft" | "danger"
  icon?: IconName
  onClick?: () => void
  type?: "button" | "submit"
  className?: string
  disabled?: boolean
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <Icon name={icon} size={18} />}
      <span>{children}</span>
    </button>
  )
}

function Field({
  label,
  placeholder,
  type = "text",
  defaultValue,
}: {
  label: string
  placeholder?: string
  type?: string
  defaultValue?: string
}) {
  return (
    <label className="field">
      <span>{label}</span>
      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
      />
    </label>
  )
}

function Chip({
  children,
  active = false,
  onClick,
}: {
  children: ReactNode
  active?: boolean
  onClick?: () => void
}) {
  return (
    <button
      className={`chip ${active ? "active" : ""}`}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  )
}

function Badge({
  children,
  tone = "blue",
}: {
  children: ReactNode
  tone?: "blue" | "green" | "purple" | "amber" | "neutral"
}) {
  return <span className={`badge badge-${tone}`}>{children}</span>
}

function Avatar({
  name,
  src,
  size = "md",
}: {
  name: string
  src?: string
  size?: "sm" | "md" | "lg" | "xl"
}) {
  return src ? (
    <img
      className={`avatar avatar-${size}`}
      src={src}
      alt={`${name}'s profile`}
    />
  ) : (
    <span className={`avatar avatar-${size} avatar-fallback`}>
      {name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .slice(0, 2)}
    </span>
  )
}

const riyaImage =
  "https://images.unsplash.com/photo-1585313435040-ead0a60ead91?crop=faces&fit=crop&w=300&h=300&q=85"
const groupImage =
  "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?crop=entropy&fit=crop&w=1200&h=700&q=85"

const people = [
  {
    name: "Riya Sharma",
    role: "CSE · 3rd year",
    teach: ["React", "UI/UX"],
    wants: "JavaScript",
    match: 88,
    city: "Bengaluru",
    image: riyaImage,
  },
  {
    name: "Kabir Mehta",
    role: "Design · 2nd year",
    teach: ["Figma", "Branding"],
    wants: "React",
    match: 81,
    city: "Bengaluru",
  },
  {
    name: "Ananya Iyer",
    role: "AI/ML · 4th year",
    teach: ["Python", "AI/ML"],
    wants: "Public Speaking",
    match: 79,
    city: "Bengaluru",
  },
  {
    name: "Aditya Rao",
    role: "Software engineer",
    teach: ["Java", "Systems"],
    wants: "Photography",
    match: 74,
    city: "Mysuru",
  },
]

const cohorts = [
  {
    title: "React Study Circle",
    members: 6,
    mode: "Online",
    next: "Sat · 7:00 PM",
    progress: 60,
    tone: "blue",
  },
  {
    title: "Hackathon Builders",
    members: 8,
    mode: "Hybrid",
    next: "Sun · 11:00 AM",
    progress: 40,
    tone: "purple",
  },
  {
    title: "Speak with Confidence",
    members: 5,
    mode: "Offline",
    next: "Wed · 5:30 PM",
    progress: 75,
    tone: "amber",
  },
  {
    title: "Python for Research",
    members: 7,
    mode: "Online",
    next: "Tue · 8:00 PM",
    progress: 25,
    tone: "green",
  },
  {
    title: "Korean × Hindi Exchange",
    members: 4,
    mode: "Online",
    next: "Fri · 6:00 PM",
    progress: 50,
    tone: "purple",
  },
]

const events = [
  {
    title: "Build for Bengaluru Hackathon",
    date: "24",
    month: "AUG",
    time: "9:00 AM",
    mode: "Offline",
    category: "Hackathon",
    organizer: "CodeBLR",
    reason: "Matches your interest in hackathons and web development.",
  },
  {
    title: "Designing Better Products",
    date: "28",
    month: "AUG",
    time: "6:30 PM",
    mode: "Online",
    category: "Workshop",
    organizer: "Design Circle",
    reason: "You selected UI/UX and want to learn Figma.",
  },
  {
    title: "React Beyond the Basics",
    date: "02",
    month: "SEP",
    time: "7:00 PM",
    mode: "Online",
    category: "Workshop",
    organizer: "Frontend Guild",
    reason: "Picked because you are learning React.",
  },
  {
    title: "Cubbon Park Photo Walk",
    date: "07",
    month: "SEP",
    time: "7:30 AM",
    mode: "Offline",
    category: "Outing",
    organizer: "Frame by Frame",
    reason: "A fresh activity related to your visual design interests.",
  },
  {
    title: "Korean Language Meetup",
    date: "10",
    month: "SEP",
    time: "5:00 PM",
    mode: "Offline",
    category: "Language",
    organizer: "Seoulmates BLR",
    reason: "Matches your language-learning goal.",
  },
  {
    title: "Sketching the City",
    date: "14",
    month: "SEP",
    time: "10:00 AM",
    mode: "Offline",
    category: "Competition",
    organizer: "Urban Canvas",
    reason: "Explore something new through design and architecture.",
  },
]

function Auth({ screen, go }: { screen: Screen go: (s: Screen) => void }) {
  const submit = (e: FormEvent) => {
    e.preventDefault()
    go(
      screen === "login"
        ? "onboarding"
        : screen === "signup"
          ? "onboarding"
          : screen === "forgot"
            ? "reset"
            : "login",
    )
  }
  const copy = {
    login: [
      "Find people who help you grow.",
      "Learn from others. Share what you know. Build meaningful connections.",
    ],
    signup: [
      "Start growing together.",
      "Create your account, then tell us what you want to learn and share.",
    ],
    forgot: [
      "Reset your password.",
      "Enter your email and we’ll send you a reset link.",
    ],
    reset: [
      "Choose a new password.",
      "Make it memorable and keep your En account secure.",
    ],
  }[(screen as "login" | "signup" | "forgot" | "reset")]
  return (
    <main className="auth-page">
      <section className="auth-story">
        <Logo />
        <div className="story-copy">
          <Badge tone="purple">Peer learning, made possible</Badge>
          <h1>The right learning partner may already be around you.</h1>
          <p>
            En helps you find them — across classes, campuses, schedules and
            social circles.
          </p>
        </div>
        <div className="story-proof">
          <div className="avatar-stack">
            {["A", "R", "K", "M"].map((n, i) => (
              <Avatar key={i} name={n} size="sm" />
            ))}
          </div>
          <span>12,400+ curious people learning together</span>
        </div>
      </section>
      <section className="auth-panel">
        <form className="auth-card" onSubmit={submit}>
          <div className="mobile-logo">
            <Logo />
          </div>
          <div>
            <h2>{copy[0]}</h2>
            <p>{copy[1]}</p>
          </div>
          {screen === "signup" && (
            <Field label="Name" placeholder="Your full name" />
          )}
          {(screen === "login" ||
            screen === "signup" ||
            screen === "forgot") && (
            <Field
              label="Email"
              type="email"
              placeholder="you@university.edu"
              defaultValue={screen === "login" ? "aarav@demo.en" : ""}
            />
          )}
          {(screen === "login" ||
            screen === "signup" ||
            screen === "reset") && (
            <Field
              label={screen === "reset" ? "New password" : "Password"}
              type="password"
              placeholder="At least 8 characters"
              defaultValue={screen === "login" ? "demo1234" : ""}
            />
          )}
          {(screen === "signup" || screen === "reset") && (
            <Field
              label="Confirm password"
              type="password"
              placeholder="Repeat your password"
            />
          )}
          {screen === "login" && (
            <button
              className="text-link align-right"
              type="button"
              onClick={() => go("forgot")}
            >
              Forgot password?
            </button>
          )}
          <Button type="submit" className="full">
            {screen === "login"
              ? "Log In"
              : screen === "signup"
                ? "Create Account"
                : screen === "forgot"
                  ? "Send Reset Link"
                  : "Reset Password"}
          </Button>
          {screen === "login" && (
            <>
              <div className="divider">
                <span>or</span>
              </div>
              <Button
                variant="secondary"
                className="full"
                onClick={() => go("signup")}
              >
                Create Account
              </Button>
              <button
                type="button"
                className="text-link center"
                onClick={() => go("home")}
              >
                Returning demo user? Skip to dashboard
              </button>
            </>
          )}
          {screen !== "login" && (
            <button
              type="button"
              className="text-link center"
              onClick={() => go("login")}
            >
              Back to log in
            </button>
          )}
        </form>
      </section>
    </main>
  )
}

const interestOptions = [
  "Programming",
  "Web Development",
  "AI/ML",
  "UI/UX",
  "Robotics",
  "Business",
  "Entrepreneurship",
  "Photography",
  "Music",
  "Gaming",
  "Sports",
  "Books",
  "Movies",
  "Art",
  "Architecture",
  "Finance",
  "Marketing",
  "Research",
  "Public Speaking",
  "Hackathons",
]
const purposeOptions = [
  "Study",
  "Skill Sharing",
  "Networking",
  "Projects",
  "Hackathons",
  "Career",
  "Mentorship",
  "Making Friends",
  "Events",
  "Outings",
  "Language Exchange",
  "Collaboration",
  "Fun",
]
const preferenceOptions = [
  "Prefer 1-to-1",
  "Prefer small groups",
  "Prefer large groups",
  "Prefer online",
  "Prefer offline",
  "Comfortable meeting new people",
  "Prefer structured sessions",
  "Prefer casual sessions",
  "Active mornings",
  "Active afternoons",
  "Active evenings",
]

function Onboarding({ go }: { go: (s: Screen) => void }) {
  const [step, setStep] = useState(1)
  const [status, setStatus] = useState("College Student")
  const [selected, setSelected] = useState<string[]>([
    "Programming",
    "Hackathons",
    "UI/UX",
  ])
  const toggle = (v: string) =>
    setSelected((x) => (x.includes(v) ? x.filter((y) => y !== v) : [...x, v]))
  const next = () => (step === 8 ? go("home") : setStep(step + 1))
  return (
    <main className="onboarding">
      <header>
        <Logo />
        <button className="text-link" onClick={() => go("login")}>
          Save & exit
        </button>
      </header>
      <section className="onboard-card">
        <div className="progress-head">
          <span>Step {step} of 8</span>
          <span>{Math.round((step / 8) * 100)}% complete</span>
        </div>
        <div className="progress">
          <span style={{ width: `${(step / 8) * 100}%` }} />
        </div>
        {step === 1 && (
          <div className="step">
            <div className="eyebrow">Let’s get introduced</div>
            <h1>Tell us a little about you</h1>
            <p>We only use this to make your recommendations more relevant.</p>
            <div className="photo-upload">
              <Avatar name="Aarav Patel" size="xl" />
              <Button variant="soft">Add profile photo</Button>
            </div>
            <div className="form-grid">
              <Field label="Name" defaultValue="Aarav Patel" />
              <Field label="Age range" placeholder="18–21" />
              <Field label="City" defaultValue="Bengaluru" />
            </div>
          </div>
        )}
        {step === 2 && (
          <div className="step">
            <div className="eyebrow">Your current chapter</div>
            <h1>What best describes you?</h1>
            <p>
              This helps us surface people with useful context, not build a
              résumé.
            </p>
            <div className="option-grid">
              {[
                "School Student",
                "College Student",
                "Working Professional",
                "Other",
              ].map((x) => (
                <Chip
                  key={x}
                  active={status === x}
                  onClick={() => setStatus(x)}
                >
                  {x}
                </Chip>
              ))}
            </div>
            {status === "College Student" && (
              <div className="form-grid">
                <Field label="University" defaultValue="PES University" />
                <Field label="Degree" defaultValue="B.Tech" />
                <Field label="Branch" defaultValue="Computer Science" />
                <Field label="Year / semester" defaultValue="3rd year" />
              </div>
            )}
          </div>
        )}
        {step === 3 && (
          <div className="step">
            <div className="eyebrow">The things you care about</div>
            <h1>Choose your interests</h1>
            <p>Select at least three. You can always update these later.</p>
            <div className="chips-wrap">
              {interestOptions.map((x) => (
                <Chip
                  key={x}
                  active={selected.includes(x)}
                  onClick={() => toggle(x)}
                >
                  {x}
                </Chip>
              ))}
              <Chip>
                <Icon name="plus" size={16} /> Add custom
              </Chip>
            </div>
          </div>
        )}
        {step === 4 && (
          <div className="step">
            <div className="eyebrow">Connect across cultures</div>
            <h1>What languages are part of your world?</h1>
            <div className="dual-box">
              <div>
                <h3>Languages I know</h3>
                <div className="selection-row">
                  <strong>English</strong>
                  <Badge tone="green">Fluent</Badge>
                </div>
                <div className="selection-row">
                  <strong>Hindi</strong>
                  <Badge tone="blue">Advanced</Badge>
                </div>
                <Button variant="ghost" icon="plus">
                  Add language
                </Button>
              </div>
              <div>
                <h3>Languages I want to learn</h3>
                <div className="selection-row">
                  <strong>Korean</strong>
                  <Badge tone="purple">Beginner</Badge>
                </div>
                <Button variant="ghost" icon="plus">
                  Add language
                </Button>
              </div>
            </div>
          </div>
        )}
        {step === 5 && (
          <div className="step">
            <div className="eyebrow">Give and grow</div>
            <h1>Build your skill exchange</h1>
            <div className="dual-box">
              <div>
                <h3>Skills I can offer</h3>
                {[
                  ["JavaScript", "Advanced"],
                  ["Python", "Intermediate"],
                  ["Public Speaking", "Intermediate"],
                ].map((x) => (
                  <div className="selection-row" key={x[0]}>
                    <strong>{x[0]}</strong>
                    <Badge tone="green">{x[1]}</Badge>
                  </div>
                ))}
                <Button variant="ghost" icon="plus">
                  Add a skill
                </Button>
              </div>
              <div>
                <h3>Skills I want to learn</h3>
                {[
                  ["React", "Intermediate"],
                  ["Figma", "Beginner"],
                ].map((x) => (
                  <div className="selection-row" key={x[0]}>
                    <strong>{x[0]}</strong>
                    <Badge tone="purple">{x[1]}</Badge>
                  </div>
                ))}
                <Button variant="ghost" icon="plus">
                  Add a skill
                </Button>
              </div>
            </div>
          </div>
        )}
        {step === 6 && (
          <div className="step">
            <div className="eyebrow">Find the overlap</div>
            <h1>When are you usually available?</h1>
            <p>
              A rough schedule is enough. Exact session times are agreed
              together.
            </p>
            <AvailabilityEditor />
            <h3>How do you prefer to meet?</h3>
            <div className="chips-wrap">
              <Chip active>Both</Chip>
              <Chip>Online</Chip>
              <Chip>Offline</Chip>
            </div>
          </div>
        )}
        {step === 7 && (
          <div className="step">
            <div className="eyebrow">Make En yours</div>
            <h1>What are you here for?</h1>
            <p>Choose all that sound like you right now.</p>
            <div className="chips-wrap">
              {purposeOptions.map((x, i) => (
                <Chip key={x} active={i < 5}>
                  {x}
                </Chip>
              ))}
            </div>
          </div>
        )}
        {step === 8 && (
          <div className="step">
            <div className="eyebrow">One last thing</div>
            <h1>How do you like to learn and connect?</h1>
            <p>
              There are no personality labels here — just preferences you
              control.
            </p>
            <div className="chips-wrap">
              {preferenceOptions.map((x, i) => (
                <Chip key={x} active={[0, 1, 3, 5, 6, 10].includes(i)}>
                  {x}
                </Chip>
              ))}
            </div>
            <div className="ready-note">
              <Icon name="spark" />
              <div>
                <strong>Your En profile is ready</strong>
                <p>
                  We’ve found 24 people and 7 cohorts that could be a great fit.
                </p>
              </div>
            </div>
          </div>
        )}
        <footer className="step-actions">
          <Button
            variant="ghost"
            onClick={() => (step === 1 ? go("login") : setStep(step - 1))}
          >
            Back
          </Button>
          <div>
            {step > 2 && step < 8 && (
              <Button variant="ghost" onClick={next}>
                Skip
              </Button>
            )}
            <Button onClick={next} icon={step === 8 ? "spark" : "arrow"}>
              {step === 8 ? "Enter En" : "Continue"}
            </Button>
          </div>
        </footer>
      </section>
    </main>
  )
}

function AvailabilityEditor() {
  const [days, setDays] = useState(["Saturday", "Sunday"])
  return (
    <div className="availability">
      {["Mon", "Tue", "Wed", "Thu", "Fri", "Saturday", "Sunday"].map((d) => (
        <button
          type="button"
          className={days.includes(d) ? "selected" : ""}
          onClick={() =>
            setDays((x) =>
              x.includes(d) ? x.filter((v) => v !== d) : [...x, d],
            )
          }
          key={d}
        >
          <span>{d.slice(0, 3)}</span>
          <small>{days.includes(d) ? "7–9 PM" : "Add time"}</small>
        </button>
      ))}
    </div>
  )
}

const nav = [
  ["home", "Home", "home"],
  ["discover", "Discover", "discover"],
  ["participation", "Participation", "users"],
  ["ping", "Ping", "message"],
  ["events", "Events", "calendar"],
] as [Screen, string, IconName][]

function Shell({
  screen,
  go,
  theme,
  setTheme,
  children,
}: {
  screen: Screen
  go: (s: Screen) => void
  theme: string
  setTheme: (x: string) => void
  children: ReactNode
}) {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <Logo />
        <nav>
          {nav.map(([s, label, icon]) => (
            <button
              key={s}
              className={screen === s ? "active" : ""}
              onClick={() => go(s)}
            >
              <Icon name={icon} />
              <span>{label}</span>
              {label === "Ping" && <i>2</i>}
            </button>
          ))}
        </nav>
        <div className="sidebar-bottom">
          <button
            className={screen === "profile" ? "active" : ""}
            onClick={() => go("profile")}
          >
            <Icon name="user" />
            <span>Profile</span>
          </button>
          <button
            className={screen === "settings" ? "active" : ""}
            onClick={() => go("settings")}
          >
            <Icon name="settings" />
            <span>Settings</span>
          </button>
          <div className="user-mini">
            <Avatar name="Aarav Patel" />
            <div>
              <strong>Aarav Patel</strong>
              <small>College student</small>
            </div>
          </div>
        </div>
      </aside>
      <div className="app-main">
        <header className="topbar">
          <div className="top-search">
            <Icon name="search" />
            <input placeholder="Search people, skills, cohorts, events…" />
          </div>
          <div className="top-actions">
            <button
              aria-label="Change theme"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Icon name="sun" />
            </button>
            <button
              aria-label="Notifications"
              className="has-dot"
              onClick={() => go("notifications")}
            >
              <Icon name="bell" />
            </button>
            <button className="avatar-button" onClick={() => go("profile")}>
              <Avatar name="Aarav Patel" size="sm" />
            </button>
          </div>
        </header>
        <main className="content">{children}</main>
      </div>
      <nav className="mobile-nav">
        {[
          nav[0],
          nav[1],
          nav[3],
          nav[4],
          ["profile", "Profile", "user"] as [Screen, string, IconName],
        ].map(([s, l, i]) => (
          <button
            key={s}
            className={screen === s ? "active" : ""}
            onClick={() => go(s)}
          >
            <Icon name={i} />
            <span>{l}</span>
          </button>
        ))}
      </nav>
    </div>
  )
}

function PageTitle({
  eyebrow,
  title,
  text,
  action,
}: {
  eyebrow?: string
  title: string
  text?: string
  action?: ReactNode
}) {
  return (
    <div className="page-title">
      <div>
        {eyebrow && <div className="eyebrow">{eyebrow}</div>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
      {action}
    </div>
  )
}

function Home({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="page">
      <PageTitle
        title="Good afternoon, Aarav"
        text="Here are some opportunities for you today."
      />
      <section className="hero-card">
        <div>
          <Badge tone="purple">Your next learning partner</Badge>
          <h2>Grow faster, together.</h2>
          <p>
            We found 6 people who can teach what you want to learn — and learn
            from what you know.
          </p>
          <Button onClick={() => go("discover")} icon="discover">
            Explore your matches
          </Button>
        </div>
        <div className="match-orbit">
          <Avatar name="Aarav Patel" size="lg" />
          <span className="orbit-line" />
          <Avatar name="Riya Sharma" src={riyaImage} size="xl" />
          <div>
            <strong>88%</strong>
            <small>compatible</small>
          </div>
        </div>
      </section>
      <div className="stats-grid">
        {[
          ["12", "Learning sessions", "book"],
          ["5", "Active cohorts", "users"],
          ["7", "Events joined", "calendar"],
          ["4", "Skills shared", "spark"],
        ].map((x) => (
          <div className="stat-card" key={x[1]}>
            <span>
              <Icon name={x[2] as IconName} />
            </span>
            <div>
              <strong>{x[0]}</strong>
              <small>{x[1]}</small>
            </div>
          </div>
        ))}
      </div>
      <SectionHeader
        title="Recommended people"
        link="See all"
        onClick={() => go("discover")}
      />
      <div className="people-grid">
        {people.slice(0, 3).map((p) => (
          <PersonCard
            key={p.name}
            person={p}
            onClick={() =>
              go(p.name.startsWith("Riya") ? "profile-riya" : "discover")
            }
          />
        ))}
      </div>
      <div className="two-col">
        <section>
          <SectionHeader
            title="My cohorts"
            link="View participation"
            onClick={() => go("participation")}
          />
          <CohortCard cohort={cohorts[0]} onClick={() => go("cohort")} />
          <CohortCard cohort={cohorts[1]} onClick={() => go("participation")} />
        </section>
        <section>
          <SectionHeader
            title="Upcoming events"
            link="Explore events"
            onClick={() => go("events")}
          />
          {events.slice(0, 2).map((e) => (
            <EventRow key={e.title} event={e} onClick={() => go("event")} />
          ))}
        </section>
      </div>
      <section className="explore-banner">
        <div className="icon-box">
          <Icon name="spark" />
        </div>
        <div>
          <strong>Explore something new</strong>
          <p>Photography could complement your interest in visual design.</p>
        </div>
        <Button variant="secondary" onClick={() => go("events")}>
          See photo walks
        </Button>
      </section>
    </div>
  )
}

function SectionHeader({
  title,
  link,
  onClick,
}: {
  title: string
  link: string
  onClick: () => void
}) {
  return (
    <div className="section-header">
      <h2>{title}</h2>
      <button className="text-link" onClick={onClick}>
        {link} <Icon name="arrow" size={15} />
      </button>
    </div>
  )
}

function PersonCard({
  person,
  onClick,
}: {
  person: typeof people[number]
  onClick: () => void
}) {
  return (
    <article className="person-card" onClick={onClick} tabIndex={0}>
      <div className="person-top">
        <Avatar name={person.name} src={person.image} size="lg" />
        <Badge tone="green">{person.match}% match</Badge>
      </div>
      <h3>{person.name}</h3>
      <p>
        {person.role} · {person.city}
      </p>
      <div className="skill-line">
        <span>Can teach</span>
        <div>
          {person.teach.map((s) => (
            <Badge key={s}>{s}</Badge>
          ))}
        </div>
      </div>
      <div className="skill-line">
        <span>Wants to learn</span>
        <div>
          <Badge tone="purple">{person.wants}</Badge>
        </div>
      </div>
      <div className="card-foot">
        <span>
          <Icon name="clock" size={16} /> Sat · 7–9 PM
        </span>
        <Button variant="soft" onClick={onClick}>
          View match
        </Button>
      </div>
    </article>
  )
}

function CohortCard({
  cohort,
  onClick,
}: {
  cohort: typeof cohorts[number]
  onClick: () => void
}) {
  return (
    <article className="cohort-row" onClick={onClick}>
      <span className={`cohort-icon ${cohort.tone}`}>
        <Icon name="users" />
      </span>
      <div className="grow">
        <h3>{cohort.title}</h3>
        <p>
          {cohort.members} members · {cohort.mode}
        </p>
        <div className="mini-progress">
          <span style={{ width: `${cohort.progress}%` }} />
        </div>
      </div>
      <div className="row-meta">
        <small>Next session</small>
        <strong>{cohort.next}</strong>
      </div>
      <Icon name="chevron" />
    </article>
  )
}

function EventRow({
  event,
  onClick,
}: {
  event: typeof events[number]
  onClick: () => void
}) {
  return (
    <article className="event-row" onClick={onClick}>
      <div className="date-tile">
        <strong>{event.date}</strong>
        <small>{event.month}</small>
      </div>
      <div className="grow">
        <Badge tone="neutral">{event.category}</Badge>
        <h3>{event.title}</h3>
        <p>
          {event.time} · {event.mode}
        </p>
      </div>
      <Icon name="chevron" />
    </article>
  )
}

function Discover({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState("People")
  const [filters, setFilters] = useState(false)
  return (
    <div className="page">
      <PageTitle
        eyebrow="Discover"
        title="Find your people"
        text="Recommendations based on what you can share, what you want to learn and when you’re free."
      />
      <div className="tabbar">
        {["People", "Skills", "Cohorts", "Events"].map((x) => (
          <button
            className={tab === x ? "active" : ""}
            onClick={() => setTab(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="discover-tools">
        <div className="search-large">
          <Icon name="search" />
          <input placeholder={`Search ${tab.toLowerCase()}…`} />
        </div>
        <Button
          variant="secondary"
          icon="filter"
          onClick={() => setFilters(!filters)}
        >
          Filters
        </Button>
      </div>
      {filters && (
        <div className="filter-panel">
          {[
            "Skill: React",
            "Purpose: Skill exchange",
            "City: Bengaluru",
            "Both online & offline",
            "Saturday evening",
          ].map((x) => (
            <Chip key={x} active>
              {x}
            </Chip>
          ))}
          <Button
            variant="ghost"
            icon="close"
            onClick={() => setFilters(false)}
          >
            Clear
          </Button>
        </div>
      )}
      {tab === "People" && (
        <>
          <div className="result-head">
            <p>
              <strong>24 people</strong> match what you’re looking for
            </p>
            <span>Best match first</span>
          </div>
          <div className="people-grid wide">
            {people.map((p) => (
              <PersonCard
                key={p.name}
                person={p}
                onClick={() =>
                  go(
                    p.name.startsWith("Riya") ? "profile-riya" : "profile-riya",
                  )
                }
              />
            ))}
          </div>
        </>
      )}
      {tab === "Skills" && (
        <div className="feature-grid">
          <article className="feature-card">
            <Icon name="spark" />
            <Badge tone="purple">Two-way opportunity</Badge>
            <h2>JavaScript ↔ React</h2>
            <p>Riya can teach React, and wants to learn JavaScript from you.</p>
            <Button onClick={() => go("exchange")}>View skill exchange</Button>
          </article>
          <article className="feature-card">
            <Icon name="message" />
            <Badge tone="blue">Language exchange</Badge>
            <h2>Hindi ↔ Korean</h2>
            <p>
              You and Meera can help each other practice through weekly
              conversations.
            </p>
            <Button onClick={() => go("language")}>
              View language exchange
            </Button>
          </article>
        </div>
      )}
      {tab === "Cohorts" && (
        <div className="list-stack">
          {cohorts.map((c) => (
            <CohortCard key={c.title} cohort={c} onClick={() => go("cohort")} />
          ))}
        </div>
      )}
      {tab === "Events" && (
        <div className="event-grid">
          {events.slice(0, 4).map((e) => (
            <EventCard key={e.title} event={e} onClick={() => go("event")} />
          ))}
        </div>
      )}
    </div>
  )
}

function RiyaProfile({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="page">
      <button className="back-link" onClick={() => go("discover")}>
        <Icon name="arrow" /> Back to discover
      </button>
      <section className="profile-hero">
        <div className="profile-person">
          <Avatar name="Riya Sharma" src={riyaImage} size="xl" />
          <div>
            <div className="status-dot">Available this weekend</div>
            <h1>Riya Sharma</h1>
            <p>College Student · Computer Science, 3rd year</p>
            <span>
              <Icon name="location" size={16} /> Bengaluru
            </span>
          </div>
        </div>
        <div className="profile-actions">
          <Button variant="secondary" icon="message" onClick={() => go("ping")}>
            Message
          </Button>
          <Button onClick={() => go("match")} icon="spark">
            View 88% match
          </Button>
        </div>
      </section>
      <div className="profile-layout">
        <div className="profile-main">
          <section className="card">
            <h2>About Riya</h2>
            <p>
              I enjoy turning ideas into friendly, useful interfaces. I’m
              looking for a JavaScript learning partner and a small group to
              build practical projects with.
            </p>
            <h3>Interests</h3>
            <div className="chips-wrap">
              {[
                "Web Development",
                "UI/UX",
                "Hackathons",
                "Photography",
                "Music",
              ].map((x) => (
                <Badge key={x} tone="neutral">
                  {x}
                </Badge>
              ))}
            </div>
          </section>
          <section className="card">
            <div className="section-header">
              <h2>Skills exchange</h2>
              <Badge tone="green">Great fit</Badge>
            </div>
            <div className="dual-box flat">
              <div>
                <h3>Can offer</h3>
                <div className="skill-meter">
                  <span>React</span>
                  <strong>Advanced</strong>
                </div>
                <div className="skill-meter">
                  <span>UI/UX</span>
                  <strong>Intermediate</strong>
                </div>
                <div className="skill-meter">
                  <span>Figma</span>
                  <strong>Intermediate</strong>
                </div>
              </div>
              <div>
                <h3>Wants to learn</h3>
                <div className="skill-meter purple">
                  <span>JavaScript</span>
                  <strong>Intermediate</strong>
                </div>
                <div className="skill-meter purple">
                  <span>Public Speaking</span>
                  <strong>Beginner</strong>
                </div>
              </div>
            </div>
            <Button onClick={() => go("exchange")} icon="spark">
              Explore skill exchange
            </Button>
          </section>
          <section className="card">
            <h2>Feedback from learning partners</h2>
            <div className="reputation">
              {[
                ["Helpful", 94],
                ["Friendly", 98],
                ["Reliable", 89],
                ["Communication", 92],
                ["Collaboration", 96],
                ["Knowledge sharing", 90],
              ].map(([x, n]) => (
                <div key={x}>
                  <span>{x}</span>
                  <div>
                    <i style={{ width: `${n}%` }} />
                  </div>
                  <strong>{n}%</strong>
                </div>
              ))}
            </div>
          </section>
        </div>
        <aside className="profile-side">
          <section className="card">
            <h3>Availability</h3>
            <p className="meta-line">
              <Icon name="calendar" /> Saturday
            </p>
            <strong>7:00 PM – 9:00 PM</strong>
            <p className="meta-line">
              <Icon name="users" /> Prefers small groups
            </p>
            <p className="meta-line">
              <Icon name="location" /> Online or public venues
            </p>
          </section>
          <section className="card">
            <h3>Activity</h3>
            <div className="mini-stats">
              {[
                ["8", "Sessions"],
                ["3", "Cohorts"],
                ["5", "Events"],
                ["4", "Skills shared"],
              ].map((x) => (
                <div key={x[1]}>
                  <strong>{x[0]}</strong>
                  <span>{x[1]}</span>
                </div>
              ))}
            </div>
          </section>
          <section className="card">
            <h3>Languages</h3>
            <div className="selection-row">
              <span>English</span>
              <Badge tone="green">Fluent</Badge>
            </div>
            <div className="selection-row">
              <span>Hindi</span>
              <Badge>Advanced</Badge>
            </div>
          </section>
        </aside>
      </div>
    </div>
  )
}

function Match({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="page match-page">
      <button className="back-link" onClick={() => go("profile-riya")}>
        <Icon name="arrow" /> Riya’s profile
      </button>
      <div className="match-heading">
        <div className="match-score">
          <strong>88%</strong>
          <span>Compatible</span>
        </div>
        <div>
          <Badge tone="purple">Potential skill exchange</Badge>
          <h1>You and Riya have a strong reason to connect.</h1>
          <p>
            This isn’t just a shared interest. Your goals, skills and schedules
            genuinely complement each other.
          </p>
        </div>
      </div>
      <section className="exchange-strip">
        <div>
          <Avatar name="Aarav Patel" size="lg" />
          <span>
            <small>You can teach</small>
            <strong>JavaScript</strong>
          </span>
        </div>
        <div className="exchange-arrows">⇄</div>
        <div>
          <Avatar name="Riya Sharma" src={riyaImage} size="lg" />
          <span>
            <small>Riya can teach</small>
            <strong>React</strong>
          </span>
        </div>
      </section>
      <div className="match-grid">
        <section className="card">
          <h2>Why you match</h2>
          <div className="reason-list">
            {[
              "You want to learn React",
              "Riya can teach React",
              "You can teach JavaScript",
              "You both like project-based learning",
              "Your Saturday availability overlaps",
              "You both prefer small groups",
            ].map((x) => (
              <div key={x}>
                <span>
                  <Icon name="check" size={16} />
                </span>
                {x}
              </div>
            ))}
          </div>
        </section>
        <section className="card">
          <h2>Compatibility breakdown</h2>
          {[
            ["Skills", 96],
            ["Goals", 92],
            ["Availability", 88],
            ["Interests", 82],
            ["Location", 78],
            ["Language", 90],
          ].map((x) => (
            <div className="breakdown" key={x[0]}>
              <span>{x[0]}</span>
              <div>
                <i style={{ width: `${x[1]}%` }} />
              </div>
              <strong>{x[1]}%</strong>
            </div>
          ))}
        </section>
      </div>
      <div className="match-cta">
        <div>
          <strong>Ready to learn together?</strong>
          <p>See exactly how a two-way exchange could work.</p>
        </div>
        <Button onClick={() => go("exchange")} icon="arrow">
          View skill exchange
        </Button>
      </div>
    </div>
  )
}

function Exchange({ go }: { go: (s: Screen) => void }) {
  const [sent, setSent] = useState(false)
  return (
    <div className="page">
      <button className="back-link" onClick={() => go("match")}>
        <Icon name="arrow" /> Match details
      </button>
      <PageTitle
        eyebrow="Skill exchange"
        title="A two-way learning opportunity"
        text="Share what you know. Learn what you need. Build something together."
      />
      <section className="exchange-visual">
        <div className="exchange-person you">
          <Avatar name="Aarav Patel" size="xl" />
          <Badge tone="neutral">You</Badge>
          <h2>Aarav</h2>
          <div>
            <span>Can teach</span>
            <strong>JavaScript</strong>
          </div>
          <div>
            <span>Wants to learn</span>
            <strong>React</strong>
          </div>
        </div>
        <div className="exchange-center">
          <span>
            <Icon name="arrow" />
          </span>
          <strong>Learn from each other</strong>
          <p>Your skills and goals form a natural exchange.</p>
          <span>
            <Icon name="arrow" />
          </span>
        </div>
        <div className="exchange-person">
          <Avatar name="Riya Sharma" src={riyaImage} size="xl" />
          <Badge tone="purple">88% match</Badge>
          <h2>Riya</h2>
          <div>
            <span>Can teach</span>
            <strong>React</strong>
          </div>
          <div>
            <span>Wants to learn</span>
            <strong>JavaScript</strong>
          </div>
        </div>
      </section>
      <section className="journey">
        <h3>Your learning journey</h3>
        {[
          "Connect",
          "Message",
          "Create a cohort",
          "Schedule",
          "Learn & share",
        ].map((x, i) => (
          <div key={x}>
            <span>{i + 1}</span>
            <strong>{x}</strong>
          </div>
        ))}
      </section>
      <div className="center-actions">
        {sent ? (
          <>
            <div className="success-message">
              <Icon name="check" />
              <div>
                <strong>Connection request sent</strong>
                <p>Riya will see why you’re a great learning match.</p>
              </div>
            </div>
            <Button onClick={() => go("ping")} icon="message">
              Open Ping
            </Button>
          </>
        ) : (
          <Button onClick={() => setSent(true)} icon="users">
            Connect with Riya
          </Button>
        )}
      </div>
    </div>
  )
}

function LanguageExchange({ go }: { go: (s: Screen) => void }) {
  return (
    <div className="page">
      <button className="back-link" onClick={() => go("discover")}>
        <Icon name="arrow" /> Discover
      </button>
      <PageTitle
        eyebrow="Language exchange"
        title="Practice with a real person"
        text="Conversation creates confidence — and both of you have something useful to share."
      />
      <section className="exchange-visual">
        <div className="exchange-person you">
          <Avatar name="Aarav Patel" size="xl" />
          <Badge tone="neutral">You</Badge>
          <h2>Aarav</h2>
          <div>
            <span>Know</span>
            <strong>Hindi · Advanced</strong>
          </div>
          <div>
            <span>Want</span>
            <strong>Korean · Beginner</strong>
          </div>
        </div>
        <div className="exchange-center">
          <span>
            <Icon name="message" />
          </span>
          <strong>Potential language exchange</strong>
          <p>Try 30 minutes in each language every week.</p>
        </div>
        <div className="exchange-person">
          <Avatar name="Meera Nair" size="xl" />
          <Badge tone="green">84% match</Badge>
          <h2>Meera</h2>
          <div>
            <span>Knows</span>
            <strong>Korean · Fluent</strong>
          </div>
          <div>
            <span>Wants</span>
            <strong>Hindi · Beginner</strong>
          </div>
        </div>
      </section>
      <div className="center-actions">
        <Button onClick={() => go("ping")} icon="users">
          Connect with Meera
        </Button>
      </div>
    </div>
  )
}

function Participation({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState("Online")
  const [created, setCreated] = useState(false)
  return (
    <div className="page">
      <PageTitle
        eyebrow="Participation"
        title="Learn better in a cohort"
        text="Small, focused groups built around a shared goal."
        action={
          <Button icon="plus" onClick={() => setCreated(true)}>
            Create cohort
          </Button>
        }
      />
      {created && (
        <div className="toast">
          <Icon name="check" />
          <span>
            <strong>Hackathon Sprint created</strong> Invite learning partners
            when you’re ready.
          </span>
          <button onClick={() => setCreated(false)}>
            <Icon name="close" />
          </button>
        </div>
      )}
      <div className="tabbar">
        {["Online", "Offline"].map((x) => (
          <button
            className={tab === x ? "active" : ""}
            onClick={() => setTab(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="cohort-grid">
        {cohorts
          .filter((c) =>
            tab === "Online" ? c.mode !== "Offline" : c.mode !== "Online",
          )
          .map((c) => (
            <article className="cohort-card" key={c.title}>
              <div className={`cohort-cover ${c.tone}`}>
                <Icon name="users" size={30} />
                <Badge tone="neutral">{c.mode}</Badge>
              </div>
              <h2>{c.title}</h2>
              <p>{c.members} members · Goal-based cohort</p>
              <div className="next-box">
                <small>Next session</small>
                <strong>{c.next}</strong>
              </div>
              <div className="completion">
                <span>
                  <strong>{Math.round(c.progress / 20)}/5</strong> sessions
                  completed
                </span>
                <div>
                  <i style={{ width: `${c.progress}%` }} />
                </div>
              </div>
              <div className="button-row">
                <Button variant="secondary">Leave cohort</Button>
                <Button onClick={() => go("cohort")}>Open cohort</Button>
              </div>
            </article>
          ))}
      </div>
    </div>
  )
}

function Cohort({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState("Overview")
  const [scheduled, setScheduled] = useState(false)
  const [votes, setVotes] = useState([5, 3, 2])
  const [reacted, setReacted] = useState(false)
  return (
    <div className="page cohort-page">
      <button className="back-link" onClick={() => go("participation")}>
        <Icon name="arrow" /> Participation
      </button>
      <section className="cohort-head">
        <div>
          <Badge tone="blue">Online cohort · 6 members</Badge>
          <h1>React Study Circle</h1>
          <p>
            Build one production-ready React project while mastering modern
            patterns together.
          </p>
        </div>
        <div className="avatar-stack">
          {["Riya", "Kabir", "Ananya", "Rahul"].map((x, i) => (
            <Avatar name={x} src={i === 0 ? riyaImage : undefined} key={x} />
          ))}
        </div>
      </section>
      <div className="tabbar scroll">
        {[
          "Overview",
          "Chat",
          "Members",
          "Schedule",
          "Achievements",
          "Resources",
        ].map((x) => (
          <button
            className={tab === x ? "active" : ""}
            onClick={() => setTab(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      {tab === "Overview" && (
        <div className="cohort-layout">
          <div>
            <section className="card">
              <h2>About this cohort</h2>
              <p>
                We meet weekly, work through practical React concepts, and
                review each other’s code in a supportive environment.
              </p>
              <div className="goal-box">
                <Icon name="spark" />
                <div>
                  <small>Shared goal</small>
                  <strong>Ship a collaborative project in five sessions</strong>
                </div>
              </div>
            </section>
            <section className="card">
              <h2>Journey progress</h2>
              <div className="session-track">
                {[1, 2, 3, 4, 5].map((x) => (
                  <div className={x <= 3 ? "done" : ""} key={x}>
                    <span>{x <= 3 ? <Icon name="check" size={15} /> : x}</span>
                    <small>Session {x}</small>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <aside>
            <section className="card next-session">
              <small>NEXT SESSION</small>
              <h2>Component patterns</h2>
              <p>
                <Icon name="calendar" /> Saturday, 7:00 PM
              </p>
              <p>
                <Icon name="clock" /> 90 minutes
              </p>
              <Button className="full" onClick={() => setTab("Schedule")}>
                View schedule
              </Button>
            </section>
          </aside>
        </div>
      )}
      {tab === "Chat" && <ChatPanel compact />}
      {tab === "Members" && (
        <div className="members-grid">
          {[
            "Aarav Patel",
            "Riya Sharma",
            "Kabir Mehta",
            "Ananya Iyer",
            "Rahul Verma",
            "Sneha Joshi",
          ].map((x, i) => (
            <article className="member-card" key={x}>
              <Avatar
                name={x}
                src={i === 1 ? riyaImage : undefined}
                size="lg"
              />
              <div>
                <h3>{x}</h3>
                <p>
                  {
                    ["JavaScript", "React", "Figma", "Python", "Java", "UI/UX"][
                      i
                    ]
                  }{" "}
                  · {i < 2 ? "Advanced" : "Intermediate"}
                </p>
              </div>
              <Button
                variant="soft"
                onClick={() => i === 1 && go("profile-riya")}
              >
                Profile
              </Button>
            </article>
          ))}
        </div>
      )}
      {tab === "Schedule" && (
        <div className="schedule-layout">
          <section className="card">
            <h2>Weekly availability</h2>
            <p>
              Select the times that work for you. We’ll find the strongest
              overlap.
            </p>
            <AvailabilityEditor />
            <div className="time-fields">
              <Field label="Start time" defaultValue="7:00 PM" />
              <Field label="End time" defaultValue="9:00 PM" />
            </div>
          </section>
          <section className="best-time">
            <Badge tone="green">Best common time</Badge>
            <Icon name="calendar" size={34} />
            <h2>Saturday</h2>
            <strong>7:00 PM – 9:00 PM</strong>
            <p>All 6 members are available</p>
            {scheduled ? (
              <div className="scheduled">
                <Icon name="check" /> Session scheduled
              </div>
            ) : (
              <Button className="full" onClick={() => setScheduled(true)}>
                Confirm session
              </Button>
            )}
          </section>
        </div>
      )}
      {tab === "Achievements" && (
        <div>
          <div className="achievement-head">
            <div>
              <h2>What we’ve achieved</h2>
              <p>Celebrate meaningful progress, big or small.</p>
            </div>
            <Button icon="plus" onClick={() => go("feedback")}>
              Share achievement
            </Button>
          </div>
          <div className="achievement-grid">
            <article className="achievement-card">
              <div className="achievement-art">
                <Icon name="spark" size={42} />
              </div>
              <Badge tone="purple">Project milestone</Badge>
              <h2>Our first working prototype</h2>
              <p>
                The team completed the component library and shipped our first
                interactive flow.
              </p>
              <div>
                <span>
                  <Avatar name="Riya Sharma" src={riyaImage} size="sm" /> Riya ·
                  2 days ago
                </span>
                <button
                  className={reacted ? "reacted" : ""}
                  onClick={() => setReacted(!reacted)}
                >
                  Celebrate · {reacted ? 13 : 12}
                </button>
              </div>
            </article>
            <article className="achievement-card">
              <div className="achievement-art amber">
                <Icon name="book" size={42} />
              </div>
              <Badge tone="amber">Learned a skill</Badge>
              <h2>Hooks finally make sense</h2>
              <p>
                Five members completed the state management exercise and
                explained it back.
              </p>
              <div>
                <span>
                  <Avatar name="Kabir" size="sm" /> Kabir · 5 days ago
                </span>
                <button>Celebrate · 8</button>
              </div>
            </article>
          </div>
        </div>
      )}
      {tab === "Resources" && (
        <div className="list-stack">
          {[
            "React patterns handbook",
            "Team Figma board",
            "Project requirements",
            "Session 3 notes",
          ].map((x, i) => (
            <article className="resource-row" key={x}>
              <span>
                <Icon name={i === 1 ? "discover" : "book"} />
              </span>
              <div>
                <h3>{x}</h3>
                <p>Shared by {i % 2 ? "Riya" : "Aarav"} · Updated this week</p>
              </div>
              <Button variant="soft">Open</Button>
            </article>
          ))}
        </div>
      )}
      {tab === "Overview" && (
        <section className="card venue-card">
          <div className="section-header">
            <div>
              <h2>Choose an offline venue</h2>
              <p>
                Only public places are suggested. Residential locations stay
                private.
              </p>
            </div>
            <Button variant="secondary" icon="plus">
              Suggest venue
            </Button>
          </div>
          {["University Library", "Campus Cafe", "Coworking Space"].map(
            (x, i) => (
              <div className="venue-row" key={x}>
                <span>
                  <Icon name="location" />
                  <strong>{x}</strong>
                  {i === 0 && <Badge tone="green">Current winner</Badge>}
                </span>
                <div>
                  <small>{votes[i]} votes</small>
                  <Button
                    variant="soft"
                    onClick={() =>
                      setVotes((v) => v.map((n, j) => (j === i ? n + 1 : n)))
                    }
                  >
                    Vote
                  </Button>
                </div>
              </div>
            ),
          )}
        </section>
      )}
    </div>
  )
}

function ChatPanel({ compact = false }: { compact?: boolean }) {
  const [messages, setMessages] = useState([
    "Hey! I saw that you’re learning React.",
    "Yes! I can help you with React.",
    "Perfect. I can help you with JavaScript.",
    "Should we create a study cohort?",
  ])
  const [draft, setDraft] = useState("")
  const send = () => {
    if (draft.trim()) {
      setMessages([...messages, draft])
      setDraft("")
    }
  }
  return (
    <div className={`chat-panel ${compact ? "compact" : ""}`}>
      <div className="chat-messages">
        {messages.map((m, i) => (
          <div className={`message ${i % 2 ? "mine" : ""}`} key={`${m}-${i}`}>
            <Avatar
              name={i % 2 ? "Aarav" : "Riya"}
              src={i % 2 ? undefined : riyaImage}
              size="sm"
            />
            <div>
              <p>{m}</p>
              <small>{i < 3 ? "Yesterday" : "10:24 AM"}</small>
            </div>
          </div>
        ))}
      </div>
      <div className="message-compose">
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && send()}
          placeholder="Type a message…"
        />
        <Button icon="send" onClick={send}>
          Send
        </Button>
      </div>
    </div>
  )
}

function Ping({ go }: { go: (s: Screen) => void }) {
  const [active, setActive] = useState("Riya Sharma")
  return (
    <div className="page ping-page">
      <PageTitle
        eyebrow="Ping"
        title="Messages"
        action={<Button icon="plus">New message</Button>}
      />
      <div className="messenger">
        <aside>
          <div className="conversation-search">
            <Icon name="search" />
            <input placeholder="Search conversations" />
          </div>
          <div className="request-row">
            <Icon name="users" />
            <strong>Message requests</strong>
            <Badge tone="purple">2</Badge>
          </div>
          {["Riya Sharma", "Kabir Mehta", "Ananya Iyer", "Sneha Joshi"].map(
            (x, i) => (
              <button
                className={active === x ? "active" : ""}
                onClick={() => setActive(x)}
                key={x}
              >
                <Avatar name={x} src={i === 0 ? riyaImage : undefined} />
                <div>
                  <strong>{x}</strong>
                  <p>
                    {
                      [
                        "Should we create a study cohort?",
                        "I shared the Figma link",
                        "See you at the event!",
                        "That time works for me",
                      ][i]
                    }
                  </p>
                </div>
                <small>{i === 0 ? "10:24" : "Tue"}</small>
              </button>
            ),
          )}
          <Button
            variant="soft"
            className="full"
            onClick={() => go("discover")}
            icon="discover"
          >
            Find people
          </Button>
        </aside>
        <section>
          <header>
            <div>
              <Avatar
                name={active}
                src={active === "Riya Sharma" ? riyaImage : undefined}
              />
              <span>
                <strong>{active}</strong>
                <small>
                  <i /> Active now · 88% match
                </small>
              </span>
            </div>
            <Button variant="soft" onClick={() => go("profile-riya")}>
              View profile
            </Button>
          </header>
          <ChatPanel />
          <div className="cohort-prompt">
            <Icon name="users" />
            <div>
              <strong>Ready to learn together?</strong>
              <p>
                Create a focused space for your sessions, schedule and
                resources.
              </p>
            </div>
            <Button onClick={() => go("cohort")}>
              Open React Study Circle
            </Button>
          </div>
        </section>
      </div>
    </div>
  )
}

function Events({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState("For You")
  return (
    <div className="page">
      <PageTitle
        eyebrow="Events"
        title="Step into something new"
        text="Workshops, meetups and experiences picked around your interests."
      />
      <div className="tabbar">
        {["For You", "Nearby", "Online", "All Events"].map((x) => (
          <button
            className={tab === x ? "active" : ""}
            onClick={() => setTab(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      <section className="picked">
        <div
          className="picked-image"
          style={{ backgroundImage: `url(${groupImage})` }}
        />
        <div>
          <Badge tone="purple">Picked for you</Badge>
          <h2>Build for Bengaluru Hackathon</h2>
          <p>
            Join a 24-hour build sprint for student teams solving real community
            problems.
          </p>
          <div className="why-picked">
            <Icon name="spark" />
            <span>
              You might like this because you selected{" "}
              <strong>Hackathons</strong> and <strong>Web Development</strong>.
            </span>
          </div>
          <Button onClick={() => go("event")}>View event</Button>
        </div>
      </section>
      <SectionHeader
        title="More for you"
        link="View all"
        onClick={() => setTab("All Events")}
      />
      <div className="event-grid">
        {events.slice(1, 5).map((e) => (
          <EventCard key={e.title} event={e} onClick={() => go("event")} />
        ))}
      </div>
      <section>
        <SectionHeader
          title="Explore something new"
          link="Refresh"
          onClick={() => {}}
        />
        <div className="event-grid">
          {events.slice(4).map((e) => (
            <EventCard key={e.title} event={e} onClick={() => go("event")} />
          ))}
        </div>
      </section>
    </div>
  )
}

function EventCard({
  event,
  onClick,
}: {
  event: typeof events[number]
  onClick: () => void
}) {
  return (
    <article className="event-card" onClick={onClick}>
      <div className="event-card-top">
        <div className="date-tile">
          <strong>{event.date}</strong>
          <small>{event.month}</small>
        </div>
        <Badge tone={event.mode === "Online" ? "blue" : "green"}>
          {event.mode}
        </Badge>
      </div>
      <Badge tone="neutral">{event.category}</Badge>
      <h2>{event.title}</h2>
      <p>
        <Icon name="clock" size={16} />
        {event.time}
      </p>
      <p>
        <Icon name="users" size={16} />
        {event.organizer}
      </p>
      <div className="event-reason">
        <Icon name="spark" size={17} />
        {event.reason}
      </div>
      <Button variant="soft" className="full" onClick={onClick}>
        View event
      </Button>
    </article>
  )
}

function EventDetails({ go }: { go: (s: Screen) => void }) {
  const [registered, setRegistered] = useState(false)
  return (
    <div className="page">
      <button className="back-link" onClick={() => go("events")}>
        <Icon name="arrow" /> All events
      </button>
      <section
        className="event-detail-hero"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(16,22,44,.94), rgba(16,22,44,.55)),url(${groupImage})`,
        }}
      >
        <Badge tone="purple">Hackathon · Picked for you</Badge>
        <h1>Build for Bengaluru Hackathon</h1>
        <p>
          A 24-hour student build sprint focused on making city life more
          connected, inclusive and sustainable.
        </p>
      </section>
      <div className="event-detail-layout">
        <div>
          <section className="card">
            <h2>About the event</h2>
            <p>
              Bring your skills, meet new collaborators and build a working
              prototype around a real community challenge. Beginners are welcome
              — mentors will support every team.
            </p>
            <h3>What to expect</h3>
            <div className="reason-list">
              {[
                "Team formation and idea pitching",
                "Design and engineering mentor hours",
                "Meals, workspace and Wi-Fi included",
                "Final demos and community awards",
              ].map((x) => (
                <div key={x}>
                  <span>
                    <Icon name="check" size={16} />
                  </span>
                  {x}
                </div>
              ))}
            </div>
          </section>
          <section className="card">
            <h2>Who’s going</h2>
            <div className="attendees">
              <div className="avatar-stack">
                {["Riya", "Kabir", "Ananya", "Meera", "Rahul"].map((x, i) => (
                  <Avatar
                    name={x}
                    src={i === 0 ? riyaImage : undefined}
                    key={x}
                  />
                ))}
              </div>
              <p>
                <strong>86 people registered</strong>
                <br />
                Including 5 people in your network
              </p>
            </div>
          </section>
        </div>
        <aside className="event-info card">
          <div>
            <Icon name="calendar" />
            <span>
              <small>Date</small>
              <strong>Saturday, 24 August</strong>
            </span>
          </div>
          <div>
            <Icon name="clock" />
            <span>
              <small>Time</small>
              <strong>9:00 AM – Sunday, 10:00 AM</strong>
            </span>
          </div>
          <div>
            <Icon name="location" />
            <span>
              <small>Venue</small>
              <strong>Bangalore International Centre</strong>
            </span>
          </div>
          <div>
            <Icon name="users" />
            <span>
              <small>Organizer</small>
              <strong>CodeBLR Community</strong>
            </span>
          </div>
          {registered ? (
            <div className="registered">
              <Icon name="check" />
              <strong>Registered</strong>
              <span>We’ve added this to your En schedule.</span>
            </div>
          ) : (
            <Button className="full" onClick={() => setRegistered(true)}>
              Register
            </Button>
          )}
          <Button variant="secondary" className="full" icon="calendar">
            Add to calendar
          </Button>
        </aside>
      </div>
    </div>
  )
}

function Profile({ go }: { go: (s: Screen) => void }) {
  const [tab, setTab] = useState("Overview")
  return (
    <div className="page">
      <section className="own-profile">
        <div>
          <Avatar name="Aarav Patel" size="xl" />
          <span>
            <h1>Aarav Patel</h1>
            <p>Computer Science student · Bengaluru</p>
            <Badge tone="green">Open to learning</Badge>
          </span>
        </div>
        <Button variant="secondary" onClick={() => go("settings")}>
          Edit profile
        </Button>
      </section>
      <div className="tabbar">
        {["Overview", "Activity", "Skills", "Feedback"].map((x) => (
          <button
            className={tab === x ? "active" : ""}
            onClick={() => setTab(x)}
            key={x}
          >
            {x}
          </button>
        ))}
      </div>
      {tab === "Overview" && (
        <div className="profile-layout">
          <div className="profile-main">
            <section className="card">
              <h2>About</h2>
              <p>
                CS student who loves building useful products and learning
                through practical projects. Happy to help with JavaScript and
                looking to grow in React and product design.
              </p>
            </section>
            <section className="card">
              <h2>Interests & goals</h2>
              <div className="chips-wrap">
                {[
                  "Programming",
                  "Web Development",
                  "UI/UX",
                  "Hackathons",
                  "AI/ML",
                ].map((x) => (
                  <Badge tone="neutral" key={x}>
                    {x}
                  </Badge>
                ))}
              </div>
              <h3>Right now I’m here for</h3>
              <div className="chips-wrap">
                {["Skill sharing", "Projects", "Networking", "Events"].map(
                  (x) => (
                    <Badge key={x}>{x}</Badge>
                  ),
                )}
              </div>
            </section>
          </div>
          <aside className="profile-side">
            <section className="card">
              <h3>Preferences</h3>
              {[
                "Small groups",
                "Structured sessions",
                "Online or offline",
                "Active evenings",
              ].map((x) => (
                <p className="meta-line" key={x}>
                  <Icon name="check" />
                  {x}
                </p>
              ))}
            </section>
            <section className="card">
              <h3>Languages</h3>
              <div className="selection-row">
                <span>Hindi</span>
                <Badge tone="green">Advanced</Badge>
              </div>
              <div className="selection-row">
                <span>English</span>
                <Badge tone="green">Fluent</Badge>
              </div>
              <div className="selection-row">
                <span>Korean</span>
                <Badge tone="purple">Learning</Badge>
              </div>
            </section>
          </aside>
        </div>
      )}
      {tab === "Skills" && (
        <div className="skill-profile-grid">
          {[
            ["JavaScript", "Advanced", 86],
            ["React", "Intermediate", 60],
            ["Python", "Beginner", 35],
            ["Public Speaking", "Intermediate", 55],
          ].map((x) => (
            <article className="card" key={x[0]}>
              <div className="section-header">
                <h2>{x[0]}</h2>
                <Badge>{x[1]}</Badge>
              </div>
              <div className="large-progress">
                <span style={{ width: `${x[2]}%` }} />
              </div>
              <p>
                {Number(x[2]) > 70
                  ? "Available to share"
                  : "Currently learning"}
              </p>
            </article>
          ))}
        </div>
      )}
      {tab === "Activity" && (
        <div className="activity-grid">
          {[
            ["Learning sessions", 12, 70],
            ["New connections", 18, 82],
            ["Events attended", 7, 48],
            ["Collaborations", 5, 62],
          ].map((x) => (
            <article className="card" key={x[0]}>
              <small>{x[0]}</small>
              <strong className="big-number">{x[1]}</strong>
              <div className="large-progress">
                <span style={{ width: `${x[2]}%` }} />
              </div>
              <p>Last 90 days</p>
            </article>
          ))}
        </div>
      )}
      {tab === "Feedback" && (
        <section className="card">
          <div className="feedback-summary">
            <div>
              <strong>4.8</strong>
              <span>from 11 learning partners</span>
            </div>
            <Button onClick={() => go("feedback")}>Give feedback</Button>
          </div>
          <div className="reputation">
            {[
              ["Helpful", 94],
              ["Friendly", 96],
              ["Reliable", 89],
              ["Communication", 92],
              ["Collaboration", 90],
              ["Knowledge sharing", 93],
            ].map(([x, n]) => (
              <div key={x}>
                <span>{x}</span>
                <div>
                  <i style={{ width: `${n}%` }} />
                </div>
                <strong>{n}%</strong>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

function Feedback({ go }: { go: (s: Screen) => void }) {
  const [ratings, setRatings] = useState<Record<string, number>>({})
  const [done, setDone] = useState(false)
  if (done)
    return (
      <div className="page feedback-done">
        <div>
          <span>
            <Icon name="check" size={34} />
          </span>
          <h1>Thank you for helping build a better learning community.</h1>
          <p>
            Your feedback was added to Riya’s reputation. It helps future
            learning partners connect with confidence.
          </p>
          <Button onClick={() => go("profile-riya")}>
            View updated reputation
          </Button>
        </div>
      </div>
    )
  return (
    <div className="page narrow">
      <button className="back-link" onClick={() => go("cohort")}>
        <Icon name="arrow" /> Cohort
      </button>
      <div className="feedback-person">
        <Avatar name="Riya Sharma" src={riyaImage} size="xl" />
        <Badge tone="green">Session completed</Badge>
        <h1>How was your experience with Riya?</h1>
        <p>
          Feedback appears only after meaningful interactions and is shown as a
          respectful summary.
        </p>
      </div>
      <section className="card ratings">
        <h2>Rate your experience</h2>
        {[
          "Helpful",
          "Friendly",
          "Reliable",
          "Communication",
          "Collaboration",
          "Knowledge Sharing",
        ].map((x) => (
          <div className="rating-row" key={x}>
            <strong>{x}</strong>
            <div>
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  className={(ratings[x] || 0) >= n ? "active" : ""}
                  onClick={() => setRatings({ ...ratings, [x]: n })}
                  key={n}
                >
                  ★
                </button>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="card">
        <h2>Share a little more</h2>
        <label className="field">
          <span>Positive feedback</span>
          <textarea placeholder="What did Riya do especially well?" />
        </label>
        <label className="field">
          <span>
            Constructive suggestion <small>Optional</small>
          </span>
          <textarea placeholder="What could make the next session even better?" />
        </label>
      </section>
      <Button className="full" onClick={() => setDone(true)}>
        Submit feedback
      </Button>
    </div>
  )
}

function Notifications({ go }: { go: (s: Screen) => void }) {
  const [read, setRead] = useState<number[]>([2, 4])
  const items: [string, string, IconName, Screen][] = [
    [
      "Riya accepted your connection",
      "You can now start a conversation and plan your first session.",
      "users",
      "ping",
    ],
    [
      "New message from Riya",
      "“Should we create a study cohort?”",
      "message",
      "ping",
    ],
    [
      "React Study Circle session confirmed",
      "Saturday at 7:00 PM · Online",
      "calendar",
      "cohort",
    ],
    [
      "You’re registered for Build for Bengaluru",
      "We’ll remind you one day before the event.",
      "check",
      "event",
    ],
    [
      "Kabir shared an achievement",
      "The cohort completed its first working prototype.",
      "spark",
      "cohort",
    ],
    [
      "How was your session with Riya?",
      "Your feedback helps build a trusted learning community.",
      "book",
      "feedback",
    ],
  ]
  return (
    <div className="page narrow-wide">
      <PageTitle
        title="Notifications"
        text="Updates that help move your learning forward."
        action={
          <button
            className="text-link"
            onClick={() => setRead(items.map((_, i) => i))}
          >
            Mark all as read
          </button>
        }
      />
      <div className="notification-list">
        {items.map((x, i) => (
          <button
            key={x[0]}
            className={!read.includes(i) ? "unread" : ""}
            onClick={() => {
              setRead([...read, i])
              go(x[3])
            }}
          >
            <span className="notification-icon">
              <Icon name={x[2]} />
            </span>
            <div>
              <strong>{x[0]}</strong>
              <p>{x[1]}</p>
              <small>{i < 2 ? "10 minutes ago" : `${i} days ago`}</small>
            </div>
            {!read.includes(i) && <i />}
          </button>
        ))}
      </div>
    </div>
  )
}

function Settings({
  theme,
  setTheme,
}: {
  theme: string
  setTheme: (x: string) => void
}) {
  const [section, setSection] = useState("Account")
  return (
    <div className="page">
      <PageTitle
        title="Settings"
        text="Control your account, privacy and En experience."
      />
      <div className="settings-layout">
        <aside>
          {["Account", "Privacy", "Notifications", "Appearance"].map((x) => (
            <button
              className={section === x ? "active" : ""}
              onClick={() => setSection(x)}
              key={x}
            >
              <Icon
                name={
                  x === "Account"
                    ? "user"
                    : x === "Privacy"
                      ? "users"
                      : x === "Notifications"
                        ? "bell"
                        : "sun"
                }
              />
              {x}
              <Icon name="chevron" />
            </button>
          ))}
        </aside>
        <section className="card settings-card">
          <h2>{section}</h2>
          {section === "Appearance" ? (
            <>
              <p>Choose how En looks across this device.</p>
              <div className="theme-options">
                {["light", "dark", "system"].map((x) => (
                  <button
                    className={theme === x ? "active" : ""}
                    onClick={() => setTheme(x)}
                    key={x}
                  >
                    <span className={`theme-preview ${x}`}>
                      <i />
                      <i />
                    </span>
                    <strong>{x[0].toUpperCase() + x.slice(1)}</strong>
                    {theme === x && <Icon name="check" />}
                  </button>
                ))}
              </div>
            </>
          ) : section === "Account" ? (
            <>
              <Field label="Name" defaultValue="Aarav Patel" />
              <Field label="Email" defaultValue="aarav@demo.en" />
              <Field label="City" defaultValue="Bengaluru" />
              <Button>Save changes</Button>
            </>
          ) : (
            <div className="toggle-list">
              {(section === "Privacy"
                ? [
                    "Show my city at area level",
                    "Show my availability",
                    "Allow cohort invitations",
                    "Show my activity summary",
                  ]
                : [
                    "Connection requests",
                    "New messages",
                    "Cohort updates",
                    "Event reminders",
                    "Feedback requests",
                  ]
              ).map((x, i) => (
                <label key={x}>
                  <span>
                    <strong>{x}</strong>
                    <small>
                      {i % 2
                        ? "Recommended for active collaborations"
                        : "You can change this anytime"}
                    </small>
                  </span>
                  <input type="checkbox" defaultChecked={i !== 3} />
                  <i />
                </label>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  )
}

export default function App() {
  const [screen, setScreen] = useState<Screen>("login")
  const [theme, setTheme] = useState(
    localStorage.getItem("en-theme") || "light",
  )
  useEffect(() => {
    document.documentElement.dataset.theme =
      theme === "system"
        ? matchMedia("(prefers-color-scheme: dark)").matches
          ? "dark"
          : "light"
        : theme
    localStorage.setItem("en-theme", theme)
  }, [theme])
  const go = (s: Screen) => {
    setScreen(s)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  if (["login", "signup", "forgot", "reset"].includes(screen))
    return <Auth screen={screen} go={go} />
  if (screen === "onboarding") return <Onboarding go={go} />
  let page: ReactNode
  switch (screen) {
    case "home":
      page = <Home go={go} />
      break
    case "discover":
      page = <Discover go={go} />
      break
    case "profile-riya":
      page = <RiyaProfile go={go} />
      break
    case "match":
      page = <Match go={go} />
      break
    case "exchange":
      page = <Exchange go={go} />
      break
    case "language":
      page = <LanguageExchange go={go} />
      break
    case "participation":
      page = <Participation go={go} />
      break
    case "cohort":
      page = <Cohort go={go} />
      break
    case "ping":
      page = <Ping go={go} />
      break
    case "events":
      page = <Events go={go} />
      break
    case "event":
      page = <EventDetails go={go} />
      break
    case "profile":
      page = <Profile go={go} />
      break
    case "feedback":
      page = <Feedback go={go} />
      break
    case "notifications":
      page = <Notifications go={go} />
      break
    case "settings":
      page = <Settings theme={theme} setTheme={setTheme} />
      break
    default:
      page = <Home go={go} />
  }
  return (
    <Shell screen={screen} go={go} theme={theme} setTheme={setTheme}>
      {page}
    </Shell>
  )
}
