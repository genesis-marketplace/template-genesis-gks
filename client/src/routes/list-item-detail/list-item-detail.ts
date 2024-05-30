import { css, customElement, FASTElement, html, observable, repeat, when } from '@microsoft/fast-element';
import { AnalysisItem, convertSnakeToCamel } from '../list-items/list-items';
import { Connect } from '@genesislcap/foundation-comms';

const name = 'list-item-detail'

export interface CardItem {
  label: string,
  value: string|number
}




@customElement({
  name,
  template: html<ListItemDetail>`
      ${when(x => !x.loaded, html`
          <tutorial-container :route="${() => 'list-items'}">

              <div class="loading-spinner-container">
                  <zero-progress-ring></zero-progress-ring>
              </div>
      `)}

      ${when(x => x.loaded && !x.instrument, html<ListItemDetail>`
          <p class="warning">No analysis found for <b>${x => x.instrumentId}</b></p>
      `)}

      ${when(x => x.instrument, html<ListItemDetail>`
          <h1>${x => x.instrumentId} Analysis</h1>
          <div class="analysis-container">
              <zero-card class="analysis-side">
                  ${repeat(x => x.cardItems, html<CardItem>`
                      <div class="analysis-item">
                          <label>${x => x.label}</label>
                          <div>${x => x.value}</div>
                      </div>
                  `)}
              </zero-card>
              <div class="analysis-main">
                  <zero-card style="height: auto;">
                      <div class="score-card">
                          ${repeat(x => x.scoreItems, html<CardItem>`
                              <div class="score-card__item">
                                  <label>${x => x.label}</label>
                                  <div>${x => x.value}</div>
                              </div>
                          `)}
                      </div>
                  </zero-card>
                  <h2>
                      Company overview
                  </h2>
                  <p>
                      ${x => x.instrument.COMPANY_OVERVIEW}
                  </p>
                  <h2>
                      Analyst comment
                  </h2>
                  <p>
                      ${x => x.instrument.ANALYST_COMMENT}
                  </p>
              </div>
          </div>
      `)}
      </tutorial-container>
  `,
  styles: css`
    :host {
      height: 100%;
      width: 100%;
      display: block;
      padding: 20px;
      box-sizing: border-box;
    }
    
    .analysis-side {
      width: 250px;
      flex: 0 0 auto;
    }
    
    .analysis-main {
      flex-grow: 1;
    }

    .loading-spinner-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .analysis-container {
      display: flex;
    }

    .analysis-item {
      margin-bottom: 20px;
      font-size: 20px;
    }

    .analysis-item label, .score-card label {
      margin-bottom: 10px;
      font-size: 12px;
      text-transform: uppercase;
    }

    .score-card {
      display: flex;
      flex-wrap: wrap;
    }

    .score-card__item {
      margin-right: 20px;
      font-size: 20px;
    }

    .instrument-quote zero-button {
      margin-bottom: 20px;
    }

    zero-card {
      margin-right: 20px;
      padding: 20px;
      box-sizing: border-box;
    }

    zero-card:last-child {
      margin-right: 0;
    }
  `
})
export class ListItemDetail extends FASTElement {

  @observable instrumentId: string;

  @observable instrument: AnalysisItem;

  @Connect connect!: Connect;

  @observable loaded: boolean;

  @observable cardItems: CardItem[];

  @observable scoreItems: CardItem[];

  @observable latestQuote: CardItem[];

  public async connectedCallback() {
    super.connectedCallback();
    const data = await this.connect.snapshot(
      'ALL_ANALYSIS',
      { CRITERIA_MATCH: `INSTRUMENT_ID == "${this.instrumentId}"` }
    );
    this.instrument = data.ROW && data.ROW[0];
    if (this.instrument) {
      this.cardItems = ['ANALYST_NAME', 'GENERAL_SCORE', 'ANALYST_CONSENSUS', 'NEWS_SENTIMENT'].map(label => ({ label: convertSnakeToCamel(label), value: this.instrument[label]}))
      this.scoreItems = ['ENVIRONMENTAL_SCORE', 'SOCIAL_SCORE', 'GOVERNANCE_SCORE', 'ESG_SCORE'].map(label => ({ label: convertSnakeToCamel(label), value: this.instrument[label] || '-'}))
    }

    this.loaded = true;
  }

}
