import { css, customElement, FASTElement, html } from '@microsoft/fast-element';

const name = 'foundation-layout-intro';

@customElement({
  name,
  template: html<FoundationLayoutIntro>`
      <tutorial-container :route="${() => 'foundation-forms-intro'}">
          <zero-layout :dimensionsConfig=${(_) => ({
              borderWidth: 10,
          })}>
            <zero-layout-region type="vertical">
              <zero-layout-region type="horizontal" size="33%">
                  <zero-layout-item title="First">
                      <h2>First content</h2>
                  </zero-layout-item>
                  <zero-layout-item title="Second" registration="analysisCard">
                      <h2>Second content</h2>
                  </zero-layout-item>
                  <zero-layout-item title="Third">
                      <h2>Third content</h2>
                  </zero-layout-item>
                </zero-layout-region>
              <zero-layout-region type="horizontal" size="67%">
                  <zero-layout-item title="Fourth">
                      <h2>Fifth content</h2>
                  </zero-layout-item>
                  <zero-layout-item title="Fifth">
                      <h2>Sixth content</h2>
                  </zero-layout-item>
              </zero-layout-region>
            </zero-layout-region>
          </zero-layout>
      </tutorial-container>
  `,
  styles: css`
    :host {
      height: 100%;
      width: 100%;
    }
  `
})
export class FoundationLayoutIntro extends FASTElement {

}
