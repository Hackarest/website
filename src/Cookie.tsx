const CookiePolicy = () => {
  return (
    <div className="min-h-screen bg-[#101418] text-gray-200 px-6 py-12 md:px-20 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Politica de Cookie-uri
        </h1>

        <p className="text-sm text-gray-400 mb-12">
          Ultima actualizare: 8 mai 2025
        </p>

        <section className="space-y-6 text-base">
          <p>
            Această politică explică modul în care utilizăm cookie-urile pe
            site-ul nostru și cum poți să le controlezi.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            1. Ce sunt cookie-urile?
          </h2>
          <p>
            Cookie-urile sunt fișiere mici care sunt stocate pe dispozitivul tău
            atunci când vizitezi un site web. Aceste fișiere ajută site-ul să
            îți amintească preferințele și să îmbunătățească experiența de
            navigare.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            2. Ce cookie-uri folosim
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Cookie-uri esențiale:</strong> Acestea sunt necesare
              pentru funcționarea site-ului nostru.
            </li>
            <li>
              <strong>Cookie-uri de performanță:</strong> Folosim aceste
              cookie-uri pentru a analiza modul în care vizitatorii
              interacționează cu site-ul și pentru a îmbunătăți experiența
              utilizatorului.
            </li>
            <li>
              <strong>Cookie-uri de funcționalitate:</strong> Aceste cookie-uri
              sunt folosite pentru a reține alegerile tale (de exemplu, limba
              selectată).
            </li>
            <li>
              <strong>Cookie-uri de publicitate:</strong> Sunt folosite pentru a
              îți oferi anunțuri relevante pe baza activității tale de navigare.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">
            3. Cum folosim cookie-urile
          </h2>
          <p>
            Folosim cookie-urile pentru a îmbunătăți performanța site-ului
            nostru, pentru a analiza traficul și pentru a personaliza conținutul
            pe care ți-l oferim.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            4. Controlul cookie-urilor
          </h2>
          <p>
            Poți controla setările cookie-urilor direct din browser-ul tău. De
            asemenea, poți alege să accepti sau să refuzi cookie-urile atunci
            când vizitezi site-ul nostru. Te rugăm să consulți secțiunea de
            ajutor a browser-ului tău pentru mai multe informații despre cum să
            gestionezi preferințele de cookie-uri.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            5. Drepturile tale
          </h2>
          <p>
            Conform GDPR, ai dreptul de a-ți retrage consimțământul privind
            utilizarea cookie-urilor în orice moment, fără a afecta legalitatea
            prelucrării efectuate până la retragerea consimțământului.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            6. Schimbări ale politicii de cookie-uri
          </h2>
          <p>
            Vom actualiza această politică periodic. Orice modificare va fi
            publicată pe această pagină cu o dată de actualizare
            corespunzătoare.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">7. Contact</h2>
          <p>
            Dacă ai întrebări sau nelămuriri referitoare la politica noastră de
            cookie-uri, te rugăm să ne contactezi la adresa de email:{" "}
            <a
              href="mailto:contact@hackarest.ro"
              className="text-[#00e0ff] underline hover:text-cyan-400"
            >
              contact@hackarest.ro
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default CookiePolicy;
