// Laskee pistemäärän käyttäjän vastausten ja harrastuksen välillä.
function score(answers, hobby) {
  let s = 0;
  for (let i = 0; i < answers.length; i++) {
    const a = answers[i]; // Käyttäjän vastaus
    const h = hobby.attrs[i]; // Harrastuksen ominaisuus

    if (a === "neutral") {
      // Jos käyttäjä valitsee "ei olennaista", harrastuksen arvolla ei ole väliä (+1 piste)
      s += 1;
    } else if (a === h) {
      // Identtinen käyttäjän valinnan kanssa (+3 pistettä)
      s += 3;
    } else if (h === "neutral") {
      // Harrastus on neutraali jonkin attribuutin suhteen, vaikka käyttäjällä on mielipide
      s += 2;
    } else {
      // Käyttäjä valitsi A, harrastus on B (tai päinvastoin)
      // Vähennetään pisteitä rajusti, jotta tätä ei suositella
      s -= 10;
    }
  }
  return s;
}

// Etsii parhaiten sopivan harrastuksen vertaamalla vastauksia kaikkiin harrastuksiin. 
// Jos useampi harrastus saa saman pistemäärän arvotaan yksi satunnaisesti.
export function findBestHobby(answers, hobbies) {
  let best = [];
  let bestScore = -Infinity; // Aloitetaan mahdollisimman alhaalta

  for (const h of hobbies) {
    const s = score(answers, h);
    if (s > bestScore) {
      best = [h];
      bestScore = s;
    } else if (s === bestScore) {
      best.push(h);
    }
  }

  // Jos useampi harrastus on yhtä hyvä, arvotaan yksi
  return best[Math.floor(Math.random() * best.length)];
}