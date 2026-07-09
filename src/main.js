import './style.css'

const app = document.querySelector('#app')
const ver = "0.0.1"

// Define arrays (empty drawer)
let Characters = []
// I've refrained from adding ALL the drawers, I get scope creep like a mofo


function showHome() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      
      <section class="tool-card">
        <p> Currently, the only features available is a very rudamentary character input screen. More to come... </p>
        <p> That said, to those that read this- thank you for checking out what I'm working on! I really appreciate it more than I can convey through text </p>
        
      ${displayFooter()}
    </main>
    
    `
  hookHeaderButtons()
}

// felt like the header should go here to keep it out of the way for the main code

function displayHeader() {
  return `
    <h1> Exa's Writing Tools </h1>
    <section class="header-section">
      <button id="home-button" class="nav-button">Home</button>
      <button id="vault-button" class="nav-button">Lore Vault</button>
      <button id="time-button" class="nav-button">Timeline</button>
      <button id="writing-button" class="nav-button">Writing Desk</button>
      <button id="settings-button" class="nav-button">Settings</button>
      <button id="devlog-button" class="nav-button">Dev Log</button>
    </section>
  `
}

function displayLoreHeader() {
  return `
    <h1> The Lore Vault </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button id="char-button" class="nav-button">Characters</button>
        <button id="locs-button" class="nav-button">Places</button>
        <button id="events-button" class="nav-button">Events</button>
        <button id="tags-button" class="nav-button">Tags</button>
        <button id="religion-button" class="nav-button">Religions</button>
        <button id="gods-button" class="nav-button">Gods/Higher Powers</button>
        <button id="nations-button" class="nav-button">Nations</button>
        <button id="factions-button" class="nav-button">Factions</button>
      </section>
  `
}

function displayTimeHeader() {
  return `
    <h1> The Timeline </h1>
      <section class="header-section">
        <button id="home-button" class="nav-button">Home</button>
        <button class="nav-button">Placeholder</button>
        <button class="nav-button">Placeholder</button>
        <button class="nav-button">Placeholder</button>
      </section>
  `
}

function displayFooter() {
  return `
    <section class="footer-card"><p>Exa's Writing Tools build-${ver}</p></section>
  `
}

function hookHeaderButtons() {
  // because displayHeader() doesn't return any actual javascript- only HTML
  // this will hook the headers so the buttons can actually be used. 
  document.querySelector('#home-button').addEventListener('click', showHome)
  document.querySelector('#vault-button').addEventListener('click', showLoreVault)
  document.querySelector('#writing-button').addEventListener('click', showWritingDesk)
  document.querySelector('#settings-button').addEventListener('click', showSettings)
  document.querySelector("#time-button").addEventListener('click', lvTimeline)
  document.querySelector("#devlog-button").addEventListener('click', devLog)
}

function hookAltHeader() { // I decided against resusing hookHeaderButtons()
  document.querySelector("#home-button").addEventListener('click', showHome)
  document.querySelector("#char-button").addEventListener('click', lvChar)
  document.querySelector("#locs-button").addEventListener('click', lvPlaces)
  document.querySelector("#events-button").addEventListener('click', lvEvents)
  document.querySelector("#tags-button").addEventListener('click', lvTags)
  document.querySelector("#religion-button").addEventListener('click', lvReligion)
  document.querySelector("#gods-button").addEventListener('click', lvGods)
  document.querySelector("#nations-button").addEventListener('click', lvNations)
  document.querySelector("#factions-button").addEventListener('click', lvFactions)  
}

function hookTimeHeader() {
  document.querySelector("#home-button").addEventListener('click', showHome)
  // TODO: Add more when I get to this :)
}
/**
 * @deprecated Functionality built into other method
 */
function charSubmit() {
  console.warn("Warning: Deprecated! Are you testing something?")

  const charName = document.querySelector("#charName")
  const charNick = document.querySelector("#charNickname")
  const charAge = document.querySelector("#charAge")
  const charRace = document.querySelector("#charRace")
  const charDesc = document.querySelector("#charDesc")

  console.log({
    name: charName.value,
    nickname: charNick.value,
    age: charAge.value,
    race: charRace.value,
    description: charDesc.value

  })
}

function showLoreVault() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayLoreHeader()}

      <section class="tool-card">
        <h1>Lore Vault</h1>
        <p class="subtitle">You may select your desired 'mode' at the top.</p>
      </section>
      ${displayFooter()}
    </main>
    `
    hookAltHeader()
}

function devLog() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayHeader()}

    <section class="tool-card">
      <p><strong>Development Log</strong></p>

      <p><strong>build-0.0.1</strong></p>
      <p>• Put together the basic framework.</p>
      <p>• Got page navigation working.</p>
      <p>• Characters can now be created and stored.</p>
      <p>• Character cards finally look like... well, cards.</p>
      <p>• Learned map(), index, and why event listeners should behave themselves.</p>
      <p>• Fixed a performance issue that was entirely my own fault.</p>
      <p>• Added build information to the footer.</p>
      <p>• Calling this a solid first milestone.</p>
      <p>• Oh! And also added a lil devlog page.</p>
    </section>
    ${displayFooter()}
    </main>
  `
  hookHeaderButtons()
}

function showWritingDesk() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <h1>Writing Desk</h1>
      <p class="subtitle">Unavailable at this stage, but I promise it'll be soon!</p>
    ${displayFooter()}
    </main>
  `

  hookHeaderButtons()
}

function showSettings() {
  app.innerHTML = `
    <main class="app-shell">
      ${displayHeader()}
      <br>
      <h1> Settings Page </h1>
      <p class="subtitle">Unavailable at this stage, will be made later on. </p>
    ${displayFooter()}
    </main>
  `
  hookHeaderButtons()
}

// Lore Vault!

function lvChar() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card-char-page">  
    <label>Character Name</label>
      <input class="field-input" id="charName">
      <br>
      <label>Character Nickname</label>
      <input class="field-input" id="charNickname">
      <br>
      <label>Age</label>
      <input class="field-input" id="charAge">
      <br>
      <label>Race</label>
      <input class="field-input" id="charRace">
      <br>
      <label>Description</label>
      <textarea class="field-input" id="charDesc"></textarea>
      <br><br>
      <button id="submit-button">Save (loosely)</button>
    </section>

    <section class="tool-card" id="characters-list"></section>

    ${displayFooter()}
  `
  hookAltHeader()
  document.querySelector("#submit-button").addEventListener('click', () => {
    
    
    const charName = document.querySelector("#charName")
    const charNick = document.querySelector("#charNickname")
    const charAge = document.querySelector("#charAge")
    const charRace = document.querySelector("#charRace")
    const charDesc = document.querySelector("#charDesc")

    const builtCharacter = {
      name: charName.value || "Missing Information",
      nickname: charNick.value || "Missing Information",
      age: charAge.value || "Missing Information",
      race: charRace.value || "Missing Information",
      description: charDesc.value || "Missing Information"
    }

    Characters.push(builtCharacter)

    console.log(Characters)
    pushDataToPage(1)

  })

}

function pushDataToPage(formID){
  if (!Number.isInteger(formID)) {
    console.error("formID must be an integer")
    return
  }

  switch (formID) {
    case 1:
      document.querySelector('#characters-list').innerHTML = 
        Characters.map((character, index) => `
          <section class="character-card">
          <h2>Name: ${character.name}</h2>
          <hr class="card-custom-divider">
          <p>Nickname: ${character.nickname}</p>
          <p>Age: ${character.age}</p>
          <p>Race: ${character.race}</p>
          <p>Description: ${character.description}</p>
          <p>Index: ${index}</p>
          <button class="form-button" data-index="${index}">Edit</button> <button class="form-button" data-index="${index}">Delete</button>
          </section>
        `).join('') 
    break
  }
  document.querySelectorAll(".form-button").forEach(button => {
    button.addEventListener("click", () => {
      console.log("Look the button says the ID is " + button.dataset.index)
    })
  })
}

function lvPlaces() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Places page</p>
    </section>
  `
  hookAltHeader()
}

function lvEvents() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>CEvents page</p>
    </section>
  `
  hookAltHeader()
}

function lvTags() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Tags page</p>
    </section>
  `
  hookAltHeader()
}

function lvTimeline() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayTimeHeader()}
    <br>
    <section class="tool-card">
      <p>This is a planned major feature!</p>
      <p>That said... I couldn't tell you when I'll get around to it.</p>
      <p>Check back sometime after I finish more of the Lore Vault </p>
    </section>
  `
  hookTimeHeader()
}

function lvReligion() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Religion page</p>
    </section>
  `
  hookAltHeader()
}

function lvGods() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Gods/Deities page</p>
    </section>
  `
  hookAltHeader()
}

function lvNations() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Nations page</p>
    </section>
  `
  hookAltHeader()
}

function lvFactions() {
  app.innerHTML = `
    <main class="app-shell">
    ${displayLoreHeader()}
    <br>
    <section class="tool-card">
      <p>Factions page</p>
    </section>
  `
  hookAltHeader()
}

showHome()