import React, { useState } from 'react';
import { ArrowDown, ExternalLink, Eye, ArrowLeft, FileText, CheckCircle2, X } from 'lucide-react';

interface SomaBrochurePageProps {
  onBackToHome?: () => void;
}

export function SomaBrochurePage({ onBackToHome }: SomaBrochurePageProps) {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const pdfUrl = '/soma_brochure.pdf';

  const handleDownload = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'SOMA_Villas_Brochure.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setIsDownloading(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#F6F3EE] text-stone-800 flex flex-col font-sans antialiased selection:bg-[#2A3B30] selection:text-white">
      {/* Top Navigation Bar matching reference UI */}
      <header className="w-full bg-[#F6F3EE]/90 backdrop-blur-md border-b border-stone-200/60 sticky top-0 z-30 px-6 sm:px-10 py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {onBackToHome && (
            <button
              onClick={onBackToHome}
              className="text-stone-500 hover:text-stone-900 transition-colors p-1.5 -ml-2 rounded-lg hover:bg-stone-200/50 flex items-center gap-1.5 text-xs font-medium cursor-pointer"
              title="Return to Avirastays"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Avira Stays</span>
            </button>
          )}
          <span className="font-serif tracking-[0.25em] text-stone-900 text-sm sm:text-base font-semibold uppercase">
            SOMA VILLAS
          </span>
        </div>

        <button
          onClick={handleDownload}
          className="bg-[#2D3E32] hover:bg-[#233127] active:scale-[0.98] text-white px-4 py-2 sm:px-5 sm:py-2.5 rounded-md text-xs font-semibold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 shadow-sm cursor-pointer"
        >
          <ArrowDown className="w-3.5 h-3.5" />
          <span>{isDownloading ? 'Downloading...' : 'Download Brochure'}</span>
        </button>
      </header>

      {/* Main Centered Content Card */}
      <main className="flex-1 flex items-center justify-center px-4 py-12 sm:py-16">
        <div className="w-full max-w-lg bg-white rounded-2xl shadow-sm border border-stone-200/70 p-8 sm:p-12 text-center transition-all">
          {/* Subtitle / Overline */}
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="h-[1px] w-6 bg-stone-300"></span>
            <span className="text-[11px] uppercase tracking-[0.3em] text-stone-500 font-medium">
              SOMA VILLAS
            </span>
            <span className="h-[1px] w-6 bg-stone-300"></span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-3xl sm:text-4xl text-stone-900 font-normal tracking-tight mb-3">
            Your Escape Awaits
          </h1>

          {/* Subheading */}
          <p className="text-stone-600 text-xs sm:text-sm font-normal max-w-sm mx-auto mb-8 leading-relaxed">
            Discover the beauty of Soma Villas and plan your perfect getaway.
          </p>

          {/* Document Preview Box */}
          <div className="bg-[#EFECE6] rounded-xl p-6 sm:p-7 mb-6 border border-stone-200/60 flex flex-col items-center justify-center">
            {/* Document Icon */}
            <div className="w-10 h-10 rounded-lg bg-white/70 flex items-center justify-center mb-3 text-stone-700 shadow-2xs">
              <FileText className="w-5 h-5 stroke-[1.75]" />
            </div>

            <h3 className="font-serif text-stone-900 font-medium text-base sm:text-lg mb-1">
              Soma Villas Brochure
            </h3>

            <p className="text-[10px] sm:text-[11px] font-semibold text-stone-500 uppercase tracking-widest">
              PDF · 11 PAGES · DOWNLOADABLE
            </p>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={handleDownload}
            className="w-full bg-[#2D3E32] hover:bg-[#223126] active:scale-[0.99] text-white py-3.5 px-6 rounded-lg text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2 shadow-sm mb-4 cursor-pointer"
          >
            {isDownloading ? (
              <>
                <CheckCircle2 className="w-4 h-4 text-emerald-300" />
                <span>Brochure Downloaded</span>
              </>
            ) : (
              <>
                <ArrowDown className="w-4 h-4" />
                <span>Download Brochure</span>
              </>
            )}
          </button>

          {/* Secondary Action Links */}
          <div className="flex items-center justify-center gap-6 text-xs text-stone-600 font-medium mb-10">
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="hover:text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-800 transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Preview in Browser</span>
            </button>
            <span className="text-stone-300">•</span>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-stone-900 underline underline-offset-4 decoration-stone-300 hover:decoration-stone-800 transition-colors flex items-center gap-1 cursor-pointer"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>

          {/* Footer Tagline */}
          <div className="pt-6 border-t border-stone-100">
            <p className="text-[10px] uppercase tracking-[0.25em] text-stone-400 font-medium">
              A STAY WORTH REMEMBERING
            </p>
          </div>
        </div>
      </main>

      {/* Embedded PDF Viewer Modal for 'Preview in Browser' */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 bg-stone-950/80 backdrop-blur-sm flex flex-col p-4 sm:p-6 animate-fade-in">
          <div className="flex items-center justify-between text-white pb-3 max-w-5xl w-full mx-auto">
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4 text-emerald-400" />
              <span className="font-serif tracking-wide text-sm sm:text-base">
                Soma Villas Brochure (11 Pages)
              </span>
            </div>
            <div className="flex items-center gap-3">
              <a
                href={pdfUrl}
                download="SOMA_Villas_Brochure.pdf"
                className="bg-white/10 hover:bg-white/20 text-white px-3 py-1.5 rounded text-xs flex items-center gap-1.5 transition-colors"
              >
                <ArrowDown className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Download</span>
              </a>
              <button
                onClick={() => setIsPreviewOpen(false)}
                className="p-1.5 rounded-lg hover:bg-white/20 text-stone-300 hover:text-white transition-colors cursor-pointer"
                title="Close Preview"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="flex-1 bg-stone-900 rounded-xl overflow-hidden max-w-5xl w-full mx-auto shadow-2xl border border-stone-700/60 relative">
            <iframe
              src={`${pdfUrl}#toolbar=1&navpanes=0`}
              title="Soma Villas Brochure PDF Viewer"
              className="w-full h-full border-0"
            />
          </div>
        </div>
      )}
    </div>
  );
}
