import { LitElement, css, html } from 'lit';
import { property, customElement } from 'lit/decorators.js';

@customElement('die-display')
export class WeaponRow extends LitElement {
  @property({ type: Number }) number = 1;

  static styles = css`
    .wrapper {
      width: 100px;
      height: 100px;
      background-color: transparent;
      background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22%23000000%22%20width%3D%22800px%22%20height%3D%22800px%22%20viewBox%3D%22-16%200%20512%20512%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M106.75%20215.06L1.2%20370.95c-3.08%205%20.1%2011.5%205.93%2012.14l208.26%2022.07-108.64-190.1zM7.41%20315.43L82.7%20193.08%206.06%20147.1c-2.67-1.6-6.06.32-6.06%203.43v162.81c0%204.03%205.29%205.53%207.41%202.09zM18.25%20423.6l194.4%2087.66c5.3%202.45%2011.35-1.43%2011.35-7.26v-65.67l-203.55-22.3c-4.45-.5-6.23%205.59-2.2%207.57zm81.22-257.78L179.4%2022.88c4.34-7.06-3.59-15.25-10.78-11.14L17.81%20110.35c-2.47%201.62-2.39%205.26.13%206.78l81.53%2048.69zM240%20176h109.21L253.63%207.62C250.5%202.54%20245.25%200%20240%200s-10.5%202.54-13.63%207.62L130.79%20176H240zm233.94-28.9l-76.64%2045.99%2075.29%20122.35c2.11%203.44%207.41%201.94%207.41-2.1V150.53c0-3.11-3.39-5.03-6.06-3.43zm-93.41%2018.72l81.53-48.7c2.53-1.52%202.6-5.16.13-6.78l-150.81-98.6c-7.19-4.11-15.12%204.08-10.78%2011.14l79.93%20142.94zm79.02%20250.21L256%20438.32v65.67c0%205.84%206.05%209.71%2011.35%207.26l194.4-87.66c4.03-1.97%202.25-8.06-2.2-7.56zm-86.3-200.97l-108.63%20190.1%20208.26-22.07c5.83-.65%209.01-7.14%205.93-12.14L373.25%20215.06zM240%20208H139.57L240%20383.75%20340.43%20208H240z%22%2F%3E%3C%2Fsvg%3E');
      background-size: 100px auto;
      background-repeat: no-repeat;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      color: white;
    }
  `;

  render() {
    return html` <div class="wrapper">${this.number}</div> `;
  }
}

