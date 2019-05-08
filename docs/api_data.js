define({ "api": [
  {
    "type": "get",
    "url": "/categories",
    "title": "Fetch all categories",
    "name": "GetCategories",
    "group": "Category",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Current page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results",
            "description": "<p>Number of results.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Categories.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories/:id",
    "title": "Fetch one category",
    "name": "GetCategory",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Category.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/categories/:id/products",
    "title": "Fetch products of one category",
    "name": "GetCategoryProducts",
    "group": "Category",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Category id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Current page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results",
            "description": "<p>Number of results.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Products.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/routes/categories.js",
    "groupTitle": "Category"
  },
  {
    "type": "get",
    "url": "/products/:id",
    "title": "Fetch one product",
    "name": "GetProduct",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Product.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/:id/misc_data",
    "title": "Fetch misc data of product",
    "name": "GetProductMiscData",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Misc data of product.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products/:id/nutrition_facts",
    "title": "Fetch nutrition facts of product",
    "name": "GetProductNutritionFacts",
    "group": "Products",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Integer",
            "optional": false,
            "field": "id",
            "description": "<p>Product id</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Object",
            "optional": false,
            "field": "item",
            "description": "<p>Nutrition facts of product.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/routes/products.js",
    "groupTitle": "Products"
  },
  {
    "type": "get",
    "url": "/products",
    "title": "Fetch all products",
    "name": "GetProducts",
    "group": "Products",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Boolean",
            "optional": false,
            "field": "success",
            "description": "<p>Request status</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "limit",
            "description": "<p>Lastname of the User.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "page",
            "description": "<p>Current page.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "offset",
            "description": "<p>Offset of the request.</p>"
          },
          {
            "group": "Success 200",
            "type": "Integer",
            "optional": false,
            "field": "results",
            "description": "<p>Number of results.</p>"
          },
          {
            "group": "Success 200",
            "type": "Array",
            "optional": false,
            "field": "items",
            "description": "<p>Products.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "server/app/routes/products.js",
    "groupTitle": "Products"
  }
] });
