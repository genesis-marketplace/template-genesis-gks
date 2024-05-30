import { css, customElement, ExecutionContext, FASTElement, html, observable, repeat } from '@microsoft/fast-element';
import { Connect } from '@genesislcap/foundation-comms';
import { Route } from '@microsoft/fast-router';

const name = 'list-items-container';

export interface AnalysisItem {
  ANALYST_NAME: string;
  GENERAL_SCORE: string;
  ANALYST_CONSENSUS: string;
  NEWS_SENTIMENT: string;
  ENVIRONMENTAL_SCORE: string;
  SOCIAL_SCORE: string;
  GOVERNANCE_SCORE: string;
  ESG_SCORE: string;
  COMPANY_OVERVIEW: string;
  ANALYST_COMMENT: string;
  INSTRUMENT_ID: string;
}

export const convertSnakeToCamel = (value: string, upperCamel = false): string => {

  return value.split('_').map((val, index) => {
    const lowerCase = val.toLowerCase();

    if (index === 0 || upperCamel) {
      return `${lowerCase.substring(0, 1).toUpperCase()}${lowerCase.slice(1, lowerCase.length)}`
    } else {
      return lowerCase;
    }

  }).join(' ');
}

@customElement({
  name,
  template: html<ListItems>`
    <tutorial-container :route="${() => 'list-items'}">
      <div class="content">
        ${repeat(x => x.instruments, html<AnalysisItem>`
            <div class="list-item">
              <zero-card>
                  <div class="list-item__value">
                      <label>Instrument Id</label>
                      <div>
                          ${x => x.INSTRUMENT_ID}
                      </div>
                  </div>
                  <div class="list-item__value">
                      <label>General score</label>
                      <div>
                          ${x => x.GENERAL_SCORE}
                      </div>
                  </div>
                  <div class="list-item__value">
                      <label>Analyst</label>
                      <div>
                          ${x => x.ANALYST_NAME}
                      </div>
                  </div>
                  <div>
                      <zero-anchor @click=${(x, c:ExecutionContext<ListItems>) => c.parent.navigateToListItem(x.INSTRUMENT_ID)}">View analysis</zero-anchor>
                  </div>
              </zero-card>
            </div>
        `)}
      </div>
    </tutorial-container>
  `,
  styles: css`
    .content {
      display: flex;
      flex-wrap: wrap;
      align-items: stretch;
    }
    
    .list-item {
      display: flex;
      flex-direction: column;
      margin: 20px;
    }
    
    .list-item__value {
      margin-bottom: 20px;
    }

    .list-item__value label {
      text-transform: uppercase;
      margin-bottom: 10px;
      font-size: 10px;
    }
    
    zero-card {
      flex: 1;
      padding: 20px;
      width: 200px;
      min-width: 200px;
      max-width: 200px;
    }
  `
})
export class ListItems extends FASTElement {

  @Connect connect!: Connect;

  @observable instruments: AnalysisItem[];

  public async connectedCallback() {
    super.connectedCallback();
    const data = await this.connect.snapshot(
      'ALL_ANALYSIS',
    );
    this.instruments = data.ROW;
  }

  navigateToListItem(instrumentId: string): void {
    Route.path.push(`list-item-detail/${instrumentId}`);
  }
}
