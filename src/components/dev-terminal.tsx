"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTheme } from "./theme-provider";
import { profile, skillGroups, projects } from "@/lib/portfolio-data";
import { PortfolioIcon } from "./icon";

type DevTerminalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type HistoryLine = {
  type: "input" | "output" | "error";
  text: string;
};

export function DevTerminal({ isOpen, onClose }: DevTerminalProps) {
  const { theme, setTheme } = useTheme();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<HistoryLine[]>([
    { type: "output", text: `Pham Thanh Tri CLI [Version 1.1.0]` },
    {
      type: "output",
      text: `Type 'help' to see the list of available commands.`,
    },
    { type: "output", text: `` },
  ]);
  const [cmdHistory, setCmdHistory] = useState<string[]>([]);
  const [historyIdx, setHistoryIdx] = useState(-1);

  const inputRef = useRef<HTMLInputElement>(null);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  // Focus input on mount / toggle
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Scroll to bottom on history change
  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Handle ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const COMMANDS = [
    "help",
    "clear",
    "about",
    "skills",
    "projects",
    "contact",
    "theme",
    "linkedin",
    "email",
    "exit",
  ];

  const handleCommand = (rawCmd: string) => {
    const trimmed = rawCmd.trim();
    if (!trimmed) return;

    // Add to history
    setHistory((prev) => [...prev, { type: "input", text: trimmed }]);
    setCmdHistory((prev) => [...prev, trimmed]);
    setHistoryIdx(-1);

    const parts = trimmed.split(" ");
    const cmd = parts[0].toLowerCase();
    const args = parts.slice(1);

    switch (cmd) {
      case "help":
        setHistory((prev) => [
          ...prev,
          { type: "output", text: "Available commands:" },
          {
            type: "output",
            text: "  about          - View professional biography",
          },
          {
            type: "output",
            text: "  skills         - List specialized tech stack",
          },
          {
            type: "output",
            text: "  projects       - Show portfolio projects & case studies",
          },
          { type: "output", text: "  contact        - Display contact notes" },
          {
            type: "output",
            text: "  linkedin       - Open my LinkedIn profile",
          },
          {
            type: "output",
            text: "  email          - Open a mail client to write to me",
          },
          {
            type: "output",
            text: "  theme [l|d|t]  - Switch theme (light, dark, toggle)",
          },
          {
            type: "output",
            text: "  clear          - Clear terminal screen log",
          },
          {
            type: "output",
            text: "  exit           - Close terminal interface",
          },
        ]);
        break;

      case "clear":
        setHistory([]);
        break;

      case "exit":
        onClose();
        break;

      case "about":
        setHistory((prev) => [
          ...prev,
          { type: "output", text: `Name:         ${profile.displayName}` },
          { type: "output", text: `Role:         ${profile.role}` },
          { type: "output", text: `Location:     ${profile.location}` },
          { type: "output", text: "" },
          { type: "output", text: profile.intro },
          { type: "output", text: "" },
          { type: "output", text: profile.headline },
        ]);
        break;

      case "skills":
        setHistory((prev) => {
          const lines: HistoryLine[] = [
            { type: "output", text: "Core Skill Matrix:" },
          ];
          skillGroups.forEach((group) => {
            lines.push({ type: "output", text: `  [${group.title}]` });
            lines.push({
              type: "output",
              text: `    ${group.items.join(", ")}`,
            });
          });
          return [...prev, ...lines];
        });
        break;

      case "projects":
        setHistory((prev) => {
          const lines: HistoryLine[] = [
            { type: "output", text: "Portfolio Project Index:" },
          ];
          projects.forEach((proj) => {
            lines.push({
              type: "output",
              text: `  * ${proj.name} (${proj.role})`,
            });
            lines.push({
              type: "output",
              text: `    Summary: ${proj.summary}`,
            });
            lines.push({
              type: "output",
              text: `    Stack:   ${proj.stack.slice(0, 5).join(", ")}...`,
            });
            lines.push({ type: "output", text: "" });
          });
          return [...prev, ...lines];
        });
        break;

      case "contact":
        setHistory((prev) => [
          ...prev,
          { type: "output", text: `Contact note: ${profile.contactNote}` },
          { type: "output", text: `Email:        ${profile.email}` },
          { type: "output", text: `LinkedIn:     ${profile.linkedin}` },
          { type: "output", text: `GitHub:       ${profile.github}` },
        ]);
        break;

      case "linkedin":
        setHistory((prev) => [
          ...prev,
          { type: "output", text: `Opening LinkedIn: ${profile.linkedin}` },
        ]);
        window.open(profile.linkedin, "_blank");
        break;

      case "email":
        setHistory((prev) => [
          ...prev,
          {
            type: "output",
            text: `Opening mailto link: mailto:${profile.email}`,
          },
        ]);
        window.open(`mailto:${profile.email}`, "_self");
        break;

      case "theme":
        const sub = args[0]?.toLowerCase();
        if (sub === "light" || sub === "l") {
          setTheme("light");
          setHistory((prev) => [
            ...prev,
            { type: "output", text: "Theme set to Light." },
          ]);
        } else if (sub === "dark" || sub === "d") {
          setTheme("dark");
          setHistory((prev) => [
            ...prev,
            { type: "output", text: "Theme set to Dark." },
          ]);
        } else if (sub === "toggle" || sub === "t" || !sub) {
          const newTheme = theme === "light" ? "dark" : "light";
          setTheme(newTheme);
          setHistory((prev) => [
            ...prev,
            { type: "output", text: `Theme toggled to ${newTheme}.` },
          ]);
        } else {
          setHistory((prev) => [
            ...prev,
            { type: "error", text: "Usage: theme [light | dark | toggle]" },
          ]);
        }
        break;

      default:
        setHistory((prev) => [
          ...prev,
          {
            type: "error",
            text: `Command not found: '${cmd}'. Type 'help' to show commands.`,
          },
        ]);
        break;
    }

    setInput("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleCommand(input);
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = COMMANDS.find((cmd) => cmd.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (cmdHistory.length === 0) return;
      const nextIdx =
        historyIdx === -1 ? cmdHistory.length - 1 : Math.max(0, historyIdx - 1);
      setHistoryIdx(nextIdx);
      setInput(cmdHistory[nextIdx]);
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (cmdHistory.length === 0 || historyIdx === -1) return;
      const nextIdx = historyIdx + 1;
      if (nextIdx >= cmdHistory.length) {
        setHistoryIdx(-1);
        setInput("");
      } else {
        setHistoryIdx(nextIdx);
        setInput(cmdHistory[nextIdx]);
      }
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/70 backdrop-blur-sm"
        />

        {/* Terminal frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ duration: 0.25 }}
          className="relative z-10 flex h-full max-h-[550px] w-full max-w-3xl flex-col rounded-xl border border-blue-500/30 bg-[#030712] text-cyan-400 shadow-2xl overflow-hidden font-mono"
        >
          {/* Title bar */}
          <div className="flex items-center justify-between border-b border-blue-500/20 bg-[#0b0f19] px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="size-3 rounded-full bg-red-500/60" />
              <span className="size-3 rounded-full bg-yellow-500/60" />
              <span className="size-3 rounded-full bg-blue-500/60" />
              <span className="ml-2 text-xs text-cyan-400/60">
                tri@portfolio:~
              </span>
            </div>
            <button
              onClick={onClose}
              className="rounded p-1 text-cyan-400/50 hover:bg-cyan-500/10 hover:text-cyan-400 transition-colors cursor-pointer"
            >
              <PortfolioIcon name="arrow" size={16} className="rotate-45" />
            </button>
          </div>

          {/* Console Area */}
          <div
            className="flex-1 overflow-y-auto px-5 py-4 space-y-2 text-sm selection:bg-blue-500/25 selection:text-white"
            onClick={() => inputRef.current?.focus()}
          >
            {history.map((line, idx) => (
              <div
                key={idx}
                className={
                  line.type === "input"
                    ? "text-white"
                    : line.type === "error"
                      ? "text-red-400"
                      : "text-cyan-300"
                }
              >
                {line.type === "input" && (
                  <span className="text-cyan-400 mr-2">$</span>
                )}
                <span className="whitespace-pre-wrap">{line.text}</span>
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Area */}
          <div className="flex items-center border-t border-blue-500/20 bg-[#060a15] px-5 py-3">
            <span className="text-cyan-400 mr-2 shrink-0">$</span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="flex-1 bg-transparent text-white focus:outline-none caret-cyan-400 font-mono"
              placeholder="type a command... (e.g. 'help')"
              autoFocus
            />
            <span className="text-[10px] text-cyan-400/40 select-none hidden sm:inline">
              [Tab] autocomplete | [Esc] close
            </span>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
