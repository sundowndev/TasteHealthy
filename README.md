<div align="center">
  <h1>TasteHealthy</h1>
  <a href="https://travis-ci.org/sundowndev/TasteHealthy"><img src="https://travis-ci.org/sundowndev/TasteHealthy.svg?branch=master" alt="Build Status"></a>
</div>

Taste Healthy est un projet de data journalisme destiné à analyser l’alimentation et la consommation journalière d'un individu. Grâce à des données ouvertes, nous sômmes en mesure de d’analyser la consommation de n’importe quel individu et de vulgariser sur ce que représente son alimentation, en visualisant la quantité de sucre ajoutés, les additifs ou encore la répartition des emballages. Le sucre par exemple, fait partie d’environ 80% de nos produits de consommation quotidienne. Depuis de nombreuses années, l’impact écologique pèse de plus en plus lourd sur la société de consommation et le grand public n’y est que très peu sensibilisé. Alors comment savoir ce que représente vraiment ce que nous mangeons au quotidien ?

<p align="center">
  <img src="https://i.imgur.com/kZxBjvD.png" alt="">
</p>

### Données

Cette application repose sur les données d'[Open Food Facts](https://fr.openfoodfacts.org/), une initiative collective proposant, grâce aux nombreuses collaborations des internautes, une très grande base de données collaborative, libre et ouverte sur des produits alimentaires du monde entier.

<p align="center">
  <img src="https://i.imgur.com/0p32ghH.png" alt="">
</p>

---

### Processing CSV to SQL

```shell
# Copy the first 10000 lines (example)
head -10000 ~/Téléchargements/fr.openfoodfacts.org.products.csv > ./scripts/test2.csv

# Fix delimiter char if needed (e.g replace tab with comma)
# sed -i -- 's/ /,/g' ./scripts/test2.csv

# Run script
node scripts/populate.js
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
    { ... }
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

#### Searching products

```
curl -X GET http://localhost:3000/products?query=nut
```

#### Pagination

```
curl -X GET http://localhost:3000/products?query=nut&page=2
```
