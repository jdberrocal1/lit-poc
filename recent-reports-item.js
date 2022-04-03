var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import capitalizeString from './utils/capitalize-string';
import dateFormatter from './utils/date-formatter';
let RecentReportsItem = class RecentReportsItem extends LitElement {
    constructor() {
        super(...arguments);
        this.report = {};
        this.editReportsMode = false;
    }
    connectedCallback() {
        super.connectedCallback();
        this.buildReportInfo();
    }
    buildReportInfo() {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        this.shouldShowNewInfoTag = (_b = (_a = this.report) === null || _a === void 0 ? void 0 : _a.details) === null || _b === void 0 ? void 0 : _b.has_new_info;
        if ((_c = this.report) === null || _c === void 0 ? void 0 : _c.isPerson) {
            this.reportInfo = capitalizeString(`${((_e = (_d = this.report) === null || _d === void 0 ? void 0 : _d.details) === null || _e === void 0 ? void 0 : _e.first_name) || ''} ${((_g = (_f = this.report) === null || _f === void 0 ? void 0 : _f.details) === null || _g === void 0 ? void 0 : _g.last_name) || ''}`);
            this.age = (_j = (_h = this.report) === null || _h === void 0 ? void 0 : _h.details) === null || _j === void 0 ? void 0 : _j.age;
            this.livesIn = (_k = this.report) === null || _k === void 0 ? void 0 : _k.detailsCityState;
            this.reportType = 'Person';
        }
    }
    render() {
        const newInfoTag = html ` <div class="new-info-tag">NEW INFO</div>`;
        const cityInfo = html `<br/> <small>${this.city}</small>`;
        const socialNetworkInfo = html `<br/> <small>${this.socialNetwork}</small>`;
        const livesInInfo = html `<br/> <small>${this.livesIn}</small>`;
        const detailsYMMInfo = html `<br/> <small>${this.detailsYMM}</small>`;
        const reportTypeInfo = html `
      <p class="type">
        ${this.reportType === 'Professional' ? 'Professional Profile' : `${this.reportType} Report`}
      </p>
    `;
        const createdAtInfo = html `
      <p class='info'>
        Updated
        <span>${dateFormatter(this.report.updatedAt, 'MM/DD/YYYY')}</span>
        |
        Created
        <span>${dateFormatter(this.report.createdAt, 'MM/DD/YYYY')}</span>
      </p>
    `;
        const deleteReportButton = html `
      <button class="remove-btn automation-recent-reports-remove-report" @click="${() => this.deleteReportCallback()}">
        <span class="fa fa-remove">x</span> Remove report <!-- TODO: add font-awesome-->
      </button>
    `;
        const actionsBlock = html `
      <button class="redirect-btn automation-recent-reports-data-card-cta" @click="${() => this.viewReportCallback()}">
        View report
      </button>

    `;
        return html `
      <div class="recent-reports-item automation-recent-reports-data-card">
        ${this.shouldShowNewInfoTag ? newInfoTag : ''}
        <div class="report-item-info">
          <h4 class="title">
            ${this.reportInfo}${this.age ? `, ${this.age}` : ''}
            ${this.city ? cityInfo : ''}
            ${this.socialNetwork ? socialNetworkInfo : ''}
            ${this.livesIn ? livesInInfo : ''}
            ${this.detailsYMM ? detailsYMMInfo : ''}
          </h4>
          ${this.reportType ? reportTypeInfo : ''}
          ${this.report.updatedAt || this.report.createdAt ? createdAtInfo : ''}
        </div>
        <div class="report-item-actions">
          ${this.editReportsMode ? deleteReportButton : actionsBlock}
        </div>
      </div>
    `;
    }
};
RecentReportsItem.styles = css `
    .recent-reports-item {
      font-family: "Lato", sans-serif;
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

    .report-item-info, .report-item-actions {
      width: 50%;
      position: relative;
    }

    .report-item-actions {
      text-align: right;
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

    .info {
      font-size: 14px;
      color: #757575;
      margin-bottom: 0;
    }

    .redirect-btn {
      font-size: 16px;
      font-weight: bold;
      background-color: #000;
      min-width: 140px;
      height: 40px;
      color: #ffffff;
      margin-bottom: 20px;
      border-radius: 6px;
      border: 0;
      cursor: pointer;
    }

    .remove-btn {
      background-color: transparent;
      border: 0;
      font-size: 16px;
      font-weight: bold;
      color: #000;
      height: 30px;
      cursor: pointer;
    }
  `;
__decorate([
    property({ type: Object })
], RecentReportsItem.prototype, "report", void 0);
__decorate([
    property({ type: Boolean })
], RecentReportsItem.prototype, "editReportsMode", void 0);
RecentReportsItem = __decorate([
    customElement('recent-reports-item')
], RecentReportsItem);
export { RecentReportsItem };
//# sourceMappingURL=recent-reports-item.js.map