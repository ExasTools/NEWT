import './style.css'

const app = document.querySelector('#app')

function showHome() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      
      <section class="tool-card">
        <p> It should be selectable from the header </p>
      </section>
    </main>
    `
  hookHeaderButtons()
}

// felt like the header should go here to keep it out of the way for the main code

function displayHeader() {
  return `
  <main class="app-shell">
    <h1> Exa's Writing Tools </h1>
    <section class="header-section">
      <button id="home-button" class="nav-button">Home</button>
      <button id="vault-button" class="nav-button">Lore Vault</button>
      <button id="writing-button" class="nav-button">Writing Desk</button>
      <button id="settings-button" class="nav-button">Settings</button>
    </section>
  `
}

function hookHeaderButtons() {
  // because displayHeader() doesn't return any actual javascript- only HTML
  // this will hook the headers so the buttons can actually be used. 
  document.querySelector('#home-button').addEventListener('click', showHome)
  document.querySelector('#vault-button').addEventListener('click', showLoreVault)
  document.querySelector('#writing-button').addEventListener('click', showWritingDesk)
  document.querySelector('#settings-button').addEventListener('click', showSettings)
}

function showLoreVault() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <h1>Lorem 1</h1>
      <p class="subtitle">This is but a test of Lorem 1.</p>

    </main>
    `
    hookHeaderButtons()
}

function showWritingDesk() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <h1>Lorem 2</h1>
      <p class="subtitle">Second test of Lorem 2. </p>

    </main>
  `

  hookHeaderButtons()
}

function showSettings() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <br>
      <p class="subtitle">it works too... </p>

    </main>
  `
  hookHeaderButtons()
}

showHome()