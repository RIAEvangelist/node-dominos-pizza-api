# Dominos menu

The `menu.domniosAPIResponse` object is ***HUGE***! It contains the actual dominos menu response with information on everything you could imagine for a Store's Menu. We parse this information and provide a simpler to use menu in `menu.menu`.

If you want to see the easy to use parsed `.menu` object and documentation, check out the [parsed Dominos Pizza Menu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/Menu.md), it is designed to be much easier to use. 


## menu.domniosAPIResponse

|member                   |type  |description|
|------                   |----  |-----------|
|.Misc                    |Object|Contains general information about the API andmenu request to Dominos. Below you will find specific information for this request, and you can see some core information about the requests in the [Domino's API Response Doc](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosAPIResponse.md).|
|.Categorization          |Object|This contains categories of products. Each Category includes Sub categories and all the available products in that sub category for a specific store menu.|
|.Coupons                 |Object||
|.Flavors                 |Object||
|.Products                |Object||
|.Sides                   |Object||
|.Toppings                |Object||
|.Varients                |Object||
|.PreconfiguredProducts   |Object||
|.ShortProductDescriptions|Object||
|.ShortCouponDescriptions |Object||
|.CouponTiers             |Object||
|.UnsupportedProducts     |Object||
|.CookingInstructions     |Object||
|.CookingInstructionGroups|Object||


```js

  menu: {
      Misc: [Object],
      Categorization: [Object],
      Coupons: [Object],
      Flavors: [Object],
      Products: [Object],
      Sides: [Object],
      Sizes: [Object],
      Toppings: [Object],
      Variants: [Object],
      PreconfiguredProducts: [Object],
      ShortProductDescriptions: [Object],
      ShortCouponDescriptions: [Object],
      CouponTiers: [Object],
      UnsupportedProducts: [Object],
      UnsupportedOptions: [Object],
      CookingInstructions: [Object],
      CookingInstructionGroups: [Object]
  }

```


# menu.domniosAPIResponse.Misc

The `menu.domniosAPIResponse.Misc` object contains a little bit of useful information like the `StoreID` and date and time at the stores location. You can see some core information about the requests in the [Domino's API Response Doc](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosAPIResponse.md).

```js

  Misc: {
    //core
    "Status": 0,
    "StatusItems": [],

    //specific to this request
    "StoreID": "4332",
    "BusinessDate": "2021-01-10",
    "StoreAsOfTime": "2021-01-10 14:51:21",
    "LanguageCode": "en",
    "Version": "1.001",
    "ExpiresOn": ""
  },

```

---

# menu.domniosAPIResponse.Categorization

A short example of the `menu.domniosAPIResponse.Categorization` object. This object contains a lot of information. It starts with categories such as `Food` and `Drink`. Inside of each category is an array of sub categories such as `Pizza`, or `Pasta`. 

|member                 |type  |description|
|------                 |------|-----------|
|.Food                  |Object|Food related categories|
|.Coupons               |Object|Coupon related categories|
|.CouponsByProduct      |Object|Coupons sorted into product related categories|
|.PreconfiguredProducts |Object|Products that are allready defined, like a large Cheese Pizza for example|


```js

  Categorization: {
      Food: [Object],
      Coupons: [Object],
      CouponsByProduct: [Object],
      PreconfiguredProducts: [Object]
  },

```

# Categories

Each category is formattes as follows. The product information is contained actually contained deeper within the children of the nested `.categories` array.

|member       |type  |description|
|------       |------|-----------|
|.Categories  |Array |list of the various sub categories of this category|
|.Code        |String|Code for this category|
|.Description |String|Description of the category|
|.Products    |Array |Products contained in this category, which is generally none as products are in the sub categories mostly|
|.Name        |String|Name of this category|
|.Tags        |Object||


## .Food

`menu.domniosAPIResponse.Categorization.Food`


```js

  Food: {
    Categories: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    Code: 'Food',
    Description: 'Food Items',
    Products: [],
    Name: 'Food',
    Tags: {}
  },

```

### .Food.Categories

|member       |type  |description|
|------       |------|-----------|
|.Categories  |Array |list of the various sub categories of this sub category|
|.Code        |String|Code for this category|
|.Description |String|Description of the category|
|.Products    |Array |Products contained in this category, which is none if it contains sub categories, as the products will be in the deepest sub category only|
|.Name        |String|Name of this category. This is usuially the same as `.Code`, but sometimes `.Name` is empty. This makes it unrelable, so we reccomend using `.Code`|
|.Tags        |Object||

List of `.Food` catgories and if they have products or sub categories. You will notice a patter where, if there ***are*** sub categories, there will in turn be no products. If there ***are not*** any sub categories, there will be products.

|category Name|has products |has sub categories|
|-------------|------------ |------------------|
|Pizza        |no           |yes|
|Sandwich     |no           |no|
|Pasta        |yes          |no|
|Wings        |yes          |no|
|Bread        |yes          |no|
|GSalad       |yes          |no|
|Chips        |no           |yes|
|Drinks       |yes          |no|
|Dessert      |yes          |no|
|Sides        |yes          |no|

```js

  Categories: [
    {
      //sub categories for Pizza
      Categories: [Array],
      Code: 'Pizza',
      Description: '',
      //no products because there are sub categories
      Products: [],
      Name: 'Pizza',
      Tags: [Object]
    },
    {
      //no sub categories for drinks
      Categories: [],
      Code: 'Pasta',
      Description: '',
      //since no sub category,
      //there are products
      Products: [Array],
      Name: 'Pasta',
      Tags: [Object]
    },
    ...

```

### Category Products

In each Category that contains no further Sub Categories, there will be a `.Products` Array which contains a list of product codes that are avauilable in this category. These product codes need to be looked up in the `menu.domniosAPIResponse.Procucts` Object.

```js

Products : [
      'S_SCCBT',    'S_SCCHB',
      'S_SCSJP',    'S_SCSBBQ',
      'S_HOTWINGS', 'S_BBQW',
      'S_MILDWING', 'S_PLNWINGS',
      'S_SMANG',    'S_GPRMWING',
      'S_BONELESS'
    ]


```


## .Coupons

`menu.domniosAPIResponse.Categorization.Coupons`


```js

   Coupons: {
    Categories: [ [Object], [Object], [Object], [Object], [Object], [Object] ],
    Code: 'Coupons',
    Description: 'Coupon Items',
    Products: [],
    Name: 'Coupons',
    Tags: {}
  },

```


## .CouponsByProduct

`menu.domniosAPIResponse.Categorization.CouponsByProduct`


```js

CouponsByProduct: {
    Categories: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    Code: 'CouponsByProduct',
    Description: 'Coupon Items by Product',
    Products: [],
    Name: 'Coupons by Product',
    Tags: {}
  },

```


## .PreconfiguredProducts

`menu.domniosAPIResponse.Categorization.PreconfiguredProducts`


```js

PreconfiguredProducts: {
    Categories: [ [Object], [Object] ],
    Code: 'PreconfiguredProducts',
    Description: 'Preconfigured Products',
    Products: [],
    Name: 'Preconfigured Products',
    Tags: {}
  }

```

---




# Full menu example response

Here is a full example from store `4332`. Enjoy perusing the available data.

```js

{
  
  "Misc": {
    "Status": 0,
    "StoreID": "4332",
    "BusinessDate": "2021-01-10",
    "StoreAsOfTime": "2021-01-10 14:51:21",
    "LanguageCode": "en",
    "Version": "1.001",
    "ExpiresOn": ""
  },

  "Categorization": {
    
    "Food": {
      
      "Categories": [
        {
          
          "Categories": [
            
            {
              "Categories": [],
              "Code": "BuildYourOwn",
              "Description": "",
              "Products": [
                "S_PIZZA"
              ],
              "Name": "Build Your Own",
              "Tags": {}
            },
            ...

          ],

          "Code": "Pizza",
          "Description": "",
          "Products": [],
          "Name": "Pizza",
          "Tags": {
            "PartCount": "2",
            "OptionQtys": "0:0.5:1:1.5:2",
            "MaxOptionQty": "10",
            "DefaultSpecialtyCode": "PIZZA",
            "PageTags": "Specialty",
            "NeedsCustomization": true,
            "CouponTier": "MultiplePizza:MultiplePizzaB:MultiplePizzaC:MultiplePizzaD",
            "IsDisplayedOnMakeline": true
          }
        },
        
        {
          
          "Categories": [],
          
          "Code": "Pasta",
          "Description": "",
          "Products": [
            "S_ALFR",
            "S_MARIN",
            ...
          ],
          "Name": "Pasta",
          "Tags": {
            "OptionQtys": "0:1",
            "MaxOptionQty": "3",
            "IsDisplayedOnMakeline": true
          }
        },
        ...
      ]  
    },

    "Coupons": {
      "Categories": [
        {
          "Categories": [],
          "Code": "Feeds1To2",
          "Description": "",
          "Products": [
            "5940",
            "3715",
            ...
          ],
          "Name": "Feeds 1-2",
          "Tags": {}
        },
        ...
    },


    "CouponsByProduct": {
      
      "Categories": [
        {
          "Categories": [],
          "Code": "CouponPizza",
          "Description": "",
          "Products": [
            "2013",
            "3715",
            ...
          ],
          "Name": "",
          "Tags": {}
        },
        ...

      ],

      "Code": "CouponsByProduct",
      "Description": "Coupon Items by Product",
      "Products": [],
      "Name": "Coupons by Product",
      "Tags": {}
    },

    "PreconfiguredProducts": {
      
      "Categories": [
        
        {
          "Categories": [
            
            {
              "Categories": [],
              "Code": "GroupOrderingPizza",
              "Description": "Pizza",
              "Products": [
                "14SCREEN",
                "P_14SCREEN",
                ...
              ],
              "Name": "Pizza",
              "Tags": {}
            },
            ...

          ],
          "Code": "GroupOrdering",
          "Description": "Group Ordering",
          "Products": [],
          "Name": "Group Ordering",
          "Tags": {}
        },
        
        {
          "Categories": [
            {
              "Categories": [],
              "Code": "PopularItemsPizza",
              "Description": "Pizza",
              "Products": [
                "XC_14SCREEN",
                "PXC_14SCREEN",
                ...
              ],
              "Name": "Pizza",
              "Tags": {}
            },
            ...

          ],
          "Code": "PopularItems",
          "Description": "Popular Items",
          "Products": [],
          "Name": "Popular Items",
          "Tags": {}
        }
      ],
      "Code": "PreconfiguredProducts",
      "Description": "Preconfigured Products",
      "Products": [],
      "Name": "Preconfigured Products",
      "Tags": {}
    }
  },


  "Coupons": {
    "2013": {
      "Code": "2013",
      "ImageCode": "2T-GFC",
      "Description": "",
      "Name": "Small Gluten Free Crust Pizza with up to 3 Toppings",
      "Price": "9.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "EffectiveOn": "2013-09-24",
        "MultiSame": true,
        "Combine": "Complementary"
      },
      "Local": true,
      "Bundle": false
    },
    ...

  },

  "Flavors": {
    "Pasta": {
      "PASTA": {
        "Code": "PASTA",
        "Description": "Pasta served in a dish.",
        "Local": false,
        "Name": "Dish",
        "SortSeq": "01"
      },
      ...

    },
    
    "Pizza": {
      "HANDTOSS": {
        "Code": "HANDTOSS",
        "Description": "Garlic-seasoned crust with a rich, buttery taste.",
        "Local": false,
        "Name": "Hand Tossed",
        "SortSeq": "01"
      },
      ...

    },
    
    "Wings": {
      "BACTOM": {
        "Code": "BACTOM",
        "Description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with garlic parmesan white sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.",
        "Local": false,
        "Name": "Specialty Chicken – Crispy Bacon & Tomato",
        "SortSeq": "01"
      },
      ...

    }
  },


  "Products": {
    ...
    
    "F_COKE": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_COKE",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments.",
      "ImageCode": "F_COKE",
      "Local": false,
      "Name": "Coke®",
      "ProductType": "Drinks",
      "Tags": {},
      "Variants": [
        "20BCOKE",
        "2LCOKE"
      ]
    },
    
    ...
    
    "S_BUILD": {
      "AvailableToppings": "Xf=0:1,Xm=0:1,P,S,B,Pm,H,K,Du,C,E,Fe,Cs,Cp,F,G,J,M,N,O,R,Rr,Si,Td,Z",
      "AvailableSides": "",
      "Code": "S_BUILD",
      "DefaultToppings": "Xf=1",
      "DefaultSides": "",
      "Description": "Choose a sauce and up to 3 ingredients from more than a dozen meat or vegetable toppings.",
      "ImageCode": "S_BUILD",
      "Local": false,
      "Name": "Build Your Own Pasta",
      "ProductType": "Pasta",
      "Tags": {
        "OptionQtys": [
          "0",
          "1"
        ],
        "MaxOptionQty": "3",
        "IsDisplayedOnMakeline": true,
        "SauceRequired": true
      },
      "Variants": [
        "PINPASBD",
        "PINBBLBD"
      ]
    },
    
    ...
    
    "S_PIZZA": {
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_PIZZA",
      "DefaultToppings": "X=1,C=1",
      "DefaultSides": "",
      "Description": "A custom pizza made to order. Choose from any of our delicious crust styles, including Handmade Pan.",
      "ImageCode": "S_PIZZA",
      "Local": false,
      "Name": "Pizza",
      "ProductType": "Pizza",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2"
        ],
        "MaxOptionQty": "10",
        "PartCount": "2",
        "NeedsCustomization": true,
        "CouponTier": [
          "MultiplePizza",
          "MultiplePizzaB",
          "MultiplePizzaC",
          "MultiplePizzaD"
        ],
        "IsDisplayedOnMakeline": true,
        "sodiumWarningEnabled": true
      },
      "Variants": [
        "10SCREEN",
        "12SCREEN",
        ...

      ]
    },
    
    ...

  },


  "Sides": {
    "Bread": {
      "SIDMAR": {
        "Availability": [],
        "Code": "SIDMAR",
        "Description": "A sweet tomato sauce blended with garlic, basil and oregano",
        "Local": false,
        "Name": "Marinara",
        "Tags": {
          "Side": true
        }
      },
      ...

    },


    "Dessert": {
      "SIDICE": {
        "Availability": [],
        "Code": "SIDICE",
        "Description": "",
        "Local": false,
        "Name": "Icing",
        "Tags": {
          "Side": true
        }
      }
    },
    
    
    "GSalad": {
      "CAESAR": {
        "Availability": [],
        "Code": "CAESAR",
        "Description": "A subtle combination of Parmesan cheese, olive oil, lemon, garlic, onion and black pepper.",
        "Local": false,
        "Name": "Caesar",
        "Tags": {
          "Side": true
        }
      },
      ...

    },


    "Wings": {
      "HOTCUP": {
        "Availability": [],
        "Code": "HOTCUP",
        "Description": "Domino's own spicy buffalo sauce.",
        "Local": false,
        "Name": "Hot Buffalo Dipping Cup",
        "Tags": {
          "Side": true
        }
      },
      ...

    }
  },

  "Sizes": {
    "Bread": {
      "BRD8": {
        "Code": "BRD8",
        "Description": "",
        "Local": false,
        "Name": "8-Piece",
        "SortSeq": "02"
      },
      ...

    },
    "CHARGES": {
      "CHGONE": {
        "Code": "CHGONE",
        "Description": "",
        "Local": false,
        "Name": "Each",
        "SortSeq": "01"
      }
    },
    "Dessert": {
      "DRT2": {
        "Code": "DRT2",
        "Description": "",
        "Local": false,
        "Name": "2-Piece",
        "SortSeq": "02"
      },
      ...

    },
    "Drinks": {
      "2LTB": {
        "Code": "2LTB",
        "Description": "",
        "Local": false,
        "Name": "2-Liter Bottle",
        "SortSeq": "01"
      },
      ...

    },
    "Pizza": {
      "10": {
        "Code": "10",
        "Description": "",
        "Local": false,
        "Name": "Small (10\")",
        "SortSeq": "03"
      },
      ...

    },
    "Wings": {
      "8PCW": {
        "Code": "8PCW",
        "Description": "",
        "Local": false,
        "Name": "8-Piece",
        "SortSeq": "12"
      },
      ...

    }
  },
  "Toppings": {
    "Bread": {
      "K": {
        "Availability": [],
        "Code": "K",
        "Description": "",
        "Local": false,
        "Name": "Bacon",
        "Tags": {
          "Meat": true
        }
      },
      ...

    },
    "Pasta": {
      "Xf": {
        "Availability": [],
        "Code": "Xf",
        "Description": "",
        "Local": false,
        "Name": "Alfredo Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "ExclusiveGroup": "Sauce",
          "Sauce": true,
          "NonMeat": true
        }
      },
      ...

    },
    "Pizza": {
      "X": {
        "Availability": [],
        "Code": "X",
        "Description": "",
        "Local": false,
        "Name": "Robust Inspired Tomato Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "ExclusiveGroup": "Sauce",
          "Sauce": true,
          "NonMeat": true
        }
      },
      ...

    },
    "Sandwich": {
      "X": {
        "Availability": [],
        "Code": "X",
        "Description": "",
        "Local": false,
        "Name": "Pizza Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "Sauce": true,
          "NonMeat": true
        }
      },
      ...

    }
  },


  "Variants": {
    
    ...
    
    "20BSPRITE": {
      "Code": "20BSPRITE",
      "FlavorCode": "",
      "ImageCode": "20BSPRITE",
      "Local": false,
      "Name": "20oz Bottle Sprite®",
      "Price": "2.09",
      "ProductCode": "F_SPRITE",
      "SizeCode": "20OZB",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "2.09",
        "Price1-0": "2.09",
        "Price1-3": "2.09",
        "Price2-3": "2.09",
        "Price1-4": "2.09",
        "Price2-2": "2.09",
        "Price1-1": "2.09",
        "Price2-1": "2.09",
        "Price1-2": "2.09",
        "Price2-0": "2.09"
      },
      "Surcharge": "0"
    },
    
    ...
    
    "P12IREPV": {
      "Code": "P12IREPV",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IREPV",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Pacific Veggie",
      "Price": "14.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        ...

      },
      "Surcharge": "0"
    },
    
    ...
    
    "14SCREEN": {
      "Code": "14SCREEN",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "14SCREEN",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Pizza",
      "Price": "13.99",
      "ProductCode": "S_PIZZA",
      "SizeCode": "14",
      "Tags": {
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.55",
        "Price1-0": "13.99",
        ...

      },
      "Surcharge": "0"
    },
    
    ...
    
    "P16IBKCZ": {
      "Code": "P16IBKCZ",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKCZ",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Wisconsin 6 Cheese Pizza",
      "Price": "19.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        ...

      },
      "Surcharge": "0"
    },
    ...
    
  },


  "PreconfiguredProducts": {
    
    "14SCREEN": {
      "Code": "14SCREEN",
      "Description": "Cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
      "Name": "Hand Tossed Large Cheese",
      "Size": "Large (14\")",
      "Options": "",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {
        "Banner": "vegetarian"
      }
    },
    
    "P_14SCREEN": {
      "Code": "P_14SCREEN",
      "Description": "Pepperoni and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
      "Name": "Hand Tossed Pepperoni",
      "Size": "Large (14\")",
      "Options": "P=1",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {}
    },
    
    ...
    
  },
  "ShortProductDescriptions": {
    
    ...

    "2LCOKE": {
      "Code": "2LCOKE",
      "Description": "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments."
    },
    
    ...

    "PSANSAPH": {
      "Code": "PSANSAPH",
      "Description": "Experience delicious slices of steak topped with American and provolone cheese, fresh onions, green peppers and mushrooms. Oven-baked to perfection."
    },
    
    ...

  },


  "ShortCouponDescriptions": {
    "8223": {
      "Code": "8223",
      "Description": "Four 20oz Coke Bundle"
    },
    ...

  },
  
  
  "CouponTiers": {
    
    "MultiplePizzaC": {
      "Code": "MultiplePizzaC",
      "Coupons": {
        "8651C": {
          "Code": "8651C",
          "CouponTierThreshold": 7,
          "CouponTierPercentOff": 15,
          "Name": "15% off all pizzas",
          "Description": "15% de descuento todas las pizzas ",
          "ServiceMethod": ""
        },
        ...

      }
    },
    ...

  },


  "UnsupportedProducts": {
    "CEARVI": {
      "PulseCode": "CEARVI",
      "Description": "Each Raspberry Vinaigrette"
    },
    
    ...

    "PSANSAEP": {
      "PulseCode": "PSANSAEP",
      "Description": "Sandwich Bread Xtra Meat Philly Sandwich"
    },
    ...

  },
  "UnsupportedOptions": {
    "Bd": {
      "PulseCode": "Bd",
      "Description": "Blue Cheese Dip Cup"
    },
    ...

  },


  "CookingInstructions": {
    "WD": {
      "Code": "WD",
      "Name": "Well Done",
      "Description": "",
      "Group": "BAKE"
    },
    "NB": {
      "Code": "NB",
      "Name": "Normal Bake",
      "Description": "",
      "Group": "BAKE"
    },
    ...
    
  }
}

```