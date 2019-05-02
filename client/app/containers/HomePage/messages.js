/*
 * HomePage Messages
 *
 * This contains all the text for the HomePage container.
 */
import { defineMessages } from 'react-intl';

export const scope = 'app.containers.HomePage';

export default defineMessages({
  header: {
    id: `${scope}.header`,
    defaultMessage: 'Evaluez la qualité de ce que vous mangez',
  },
  content: {
    id: `${scope}.content`,
    defaultMessage:
      'Savez-vous vraiment ce que vous mangez ? Nous oui ! En un clin d’oeil, visualisez les produits qui sont bons et ceux qu’il vaut mieux éviter.',
  },
});
