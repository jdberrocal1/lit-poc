import {LitElement, html, css} from 'lit';
import {customElement, property} from 'lit/decorators.js';
import capitalizeString from './utils/capitalize-string';

@customElement('recent-reports-item')
export class RecentReportsItem extends LitElement {
  @property({ type: Object })
  report = {};
  shouldShowNewInfoTag: Boolean | undefined;
  reportInfo: String | undefined;
  age: Number | undefined;
  city: String | undefined;
  socialNetwork: String | undefined;
  livesIn: String | undefined;
  detailsYMM: String | undefined;
  reportType: string | undefined;

  static override styles = css`
    .recent-reports-item {
      background-color: #ffffff;
      border: solid 1px #000;
      margin: 0;
      margin-bottom: 25px;
      border-radius: 4px;
      box-shadow: 0 3px 10px 0 rgba(95, 85, 99, 0.35);
      padding: 20px;
      position: relative;
      display: flex;
    }

    .new-info-tag{
      border-radius: 10px;
      background-color: #000;
      color: #ffffff;
      padding: 4px 6px;
      font-size: 12px;
      font-weight: bold;
      font-stretch: normal;
      position: absolute;
      top: -10px;
      right: -8px;
      z-index: 2;
    }

    .title {
      font-size: 24px;
      font-weight: bold;
      color: #000;
      margin: 0 0 8px 0;
      word-break: break-all;
    }

    .title > small {
      font-size: 16px;
      font-weight: 400;
      line-height: 1;
    }

    .title:hover {
      cursor: pointer;
      text-decoration: underline;
    }

    .type {
      font-size: 16px;
      margin-bottom: 10px;
      color: #000;
    }
  `;

  override connectedCallback() {
    super.connectedCallback()

    this.buildReportInfo();
  }

  buildReportInfo() {
    this.shouldShowNewInfoTag = this.report?.details?.has_new_info;
    if(this.report?.isPerson) {
      this.reportInfo = capitalizeString(`${this.report?.details?.first_name || ''} ${this.report?.details?.last_name || ''}`);
      this.age = this.report?.details?.age;
      this.livesIn = this.report?.detailsCityState;
      this.reportType = 'Person';
    }
    console.log(this.report);
  }

  override render() {
    const newInfoTag = html` <div class="new-info-tag">NEW INFO</div>`;
    const cityInfo = html`<br/> <small>${this.city}</small>`;
    const socialNetworkInfo = html`<br/> <small>${this.socialNetwork}</small>`;
    const livesInInfo = html`<br/> <small>${this.livesIn}</small>`;
    const detailsYMMInfo = html`<br/> <small>${this.detailsYMM}</small>`;
    const reportTypeInfo = html`
      <p class="type">
        ${this.reportType === 'Professional' ? 'Professional Profile' : `${this.reportType} Report`}
      </p>
    `;

    return html`
      <div class="recent-reports-item automation-recent-reports-data-card">
        ${this.shouldShowNewInfoTag ? newInfoTag : ''}
        <div class="recent-reports__report__info">
          <h4 class="title">
            ${this.reportInfo}${this.age ? `, ${this.age}` : ''}
            ${this.city ? cityInfo : ''}
            ${this.socialNetwork ? socialNetworkInfo : ''}
            ${this.livesIn ? livesInInfo : ''}
            ${this.detailsYMM ? detailsYMMInfo : ''}
          </h4>
          ${this.reportType ? reportTypeInfo : ''}
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'recent-reports-item': RecentReportsItem;
  }
}