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
  document.querySelector('#start-lore').addEventListener('click', loremOne)
  document.querySelector('#lorem2').addEventListener('click', loremTwo)
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
  document.querySelector('#home-button').addEventListener('click', showHome)
  document.querySelector('#vault-button').addEventListener('click', loremOne)
  document.querySelector('#writing-button').addEventListener('click', loremTwo)
  document.querySelector('#settings-button').addEventListener('click', loremThree)
}

function loremOne() {
  app.innerHTML = `
    <main class="app-shell">
      <h1>Lorem 1</h1>
      <p class="subtitle">This is but a test of Lorem 1.</p>

      <section class="tool-card">
        <button id="back-home">Home</button>
      </section>
    </main>
    `
    document.querySelector('#back-home').addEventListener('click', showHome)
}

function loremTwo() {
  app.innerHTML = `
    <main class="app-shell">
      <h1>Lorem 2</h1>
      <p class="subtitle">Second test of Lorem 2. </p>

      <section class="tool-card">
        <button id="back-home">Home</button>
      </section>
    </main>
  `

  document.querySelector('#back-home').addEventListener('click', showHome)
}

function loremThree() {
  app.innerHTML = `
    <main class="app-shell">
      <p class="subtitle">it works too... </p>

      <section class="tool-card">
        <button id="back-home">Home</button>
      </section>
    </main>
  `
  document.querySelector('#back-home').addEventListener('click', showHome)
}

showHome()