// @ts-nocheck

import { LitElement, css, html } from 'lit';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';
import { property, customElement } from 'lit/decorators.js';
// @ts-ignore
import { weapons } from '../../data/weapons';
// import { resolveRouterPath } from '../router';

// Function to roll a single die with a specified number of sides
function rollDie(sides) {
  return Math.floor(Math.random() * sides) + 1;
}

// Function to roll dice with specified parameters
function rollDice(numDice, sides, modifier) {
  let results = [];
  for (let i = 0; i < numDice; i++) {
    results.push(rollDie(sides));
  }
  let total = results.reduce((acc, roll) => acc + roll, 0) + modifier;
  return {
    rolls: results,
    total: total,
  };
}

import '../components/die-display';
import '@shoelace-style/shoelace/dist/components/drawer/drawer.js';
import '@shoelace-style/shoelace/dist/components/dropdown/dropdown.js';
import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/menu/menu.js';
import '@shoelace-style/shoelace/dist/components/menu-item/menu-item.js';
import '@shoelace-style/shoelace/dist/components/range/range.js';
import '@digital-dcc/weapons-panel';
import '@digital-dcc/equipped-weapon';

import { styles } from '../styles/shared-styles';

@customElement('app-home')
export class AppHome extends LitElement {
  @property({ type: Number })
  strength: number = 3;

  @property({ type: Number })
  agility: number = 3;

  @property({ state: true, attribute: false })
  addedWeaponsList = [];

  @property({ state: true, attribute: false })
  diceRollResult = '';

  @property({ state: true, attribute: false })
  drawerLabel = '';

  static styles = [
    styles,
    css`
      h1 {
        margin: 0;
        padding: 0;
      }
      main {
        display: flex;
        flex-direction: column;
        gap: 20px;
      }
      sl-drawer {
        --size: 300px;
      }
      .roll-results {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
      }
    `,
  ];

  incrementWeapon(event) {
    const weapon = event.detail.name;
    const arr = [...this.addedWeaponsList, weapon];
    this.addedWeaponsList = arr;
  }

  decrementWeapon(event) {
    const weapon = event.detail.name;
    const lastIndex = this.addedWeaponsList.lastIndexOf(weapon);

    if (lastIndex !== -1) {
      // Remove the element at the found index
      this.addedWeaponsList.splice(lastIndex, 1);
    }

    this.addedWeaponsList = [...this.addedWeaponsList];
  }

  get weaponsMenu() {
    const items = Array.from(weapons.entries()).map(([key, weapon]) => {
      return html`<weapon-row
        name="${key}"
        @decrement-weapon="${this.decrementWeapon}"
        @increment-weapon="${this.incrementWeapon}"
      ></weapon-row>`;
    });
    return html` <sl-dropdown>
      <sl-button slot="trigger" caret>Select Weapons</sl-button>
      <sl-menu> ${items} </sl-menu>
    </sl-dropdown>`;
  }

  attributeChange(event: any) {
    const label = event.target.label;
    const [attribute] = label.split(' ');
    this[attribute.toLowerCase()] = event.target.value;
  }

  diceRoll(event) {
    const drawer = this.shadowRoot.querySelector('.drawer-placement-bottom');
    const { name, description, roll, type } = event.detail.diceRoll;

    const { total, rolls } = rollDice(roll.qty, roll.die, roll.mod);

    let rollDisplay = `${roll.qty}d${roll.die}`;
    if (roll.mod > 0) {
      rollDisplay += ` + ${roll.mod}`;
    } else if (roll.mod < 0) {
      rollDisplay += ` - ${roll.mod * -1}`;
    }

    let resultDisplay = rolls
      .map((r) => `<span class="die-result">${r}</span>`)
      .join(` + `);
    if (roll.mod > 0) {
      resultDisplay += ` + ${roll.mod}`;
    } else if (roll.mod < 0) {
      resultDisplay += ` - ${roll.mod * -1}`;
    }
    resultDisplay += ` = ${total}`;

    let fumble = false;
    let crit = false;
    if (type === 'attack') {
      if (rolls[0] === 1) fumble = true;
      if (rolls[0] === roll.die && roll.die >= 20) crit = true;
    }

    this.diceRollResult = html`
      <div class="roll-results">
        <div>
          <p>${description}</p>
          <div><strong>Roll</strong> ${unsafeHTML(rollDisplay)}</div>
          <div><strong>Result</strong> ${unsafeHTML(resultDisplay)}</div>
          ${fumble ? html`<div><strong>Fumble!</strong></div>` : html``}
          ${crit ? html`<div><strong>Crit!</strong></div>` : html``}
        </div>
        <die-display number="${total}"></die-display>
      </div>
    `;
    this.drawerLabel = name;
    drawer.show();
  }

  render() {
    return html`
      <main>
        <h1>DCC Attack Calculator</h1>
        <sl-range
          @sl-change="${this.attributeChange}"
          help-text="Set character strength (3-18)"
          label="Strength (${this.strength})"
          min="3"
          max="18"
        ></sl-range>
        <sl-range
          @sl-change="${this.attributeChange}"
          help-text="Set character agility (3-18)"
          label="Agility (${this.agility})"
          min="3"
          max="18"
        ></sl-range>
        ${this.weaponsMenu}
        <weapons-panel
          >${this.addedWeaponsList.map(
            (weapon) => html`<equipped-weapon
              .weapon="${weapon}"
              strength="${this.strength}"
              agility="${this.agility}"
              @dice-roll="${this.diceRoll}"
            ></equipped-weapon>`
          )}</weapons-panel
        >
        <sl-drawer
          label="${this.drawerLabel}"
          placement="bottom"
          class="drawer-placement-bottom"
        >
          ${this.diceRollResult}
        </sl-drawer>
      </main>
    `;
  }
}

