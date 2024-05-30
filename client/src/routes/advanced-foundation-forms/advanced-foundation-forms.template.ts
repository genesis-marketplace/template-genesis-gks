import { html } from '@microsoft/fast-element';
import type { AdvancedFoundationForms } from './advanced-foundation-forms';
import { ConnectedRenderersOptions, UiSchema } from '@genesislcap/foundation-forms';

// In the browser page, Click on "Copy autogenerated UI Schema".
// This button is only visible in the dev mode, when foundation-form attribute :uischema is not defined.
const UI_SCHEMA: UiSchema = {
  type: 'LayoutVertical2Columns',
  elements: [
    {
      type: 'Control',
      scope: '#/properties/USER_PROFILES',
      options: <ConnectedRenderersOptions>{
        allOptionsResourceName: 'ALL_PROFILES',
        valueField: 'PROFILE_NAME',
        labelField: 'PROFILE_NAME',
      },
    },
    { type: 'Control', scope: '#/properties/USER_NAME' },
    { type: 'Control', scope: '#/properties/USER_TYPE' },
    { type: 'Control', scope: '#/properties/LAST_LOGIN' },

    { type: 'Control', scope: '#/properties/ADDRESS_LINE_1' },
    { type: 'Control', scope: '#/properties/ADDRESS_LINE_2' },
    { type: 'Control', scope: '#/properties/CITY' },
    { type: 'Control', scope: '#/properties/EMAIL_ADDRESS' },
  ],
};

export const AdvancedFoundationFormsTemplate = html<AdvancedFoundationForms>`
  <tutorial-container :route="${() => 'advanced-foundation-forms'}">
    <zero-card>
      <foundation-form
        resourceName="EVENT_INSERT_USER"
        :uischema="${(x) => UI_SCHEMA}"
      ></foundation-form>
    </zero-card>
  </tutorial-container>
`;