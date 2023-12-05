// Funzione per salvare il nome in localStorage
function salvaNome() {
    const nameInput = document.getElementById('nameInput').value;
    localStorage.setItem('nomeUtente', nameInput);
    mostraNomeSalvato();
  }
  
  // Funzione per rimuovere il nome salvato da localStorage
  function rimuoviNome() {
    localStorage.removeItem('nomeUtente');
    mostraNomeSalvato();
  }
  
  // Funzione per mostrare il nome salvato sopra l'input field
  function mostraNomeSalvato() {
    const savedNameDiv = document.getElementById('savedName');
    const nomeUtente = localStorage.getItem('nomeUtente');
    if (nomeUtente) {
      savedNameDiv.textContent = `Nome salvato: ${nomeUtente}`;
    } else {
      savedNameDiv.textContent = '';
    }
  }
  
  // Mostra il nome salvato quando la pagina viene caricata
  mostraNomeSalvato();






  function avviaContatore() {
    let seconds = 0;
    const counterSpan = document.getElementById('counter');
  
    const storedTime = sessionStorage.getItem('tempoTrascorso');
    if (storedTime) {
      seconds = parseInt(storedTime);
    }
  
    const interval = setInterval(() => {
      seconds++;
      counterSpan.textContent = seconds + ' secondi';
      sessionStorage.setItem('tempoTrascorso', seconds.toString());
    }, 1000);
  
    // Reset del contatore e sessionStorage solo quando la pagina viene chiusa
    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
      sessionStorage.removeItem('tempoTrascorso');
    });
  
    // Impostiamo un evento per la gestione dell'aggiornamento della pagina
    window.addEventListener('unload', () => {
      sessionStorage.setItem('tempoTrascorso', seconds.toString());
    });
  }
  
  window.onload = avviaContatore;
  