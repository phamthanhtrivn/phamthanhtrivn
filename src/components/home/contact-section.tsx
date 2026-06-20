"use client";

import { useState } from "react";
import { PortfolioIcon } from "@/components/icon";
import { Reveal } from "@/components/reveal";
import { profile } from "@/lib/portfolio-data";
import type { FormEvent } from "react";

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Portfolio Inquiry from ${formState.name || "a visitor"}`;
    const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\n${formState.message}`;

    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section
      id="contact"
      className="border-t border-line bg-surface-soft/35 py-24 transition-colors duration-300"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <Reveal>
          <div className="rounded-2xl border border-line bg-surface p-8 shadow-xl sm:p-12">
            <div className="text-center">
              <h2 className="text-4xl font-extrabold leading-[1.03] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                Contact <span className="text-accent">Me</span>
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-base text-foreground/80 sm:text-[17px] leading-relaxed">
                Always open for internship opportunities, freelance projects,
                and collaboration. Let&apos;s build something amazing together!
              </p>
            </div>

            <div className="mt-12 grid gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-12">
              {/* Left Column: Form */}
              <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                <input
                  id="name"
                  required
                  value={formState.name}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-xl border border-line bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent"
                  placeholder="Your Name"
                />

                <input
                  id="email"
                  type="email"
                  required
                  value={formState.email}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      email: event.target.value,
                    }))
                  }
                  className="h-12 w-full rounded-xl border border-line bg-background px-4 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent"
                  placeholder="Your Email"
                />

                <textarea
                  id="message"
                  required
                  rows={5}
                  value={formState.message}
                  onChange={(event) =>
                    setFormState((current) => ({
                      ...current,
                      message: event.target.value,
                    }))
                  }
                  className="w-full resize-none rounded-xl border border-line bg-background px-4 py-3 text-sm text-foreground outline-none transition placeholder:text-muted focus:border-accent"
                  placeholder="Your Message"
                />

                <div className="flex flex-col gap-3 mt-2">
                  <button
                    type="submit"
                    className="flex h-12 w-full items-center justify-center rounded-xl bg-accent px-6 text-sm font-semibold tracking-wide text-white transition hover:opacity-90 cursor-pointer active:scale-[0.98]"
                  >
                    SEND MESSAGE
                  </button>
                </div>
              </form>

              {/* Right Column: Contact Info */}
              <div className="flex flex-col justify-center items-center lg:justify-start pt-2">
                <div className="grid gap-6">
                  {/* Location */}
                  <div className="flex items-start gap-3 text-foreground">
                    <div className="mt-1 text-accent">
                      <PortfolioIcon
                        name="location"
                        size={24}
                        weight="regular"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">Location</h3>
                      <p className="text-[15px] mt-1 text-foreground/80">
                        {profile.location}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-4 mt-4">
                    <a
                      href={`mailto:${profile.email}`}
                      className="flex items-center gap-3 text-accent hover:underline font-medium text-[15px]"
                    >
                      <PortfolioIcon name="email" size={22} weight="regular" />
                      {profile.email}
                    </a>

                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-accent hover:underline font-medium text-[15px]"
                    >
                      <PortfolioIcon name="linkedin" size={22} weight="fill" />
                      {profile.linkedin.replace(
                        "https://www.linkedin.com/in/",
                        "linkedin.com/in/",
                      )}
                    </a>

                    <a
                      href={profile.github}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-3 text-accent hover:underline font-medium text-[15px]"
                    >
                      <PortfolioIcon name="github" size={22} weight="fill" />
                      {profile.github.replace(
                        "https://github.com/",
                        "github.com/",
                      )}
                    </a>
                  </div>
                </div>

                <div className="mt-10 font-extrabold uppercase tracking-wide text-xl text-foreground">
                  LET&apos;S WORK TOGETHER
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
