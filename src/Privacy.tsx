const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-[#101418] text-gray-200 px-6 py-12 md:px-20 font-sans leading-relaxed">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-6">
          Politica de Confidențialitate
        </h1>

        <p className="text-sm text-gray-400 mb-12">
          Ultima actualizare: 8 mai 2025
        </p>

        <section className="space-y-6 text-base">
          <p>
            Această politică explică modul în care colectăm, utilizăm și
            protejăm datele tale personale atunci când interacționezi cu site-ul
            nostru.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            1. Cine suntem
          </h2>
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
            2. Ce date colectăm
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Date de identificare:</strong> Nume și prenume, adresă de
              email – colectate prin formularele de contact sau înscriere.
            </li>
            <li>
              <strong>Date tehnice:</strong> Adresa IP, tipul browserului,
              sistemul de operare, paginile vizitate – colectate automat prin
              Google Analytics și Cloudflare.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">
            3. Cum folosim datele tale
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <strong>Google Analytics:</strong> Pentru a înțelege
              comportamentul utilizatorilor pe site și a îmbunătăți experiența
              acestora.
            </li>
            <li>
              <strong>Cloudflare:</strong> Pentru protecția site-ului împotriva
              spam-ului și atacurilor DDoS.
            </li>
            <li>
              <strong>Formulare:</strong> Pentru a gestiona înscrierile în club
              și a comunica cu participanții.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-white mt-8">
            4. Temeiul legal al prelucrării
          </h2>
          <p>
            Prelucrăm datele tale personale în baza consimțământului tău
            explicit, conform Art. 6 alin. (1) lit. a) din Regulamentul (UE)
            2016/679 (GDPR).
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            5. Drepturile tale
          </h2>
          <p>Conform GDPR, ai următoarele drepturi:</p>
          <ul className="list-disc list-inside">
            <li>Dreptul de acces la datele tale personale.</li>
            <li>Dreptul la rectificarea datelor inexacte sau incomplete.</li>
            <li>Dreptul la ștergerea datelor („dreptul de a fi uitat”).</li>
            <li>Dreptul la restricționarea prelucrării.</li>
            <li>Dreptul la portabilitatea datelor.</li>
            <li>Dreptul de a te opune prelucrării.</li>
            <li>
              Dreptul de a depune o plângere la Autoritatea Națională de
              Supraveghere a Prelucrării Datelor cu Caracter Personal (ANSPDCP).
            </li>
          </ul>

          <p>
            Pentru a-ți exercita aceste drepturi, te rugăm să consulți secțiunea
            9 a acestei politici.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            6. Stocarea și securitatea datelor
          </h2>
          <p>
            Datele tale sunt stocate în condiții de siguranță, utilizând măsuri
            tehnice și organizatorice adecvate pentru a preveni accesul
            neautorizat, pierderea sau divulgarea acestora.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            7. Transferul datelor
          </h2>
          <p>
            Datele tale pot fi transferate către Statele Unite ale Americii,
            unde sunt stocate de The Hack Foundation. Acest transfer se
            realizează în conformitate cu prevederile GDPR privind transferul
            internațional de date.
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">
            8. Cookie-uri
          </h2>
          <p>
            Utilizăm cookie-uri pentru a îmbunătăți experiența ta pe site.
            Pentru detalii, te rugăm să consulți{" "}
            <a
              href="/cookie"
              className="text-[#00e0ff] underline hover:text-cyan-400"
            >
              Politica de Cookie-uri
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold text-white mt-8">9. Contact</h2>
          <p>
            Pentru orice întrebări sau solicitări legate de datele tale
            personale, ne poți contacta la adresa de email:{" "}
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

export default PrivacyPolicy;
