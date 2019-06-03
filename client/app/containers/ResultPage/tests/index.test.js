import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
import configureStore from 'redux-mock-store';

import ResultPage from '../index';

// create any initial state needed
const initialState = {
  meals: {
    breakfast: {
      consummedAliments: [
        JSON.parse(`{
      "id": 7,
      "product_name": "All Butter Fruity Flapjack Cookies",
      "generic_name": "Biscuits pur beurre avec de l'avoine, des raisins secs, de la noix de coco et des abricots déshydratés.",
      "quantity": 225,
      "quantity_unity": "g",
      "image_url": "https://static.openfoodfacts.org/images/products/00011709/front_fr.12.400.jpg",
      "origins": "unknown",
      "packaging": "sachet,plastique",
      "manufacturing_places": "Royaume-Uni",
      "countries": "France,Royaume-Uni",
      "labels": "Végétarien,Point Vert,Pur beurre",
      "purchase_places": "Royaume-Uni,France",
      "stores": "Marks & Spencer",
      "nutrition_facts": {
        "energy_100g": "1887",
        "fat_100g": "20.5",
        "saturated_fat_100g": "13.3",
        "carbohydrates_100g": "59.3",
        "sugars_100g": "36.5",
        "fiber_100g": "4.2",
        "proteins_100g": "5.1",
        "salt_100g": "0.779999999999999",
        "sodium_100g": "0.307086614173228",
        "fruits_vegetables_nuts_estimate_100g": "27",
        "nutrition_score_fr_100g": "22",
        "nutrition_score_uk_100g": "22"
      },
      "misc_data": {
        "serving_size_g": "23 g",
        "additives_n": 5,
        "additives": "[ sucre -> fr:sucre  ]  [ beurre -> fr:beurre  ]  [ lait -> fr:lait  ]  [ 15 -> fr:15  ]  [ flocons-d-avoine -> fr:flocons-d-avoine  ]  [ flocons-d -> fr:flocons-d  ]  [ flocons -> fr:flocons  ]  [ contient-du-gluten -> fr:contient-du-gluten  ]  [ contient-du -> fr:contient-du  ]  [ contient -> fr:contient  ]  [ farine-de-ble -> fr:farine-de-ble  ]  [ farine-de -> fr:farine-de  ]  [ farine -> fr:farine  ]  [ contient-du-gluten -> fr:contient-du-gluten  ]  [ contient-du -> fr:contient-du  ]  [ contient -> fr:contient  ]  [ avec-du-ble -> fr:avec-du-ble  ]  [ avec-du -> fr:avec-du  ]  [ avec -> fr:avec  ]  [ du-carbonate-de-calcium -> en:e170  -> exists  -- mandatory_additive_class: en:acidity-regulator, en:anti-caking-agent, en:stabiliser, en:firming-agent, en:flour-treatment-agent, en:glazing-agent, en:colour (current: ingredient)  ]  [ du-carbonate-de -> fr:du-carbonate-de  ]  [ du-carbonate -> en:e502  -> exists  -- ok  ]  [ du-fer -> fr:du-fer  ]  [ du -> fr:du  ]  [ de-la-niacine -> en:e375  -> exists  -- mandatory_additive_class: en:colour-retention-agent (current: ingredient)  ]  [ de-la -> fr:de-la  ]  [ de -> fr:de  ]  [ de-la-thiamine -> fr:de-la-thiamine  ]  [ de-la -> fr:de-la  ]  [ de -> fr:de  ]  [ raisins-secs -> fr:raisins-secs  ]  [ raisins -> fr:raisins  ]  [ 12 -> en:fd-c  ]  [ noix-de-coco-dessechee -> fr:noix-de-coco-dessechee  ]  [ noix-de-coco -> fr:noix-de-coco  ]  [ noix-de -> fr:noix-de  ]  [ noix -> fr:noix  ]  [ 8 -> en:fd-c  ]  [ abricots-seches -> fr:abricots-seches  ]  [ abricots -> fr:abricots  ]  [ 7 -> en:fd-c  ]  [ abricots -> fr:abricots  ]  [ farine-de-riz -> fr:farine-de-riz  ]  [ farine-de -> fr:farine-de  ]  [ farine -> fr:farine  ]  [ conservateur -> fr:conservateur  ]  [ e220 -> en:e220  -> exists  -- ok  ]  [ sulfites -> fr:sulfites  ]  [ golden-syrup -> fr:golden-syrup  ]  [ golden -> fr:golden  ]  [ sirop-de-sucre-inverti -> fr:sirop-de-sucre-inverti  ]  [ sirop-de-sucre -> fr:sirop-de-sucre  ]  [ sirop-de -> fr:sirop-de  ]  [ sirop -> fr:sirop  ]  [ oeufs-pasteurises -> fr:oeufs-pasteurises  ]  [ oeufs -> fr:oeufs  ]  [ agent-de-levage -> fr:agent-de-levage  ]  [ agent-de -> fr:agent-de  ]  [ agent -> fr:agent  ]  [ bicarbonate-de-sodium -> en:e500ii  -> exists  -- ok  ]  [ e450 -> en:e450  -> exists  -- ok  ]  [ e503 -> en:e503  -> exists  -- mandatory_additive_class: en:raising-agent (current: en:preservative)  -- e-number  ]  [ sel -> fr:sel  ]  [ melasse -> fr:melasse  ]",
        "ingredients_from_palm_oil_n": 0,
        "nutrition_grade_fr": "e",
        "nutrition_score_fr_100g": "22",
        "nutrition_score_uk_100g": "22",
        "ingredients_text": "Sucre • Beurre (_Lait_) (15%) • flocons d'_avoine_ (contient du _gluten_) • Farine de _blé_(contient du _gluten_) (avec du _blé_, du carbonate de calcium, du fer, de la niacine, de la thiamine) • Raisins secs (12%) • Noix de coco desséchée (8 %) • Abricots séchés (7 %) (Abricots • Farine de riz • Conservateur: E220 (_Sulfites_)) • Golden syrup (sirop de sucre inverti) • _œufs_ pasteurisés • Agent de levage: Bicarbonate de sodium, E450, E503, sel, Mélasse."
      },
      "createdAt": "2019-05-29T12:03:25.853Z",
      "updatedAt": "2019-05-29T12:03:25.853Z",
      "categoryId": 5
    }`),
      ],
    },
    lunch: {},
    snack: {},
    dinner: {},
  },
};

const mockStore = configureStore();

const match = {
  params: {
    mealType: 'breakfast',
  },
};

describe('<HomePage />', () => {
  it('should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider locale="en">
        <ResultPage
          blou="zefze"
          match={match}
          store={mockStore(initialState)}
        />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
