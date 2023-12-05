// Salvare il nome
function salvaNome() {
    const nameInput = document.getElementById('nameInput').value;
    localStorage.setItem('nomeUtente', nameInput);
    mostraNomeSalvato();
  }
  
  // Rimuovere il nome 
  function rimuoviNome() {
    localStorage.removeItem('nomeUtente');
    mostraNomeSalvato();
  }
  
  // Mostra il nome
  function mostraNomeSalvato() {
    const savedNameDiv = document.getElementById('savedName');
    const nomeUtente = localStorage.getItem('nomeUtente');
    if (nomeUtente) {
      savedNameDiv.textContent = `Nome salvato: ${nomeUtente}`;
    } else {
      savedNameDiv.textContent = '';
    }
  }
  
  
  mostraNomeSalvato();


  
  // Esercizio 2


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
  
    // Reset del contatore
    window.addEventListener('beforeunload', () => {
      clearInterval(interval);
      sessionStorage.removeItem('tempoTrascorso');
    });
  
    // Caricamento pagina 
    window.addEventListener('unload', () => {
      sessionStorage.setItem('tempoTrascorso', seconds.toString());
    });
  }
  
  window.onload = avviaContatore;
  