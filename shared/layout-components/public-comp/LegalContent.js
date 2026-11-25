"use client"
import React from "react";
import { useUserContext } from "@/shared/userContext/userContext";

const FALLBACK_COMPANY = "Neuralnetics Technologies Pvt. Ltd.";
const LINK_RE = /(https?:\/\/[^\s)]*[^\s).,;]|[\w.+-]+@[\w-]+\.[\w.-]+[A-Za-z])/g;

// turns plain urls / emails inside text into links
const Linkify = ({ text }) =>
  text.split(LINK_RE).map((part, i) => {
    if (i % 2 === 0) return <React.Fragment key={i}>{part}</React.Fragment>;
    const isMail = part.includes("@") && !part.startsWith("http");
    return (
      <a key={i} href={isMail ? `mailto:${part}` : part} {...(!isMail && { target: "_blank", rel: "noopener noreferrer" })} className="text-blue-600 underline">
        {part}
      </a>
    );
  });

const LegalContent = ({ content, resellerName, productName, children }) => {
  const { companyDetails } = useUserContext() || {};
  const company = 'Neuralnetics Technology Private Limited';

  const t = (s = "") =>
    s
      .replaceAll("{{company}}", company)
      .replaceAll("{{COMPANY}}", company.toUpperCase())
      .replaceAll("{{resellerName}}", resellerName || "")
      .replaceAll("{{productName}}", productName || "");

  const intro = [...content.intro];
  if (content.resellerNote && resellerName && productName) intro.push(content.resellerNote);

  return (
    <section className="bg-white">
      <div className="max-w-4xl mx-auto px-4 py-16 lg:py-18 sm:px-6 lg:px-10 flex flex-wrap items-center justify-between p-4">
        <div className="prose">
          <p className="text-xss font-bold leading-normal">
            Welcome to <b>Scrape Genius</b>!
          </p>
          <br />
          {intro.map((p, i) => (
            <p key={i} className="text-xss font-light leading-normal">
              <Linkify text={t(p)} />
            </p>
          ))}

          {content.sections.map((s, i) => (
            <React.Fragment key={i}>
              <h3 className="font-bold text-2xl mt-8 mb-3">
                {s.num !== null && `${s.num}. `}
                {t(s.title)}
              </h3>

              {s.paras?.map((p, j) => (
                <p key={j} className="text-xss font-light leading-normal">
                  <Linkify text={t(p)} />
                </p>
              ))}

              {s.clauses.map((c) => (
                <div key={c.label} className="mb-3">
                  <p className="text-xss font-light leading-normal">
                    <b>{c.label}</b> {c.heading && <b>{t(c.heading)}. </b>}
                    <Linkify text={t(c.text)} />
                  </p>
                  {c.items?.map((it) => (
                    <p key={it.label} className="text-xss font-light leading-normal pl-8">
                      <b>{it.label}</b> <Linkify text={t(it.text)} />
                    </p>
                  ))}
                  {c.after?.map((a, k) => (
                    <p key={k} className="text-xss font-light leading-normal pl-8">
                      <Linkify text={t(a)} />
                    </p>
                  ))}
                </div>
              ))}
            </React.Fragment>
          ))}

          {children}
        </div>
      </div>
    </section>
  );
};

export default LegalContent;
