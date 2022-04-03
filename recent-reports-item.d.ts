import { LitElement } from 'lit';
declare type ReportItemDetails = {
    has_new_info: boolean;
    age: number;
    first_name: string;
    last_name: string;
};
declare type ReportItem = {
    details: ReportItemDetails;
    updatedAt: string;
    createdAt: string;
    isPerson: boolean;
    detailsCityState: string;
};
export declare class RecentReportsItem extends LitElement {
    report: ReportItem;
    editReportsMode: boolean;
    shouldShowNewInfoTag: Boolean | undefined;
    reportInfo: String | undefined;
    age: Number | undefined;
    city: String | undefined;
    socialNetwork: String | undefined;
    livesIn: String | undefined;
    detailsYMM: String | undefined;
    reportType: string | undefined;
    viewReportCallback: any;
    deleteReportCallback: any;
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
export {};
//# sourceMappingURL=recent-reports-item.d.ts.map