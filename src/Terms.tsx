const Terms = () => {
  return (
    <div className="min-h-screen bg-[#101418] text-gray-200 px-6 py-12 md:px-20 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Termeni și Condiții
        </h1>

        <p className="text-sm text-gray-400 mb-12">
          Ultima actualizare: 8 mai 2025
        </p>

        <section className="space-y-6 text-base">
          <p>
            Hackarest este un club de programare destinat elevilor de liceu din
            România. Acest proiect este sponsorizat fiscal de{" "}
            <a
              href="https://hackclub.com/sponsor/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00e0ff] underline hover:text-cyan-400"
            >
              The Hack Foundation
            </a>
            , o organizație nonprofit 501(c)(3) din Statele Unite, cu EIN
            81-2908499.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            1. Statutul legal al Hackarest
          </h2>
          <p>
            Hackarest nu este o entitate juridică proprie. Toate activitățile
            financiare, cum ar fi donații și sponsorizări, sunt gestionate legal
            și fiscal prin The Hack Foundation, conform modelului de
            sponsorizare fiscală.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            2. Utilizarea site-ului
          </h2>
          <p>
            Conținutul publicat pe acest site este oferit exclusiv în scop
            educațional și informativ. Hackarest își rezervă dreptul de a
            modifica informațiile fără notificare prealabilă.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            3. Confidențialitate și colectarea datelor
          </h2>
          <p>
            Colectăm date minime (precum nume și email) prin formulare de
            contact sau înscriere. Detaliile despre cum sunt colectate,
            utilizate și protejate aceste date se regăsesc în pagina noastră de{" "}
            <a
              href="/privacy"
              className="text-[#00e0ff] underline hover:text-cyan-400"
            >
              Politică de Confidențialitate
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            4. Limitarea răspunderii
          </h2>
          <p>
            Informațiile oferite prin acest site sunt furnizate „ca atare”, fără
            garanții explicite sau implicite. Hackarest și The Hack Foundation
            nu pot fi făcuți responsabili pentru acțiuni luate în baza acestora.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            5. Modificări
          </h2>
          <p>
            Ne rezervăm dreptul de a actualiza acești termeni în orice moment.
            Este responsabilitatea utilizatorului să verifice periodic această
            pagină.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            6. Contact și transparență
          </h2>
          <p>
            Pentru întrebări legate de Hackarest, ne poți scrie la adresa
            menționată în pagina de contact. Pentru informații complete despre
            transparența financiară a sponsorului nostru fiscal, vizitează{" "}
            <a
              href="https://hackclub.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#00e0ff] underline hover:text-cyan-400"
            >
              hackclub.com
            </a>
            .
          </p>
        </section>
      </div>
    </div>
  );
};

export default Terms;
