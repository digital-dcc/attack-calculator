import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

import { setBasePath } from '@shoelace-style/shoelace';
setBasePath("https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.14.0/cdn/");

import '@shoelace-style/shoelace/dist/components/button/button.js';
import '@shoelace-style/shoelace/dist/components/icon/icon.js';
@customElement('weapon-row')
export class WeaponRow extends LitElement {
  @property({ type: String }) name = '';
  @property({ type: Number }) number = 0;

  static styles = css`
	.item {
		display: flex;
		flex-direction: row;
		justify-content: space-between
	}
  `;

	increment() {
		this.number++;
		this.dispatchEvent(new CustomEvent('increment-weapon', {
			detail: {
				name: this.name,
			}
		}));
	}

	decrement() {
		if (this.number <= 0) return;
		this.number--;
		this.dispatchEvent(new CustomEvent('decrement-weapon', {
			detail: {
				name: this.name,
			}
		}));
	}

  render() {
    return html`
		<sl-menu-item>
		<div class="item">
			<div>${this.name} ${this.number !== 0 ? html`(${this.number})` : html``}</div>
			<div class="buttons">
				<sl-button @click="${this.decrement}">
					<sl-icon name="dash-circle"></sl-icon>
				</sl-button>
				<sl-button @click="${this.increment}">
					<sl-icon name="plus-circle"></sl-icon>
				</sl-button>
			</div>
		</div>
	</sl-menu-item>
    `;
  }
}
