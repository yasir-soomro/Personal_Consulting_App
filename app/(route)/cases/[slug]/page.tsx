import React from "react";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ArrowRight, TrendingUp } from "lucide-react";
import { getCaseBySlug, caseSlugs } from "../data";

type CaseDetailPageProps = {
  params: { slug: string };
};

export const generateStaticParams = () =>
  caseSlugs.map((slug) => ({ slug }));

const CaseDetailPage = ({ params }: CaseDetailPageProps) => {
  const study = getCaseBySlug(params.slug);

  if (!study) {
    notFound();
  }

  return (
    <div className="pt-24 min-h-screen bg-white">
      <section className="relative py-20 sm:py-28 border-b border-slate-100 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <Link
            href="/cases"
            className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.3em] text-slate-500 hover:text-slate-900"
          >
            <ArrowLeft size={16} />
            Back to Case Studies
          </Link>

          <div className="mt-10 grid gap-10 lg:grid-cols-[1.1fr_0.9fr] items-center">
            <div>
              <p className="text-sm font-black text-blue-600 uppercase tracking-[0.3em]">
                {study.category}
              </p>
              <h1 className="mt-5 text-4xl sm:text-6xl font-black text-slate-900 tracking-tight font-display">
                {study.title}
              </h1>
              <p className="mt-5 text-slate-500 text-lg leading-relaxed">
                {study.description}
              </p>
              <p className="mt-6 text-xs font-black uppercase tracking-[0.25em] text-slate-400">
                Client: {study.client}
              </p>
            </div>
            <div className="rounded-[2rem] overflow-hidden bg-slate-100 shadow-2xl border border-slate-200">
              <img
                src={study.image}
                alt={study.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-6 lg:px-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Overview</h2>
              <p className="mt-4 text-slate-600 leading-relaxed">{study.overview}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Challenge</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{study.challenge}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Solution</h3>
              <p className="mt-3 text-slate-600 leading-relaxed">{study.solution}</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-900">Results</h3>
              <ul className="mt-4 space-y-3">
                {study.results.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-slate-600"
                  >
                    <span className="mt-2 h-2 w-2 rounded-full bg-slate-900" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div
                  className={`h-12 w-12 rounded-2xl bg-gradient-to-br ${study.color} flex items-center justify-center text-white`}
                >
                  <TrendingUp size={22} />
                </div>
                <div>
                  <p className="text-xs font-black uppercase tracking-[0.3em] text-slate-400">
                    Key Outcome
                  </p>
                  <p className="text-lg font-bold text-slate-900">{study.impact}</p>
                </div>
              </div>
              <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-3">
                {study.metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-2xl bg-slate-50 border border-slate-100 p-3"
                  >
                    <p className="text-base font-black text-slate-900">{metric.value}</p>
                    <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
                      {metric.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-950 p-6 text-white shadow-xl">
              <p className="text-xs font-black uppercase tracking-[0.3em] text-blue-400">
                Delivery Stack
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {study.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg bg-white/10 text-xs font-bold uppercase tracking-widest text-white/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-6 inline-flex items-center gap-3 text-xs font-black uppercase tracking-[0.3em] text-white"
              >
                Start a project
                <ArrowRight size={16} />
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
};

export default CaseDetailPage;
