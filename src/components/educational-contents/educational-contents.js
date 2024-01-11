import React from "react";
import "./educational-contents.scss";

export const EducationalContents = (props) => {
  return <>{element[props.index]}</>;
};

export const element = [
  /* 1 */
  <div className="educational-messages">
    <h4>PIZZA SOSPESA</h4>
    <p>
      <b>
        A Torino arriva la pizza sospesa per i medici e gli infermieri degli
        ospedali Amedeo di Savoia e Molinette.
        </b>{" "}
      L’iniziativa nasce da Carlo Ricatto che già un paio di giorni fa,
      chiudendo temporaneamente il suo locale per far fronte all’emergenza
      coronavirus, aveva donato al presidio di corso Svizzera pizze e mozzarelle
      di bufala.{" "}
      <b>
        Un gesto di solidarietà e contro lo spreco che ha raccolto l’entusiasmo
        degli operatori sanitari:
      </b>{" "}
      “La pizza è la cosa più normale che ci sia e quando le abbiamo consegnate
      all’ospedale abbiamo visto infermiere commuoversi. Per questo abbiamo
      deciso di non lasciare solo chi da settimane sta lottando per noi e con
      noi:
      <b>
        la pizza sospesa è un segnale di aiuto concreto non solo grazie alle
        donazioni, ma è anche un supporto emotivo che aiuterà a sorridere chi
        sta lavorando con turni estremi e senza sosta”.
      </b>
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.specchiodeitempi.org/pizza-sospesa-per-medici-e-infermieri-con-specchio/"
          target="blank"
        >
          Fonte: Specchio dei Tempi
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.specchiodeitempi.org/pizza-sospesa-per-medici-e-infermieri-con-specchio/"
        target="blank"
      >
        Fonte: Specchio dei Tempi
      </a>
    </div>
  </div>,
  /* 2 */
  <div className="educational-messages">
    <h4>
      TUTTO IL SITO DE LA STAMPA IN PROMOZIONE A 1 EURO AL MESE PER 3 MESI.
    </h4>
    <p>
      <b>
        Essere informati, in questo momento, è ancora più importante. È una
        necessità.
      </b>{" "}
      Con l’avvio del progetto Digital first il sito de La Stampa è ancora più
      aggiornato e ricco di approfondimenti, reportage, video. Da oggi è
      possibile abbonarsi con una nuova promozione:{" "}
      <u>un solo euro al mese per tre mesi</u> e la possibilità di accedere a
      tutti gli articoli della sezione TopNews e quelli degli inserti
      Tuttolibri, Tuttosalute, Tuttoscienze, Tuttigusti, Tuttosoldi. Scopri
      tutti i dettagli della promozione cliccando il link qui sotto e rimani
      informato al meglio.
      <div className="educational-messages-sources d-sm-none">
        <a href="https://bit.ly/2RuVJpN" target="blank">
          Fonte: La Stampa
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a href="https://bit.ly/2RuVJpN" target="blank">
        Fonte: La Stampa
      </a>
    </div>
  </div>,
  /* 3 */
  <div className="educational-messages">
    <h4>5500 ANZIANI RICEVONO LA SPESA A CASA GRAZIE A SPECCHIO</h4>
    <p>
      <b>
        La fondazione Specchio dei tempi porta a 5.500 le spese da donare ad
        altrettanti anziani torinesi.
      </b>{" "}
      Le spese acquistate (che hanno ciascuna un valore di 40 euro e che
      comprendono anche prodotti freschissimi) sono in distribuzione già da tre
      settimane e continuano ad essere richieste in maniera sempre crescente.{" "}
      <b>
        Gli anziani apprezzano soprattutto la modalità di consegna del dono dei
        lettori de La Stampa: gli viene portato sullo zerbino e senza rischi di
        contatti.
      </b>{" "}
      Leggi la storia completa seguendo il link qui sotto.
      <div className="educational-messages-sources d-sm-none">
        <a href="https://bit.ly/3a1cQWO" target="blank">
          Fonte: Specchio dei Tempi
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a href="https://bit.ly/3a1cQWO" target="blank">
        Fonte: Specchio dei Tempi
      </a>
    </div>
  </div>,
  /* 4 */
  <div className="educational-messages">
    <h4>ARIA PULITA</h4>
    <p>
      In Cina, i satelliti della Nasa certificano un calo significativo di
      inquinamento da diossido di azoto e un generale miglioramento dell’aria
      dovuto alle restrizioni contro l’epidemia. E anche a Milano e in
      Lombardia, le aree più colpite dal contagio, i profumi della primavera
      sovrastano in modo insolito il tradizionale fetore dell’aria. Le
      centraline dell’Arpa, l’azienda che ‘misura’ lo smog, sbalordiscono nel
      registrare di continuo
      <b> concentrazioni di polveri sottili molto al di sotto del solito</b>,
      dopo uno degli inverni più inquinati di sempre.
      <b>
        {" "}
        Che lo smart working sia la soluzione per ripristinare la qualità delle
        città in cui viviamo e rallentare gli effetti del cambiamento climatico?
      </b>
      Possibilità da tenere bene a mente per il futuro :)
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
          target="blank"
        >
          Fonte: AGI
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
        target="blank"
      >
        Fonte: AGI
      </a>
    </div>
  </div>,
  /* 5 */
  <div className="educational-messages">
    <h4>LAVORARE DA CASA</h4>
    <p>
      “<b>Nei giorni del coronavirus</b> - ha osservato il sociologo Domenico De
      Masi -{" "}
      <b>
        lavorare da casa è un angolo di salvezza e ci si accorgerà che, da casa,
        si potranno fare più cose in meno tempo”
      </b>
      .La viceministra dell’Economia, Laura Castelli, ha auspicato che questa
      soluzione adottata per limitare il contagio, “venga resa un domani forma
      stabile, coi molti benefici che porta ai cittadini lavoratori: risparmi in
      termini economici, ambientali, miglioramento della qualità della vita”.
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
          target="blank"
        >
          Fonte: AGI
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
        target="blank"
      >
        Fonte: AGI
      </a>
    </div>
  </div>,
  /* 6 */
  <div className="educational-messages ">
    <h4>RISCOPERTA DELLE RELAZIONI E DEGLI AFFETTI</h4>
    <p>
      Vivere insieme è un’arte, ha suggerito papa Francesco ai fidanzati. Di
      certo questa emergenza senza precedenti ci fa diventare tutti artisti
      della vita di coppia. «Avere più tempo può essere l’occasione per fare
      qualcosa di speciale. Una cena a lume di candela quando i bambini dormono,
      leggere insieme un libro per poi commentarlo». Decidere di vedere la
      convivenza protratta come il momento ideale per fare tutte quelle cose che
      di solito non si ha il tempo di fare. «Compreso spostare un mobile o
      riordinare le fotografia di famiglia che spesso sono ammassate in una
      scatola: è un modo per ripercorrere la storia della coppia, è importante
      avere una memoria».
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.corriere.it/cronache/20_marzo_11/coronavirus-l-effetto-coppie-convivenza-forzata-casa-3363181c-6390-11ea-9cf4-1c175ff3bb7c.shtml"
          target="blank"
        >
          Fonte: Corriere della Sera
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.corriere.it/cronache/20_marzo_11/coronavirus-l-effetto-coppie-convivenza-forzata-casa-3363181c-6390-11ea-9cf4-1c175ff3bb7c.shtml"
        target="blank"
      >
        Fonte: Corriere della Sera
      </a>
    </div>
  </div>,
  /* 7 */
  <div className="educational-messages">
    <h4>OTTO ASPETTI POSITIVI DEL PANICO DA CORONAVIRUS</h4>
    <p>
      Simpatica illustrazione realizzata dall’illustratore Stefano Tartarotti
      per “Il Post” che aiuta a ritrovare il sorriso anche in questa situazione.
      <b>In quanti di questi 8 aspetti positivi ti ritrovi?</b> Segui il link
      qui in basso e scoprilo subito ;)
      <br />
      <img
        height="200"
        src="https://www.ilpost.it/wp-content/uploads/2020/03/lato-positivo1a-1.jpg"
      ></img>
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.ilpost.it/stefanotartarotti/2020/03/03/8-aspetti-positivi-del-panico-da-coronavirus/"
          target="blank"
        >
          Fonte: Il Post
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.ilpost.it/stefanotartarotti/2020/03/03/8-aspetti-positivi-del-panico-da-coronavirus/"
        target="blank"
      >
        Fonte: Il Post
      </a>
    </div>
  </div>,
  /* 8 */
  <div className="educational-messages">
    <h4>RESTANDO A CASA. I CONSIGLI DI REPUBBLICA.</h4>
    <p>
      Siete annoiati? Avete finito le idee per come intrattenervi durante questo
      periodo? Niente paura, fortunatamente{" "}
      <b>
        “La Repubblica” ha predisposto una sezione piena di contenuti
        interessanti che potranno stimolarvi e farvi scoprire qualcosa di nuovo
        ;)
      </b>
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.repubblica.it/dossier/spettacoli/restando-a-casa?ref=RHPPTP-BH-I251197187-C12-P8-S1.12-T1"
          target="blank"
        >
          Fonte: La Repubblica
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.repubblica.it/dossier/spettacoli/restando-a-casa?ref=RHPPTP-BH-I251197187-C12-P8-S1.12-T1"
        target="blank"
      >
        Fonte: La Repubblica
      </a>
    </div>
  </div>,
  /* 9 */
  <div className="educational-messages">
    <h4>WIRED, COPIE DIGITALI GRATIS PER I PROSSIMI TRE MESI</h4>
    <p>
      Per i prossimi tre mesi,{" "}
      <b>
        tutti in Italia potranno scaricare gratuitamente le copie digitali delle
        testate Condé Nast: Wired, Vanity Fair, Vogue, GQ, AD, La Cucina
        Italiana e Condé Nast Traveller.
      </b>{" "}
      Un’iniziativa di «solidarietà digitale» messa in atto dal gruppo diretto
      da Fedele Usai per essere vicini a lettori e utenti in questo momento
      difficile, intrattenerli e informarli nei giorni dell’isolamento, e
      soprattutto dare loro un motivo in più per restare in casa. <br />
      Vuoi scoprire come scaricare le tue copie digitali gratuite? Segui il link
      qui sotto ;)
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.wired.it/attualita/media/2020/03/12/wired-copie-digitali-gratis/"
          target="blank"
        >
          Fonte: Wired
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.wired.it/attualita/media/2020/03/12/wired-copie-digitali-gratis/"
        target="blank"
      >
        Fonte: Wired
      </a>
    </div>
  </div>,
  /* 10 */
  <div className="educational-messages">
    <h4>LE APP PER RITROVARSI VICINI MA LONTANI</h4>
    <p>
      Una festa in casa, ma virtuale.{" "}
      <b>
        Per ritrovarsi insieme ai tempi del Coronavirus c’è una app che si
        chiama appunto Houseparty e che ogni sera raduna intorno al pc gruppi
        anche di 10 persone.
      </b>{" "}
      Nel primo weekend dopo la stretta di vite gruppi di amici, fidanzati a
      distanza e single si organizzano per vincere i momenti di noia e
      solitudine. <br />
      Leggi l’articolo completo cliccando sul link qui sotto e{" "}
      <b>
        scaricati l’app Houseparty, se non l’hai ancora fatto: ci sono molti
        giochi disponibili e il divertimento è assicurato!
      </b>
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.corriere.it/moda/20_marzo_14/coronavirus-aperitivi-cene-virtuali-app-ritrovarsi-vicini-ma-lontani-e0147d82-65ff-11ea-a287-bbde7409af03.shtml"
          target="blank"
        >
          Fonte: Il Corriere della Sera
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.corriere.it/moda/20_marzo_14/coronavirus-aperitivi-cene-virtuali-app-ritrovarsi-vicini-ma-lontani-e0147d82-65ff-11ea-a287-bbde7409af03.shtml"
        target="blank"
      >
        Fonte: Il Corriere della Sera
      </a>
    </div>
  </div>,
  /* 11 */
  <div className="educational-messages">
    <h4>LA GIUSTIZIA TELEMATICA</h4>
    <p>
      Eliminare gli immani faldoni che popolano i tribunali, salvare la
      giustizia da un accumulo di scartoffie che la rendono ancora più
      ingarbugliata di quella che é. Un tentativo che si porta avanti da anni,
      con alterne fortuna e tante resistenze, anche da parte dei magistrati. E
      ora, con l’impellenza di evitare contatti umani, finalmente il ‘via
      libera’.{" "}
      <b>
        In tutti i palazzi di giustizia italiani toccati dall’emergenza sta
        andando così: la carta improvvisamente non è più necessaria.
      </b>{" "}
      A dimostrazione che prima non c’era la volontà di farne a meno.
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
          target="blank"
        >
          Fonte: AGI
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
        target="blank"
      >
        Fonte: AGI
      </a>
    </div>
  </div>,
  /* 12 */
  <div className="educational-messages">
    <h4>CONSAPEVOLI DELLA FRAGILITA'</h4>
    <p>
      Abbiamo trascorso notti bulimiche a gustarci serie come ‘The Walking Dead’
      dove l’umanità viene risucchiata dall’epidemia per lasciare spazio a
      sceriffi eroi. Ora che ci siamo dentro, con prospettive assai meno
      catastrofiche, tremiamo di fronte alla nostra riscoperta finitezza. “C’era
      questa idea - considera il sociologo dell’Università Statale di Milano,
      Paolo Natale - che il mondo seguisse un costante processo verso la quasi
      immortalità. A farlo pensare la fiducia nella medicina che fa passi da
      gigante, l’età media che si alza, le malattie che si sconfiggono, oltre
      alla generale rimozione del concetto di morte. Ora ci rendiamo conto che
      non è così scontato, basta un elemento imperscrutabile come un virus a
      farci traballare.{" "}
      <b>
        Questo ci deve far riflettere anche rispetto ai mali che potrebbero
        arrivare in futuro per lo scarso rispetto verso la natura.
      </b>
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
          target="blank"
        >
          Fonte: AGI
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
        target="blank"
      >
        Fonte: AGI
      </a>
    </div>
  </div>,
  /* 13 */
  <div className="educational-messages">
    <h4> DUE SITI PER SAPERE QUANTA FILA C’E’ FUORI DAI SUPERMERCATI</h4>
    <p>
      Andare a fare la spesa durante il periodo d’isolamento per il coronavirus
      vuol dire correre il rischio di passare lunghi periodi di attesa in fila
      davanti all’ingresso del supermercato.{" "}
      <b>
        Fortunatamente ci sono dei sistemi per monitorare i tempi d’attesa alle
        porte dei superstore.
      </b>{" "}
      Filaindiana.it stima l'attesa in coda fuori dai negozi di Milano e
      Lombardia. Anche Google maps offre un utile servizio per pianificare gli
      acquisti. <br />
      Leggi l’articolo completo su Wired se sei interessato ;)
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.wired.it/internet/web/2020/03/20/supermercati-fila-indiana/"
          target="blank"
        >
          Fonte: Wired
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.wired.it/internet/web/2020/03/20/supermercati-fila-indiana/"
        target="blank"
      >
        Fonte: Wired
      </a>
    </div>
  </div>,
  /* 14 */
  <div className="educational-messages">
    <h4> LA RISCOPERTA DEL CORPO</h4>
    <p>
      L’ordine digitale ha comportato una progressiva scomparsa del corpo, come
      se fosse ridotto a un dito con cui pigiare tasti. Ed ecco che il
      coronavirus ci ricorda due cose: che siano fatti prima di carne e poi di
      password e che dobbiamo recuperare le antiche regole dei nonni, come
      lavarsi le mani, non starnutire in faccia alle persone e tossire
      nell'incavo del gomito.{" "}
      <b>
        L’impossibilità di poterci abbracciare e baciare, addirittura sancita
        dalle istituzioni, sottolinea quanto sia decisivo poterlo fare proprio
        perché ora non possiamo più.
      </b>
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
          target="blank"
        >
          Fonte: AGI
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.agi.it/cronaca/news/2020-03-07/coronavirus-smart-working-cose-buone-7358530/"
        target="blank"
      >
        Fonte: AGI
      </a>
    </div>
  </div>,
  /* 15 */
  <div className="educational-messages">
    <h4>UN FANTACALCIO PER RACCOGLIERE FONDI CONTRO IL CORONAVIRUS</h4>
    <p>
      Per una volta i volatili fantamilioni si fanno euro concreti e l’acquisto
      del tutto virtuale di Cr7 diventa tangibile occasione per fare del bene.
      Tra le tante gocce che fanno il mare della generosità degli Italiani ci
      sono quelle delle leghe del Fantacalcio,
      <b>
        gli esperti del pallone che, orfani della serie A, hanno deciso di
        indirizzare il montepremi dell’anno per acquistare macchinari, materiali
        di consumo o dispositivi di protezione individuale.
      </b>{" "}
      Un altro piccolo grande gesto di solidarietà che può fare la differenza in
      questa emergenza, leggi la storia completa seguendo il link qui sotto.
      <div className="educational-messages-sources d-sm-none">
        <a
          href="https://www.specchiodeitempi.org/ll-fantacalcio-dona-i-suoi-premi-vogliamo-battere-il-virus/"
          target="blank"
        >
          Fonte: Specchio dei Tempi
        </a>
      </div>
    </p>
    <div className="educational-messages-sources d-none d-sm-block">
      <a
        href="https://www.specchiodeitempi.org/ll-fantacalcio-dona-i-suoi-premi-vogliamo-battere-il-virus/"
        target="blank"
      >
        Fonte: Specchio dei Tempi
      </a>
    </div>
  </div>,
];
