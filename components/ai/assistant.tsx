"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Bot,
  Mic,
  Send,
  Sparkles,
  Volume2,
  VolumeX,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";
import * as React from "react";
import {
  assistantGreeting,
  getAssistantReply,
  type AiReply,
} from "@/lib/ai-knowledge";
import { cn } from "@/lib/utils";

type Message = { role: "user" | "bot"; text: string; suggestions?: string[] };

const routeMap: Record<string, string> = {
  ppdb: "/ppdb",
  profil: "/profil",
  guru: "/guru",
  prestasi: "/prestasi",
  ekstrakurikuler: "/ekstrakurikuler",
  kontak: "/kontak",
};

export function AiAssistant() {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] = React.useState("");
  const [typing, setTyping] = React.useState(false);
  const [tts, setTts] = React.useState(false);
  const [listening, setListening] = React.useState(false);
  const [messages, setMessages] = React.useState<Message[]>([
    { role: "bot", text: assistantGreeting.text, suggestions: assistantGreeting.suggestions },
  ]);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, typing, open]);

  function speak(text: string) {
    if (!tts || typeof window === "undefined" || !window.speechSynthesis) return;
    const utter = new SpeechSynthesisUtterance(text.replace(/[•📍📞✉️👋🌿👇]/g, ""));
    utter.lang = "id-ID";
    window.speechSynthesis.cancel();
    window.speechSynthesis.speak(utter);
  }

  function maybeNavigate(text: string) {
    const q = text.toLowerCase();
    if (!/buka|lihat|pergi/.test(q)) return;
    for (const key of Object.keys(routeMap)) {
      if (q.includes(key)) {
        router.push(routeMap[key]);
        setOpen(false);
        return;
      }
    }
  }

  function send(raw?: string) {
    const text = (raw ?? input).trim();
    if (!text) return;
    setInput("");
    setMessages((m) => [...m, { role: "user", text }]);
    maybeNavigate(text);
    setTyping(true);
    setTimeout(() => {
      const reply: AiReply = getAssistantReply(text);
      setMessages((m) => [
        ...m,
        { role: "bot", text: reply.text, suggestions: reply.suggestions },
      ]);
      setTyping(false);
      speak(reply.text);
    }, 650);
  }

  function startVoice() {
    const SR =
      (window as any).SpeechRecognition ||
      (window as any).webkitSpeechRecognition;
    if (!SR) {
      send("Fitur suara belum didukung browser ini.");
      return;
    }
    const rec = new SR();
    rec.lang = "id-ID";
    rec.interimResults = false;
    rec.onstart = () => setListening(true);
    rec.onend = () => setListening(false);
    rec.onresult = (e: any) => {
      const transcript = e.results[0][0].transcript;
      send(transcript);
    };
    rec.start();
  }

  return (
    <>
      <motion.button
        onClick={() => setOpen(true)}
        aria-label="Buka Asisten AI"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.15, type: "spring" }}
        className={cn(
          "group fixed bottom-[5.5rem] right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-emerald-600 to-emerald-800 text-white shadow-elevated",
          open && "pointer-events-none opacity-0"
        )}
      >
        <span className="absolute -right-0.5 -top-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-gold-400">
          <Sparkles className="h-2.5 w-2.5 text-emerald-950" />
        </span>
        <Bot className="h-7 w-7" />
      </motion.button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 320, damping: 30 }}
            className="glass-strong fixed bottom-6 right-4 z-[70] flex h-[70vh] max-h-[560px] w-[calc(100vw-2rem)] max-w-sm flex-col overflow-hidden rounded-3xl shadow-elevated sm:right-6"
          >
            {/* Header */}
            <div className="flex items-center gap-3 border-b border-border bg-emerald-600 px-4 py-3.5 text-white">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                <Bot className="h-5 w-5" />
              </span>
              <div className="flex-1 leading-tight">
                <p className="text-sm font-bold">Asisten Digital</p>
                <p className="flex items-center gap-1.5 text-[11px] text-emerald-100">
                  <span className="h-1.5 w-1.5 rounded-full bg-green-300" />
                  Online • siap membantu
                </p>
              </div>
              <button
                onClick={() => setTts((v) => !v)}
                aria-label="Text to speech"
                className="rounded-full p-2 transition-colors hover:bg-white/15"
              >
                {tts ? <Volume2 className="h-4 w-4" /> : <VolumeX className="h-4 w-4" />}
              </button>
              <button
                onClick={() => setOpen(false)}
                aria-label="Tutup"
                className="rounded-full p-2 transition-colors hover:bg-white/15"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Messages */}
            <div
              ref={scrollRef}
              className="flex-1 space-y-4 overflow-y-auto bg-background/40 p-4"
            >
              {messages.map((m, i) => (
                <div key={i} className="space-y-2">
                  <div
                    className={cn(
                      "flex",
                      m.role === "user" ? "justify-end" : "justify-start"
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed",
                        m.role === "user"
                          ? "rounded-br-sm bg-emerald-600 text-white"
                          : "rounded-bl-sm border border-border bg-card text-card-foreground"
                      )}
                    >
                      {m.text}
                    </div>
                  </div>
                  {m.role === "bot" && m.suggestions && (
                    <div className="flex flex-wrap gap-2">
                      {m.suggestions.map((s) => (
                        <button
                          key={s}
                          onClick={() => send(s)}
                          className="rounded-full border border-emerald-600/30 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 transition-colors hover:bg-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-300"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              {typing && (
                <div className="flex justify-start">
                  <div className="flex gap-1 rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3">
                    {[0, 1, 2].map((d) => (
                      <span
                        key={d}
                        className="h-2 w-2 animate-bounce rounded-full bg-emerald-500"
                        style={{ animationDelay: `${d * 0.15}s` }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="border-t border-border bg-card p-3">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  send();
                }}
                className="flex items-center gap-2"
              >
                <button
                  type="button"
                  onClick={startVoice}
                  aria-label="Input suara"
                  className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-border transition-colors",
                    listening
                      ? "animate-pulse bg-red-500 text-white"
                      : "bg-background hover:bg-secondary"
                  )}
                >
                  <Mic className="h-4 w-4" />
                </button>
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tulis pertanyaan…"
                  className="h-10 w-full rounded-full border border-border bg-background px-4 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <button
                  type="submit"
                  aria-label="Kirim"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-emerald-600 text-white transition-colors hover:bg-emerald-700"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
