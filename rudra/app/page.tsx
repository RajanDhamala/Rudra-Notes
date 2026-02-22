"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Focus,
  Sun,
  Moon,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const regimens = [
  {
    title: "1st Year / Foundation",
    tag: "AM/PM",
    active: false,
    icon: BookOpen,
  },
  {
    title: "2nd Year / Core",
    tag: "AM/PM",
    active: true,
    icon: Focus,
  },
  {
    title: "3rd Year / Specialization",
    tag: "AM",
    active: false,
    icon: Sun,
  },
  {
    title: "4th Year / Advanced",
    tag: "PM",
    active: false,
    icon: Moon,
  },
  {
    title: "Exam Readiness",
    tag: "URGENT",
    active: false,
    icon: ShieldCheck,
  },
];

const timelineStages = [
  {
    time: "Find",
    icon: SearchIcon,
    color: "bg-secondary",
    title: "Discover Your Subject",
    actions: ["Filter by Semester", "Select Core Topic", "Locate Chapter"],
  },
  {
    time: "Curate",
    icon: BookOpenIcon,
    color: "bg-orange-50",
    title: "Review & Assemble",
    actions: ["Preview Documents", "Check Supplements", "Add to Study Pile"],
  },
  {
    time: "Ace",
    icon: TrophyIcon,
    color: "bg-indigo-50",
    title: "Master the Exams",
    actions: ["Offline Practice", "Review Protocols", "Achieve Top Marks"],
  },
];

function SearchIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function BookOpenIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
  );
}

function TrophyIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-background selection:bg-secondary/20 selection:text-foreground">
      {/* Hero Section */}
      <section className="relative px-6 lg:px-12 py-16 lg:py-24">
        <div className="container mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column (5 of 12) */}
            <div className="lg:col-span-5 flex flex-col items-start z-10">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-display font-medium leading-[1.05] tracking-tight mb-8 text-foreground"
              >
                Clarity in <br />
                <span className="italic font-light text-foreground/80">
                  every page.
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg lg:text-xl text-muted-foreground leading-relaxed mb-10 max-w-md font-sans font-light"
              >
                We formulate study protocols that align with academic rigor. Open
                access to curated BBA notes, slides, and references.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-6 w-full sm:w-auto"
              >
                <Link href="/notes" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full bg-foreground text-background font-sans uppercase tracking-[0.1em] text-xs h-12 px-8 rounded flex items-center gap-3 hover:bg-foreground/90 transition-all shadow-[0_4px_14px_0_rgba(28,25,23,0.39)] hover:shadow-[0_6px_20px_rgba(28,25,23,0.23)] hover:-translate-y-0.5"
                  >
                    View Protocols
                    <ArrowRight className="w-4 h-4 opacity-70" />
                  </Button>
                </Link>
                <Link href="/about" className="w-full sm:w-auto">
                  <Button
                    variant="ghost"
                    size="lg"
                    className="w-full text-foreground hover:bg-transparent hover:opacity-70 font-sans uppercase tracking-[0.1em] text-xs h-12 px-2 transition-all"
                  >
                    Our Philosophy
                  </Button>
                </Link>
              </motion.div>
            </div>

            {/* Right Column (7 of 12) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="lg:col-span-7 relative h-[600px] lg:h-[700px] w-full mt-12 lg:mt-0"
            >
              <div className="absolute inset-0 rounded-sm overflow-hidden border-[0.5px] border-foreground/10">
                {/* Fallback image if /hero.png doesn't load immediately */}
                <div className="absolute inset-0 bg-[#EBE5DE]" />
                <motion.img
                  initial={{ scale: 1.05 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 20, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
                  src="/hero.png"
                  alt="Curated Study Elements"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>
              {/* Sage Decorative Glow */}
              <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-secondary/30 rounded-full blur-[80px] pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Regimen Selector */}
      <section className="px-6 lg:px-12 py-20 bg-background border-t border-border/50">
        <div className="container mx-auto max-w-[1440px]">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {regimens.map((regimen, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative p-6 rounded-md border-[0.5px] transition-all cursor-pointer group flex flex-col h-40 ${regimen.active
                    ? "bg-foreground text-background border-foreground shadow-[0_8px_30px_rgb(28,25,23,0.12)]"
                    : "bg-card border-border hover:border-foreground/30 hover:shadow-[0_8px_30px_rgba(141,163,153,0.12)]"
                  }`}
              >
                <div className="flex justify-between items-start mb-auto">
                  <regimen.icon className={`w-5 h-5 ${regimen.active ? "text-background/80" : "text-muted-foreground"}`} />
                  <span className={`text-[10px] tracking-widest uppercase font-medium ${regimen.active ? "text-background/60" : "text-muted-foreground/60"}`}>
                    {regimen.tag}
                  </span>
                </div>
                <h3 className={`mt-auto text-sm font-sans uppercase tracking-widest ${regimen.active ? "text-background" : "text-foreground"}`}>
                  {regimen.title}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Protocol Deep Dive */}
      <section className="px-6 lg:px-12 py-32 bg-muted/20">
        <div className="container mx-auto max-w-[1200px]">
          <div className="text-center mb-20 flex flex-col items-center">
            <span className="text-sm font-display italic text-muted-foreground mb-4">
              01. The Focus Protocol
            </span>
            <h2 className="text-4xl lg:text-5xl font-display font-medium text-foreground tracking-tight">
              Essential Semesters.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-20">
            {/* Simulating "Products" */}
            {[1, 2, 3].map((item) => (
              <div key={item} className="flex flex-col group">
                <div className="aspect-[3/4] bg-muted relative mb-6 rounded flex items-center justify-center overflow-hidden border border-border/50 transition-all duration-500 group-hover:border-foreground/20 group-hover:shadow-[0_20px_40px_rgba(141,163,153,0.1)]">
                  <div className="absolute inset-x-8 bottom-8 top-12 border border-foreground/10 flex flex-col p-6 items-center text-center bg-background/50 backdrop-blur-sm group-hover:bg-background/80 transition-colors">
                    <span className="text-[10px] font-sans tracking-[0.2em] uppercase text-muted-foreground mb-auto">Notes Module</span>
                    <h4 className="text-2xl font-display text-foreground mt-4">Finance {item}</h4>
                    <p className="text-xs font-sans text-muted-foreground mt-2 uppercase tracking-wide">12 Chapters</p>
                    <div className="w-8 h-[1px] bg-foreground/20 mt-6 mb-4" />
                    <span className="text-[10px] font-sans tracking-widest uppercase font-bold text-foreground mb-2">Sem 0{item + 2}</span>
                  </div>
                </div>
                <div className="flex justify-between items-baseline">
                  <h3 className="font-sans uppercase tracking-[0.1em] text-sm font-medium">Finance {item} Notes</h3>
                  <span className="text-xs font-sans text-muted-foreground tracking-wider">PDF</span>
                </div>
              </div>
            ))}
          </div>

          {/* Supplement Facts */}
          <div className="bg-secondary/10 border-[0.5px] border-secondary/30 rounded-sm p-8 lg:p-12 mt-16 shadow-inner">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-display text-foreground mb-4">Formulated for absorption.</h3>
                <p className="text-muted-foreground font-sans font-light leading-relaxed">
                  Our notes undergo rigorous curation to ensure cognitive ease. We strip away decorative excess, presenting facts, formulas, and theories in a high-contrast, distraction-free clinical format. Designed to enhance neurogenesis and cortisol management during peak exam seasons.
                </p>
              </div>
              <div className="bg-background border-[0.5px] border-border p-8 rounded-sm font-mono text-sm max-w-md ml-auto w-full shadow-sm">
                <div className="border-b-[3px] border-foreground pb-2 mb-4">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Resource Facts</h4>
                </div>
                <div className="flex justify-between border-b border-border py-2">
                  <span>Serving Size</span>
                  <span className="font-bold">1 Chapter</span>
                </div>
                <div className="flex justify-between border-b border-border py-2">
                  <span>Servings Per Semester</span>
                  <span className="font-bold">45</span>
                </div>
                <div className="w-full h-[6px] bg-foreground my-2" />
                <div className="flex justify-between py-1">
                  <span>Clarity</span>
                  <span className="font-bold">100%</span>
                </div>
                <div className="flex justify-between py-1 border-border border-b">
                  <span>Fluff</span>
                  <span className="font-bold">0g</span>
                </div>
                <div className="flex justify-between py-1 border-border border-b">
                  <span className="pl-4 text-xs italic">Intentionally Excluded</span>
                </div>
                <div className="mt-4 pt-2 border-t border-border">
                  <p className="text-[10px] uppercase tracking-widest text-muted-foreground text-center">Not evaluated by the procrastination administration.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Protocol CTA Button */}
          <div className="flex justify-center mt-20">
            <Button
              className="bg-foreground text-background h-[60px] px-8 rounded flex items-center gap-4 hover:bg-foreground/90 transition-all font-sans tracking-wide uppercase shadow-lg group hover:-translate-y-1"
            >
              <span className="text-sm font-medium">Add Protocol to Library</span>
              <span className="w-[1px] h-6 bg-background/30" />
              <span className="text-sm font-light text-background/80 flex items-center gap-2">Free <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
            </Button>
          </div>
        </div>
      </section>

      {/* Usage Timeline */}
      <section className="py-24 px-6 lg:px-12 bg-background">
        <div className="container mx-auto max-w-[1000px]">
          <div className="text-center mb-24">
            <h2 className="text-4xl font-display font-medium text-foreground">
              Suggested Routine.
            </h2>
          </div>
          <div className="relative">
            {/* Desktop Horizontal Line */}
            <div className="hidden md:block absolute top-[28px] left-0 w-full h-[1px] bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8">
              {timelineStages.map((stage, i) => (
                <div key={i} className="flex flex-col items-center text-center relative z-10">
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center bg-background border border-border shadow-sm mb-8 ${stage.color} mix-blend-multiply`}>
                    <stage.icon className="w-6 h-6 text-foreground/70" />
                  </div>
                  <div className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-muted-foreground mb-4">
                    {stage.time}
                  </div>
                  <h3 className="text-2xl font-display text-foreground mb-6">
                    {stage.title}
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {stage.actions.map((act, j) => (
                      <li key={j} className="text-sm font-sans font-light text-muted-foreground flex items-center justify-center gap-2">
                        <span className="w-1 h-1 bg-foreground/30 rounded-full" /> {act}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality & Trust */}
      <section className="bg-foreground w-full flex flex-col lg:flex-row min-h-[600px]">
        <div className="w-full lg:w-1/2 p-12 lg:p-24 flex flex-col justify-center bg-foreground text-background">
          <h2 className="text-4xl lg:text-5xl font-display font-medium mb-12">Trust is a molecule.</h2>
          <ul className="flex flex-col gap-8 max-w-md">
            {[
              { title: "Verified Authors", desc: "Notes contributed exclusively by top scholars and verified educators." },
              { title: "Syllabus Aligned", desc: "Strictly follows the latest university guidelines and curriculum updates." },
              { title: "Open Source", desc: "A community-driven repository built for collective academic ascension." }
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4 group">
                <div className="mt-1 w-6 h-6 rounded bg-secondary/20 flex items-center justify-center shrink-0 group-hover:bg-secondary/40 transition-colors">
                  <ShieldCheck className="w-3 h-3 text-secondary-foreground" />
                </div>
                <div>
                  <h4 className="font-sans uppercase tracking-widest text-sm font-medium mb-2">{item.title}</h4>
                  <p className="font-sans font-light text-sm text-background/60 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 relative min-h-[400px]">
          {/* Dark themed lifestyle image blending */}
          <div className="absolute inset-0 bg-foreground mix-blend-multiply z-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground to-transparent z-10" />
          <img src="/hero.png" alt="Laboratory precision notes" className="absolute inset-0 w-full h-full object-cover object-left opacity-60 grayscale-[30%]" />
        </div>
      </section>

      {/* Safety & FAQ */}
      <section className="py-32 px-6 lg:px-12 bg-background border-b border-border/50">
        <div className="container mx-auto max-w-[1280px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
            {/* Safety Board */}
            <div className="lg:col-span-5">
              <div className="border-l-[3px] border-secondary pl-8 py-2">
                <h3 className="text-sm font-sans uppercase tracking-[0.2em] mb-4 text-muted-foreground">Advisory</h3>
                <h2 className="text-3xl font-display font-medium text-foreground mb-6">Academic Integrity & Safety.</h2>
                <p className="font-sans font-light text-muted-foreground leading-relaxed">
                  These notes are supplements, not substitutes for actual lectures. Consume responsibly. Side effects may include sudden comprehension, reduced exam anxiety, and an uncontrollable urge to share knowledge. If symptoms persist, consult your professor.
                </p>
              </div>
            </div>

            {/* FAQ */}
            <div className="lg:col-span-7 flex flex-col gap-4">
              {[
                { q: "How are the notes verified?", a: "Every upload undergoes a peer-review protocol. Only materials meeting our clarity and accuracy thresholds are published to the main repository." },
                { q: "Can I download these for offline studying?", a: "Yes. All regimens are formulated as portable PDFs allowing for offline consumption anywhere." },
                { q: "Is there a subscription fee?", a: "No. Academic knowledge should not have a paywall. Rudra is 100% free for BBA students." },
                { q: "How can I contribute?", a: "Scholars with verified accounts can submit their own notes. We welcome high-quality, typed, or neatly handwritten formulations." }
              ].map((faq, i) => (
                <details key={i} className="group border-b border-border pb-4 cursor-pointer">
                  <summary className="flex justify-between items-center font-sans uppercase tracking-wide text-sm font-medium text-foreground list-none py-4">
                    {faq.q}
                    <ChevronDown className="w-4 h-4 text-muted-foreground transition-transform group-open:rotate-180" />
                  </summary>
                  <p className="font-sans font-light text-muted-foreground leading-relaxed pt-2 pb-4 pr-12">
                    {faq.a}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-background py-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-[1440px] flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-display font-medium text-foreground">
              Rudra.
            </span>
          </div>
          <p className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground font-light">
            &copy; {new Date().getFullYear()} Rudra Foundation. Crafted for focus.
          </p>
          <div className="flex gap-8">
            <Link
              href="#"
              className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Methodology
            </Link>
            <Link
              href="#"
              className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </Link>
            <Link
              href="#"
              className="text-xs font-sans uppercase tracking-[0.1em] text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
