"use client"

import { useEffect, useState } from "react"
import { Brain, Check, Link2, Moon, Shield, Sparkles, Sun, Upload, Video } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Theme = "light" | "dark"

export default function Home() {
  const [theme, setTheme] = useState<Theme>("dark")

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("optiscam-theme") as Theme | null
    const nextTheme = savedTheme === "light" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
  }, [])

  function toggleTheme() {
    const nextTheme = theme === "dark" ? "light" : "dark"
    setTheme(nextTheme)
    document.documentElement.classList.toggle("dark", nextTheme === "dark")
    window.localStorage.setItem("optiscam-theme", nextTheme)
  }

  return (
    <div className="page-shell min-h-screen overflow-hidden bg-background text-foreground transition-colors">
      <div className="pointer-events-none fixed inset-0 bg-grid opacity-60" />
      <div className="ambient-light ambient-light--purple pointer-events-none fixed -left-48 -top-48 size-[520px] rounded-full bg-purple-600/20 blur-[130px] dark:block hidden" />
      <div className="ambient-light ambient-light--pink pointer-events-none fixed -right-48 top-1/3 size-[460px] rounded-full bg-pink-600/15 blur-[130px] dark:block hidden" />
      <div className="lower-signal lower-signal--left" aria-hidden="true">
        <span className="lower-signal__arc" />
        <span className="lower-signal__arc lower-signal__arc--small" />
        <span className="lower-signal__dot lower-signal__dot--one" />
        <span className="lower-signal__dot lower-signal__dot--two" />
      </div>
      <div className="lower-signal lower-signal--right" aria-hidden="true">
        <span className="lower-signal__arc" />
        <span className="lower-signal__arc lower-signal__arc--small" />
        <span className="lower-signal__dot lower-signal__dot--one" />
        <span className="lower-signal__dot lower-signal__dot--two" />
      </div>

      <header className="site-header relative z-10 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#" className="flex items-center gap-2.5" aria-label="OptiScam home">
            <img className="brand-mark" src="/optiscam-logo.svg" alt="" />
            <span className="brand-wordmark">
              <span className="brand-name"><span>Opti</span>Scam</span>
              <span className="brand-subtitle">Video detection</span>
            </span>
          </a>

          <div className="flex items-center gap-2">
            <span className="hidden items-center gap-1.5 rounded-full border border-border bg-card/60 px-3 py-1.5 text-[10px] text-muted-foreground sm:flex">
              <Sparkles className="size-3 text-purple-400" /> About the model
            </span>
            <span className="hidden items-center gap-1.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-[10px] text-emerald-500 sm:flex">
              <span className="size-1.5 rounded-full bg-emerald-400" /> AI ready
            </span>
            <Button type="button" variant="outline" size="icon" onClick={toggleTheme} aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`} title={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
              {theme === "dark" ? <Sun /> : <Moon />}
            </Button>
          </div>
        </div>
      </header>

      <main className="relative z-10 mx-auto w-full max-w-5xl px-6 pb-20 pt-14 sm:pt-20">
        <section className="hero-stage relative mx-auto max-w-3xl text-center">
          <div className="scan-core" aria-hidden="true">
            <div className="scan-core__halo" />
            <div className="scan-core__ring scan-core__ring--one" />
            <div className="scan-core__ring scan-core__ring--two" />
            <div className="scan-core__shield"><Shield className="size-9" /></div>
            <span className="scan-core__node scan-core__node--one" />
            <span className="scan-core__node scan-core__node--two" />
          </div>
          <span className="inline-flex items-center gap-2 rounded-full border border-purple-500/25 bg-purple-500/10 px-3 py-1.5 text-[10px] font-medium text-purple-500 dark:text-purple-300">
            <Sparkles className="size-3" /> Multimodal scam detection
          </span>
          <div className="hero-visual" aria-hidden="true">
            <div className="hero-visual__orbit hero-visual__orbit--horizontal" />
            <div className="hero-visual__orbit hero-visual__orbit--vertical" />
            <div className="hero-visual__glow" />
            <div className="hero-visual__shield"><span className="hero-visual__play" /></div>
            <span className="hero-visual__particle hero-visual__particle--cyan" />
            <span className="hero-visual__particle hero-visual__particle--pink" />
            <span className="hero-visual__particle hero-visual__particle--white" />
          </div>
          <h1 className="hero-title mt-6 text-3xl font-bold tracking-normal sm:text-5xl">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">SCAM</span>{" "}
            <span className="text-foreground/85">or Not</span>{" "}
            <span className="bg-gradient-to-r from-pink-500 to-rose-500 bg-clip-text text-transparent">Scam?</span>
          </h1>
          <p className="mx-auto mt-5 max-w-lg text-sm leading-6 text-muted-foreground">
            Upload a video or paste a YouTube / TikTok link. Our AI pipeline analyzes the visuals, audio, and metadata to give you a verdict.
          </p>
          <p className="mt-3 text-[10px] font-medium text-amber-500">Videos must be 60 seconds or shorter.</p>
          <p className="mx-auto mt-2 max-w-md text-[10px] leading-4 text-emerald-600 dark:text-emerald-400">No data is kept after inference. Uploads, frames, and transcripts are deleted as soon as the verdict is returned.</p>

          <div className="mt-7 flex flex-wrap justify-center gap-2">
            {[
              { icon: Video, label: "Visual analysis", color: "text-purple-400" },
              { icon: Brain, label: "Audio transcription", color: "text-pink-400" },
              { icon: Shield, label: "Metadata analysis", color: "text-amber-400" },
              { icon: Link2, label: "YouTube + TikTok", color: "text-rose-400" },
            ].map(({ icon: Icon, label, color }) => (
              <span key={label} className="feature-chip inline-flex items-center gap-1.5 rounded-full border border-border bg-card/70 px-3 py-1.5 text-[10px] text-muted-foreground">
                <Icon className={`size-3 ${color}`} /> {label}
              </span>
            ))}
          </div>
        </section>

        <Card className="analysis-panel mx-auto mt-9 max-w-3xl border-border/80 bg-card/80 p-5 shadow-2xl shadow-purple-950/10 backdrop-blur-xl sm:p-6">
          <Tabs defaultValue="link" className="w-full">
            <TabsList className="grid h-10 w-full grid-cols-2 rounded-xl bg-muted/80 p-1">
              <TabsTrigger value="link" className="gap-2 rounded-lg text-xs data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600 data-[state=active]:text-white">
                <Link2 className="size-3.5" /> YouTube / TikTok link
              </TabsTrigger>
              <TabsTrigger value="upload" className="gap-2 rounded-lg text-xs">
                <Upload className="size-3.5" /> Upload file
              </TabsTrigger>
            </TabsList>

            <TabsContent value="link" className="mt-6">
              <label htmlFor="video-link" className="text-[10px] font-medium uppercase tracking-[0.18em] text-muted-foreground">YouTube or TikTok URL</label>
              <div className="relative mt-2">
                <Link2 className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
                <input id="video-link" type="url" placeholder="https://www.youtube.com/watch?v=... or https://www.tiktok.com/@user/video/..." className="h-11 w-full rounded-xl border border-input bg-muted/50 pl-10 pr-4 text-xs outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20" />
              </div>
              <p className="mt-2 text-[10px] text-muted-foreground">Title and description are fetched automatically from the platform. Video must be 60 seconds or shorter.</p>
              <div className="my-6 border-t border-border/70" />
              <div className="flex items-center justify-between rounded-xl border border-border bg-muted/40 px-4 py-3">
                <div>
                  <p className="text-[10px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Clap + OCR preprocessing</p>
                  <p className="mt-1 text-[9px] text-amber-500">Noisy - not recommended</p>
                </div>
                <span className="relative h-5 w-10 rounded-full bg-muted-foreground/25"><span className="absolute left-1 top-1 size-3 rounded-full bg-background shadow-sm" /></span>
              </div>
              <Button type="button" className="shine-button mt-4 h-10 w-full rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-xs text-white hover:from-purple-500 hover:to-pink-500">
                <Sparkles className="size-3.5" /> Analyze video
              </Button>
            </TabsContent>

            <TabsContent value="upload" className="mt-6">
              <label className="flex min-h-52 cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-border bg-muted/30 text-center transition hover:border-purple-500/60 hover:bg-purple-500/5">
                <span className="mb-3 flex size-11 items-center justify-center rounded-full bg-purple-500/10 text-purple-500"><Upload className="size-5" /></span>
                <span className="text-sm font-medium">Drop a video here or browse</span>
                <span className="mt-1 text-xs text-muted-foreground">MP4, AVI, or MOV · max 60 seconds</span>
                <input type="file" className="sr-only" accept="video/*" />
              </label>
            </TabsContent>
          </Tabs>
        </Card>

        <p className="mt-12 text-center text-[9px] uppercase tracking-[0.2em] text-muted-foreground/70">Open resources</p>
      </main>

      <footer className="relative z-10 border-t border-border/70 bg-background/60">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5 text-[10px] text-muted-foreground">
          <span>OptiScam · AI-powered content detection</span>
          <span className="hidden sm:inline-flex items-center gap-1.5"><Check className="size-3 text-emerald-500" /> Privacy-first analysis</span>
        </div>
      </footer>
    </div>
  )
}
