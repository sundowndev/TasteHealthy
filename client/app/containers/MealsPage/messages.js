/*
 * HomePage Messages
 *
 * This contains all the text for the MealsPage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.MealsPage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Remplissez le(s) repas de votre choix.',
  },
});
