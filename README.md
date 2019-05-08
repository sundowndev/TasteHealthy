# TasteHealthy

[![Build Status](https://travis-ci.org/sundowndev/TasteHealthy.svg?branch=master)](https://travis-ci.org/sundowndev/TasteHealthy)

Taste Healthy est un projet de data journalisme basé sur l’alimentation et la consommation journalière des Français. Grâce à des données ouvertes, nous sômmes en mesure de d’analyser la consommation de n’importe quel individu et de vulgariser sur la quantité de sucre qu’il mange au quotidien, les additifs qui peuvent impacter sa santé ou encore démentir les mythes auxquels il peut croire (bio = sain, par exemple). Le sucre fait partie d’environ 80% de nos produits de consommation quotidienne. Depuis de nombreuses années, l’impact écologique pèse de plus en plus lourd sur la société de consommation et le grand public n’y est que très peu sensibilisé. Alors que représente ce que nous mangeons dans une journée entière ?

### Données

Cette application repose sur les données d'[Open Food Facts](https://fr.openfoodfacts.org/), une initiative collective proposant, grâce aux nombreuses collaborations des internautes, une très grande base de données collaborative, libre et ouverte sur des produits alimentaires du monde entier.

---

### Processing CSV to SQL converter

```shell
# Copy the first 10000 lines (example)
head -10000 ~/Téléchargements/fr.openfoodfacts.org.products.csv > ./scripts/test2.csv

# Fix delimiter char if needed (e.g replace tab with comma)
# sed -i -- 's/ /,/g' ./scripts/test2.csv

# Run script
node scripts/csv2sql.js
```

### API response

Here is an example of response returned by the the server side.

```json
{
  "success": true,
  "limit": 20,
  "page": 1,
  "offset": 0,
  "results": 1,
  "items": [
    {
      "id": 1,
      "code": "0000000002400",
      "url": "http://world-fr.openfoodfacts.org/produit/0000000002400/ciabatta-bombay",
      "creator": "kiliweb",
      "created_datetime": "2018-03-04T23:00:00.000Z",
      "last_modified_datetime": "2018-03-04T23:00:00.000Z",
      "product_name": "Ciabatta Bombay",
      "generic_name": null,
      "quantity": null,
      "image_url": "https://static.openfoodfacts.org/images/products/000/000/000/2400/front_fr.4.400.jpg",
      "category_id": 1,
      "packaging": null,
      "packaging_tags": null,
      "brands": null,
      "brands_tags": null,
      "origins": null,
      "manufacturing_places": null,
      "manufacturing_places_tags": null,
      "countries_tags": "en:france"
    }
  ]
}
```

In some cases, the API returns an error.

```json
{
  "success": false,
  "errorMessage": "\"query\" length must be at least 3 characters long"
}
```
