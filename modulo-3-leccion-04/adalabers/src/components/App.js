import React from 'react';
import './App.scss';
import Weather from './Weather';
import Today from './Today';
import Tweet from './Tweet';
import ProfesList from './ProfesList';
import AdalabersList from "./AdalabersList";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.data = [
      { fullname: "Alej C", promo: "K", github: "Aleha20" },
      { fullname: "Alej S", promo: "K", github: "AlejandraSC" },
      { fullname: "Alicia C", promo: "K", github: "aliciacolom" },
      { fullname: "Almudena B", promo: "K", github: "almudenabr" },
      { fullname: "Ana C", promo: "K", github: "AnaCastrillo" },
      { fullname: "Ana G", promo: "K", github: "anaguerraabaroa" },
      { fullname: "Ana M", promo: "K", github: "anamartinezfernandez" },
      { fullname: "Ángela C", promo: "K", github: "chicano85" },
      { fullname: "Araceli L", promo: "K", github: "AraceliLobo" },
      { fullname: "Arantxa D", promo: "K", github: "ArantxaDR" },
      { fullname: "Belén M", promo: "K", github: "BMatillaVaras" },
      { fullname: "Celia M", promo: "K", github: "Celiamf" },
      { fullname: "Claudia P", promo: "K", github: "claudiapalazon" },
      { fullname: "Cristina G", promo: "K", github: "crisgarm" },
      { fullname: "Dayana R", despacho: 3021, email: "dayanarl@adalab.es" },
      { fullname: "Edurne V", promo: "K", github: "EdurneVila" },
      { fullname: "Eli D", promo: "K", github: "EleonoraDellamico" },
      { fullname: "Emma C", promo: "K", github: "emmacebada" },
      { fullname: "Estíbaliz B", promo: "K", github: "EstiBv" },
      { fullname: "Eva F", promo: "K", github: "evaferrerasbr" },
      { fullname: "Gemma P", promo: "K", github: "GemaPujalte" },
      { fullname: "Irene C", promo: "K", github: "irenecorreas" },
      { fullname: "Irene R", promo: "K", github: "IreneRuedaVega" },
      { fullname: "Itziar Z", promo: "K", github: "itziarZG" },
      { fullname: "Iván G", despacho: 3012, email: "ivangm@adalab.es" },
      { fullname: "Leire O", promo: "K", github: "leireomadina" },
      { fullname: "Lissandra M", promo: "K", github: "lissms" },
      { fullname: "Lorena M", promo: "K", github: "lorenamateo90" },
      { fullname: "Lucía M", promo: "K", github: "LuciaMezquida" },
      { fullname: "Marga M", promo: "K", github: "margamb" },
      { fullname: "Maribel G", promo: "K", github: "maribelgr" },
      { fullname: "Teresa J", promo: "K", github: "mteresajimenez" },
      { fullname: "Mari L", promo: "K", github: "MaribelLopezRomero" },
      { fullname: "Marina C", promo: "K", github: "marinacendon" },
      { fullname: "Marta R", promo: "K", github: "martreyz" },
      { fullname: "Miguel dM", despacho: 3030, email: "migueldm@adalab.es" },
      { fullname: "Milda G", promo: "K", github: "MildaGrabyte" },
      { fullname: "Mora P", promo: "K", github: "MoraPorthe" },
      { fullname: "Nuria D", promo: "K", github: "nuriadiazcandela" },
      { fullname: "Patricia P", promo: "K", github: "PatriciaPoveda" },
      { fullname: "Raquel G", promo: "K", github: "RaquelGarciaCaja" },
      { fullname: "Susana G", promo: "K", github: "SusanaGcode" },
      { fullname: "Yamira M", promo: "K", github: "ymartinguzman" },
      { fullname: "Yanira F", promo: "K", github: "yanirafr" },
    ];
  }

  render() {
    const today = new Date();  /* Date es una clase de JS estándar */
    const todayDay = today.getDate();
    const todayMonth = today.getMonth();
    /* const todayYear = today.getFullYear(); */

    const tweetInfo = {
      twitterAccount: "igarridoatwork",
      tweetMessage: "Vamos a por React!!!",
    };

    const profesoresList = ["Miguel", "Dayana", "Iván"];

    const titleTeachers = "Profesores";

    let queTiempoHaceHoy;
    if (Math.random() > 0.5) {
      queTiempoHaceHoy = "nuboso";
    }
    else {
      queTiempoHaceHoy = "soleado";
    }

    return (
      <div className="App">
        <header className="header">
          <h1 className="header__title">Componentes: Lista de Adalaber</h1>
        </header>
        <aside className="topBanner">
          <Weather text={queTiempoHaceHoy} />
          <Today day={todayDay} month={todayMonth+1} />
          <Tweet tweetData={tweetInfo} otraProp="prueba" />
          <ProfesList list={profesoresList} title={titleTeachers} />
        </aside>
        <main>
          <AdalabersList list={this.data} />
        </main>
      </div>
    );
  }
}

export default App;
