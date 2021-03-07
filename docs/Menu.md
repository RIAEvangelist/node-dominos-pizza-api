# Dominos Menu
Menu is constructed `async`, so when you instantiate it, you should await it, like this : ` const menu = await new Menu(...)` this will work in your main node code without wrapping it in an anonymous async function.

`.menu` provides ***HUGE*** amounts of well formatted menu data parsed from the `menu.dominosAPIResponse` object. This information is parsed from the dominos api when the instance is instantiated.

If you want to see the ***RAW*** `menu.dominosAPIResponse` object and documentation, check out the [RAW DominosMenu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosMenu.md) instead. That object is huge and a little difficult to use which is why we provide this parsed menu.

If you have cloned this repo, you can run the example with this command:
`node ./example/menu.js`

Constructor
====

`await new Menu(4337)`

|argument|type          |required|default|
|--------|------        |--------|-------|
|storeID |Number/String |true    |       |
|lang    |String        |false   |en     |


```js

import {Menu} from 'dominos';

const menu=await new Menu(4337);

console.dir(menu,{depth:1});

```

Instance
====

|member/method      |type               |description|
|-------------      |------             |-------    |
|.menu              |object             |parsed and more friendly menu for the store documented below.|
|.dominosAPIResponse|API response object|see more info in the [RAW DominosMenu.md](https://github.com/RIAEvangelist/node-dominos-pizza-api/blob/master/docs/DominosMenu.md)|


# .menu

|member                     |type  |description|
|------                     |----  |-----------|
|.categories                |Object|categorized products|
|.coupons                   |Object|coupons details that can be used for discounts|
|.flavors                   |Object|types of flavors and sauces for different foods|
|.products                  |Object|a list of various products you can order. This does not include all of the same products from the `.categories` member sadly.|
|.sides                     |Object|side dishes and side orders|
|.sizes                     |Object|various order sizes and pice counts for products|
|.toppings                  |Object|toppings that can be applied to various dishes and pizzas|
|.variants                  |Object|customized or special versions of popular dishes|
|.preconfiguredProducts     |Object|a selection of preconfigured products to order. There are more items like, sorted into categories like `popularItems` in the preconfigured category in `.categories`|
|.shortProductDescriptions  |Object|a strange object which contains a seeminly random set of short description for just a few products.|
|.unsupported               |Object|unsupported products and options. This may be store specific.|
|.cooking                   |Object|cooking instrictions and options|



```js

    {
        categories: [Object],
        coupons: [Object],
        flavors: [Object],
        products: [Object],
        sides: [Object],
        sizes: [Object],
        toppings: [Object],
        variants: [Object],
        preconfiguredProducts: [Object],
        shortProductDescriptions: [Object],
        unsupported: [Object],
        cooking: [Object]
    }

```


# .menu.categories

|member                 |type  |description|
|------                 |----  |-----------|
|.food                  |Object|various types of food product categories|
|.coupons               |Object|coupon categories|
|.couponsByProduct      |Object|coupons sorted by product|
|.preconfiguredProducts |Object|categories of preconfigured products, including items that are popular|


```js

{
    food: {
        pizza: [Object],
        sandwich: [Object],
        pasta: [Object],
        wings: [Object],
        bread: [Object],
        gSalad: [Object],
        chips: [Object],
        drinks: [Object],
        dessert: [Object],
        sides: [Object]
    },
    coupons: {
        feeds1To2: [Object],
        feeds3To5: [Object],
        feeds6Plus: [Object],
        lunchOffers: [Object],
        all: [Object],
        allStoreCoupons: [Object]
    },
    couponsByProduct: {
        couponPizza: [Object],
        couponDessert: [Object],
        couponDrinks: [Object],
        couponBread: [Object],
        couponWings: [Object],
        couponSandwich: [Object],
        couponPasta: [Object],
        couponGSalad: [Object],
        couponSides: [Object]
    },
    preconfiguredProducts: { 
      groupOrdering: [Object], 
      popularItems: [Object] 
    }
}

```




# Detailed Menu.menu inspection

```js

{
    "categories": {
        "food": {
            "pizza": {
                "code": "Pizza",
                "name": "Pizza",
                "hasSubCategories": true,
                "subCategories": {
                    "buildYourOwn": {
                        "code": "BuildYourOwn",
                        "name": "Build Your Own",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "S_PIZZA"
                        ],
                        "hasTags": false
                    },
                    "artisan": {
                        "code": "Artisan",
                        "name": "Artisan",
                        "hasSubCategories": false,
                        "hasProducts": false,
                        "hasTags": false
                    },
                    "specialty": {
                        "code": "Specialty",
                        "name": "Specialty Pizzas",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "S_PZTACO",
                            "S_PZBRGR",
                            "S_ZZ",
                            "S_MX",
                            "S_PIZPH",
                            "S_PIZPV",
                            "S_PIZUH",
                            "S_DX",
                            "S_PIZCR",
                            "S_PIZBP",
                            "S_PIZPX",
                            "S_PIZCK",
                            "S_PIZCZ",
                            "S_PISPF"
                        ],
                        "hasTags": false
                    }
                },
                "hasProducts": false,
                "hasTags": false
            },
            "sandwich": {
                "code": "Sandwich",
                "name": "Sandwiches",
                "hasSubCategories": true,
                "subCategories": {
                    "slice": {
                        "code": "Slice",
                        "name": "Domino's Sandwich Slice™",
                        "hasSubCategories": false,
                        "hasProducts": false,
                        "hasTags": false
                    },
                    "sandwich": {
                        "code": "Sandwich",
                        "name": "Sandwiches",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "S_BUFC",
                            "S_CHHB",
                            "S_MEDV",
                            "S_PHIL",
                            "S_CHIKK",
                            "S_ITAL",
                            "S_CHIKP"
                        ],
                        "hasTags": false
                    },
                    "hoagie": {
                        "code": "Hoagie",
                        "name": "Hoagies",
                        "hasSubCategories": false,
                        "hasProducts": false,
                        "hasTags": false
                    }
                },
                "hasProducts": false,
                "hasTags": false
            },
            "pasta": {
                "code": "Pasta",
                "name": "Pasta",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "S_ALFR",
                    "S_MARIN",
                    "S_CARB",
                    "S_PRIM",
                    "S_BUILD"
                ],
                "hasTags": false
            },
            "wings": {
                "code": "Wings",
                "name": "Chicken",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "S_SCCBT",
                    "S_SCCHB",
                    "S_SCSJP",
                    "S_SCSBBQ",
                    "S_HOTWINGS",
                    "S_BBQW",
                    "S_MILDWING",
                    "S_PLNWINGS",
                    "S_SMANG",
                    "S_GPRMWING",
                    "S_BONELESS"
                ],
                "hasTags": false
            },
            "bread": {
                "code": "Bread",
                "name": "Breads",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "F_PARMT",
                    "F_GARLICT",
                    "F_SCBRD",
                    "F_SSBRD",
                    "F_SBBRD",
                    "F_PBITES"
                ],
                "hasTags": false
            },
            "gSalad": {
                "code": "GSalad",
                "name": "Salads",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "F_GARDEN",
                    "F_CCAESAR"
                ],
                "hasTags": false
            },
            "chips": {
                "code": "Chips",
                "name": "Chips",
                "hasSubCategories": false,
                "hasProducts": false,
                "hasTags": false
            },
            "drinks": {
                "code": "Drinks",
                "name": "Drinks",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "F_COKE",
                    "F_DIET",
                    "F_SPRITE",
                    "F_WATER",
                    "F_ORAN",
                    "F_LEMND"
                ],
                "hasTags": false
            },
            "dessert": {
                "code": "Dessert",
                "name": "Desserts",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "F_CINNAT",
                    "F_MRBRWNE",
                    "F_LAVA"
                ],
                "hasTags": false
            },
            "sides": {
                "code": "Sides",
                "name": "Extras",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "F_SIDBAN",
                    "F_SIDJAL",
                    "F_SIDPAR",
                    "F_SIDRED",
                    "F_HOTCUP",
                    "F_SMHAB",
                    "F_BBQC",
                    "F_SIDRAN",
                    "F_Bd",
                    "F_SIDGAR",
                    "F_SIDICE",
                    "F_SIDMAR",
                    "F_CAESAR",
                    "F_ITAL",
                    "F_RANCHPK",
                    "F_STJUDE",
                    "F_BALVIN",
                    "F__SCHOOL"
                ],
                "hasTags": false
            }
        },
        "coupons": {
            "feeds1To2": {
                "code": "Feeds1To2",
                "name": "Feeds 1-2",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "5940",
                    "3715",
                    "2013",
                    "8575",
                    "8118",
                    "9175",
                    "9174",
                    "9193"
                ],
                "hasTags": false
            },
            "feeds3To5": {
                "code": "Feeds3To5",
                "name": "Feeds 3-5",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "5385",
                    "5940",
                    "5918",
                    "9171",
                    "2013",
                    "9003",
                    "4337",
                    "9175",
                    "9174",
                    "9193"
                ],
                "hasTags": false
            },
            "feeds6Plus": {
                "code": "Feeds6Plus",
                "name": "Feeds 6+",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "2013",
                    "9193"
                ],
                "hasTags": false
            },
            "lunchOffers": {
                "code": "LunchOffers",
                "name": "LunchOffers",
                "hasSubCategories": false,
                "hasProducts": false,
                "hasTags": false
            },
            "all": {
                "code": "All",
                "name": "See All",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "5162",
                    "4342",
                    "5385",
                    "5940",
                    "3715",
                    "0512",
                    "5918",
                    "9171",
                    "2013",
                    "9003",
                    "4337",
                    "8575",
                    "8118",
                    "9175",
                    "9174",
                    "9193"
                ],
                "hasTags": false
            },
            "allStoreCoupons": {
                "code": "AllStoreCoupons",
                "name": "All Available Coupons",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "5162",
                    "4342",
                    "5385",
                    "5940",
                    "3715",
                    "0512",
                    "5918",
                    "9171",
                    "2013",
                    "9003",
                    "4337",
                    "8575",
                    "8118",
                    "9175",
                    "9174",
                    "9193"
                ],
                "hasTags": false
            }
        },
        "couponsByProduct": {
            "couponPizza": {
                "code": "CouponPizza",
                "name": "CouponPizza",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "2013",
                    "3715",
                    "4337",
                    "4342",
                    "5162",
                    "5385",
                    "5918",
                    "5940",
                    "9003",
                    "9171",
                    "9174",
                    "9175",
                    "9193"
                ],
                "hasTags": false
            },
            "couponDessert": {
                "code": "CouponDessert",
                "name": "CouponDessert",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "0512",
                    "9193"
                ],
                "hasTags": false
            },
            "couponDrinks": {
                "code": "CouponDrinks",
                "name": "CouponDrinks",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "4337",
                    "5918",
                    "8118",
                    "9003"
                ],
                "hasTags": false
            },
            "couponBread": {
                "code": "CouponBread",
                "name": "CouponBread",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "4337",
                    "5918",
                    "8118",
                    "9193"
                ],
                "hasTags": false
            },
            "couponWings": {
                "code": "CouponWings",
                "name": "CouponWings",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "3715",
                    "5940",
                    "9171",
                    "9174",
                    "9193"
                ],
                "hasTags": false
            },
            "couponSandwich": {
                "code": "CouponSandwich",
                "name": "CouponSandwich",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "9193"
                ],
                "hasTags": false
            },
            "couponPasta": {
                "code": "CouponPasta",
                "name": "CouponPasta",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "9193"
                ],
                "hasTags": false
            },
            "couponGSalad": {
                "code": "CouponGSalad",
                "name": "CouponGSalad",
                "hasSubCategories": false,
                "hasProducts": true,
                "products": [
                    "8575",
                    "9193"
                ],
                "hasTags": false
            },
            "couponSides": {
                "code": "CouponSides",
                "name": "CouponSides",
                "hasSubCategories": false,
                "hasProducts": false,
                "hasTags": false
            }
        },
        "preconfiguredProducts": {
            "groupOrdering": {
                "code": "GroupOrdering",
                "name": "Group Ordering",
                "description": "Group Ordering",
                "hasSubCategories": true,
                "subCategories": {
                    "groupOrderingPizza": {
                        "code": "GroupOrderingPizza",
                        "name": "Pizza",
                        "description": "Pizza",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "14SCREEN",
                            "P_14SCREEN",
                            "S_14SCREEN",
                            "PS_14SCREEN",
                            "HN_14SCREEN",
                            "PM_14SCREEN",
                            "P12IPAZA",
                            "P_P12IPAZA",
                            "P_P10IGFZA",
                            "14SCEXTRAV",
                            "P14ITHPV"
                        ],
                        "hasTags": false
                    },
                    "groupOrderingChicken": {
                        "code": "GroupOrderingChicken",
                        "name": "Chicken",
                        "description": "Chicken",
                        "hasSubCategories": false,
                        "hasProducts": false,
                        "hasTags": false
                    },
                    "groupOrderingBread": {
                        "code": "GroupOrderingBread",
                        "name": "Breads",
                        "description": "Breads",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "B32PBIT",
                            "B8PCSCB"
                        ],
                        "hasTags": false
                    },
                    "groupOrderingDessert": {
                        "code": "GroupOrderingDessert",
                        "name": "Desserts",
                        "description": "Desserts",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "MARBRWNE"
                        ],
                        "hasTags": false
                    },
                    "groupOrderingDrink": {
                        "code": "GroupOrderingDrink",
                        "name": "Drinks",
                        "description": "Drinks",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "2LCOKE",
                            "2LDCOKE",
                            "2LSPRITE"
                        ],
                        "hasTags": false
                    }
                },
                "hasProducts": false,
                "hasTags": false
            },
            "popularItems": {
                "code": "PopularItems",
                "name": "Popular Items",
                "description": "Popular Items",
                "hasSubCategories": true,
                "subCategories": {
                    "popularItemsPizza": {
                        "code": "PopularItemsPizza",
                        "name": "Pizza",
                        "description": "Pizza",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "XC_14SCREEN",
                            "PXC_14SCREEN",
                            "HNXC_12SCREEN",
                            "MPXC_12SCREEN",
                            "XCFeCsCpRMORrSiTd_P12IREPV"
                        ],
                        "hasTags": false
                    },
                    "popularItemsSandwichesSidesDesserts": {
                        "code": "PopularItemsSandwichesSidesDesserts",
                        "name": "Sandwiches Sides Desserts",
                        "description": "Sandwiches Sides Desserts",
                        "hasSubCategories": false,
                        "hasProducts": true,
                        "products": [
                            "RdCKDuPv_PSANSACB",
                            "XfDu_PINPASCA",
                            "SIDRAN_W08PBBQW",
                            "B2PCLAVA"
                        ],
                        "hasTags": false
                    }
                },
                "hasProducts": false,
                "hasTags": false
            }
        }
    },
    "coupons": {
        "products": {
            "2013": {
                "code": "2013",
                "imageCode": "2T-GFC",
                "description": "",
                "name": "Small Gluten Free Crust Pizza with up to 3 Toppings",
                "price": "9.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "effectiveOn": "2013-09-24",
                    "multiSame": true,
                    "combine": "Complementary"
                },
                "local": true,
                "bundle": false
            },
            "3715": {
                "code": "3715",
                "imageCode": "M2TPAN_8C",
                "description": "",
                "name": "Medium 2-Topping Handmade Pan Pizza and 8-Piece Chicken",
                "price": "19.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "effectiveOn": "2012-09-13"
                },
                "local": true,
                "bundle": true
            },
            "4337": {
                "code": "4337",
                "imageCode": "2M3T,SCB,2L",
                "description": "",
                "name": "2 Medium 3 Topping Pizzas, Stuffed Cheesy Bread & a 2 Liter",
                "price": "24.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ]
                },
                "local": true,
                "bundle": true
            },
            "4342": {
                "code": "4342",
                "imageCode": "LSO_L3T,M1T",
                "description": "",
                "name": "2 or more Medium 3-Topping Pizzas. Each Priced At:",
                "price": "8.49",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "lSO_L3T": true,
                    "m1T": true
                },
                "local": true,
                "bundle": false
            },
            "5162": {
                "code": "5162",
                "imageCode": "D4P",
                "description": "",
                "name": "Any Large 5-Topping Pizza or Medium 5-Topping Pan Pizza or 5-Topping Gluten Free Pizza - Carry Out Only",
                "price": "10.99",
                "tags": {
                    "serviceMethods": "Carryout",
                    "validServiceMethods": "Carryout"
                },
                "local": true,
                "bundle": true
            },
            "5385": {
                "code": "5385",
                "imageCode": "2L2T",
                "description": "",
                "name": "2 or More Large 2 Topping Pizzas. Each Priced At:",
                "price": "11.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "effectiveOn": "2012-02-22",
                    "multiSame": true
                },
                "local": true,
                "bundle": false
            },
            "5918": {
                "code": "5918",
                "imageCode": "1LSpec,PBB,2LTR",
                "description": "",
                "name": "Large Specialty Pizza, 16 pc Parmesan bread bites and a 2 liter",
                "price": "21.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ]
                },
                "local": true,
                "bundle": true
            },
            "5940": {
                "code": "5940",
                "imageCode": "5940_Lg_Specialty_pizza_10pc_Chicken_",
                "description": "",
                "name": "LG Specialty Pizza and 10pc Chicken",
                "price": "24.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "effectiveOn": "2020-08-24"
                },
                "local": true,
                "bundle": true
            },
            "8118": {
                "code": "8118",
                "imageCode": "16PBB,2L",
                "description": "",
                "name": "16 Piece Parmesan Bread Bites and a 2-Liter",
                "price": "6.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "combine": "Complementary"
                },
                "local": true,
                "bundle": true
            },
            "8575": {
                "code": "8575",
                "imageCode": "GardenSalad",
                "description": "",
                "name": "Choose any Salad",
                "price": "6.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "effectiveOn": "2012-06-25",
                    "combine": "Complementary"
                },
                "local": true,
                "bundle": true
            },
            "9003": {
                "code": "9003",
                "imageCode": "2L1T,LTR",
                "description": "",
                "name": "2 Large 1 Topping Pizzas and a 2-Liter of Coca-Cola®",
                "price": "22.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ]
                },
                "local": true,
                "bundle": true
            },
            "9171": {
                "code": "9171",
                "imageCode": "1L1T,C",
                "description": "",
                "name": "Large 1-Topping Pizza & a 8-piece order of Chicken",
                "price": "19.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "effectiveOn": "2011-02-21"
                },
                "local": true,
                "bundle": true
            },
            "9174": {
                "code": "9174",
                "imageCode": "AUG19WLC",
                "description": "",
                "name": "Carryout pizza & chicken for $7.99 each: All pizzas up to 3 toppings on any of our 5 crusts or 10-piece wings or boneless chicken. Excludes XL & Specialty Pizzas. Crust availability varies by size.",
                "price": "7.99",
                "tags": {
                    "serviceMethods": "Carryout",
                    "validServiceMethods": "Carryout",
                    "showBestPriceMessage": true,
                    "combinedSizeAndCrust": true
                },
                "local": false,
                "bundle": false
            },
            "9175": {
                "code": "9175",
                "imageCode": "1LSP",
                "description": "",
                "name": "Any Large Specialty Pizza",
                "price": "14.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "multiSame": true
                },
                "local": true,
                "bundle": false
            },
            "9193": {
                "code": "9193",
                "imageCode": "599mixmatch",
                "description": "",
                "name": "Choose any 2 or more; Medium 2-Topping Pizza, Bread Twists, Salad, Marbled Cookie Brownie, Specialty Chicken, Oven Baked Sandwich, Stuffed Cheesy Bread, 8-Piece Boneless Chicken, or Pasta in a Dish for $5.99 each.",
                "price": "",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "onFulFilledUpsellCoupon": "8223",
                    "showBestPriceMessage": true,
                    "effectiveOn": "2013-01-03",
                    "noPulseDefaults": true,
                    "wizardUpsells": [
                        "{'Pizza'",
                        "{'TitleText'",
                        "'Looking for Specialty Pizza?'"
                    ],
                    "'LinkText':'Upgrade for only $2 more'": true,
                    "'CouponCode':'8682'}}": true
                },
                "local": false,
                "bundle": false
            },
            "0512": {
                "code": "0512",
                "imageCode": "L3T,MCB",
                "description": "",
                "name": "Marble Cookie Brownie",
                "price": "6.99",
                "tags": {
                    "validServiceMethods": [
                        "Carryout",
                        "Delivery",
                        "Hotspot"
                    ],
                    "combine": "Complementary"
                },
                "local": true,
                "bundle": true
            }
        },
        "shortCouponDescriptions": {
            "8223": {
                "code": "8223",
                "description": "Four 20oz Coke Bundle"
            },
            "8682": {
                "code": "8682",
                "description": "Mix & Match"
            },
            "9193": {
                "code": "9193",
                "description": "Mix & Match"
            }
        },
        "couponTiers": {
            "multiplePizzaC": {
                "code": "MultiplePizzaC",
                "coupons": {
                    "8651C": {
                        "code": "8651C",
                        "couponTierThreshold": 7,
                        "couponTierPercentOff": 15,
                        "name": "15% off all pizzas",
                        "description": "15% de descuento todas las pizzas ",
                        "serviceMethod": ""
                    },
                    "8652C": {
                        "code": "8652C",
                        "couponTierThreshold": 10,
                        "couponTierPercentOff": 20,
                        "name": "20% off all pizzas",
                        "description": "20% de descuento todas las pizzas",
                        "serviceMethod": ""
                    }
                }
            },
            "multiplePizza": {
                "code": "MultiplePizza",
                "coupons": {
                    "8650": {
                        "code": "8650",
                        "couponTierThreshold": 4,
                        "couponTierPercentOff": 10,
                        "name": "10% off all pizzas",
                        "description": "Group order Discount: 10% off any pizza at menu price. Online only when you order 4+ pizzas",
                        "serviceMethod": ""
                    },
                    "8651": {
                        "code": "8651",
                        "couponTierThreshold": 7,
                        "couponTierPercentOff": 15,
                        "name": "15% off all pizzas",
                        "description": "Group order Discount: 15% off any pizza at menu price. Online only when you order 7+ pizzas",
                        "serviceMethod": ""
                    },
                    "8652": {
                        "code": "8652",
                        "couponTierThreshold": 10,
                        "couponTierPercentOff": 20,
                        "name": "20% off all pizzas",
                        "description": "Group Order Discount: 20% off any pizza at menu price. Online Only when you order 10+ pizzas",
                        "serviceMethod": ""
                    }
                }
            }
        }
    },
    "flavors": {
        "pasta": {
            "PASTA": {
                "code": "PASTA",
                "description": "Pasta served in a dish.",
                "local": false,
                "name": "Dish",
                "sortSeq": "01"
            },
            "BBOWL": {
                "code": "BBOWL",
                "description": "Pasta served in a bread bowl and then baked to perfection.",
                "local": false,
                "name": "BreadBowl",
                "sortSeq": "02"
            }
        },
        "pizza": {
            "HANDTOSS": {
                "code": "HANDTOSS",
                "description": "Garlic-seasoned crust with a rich, buttery taste.",
                "local": false,
                "name": "Hand Tossed",
                "sortSeq": "01"
            },
            "NPAN": {
                "code": "NPAN",
                "description": "Two layers of cheese, toppings to the edge, baked in a pan for a crust that is golden and crispy with a buttery taste.",
                "local": false,
                "name": "Handmade Pan",
                "sortSeq": "02"
            },
            "THIN": {
                "code": "THIN",
                "description": "Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.",
                "local": false,
                "name": "Crunchy Thin Crust",
                "sortSeq": "03"
            },
            "BK": {
                "code": "BK",
                "description": "Hand stretched to be big, thin and perfectly foldable.",
                "local": false,
                "name": "Brooklyn Style",
                "sortSeq": "06"
            },
            "GLUTENF": {
                "code": "GLUTENF",
                "description": "Domino's pizza made with a Gluten Free Crust.",
                "local": false,
                "name": "Gluten Free Crust",
                "sortSeq": "09"
            }
        },
        "wings": {
            "BACTOM": {
                "code": "BACTOM",
                "description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with garlic parmesan white sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.",
                "local": false,
                "name": "Specialty Chicken – Crispy Bacon & Tomato",
                "sortSeq": "01"
            },
            "HOTBUFF": {
                "code": "HOTBUFF",
                "description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with classic hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta.",
                "local": false,
                "name": "Specialty Chicken – Classic Hot Buffalo",
                "sortSeq": "02"
            },
            "SPCYJP": {
                "code": "SPCYJP",
                "description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple.",
                "local": false,
                "name": "Specialty Chicken – Spicy Jalapeno - Pineapple",
                "sortSeq": "03"
            },
            "BBQBAC": {
                "code": "BBQBAC",
                "description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and smoky BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon.",
                "local": false,
                "name": "Specialty Chicken – Sweet BBQ Bacon",
                "sortSeq": "04"
            },
            "HOTWINGS": {
                "code": "HOTWINGS",
                "description": "Marinated and oven-baked, then smothered in hot buffalo sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
                "local": false,
                "name": "Hot Buffalo Wings",
                "sortSeq": "06"
            },
            "MILDWING": {
                "code": "MILDWING",
                "description": "Marinated and oven-baked, then smothered in mild buffalo sauce. Customize with your choice of dipping sauce: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
                "local": true,
                "name": "Mild Buffalo Wings",
                "sortSeq": "07"
            },
            "SMANG": {
                "code": "SMANG",
                "description": "Marinated and oven-baked and then smothered in Sweet Mango Habanero Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch",
                "local": false,
                "name": "Sweet Mango Habanero Wings",
                "sortSeq": "08"
            },
            "BBQW": {
                "code": "BBQW",
                "description": "Marinated and oven-baked, then smothered in honey BBQ sauce. Customize with your choice of dipping sauce: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
                "local": false,
                "name": "Honey BBQ Wings",
                "sortSeq": "09"
            },
            "PLNWINGS": {
                "code": "PLNWINGS",
                "description": "Marinated and oven-baked and then sauced with your choice of Hot, Sweet Mango Habanero or BBQ sauce.",
                "local": false,
                "name": "Plain Wings",
                "sortSeq": "10"
            },
            "GPRMWING": {
                "code": "GPRMWING",
                "description": "Marinated and oven-baked, then smothered in garlic Parmesan sauce. Customize with your choice of dipping sauce: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
                "local": false,
                "name": "Garlic Parmesan Wings",
                "sortSeq": "11"
            },
            "BCHICK": {
                "code": "BCHICK",
                "description": "Lightly breaded with savory herbs, made with 100% whole white breast meat. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese or Ranch.",
                "local": false,
                "name": "Boneless Chicken",
                "sortSeq": "21"
            }
        }
    },
    "products": {
        "F_PARMT": {
            "availableToppings": "",
            "availableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
            "code": "F_PARMT",
            "defaultToppings": "",
            "defaultSides": "SIDMAR=1",
            "description": "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.",
            "imageCode": "F_PARMT",
            "local": false,
            "name": "Parmesan Bread Twists",
            "productType": "Bread",
            "tags": {},
            "variants": [
                "B8PCPT"
            ]
        },
        "F_GARLICT": {
            "availableToppings": "",
            "availableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
            "code": "F_GARLICT",
            "defaultToppings": "",
            "defaultSides": "SIDMAR=1",
            "description": "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.",
            "imageCode": "F_GARLICT",
            "local": false,
            "name": "Garlic Bread Twists",
            "productType": "Bread",
            "tags": {},
            "variants": [
                "B8PCGT"
            ]
        },
        "F_SCBRD": {
            "availableToppings": "",
            "availableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
            "code": "F_SCBRD",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.",
            "imageCode": "F_SCBRD",
            "local": false,
            "name": "Stuffed Cheesy Bread",
            "productType": "Bread",
            "tags": {
                "bazaarVoice": true
            },
            "variants": [
                "B8PCSCB"
            ]
        },
        "F_SSBRD": {
            "availableToppings": "Si=0:0.5:1,Fe=0:0.5:1",
            "availableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
            "code": "F_SSBRD",
            "defaultToppings": "Si=1,Fe=1",
            "defaultSides": "",
            "description": "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
            "imageCode": "F_SSBRD",
            "local": false,
            "name": "Stuffed Cheesy Bread with Spinach & Feta",
            "productType": "Bread",
            "tags": {
                "bazaarVoice": true
            },
            "variants": [
                "B8PCSSF"
            ]
        },
        "F_SBBRD": {
            "availableToppings": "K=0:0.5:1,J=0:0.5:1",
            "availableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
            "code": "F_SBBRD",
            "defaultToppings": "K=1,J=1",
            "defaultSides": "",
            "description": "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
            "imageCode": "F_SBBRD",
            "local": false,
            "name": "Stuffed Cheesy Bread with Bacon & Jalapeno",
            "productType": "Bread",
            "tags": {
                "bazaarVoice": true
            },
            "variants": [
                "B8PCSBJ"
            ]
        },
        "F_PBITES": {
            "availableToppings": "",
            "availableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
            "code": "F_PBITES",
            "defaultToppings": "",
            "defaultSides": "SIDMAR=1",
            "description": "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.",
            "imageCode": "F_PBITES",
            "local": false,
            "name": "Parmesan Bread Bites",
            "productType": "Bread",
            "tags": {
                "bazaarVoice": true
            },
            "variants": [
                "B16PBIT",
                "B32PBIT"
            ]
        },
        "F_CINNAT": {
            "availableToppings": "",
            "availableSides": "SIDICE",
            "code": "F_CINNAT",
            "defaultToppings": "",
            "defaultSides": "SIDICE=1",
            "description": "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.",
            "imageCode": "F_CINNAT",
            "local": false,
            "name": "Cinnamon Bread Twists",
            "productType": "Dessert",
            "tags": {},
            "variants": [
                "B8PCCT"
            ]
        },
        "F_MRBRWNE": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_MRBRWNE",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Satisfy your sweet tooth! Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie.  Oven-baked to perfection and cut into 9 pieces - this dessert is perfect to share with the whole group.",
            "imageCode": "F_MRBRWNE",
            "local": false,
            "name": "Domino's Marbled Cookie Brownie™",
            "productType": "Dessert",
            "tags": {},
            "variants": [
                "MARBRWNE"
            ]
        },
        "F_LAVA": {
            "availableToppings": "",
            "availableSides": "SIDICE",
            "code": "F_LAVA",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Indulge in two delectable oven-baked chocolate cakes with molten chocolate fudge on the inside.  Perfectly topped with a dash of powdered sugar.",
            "imageCode": "F_LAVA",
            "local": false,
            "name": "Chocolate Lava Crunch Cakes",
            "productType": "Dessert",
            "tags": {
                "bazaarVoice": true
            },
            "variants": [
                "B2PCLAVA"
            ]
        },
        "F_COKE": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_COKE",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments.",
            "imageCode": "F_COKE",
            "local": false,
            "name": "Coke®",
            "productType": "Drinks",
            "tags": {},
            "variants": [
                "20BCOKE",
                "2LCOKE"
            ]
        },
        "F_ORAN": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_ORAN",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Exuberant tropical fun to release you from the everyday mundane.",
            "imageCode": "F_ORAN",
            "local": false,
            "name": "Fanta® Orange",
            "productType": "Drinks",
            "tags": {},
            "variants": [
                "20BORNG",
                "2LMMORANGE"
            ]
        },
        "F_SPRITE": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SPRITE",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Unique Lymon (lemon-lime) flavor, clear, clean and crisp with no caffeine.",
            "imageCode": "F_SPRITE",
            "local": false,
            "name": "Sprite®",
            "productType": "Drinks",
            "tags": {},
            "variants": [
                "20BSPRITE",
                "2LSPRITE"
            ]
        },
        "F_DIET": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_DIET",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Beautifully balanced adult cola taste in a no calorie beverage.",
            "imageCode": "F_DIET",
            "local": false,
            "name": "Diet Coke®",
            "productType": "Drinks",
            "tags": {},
            "variants": [
                "2LDCOKE",
                "20BDCOKE"
            ]
        },
        "F_WATER": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_WATER",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Fresh, crisp tasting water.",
            "imageCode": "F_WATER",
            "local": false,
            "name": "Dasani® Bottle Water",
            "productType": "Drinks",
            "tags": {},
            "variants": [
                "BOTTLWATER"
            ]
        },
        "F_LEMND": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_LEMND",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Made with the goodness of real lemons, Minute Maid® Lemonade is the quintessential refreshing beverage with the great taste of a simpler time.",
            "imageCode": "F_LEMND",
            "local": true,
            "name": "Lemonade Bottle",
            "productType": "Drinks",
            "tags": {},
            "variants": [
                "D20BLEMO"
            ]
        },
        "F_GARDEN": {
            "availableToppings": "",
            "availableSides": "CAESAR,ITAL,BALVIN,RANCHPK",
            "code": "F_GARDEN",
            "defaultToppings": "",
            "defaultSides": "RANCHPK=1",
            "description": "A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
            "imageCode": "F_GARDEN",
            "local": false,
            "name": "Classic Garden",
            "productType": "GSalad",
            "tags": {},
            "variants": [
                "PPSGARSA"
            ]
        },
        "F_CCAESAR": {
            "availableToppings": "",
            "availableSides": "CAESAR,ITAL,BALVIN,RANCHPK",
            "code": "F_CCAESAR",
            "defaultToppings": "",
            "defaultSides": "CAESAR=1",
            "description": "The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
            "imageCode": "F_CCAESAR",
            "local": false,
            "name": "Chicken Caesar",
            "productType": "GSalad",
            "tags": {},
            "variants": [
                "PPSCSRSA"
            ]
        },
        "S_BUILD": {
            "availableToppings": "Xf=0:1,Xm=0:1,P,S,B,Pm,H,K,Du,C,E,Fe,Cs,Cp,F,G,J,M,N,O,R,Rr,Si,Td,Z",
            "availableSides": "",
            "code": "S_BUILD",
            "defaultToppings": "Xf=1",
            "defaultSides": "",
            "description": "Choose a sauce and up to 3 ingredients from more than a dozen meat or vegetable toppings.",
            "imageCode": "S_BUILD",
            "local": false,
            "name": "Build Your Own Pasta",
            "productType": "Pasta",
            "tags": {
                "optionQtys": [
                    "0",
                    "1"
                ],
                "maxOptionQty": "3",
                "isDisplayedOnMakeline": true,
                "sauceRequired": true
            },
            "variants": [
                "PINPASBD",
                "PINBBLBD"
            ]
        },
        "S_ALFR": {
            "availableToppings": "Xf=1,Du",
            "availableSides": "",
            "code": "S_ALFR",
            "defaultToppings": "Du=1,Xf=1",
            "defaultSides": "",
            "description": "Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection.",
            "imageCode": "S_ALFR",
            "local": false,
            "name": "Chicken Alfredo",
            "productType": "Pasta",
            "tags": {
                "optionQtys": [
                    "0",
                    "1"
                ],
                "maxOptionQty": "3",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PINPASCA",
                "PINBBLCA"
            ]
        },
        "S_CARB": {
            "availableToppings": "Xf=1,K,Du,M,O",
            "availableSides": "",
            "code": "S_CARB",
            "defaultToppings": "M=1,O=1,Du=1,K=1,Xf=1",
            "defaultSides": "",
            "description": "Taste the delectable blend of flavorful grilled chicken breast, smoked bacon, fresh onions, and fresh mushrooms mixed with penne pasta. Baked to perfection with rich Alfredo sauce.",
            "imageCode": "S_CARB",
            "local": false,
            "name": "Chicken Carbonara",
            "productType": "Pasta",
            "tags": {
                "optionQtys": [
                    "0",
                    "1"
                ],
                "maxOptionQty": "4",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PINPASCC",
                "PINBBLCC"
            ]
        },
        "S_MARIN": {
            "availableToppings": "Xm=1,S,Cp",
            "availableSides": "",
            "code": "S_MARIN",
            "defaultToppings": "S=1,Cp=1,Xm=1",
            "defaultSides": "",
            "description": "Penne pasta baked in a zesty tomato basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.",
            "imageCode": "S_MARIN",
            "local": false,
            "name": "Italian Sausage Marinara",
            "productType": "Pasta",
            "tags": {
                "optionQtys": [
                    "0",
                    "1"
                ],
                "maxOptionQty": "3",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PINPASMM",
                "PINBBLMM"
            ]
        },
        "S_PRIM": {
            "availableToppings": "Xf=1,M,O,Si,Td",
            "availableSides": "",
            "code": "S_PRIM",
            "defaultToppings": "M=1,O=1,Td=1,Si=1,Xf=1",
            "defaultSides": "",
            "description": "Fresh baby spinach, diced tomatoes, fresh mushrooms and fresh onions, mixed with penne pasta and baked with a creamy Alfredo sauce.",
            "imageCode": "S_PRIM",
            "local": false,
            "name": "Pasta Primavera",
            "productType": "Pasta",
            "tags": {
                "optionQtys": [
                    "0",
                    "1"
                ],
                "maxOptionQty": "4",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PINPASPP",
                "PINBBLPP"
            ]
        },
        "S_DX": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_DX",
            "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1",
            "defaultSides": "",
            "description": "Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.",
            "imageCode": "S_DX",
            "local": false,
            "name": "Deluxe",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "10SCDELUX",
                "12SCDELUX",
                "12TDELUX",
                "PBKIREDX",
                "14SCDELUX",
                "14TDELUX",
                "P16IBKDX",
                "P10IGFDX",
                "P12IPADX"
            ]
        },
        "S_MX": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_MX",
            "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1",
            "defaultSides": "",
            "description": "Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of cheese made with 100% real mozzarella.",
            "imageCode": "S_MX",
            "local": false,
            "name": "MeatZZa",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "10SCMEATZA",
                "12SCMEATZA",
                "12TMEATZA",
                "PBKIREMX",
                "14SCMEATZA",
                "14TMEATZA",
                "P16IBKMX",
                "P10IGFMX",
                "P12IPAMX"
            ]
        },
        "S_PIZBP": {
            "availableToppings": "H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac",
            "availableSides": "",
            "code": "S_PIZBP",
            "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1",
            "defaultSides": "",
            "description": "Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with a hot buffalo sauce.",
            "imageCode": "S_PIZBP",
            "local": false,
            "name": "Buffalo Chicken",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IREBP",
                "P12IREBP",
                "P12ITHBP",
                "P14IBKBP",
                "P14IREBP",
                "P14ITHBP",
                "P16IBKBP",
                "P10IGFBP",
                "P12IPABP"
            ]
        },
        "S_PIZCK": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_PIZCK",
            "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1",
            "defaultSides": "",
            "description": "Grilled chicken breast, honey BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella",
            "imageCode": "S_PIZCK",
            "local": false,
            "name": "Memphis BBQ Chicken",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IRECK",
                "P12IRECK",
                "P12ITHCK",
                "P14IBKCK",
                "P14IRECK",
                "P14ITHCK",
                "P16IBKCK",
                "P10IGFCK",
                "P12IPACK"
            ]
        },
        "S_PIZCR": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd=0:0.5:1:1.5",
            "availableSides": "",
            "code": "S_PIZCR",
            "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1",
            "defaultSides": "",
            "description": "Grilled chicken breast, ranch, smoked bacon, diced tomatoes, provolone and cheese made with 100% real mozzarella.",
            "imageCode": "S_PIZCR",
            "local": false,
            "name": "Cali Chicken Bacon Ranch",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IRECR",
                "P12IRECR",
                "P12ITHCR",
                "P14IBKCR",
                "P14IRECR",
                "P16IBKCR",
                "P10IGFCR",
                "P12IPACR"
            ]
        },
        "S_PIZCZ": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_PIZCZ",
            "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1",
            "defaultSides": "",
            "description": "Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella and sprinkled with oregano.",
            "imageCode": "S_PIZCZ",
            "local": false,
            "name": "Wisconsin 6 Cheese",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IRECZ",
                "P12IRECZ",
                "P12ITHCZ",
                "P14IBKCZ",
                "P14IRECZ",
                "P14ITHCZ",
                "P16IBKCZ",
                "P10IGFCZ",
                "P12IPACZ"
            ]
        },
        "S_PIZPH": {
            "availableToppings": "H,B,Sa,P,S,Du,K,Pm,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac",
            "availableSides": "",
            "code": "S_PIZPH",
            "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1",
            "defaultSides": "",
            "description": "Tender slices of steak, fresh onions, fresh green peppers, fresh mushrooms, provolone and American cheese.",
            "imageCode": "S_PIZPH",
            "local": false,
            "name": "Philly Cheese Steak",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IREPH",
                "P12IREPH",
                "P12ITHPH",
                "P14IBKPH",
                "P14IREPH",
                "P14ITHPH",
                "P16IBKPH",
                "P10IGFPH",
                "P12IPAPH"
            ]
        },
        "S_PIZPV": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_PIZPV",
            "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1",
            "defaultSides": "",
            "description": "Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.",
            "imageCode": "S_PIZPV",
            "local": false,
            "name": "Pacific Veggie",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IREPV",
                "P12IREPV",
                "P12ITHPV",
                "P14IBKPV",
                "P14IREPV",
                "P14ITHPV",
                "P16IBKPV",
                "P10IGFPV",
                "P12IPAPV"
            ]
        },
        "S_PIZPX": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_PIZPX",
            "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5",
            "defaultSides": "",
            "description": "Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella then sprinkled with oregano.",
            "imageCode": "S_PIZPX",
            "local": false,
            "name": "Ultimate Pepperoni",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "10SCPFEAST",
                "12SCPFEAST",
                "12TPFEAST",
                "PBKIREPX",
                "14SCPFEAST",
                "14TPFEAST",
                "P16IBKPX",
                "P10IGFPX",
                "P12IPAPX"
            ]
        },
        "S_PIZUH": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_PIZUH",
            "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1",
            "defaultSides": "",
            "description": "Sliced ham, smoked bacon, pineapple, roasted red peppers, provolone and cheese made with 100% real mozzarella.",
            "imageCode": "S_PIZUH",
            "local": false,
            "name": "Honolulu Hawaiian",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IREUH",
                "P12IREUH",
                "P12ITHUH",
                "P14IREUH",
                "P14ITHUH",
                "P16IBKUH",
                "P10IGFUH",
                "P12IPAUH"
            ]
        },
        "S_PIZZA": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_PIZZA",
            "defaultToppings": "X=1,C=1",
            "defaultSides": "",
            "description": "A custom pizza made to order. Choose from any of our delicious crust styles, including Handmade Pan.",
            "imageCode": "S_PIZZA",
            "local": false,
            "name": "Pizza",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "sodiumWarningEnabled": true
            },
            "variants": [
                "10SCREEN",
                "12SCREEN",
                "12THIN",
                "PBKIREZA",
                "14SCREEN",
                "14THIN",
                "P16IBKZA",
                "P10IGFZA",
                "P12IPAZA"
            ]
        },
        "S_ZZ": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_ZZ",
            "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1",
            "defaultSides": "",
            "description": "Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of cheese made with 100% real mozzarella.",
            "imageCode": "S_ZZ",
            "local": false,
            "name": "ExtravaganZZa",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "10SCEXTRAV",
                "12SCEXTRAV",
                "12TEXTRAV",
                "PBKIREZZ",
                "14SCEXTRAV",
                "14TEXTRAV",
                "P16IBKZZ",
                "P10IGFZZ",
                "P12IPAZZ"
            ]
        },
        "S_PISPF": {
            "availableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
            "availableSides": "",
            "code": "S_PISPF",
            "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1",
            "defaultSides": "",
            "description": "Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.",
            "imageCode": "S_PISPF",
            "local": false,
            "name": "Spinach & Feta",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "P10IRESPF",
                "P10IGFSPF",
                "P12IRESPF",
                "P12ITHSPF",
                "P12IPASPF",
                "P14IBKSPF",
                "P14IRESPF",
                "P14ITHSPF",
                "P16IBKSPF"
            ]
        },
        "S_PZTACO": {
            "availableToppings": "H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac",
            "availableSides": "",
            "code": "S_PZTACO",
            "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1",
            "defaultSides": "",
            "description": "American cheese, taco seasoning, grilled chicken, fresh onions, fresh green peppers, diced tomatoes, topped with provolone and cheddar cheeses.",
            "imageCode": "S_PZTACO",
            "local": false,
            "name": "Chicken Taco",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "effectiveOn": "2020-08-24"
            },
            "variants": [
                "P10IRETC",
                "P10IGFTC",
                "P12IRETC",
                "P12ITHTC",
                "P12IPATC",
                "P14IBKTC",
                "P14IRETC",
                "P14ITHTC",
                "P16IBKTC"
            ]
        },
        "S_PZBRGR": {
            "availableToppings": "H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac,Km",
            "availableSides": "",
            "code": "S_PZBRGR",
            "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1",
            "defaultSides": "",
            "description": "American cheese, ketchup-mustard sauce, beef, fresh onions, and diced tomatoes, topped with shredded provolone and cheddar cheeses.",
            "imageCode": "S_PZBRGR",
            "local": false,
            "name": "Cheeseburger",
            "productType": "Pizza",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2"
                ],
                "maxOptionQty": "10",
                "partCount": "2",
                "needsCustomization": true,
                "couponTier": [
                    "MultiplePizza",
                    "MultiplePizzaB",
                    "MultiplePizzaC",
                    "MultiplePizzaD"
                ],
                "isDisplayedOnMakeline": true,
                "effectiveOn": "2020-08-24",
                "hideOption": "Km"
            },
            "variants": [
                "P10IRECHB",
                "P10IGFCHB",
                "P12IRECHB",
                "P12ITHCHB",
                "P12IPACHB",
                "P14IBKCHB",
                "P14IRECHB",
                "P14ITHCHB",
                "P16IBKCHB"
            ]
        },
        "S_CHIKK": {
            "availableToppings": "Rd=0:0.5:1,C=0:0.5:1,K=0:0.5:1,Du,Pv",
            "availableSides": "",
            "code": "S_CHIKK",
            "defaultToppings": "C=1,Du=1,K=1,Pv=1,Rd=1",
            "defaultSides": "",
            "description": "Enjoy our flavorful grilled chicken breast topped with smoked bacon, creamy ranch and provolone cheese on artisan bread baked to golden brown perfection.",
            "imageCode": "S_CHIKK",
            "local": false,
            "name": "Chicken Bacon Ranch",
            "productType": "Sandwich",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5"
                ],
                "maxOptionQty": "9",
                "maxSauceQty": "2",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PSANSACB"
            ]
        },
        "S_CHIKP": {
            "availableToppings": "X=0:0.5:1,C=0:0.5:1,Du,Cs=0:0.5:1,Pv",
            "availableSides": "",
            "code": "S_CHIKP",
            "defaultToppings": "X=1,C=1,Du=1,Cs=1,Pv=1",
            "defaultSides": "",
            "description": "Grilled chicken breast, tomato basil marinara, Parmesan-Asiago and provolone cheese. On artisan bread and baked to a golden brown.",
            "imageCode": "S_CHIKP",
            "local": false,
            "name": "Chicken Parm",
            "productType": "Sandwich",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5"
                ],
                "maxOptionQty": "9",
                "maxSauceQty": "2",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PSANSACP"
            ]
        },
        "S_ITAL": {
            "availableToppings": "C=0:0.5:1,P,H=0:0.5:1,Sa=0:0.5:1,Pv,Z=0:0.5:1,G=0:0.5:1,O=0:0.5:1",
            "availableSides": "",
            "code": "S_ITAL",
            "defaultToppings": "C=1,P=1,H=1,O=1,G=1,Z=1,Sa=1,Pv=1",
            "defaultSides": "",
            "description": "Pepperoni, salami, and ham topped with banana peppers, fresh green peppers, fresh onions, and provolone cheese. On artisan bread and baked to a golden brown.",
            "imageCode": "S_ITAL",
            "local": false,
            "name": "Italian",
            "productType": "Sandwich",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5"
                ],
                "maxOptionQty": "9",
                "maxSauceQty": "2",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PSANSAIT"
            ]
        },
        "S_PHIL": {
            "availableToppings": "Pm,Ac=0:0.5:1,Pv,G=0:0.5:1,M=0:0.5:1,O=0:0.5:1",
            "availableSides": "",
            "code": "S_PHIL",
            "defaultToppings": "M=1,O=1,G=1,Pm=1,Ac=1,Pv=1",
            "defaultSides": "",
            "description": "Experience deliciously tender slices of steak, American and provolone cheeses, fresh onions, fresh green peppers and fresh mushrooms placed on artisan bread and baked to golden brown perfection.",
            "imageCode": "S_PHIL",
            "local": false,
            "name": "Philly Cheese Steak",
            "productType": "Sandwich",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5"
                ],
                "maxOptionQty": "9",
                "maxSauceQty": "2",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PSANSAPH"
            ]
        },
        "S_BUFC": {
            "availableToppings": "Bd=0:0.5:1,Ht=0:0.5:1,C=0:0.5:1,Du,E=0:0.5:1,Pv,O=0:0.5:1",
            "availableSides": "",
            "code": "S_BUFC",
            "defaultToppings": "C=1,O=1,Du=1,E=1,Ht=1,Pv=1,Bd=1",
            "defaultSides": "",
            "description": "Grilled chicken breast, creamy blue cheese sauce, fresh onions, hot buffalo sauce, cheddar and provolone cheese.",
            "imageCode": "S_BUFC",
            "local": false,
            "name": "Buffalo Chicken",
            "productType": "Sandwich",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5"
                ],
                "maxOptionQty": "9",
                "maxSauceQty": "2",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PSANSABC"
            ]
        },
        "S_CHHB": {
            "availableToppings": "Mh=0:0.5:1,C=0:0.5:1,Du,E=0:0.5:1,Pv,J=0:0.5:1,N=0:0.5:1",
            "availableSides": "",
            "code": "S_CHHB",
            "defaultToppings": "C=1,Du=1,N=1,J=1,E=1,Pv=1,Mh=1",
            "defaultSides": "",
            "description": "Grilled chicken breast, pineapple, jalapeños, sweet mango habanero sauce, provolone and cheddar cheeses. On artisan bread and baked to a golden brown.",
            "imageCode": "S_CHHB",
            "local": false,
            "name": "Chicken Habanero",
            "productType": "Sandwich",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5"
                ],
                "maxOptionQty": "9",
                "maxSauceQty": "2",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PSANSACH"
            ]
        },
        "S_MEDV": {
            "availableToppings": "Ac=0:0.5:1,Fe=0:0.5:1,Pv,Z=0:0.5:1,O=0:0.5:1,Rr=0:0.5:1,Si=0:0.5:1,Td=0:0.5:1",
            "availableSides": "",
            "code": "S_MEDV",
            "defaultToppings": "O=1,Td=1,Rr=1,Si=1,Fe=1,Z=1,Ac=1,Pv=1",
            "defaultSides": "",
            "description": "Roasted red peppers, banana peppers, diced tomatoes, fresh baby spinach, fresh onions, feta, provolone and American cheese. On artisan bread and baked to a golden brown.",
            "imageCode": "S_MEDV",
            "local": false,
            "name": "Mediterranean Veggie",
            "productType": "Sandwich",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5"
                ],
                "maxOptionQty": "9",
                "maxSauceQty": "2",
                "isDisplayedOnMakeline": true,
                "bazaarVoice": true
            },
            "variants": [
                "PSANSAMV"
            ]
        },
        "F_SIDBAN": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDBAN",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A mild, sweet pickled sliced pepper.",
            "imageCode": "F_SIDBAN",
            "local": true,
            "name": "Side Banana Peppers",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "SIDBAN"
            ]
        },
        "F_SIDJAL": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDJAL",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Sliced jalapeno peppers",
            "imageCode": "F_SIDJAL",
            "local": true,
            "name": "Side Jalapenos",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "SIDEJAL"
            ]
        },
        "F_SIDPAR": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDPAR",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Grated Parmesan cheese packets",
            "imageCode": "F_SIDPAR",
            "local": true,
            "name": "Parmesan Cheese Packets",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "PARMCHEESE"
            ]
        },
        "F_SIDRED": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDRED",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Crushed red pepper flake packets",
            "imageCode": "F_SIDRED",
            "local": true,
            "name": "Red Pepper Packets",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "REDPEPPER"
            ]
        },
        "F_CAESAR": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_CAESAR",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A savory dressing with a combination of garlic, anchovy and subtle notes of cheese.",
            "imageCode": "F_CAESAR",
            "local": false,
            "name": "Caesar Dressing",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "AGCAESAR"
            ]
        },
        "F_ITAL": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_ITAL",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A classic dressing flavored with red bell pepper, a touch of garlic and spices.",
            "imageCode": "F_ITAL",
            "local": true,
            "name": "Italian Dressing",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "AGITAL"
            ]
        },
        "F_RANCHPK": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_RANCHPK",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A creamy, flavorful dressing with a blend of buttermilk, garlic, onion and spices.",
            "imageCode": "F_RANCHPK",
            "local": false,
            "name": "Ranch Dressing",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "AGRANCH"
            ]
        },
        "F_HOTCUP": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_HOTCUP",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Domino's own spicy buffalo sauce.",
            "imageCode": "F_HOTCUP",
            "local": false,
            "name": "Hot Buffalo Dipping Cup",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "HOTSAUCE"
            ]
        },
        "F_SMHAB": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SMHAB",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A perfect blend of sweet and spicy in one sauce",
            "imageCode": "F_SMHAB",
            "local": false,
            "name": "Sweet Mango Habanero Sauce",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "CEAHABC"
            ]
        },
        "F_BBQC": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_BBQC",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A sweet and smoky BBQ sauce with bold flavor.",
            "imageCode": "F_BBQC",
            "local": false,
            "name": "Honey BBQ Dipping Cup",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "CEABBQC"
            ]
        },
        "F_SIDRAN": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDRAN",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A creamy buttermilk ranch dressing with hints of garlic and onion",
            "imageCode": "F_SIDRAN",
            "local": false,
            "name": "Ranch",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "RANCH"
            ]
        },
        "F_Bd": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_Bd",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A creamy dressing with bits of aged blue cheese",
            "imageCode": "F_Bd",
            "local": false,
            "name": "Blue Cheese",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "BLUECHS"
            ]
        },
        "F_SIDGAR": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDGAR",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A buttery garlic sauce",
            "imageCode": "F_SIDGAR",
            "local": false,
            "name": "Garlic Dipping Sauce",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "GARBUTTER"
            ]
        },
        "F_SIDICE": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDICE",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A thick sweet icing with a hint of vanilla",
            "imageCode": "F_SIDICE",
            "local": false,
            "name": "Icing Dipping Sauce",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "ICING"
            ]
        },
        "F_SIDMAR": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_SIDMAR",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A sweet tomato sauce blended with garlic, basil and oregano",
            "imageCode": "F_SIDMAR",
            "local": false,
            "name": "Marinara Dipping Sauce",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "MARINARA"
            ]
        },
        "F_STJUDE": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_STJUDE",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "",
            "imageCode": "F_STJUDE",
            "local": false,
            "name": "St. Jude Donation",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "STJUDE",
                "STJUDE2",
                "STJUDE5",
                "STJUDE10",
                "STJUDERU"
            ]
        },
        "F_BALVIN": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F_BALVIN",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "A light dressing with a blend of balsamic vinegar, oil and garlic.",
            "imageCode": "F_BALVIN",
            "local": false,
            "name": "Balsamic",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "CEABVI"
            ]
        },
        "F__SCHOOL": {
            "availableToppings": "",
            "availableSides": "",
            "code": "F__SCHOOL",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Click here to add the local donation to your order",
            "imageCode": "F__SCHOOL",
            "local": true,
            "name": "Local Donation",
            "productType": "Sides",
            "tags": {},
            "variants": [
                "_SCHOOLL"
            ]
        },
        "S_BONELESS": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_BONELESS",
            "defaultToppings": "",
            "defaultSides": "BBQC=1",
            "description": "Breaded chicken made with 100% whole white breast meat. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
            "imageCode": "S_BONELESS",
            "local": false,
            "name": "Boneless Chicken",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "boneless": true,
                "effectiveOn": "2011-02-21",
                "bvCode": "Boneless",
                "bazaarVoice": true
            },
            "variants": [
                "W08PBNLW",
                "10WINGBNLS",
                "W16PBNLW",
                "W32PBNLW"
            ]
        },
        "S_HOTWINGS": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_HOTWINGS",
            "defaultToppings": "",
            "defaultSides": "Bd=1",
            "description": "Marinated and oven-baked, then smothered in hot buffalo sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
            "imageCode": "S_HOTWINGS",
            "local": false,
            "name": "Hot Buffalo Wings",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "bvCode": "BoneIn",
                "bazaarVoice": true
            },
            "variants": [
                "W08PHOTW",
                "10WINGHOT",
                "W16PHOTW",
                "W32PHOTW"
            ]
        },
        "S_BBQW": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_BBQW",
            "defaultToppings": "",
            "defaultSides": "Bd=1",
            "description": "Marinated and oven-baked, then smothered in honey BBQ sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
            "imageCode": "S_BBQW",
            "local": false,
            "name": "Honey BBQ Wings",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "bvCode": "BoneIn",
                "bazaarVoice": true
            },
            "variants": [
                "W08PBBQW",
                "10WINGBBQ",
                "W16PBBQW",
                "W32PBBQW"
            ]
        },
        "S_MILDWING": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_MILDWING",
            "defaultToppings": "",
            "defaultSides": "Bd=1",
            "description": "Marinated and oven-baked, then smothered in mild buffalo sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
            "imageCode": "S_MILDWING",
            "local": true,
            "name": "Mild Buffalo Wings",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "bvCode": "BoneIn",
                "bazaarVoice": true
            },
            "variants": [
                "W08PMLDW",
                "10WINGMILD",
                "W16PMLDW",
                "W32PMLDW"
            ]
        },
        "S_PLNWINGS": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_PLNWINGS",
            "defaultToppings": "",
            "defaultSides": "Bd=1",
            "description": "Marinated and oven-baked. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
            "imageCode": "S_PLNWINGS",
            "local": false,
            "name": "Plain Wings",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "bvCode": "BoneIn",
                "bazaarVoice": true
            },
            "variants": [
                "W08PPLNW",
                "10WINGPLN",
                "W16PPLNW",
                "W32PPLNW"
            ]
        },
        "S_SMANG": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_SMANG",
            "defaultToppings": "",
            "defaultSides": "Bd=1",
            "description": "Marinated and oven-baked, then smothered in sweet mango habanero sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
            "imageCode": "S_SMANG",
            "local": false,
            "name": "Sweet Mango Habanero Wings",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "bvCode": "BoneIn",
                "bazaarVoice": true
            },
            "variants": [
                "W08PMANW",
                "10WINGMHAB",
                "W16PMANW",
                "W32PMANW"
            ]
        },
        "S_GPRMWING": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_GPRMWING",
            "defaultToppings": "",
            "defaultSides": "Bd=1",
            "description": "Marinated and oven-baked, then smothered in garlic Parmesan sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
            "imageCode": "S_GPRMWING",
            "local": false,
            "name": "Garlic Parmesan Wings",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "bvCode": "BoneIn",
                "bazaarVoice": true
            },
            "variants": [
                "W08PGPMW",
                "10WINGGPMW",
                "W16PGPMW",
                "W32PGPMW"
            ]
        },
        "S_SCCBT": {
            "availableToppings": "K=0:1,Td=0:1",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_SCCBT",
            "defaultToppings": "K=1,Td=1",
            "defaultSides": "",
            "description": "Tender bites of breaded chicken made with 100% whole breast white meat topped with garlic Parmesan sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.",
            "imageCode": "S_SCCBT",
            "local": false,
            "name": "Specialty Chicken – Crispy Bacon & Tomato",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart"
            },
            "variants": [
                "CKRGCBT"
            ]
        },
        "S_SCCHB": {
            "availableToppings": "",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_SCCHB",
            "defaultToppings": "",
            "defaultSides": "",
            "description": "Tender bites of breaded chicken made with 100% whole breast white meat topped with hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta.",
            "imageCode": "S_SCCHB",
            "local": false,
            "name": "Specialty Chicken – Classic Hot Buffalo",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart"
            },
            "variants": [
                "CKRGHTB"
            ]
        },
        "S_SCSJP": {
            "availableToppings": "J=0:1,N=0:1",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_SCSJP",
            "defaultToppings": "J=1,N=1",
            "defaultSides": "",
            "description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple.",
            "imageCode": "S_SCSJP",
            "local": false,
            "name": "Specialty Chicken – Spicy Jalapeno - Pineapple",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart"
            },
            "variants": [
                "CKRGSJP"
            ]
        },
        "S_SCSBBQ": {
            "availableToppings": "K=0:1",
            "availableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
            "code": "S_SCSBBQ",
            "defaultToppings": "K=1",
            "defaultSides": "",
            "description": "Tender bites of breaded chicken made with 100% whole breast white meat topped with sweet and smoky honey BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon.",
            "imageCode": "S_SCSBBQ",
            "local": false,
            "name": "Specialty Chicken – Sweet BBQ Bacon",
            "productType": "Wings",
            "tags": {
                "optionQtys": [
                    "0",
                    "0.5",
                    "1",
                    "1.5",
                    "2",
                    "3",
                    "4",
                    "5"
                ],
                "maxOptionQty": "99",
                "isDisplayedOnMakeline": true,
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart"
            },
            "variants": [
                "CKRGSBQ"
            ]
        }
    },
    "sides": {
        "bread": {
            "SIDMAR": {
                "availability": [],
                "code": "SIDMAR",
                "description": "A sweet tomato sauce blended with garlic, basil and oregano",
                "local": false,
                "name": "Marinara",
                "tags": {
                    "side": true
                }
            },
            "SIDGAR": {
                "availability": [],
                "code": "SIDGAR",
                "description": "A buttery garlic sauce",
                "local": true,
                "name": "Garlic Dipping Sauce",
                "tags": {
                    "side": true
                }
            },
            "SIDRAN": {
                "availability": [],
                "code": "SIDRAN",
                "description": "A creamy buttermilk ranch dressing with hints of garlic and onion",
                "local": true,
                "name": "Ranch",
                "tags": {
                    "side": true
                }
            },
            "Bd": {
                "availability": [],
                "code": "Bd",
                "description": "A creamy dressing with bits of aged blue cheese",
                "local": true,
                "name": "Blue Cheese",
                "tags": {
                    "side": true
                }
            }
        },
        "dessert": {
            "SIDICE": {
                "availability": [],
                "code": "SIDICE",
                "description": "",
                "local": false,
                "name": "Icing",
                "tags": {
                    "side": true
                }
            }
        },
        "gSalad": {
            "CAESAR": {
                "availability": [],
                "code": "CAESAR",
                "description": "A subtle combination of Parmesan cheese, olive oil, lemon, garlic, onion and black pepper.",
                "local": false,
                "name": "Caesar",
                "tags": {
                    "side": true
                }
            },
            "ITAL": {
                "availability": [],
                "code": "ITAL",
                "description": "A classic dressing flavored with spices, red bell pepper and a touch of garlic.",
                "local": true,
                "name": "Italian",
                "tags": {
                    "side": true
                }
            },
            "BALVIN": {
                "availability": [],
                "code": "BALVIN",
                "description": "A light dressing with a blend of balsamic vinegar, oil and garlic.",
                "local": false,
                "name": "Balsamic",
                "tags": {
                    "side": true
                }
            },
            "RANCHPK": {
                "availability": [],
                "code": "RANCHPK",
                "description": "A flavorful creamy dressing with touches of buttermilk and garlic.",
                "local": false,
                "name": "Ranch",
                "tags": {
                    "side": true
                }
            }
        },
        "wings": {
            "HOTCUP": {
                "availability": [],
                "code": "HOTCUP",
                "description": "Domino's own spicy buffalo sauce.",
                "local": false,
                "name": "Hot Buffalo Dipping Cup",
                "tags": {
                    "side": true
                }
            },
            "SMHAB": {
                "availability": [],
                "code": "SMHAB",
                "description": "A perfect blend of sweet and spicy in one sauce",
                "local": false,
                "name": "Sweet Mango Habanero Sauce",
                "tags": {
                    "side": true,
                    "effectiveOn": "2010-01-01"
                }
            },
            "BBQC": {
                "availability": [],
                "code": "BBQC",
                "description": "A sweet and smoky BBQ sauce with bold flavor.",
                "local": false,
                "name": "Honey BBQ Dipping Cup",
                "tags": {
                    "side": true,
                    "effectiveOn": "2010-01-01"
                }
            },
            "SIDRAN": {
                "availability": [],
                "code": "SIDRAN",
                "description": "A creamy buttermilk ranch dressing with hints of garlic and onion",
                "local": false,
                "name": "Ranch",
                "tags": {
                    "side": true
                }
            },
            "Bd": {
                "availability": [],
                "code": "Bd",
                "description": "A creamy dressing with bits of aged blue cheese",
                "local": false,
                "name": "Blue Cheese",
                "tags": {
                    "side": true
                }
            }
        }
    },
    "sizes": {
        "bread": {
            "BRD8": {
                "code": "BRD8",
                "description": "",
                "local": false,
                "name": "8-Piece",
                "sortSeq": "02"
            },
            "BRD16": {
                "code": "BRD16",
                "description": "",
                "local": false,
                "name": "16-Piece",
                "sortSeq": "06"
            },
            "BRD32": {
                "code": "BRD32",
                "description": "",
                "local": false,
                "name": "32-Piece",
                "sortSeq": "07"
            }
        },
        "cHARGES": {
            "CHGONE": {
                "code": "CHGONE",
                "description": "",
                "local": false,
                "name": "Each",
                "sortSeq": "01"
            }
        },
        "dessert": {
            "DRT2": {
                "code": "DRT2",
                "description": "",
                "local": false,
                "name": "2-Piece",
                "sortSeq": "02"
            },
            "DRT8": {
                "code": "DRT8",
                "description": "",
                "local": false,
                "name": "8-Piece",
                "sortSeq": "05"
            },
            "9PC": {
                "code": "9PC",
                "description": "",
                "local": false,
                "name": "9-Piece",
                "sortSeq": "06"
            }
        },
        "drinks": {
            "2LTB": {
                "code": "2LTB",
                "description": "",
                "local": false,
                "name": "2-Liter Bottle",
                "sortSeq": "01"
            },
            "20OZB": {
                "code": "20OZB",
                "description": "",
                "local": false,
                "name": "20oz Bottle",
                "sortSeq": "02"
            }
        },
        "pizza": {
            "10": {
                "code": "10",
                "description": "",
                "local": false,
                "name": "Small (10\")",
                "sortSeq": "03"
            },
            "12": {
                "code": "12",
                "description": "",
                "local": false,
                "name": "Medium (12\")",
                "sortSeq": "04"
            },
            "14": {
                "code": "14",
                "description": "",
                "local": false,
                "name": "Large (14\")",
                "sortSeq": "05"
            },
            "16": {
                "code": "16",
                "description": "",
                "local": true,
                "name": "X-Large (16\")",
                "sortSeq": "06"
            }
        },
        "wings": {
            "8PCW": {
                "code": "8PCW",
                "description": "",
                "local": false,
                "name": "8-Piece",
                "sortSeq": "12"
            },
            "10PCW": {
                "code": "10PCW",
                "description": "",
                "local": false,
                "name": "10-Piece",
                "sortSeq": "13"
            },
            "12PCB": {
                "code": "12PCB",
                "description": "",
                "local": false,
                "name": "12-Piece Bites",
                "sortSeq": "15"
            },
            "16PCW": {
                "code": "16PCW",
                "description": "",
                "local": false,
                "name": "16-Piece",
                "sortSeq": "15"
            },
            "32PCW": {
                "code": "32PCW",
                "description": "",
                "local": false,
                "name": "32-Piece",
                "sortSeq": "16"
            }
        }
    },
    "toppings": {
        "bread": {
            "K": {
                "availability": [],
                "code": "K",
                "description": "",
                "local": false,
                "name": "Bacon",
                "tags": {
                    "meat": true
                }
            },
            "J": {
                "availability": [],
                "code": "J",
                "description": "",
                "local": false,
                "name": "Jalapeno Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Si": {
                "availability": [],
                "code": "Si",
                "description": "",
                "local": false,
                "name": "Spinach",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Fe": {
                "availability": [],
                "code": "Fe",
                "description": "",
                "local": false,
                "name": "Feta Cheese",
                "tags": {
                    "nonMeat": true
                }
            }
        },
        "pasta": {
            "Xf": {
                "availability": [],
                "code": "Xf",
                "description": "",
                "local": false,
                "name": "Alfredo Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Xm": {
                "availability": [],
                "code": "Xm",
                "description": "",
                "local": false,
                "name": "Hearty Marinara Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "P": {
                "availability": [],
                "code": "P",
                "description": "",
                "local": false,
                "name": "Pepperoni",
                "tags": {
                    "meat": true
                }
            },
            "S": {
                "availability": [],
                "code": "S",
                "description": "",
                "local": false,
                "name": "Italian Sausage",
                "tags": {
                    "meat": true
                }
            },
            "B": {
                "availability": [],
                "code": "B",
                "description": "",
                "local": false,
                "name": "Beef",
                "tags": {
                    "meat": true
                }
            },
            "Pm": {
                "availability": [],
                "code": "Pm",
                "description": "",
                "local": false,
                "name": "Philly Steak",
                "tags": {
                    "meat": true
                }
            },
            "H": {
                "availability": [],
                "code": "H",
                "description": "",
                "local": false,
                "name": "Ham",
                "tags": {
                    "meat": true
                }
            },
            "K": {
                "availability": [],
                "code": "K",
                "description": "",
                "local": false,
                "name": "Bacon",
                "tags": {
                    "meat": true
                }
            },
            "Du": {
                "availability": [],
                "code": "Du",
                "description": "",
                "local": false,
                "name": "Premium Chicken",
                "tags": {
                    "meat": true
                }
            },
            "C": {
                "availability": [],
                "code": "C",
                "description": "",
                "local": false,
                "name": "Cheese",
                "tags": {
                    "cheese": true,
                    "nonMeat": true
                }
            },
            "E": {
                "availability": [],
                "code": "E",
                "description": "",
                "local": false,
                "name": "Cheddar Cheese",
                "tags": {
                    "cheese": true,
                    "nonMeat": true
                }
            },
            "Fe": {
                "availability": [],
                "code": "Fe",
                "description": "",
                "local": false,
                "name": "Feta Cheese",
                "tags": {
                    "cheese": true,
                    "nonMeat": true
                }
            },
            "Cs": {
                "availability": [],
                "code": "Cs",
                "description": "",
                "local": false,
                "name": "Shredded Parmesan",
                "tags": {
                    "cheese": true,
                    "nonMeat": true
                }
            },
            "Cp": {
                "availability": [],
                "code": "Cp",
                "description": "",
                "local": false,
                "name": "Shredded Provolone Cheese",
                "tags": {
                    "cheese": true,
                    "nonMeat": true
                }
            },
            "F": {
                "availability": [],
                "code": "F",
                "description": "",
                "local": true,
                "name": "Garlic",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "G": {
                "availability": [],
                "code": "G",
                "description": "",
                "local": false,
                "name": "Green Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "J": {
                "availability": [],
                "code": "J",
                "description": "",
                "local": false,
                "name": "Jalapeno Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "M": {
                "availability": [],
                "code": "M",
                "description": "",
                "local": false,
                "name": "Mushrooms",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "N": {
                "availability": [],
                "code": "N",
                "description": "",
                "local": false,
                "name": "Pineapple",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "O": {
                "availability": [],
                "code": "O",
                "description": "",
                "local": false,
                "name": "Onions",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "R": {
                "availability": [],
                "code": "R",
                "description": "",
                "local": false,
                "name": "Black Olives",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Rr": {
                "availability": [],
                "code": "Rr",
                "description": "",
                "local": false,
                "name": "Roasted Red Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Si": {
                "availability": [],
                "code": "Si",
                "description": "",
                "local": false,
                "name": "Spinach",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Td": {
                "availability": [],
                "code": "Td",
                "description": "",
                "local": false,
                "name": "Diced Tomatoes",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Z": {
                "availability": [],
                "code": "Z",
                "description": "",
                "local": false,
                "name": "Banana Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            }
        },
        "pizza": {
            "X": {
                "availability": [],
                "code": "X",
                "description": "",
                "local": false,
                "name": "Robust Inspired Tomato Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Xm": {
                "availability": [],
                "code": "Xm",
                "description": "",
                "local": false,
                "name": "Hearty Marinara Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Bq": {
                "availability": [],
                "code": "Bq",
                "description": "",
                "local": false,
                "name": "Honey BBQ Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Xw": {
                "availability": [],
                "code": "Xw",
                "description": "",
                "local": false,
                "name": "Garlic Parmesan Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "C": {
                "availability": [],
                "code": "C",
                "description": "",
                "local": false,
                "name": "Cheese",
                "tags": {
                    "cheese": true,
                    "nonMeat": true
                }
            },
            "H": {
                "availability": [],
                "code": "H",
                "description": "",
                "local": false,
                "name": "Ham",
                "tags": {
                    "meat": true
                }
            },
            "B": {
                "availability": [],
                "code": "B",
                "description": "",
                "local": false,
                "name": "Beef",
                "tags": {
                    "meat": true
                }
            },
            "Sa": {
                "availability": [],
                "code": "Sa",
                "description": "",
                "local": false,
                "name": "Salami",
                "tags": {
                    "meat": true
                }
            },
            "P": {
                "availability": [],
                "code": "P",
                "description": "",
                "local": false,
                "name": "Pepperoni",
                "tags": {
                    "meat": true
                }
            },
            "S": {
                "availability": [],
                "code": "S",
                "description": "",
                "local": false,
                "name": "Italian Sausage",
                "tags": {
                    "meat": true
                }
            },
            "Du": {
                "availability": [],
                "code": "Du",
                "description": "",
                "local": false,
                "name": "Premium Chicken",
                "tags": {
                    "meat": true
                }
            },
            "K": {
                "availability": [],
                "code": "K",
                "description": "",
                "local": false,
                "name": "Bacon",
                "tags": {
                    "meat": true
                }
            },
            "Pm": {
                "availability": [],
                "code": "Pm",
                "description": "",
                "local": false,
                "name": "Philly Steak",
                "tags": {
                    "meat": true
                }
            },
            "Ht": {
                "availability": [],
                "code": "Ht",
                "description": "",
                "local": false,
                "name": "Hot Buffalo Sauce",
                "tags": {
                    "nonMeat": true
                }
            },
            "F": {
                "availability": [],
                "code": "F",
                "description": "",
                "local": true,
                "name": "Garlic",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "J": {
                "availability": [],
                "code": "J",
                "description": "",
                "local": false,
                "name": "Jalapeno Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "O": {
                "availability": [],
                "code": "O",
                "description": "",
                "local": false,
                "name": "Onions",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Z": {
                "availability": [],
                "code": "Z",
                "description": "",
                "local": false,
                "name": "Banana Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Td": {
                "availability": [],
                "code": "Td",
                "description": "",
                "local": false,
                "name": "Diced Tomatoes",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "R": {
                "availability": [],
                "code": "R",
                "description": "",
                "local": false,
                "name": "Black Olives",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "M": {
                "availability": [],
                "code": "M",
                "description": "",
                "local": false,
                "name": "Mushrooms",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "N": {
                "availability": [],
                "code": "N",
                "description": "",
                "local": false,
                "name": "Pineapple",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Cp": {
                "availability": [],
                "code": "Cp",
                "description": "",
                "local": false,
                "name": "Shredded Provolone Cheese",
                "tags": {
                    "nonMeat": true,
                    "baseOptionQty": "1"
                }
            },
            "E": {
                "availability": [],
                "code": "E",
                "description": "",
                "local": false,
                "name": "Cheddar Cheese",
                "tags": {
                    "nonMeat": true
                }
            },
            "G": {
                "availability": [],
                "code": "G",
                "description": "",
                "local": false,
                "name": "Green Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Si": {
                "availability": [],
                "code": "Si",
                "description": "",
                "local": false,
                "name": "Spinach",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Rr": {
                "availability": [],
                "code": "Rr",
                "description": "",
                "local": false,
                "name": "Roasted Red Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Fe": {
                "availability": [],
                "code": "Fe",
                "description": "",
                "local": false,
                "name": "Feta Cheese",
                "tags": {
                    "nonMeat": true
                }
            },
            "Cs": {
                "availability": [],
                "code": "Cs",
                "description": "",
                "local": false,
                "name": "Shredded Parmesan Asiago",
                "tags": {
                    "nonMeat": true
                }
            },
            "Ac": {
                "availability": [],
                "code": "Ac",
                "description": "",
                "local": false,
                "name": "American Cheese",
                "tags": {
                    "nonMeat": true
                }
            },
            "Xf": {
                "availability": [],
                "code": "Xf",
                "description": "",
                "local": false,
                "name": "Alfredo Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Rd": {
                "availability": [],
                "code": "Rd",
                "description": "",
                "local": false,
                "name": "Ranch",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Km": {
                "availability": [],
                "code": "Km",
                "description": "",
                "local": false,
                "name": "Ketchup-mustard sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "exclusiveGroup": "Sauce",
                    "sauce": true,
                    "nonMeat": true
                }
            }
        },
        "sandwich": {
            "X": {
                "availability": [],
                "code": "X",
                "description": "",
                "local": false,
                "name": "Pizza Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Mh": {
                "availability": [],
                "code": "Mh",
                "description": "",
                "local": false,
                "name": "Mango Habanero Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Bd": {
                "availability": [],
                "code": "Bd",
                "description": "",
                "local": false,
                "name": "Blue Cheese Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "sauce": true,
                    "nonMeat": true
                }
            },
            "Rd": {
                "availability": [],
                "code": "Rd",
                "description": "",
                "local": false,
                "name": "Ranch Dressing",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "sauce": true,
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Ht": {
                "availability": [],
                "code": "Ht",
                "description": "",
                "local": false,
                "name": "Hot Buffalo Sauce",
                "tags": {
                    "wholeOnly": true,
                    "ignoreQty": true,
                    "sauce": true,
                    "vege": true,
                    "nonMeat": true
                }
            },
            "C": {
                "availability": [],
                "code": "C",
                "description": "",
                "local": false,
                "name": "Cheese",
                "tags": {
                    "nonMeat": true
                }
            },
            "P": {
                "availability": [],
                "code": "P",
                "description": "",
                "local": false,
                "name": "Pepperoni",
                "tags": {
                    "meat": true
                }
            },
            "Pm": {
                "availability": [],
                "code": "Pm",
                "description": "",
                "local": false,
                "name": "Philly Steak",
                "tags": {
                    "meat": true
                }
            },
            "H": {
                "availability": [],
                "code": "H",
                "description": "",
                "local": false,
                "name": "Ham",
                "tags": {
                    "meat": true
                }
            },
            "K": {
                "availability": [],
                "code": "K",
                "description": "",
                "local": false,
                "name": "Bacon",
                "tags": {
                    "meat": true
                }
            },
            "Sa": {
                "availability": [],
                "code": "Sa",
                "description": "",
                "local": false,
                "name": "Salami",
                "tags": {
                    "meat": true
                }
            },
            "Du": {
                "availability": [],
                "code": "Du",
                "description": "",
                "local": false,
                "name": "Premium Chicken",
                "tags": {
                    "meat": true
                }
            },
            "Ac": {
                "availability": [],
                "code": "Ac",
                "description": "",
                "local": false,
                "name": "American Cheese",
                "tags": {
                    "nonMeat": true
                }
            },
            "E": {
                "availability": [],
                "code": "E",
                "description": "",
                "local": false,
                "name": "Cheddar Cheese",
                "tags": {
                    "nonMeat": true
                }
            },
            "Fe": {
                "availability": [],
                "code": "Fe",
                "description": "",
                "local": false,
                "name": "Feta Cheese",
                "tags": {
                    "nonMeat": true
                }
            },
            "Cs": {
                "availability": [],
                "code": "Cs",
                "description": "",
                "local": false,
                "name": "Shredded Parmesan Asiago",
                "tags": {
                    "nonMeat": true
                }
            },
            "Pv": {
                "availability": [],
                "code": "Pv",
                "description": "",
                "local": false,
                "name": "Sliced Provolone",
                "tags": {
                    "nonMeat": true
                }
            },
            "Z": {
                "availability": [],
                "code": "Z",
                "description": "",
                "local": false,
                "name": "Banana Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "G": {
                "availability": [],
                "code": "G",
                "description": "",
                "local": false,
                "name": "Green Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "J": {
                "availability": [],
                "code": "J",
                "description": "",
                "local": false,
                "name": "Jalapeno Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "M": {
                "availability": [],
                "code": "M",
                "description": "",
                "local": false,
                "name": "Mushrooms",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "N": {
                "availability": [],
                "code": "N",
                "description": "",
                "local": false,
                "name": "Pineapple",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "O": {
                "availability": [],
                "code": "O",
                "description": "",
                "local": false,
                "name": "Onions",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Rr": {
                "availability": [],
                "code": "Rr",
                "description": "",
                "local": false,
                "name": "Roasted Red Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Si": {
                "availability": [],
                "code": "Si",
                "description": "",
                "local": false,
                "name": "Spinach",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            },
            "Td": {
                "availability": [],
                "code": "Td",
                "description": "",
                "local": false,
                "name": "Diced Tomatoes",
                "tags": {
                    "vege": true,
                    "nonMeat": true
                }
            }
        },
        "wings": {
            "K": {
                "availability": [],
                "code": "K",
                "description": "",
                "local": false,
                "name": "Bacon",
                "tags": {
                    "meat": true,
                    "side": false
                }
            },
            "Td": {
                "availability": [],
                "code": "Td",
                "description": "",
                "local": false,
                "name": "Diced Tomatoes",
                "tags": {
                    "vege": true,
                    "nonMeat": true,
                    "side": false
                }
            },
            "J": {
                "availability": [],
                "code": "J",
                "description": "",
                "local": false,
                "name": "Jalapeno Peppers",
                "tags": {
                    "vege": true,
                    "nonMeat": true,
                    "side": false
                }
            },
            "N": {
                "availability": [],
                "code": "N",
                "description": "",
                "local": false,
                "name": "Pineapple",
                "tags": {
                    "vege": true,
                    "nonMeat": true,
                    "side": false
                }
            }
        }
    },
    "variants": {
        "B8PCPT": {
            "code": "B8PCPT",
            "flavorCode": "",
            "imageCode": "B8PCPT",
            "local": false,
            "name": "Parmesan Bread Twists",
            "price": "6.99",
            "productCode": "F_PARMT",
            "sizeCode": "BRD8",
            "tags": {
                "breadType": "Twists",
                "defaultSides": "SIDMAR=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "B8PCGT": {
            "code": "B8PCGT",
            "flavorCode": "",
            "imageCode": "B8PCGT",
            "local": false,
            "name": "Garlic Bread Twists",
            "price": "6.99",
            "productCode": "F_GARLICT",
            "sizeCode": "BRD8",
            "tags": {
                "breadType": "Twists",
                "defaultSides": "SIDMAR=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "B8PCSCB": {
            "code": "B8PCSCB",
            "flavorCode": "",
            "imageCode": "B8PCSCB",
            "local": false,
            "name": "Stuffed Cheesy Bread",
            "price": "7.49",
            "productCode": "F_SCBRD",
            "sizeCode": "BRD8",
            "tags": {
                "breadType": "Stuffed",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.49",
                "price1-0": "7.49",
                "price1-3": "10.49",
                "price2-3": "10.49",
                "price1-4": "11.49",
                "price2-2": "9.49",
                "price1-1": "8.49",
                "price2-1": "8.49",
                "price1-2": "9.49",
                "price2-0": "7.49"
            },
            "surcharge": "0"
        },
        "B8PCSSF": {
            "code": "B8PCSSF",
            "flavorCode": "",
            "imageCode": "B8PCSSF",
            "local": false,
            "name": "Stuffed Cheesy Bread with Spinach & Feta",
            "price": "7.49",
            "productCode": "F_SSBRD",
            "sizeCode": "BRD8",
            "tags": {
                "breadType": "Stuffed",
                "defaultSides": "",
                "defaultToppings": "Si=1,Fe=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.49",
                "price1-0": "7.49",
                "price1-3": "10.49",
                "price2-3": "10.49",
                "price1-4": "11.49",
                "price2-2": "9.49",
                "price1-1": "8.49",
                "price2-1": "8.49",
                "price1-2": "9.49",
                "price2-0": "7.49"
            },
            "surcharge": "0"
        },
        "B8PCSBJ": {
            "code": "B8PCSBJ",
            "flavorCode": "",
            "imageCode": "B8PCSBJ",
            "local": false,
            "name": "Stuffed Cheesy Bread with Bacon & Jalapeno",
            "price": "7.49",
            "productCode": "F_SBBRD",
            "sizeCode": "BRD8",
            "tags": {
                "breadType": "Stuffed",
                "defaultSides": "",
                "defaultToppings": "K=1,J=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.49",
                "price1-0": "7.49",
                "price1-3": "10.49",
                "price2-3": "10.49",
                "price1-4": "11.49",
                "price2-2": "9.49",
                "price1-1": "8.49",
                "price2-1": "8.49",
                "price1-2": "9.49",
                "price2-0": "7.49"
            },
            "surcharge": "0"
        },
        "B16PBIT": {
            "code": "B16PBIT",
            "flavorCode": "",
            "imageCode": "B16PBIT",
            "local": false,
            "name": "16-Piece Parmesan Bread Bites",
            "price": "4.99",
            "productCode": "F_PBITES",
            "sizeCode": "BRD16",
            "tags": {
                "defaultSides": "SIDMAR=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "4.99",
                "price1-0": "4.99",
                "price1-3": "4.99",
                "price2-3": "4.99",
                "price1-4": "4.99",
                "price2-2": "4.99",
                "price1-1": "4.99",
                "price2-1": "4.99",
                "price1-2": "4.99",
                "price2-0": "4.99"
            },
            "surcharge": "0"
        },
        "B32PBIT": {
            "code": "B32PBIT",
            "flavorCode": "",
            "imageCode": "B32PBIT",
            "local": false,
            "name": "32-Piece Parmesan Bread Bites",
            "price": "7.99",
            "productCode": "F_PBITES",
            "sizeCode": "BRD32",
            "tags": {
                "defaultSides": "SIDMAR=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "7.99",
                "price1-0": "7.99",
                "price1-3": "7.99",
                "price2-3": "7.99",
                "price1-4": "7.99",
                "price2-2": "7.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "7.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "B8PCCT": {
            "code": "B8PCCT",
            "flavorCode": "",
            "imageCode": "B8PCCT",
            "local": false,
            "name": "Cinnamon Bread Twists",
            "price": "6.99",
            "productCode": "F_CINNAT",
            "sizeCode": "DRT8",
            "tags": {
                "breadType": "Twists",
                "defaultSides": "SIDICE=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "MARBRWNE": {
            "code": "MARBRWNE",
            "flavorCode": "",
            "imageCode": "MARBRWNE",
            "local": false,
            "name": "Domino's Marbled Cookie Brownie™",
            "price": "6.99",
            "productCode": "F_MRBRWNE",
            "sizeCode": "9PC",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "B2PCLAVA": {
            "code": "B2PCLAVA",
            "flavorCode": "",
            "imageCode": "B2PCLAVA",
            "local": false,
            "name": "Chocolate Lava Crunch Cakes",
            "price": "4.99",
            "productCode": "F_LAVA",
            "sizeCode": "DRT2",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "7.99",
                "price1-0": "4.99",
                "price1-3": "7.24",
                "price2-3": "7.24",
                "price1-4": "7.99",
                "price2-2": "6.49",
                "price1-1": "5.74",
                "price2-1": "5.74",
                "price1-2": "6.49",
                "price2-0": "4.99"
            },
            "surcharge": "0"
        },
        "20BCOKE": {
            "code": "20BCOKE",
            "flavorCode": "",
            "imageCode": "20BCOKE",
            "local": false,
            "name": "20oz Bottle Coke®",
            "price": "2.09",
            "productCode": "F_COKE",
            "sizeCode": "20OZB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.09",
                "price1-0": "2.09",
                "price1-3": "2.09",
                "price2-3": "2.09",
                "price1-4": "2.09",
                "price2-2": "2.09",
                "price1-1": "2.09",
                "price2-1": "2.09",
                "price1-2": "2.09",
                "price2-0": "2.09"
            },
            "surcharge": "0"
        },
        "20BORNG": {
            "code": "20BORNG",
            "flavorCode": "",
            "imageCode": "20BORNG",
            "local": false,
            "name": "20oz Bottle Fanta® Orange",
            "price": "2.09",
            "productCode": "F_ORAN",
            "sizeCode": "20OZB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.09",
                "price1-0": "2.09",
                "price1-3": "2.09",
                "price2-3": "2.09",
                "price1-4": "2.09",
                "price2-2": "2.09",
                "price1-1": "2.09",
                "price2-1": "2.09",
                "price1-2": "2.09",
                "price2-0": "2.09"
            },
            "surcharge": "0"
        },
        "20BSPRITE": {
            "code": "20BSPRITE",
            "flavorCode": "",
            "imageCode": "20BSPRITE",
            "local": false,
            "name": "20oz Bottle Sprite®",
            "price": "2.09",
            "productCode": "F_SPRITE",
            "sizeCode": "20OZB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.09",
                "price1-0": "2.09",
                "price1-3": "2.09",
                "price2-3": "2.09",
                "price1-4": "2.09",
                "price2-2": "2.09",
                "price1-1": "2.09",
                "price2-1": "2.09",
                "price1-2": "2.09",
                "price2-0": "2.09"
            },
            "surcharge": "0"
        },
        "2LCOKE": {
            "code": "2LCOKE",
            "flavorCode": "",
            "imageCode": "2LCOKE",
            "local": false,
            "name": "2-Liter Coke®",
            "price": "2.99",
            "productCode": "F_COKE",
            "sizeCode": "2LTB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.99",
                "price1-0": "2.99",
                "price1-3": "2.99",
                "price2-3": "2.99",
                "price1-4": "2.99",
                "price2-2": "2.99",
                "price1-1": "2.99",
                "price2-1": "2.99",
                "price1-2": "2.99",
                "price2-0": "2.99"
            },
            "surcharge": "0"
        },
        "2LDCOKE": {
            "code": "2LDCOKE",
            "flavorCode": "",
            "imageCode": "2LDCOKE",
            "local": false,
            "name": "2-Liter Diet Coke®",
            "price": "2.99",
            "productCode": "F_DIET",
            "sizeCode": "2LTB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.99",
                "price1-0": "2.99",
                "price1-3": "2.99",
                "price2-3": "2.99",
                "price1-4": "2.99",
                "price2-2": "2.99",
                "price1-1": "2.99",
                "price2-1": "2.99",
                "price1-2": "2.99",
                "price2-0": "2.99"
            },
            "surcharge": "0"
        },
        "20BDCOKE": {
            "code": "20BDCOKE",
            "flavorCode": "",
            "imageCode": "20BDCOKE",
            "local": false,
            "name": "20oz Bottle Diet Coke®",
            "price": "2.09",
            "productCode": "F_DIET",
            "sizeCode": "20OZB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.09",
                "price1-0": "2.09",
                "price1-3": "2.09",
                "price2-3": "2.09",
                "price1-4": "2.09",
                "price2-2": "2.09",
                "price1-1": "2.09",
                "price2-1": "2.09",
                "price1-2": "2.09",
                "price2-0": "2.09"
            },
            "surcharge": "0"
        },
        "2LMMORANGE": {
            "code": "2LMMORANGE",
            "flavorCode": "",
            "imageCode": "2LMMORANGE",
            "local": true,
            "name": "2-Liter Fanta® Orange",
            "price": "2.99",
            "productCode": "F_ORAN",
            "sizeCode": "2LTB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.99",
                "price1-0": "2.99",
                "price1-3": "2.99",
                "price2-3": "2.99",
                "price1-4": "2.99",
                "price2-2": "2.99",
                "price1-1": "2.99",
                "price2-1": "2.99",
                "price1-2": "2.99",
                "price2-0": "2.99"
            },
            "surcharge": "0"
        },
        "2LSPRITE": {
            "code": "2LSPRITE",
            "flavorCode": "",
            "imageCode": "2LSPRITE",
            "local": false,
            "name": "2-Liter Sprite®",
            "price": "2.99",
            "productCode": "F_SPRITE",
            "sizeCode": "2LTB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.99",
                "price1-0": "2.99",
                "price1-3": "2.99",
                "price2-3": "2.99",
                "price1-4": "2.99",
                "price2-2": "2.99",
                "price1-1": "2.99",
                "price2-1": "2.99",
                "price1-2": "2.99",
                "price2-0": "2.99"
            },
            "surcharge": "0"
        },
        "BOTTLWATER": {
            "code": "BOTTLWATER",
            "flavorCode": "",
            "imageCode": "BOTTLWATER",
            "local": false,
            "name": "20oz Dasani® Bottle Water",
            "price": "2.09",
            "productCode": "F_WATER",
            "sizeCode": "20OZB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "2.09",
                "price1-0": "2.09",
                "price1-3": "2.09",
                "price2-3": "2.09",
                "price1-4": "2.09",
                "price2-2": "2.09",
                "price1-1": "2.09",
                "price2-1": "2.09",
                "price1-2": "2.09",
                "price2-0": "2.09"
            },
            "surcharge": "0"
        },
        "D20BLEMO": {
            "code": "D20BLEMO",
            "flavorCode": "",
            "imageCode": "D20BLEMO",
            "local": true,
            "name": "20oz Lemonade Bottle",
            "price": "2.09",
            "productCode": "F_LEMND",
            "sizeCode": "20OZB",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "2.09",
                "price1-0": "2.09",
                "price1-3": "2.09",
                "price2-3": "2.09",
                "price1-4": "2.09",
                "price2-2": "2.09",
                "price1-1": "2.09",
                "price2-1": "2.09",
                "price1-2": "2.09",
                "price2-0": "2.09"
            },
            "surcharge": "0"
        },
        "PPSGARSA": {
            "code": "PPSGARSA",
            "flavorCode": "",
            "imageCode": "PPSGARSA",
            "local": false,
            "name": "Classic Garden",
            "price": "6.99",
            "productCode": "F_GARDEN",
            "sizeCode": "",
            "tags": {
                "defaultSides": "RANCHPK=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PPSCSRSA": {
            "code": "PPSCSRSA",
            "flavorCode": "",
            "imageCode": "PPSCSRSA",
            "local": false,
            "name": "Chicken Caesar",
            "price": "6.99",
            "productCode": "F_CCAESAR",
            "sizeCode": "",
            "tags": {
                "defaultSides": "CAESAR=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PINPASBD": {
            "code": "PINPASBD",
            "flavorCode": "PASTA",
            "imageCode": "PINPASBD",
            "local": false,
            "name": "Build Your Own Pasta",
            "price": "7.99",
            "productCode": "S_BUILD",
            "sizeCode": "",
            "tags": {
                "sauceRequired": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "7.99",
                "price1-3": "7.99",
                "price2-3": "7.99",
                "price1-4": "8.99",
                "price2-2": "7.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "7.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "PINPASCA": {
            "code": "PINPASCA",
            "flavorCode": "PASTA",
            "imageCode": "PINPASCA",
            "local": false,
            "name": "Chicken Alfredo Pasta",
            "price": "7.99",
            "productCode": "S_ALFR",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "Du=1,Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "PINPASCC": {
            "code": "PINPASCC",
            "flavorCode": "PASTA",
            "imageCode": "PINPASCC",
            "local": false,
            "name": "Chicken Carbonara Pasta",
            "price": "7.99",
            "productCode": "S_CARB",
            "sizeCode": "",
            "tags": {
                "maxOptionQty": "4",
                "defaultSides": "",
                "defaultToppings": "M=1,O=1,Du=1,K=1,Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "PINPASMM": {
            "code": "PINPASMM",
            "flavorCode": "PASTA",
            "imageCode": "PINPASMM",
            "local": false,
            "name": "Italian Sausage Marinara Pasta",
            "price": "7.99",
            "productCode": "S_MARIN",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "S=1,Cp=1,Xm=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "PINPASPP": {
            "code": "PINPASPP",
            "flavorCode": "PASTA",
            "imageCode": "PINPASPP",
            "local": false,
            "name": "Pasta Primavera",
            "price": "7.99",
            "productCode": "S_PRIM",
            "sizeCode": "",
            "tags": {
                "maxOptionQty": "4",
                "defaultSides": "",
                "defaultToppings": "M=1,O=1,Td=1,Si=1,Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "PINBBLBD": {
            "code": "PINBBLBD",
            "flavorCode": "BBOWL",
            "imageCode": "PINBBLBD",
            "local": false,
            "name": "Build your Own BreadBowl Pasta",
            "price": "8.99",
            "productCode": "S_BUILD",
            "sizeCode": "",
            "tags": {
                "sauceRequired": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "9.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "9.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "PINBBLCA": {
            "code": "PINBBLCA",
            "flavorCode": "BBOWL",
            "imageCode": "PINBBLCA",
            "local": false,
            "name": "Chicken Alfredo BreadBowl Pasta",
            "price": "8.99",
            "productCode": "S_ALFR",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "Du=1,Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "12.99",
                "price1-0": "8.99",
                "price1-3": "11.99",
                "price2-3": "11.99",
                "price1-4": "12.99",
                "price2-2": "10.99",
                "price1-1": "9.99",
                "price2-1": "9.99",
                "price1-2": "10.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "PINBBLCC": {
            "code": "PINBBLCC",
            "flavorCode": "BBOWL",
            "imageCode": "PINBBLCC",
            "local": false,
            "name": "Chicken Carbonara BreadBowl Pasta",
            "price": "8.99",
            "productCode": "S_CARB",
            "sizeCode": "",
            "tags": {
                "maxOptionQty": "4",
                "defaultSides": "",
                "defaultToppings": "M=1,O=1,Du=1,K=1,Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "12.99",
                "price1-0": "8.99",
                "price1-3": "11.99",
                "price2-3": "11.99",
                "price1-4": "12.99",
                "price2-2": "10.99",
                "price1-1": "9.99",
                "price2-1": "9.99",
                "price1-2": "10.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "PINBBLMM": {
            "code": "PINBBLMM",
            "flavorCode": "BBOWL",
            "imageCode": "PINBBLMM",
            "local": false,
            "name": "Italian Sausage Marinara BreadBowl Pasta",
            "price": "8.99",
            "productCode": "S_MARIN",
            "sizeCode": "",
            "tags": {
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "S=1,Cp=1,Xm=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "12.99",
                "price1-0": "8.99",
                "price1-3": "11.99",
                "price2-3": "11.99",
                "price1-4": "12.99",
                "price2-2": "10.99",
                "price1-1": "9.99",
                "price2-1": "9.99",
                "price1-2": "10.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "PINBBLPP": {
            "code": "PINBBLPP",
            "flavorCode": "BBOWL",
            "imageCode": "PINBBLPP",
            "local": false,
            "name": "Pasta Primavera BreadBowl",
            "price": "8.99",
            "productCode": "S_PRIM",
            "sizeCode": "",
            "tags": {
                "maxOptionQty": "4",
                "defaultSides": "",
                "defaultToppings": "M=1,O=1,Td=1,Si=1,Xf=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "12.99",
                "price1-0": "8.99",
                "price1-3": "11.99",
                "price2-3": "11.99",
                "price1-4": "12.99",
                "price2-2": "10.99",
                "price1-1": "9.99",
                "price2-1": "9.99",
                "price1-2": "10.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "10SCDELUX": {
            "code": "10SCDELUX",
            "flavorCode": "HANDTOSS",
            "imageCode": "10SCDELUX",
            "local": false,
            "name": "Small (10\") Hand Tossed Deluxe",
            "price": "12.99",
            "productCode": "S_DX",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "10SCMEATZA": {
            "code": "10SCMEATZA",
            "flavorCode": "HANDTOSS",
            "imageCode": "10SCMEATZA",
            "local": false,
            "name": "Small (10\") Hand Tossed MeatZZa",
            "price": "12.99",
            "productCode": "S_MX",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IREBP": {
            "code": "P10IREBP",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IREBP",
            "local": false,
            "name": "Small (10\") Hand Tossed Buffalo Chicken",
            "price": "12.99",
            "productCode": "S_PIZBP",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IRECK": {
            "code": "P10IRECK",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IRECK",
            "local": false,
            "name": "Small (10\") Hand Tossed Memphis BBQ Chicken ",
            "price": "12.99",
            "productCode": "S_PIZCK",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IRECR": {
            "code": "P10IRECR",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IRECR",
            "local": false,
            "name": "Small (10\") Hand Tossed Cali Chicken Bacon Ranch",
            "price": "12.99",
            "productCode": "S_PIZCR",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IRECZ": {
            "code": "P10IRECZ",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IRECZ",
            "local": false,
            "name": "Small (10\") Hand Tossed Wisconsin 6 Cheese Pizza",
            "price": "12.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IREPH": {
            "code": "P10IREPH",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IREPH",
            "local": false,
            "name": "Small (10\") Hand Tossed Philly Cheese Steak",
            "price": "12.99",
            "productCode": "S_PIZPH",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IREPV": {
            "code": "P10IREPV",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IREPV",
            "local": false,
            "name": "Small (10\") Hand Tossed Pacific Veggie",
            "price": "12.99",
            "productCode": "S_PIZPV",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "10SCPFEAST": {
            "code": "10SCPFEAST",
            "flavorCode": "HANDTOSS",
            "imageCode": "10SCPFEAST",
            "local": false,
            "name": "Small (10\") Hand Tossed Ultimate Pepperoni",
            "price": "12.99",
            "productCode": "S_PIZPX",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IREUH": {
            "code": "P10IREUH",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IREUH",
            "local": false,
            "name": "Small (10\") Hand Tossed Honolulu Hawaiian",
            "price": "12.99",
            "productCode": "S_PIZUH",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "10SCREEN": {
            "code": "10SCREEN",
            "flavorCode": "HANDTOSS",
            "imageCode": "10SCREEN",
            "local": false,
            "name": "Small (10\") Hand Tossed Pizza",
            "price": "9.49",
            "productCode": "S_PIZZA",
            "sizeCode": "10",
            "tags": {
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "15.45",
                "price1-0": "9.49",
                "price1-3": "13.96",
                "price2-3": "13.96",
                "price1-4": "15.45",
                "price2-2": "12.47",
                "price1-1": "10.98",
                "price2-1": "10.98",
                "price1-2": "12.47",
                "price2-0": "9.49"
            },
            "surcharge": "0"
        },
        "10SCEXTRAV": {
            "code": "10SCEXTRAV",
            "flavorCode": "HANDTOSS",
            "imageCode": "10SCEXTRAV",
            "local": false,
            "name": "Small (10\") Hand Tossed ExtravaganZZa ",
            "price": "12.99",
            "productCode": "S_ZZ",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "12SCDELUX": {
            "code": "12SCDELUX",
            "flavorCode": "HANDTOSS",
            "imageCode": "12SCDELUX",
            "local": false,
            "name": "Medium (12\") Hand Tossed Deluxe",
            "price": "14.99",
            "productCode": "S_DX",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "12SCMEATZA": {
            "code": "12SCMEATZA",
            "flavorCode": "HANDTOSS",
            "imageCode": "12SCMEATZA",
            "local": false,
            "name": "Medium (12\") Hand Tossed MeatZZa",
            "price": "14.99",
            "productCode": "S_MX",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IREBP": {
            "code": "P12IREBP",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IREBP",
            "local": false,
            "name": "Medium (12\") Hand Tossed Buffalo Chicken",
            "price": "14.99",
            "productCode": "S_PIZBP",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IRECK": {
            "code": "P12IRECK",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IRECK",
            "local": false,
            "name": "Medium (12\") Hand Tossed Memphis BBQ Chicken ",
            "price": "14.99",
            "productCode": "S_PIZCK",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IRECR": {
            "code": "P12IRECR",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IRECR",
            "local": false,
            "name": "Medium (12\") Hand Tossed Cali Chicken Bacon Ranch",
            "price": "14.99",
            "productCode": "S_PIZCR",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IRECZ": {
            "code": "P12IRECZ",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IRECZ",
            "local": false,
            "name": "Medium (12\") Hand Tossed Wisconsin 6 Cheese Pizza",
            "price": "14.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IREPH": {
            "code": "P12IREPH",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IREPH",
            "local": false,
            "name": "Medium (12\") Hand Tossed Philly Cheese Steak",
            "price": "14.99",
            "productCode": "S_PIZPH",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IREPV": {
            "code": "P12IREPV",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IREPV",
            "local": false,
            "name": "Medium (12\") Hand Tossed Pacific Veggie",
            "price": "14.99",
            "productCode": "S_PIZPV",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "12SCPFEAST": {
            "code": "12SCPFEAST",
            "flavorCode": "HANDTOSS",
            "imageCode": "12SCPFEAST",
            "local": false,
            "name": "Medium (12\") Hand Tossed Ultimate Pepperoni",
            "price": "14.99",
            "productCode": "S_PIZPX",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IREUH": {
            "code": "P12IREUH",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IREUH",
            "local": false,
            "name": "Medium (12\") Hand Tossed Honolulu Hawaiian",
            "price": "14.99",
            "productCode": "S_PIZUH",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "12SCREEN": {
            "code": "12SCREEN",
            "flavorCode": "HANDTOSS",
            "imageCode": "12SCREEN",
            "local": false,
            "name": "Medium (12\") Hand Tossed Pizza",
            "price": "11.99",
            "productCode": "S_PIZZA",
            "sizeCode": "12",
            "tags": {
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.75",
                "price1-0": "11.99",
                "price1-3": "17.06",
                "price2-3": "17.06",
                "price1-4": "18.75",
                "price2-2": "15.37",
                "price1-1": "13.68",
                "price2-1": "13.68",
                "price1-2": "15.37",
                "price2-0": "11.99"
            },
            "surcharge": "0"
        },
        "12SCEXTRAV": {
            "code": "12SCEXTRAV",
            "flavorCode": "HANDTOSS",
            "imageCode": "12SCEXTRAV",
            "local": false,
            "name": "Medium (12\") Hand Tossed ExtravaganZZa ",
            "price": "14.99",
            "productCode": "S_ZZ",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "12TDELUX": {
            "code": "12TDELUX",
            "flavorCode": "THIN",
            "imageCode": "12TDELUX",
            "local": false,
            "name": "Medium (12\") Thin Deluxe",
            "price": "14.99",
            "productCode": "S_DX",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "12TMEATZA": {
            "code": "12TMEATZA",
            "flavorCode": "THIN",
            "imageCode": "12TMEATZA",
            "local": false,
            "name": "Medium (12\") Thin MeatZZa",
            "price": "14.99",
            "productCode": "S_MX",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHBP": {
            "code": "P12ITHBP",
            "flavorCode": "THIN",
            "imageCode": "P12ITHBP",
            "local": false,
            "name": "Medium (12\") Thin Crust Buffalo Chicken",
            "price": "14.99",
            "productCode": "S_PIZBP",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHCK": {
            "code": "P12ITHCK",
            "flavorCode": "THIN",
            "imageCode": "P12ITHCK",
            "local": false,
            "name": "Medium (12\") Thin Crust Memphis BBQ Chicken ",
            "price": "14.99",
            "productCode": "S_PIZCK",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHCR": {
            "code": "P12ITHCR",
            "flavorCode": "THIN",
            "imageCode": "P12ITHCR",
            "local": false,
            "name": "Medium (12\") Thin Crust Cali Chicken Bacon Ranch",
            "price": "14.99",
            "productCode": "S_PIZCR",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHCZ": {
            "code": "P12ITHCZ",
            "flavorCode": "THIN",
            "imageCode": "P12ITHCZ",
            "local": false,
            "name": "Medium (12\") Thin Wisconsin 6 Cheese Pizza",
            "price": "14.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHPH": {
            "code": "P12ITHPH",
            "flavorCode": "THIN",
            "imageCode": "P12ITHPH",
            "local": false,
            "name": "Medium (12\") Thin Philly Cheese Steak",
            "price": "14.99",
            "productCode": "S_PIZPH",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHPV": {
            "code": "P12ITHPV",
            "flavorCode": "THIN",
            "imageCode": "P12ITHPV",
            "local": false,
            "name": "Medium (12\") Thin Crust Pacific Veggie",
            "price": "14.99",
            "productCode": "S_PIZPV",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "12TPFEAST": {
            "code": "12TPFEAST",
            "flavorCode": "THIN",
            "imageCode": "12TPFEAST",
            "local": false,
            "name": "Medium (12\") Thin Ultimate Pepperoni",
            "price": "14.99",
            "productCode": "S_PIZPX",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHUH": {
            "code": "P12ITHUH",
            "flavorCode": "THIN",
            "imageCode": "P12ITHUH",
            "local": false,
            "name": "Medium (12\") Thin Crust Honolulu Hawaiian",
            "price": "14.99",
            "productCode": "S_PIZUH",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "12THIN": {
            "code": "12THIN",
            "flavorCode": "THIN",
            "imageCode": "12THIN",
            "local": false,
            "name": "Medium (12\") Thin Pizza",
            "price": "11.99",
            "productCode": "S_PIZZA",
            "sizeCode": "12",
            "tags": {
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.75",
                "price1-0": "11.99",
                "price1-3": "17.06",
                "price2-3": "17.06",
                "price1-4": "18.75",
                "price2-2": "15.37",
                "price1-1": "13.68",
                "price2-1": "13.68",
                "price1-2": "15.37",
                "price2-0": "11.99"
            },
            "surcharge": "0"
        },
        "12TEXTRAV": {
            "code": "12TEXTRAV",
            "flavorCode": "THIN",
            "imageCode": "12TEXTRAV",
            "local": false,
            "name": "Medium (12\") Thin ExtravaganZZa ",
            "price": "14.99",
            "productCode": "S_ZZ",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "PBKIREDX": {
            "code": "PBKIREDX",
            "flavorCode": "BK",
            "imageCode": "PBKIREDX",
            "local": false,
            "name": "Large (14\") Brooklyn Deluxe",
            "price": "17.99",
            "productCode": "S_DX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "PBKIREMX": {
            "code": "PBKIREMX",
            "flavorCode": "BK",
            "imageCode": "PBKIREMX",
            "local": false,
            "name": "Large (14\") Brooklyn MeatZZa",
            "price": "17.99",
            "productCode": "S_MX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IBKBP": {
            "code": "P14IBKBP",
            "flavorCode": "BK",
            "imageCode": "P14IBKBP",
            "local": false,
            "name": "Large (14\") Brooklyn Buffalo Chicken",
            "price": "17.99",
            "productCode": "S_PIZBP",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IBKCK": {
            "code": "P14IBKCK",
            "flavorCode": "BK",
            "imageCode": "P14IBKCK",
            "local": false,
            "name": "Large (14\") Brooklyn Memphis BBQ Chicken ",
            "price": "17.99",
            "productCode": "S_PIZCK",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IBKCR": {
            "code": "P14IBKCR",
            "flavorCode": "BK",
            "imageCode": "P14IBKCR",
            "local": false,
            "name": "Large (14\") Brooklyn Cali Chicken Bacon Ranch",
            "price": "17.99",
            "productCode": "S_PIZCR",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IBKCZ": {
            "code": "P14IBKCZ",
            "flavorCode": "BK",
            "imageCode": "P14IBKCZ",
            "local": false,
            "name": "Large (14\") Brooklyn Wisconsin 6 Cheese Pizza",
            "price": "17.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IBKPH": {
            "code": "P14IBKPH",
            "flavorCode": "BK",
            "imageCode": "P14IBKPH",
            "local": false,
            "name": "Large (14\") Brooklyn Philly Cheese Steak",
            "price": "17.99",
            "productCode": "S_PIZPH",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IBKPV": {
            "code": "P14IBKPV",
            "flavorCode": "BK",
            "imageCode": "P14IBKPV",
            "local": false,
            "name": "Large (14\") Brooklyn Pacific Veggie",
            "price": "17.99",
            "productCode": "S_PIZPV",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "PBKIREPX": {
            "code": "PBKIREPX",
            "flavorCode": "BK",
            "imageCode": "PBKIREPX",
            "local": false,
            "name": "Large (14\") Brooklyn Ultimate Pepperoni",
            "price": "17.99",
            "productCode": "S_PIZPX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "PBKIREZA": {
            "code": "PBKIREZA",
            "flavorCode": "BK",
            "imageCode": "PBKIREZA",
            "local": false,
            "name": "Large (14\") Brooklyn Pizza",
            "price": "13.99",
            "productCode": "S_PIZZA",
            "sizeCode": "14",
            "tags": {
                "sodiumWarningEnabled": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.55",
                "price1-0": "13.99",
                "price1-3": "19.66",
                "price2-3": "19.66",
                "price1-4": "21.55",
                "price2-2": "17.77",
                "price1-1": "15.88",
                "price2-1": "15.88",
                "price1-2": "17.77",
                "price2-0": "13.99"
            },
            "surcharge": "0"
        },
        "PBKIREZZ": {
            "code": "PBKIREZZ",
            "flavorCode": "BK",
            "imageCode": "PBKIREZZ",
            "local": false,
            "name": "Large (14\") Brooklyn ExtravaganZZa ",
            "price": "17.99",
            "productCode": "S_ZZ",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14SCDELUX": {
            "code": "14SCDELUX",
            "flavorCode": "HANDTOSS",
            "imageCode": "14SCDELUX",
            "local": false,
            "name": "Large (14\") Hand Tossed Deluxe",
            "price": "17.99",
            "productCode": "S_DX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14SCMEATZA": {
            "code": "14SCMEATZA",
            "flavorCode": "HANDTOSS",
            "imageCode": "14SCMEATZA",
            "local": false,
            "name": "Large (14\") Hand Tossed MeatZZa",
            "price": "17.99",
            "productCode": "S_MX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IREBP": {
            "code": "P14IREBP",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IREBP",
            "local": false,
            "name": "Large (14\") Hand Tossed Buffalo Chicken",
            "price": "17.99",
            "productCode": "S_PIZBP",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IRECK": {
            "code": "P14IRECK",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IRECK",
            "local": false,
            "name": "Large (14\") Hand Tossed Memphis BBQ Chicken ",
            "price": "17.99",
            "productCode": "S_PIZCK",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IRECR": {
            "code": "P14IRECR",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IRECR",
            "local": false,
            "name": "Large (14\") Hand Tossed Cali Chicken Bacon Ranch",
            "price": "17.99",
            "productCode": "S_PIZCR",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IRECZ": {
            "code": "P14IRECZ",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IRECZ",
            "local": false,
            "name": "Large (14\") Hand Tossed Wisconsin 6 Cheese Pizza",
            "price": "17.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IREPH": {
            "code": "P14IREPH",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IREPH",
            "local": false,
            "name": "Large (14\") Hand Tossed Philly Cheese Steak",
            "price": "17.99",
            "productCode": "S_PIZPH",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IREPV": {
            "code": "P14IREPV",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IREPV",
            "local": false,
            "name": "Large (14\") Hand Tossed Pacific Veggie",
            "price": "17.99",
            "productCode": "S_PIZPV",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14SCPFEAST": {
            "code": "14SCPFEAST",
            "flavorCode": "HANDTOSS",
            "imageCode": "14SCPFEAST",
            "local": false,
            "name": "Large (14\") Hand Tossed Ultimate Pepperoni",
            "price": "17.99",
            "productCode": "S_PIZPX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IREUH": {
            "code": "P14IREUH",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IREUH",
            "local": false,
            "name": "Large (14\") Hand Tossed Honolulu Hawaiian",
            "price": "17.99",
            "productCode": "S_PIZUH",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14SCREEN": {
            "code": "14SCREEN",
            "flavorCode": "HANDTOSS",
            "imageCode": "14SCREEN",
            "local": false,
            "name": "Large (14\") Hand Tossed Pizza",
            "price": "13.99",
            "productCode": "S_PIZZA",
            "sizeCode": "14",
            "tags": {
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.55",
                "price1-0": "13.99",
                "price1-3": "19.66",
                "price2-3": "19.66",
                "price1-4": "21.55",
                "price2-2": "17.77",
                "price1-1": "15.88",
                "price2-1": "15.88",
                "price1-2": "17.77",
                "price2-0": "13.99"
            },
            "surcharge": "0"
        },
        "14SCEXTRAV": {
            "code": "14SCEXTRAV",
            "flavorCode": "HANDTOSS",
            "imageCode": "14SCEXTRAV",
            "local": false,
            "name": "Large (14\") Hand Tossed ExtravaganZZa ",
            "price": "17.99",
            "productCode": "S_ZZ",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14TDELUX": {
            "code": "14TDELUX",
            "flavorCode": "THIN",
            "imageCode": "14TDELUX",
            "local": false,
            "name": "Large (14\") Thin Deluxe",
            "price": "17.99",
            "productCode": "S_DX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14TMEATZA": {
            "code": "14TMEATZA",
            "flavorCode": "THIN",
            "imageCode": "14TMEATZA",
            "local": false,
            "name": "Large (14\") Thin MeatZZa",
            "price": "17.99",
            "productCode": "S_MX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHBP": {
            "code": "P14ITHBP",
            "flavorCode": "THIN",
            "imageCode": "P14ITHBP",
            "local": false,
            "name": "Large (14\") Thin Crust Buffalo Chicken",
            "price": "17.99",
            "productCode": "S_PIZBP",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHCK": {
            "code": "P14ITHCK",
            "flavorCode": "THIN",
            "imageCode": "P14ITHCK",
            "local": false,
            "name": "Large (14\") Thin Crust Memphis BBQ Chicken ",
            "price": "17.99",
            "productCode": "S_PIZCK",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHCZ": {
            "code": "P14ITHCZ",
            "flavorCode": "THIN",
            "imageCode": "P14ITHCZ",
            "local": false,
            "name": "Large (14\") Thin Wisconsin 6 Cheese Pizza",
            "price": "17.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHPH": {
            "code": "P14ITHPH",
            "flavorCode": "THIN",
            "imageCode": "P14ITHPH",
            "local": false,
            "name": "Large (14\") Thin Philly Cheese Steak",
            "price": "17.99",
            "productCode": "S_PIZPH",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHPV": {
            "code": "P14ITHPV",
            "flavorCode": "THIN",
            "imageCode": "P14ITHPV",
            "local": false,
            "name": "Large (14\") Thin Crust Pacific Veggie",
            "price": "17.99",
            "productCode": "S_PIZPV",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14TPFEAST": {
            "code": "14TPFEAST",
            "flavorCode": "THIN",
            "imageCode": "14TPFEAST",
            "local": false,
            "name": "Large (14\") Thin Ultimate Pepperoni",
            "price": "17.99",
            "productCode": "S_PIZPX",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHUH": {
            "code": "P14ITHUH",
            "flavorCode": "THIN",
            "imageCode": "P14ITHUH",
            "local": false,
            "name": "Large (14\") Thin Crust Honolulu Hawaiian",
            "price": "17.99",
            "productCode": "S_PIZUH",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "14THIN": {
            "code": "14THIN",
            "flavorCode": "THIN",
            "imageCode": "14THIN",
            "local": false,
            "name": "Large (14\") Thin Pizza",
            "price": "13.99",
            "productCode": "S_PIZZA",
            "sizeCode": "14",
            "tags": {
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.55",
                "price1-0": "13.99",
                "price1-3": "19.66",
                "price2-3": "19.66",
                "price1-4": "21.55",
                "price2-2": "17.77",
                "price1-1": "15.88",
                "price2-1": "15.88",
                "price1-2": "17.77",
                "price2-0": "13.99"
            },
            "surcharge": "0"
        },
        "14TEXTRAV": {
            "code": "14TEXTRAV",
            "flavorCode": "THIN",
            "imageCode": "14TEXTRAV",
            "local": false,
            "name": "Large (14\") Thin ExtravaganZZa ",
            "price": "17.99",
            "productCode": "S_ZZ",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P16IBKDX": {
            "code": "P16IBKDX",
            "flavorCode": "BK",
            "imageCode": "P16IBKDX",
            "local": true,
            "name": "X-Large (16\") Brooklyn Deluxe",
            "price": "19.99",
            "productCode": "S_DX",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKMX": {
            "code": "P16IBKMX",
            "flavorCode": "BK",
            "imageCode": "P16IBKMX",
            "local": true,
            "name": "X-Large (16\") Brooklyn MeatZZa",
            "price": "19.99",
            "productCode": "S_MX",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKBP": {
            "code": "P16IBKBP",
            "flavorCode": "BK",
            "imageCode": "P16IBKBP",
            "local": true,
            "name": "X-Large (16\") Brooklyn Buffalo Chicken",
            "price": "19.99",
            "productCode": "S_PIZBP",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKCK": {
            "code": "P16IBKCK",
            "flavorCode": "BK",
            "imageCode": "P16IBKCK",
            "local": true,
            "name": "X-Large (16\") Brooklyn Memphis BBQ Chicken ",
            "price": "19.99",
            "productCode": "S_PIZCK",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKCR": {
            "code": "P16IBKCR",
            "flavorCode": "BK",
            "imageCode": "P16IBKCR",
            "local": true,
            "name": "X-Large (16\") Brooklyn Cali Chicken Bacon Ranch",
            "price": "19.99",
            "productCode": "S_PIZCR",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKCZ": {
            "code": "P16IBKCZ",
            "flavorCode": "BK",
            "imageCode": "P16IBKCZ",
            "local": true,
            "name": "X-Large (16\") Brooklyn Wisconsin 6 Cheese Pizza",
            "price": "19.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKPH": {
            "code": "P16IBKPH",
            "flavorCode": "BK",
            "imageCode": "P16IBKPH",
            "local": true,
            "name": "X-Large (16\") Brooklyn Philly Cheese Steak",
            "price": "19.99",
            "productCode": "S_PIZPH",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKPV": {
            "code": "P16IBKPV",
            "flavorCode": "BK",
            "imageCode": "P16IBKPV",
            "local": true,
            "name": "X-Large (16\") Brooklyn Pacific Veggie",
            "price": "19.99",
            "productCode": "S_PIZPV",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKPX": {
            "code": "P16IBKPX",
            "flavorCode": "BK",
            "imageCode": "P16IBKPX",
            "local": true,
            "name": "X-Large (16\") Brooklyn Ultimate Pepperoni",
            "price": "19.99",
            "productCode": "S_PIZPX",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKUH": {
            "code": "P16IBKUH",
            "flavorCode": "BK",
            "imageCode": "P16IBKUH",
            "local": true,
            "name": "X-Large (16\") Brooklyn Honolulu Hawaiian",
            "price": "19.99",
            "productCode": "S_PIZUH",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P16IBKZA": {
            "code": "P16IBKZA",
            "flavorCode": "BK",
            "imageCode": "P16IBKZA",
            "local": true,
            "name": "X-Large (16\") Brooklyn Pizza",
            "price": "15.49",
            "productCode": "S_PIZZA",
            "sizeCode": "16",
            "tags": {
                "sodiumWarningEnabled": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "23.45",
                "price1-0": "15.49",
                "price1-3": "21.46",
                "price2-3": "21.46",
                "price1-4": "23.45",
                "price2-2": "19.47",
                "price1-1": "17.48",
                "price2-1": "17.48",
                "price1-2": "19.47",
                "price2-0": "15.49"
            },
            "surcharge": "0"
        },
        "P16IBKZZ": {
            "code": "P16IBKZZ",
            "flavorCode": "BK",
            "imageCode": "P16IBKZZ",
            "local": true,
            "name": "X-Large (16\") Brooklyn ExtravaganZZa ",
            "price": "19.99",
            "productCode": "S_ZZ",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P10IGFDX": {
            "code": "P10IGFDX",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFDX",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Deluxe",
            "price": "12.99",
            "productCode": "S_DX",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFMX": {
            "code": "P10IGFMX",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFMX",
            "local": false,
            "name": "Small (10\") Gluten Free Crust MeatZZa",
            "price": "12.99",
            "productCode": "S_MX",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFBP": {
            "code": "P10IGFBP",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFBP",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Buffalo Chicken",
            "price": "12.99",
            "productCode": "S_PIZBP",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFCK": {
            "code": "P10IGFCK",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFCK",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Memphis BBQ Chicken ",
            "price": "12.99",
            "productCode": "S_PIZCK",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFCR": {
            "code": "P10IGFCR",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFCR",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Cali Chicken Bacon Ranch",
            "price": "12.99",
            "productCode": "S_PIZCR",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFCZ": {
            "code": "P10IGFCZ",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFCZ",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Wisconsin 6 Cheese Pizza",
            "price": "12.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFPH": {
            "code": "P10IGFPH",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFPH",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Philly Cheese Steak",
            "price": "12.99",
            "productCode": "S_PIZPH",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFPV": {
            "code": "P10IGFPV",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFPV",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Pacific Veggie",
            "price": "12.99",
            "productCode": "S_PIZPV",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFPX": {
            "code": "P10IGFPX",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFPX",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Ultimate Pepperoni",
            "price": "12.99",
            "productCode": "S_PIZPX",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFUH": {
            "code": "P10IGFUH",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFUH",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Honolulu Hawaiian",
            "price": "12.99",
            "productCode": "S_PIZUH",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P10IGFZA": {
            "code": "P10IGFZA",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFZA",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Pizza",
            "price": "9.49",
            "productCode": "S_PIZZA",
            "sizeCode": "10",
            "tags": {
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "15.45",
                "price1-0": "9.49",
                "price1-3": "13.96",
                "price2-3": "13.96",
                "price1-4": "15.45",
                "price2-2": "12.47",
                "price1-1": "10.98",
                "price2-1": "10.98",
                "price1-2": "12.47",
                "price2-0": "9.49"
            },
            "surcharge": "3"
        },
        "P10IGFZZ": {
            "code": "P10IGFZZ",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFZZ",
            "local": false,
            "name": "Small (10\") Gluten Free Crust ExtravaganZZa ",
            "price": "12.99",
            "productCode": "S_ZZ",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P12IPADX": {
            "code": "P12IPADX",
            "flavorCode": "NPAN",
            "imageCode": "P12IPADX",
            "local": false,
            "name": "Medium (12\") Handmade Pan Deluxe",
            "price": "14.99",
            "productCode": "S_DX",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,P=1,S=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPAMX": {
            "code": "P12IPAMX",
            "flavorCode": "NPAN",
            "imageCode": "P12IPAMX",
            "local": false,
            "name": "Medium (12\") Handmade Pan MeatZZa",
            "price": "14.99",
            "productCode": "S_MX",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,Cp=1,P=1,H=1,B=1,S=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPABP": {
            "code": "P12IPABP",
            "flavorCode": "NPAN",
            "imageCode": "P12IPABP",
            "local": false,
            "name": "Medium (12\") Handmade Pan Buffalo Chicken",
            "price": "14.99",
            "productCode": "S_PIZBP",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPACK": {
            "code": "P12IPACK",
            "flavorCode": "NPAN",
            "imageCode": "P12IPACK",
            "local": false,
            "name": "Medium (12\") Handmade Pan Memphis BBQ Chicken ",
            "price": "14.99",
            "productCode": "S_PIZCK",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPACR": {
            "code": "P12IPACR",
            "flavorCode": "NPAN",
            "imageCode": "P12IPACR",
            "local": false,
            "name": "Medium (12\") Handmade Pan Cali Chicken Bacon Ranch",
            "price": "14.99",
            "productCode": "S_PIZCR",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPACZ": {
            "code": "P12IPACZ",
            "flavorCode": "NPAN",
            "imageCode": "P12IPACZ",
            "local": false,
            "name": "Medium (12\") Handmade Pan Wisconsin 6 Cheese Pizza",
            "price": "14.99",
            "productCode": "S_PIZCZ",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPAPH": {
            "code": "P12IPAPH",
            "flavorCode": "NPAN",
            "imageCode": "P12IPAPH",
            "local": false,
            "name": "Medium (12\") Handmade Pan Philly Cheese Steak",
            "price": "14.99",
            "productCode": "S_PIZPH",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPAPV": {
            "code": "P12IPAPV",
            "flavorCode": "NPAN",
            "imageCode": "P12IPAPV",
            "local": false,
            "name": "Medium (12\") Handmade Pan Pacific Veggie",
            "price": "14.99",
            "productCode": "S_PIZPV",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPAPX": {
            "code": "P12IPAPX",
            "flavorCode": "NPAN",
            "imageCode": "P12IPAPX",
            "local": false,
            "name": "Medium (12\") Handmade Pan Ultimate Pepperoni",
            "price": "14.99",
            "productCode": "S_PIZPX",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPAUH": {
            "code": "P12IPAUH",
            "flavorCode": "NPAN",
            "imageCode": "P12IPAUH",
            "local": false,
            "name": "Medium (12\") Handmade Pan Honolulu Hawaiian",
            "price": "14.99",
            "productCode": "S_PIZUH",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P12IPAZA": {
            "code": "P12IPAZA",
            "flavorCode": "NPAN",
            "imageCode": "P12IPAZA",
            "local": false,
            "name": "Medium (12\") Handmade Pan Pizza",
            "price": "11.99",
            "productCode": "S_PIZZA",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "warnAfterOptionQty": "5",
                "promotion": "PAN",
                "disabledToppings": "C",
                "sodiumWarningEnabled": true,
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Cp=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.75",
                "price1-0": "11.99",
                "price1-3": "17.06",
                "price2-3": "17.06",
                "price1-4": "18.75",
                "price2-2": "15.37",
                "price1-1": "13.68",
                "price2-1": "13.68",
                "price1-2": "15.37",
                "price2-0": "11.99"
            },
            "surcharge": "1.5"
        },
        "P12IPAZZ": {
            "code": "P12IPAZZ",
            "flavorCode": "NPAN",
            "imageCode": "P12IPAZZ",
            "local": false,
            "name": "Medium (12\") Handmade Pan ExtravaganZZa ",
            "price": "14.99",
            "productCode": "S_ZZ",
            "sizeCode": "12",
            "tags": {
                "hideOption": "Cp",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "X=1,C=1.5,Cp=1,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P10IRESPF": {
            "code": "P10IRESPF",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IRESPF",
            "local": false,
            "name": "Small (10\") Hand Tossed Spinach & Feta",
            "price": "12.99",
            "productCode": "S_PISPF",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IGFSPF": {
            "code": "P10IGFSPF",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFSPF",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Spinach & Feta",
            "price": "12.99",
            "productCode": "S_PISPF",
            "sizeCode": "10",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P12IRESPF": {
            "code": "P12IRESPF",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IRESPF",
            "local": false,
            "name": "Medium (12\") Hand Tossed Spinach & Feta",
            "price": "14.99",
            "productCode": "S_PISPF",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHSPF": {
            "code": "P12ITHSPF",
            "flavorCode": "THIN",
            "imageCode": "P12ITHSPF",
            "local": false,
            "name": "Medium (12\") Thin Spinach & Feta",
            "price": "14.99",
            "productCode": "S_PISPF",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IPASPF": {
            "code": "P12IPASPF",
            "flavorCode": "NPAN",
            "imageCode": "P12IPASPF",
            "local": false,
            "name": "Medium (12\") Handmade Pan Spinach & Feta",
            "price": "14.99",
            "productCode": "S_PISPF",
            "sizeCode": "12",
            "tags": {
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P14IBKSPF": {
            "code": "P14IBKSPF",
            "flavorCode": "BK",
            "imageCode": "P14IBKSPF",
            "local": false,
            "name": "Large (14\") Brooklyn Spinach & Feta",
            "price": "17.99",
            "productCode": "S_PISPF",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IRESPF": {
            "code": "P14IRESPF",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IRESPF",
            "local": false,
            "name": "Large (14\") Hand Tossed Spinach & Feta",
            "price": "17.99",
            "productCode": "S_PISPF",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHSPF": {
            "code": "P14ITHSPF",
            "flavorCode": "THIN",
            "imageCode": "P14ITHSPF",
            "local": false,
            "name": "Large (14\") Thin Spinach & Feta",
            "price": "17.99",
            "productCode": "S_PISPF",
            "sizeCode": "14",
            "tags": {
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P16IBKSPF": {
            "code": "P16IBKSPF",
            "flavorCode": "BK",
            "imageCode": "P16IBKSPF",
            "local": true,
            "name": "X-Large (16\") Brooklyn Spinach & Feta",
            "price": "19.99",
            "productCode": "S_PISPF",
            "sizeCode": "16",
            "tags": {
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P10IRETC": {
            "code": "P10IRETC",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IRETC",
            "local": false,
            "name": "Small (10\") Hand Tossed Chicken Taco",
            "price": "12.99",
            "productCode": "S_PZTACO",
            "sizeCode": "10",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IGFTC": {
            "code": "P10IGFTC",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFTC",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Chicken Taco",
            "price": "12.99",
            "productCode": "S_PZTACO",
            "sizeCode": "10",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P12IRETC": {
            "code": "P12IRETC",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IRETC",
            "local": false,
            "name": "Medium (12\") Hand Tossed Chicken Taco",
            "price": "14.99",
            "productCode": "S_PZTACO",
            "sizeCode": "12",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHTC": {
            "code": "P12ITHTC",
            "flavorCode": "THIN",
            "imageCode": "P12ITHTC",
            "local": false,
            "name": "Medium (12\") Thin Chicken Taco",
            "price": "14.99",
            "productCode": "S_PZTACO",
            "sizeCode": "12",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IPATC": {
            "code": "P12IPATC",
            "flavorCode": "NPAN",
            "imageCode": "P12IPATC",
            "local": false,
            "name": "Medium (12\") Handmade Pan Chicken Taco",
            "price": "14.99",
            "productCode": "S_PZTACO",
            "sizeCode": "12",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Cp",
                "promotion": "PAN",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P14IBKTC": {
            "code": "P14IBKTC",
            "flavorCode": "BK",
            "imageCode": "P14IBKTC",
            "local": false,
            "name": "Large (14\") Brooklyn Chicken Taco",
            "price": "17.99",
            "productCode": "S_PZTACO",
            "sizeCode": "14",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IRETC": {
            "code": "P14IRETC",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IRETC",
            "local": false,
            "name": "Large (14\") Hand Tossed Chicken Taco",
            "price": "17.99",
            "productCode": "S_PZTACO",
            "sizeCode": "14",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHTC": {
            "code": "P14ITHTC",
            "flavorCode": "THIN",
            "imageCode": "P14ITHTC",
            "local": false,
            "name": "Large (14\") Thin Chicken Taco",
            "price": "17.99",
            "productCode": "S_PZTACO",
            "sizeCode": "14",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P16IBKTC": {
            "code": "P16IBKTC",
            "flavorCode": "BK",
            "imageCode": "P16IBKTC",
            "local": true,
            "name": "X-Large (16\") Brooklyn Chicken Taco",
            "price": "19.99",
            "productCode": "S_PZTACO",
            "sizeCode": "16",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Cp",
                "disabledToppings": "C",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "P10IRECHB": {
            "code": "P10IRECHB",
            "flavorCode": "HANDTOSS",
            "imageCode": "P10IRECHB",
            "local": false,
            "name": "Small (10\") Hand Tossed Cheeseburger",
            "price": "12.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "10",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Km",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "0"
        },
        "P10IGFCHB": {
            "code": "P10IGFCHB",
            "flavorCode": "GLUTENF",
            "imageCode": "P10IGFCHB",
            "local": false,
            "name": "Small (10\") Gluten Free Crust Cheeseburger",
            "price": "12.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "10",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Km",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "18.95",
                "price1-0": "12.99",
                "price1-3": "17.46",
                "price2-3": "17.46",
                "price1-4": "18.95",
                "price2-2": "15.97",
                "price1-1": "14.48",
                "price2-1": "14.48",
                "price1-2": "15.97",
                "price2-0": "12.99"
            },
            "surcharge": "3"
        },
        "P12IRECHB": {
            "code": "P12IRECHB",
            "flavorCode": "HANDTOSS",
            "imageCode": "P12IRECHB",
            "local": false,
            "name": "Medium (12\") Hand Tossed Cheeseburger",
            "price": "14.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "12",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Km",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12ITHCHB": {
            "code": "P12ITHCHB",
            "flavorCode": "THIN",
            "imageCode": "P12ITHCHB",
            "local": false,
            "name": "Medium (12\") Thin Cheeseburger",
            "price": "14.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "12",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Km",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "0"
        },
        "P12IPACHB": {
            "code": "P12IPACHB",
            "flavorCode": "NPAN",
            "imageCode": "P12IPACHB",
            "local": false,
            "name": "Medium (12\") Handmade Pan Cheeseburger",
            "price": "14.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "12",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "promotion": "PAN",
                "disabledToppings": "C",
                "hideOption": "Km:Cp",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "21.75",
                "price1-0": "14.99",
                "price1-3": "20.06",
                "price2-3": "20.06",
                "price1-4": "21.75",
                "price2-2": "18.37",
                "price1-1": "16.68",
                "price2-1": "16.68",
                "price1-2": "18.37",
                "price2-0": "14.99"
            },
            "surcharge": "1.5"
        },
        "P14IBKCHB": {
            "code": "P14IBKCHB",
            "flavorCode": "BK",
            "imageCode": "P14IBKCHB",
            "local": false,
            "name": "Large (14\") Brooklyn Cheeseburger",
            "price": "17.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "14",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "disabledToppings": "C",
                "hideOption": "Km:Cp",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14IRECHB": {
            "code": "P14IRECHB",
            "flavorCode": "HANDTOSS",
            "imageCode": "P14IRECHB",
            "local": false,
            "name": "Large (14\") Hand Tossed Cheeseburger",
            "price": "17.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "14",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Km",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
            "defaultCookingInstructions": "NB,PIECT,GO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P14ITHCHB": {
            "code": "P14ITHCHB",
            "flavorCode": "THIN",
            "imageCode": "P14ITHCHB",
            "local": false,
            "name": "Large (14\") Thin Cheeseburger",
            "price": "17.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "14",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "hideOption": "Km",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
            "defaultCookingInstructions": "SQCT,RGO",
            "prepared": true,
            "pricing": {
                "price2-4": "25.55",
                "price1-0": "17.99",
                "price1-3": "23.66",
                "price2-3": "23.66",
                "price1-4": "25.55",
                "price2-2": "21.77",
                "price1-1": "19.88",
                "price2-1": "19.88",
                "price1-2": "21.77",
                "price2-0": "17.99"
            },
            "surcharge": "0"
        },
        "P16IBKCHB": {
            "code": "P16IBKCHB",
            "flavorCode": "BK",
            "imageCode": "P16IBKCHB",
            "local": true,
            "name": "X-Large (16\") Brooklyn Cheeseburger",
            "price": "19.99",
            "productCode": "S_PZBRGR",
            "sizeCode": "16",
            "tags": {
                "effectiveOn": "2020-08-24",
                "specialty": true,
                "disabledToppings": "C",
                "hideOption": "Km:Cp",
                "defaultSides": "",
                "defaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
            },
            "allowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
            "defaultCookingInstructions": "NB,PIECT",
            "prepared": true,
            "pricing": {
                "price2-4": "27.95",
                "price1-0": "19.99",
                "price1-3": "25.96",
                "price2-3": "25.96",
                "price1-4": "27.95",
                "price2-2": "23.97",
                "price1-1": "21.98",
                "price2-1": "21.98",
                "price1-2": "23.97",
                "price2-0": "19.99"
            },
            "surcharge": "0"
        },
        "PSANSACB": {
            "code": "PSANSACB",
            "flavorCode": "",
            "imageCode": "PSANSACB",
            "local": false,
            "name": "Chicken Bacon Ranch Sandwich",
            "price": "6.99",
            "productCode": "S_CHIKK",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "C=1,Du=1,K=1,Pv=1,Rd=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PSANSACP": {
            "code": "PSANSACP",
            "flavorCode": "",
            "imageCode": "PSANSACP",
            "local": false,
            "name": "Chicken Parm Sandwich",
            "price": "6.99",
            "productCode": "S_CHIKP",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "X=1,C=1,Du=1,Cs=1,Pv=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PSANSAIT": {
            "code": "PSANSAIT",
            "flavorCode": "",
            "imageCode": "PSANSAIT",
            "local": false,
            "name": "Italian Sandwich",
            "price": "6.99",
            "productCode": "S_ITAL",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "C=1,P=1,H=1,O=1,G=1,Z=1,Sa=1,Pv=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PSANSAPH": {
            "code": "PSANSAPH",
            "flavorCode": "",
            "imageCode": "PSANSAPH",
            "local": false,
            "name": "Philly Cheese Steak",
            "price": "6.99",
            "productCode": "S_PHIL",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "M=1,O=1,G=1,Pm=1,Ac=1,Pv=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PSANSABC": {
            "code": "PSANSABC",
            "flavorCode": "",
            "imageCode": "PSANSABC",
            "local": false,
            "name": "Buffalo Chicken Sandwich",
            "price": "6.99",
            "productCode": "S_BUFC",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "C=1,O=1,Du=1,E=1,Ht=1,Pv=1,Bd=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PSANSACH": {
            "code": "PSANSACH",
            "flavorCode": "",
            "imageCode": "PSANSACH",
            "local": false,
            "name": "Chicken Habanero Sandwich",
            "price": "6.99",
            "productCode": "S_CHHB",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "C=1,Du=1,N=1,J=1,E=1,Pv=1,Mh=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "PSANSAMV": {
            "code": "PSANSAMV",
            "flavorCode": "",
            "imageCode": "PSANSAMV",
            "local": false,
            "name": "Mediterranean Veggie Sandwich",
            "price": "6.99",
            "productCode": "S_MEDV",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": "O=1,Td=1,Rr=1,Si=1,Fe=1,Z=1,Ac=1,Pv=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "10.99",
                "price1-0": "6.99",
                "price1-3": "9.99",
                "price2-3": "9.99",
                "price1-4": "10.99",
                "price2-2": "8.99",
                "price1-1": "7.99",
                "price2-1": "7.99",
                "price1-2": "8.99",
                "price2-0": "6.99"
            },
            "surcharge": "0"
        },
        "SIDBAN": {
            "code": "SIDBAN",
            "flavorCode": "",
            "imageCode": "SIDBAN",
            "local": true,
            "name": "Side Banana Peppers",
            "price": "0.5",
            "productCode": "F_SIDBAN",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.5",
                "price1-0": "0.5",
                "price1-3": "0.5",
                "price2-3": "0.5",
                "price1-4": "0.5",
                "price2-2": "0.5",
                "price1-1": "0.5",
                "price2-1": "0.5",
                "price1-2": "0.5",
                "price2-0": "0.5"
            },
            "surcharge": "0"
        },
        "SIDEJAL": {
            "code": "SIDEJAL",
            "flavorCode": "",
            "imageCode": "SIDEJAL",
            "local": true,
            "name": "Side Jalapenos",
            "price": "0.5",
            "productCode": "F_SIDJAL",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.5",
                "price1-0": "0.5",
                "price1-3": "0.5",
                "price2-3": "0.5",
                "price1-4": "0.5",
                "price2-2": "0.5",
                "price1-1": "0.5",
                "price2-1": "0.5",
                "price1-2": "0.5",
                "price2-0": "0.5"
            },
            "surcharge": "0"
        },
        "PARMCHEESE": {
            "code": "PARMCHEESE",
            "flavorCode": "",
            "imageCode": "PARMCHEESE",
            "local": true,
            "name": "Parmesan Cheese Packets",
            "price": "0.25",
            "productCode": "F_SIDPAR",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.25",
                "price1-0": "0.25",
                "price1-3": "0.25",
                "price2-3": "0.25",
                "price1-4": "0.25",
                "price2-2": "0.25",
                "price1-1": "0.25",
                "price2-1": "0.25",
                "price1-2": "0.25",
                "price2-0": "0.25"
            },
            "surcharge": "0"
        },
        "REDPEPPER": {
            "code": "REDPEPPER",
            "flavorCode": "",
            "imageCode": "REDPEPPER",
            "local": true,
            "name": "Red Pepper Packets",
            "price": "0.25",
            "productCode": "F_SIDRED",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.25",
                "price1-0": "0.25",
                "price1-3": "0.25",
                "price2-3": "0.25",
                "price1-4": "0.25",
                "price2-2": "0.25",
                "price1-1": "0.25",
                "price2-1": "0.25",
                "price1-2": "0.25",
                "price2-0": "0.25"
            },
            "surcharge": "0"
        },
        "AGCAESAR": {
            "code": "AGCAESAR",
            "flavorCode": "",
            "imageCode": "AGCAESAR",
            "local": false,
            "name": "Caesar Dressing",
            "price": "0.75",
            "productCode": "F_CAESAR",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "AGITAL": {
            "code": "AGITAL",
            "flavorCode": "",
            "imageCode": "AGITAL",
            "local": true,
            "name": "Italian Dressing",
            "price": "0.75",
            "productCode": "F_ITAL",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "AGRANCH": {
            "code": "AGRANCH",
            "flavorCode": "",
            "imageCode": "AGRANCH",
            "local": false,
            "name": "Ranch Dressing",
            "price": "0.75",
            "productCode": "F_RANCHPK",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "HOTSAUCE": {
            "code": "HOTSAUCE",
            "flavorCode": "",
            "imageCode": "HOTSAUCE",
            "local": false,
            "name": "Hot Buffalo Dipping Cup",
            "price": "0.75",
            "productCode": "F_HOTCUP",
            "sizeCode": "",
            "tags": {
                "bONELESS": true,
                "bONEIN": true,
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "CEAHABC": {
            "code": "CEAHABC",
            "flavorCode": "",
            "imageCode": "CEAHABC",
            "local": false,
            "name": "Sweet Mango Habanero Dipping Cup",
            "price": "0.75",
            "productCode": "F_SMHAB",
            "sizeCode": "",
            "tags": {
                "effectiveOn": "2010-01-01",
                "bONELESS": true,
                "bONEIN": true,
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "CEABBQC": {
            "code": "CEABBQC",
            "flavorCode": "",
            "imageCode": "CEABBQC",
            "local": false,
            "name": "Honey BBQ Dipping Cup",
            "price": "0.75",
            "productCode": "F_BBQC",
            "sizeCode": "",
            "tags": {
                "bONELESS": true,
                "bONEIN": true,
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "RANCH": {
            "code": "RANCH",
            "flavorCode": "",
            "imageCode": "RANCH",
            "local": false,
            "name": "Ranch Dipping Cup",
            "price": "0.75",
            "productCode": "F_SIDRAN",
            "sizeCode": "",
            "tags": {
                "bONELESS": true,
                "bONEIN": true,
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "BLUECHS": {
            "code": "BLUECHS",
            "flavorCode": "",
            "imageCode": "BLUECHS",
            "local": false,
            "name": "Blue Cheese Dipping Cup",
            "price": "0.75",
            "productCode": "F_Bd",
            "sizeCode": "",
            "tags": {
                "bONELESS": true,
                "bONEIN": true,
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "GARBUTTER": {
            "code": "GARBUTTER",
            "flavorCode": "",
            "imageCode": "GARBUTTER",
            "local": false,
            "name": "Garlic Dipping Cup",
            "price": "0.75",
            "productCode": "F_SIDGAR",
            "sizeCode": "",
            "tags": {
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "ICING": {
            "code": "ICING",
            "flavorCode": "",
            "imageCode": "ICING",
            "local": false,
            "name": "Icing Dipping Cup",
            "price": "0.75",
            "productCode": "F_SIDICE",
            "sizeCode": "",
            "tags": {
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "MARINARA": {
            "code": "MARINARA",
            "flavorCode": "",
            "imageCode": "MARINARA",
            "local": false,
            "name": "Marinara Sauce Dipping Cup",
            "price": "0.75",
            "productCode": "F_SIDMAR",
            "sizeCode": "",
            "tags": {
                "sideType": "DippingCup",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "STJUDE": {
            "code": "STJUDE",
            "flavorCode": "",
            "imageCode": "STJUDE",
            "local": false,
            "name": "St. Jude Donation",
            "price": "1",
            "productCode": "F_STJUDE",
            "sizeCode": "",
            "tags": {
                "donation": "STJUDE",
                "excludeFromLoyalty": true,
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "1",
                "price1-0": "1",
                "price1-3": "1",
                "price2-3": "1",
                "price1-4": "1",
                "price2-2": "1",
                "price1-1": "1",
                "price2-1": "1",
                "price1-2": "1",
                "price2-0": "1"
            },
            "surcharge": "0"
        },
        "STJUDE2": {
            "code": "STJUDE2",
            "flavorCode": "",
            "imageCode": "STJUDE2",
            "local": false,
            "name": "St. Jude Donation",
            "price": "2",
            "productCode": "F_STJUDE",
            "sizeCode": "",
            "tags": {
                "donation": "STJUDE",
                "excludeFromLoyalty": true,
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "2",
                "price1-0": "2",
                "price1-3": "2",
                "price2-3": "2",
                "price1-4": "2",
                "price2-2": "2",
                "price1-1": "2",
                "price2-1": "2",
                "price1-2": "2",
                "price2-0": "2"
            },
            "surcharge": "0"
        },
        "STJUDE5": {
            "code": "STJUDE5",
            "flavorCode": "",
            "imageCode": "STJUDE5",
            "local": false,
            "name": "St. Jude Donation",
            "price": "5",
            "productCode": "F_STJUDE",
            "sizeCode": "",
            "tags": {
                "donation": "STJUDE",
                "excludeFromLoyalty": true,
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "5",
                "price1-0": "5",
                "price1-3": "5",
                "price2-3": "5",
                "price1-4": "5",
                "price2-2": "5",
                "price1-1": "5",
                "price2-1": "5",
                "price1-2": "5",
                "price2-0": "5"
            },
            "surcharge": "0"
        },
        "STJUDE10": {
            "code": "STJUDE10",
            "flavorCode": "",
            "imageCode": "STJUDE10",
            "local": false,
            "name": "St. Jude Donation",
            "price": "10",
            "productCode": "F_STJUDE",
            "sizeCode": "",
            "tags": {
                "donation": "STJUDE",
                "excludeFromLoyalty": true,
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "10",
                "price1-0": "10",
                "price1-3": "10",
                "price2-3": "10",
                "price1-4": "10",
                "price2-2": "10",
                "price1-1": "10",
                "price2-1": "10",
                "price1-2": "10",
                "price2-0": "10"
            },
            "surcharge": "0"
        },
        "STJUDERU": {
            "code": "STJUDERU",
            "flavorCode": "",
            "imageCode": "STJUDERU",
            "local": false,
            "name": "St. Jude Donation",
            "price": "0",
            "productCode": "F_STJUDE",
            "sizeCode": "",
            "tags": {
                "notEditable": true,
                "hidden": true,
                "donation": "STJUDE",
                "excludeFromLoyalty": true,
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0",
                "price1-0": "0",
                "price1-3": "0",
                "price2-3": "0",
                "price1-4": "0",
                "price2-2": "0",
                "price1-1": "0",
                "price2-1": "0",
                "price1-2": "0",
                "price2-0": "0"
            },
            "surcharge": "0"
        },
        "CEABVI": {
            "code": "CEABVI",
            "flavorCode": "",
            "imageCode": "CEABVI",
            "local": false,
            "name": "Balsamic",
            "price": "0.75",
            "productCode": "F_BALVIN",
            "sizeCode": "",
            "tags": {
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0.75",
                "price1-0": "0.75",
                "price1-3": "0.75",
                "price2-3": "0.75",
                "price1-4": "0.75",
                "price2-2": "0.75",
                "price1-1": "0.75",
                "price2-1": "0.75",
                "price1-2": "0.75",
                "price2-0": "0.75"
            },
            "surcharge": "0"
        },
        "_SCHOOLL": {
            "code": "_SCHOOLL",
            "flavorCode": "",
            "imageCode": "_SCHOOLL",
            "local": true,
            "name": "Local Donation",
            "price": "0",
            "productCode": "F__SCHOOL",
            "sizeCode": "",
            "tags": {
                "donation": "SCHOOL",
                " ExcludeFromLoyalty": true,
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": false,
            "pricing": {
                "price2-4": "0",
                "price1-0": "0",
                "price1-3": "0",
                "price2-3": "0",
                "price1-4": "0",
                "price2-2": "0",
                "price1-1": "0",
                "price2-1": "0",
                "price1-2": "0",
                "price2-0": "0"
            },
            "surcharge": "0"
        },
        "W08PBNLW": {
            "code": "W08PBNLW",
            "flavorCode": "BCHICK",
            "imageCode": "W08PBNLW",
            "local": false,
            "name": "8-piece Boneless Chicken",
            "price": "8.99",
            "productCode": "S_BONELESS",
            "sizeCode": "8PCW",
            "tags": {
                "boneless": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "BBQC=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "8.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "W08PHOTW": {
            "code": "W08PHOTW",
            "flavorCode": "HOTWINGS",
            "imageCode": "W08PHOTW",
            "local": false,
            "name": "8-piece Hot Buffalo Wings",
            "price": "8.99",
            "productCode": "S_HOTWINGS",
            "sizeCode": "8PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "8.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "W08PBBQW": {
            "code": "W08PBBQW",
            "flavorCode": "BBQW",
            "imageCode": "W08PBBQW",
            "local": false,
            "name": "8-piece Honey BBQ Wings",
            "price": "8.99",
            "productCode": "S_BBQW",
            "sizeCode": "8PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "8.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "W08PMLDW": {
            "code": "W08PMLDW",
            "flavorCode": "MILDWING",
            "imageCode": "W08PMLDW",
            "local": true,
            "name": "8-piece Mild Buffalo Wings",
            "price": "8.99",
            "productCode": "S_MILDWING",
            "sizeCode": "8PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "8.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "W08PPLNW": {
            "code": "W08PPLNW",
            "flavorCode": "PLNWINGS",
            "imageCode": "W08PPLNW",
            "local": false,
            "name": "8-piece Plain Wings",
            "price": "8.99",
            "productCode": "S_PLNWINGS",
            "sizeCode": "8PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "8.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "W08PMANW": {
            "code": "W08PMANW",
            "flavorCode": "SMANG",
            "imageCode": "W08PMANW",
            "local": false,
            "name": "8-piece Sweet Mango Habanero Wings",
            "price": "8.99",
            "productCode": "S_SMANG",
            "sizeCode": "8PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "8.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "10WINGBNLS": {
            "code": "10WINGBNLS",
            "flavorCode": "BCHICK",
            "imageCode": "10WINGBNLS",
            "local": false,
            "name": "10-piece Boneless Chicken",
            "price": "10.99",
            "productCode": "S_BONELESS",
            "sizeCode": "10PCW",
            "tags": {
                "boneless": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "BBQC=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "14.99",
                "price1-0": "10.99",
                "price1-3": "13.99",
                "price2-3": "13.99",
                "price1-4": "14.99",
                "price2-2": "12.99",
                "price1-1": "11.99",
                "price2-1": "11.99",
                "price1-2": "12.99",
                "price2-0": "10.99"
            },
            "surcharge": "0"
        },
        "W08PGPMW": {
            "code": "W08PGPMW",
            "flavorCode": "GPRMWING",
            "imageCode": "W08PGPMW",
            "local": false,
            "name": "8-piece Garlic Parmesan Wings",
            "price": "8.99",
            "productCode": "S_GPRMWING",
            "sizeCode": "8PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "8.99",
                "price1-0": "8.99",
                "price1-3": "8.99",
                "price2-3": "8.99",
                "price1-4": "8.99",
                "price2-2": "8.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "8.99",
                "price2-0": "8.99"
            },
            "surcharge": "0"
        },
        "10WINGHOT": {
            "code": "10WINGHOT",
            "flavorCode": "HOTWINGS",
            "imageCode": "10WINGHOT",
            "local": false,
            "name": "10-piece Hot Buffalo Wings",
            "price": "10.99",
            "productCode": "S_HOTWINGS",
            "sizeCode": "10PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "14.99",
                "price1-0": "10.99",
                "price1-3": "13.99",
                "price2-3": "13.99",
                "price1-4": "14.99",
                "price2-2": "12.99",
                "price1-1": "11.99",
                "price2-1": "11.99",
                "price1-2": "12.99",
                "price2-0": "10.99"
            },
            "surcharge": "0"
        },
        "10WINGBBQ": {
            "code": "10WINGBBQ",
            "flavorCode": "BBQW",
            "imageCode": "10WINGBBQ",
            "local": false,
            "name": "10-piece Honey BBQ Wings",
            "price": "10.99",
            "productCode": "S_BBQW",
            "sizeCode": "10PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "14.99",
                "price1-0": "10.99",
                "price1-3": "13.99",
                "price2-3": "13.99",
                "price1-4": "14.99",
                "price2-2": "12.99",
                "price1-1": "11.99",
                "price2-1": "11.99",
                "price1-2": "12.99",
                "price2-0": "10.99"
            },
            "surcharge": "0"
        },
        "10WINGMILD": {
            "code": "10WINGMILD",
            "flavorCode": "MILDWING",
            "imageCode": "10WINGMILD",
            "local": true,
            "name": "10-piece Mild Buffalo Wings",
            "price": "10.99",
            "productCode": "S_MILDWING",
            "sizeCode": "10PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "14.99",
                "price1-0": "10.99",
                "price1-3": "13.99",
                "price2-3": "13.99",
                "price1-4": "14.99",
                "price2-2": "12.99",
                "price1-1": "11.99",
                "price2-1": "11.99",
                "price1-2": "12.99",
                "price2-0": "10.99"
            },
            "surcharge": "0"
        },
        "10WINGPLN": {
            "code": "10WINGPLN",
            "flavorCode": "PLNWINGS",
            "imageCode": "10WINGPLN",
            "local": false,
            "name": "10-piece Plain Wings",
            "price": "10.99",
            "productCode": "S_PLNWINGS",
            "sizeCode": "10PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "14.99",
                "price1-0": "10.99",
                "price1-3": "13.99",
                "price2-3": "13.99",
                "price1-4": "14.99",
                "price2-2": "12.99",
                "price1-1": "11.99",
                "price2-1": "11.99",
                "price1-2": "12.99",
                "price2-0": "10.99"
            },
            "surcharge": "0"
        },
        "10WINGMHAB": {
            "code": "10WINGMHAB",
            "flavorCode": "SMANG",
            "imageCode": "10WINGMHAB",
            "local": false,
            "name": "10-piece Sweet Mango Habanero Wings",
            "price": "10.99",
            "productCode": "S_SMANG",
            "sizeCode": "10PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "14.99",
                "price1-0": "10.99",
                "price1-3": "13.99",
                "price2-3": "13.99",
                "price1-4": "14.99",
                "price2-2": "12.99",
                "price1-1": "11.99",
                "price2-1": "11.99",
                "price1-2": "12.99",
                "price2-0": "10.99"
            },
            "surcharge": "0"
        },
        "10WINGGPMW": {
            "code": "10WINGGPMW",
            "flavorCode": "GPRMWING",
            "imageCode": "10WINGGPMW",
            "local": false,
            "name": "10-piece Garlic Parmesan Wings",
            "price": "10.99",
            "productCode": "S_GPRMWING",
            "sizeCode": "10PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=1",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "14.99",
                "price1-0": "10.99",
                "price1-3": "13.99",
                "price2-3": "13.99",
                "price1-4": "14.99",
                "price2-2": "12.99",
                "price1-1": "11.99",
                "price2-1": "11.99",
                "price1-2": "12.99",
                "price2-0": "10.99"
            },
            "surcharge": "0"
        },
        "W16PBNLW": {
            "code": "W16PBNLW",
            "flavorCode": "BCHICK",
            "imageCode": "W16PBNLW",
            "local": false,
            "name": "16-piece Boneless Chicken",
            "price": "15.99",
            "productCode": "S_BONELESS",
            "sizeCode": "16PCW",
            "tags": {
                "boneless": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "BBQC=2",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "19.99",
                "price1-0": "15.99",
                "price1-3": "18.99",
                "price2-3": "18.99",
                "price1-4": "19.99",
                "price2-2": "17.99",
                "price1-1": "16.99",
                "price2-1": "16.99",
                "price1-2": "17.99",
                "price2-0": "15.99"
            },
            "surcharge": "0"
        },
        "W16PHOTW": {
            "code": "W16PHOTW",
            "flavorCode": "HOTWINGS",
            "imageCode": "W16PHOTW",
            "local": false,
            "name": "16-piece Hot Buffalo Wings",
            "price": "15.99",
            "productCode": "S_HOTWINGS",
            "sizeCode": "16PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=2",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "19.99",
                "price1-0": "15.99",
                "price1-3": "18.99",
                "price2-3": "18.99",
                "price1-4": "19.99",
                "price2-2": "17.99",
                "price1-1": "16.99",
                "price2-1": "16.99",
                "price1-2": "17.99",
                "price2-0": "15.99"
            },
            "surcharge": "0"
        },
        "W16PBBQW": {
            "code": "W16PBBQW",
            "flavorCode": "BBQW",
            "imageCode": "W16PBBQW",
            "local": false,
            "name": "16-piece Honey BBQ Wings",
            "price": "15.99",
            "productCode": "S_BBQW",
            "sizeCode": "16PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=2",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "19.99",
                "price1-0": "15.99",
                "price1-3": "18.99",
                "price2-3": "18.99",
                "price1-4": "19.99",
                "price2-2": "17.99",
                "price1-1": "16.99",
                "price2-1": "16.99",
                "price1-2": "17.99",
                "price2-0": "15.99"
            },
            "surcharge": "0"
        },
        "W16PMLDW": {
            "code": "W16PMLDW",
            "flavorCode": "MILDWING",
            "imageCode": "W16PMLDW",
            "local": true,
            "name": "16-piece Mild Buffalo Wings",
            "price": "15.99",
            "productCode": "S_MILDWING",
            "sizeCode": "16PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=2",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "19.99",
                "price1-0": "15.99",
                "price1-3": "18.99",
                "price2-3": "18.99",
                "price1-4": "19.99",
                "price2-2": "17.99",
                "price1-1": "16.99",
                "price2-1": "16.99",
                "price1-2": "17.99",
                "price2-0": "15.99"
            },
            "surcharge": "0"
        },
        "W16PPLNW": {
            "code": "W16PPLNW",
            "flavorCode": "PLNWINGS",
            "imageCode": "W16PPLNW",
            "local": false,
            "name": "16-piece Plain Wings",
            "price": "15.99",
            "productCode": "S_PLNWINGS",
            "sizeCode": "16PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=2",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "19.99",
                "price1-0": "15.99",
                "price1-3": "18.99",
                "price2-3": "18.99",
                "price1-4": "19.99",
                "price2-2": "17.99",
                "price1-1": "16.99",
                "price2-1": "16.99",
                "price1-2": "17.99",
                "price2-0": "15.99"
            },
            "surcharge": "0"
        },
        "W16PMANW": {
            "code": "W16PMANW",
            "flavorCode": "SMANG",
            "imageCode": "W16PMANW",
            "local": false,
            "name": "16-piece Sweet Mango Habanero Wings",
            "price": "15.99",
            "productCode": "S_SMANG",
            "sizeCode": "16PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=2",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "19.99",
                "price1-0": "15.99",
                "price1-3": "18.99",
                "price2-3": "18.99",
                "price1-4": "19.99",
                "price2-2": "17.99",
                "price1-1": "16.99",
                "price2-1": "16.99",
                "price1-2": "17.99",
                "price2-0": "15.99"
            },
            "surcharge": "0"
        },
        "W16PGPMW": {
            "code": "W16PGPMW",
            "flavorCode": "GPRMWING",
            "imageCode": "W16PGPMW",
            "local": false,
            "name": "16-piece Garlic Parmesan Wings",
            "price": "15.99",
            "productCode": "S_GPRMWING",
            "sizeCode": "16PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=2",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "19.99",
                "price1-0": "15.99",
                "price1-3": "18.99",
                "price2-3": "18.99",
                "price1-4": "19.99",
                "price2-2": "17.99",
                "price1-1": "16.99",
                "price2-1": "16.99",
                "price1-2": "17.99",
                "price2-0": "15.99"
            },
            "surcharge": "0"
        },
        "W32PBNLW": {
            "code": "W32PBNLW",
            "flavorCode": "BCHICK",
            "imageCode": "W32PBNLW",
            "local": false,
            "name": "32-piece Boneless Chicken",
            "price": "27.99",
            "productCode": "S_BONELESS",
            "sizeCode": "32PCW",
            "tags": {
                "boneless": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "BBQC=4",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "31.99",
                "price1-0": "27.99",
                "price1-3": "30.99",
                "price2-3": "30.99",
                "price1-4": "31.99",
                "price2-2": "29.99",
                "price1-1": "28.99",
                "price2-1": "28.99",
                "price1-2": "29.99",
                "price2-0": "27.99"
            },
            "surcharge": "0"
        },
        "W32PHOTW": {
            "code": "W32PHOTW",
            "flavorCode": "HOTWINGS",
            "imageCode": "W32PHOTW",
            "local": false,
            "name": "32-piece Hot Buffalo Wings",
            "price": "27.99",
            "productCode": "S_HOTWINGS",
            "sizeCode": "32PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=4",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "31.99",
                "price1-0": "27.99",
                "price1-3": "30.99",
                "price2-3": "30.99",
                "price1-4": "31.99",
                "price2-2": "29.99",
                "price1-1": "28.99",
                "price2-1": "28.99",
                "price1-2": "29.99",
                "price2-0": "27.99"
            },
            "surcharge": "0"
        },
        "W32PBBQW": {
            "code": "W32PBBQW",
            "flavorCode": "BBQW",
            "imageCode": "W32PBBQW",
            "local": false,
            "name": "32-piece Honey BBQ Wings",
            "price": "27.99",
            "productCode": "S_BBQW",
            "sizeCode": "32PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=4",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "31.99",
                "price1-0": "27.99",
                "price1-3": "30.99",
                "price2-3": "30.99",
                "price1-4": "31.99",
                "price2-2": "29.99",
                "price1-1": "28.99",
                "price2-1": "28.99",
                "price1-2": "29.99",
                "price2-0": "27.99"
            },
            "surcharge": "0"
        },
        "W32PMLDW": {
            "code": "W32PMLDW",
            "flavorCode": "MILDWING",
            "imageCode": "W32PMLDW",
            "local": true,
            "name": "32-piece Mild Buffalo Wings",
            "price": "27.99",
            "productCode": "S_MILDWING",
            "sizeCode": "32PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=4",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "31.99",
                "price1-0": "27.99",
                "price1-3": "30.99",
                "price2-3": "30.99",
                "price1-4": "31.99",
                "price2-2": "29.99",
                "price1-1": "28.99",
                "price2-1": "28.99",
                "price1-2": "29.99",
                "price2-0": "27.99"
            },
            "surcharge": "0"
        },
        "W32PPLNW": {
            "code": "W32PPLNW",
            "flavorCode": "PLNWINGS",
            "imageCode": "W32PPLNW",
            "local": false,
            "name": "32-piece Plain Wings",
            "price": "27.99",
            "productCode": "S_PLNWINGS",
            "sizeCode": "32PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=4",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "31.99",
                "price1-0": "27.99",
                "price1-3": "30.99",
                "price2-3": "30.99",
                "price1-4": "31.99",
                "price2-2": "29.99",
                "price1-1": "28.99",
                "price2-1": "28.99",
                "price1-2": "29.99",
                "price2-0": "27.99"
            },
            "surcharge": "0"
        },
        "W32PMANW": {
            "code": "W32PMANW",
            "flavorCode": "SMANG",
            "imageCode": "W32PMANW",
            "local": false,
            "name": "32-piece Sweet Mango Habanero Wings",
            "price": "27.99",
            "productCode": "S_SMANG",
            "sizeCode": "32PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=4",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "31.99",
                "price1-0": "27.99",
                "price1-3": "30.99",
                "price2-3": "30.99",
                "price1-4": "31.99",
                "price2-2": "29.99",
                "price1-1": "28.99",
                "price2-1": "28.99",
                "price1-2": "29.99",
                "price2-0": "27.99"
            },
            "surcharge": "0"
        },
        "W32PGPMW": {
            "code": "W32PGPMW",
            "flavorCode": "GPRMWING",
            "imageCode": "W32PGPMW",
            "local": false,
            "name": "32-piece Garlic Parmesan Wings",
            "price": "27.99",
            "productCode": "S_GPRMWING",
            "sizeCode": "32PCW",
            "tags": {
                "bundleBuilderProducts": true,
                "wings": true,
                "effectiveOn": "2011-02-21",
                "defaultSides": "Bd=4",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "31.99",
                "price1-0": "27.99",
                "price1-3": "30.99",
                "price2-3": "30.99",
                "price1-4": "31.99",
                "price2-2": "29.99",
                "price1-1": "28.99",
                "price2-1": "28.99",
                "price1-2": "29.99",
                "price2-0": "27.99"
            },
            "surcharge": "0"
        },
        "CKRGCBT": {
            "code": "CKRGCBT",
            "flavorCode": "BACTOM",
            "imageCode": "CKRGCBT",
            "local": false,
            "name": "Specialty Chicken – Crispy Bacon & Tomato",
            "price": "7.99",
            "productCode": "S_SCCBT",
            "sizeCode": "12PCB",
            "tags": {
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart",
                "defaultSides": "",
                "defaultToppings": "K=1,Td=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "CKRGHTB": {
            "code": "CKRGHTB",
            "flavorCode": "HOTBUFF",
            "imageCode": "CKRGHTB",
            "local": false,
            "name": "Specialty Chicken – Classic Hot Buffalo",
            "price": "7.99",
            "productCode": "S_SCCHB",
            "sizeCode": "12PCB",
            "tags": {
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart",
                "defaultSides": "",
                "defaultToppings": ""
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "CKRGSJP": {
            "code": "CKRGSJP",
            "flavorCode": "SPCYJP",
            "imageCode": "CKRGSJP",
            "local": false,
            "name": "Specialty Chicken – Spicy Jalapeno - Pineapple",
            "price": "7.99",
            "productCode": "S_SCSJP",
            "sizeCode": "12PCB",
            "tags": {
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart",
                "defaultSides": "",
                "defaultToppings": "J=1,N=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        },
        "CKRGSBQ": {
            "code": "CKRGSBQ",
            "flavorCode": "BBQBAC",
            "imageCode": "CKRGSBQ",
            "local": false,
            "name": "Specialty Chicken – Sweet BBQ Bacon",
            "price": "7.99",
            "productCode": "S_SCSBBQ",
            "sizeCode": "12PCB",
            "tags": {
                "specialtyChicken": true,
                "promotion": "SpChkProductNotInCart",
                "promotionType": "ProductNotInCart",
                "defaultSides": "",
                "defaultToppings": "K=1"
            },
            "allowedCookingInstructions": "",
            "defaultCookingInstructions": "",
            "prepared": true,
            "pricing": {
                "price2-4": "11.99",
                "price1-0": "7.99",
                "price1-3": "10.99",
                "price2-3": "10.99",
                "price1-4": "11.99",
                "price2-2": "9.99",
                "price1-1": "8.99",
                "price2-1": "8.99",
                "price1-2": "9.99",
                "price2-0": "7.99"
            },
            "surcharge": "0"
        }
    },
    "preconfiguredProducts": {
        "14SCREEN": {
            "code": "14SCREEN",
            "description": "Cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
            "name": "Hand Tossed Large Cheese",
            "size": "Large (14\")",
            "options": "",
            "referencedProductCode": "14SCREEN",
            "tags": {
                "banner": "vegetarian"
            }
        },
        "B32PBIT": {
            "code": "B32PBIT",
            "description": "Oven baked, bite-size breadsticks sprinkled with Parmesan Asiago cheese & seasoned with garlic and more Parmesan. Perfectly delicious for sharing!",
            "name": "Parm Bread Bites",
            "size": "32-Piece",
            "options": "",
            "referencedProductCode": "B32PBIT",
            "tags": {}
        },
        "B8PCSCB": {
            "code": "B8PCSCB",
            "description": "Oven baked breadsticks stuffed with cheese and covered in cheese made with 100% Mozzarella and Cheddar. Seasoned with garlic, parsley and Romano cheese.",
            "name": "Cheese Stuffed Cheesy Bread",
            "size": "8-Piece",
            "options": "",
            "referencedProductCode": "B8PCSCB",
            "tags": {}
        },
        "P_14SCREEN": {
            "code": "P_14SCREEN",
            "description": "Pepperoni and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
            "name": "Hand Tossed Pepperoni",
            "size": "Large (14\")",
            "options": "P=1",
            "referencedProductCode": "14SCREEN",
            "tags": {}
        },
        "S_14SCREEN": {
            "code": "S_14SCREEN",
            "description": "Sausage and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
            "name": "Hand Tossed Sausage",
            "size": "Large (14\")",
            "options": "S=1",
            "referencedProductCode": "14SCREEN",
            "tags": {}
        },
        "PS_14SCREEN": {
            "code": "PS_14SCREEN",
            "description": "Pepperoni, sausage and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
            "name": "Hand Tossed Pepperoni & Sausage",
            "size": "Large (14\")",
            "options": "P=1,S=1",
            "referencedProductCode": "14SCREEN",
            "tags": {}
        },
        "HN_14SCREEN": {
            "code": "HN_14SCREEN",
            "description": "Sliced ham, pineapple and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
            "name": "Hand Tossed Ham & Pineapple",
            "size": "Large (14\")",
            "options": "H=1,N=1",
            "referencedProductCode": "14SCREEN",
            "tags": {}
        },
        "PM_14SCREEN": {
            "code": "PM_14SCREEN",
            "description": "Pepperoni, fresh mushrooms, and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
            "name": "Hand Tossed Pepperoni & Mushroom",
            "size": "Large (14\")",
            "options": "P=1,M=1",
            "referencedProductCode": "14SCREEN",
            "tags": {}
        },
        "P12IPAZA": {
            "code": "P12IPAZA",
            "description": "Two layers of cheese and a crust that bakes up golden and crispy with a buttery taste.",
            "name": "Medium Cheese Pan",
            "size": "Medium (12\")",
            "options": "",
            "referencedProductCode": "P12IPAZA",
            "tags": {
                "banner": "vegetarian"
            }
        },
        "P_P12IPAZA": {
            "code": "P_P12IPAZA",
            "description": "Two layers of cheese, Pepperoni to the edge, and a crust that bakes up golden and crispy with a buttery taste.",
            "name": "Medium Pepperoni Pan",
            "size": "Medium (12\")",
            "options": "P=1",
            "referencedProductCode": "P12IPAZA",
            "tags": {}
        },
        "P_P10IGFZA": {
            "code": "P_P10IGFZA",
            "description": "Domino's pepperoni pizza made on a Gluten Free Crust.",
            "name": "Small Gluten Free Crust Pepperoni",
            "size": "Small (10\")",
            "options": "P=1",
            "referencedProductCode": "P10IGFZA",
            "tags": {
                "banner": "glutenFree"
            }
        },
        "MARBRWNE": {
            "code": "MARBRWNE",
            "description": "Satisfy your sweet tooth! Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie.  Oven-baked to perfection and cut into 9 pieces - this dessert is perfect to share with the whole group",
            "name": "Domino's Marbled Cookie Brownie™ ",
            "size": "9-Piece",
            "options": "",
            "referencedProductCode": "MARBRWNE",
            "tags": {}
        },
        "14SCEXTRAV": {
            "code": "14SCEXTRAV",
            "description": "Loads of pepperoni, ham, Italian sausage, beef, onions, green peppers, mushrooms and black olives topped with extra cheese made with 100% real mozzarella.",
            "name": "Hand Tossed ExtravaganZZa",
            "size": "Large (14\")",
            "options": "",
            "referencedProductCode": "14SCEXTRAV",
            "tags": {}
        },
        "P14ITHPV": {
            "code": "P14ITHPV",
            "description": "Roasted red peppers, baby spinach, onions, mushrooms, tomatoes, black olives, cheeses made with 100% real mozzarella, feta and provolone on a crispy thin crust.",
            "name": "Thin Crust Pacific Veggie Pizza",
            "size": "Large (14\")",
            "options": "",
            "referencedProductCode": "P14ITHPV",
            "tags": {
                "banner": "vegetarian"
            }
        },
        "2LCOKE": {
            "code": "2LCOKE",
            "description": "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments",
            "name": "Coke",
            "size": "2-Liter Bottle",
            "options": "",
            "referencedProductCode": "2LCOKE",
            "tags": {}
        },
        "2LDCOKE": {
            "code": "2LDCOKE",
            "description": "Beautifully balanced adult cola taste in a no calorie beverage",
            "name": "Diet Coke",
            "size": "2-Liter Bottle",
            "options": "",
            "referencedProductCode": "2LDCOKE",
            "tags": {}
        },
        "2LSPRITE": {
            "code": "2LSPRITE",
            "description": "Unique Lymon (lemon-lime) flavor, clear, clean and crisp with no caffeine.",
            "name": "Sprite",
            "size": "2-Liter Bottle",
            "options": "",
            "referencedProductCode": "2LSPRITE",
            "tags": {}
        },
        "XC_14SCREEN": {
            "code": "XC_14SCREEN",
            "description": "",
            "name": "Large (14\") Hand Tossed Pizza",
            "size": "Large (14\")",
            "options": "X=1,C=1",
            "referencedProductCode": "14SCREEN",
            "tags": {}
        },
        "PXC_14SCREEN": {
            "code": "PXC_14SCREEN",
            "description": "",
            "name": "Large (14\") Hand Tossed Pizza Whole: Pepperoni",
            "size": "Large (14\")",
            "options": "P=1,X=1,C=1",
            "referencedProductCode": "14SCREEN",
            "tags": {}
        },
        "HNXC_12SCREEN": {
            "code": "HNXC_12SCREEN",
            "description": "",
            "name": "Medium (12\") Hand Tossed Pizza Whole: Ham, Pineapple",
            "size": "Medium (12\")",
            "options": "H=1,N=1,X=1,C=1",
            "referencedProductCode": "12SCREEN",
            "tags": {}
        },
        "MPXC_12SCREEN": {
            "code": "MPXC_12SCREEN",
            "description": "",
            "name": "Medium (12\") Hand Tossed Pizza Whole : Mushrooms, Pepperoni",
            "size": "Medium (12\")",
            "options": "M=1,P=1,X=1,C=1",
            "referencedProductCode": "12SCREEN",
            "tags": {}
        },
        "XCFeCsCpRMORrSiTd_P12IREPV": {
            "code": "XCFeCsCpRMORrSiTd_P12IREPV",
            "description": "",
            "name": "Medium (12\") Hand Tossed Pacific Veggie Pizza",
            "size": "Medium (12\")",
            "options": "X=1,C=1,Fe=1,Cs=1,Cp=1,R=1,M=1,O=1,Rr=1,Si=1,Td=1",
            "referencedProductCode": "P12IREPV",
            "tags": {}
        },
        "RdCKDuPv_PSANSACB": {
            "code": "RdCKDuPv_PSANSACB",
            "description": "",
            "name": "Chicken Bacon Ranch Sandwich",
            "size": "Sandwich",
            "options": "Rd=1,C=1,K=1,Du=1,Pv=1",
            "referencedProductCode": "PSANSACB",
            "tags": {}
        },
        "XfDu_PINPASCA": {
            "code": "XfDu_PINPASCA",
            "description": "",
            "name": "Chicken Alfredo Pasta",
            "size": "Individual",
            "options": "Xf=1,Du=1",
            "referencedProductCode": "PINPASCA",
            "tags": {}
        },
        "SIDRAN_W08PBBQW": {
            "code": "SIDRAN_W08PBBQW",
            "description": "",
            "name": "8-Piece BBQ Wings (1) Ranch",
            "size": "8-Piece",
            "options": "SIDRAN=1",
            "referencedProductCode": "W08PBBQW",
            "tags": {}
        },
        "B2PCLAVA": {
            "code": "B2PCLAVA",
            "description": "",
            "name": "2-Piece Chocolate Lava Crunch Cakes",
            "size": "2-Piece",
            "options": "",
            "referencedProductCode": "B2PCLAVA",
            "tags": {}
        }
    },
    "shortProductDescriptions": {
        "B8PCPT": {
            "code": "B8PCPT",
            "description": "Drizzled with garlic and Parmesan cheese seasoning and sprinkled with more Parmesan cheese. Served with marinara sauce."
        },
        "B8PCGT": {
            "code": "B8PCGT",
            "description": "Drizzled with buttery garlic and Parmesan cheese seasoning. Served with marinara sauce."
        },
        "B8PCCT": {
            "code": "B8PCCT",
            "description": "Drizzled with delicious cinnamon and sugar to satisfy any sweet tooth. Served with sweet icing."
        },
        "B16PBIT": {
            "code": "B16PBIT",
            "description": "Handmade, oven-baked bread bites seasoned with garlic and Parmesan."
        },
        "B2PCLAVA": {
            "code": "B2PCLAVA",
            "description": "Indulge in two delectable oven-baked chocolate cakes with molten chocolate fudge on the inside. Perfectly topped with a dash of powdered sugar."
        },
        "MARBRWNE": {
            "code": "MARBRWNE",
            "description": "Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie. Oven baked with 9 pieces to make it perfectly shareable."
        },
        "2LCOKE": {
            "code": "2LCOKE",
            "description": "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments."
        },
        "2LDCOKE": {
            "code": "2LDCOKE",
            "description": "Beautifully balanced adult cola taste in a no calorie beverage."
        },
        "CKRGSBQ": {
            "code": "CKRGSBQ",
            "description": "Tender bites of 100% whole breast white meat chicken, topped with sweet and smoky BBQ sauce, mozzarella and cheddar cheese, and crispy bacon."
        },
        "CKRGHTB": {
            "code": "CKRGHTB",
            "description": "Tender bites of 100% whole breast white meat chicken, topped with classic hot buffalo sauce, ranch, mozzarella and cheddar cheese, and feta."
        },
        "PSANSAPH": {
            "code": "PSANSAPH",
            "description": "Experience delicious slices of steak topped with American and provolone cheese, fresh onions, green peppers and mushrooms. Oven-baked to perfection."
        },
        "PSANSACB": {
            "code": "PSANSACB",
            "description": "Enjoy our flavorful grilled chicken breast topped with smoked bacon, ranch and provolone cheese on artisan bread baked to golden brown perfection."
        },
        "PINPASCA": {
            "code": "PINPASCA",
            "description": "Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection."
        },
        "PINPASCC": {
            "code": "PINPASCC",
            "description": "Taste the delectable blend of grilled chicken, smoked bacon, onions and mushrooms mixed with penne pasta. Topped with rich Alfredo sauce."
        },
        "PPSGARSA": {
            "code": "PPSGARSA",
            "description": "A crisp combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and croutons on a blend of romaine and iceberg lettuce."
        },
        "PPSCSRSA": {
            "code": "PPSCSRSA",
            "description": "The makings of a classic: roasted white meat chicken, Parmesan cheese and croutons, all atop a blend of romaine and iceberg lettuce."
        },
        "PPSCAPSA": {
            "code": "PPSCAPSA",
            "description": "Roasted white meat chicken, diced red and green apples, dried cranberries, praline pecans and cheddar cheese paired with a leafy spring mix."
        }
    },
    "unsupported": {
        "products": {
            "CEARVI": {
                "pulseCode": "CEARVI",
                "description": "Each Raspberry Vinaigrette"
            },
            "DN2": {
                "pulseCode": "DN2",
                "description": "Each DN2"
            },
            "PSANSAEC": {
                "pulseCode": "PSANSAEC",
                "description": "Sandwich Bread Xtra Meat Ckn Par"
            },
            "DN4": {
                "pulseCode": "DN4",
                "description": "Each DN4"
            },
            "PSANSAEI": {
                "pulseCode": "PSANSAEI",
                "description": "Sandwich Bread Xtra Meat Italian"
            },
            "PINBBLBA": {
                "pulseCode": "PINBBLBA",
                "description": "Build your Own BreadBowl Pasta"
            },
            "PINPASBA": {
                "pulseCode": "PINPASBA",
                "description": "Build Your Own Pasta"
            },
            "PSANSAEP": {
                "pulseCode": "PSANSAEP",
                "description": "Sandwich Bread Xtra Meat Philly Sandwich"
            },
            "DN3": {
                "pulseCode": "DN3",
                "description": "Each DN3"
            },
            "PINBBLBM": {
                "pulseCode": "PINBBLBM",
                "description": "Build your Own BreadBowl Pasta"
            },
            "PINPASBM": {
                "pulseCode": "PINPASBM",
                "description": "Build Your Own Pasta"
            },
            "PSANSAEB": {
                "pulseCode": "PSANSAEB",
                "description": "Sandwich Bread Xtra Meat Chk Bc"
            }
        },
        "options": {
            "Bd": {
                "pulseCode": "Bd",
                "description": "Blue Cheese Dip Cup"
            },
            "Rv": {
                "pulseCode": "Rv",
                "description": "Rasberry Vinaigrette"
            },
            "Fe": {
                "pulseCode": "Fe",
                "description": "Feta Cheese"
            }
        }
    },
    "cooking": {
        "instructions": {
            "WD": {
                "code": "WD",
                "name": "Well Done",
                "description": "",
                "group": "BAKE"
            },
            "NB": {
                "code": "NB",
                "name": "Normal Bake",
                "description": "",
                "group": "BAKE"
            },
            "GO": {
                "code": "GO",
                "name": "Garlic-Seasoned Crust",
                "description": "",
                "group": "SEASONING"
            },
            "NGO": {
                "code": "NGO",
                "name": "No Garlic-Seasoned Crust",
                "description": "",
                "group": "SEASONING"
            },
            "RGO": {
                "code": "RGO",
                "name": "Oregano",
                "description": "",
                "group": "SEASONING"
            },
            "PIECT": {
                "code": "PIECT",
                "name": "Pie Cut",
                "description": "",
                "group": "CUT"
            },
            "SQCT": {
                "code": "SQCT",
                "name": "Square Cut",
                "description": "",
                "group": "CUT"
            },
            "UNCT": {
                "code": "UNCT",
                "name": "Uncut",
                "description": "",
                "group": "CUT"
            },
            "NOOR": {
                "code": "NOOR",
                "name": "No Oregano",
                "description": "",
                "group": "SEASONING"
            }
        },
        "instructionGroups": {
            "BAKE": {
                "code": "BAKE",
                "name": "Bake",
                "tags": {}
            },
            "SEASONING": {
                "code": "SEASONING",
                "name": "Seasoning",
                "tags": {}
            },
            "CUT": {
                "code": "CUT",
                "name": "Cut",
                "tags": {
                    "maxOptions": "1"
                }
            }
        }
    }
}

```