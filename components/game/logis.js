// Laskee pistemäärän käyttäjän vastausten ja harrastuksen välillä. Piste annetaan jos vastaus täsmää, tai jompikumpi on "neutral".
function score(answers, hobby) {
  let s = 0;
  for (let i = 0; i < answers.length; i++) {
    const a = answers[i];
    const h = hobby.attrs[i];
    if (a === h || a === "neutral" || h === "neutral")
         s++;
  }
  return s;
}

// Etsii parhaiten sopivan harrastuksen vertaamalla vastauksia kaikkiin harrastuksiin. Jos useampi harrastus saa saman pistemäärän arvotaan yksi satunnaisesti.
export function findBestHobby(answers, hobbies) {
  let best = [];
  let bestScore = -1;

  for (const h of hobbies) {
    const s = score(answers, h);
    if (s > bestScore) {
      best = [h];
      bestScore = s;
    } else if (s === bestScore) {
      best.push(h);
    }
  }

  return best[Math.floor(Math.random() * best.length)];
}
