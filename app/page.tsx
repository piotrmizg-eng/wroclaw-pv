export default function Home() {
  return (
    <main className="min-h-screen bg-[#050b18] text-white overflow-hidden">
      <section className="relative min-h-screen overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "linear-gradient(90deg, rgba(3,8,24,0.94) 0%, rgba(3,8,24,0.78) 42%, rgba(3,8,24,0.25) 100%), url('/bg-solar-premium.png')",
          }}
        />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(56,189,248,0.22),transparent_35%)]" />

        <header className="relative z-10 max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 border border-cyan-300/30 flex items-center justify-center font-black text-cyan-300">
              GP
            </div>

            <div>
              <div className="font-black tracking-wide">Gebrüder Peters</div>
              <div className="text-xs text-cyan-200/80">Polska sp. z o.o.</div>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-white/80">
            <a href="#uslugi" className="hover:text-cyan-300 transition">Usługi</a>
            <a href="#realizacje" className="hover:text-cyan-300 transition">Realizacje</a>
            <a href="#proces" className="hover:text-cyan-300 transition">Proces</a>
            <a href="#kontakt" className="hover:text-cyan-300 transition">Kontakt</a>
          </nav>

          <a href="tel:+48730230919" className="hidden md:block bg-cyan-500 hover:bg-cyan-400 text-[#04101f] px-5 py-3 rounded-full font-black transition">
            730 230 919
          </a>
        </header>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-cyan-300/20 bg-white/10 backdrop-blur-xl rounded-full px-5 py-2 text-sm text-cyan-100 mb-8">
              ☀️ Premium fotowoltaika • Wrocław i okolice
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[0.92] tracking-[-3px] mb-8">
              Nowoczesna fotowoltaika
              <span className="block text-cyan-300">dla domu i biznesu</span>
            </h1>

            <p className="text-xl md:text-2xl text-blue-100/90 leading-relaxed max-w-2xl mb-10">
              Projektujemy i wykonujemy nowoczesne instalacje fotowoltaiczne, magazyny energii oraz rozwiązania zwiększające niezależność energetyczną.
            </p>

            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href="https://wa.me/48730230919?text=Dzień dobry,%20interesuje%20mnie%20bezpłatna%20wycena%20fotowoltaiki"
                target="_blank"
                className="bg-cyan-400 hover:bg-cyan-300 text-[#03101f] px-8 py-5 rounded-full font-black text-lg shadow-[0_20px_60px_rgba(34,211,238,0.35)] transition text-center"
              >
                Umów bezpłatną wycenę
              </a>

              <a href="tel:+48730230919" className="border border-white/20 bg-white/10 hover:bg-white/15 backdrop-blur-xl px-8 py-5 rounded-full font-black text-lg transition text-center">
                Zadzwoń teraz
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="uslugi" className="relative py-28 bg-[#071225]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(56,189,248,0.16),transparent_35%)]" />

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-cyan-300 font-bold mb-4">Nasze usługi</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Fotowoltaika zaprojektowana pod oszczędność
            </h2>
            <p className="text-blue-100/70 text-xl leading-relaxed">
              Projektujemy nowoczesne systemy PV dopasowane do zużycia energii, potrzeb budynku i przyszłej rozbudowy instalacji.
            </p>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              {
                icon: "☀️",
                title: "Fotowoltaika dla domu",
                text: "Nowoczesne instalacje PV dla domów jednorodzinnych i apartamentów. Estetyczne wykonanie, wysoka wydajność i realne oszczędności energii.",
              },
              {
                icon: "🏢",
                title: "Fotowoltaika dla firm",
                text: "Systemy PV dla biznesu, obiektów usługowych i hal produkcyjnych. Stabilizacja kosztów energii i nowoczesne rozwiązania energetyczne.",
              },
              {
                icon: "🔋",
                title: "Magazyny energii",
                text: "Nowoczesne magazyny energii zwiększające autokonsumpcję i bezpieczeństwo energetyczne budynku.",
              },
              {
                icon: "📐",
                title: "Audyt i dobór instalacji",
                text: "Analizujemy zużycie energii i pomagamy dobrać optymalny system fotowoltaiczny dopasowany do potrzeb inwestora.",
              },
            ].map((item) => (
              <div key={item.title} className="group rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 hover:bg-white/[0.09] hover:border-cyan-300/30 transition shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
                <div className="w-16 h-16 rounded-2xl bg-cyan-400/15 border border-cyan-300/20 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-black mb-5">{item.title}</h3>
                <p className="text-blue-100/70 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#eef6ff] text-[#061225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-blue-600 font-bold mb-4">Dlaczego my?</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Nowoczesna energia dla domu i biznesu
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              ["Niższe rachunki", "Fotowoltaika pozwala znacząco ograniczyć koszty energii elektrycznej i zwiększyć niezależność energetyczną."],
              ["Nowoczesne technologie", "Stosujemy nowoczesne komponenty PV oraz rozwiązania zwiększające wydajność i bezpieczeństwo instalacji."],
              ["Kompleksowa realizacja", "Doradzamy, projektujemy i wykonujemy instalacje fotowoltaiczne od początku do końca."],
              ["Wsparcie techniczne", "Pomagamy w doborze systemu, rozbudowie instalacji oraz dalszym rozwoju energetycznym budynku."],
            ].map(([title, text], i) => (
              <div key={title} className="bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-blue-100">
                <div className="text-blue-600 text-5xl font-black mb-8">0{i + 1}</div>
                <h3 className="text-2xl font-black mb-5">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="realizacje" className="py-28 bg-[#071225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[0.9fr_1.4fr] gap-12 items-center mb-14">
            <div>
              <p className="text-cyan-300 font-bold mb-4">Realizacje</p>
              <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
                Nowoczesne realizacje fotowoltaiczne
              </h2>
              <p className="text-blue-100/70 text-xl leading-relaxed">
                Projektujemy nowoczesne instalacje PV z dbałością o wydajność, estetykę wykonania oraz bezpieczeństwo użytkowania.
              </p>
            </div>

            <div className="rounded-[40px] overflow-hidden border border-white/10 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
              <img src="/realizacja-1.jpg" alt="Realizacja fotowoltaiki" className="w-full h-[520px] object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <img src="/realizacja-2.jpeg" alt="Instalacja fotowoltaiczna" className="w-full h-[420px] object-cover hover:scale-105 transition duration-700" />
            </div>

            <div className="rounded-[36px] overflow-hidden border border-white/10 shadow-[0_25px_70px_rgba(0,0,0,0.35)]">
              <img src="/realizacja-3.jpeg" alt="Montaż instalacji PV" className="w-full h-[420px] object-cover hover:scale-105 transition duration-700" />
            </div>
          </div>
        </div>
      </section>

      <section id="proces" className="py-28 bg-[#eef6ff] text-[#061225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-4xl mx-auto mb-16">
            <p className="text-blue-600 font-bold mb-4">Proces</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Od analizy do gotowej instalacji PV
            </h2>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              ["Analiza i konsultacja", "Analizujemy zużycie energii oraz potrzeby budynku i przygotowujemy wstępną koncepcję instalacji."],
              ["Projekt systemu", "Dobieramy moc instalacji, komponenty oraz opcjonalny magazyn energii."],
              ["Profesjonalny montaż", "Realizujemy montaż instalacji PV z dbałością o bezpieczeństwo i estetykę wykonania."],
              ["Wsparcie po realizacji", "Pozostajemy do dyspozycji również po zakończeniu montażu i uruchomieniu systemu."],
            ].map(([title, text], i) => (
              <div key={title} className="relative bg-white rounded-[32px] p-8 shadow-[0_20px_60px_rgba(15,23,42,0.08)] border border-blue-100">
                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center font-black text-xl mb-8">
                  {i + 1}
                </div>
                <h3 className="text-2xl font-black mb-5">{title}</h3>
                <p className="text-slate-600 leading-relaxed">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#071225]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-16">
            <p className="text-cyan-300 font-bold mb-4">Opinie klientów</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
              Zaufanie budowane jakością realizacji
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Profesjonalne doradztwo, sprawna realizacja i bardzo estetyczne wykonanie instalacji fotowoltaicznej.",
              "Świetny kontakt, szybki montaż i realna pomoc w doborze odpowiedniego systemu PV.",
              "Nowoczesne podejście, bardzo dobra organizacja pracy i wysoka jakość wykonania.",
            ].map((text) => (
              <div key={text} className="rounded-[32px] border border-white/10 bg-white/[0.06] backdrop-blur-xl p-8 shadow-[0_20px_70px_rgba(0,0,0,0.25)]">
                <div className="text-cyan-300 text-xl mb-6">★★★★★</div>
                <p className="text-blue-100/80 leading-relaxed mb-8">„{text}”</p>
                <div className="text-white font-bold">Klient z Wrocławia</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 bg-[#eef6ff] text-[#061225]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-blue-600 font-bold mb-4">FAQ</p>
            <h2 className="text-4xl md:text-6xl font-black tracking-[-2px]">Najczęstsze pytania</h2>
          </div>

          <div className="space-y-5">
            {[
              ["Czy fotowoltaika nadal się opłaca?", "Tak. Odpowiednio dobrana instalacja PV pozwala znacząco ograniczyć koszty energii elektrycznej."],
              ["Czy pomagacie dobrać moc instalacji?", "Tak. Analizujemy zużycie energii oraz potrzeby budynku i dobieramy odpowiedni system."],
              ["Czy można rozbudować instalację?", "W wielu przypadkach istnieje możliwość późniejszej rozbudowy instalacji lub dodania magazynu energii."],
              ["Czy wykonujecie instalacje dla firm?", "Tak. Realizujemy instalacje PV zarówno dla klientów indywidualnych, jak i biznesowych."],
            ].map(([q, a]) => (
              <div key={q} className="bg-white rounded-[28px] p-7 shadow-[0_15px_40px_rgba(15,23,42,0.06)] border border-blue-100">
                <h3 className="text-2xl font-black mb-3">{q}</h3>
                <p className="text-slate-600 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="kontakt" className="relative py-28 bg-[#050b18]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(34,211,238,0.20),transparent_35%)]" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-6xl font-black tracking-[-2px] mb-6">
            Nowoczesna energia zaczyna się od dobrze zaprojektowanej instalacji PV
          </h2>

          <p className="text-blue-100/70 text-xl mb-10">
            Skontaktuj się z nami i umów bezpłatną analizę oraz wycenę instalacji fotowoltaicznej.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-5">
            <a href="tel:+48730230919" className="bg-cyan-400 hover:bg-cyan-300 text-[#03101f] px-8 py-5 rounded-full font-black text-lg transition">
              📞 730 230 919
            </a>

            <a
              href="https://wa.me/48730230919?text=Dzień dobry,%20interesuje%20mnie%20fotowoltaika"
              target="_blank"
              className="bg-green-500 hover:bg-green-400 text-white px-8 py-5 rounded-full font-black text-lg transition"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#020817] border-t border-white/10 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-6 text-blue-100/60">
          <div>
            <div className="text-white font-black text-2xl mb-2">
              Gebrüder Peters Polska Sp. z o.o.
            </div>
            <p>Fotowoltaika Wrocław i okolice</p>
          </div>

          <div>
            <p>Telefon: 730 230 919</p>
            <p>Wrocław • Dolny Śląsk</p>
          </div>
        </div>
      </footer>

      <a href="tel:+48730230919" className="fixed bottom-6 right-6 z-50 bg-cyan-400 hover:bg-cyan-300 text-[#03101f] px-6 py-4 rounded-full font-black shadow-[0_20px_60px_rgba(34,211,238,0.35)] transition">
        📞 Zadzwoń
      </a>
    </main>
  );
}