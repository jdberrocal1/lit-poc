import { LitElement } from 'lit';
export declare class RecentReportsItem extends LitElement {
    report: {};
    shouldShowNewInfoTag: Boolean | undefined;
    reportInfo: String | undefined;
    age: Number | undefined;
    city: String | undefined;
    socialNetwork: String | undefined;
    livesIn: String | undefined;
    detailsYMM: String | undefined;
    reportType: string | undefined;
    static styles: import("lit").CSSResult;
    connectedCallback(): void;
    buildReportInfo(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'recent-reports-item': RecentReportsItem;
    }
}
//# sourceMappingURL=recent-reports-item.d.ts.map