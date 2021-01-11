# Dominos Store Menu

The `store.menu` object is ***HUGE*** and contains information on everything you could imagine for a Store's Menu. 

`store.menu` fields

|member|type|description|
|------|----|-----------|
|.Misc|Object|Contains general information about the menu request to Dominos.|
||||
||||
||||
||||
||||
||||
||||
||||
||||

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
            {
              "Categories": [],
              "Code": "Artisan",
              "Description": "",
              "Products": [],
              "Name": "",
              "Tags": {}
            },
            {
              "Categories": [],
              "Code": "Specialty",
              "Description": "",
              "Products": [
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
              "Name": "Specialty Pizzas",
              "Tags": {}
            }
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
          "Categories": [
            {
              "Categories": [],
              "Code": "Slice",
              "Description": "",
              "Products": [],
              "Name": "Domino's Sandwich Slice™",
              "Tags": {}
            },
            {
              "Categories": [],
              "Code": "Sandwich",
              "Description": "",
              "Products": [
                "S_BUFC",
                "S_CHHB",
                "S_MEDV",
                "S_PHIL",
                "S_CHIKK",
                "S_ITAL",
                "S_CHIKP"
              ],
              "Name": "Sandwiches",
              "Tags": {
                "OptionQtys": "0:0.5:1:1.5",
                "MaxOptionQty": "9",
                "MaxSauceQty": "2",
                "IsDisplayedOnMakeline": true
              }
            },
            {
              "Categories": [],
              "Code": "Hoagie",
              "Description": "",
              "Products": [],
              "Name": "Hoagies",
              "Tags": {}
            }
          ],
          "Code": "Sandwich",
          "Description": "",
          "Products": [],
          "Name": "Sandwiches",
          "Tags": {
            "OptionQtys": "0:0.5:1:1.5",
            "MaxOptionQty": "9",
            "MaxSauceQty": "2",
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
            "S_CARB",
            "S_PRIM",
            "S_BUILD"
          ],
          "Name": "Pasta",
          "Tags": {
            "OptionQtys": "0:1",
            "MaxOptionQty": "3",
            "IsDisplayedOnMakeline": true
          }
        },
        {
          "Categories": [],
          "Code": "Wings",
          "Description": "",
          "Products": [
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
          "Name": "Chicken",
          "Tags": {
            "OptionQtys": "0:0.5:1:1.5:2:3:4:5",
            "MaxOptionQty": "99",
            "IsDisplayedOnMakeline": true
          }
        },
        {
          "Categories": [],
          "Code": "Bread",
          "Description": "",
          "Products": [
            "F_PARMT",
            "F_GARLICT",
            "F_SCBRD",
            "F_SSBRD",
            "F_SBBRD",
            "F_PBITES"
          ],
          "Name": "Breads",
          "Tags": {
            "AdditionalProducts": "B8PCCT",
            "OptionQtys": "0:0.5:1",
            "MaxOptionQty": "99",
            "IsDisplayedOnMakeline": true
          }
        },
        {
          "Categories": [],
          "Code": "GSalad",
          "Description": "",
          "Products": [
            "F_GARDEN",
            "F_CCAESAR"
          ],
          "Name": "Salads",
          "Tags": {
            "MaxOptionQty": "99"
          }
        },
        {
          "Categories": [],
          "Code": "Chips",
          "Description": "",
          "Products": [],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "Drinks",
          "Description": "",
          "Products": [
            "F_COKE",
            "F_DIET",
            "F_SPRITE",
            "F_WATER",
            "F_ORAN",
            "F_LEMND"
          ],
          "Name": "Drinks",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "Dessert",
          "Description": "",
          "Products": [
            "F_CINNAT",
            "F_MRBRWNE",
            "F_LAVA"
          ],
          "Name": "Desserts",
          "Tags": {
            "MaxOptionQty": "99",
            "IsDisplayedOnMakeline": true
          }
        },
        {
          "Categories": [],
          "Code": "Sides",
          "Description": "",
          "Products": [
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
          "Name": "Extras",
          "Tags": {}
        }
      ],
      "Code": "Food",
      "Description": "Food Items",
      "Products": [],
      "Name": "Food",
      "Tags": {}
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
            "2013",
            "8575",
            "8118",
            "9175",
            "9174",
            "9193"
          ],
          "Name": "Feeds 1-2",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "Feeds3To5",
          "Description": "",
          "Products": [
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
          "Name": "Feeds 3-5",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "Feeds6Plus",
          "Description": "",
          "Products": [
            "2013",
            "9193"
          ],
          "Name": "Feeds 6+",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "LunchOffers",
          "Description": "",
          "Products": [],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "All",
          "Description": "",
          "Products": [
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
          "Name": "See All",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "AllStoreCoupons",
          "Description": "",
          "Products": [
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
          "Name": "All Available Coupons",
          "Tags": {}
        }
      ],
      "Code": "Coupons",
      "Description": "Coupon Items",
      "Products": [],
      "Name": "Coupons",
      "Tags": {}
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
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponDessert",
          "Description": "",
          "Products": [
            "0512",
            "9193"
          ],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponDrinks",
          "Description": "",
          "Products": [
            "4337",
            "5918",
            "8118",
            "9003"
          ],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponBread",
          "Description": "",
          "Products": [
            "4337",
            "5918",
            "8118",
            "9193"
          ],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponWings",
          "Description": "",
          "Products": [
            "3715",
            "5940",
            "9171",
            "9174",
            "9193"
          ],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponSandwich",
          "Description": "",
          "Products": [
            "9193"
          ],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponPasta",
          "Description": "",
          "Products": [
            "9193"
          ],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponGSalad",
          "Description": "",
          "Products": [
            "8575",
            "9193"
          ],
          "Name": "",
          "Tags": {}
        },
        {
          "Categories": [],
          "Code": "CouponSides",
          "Description": "",
          "Products": [],
          "Name": "",
          "Tags": {}
        }
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
              "Name": "Pizza",
              "Tags": {}
            },
            {
              "Categories": [],
              "Code": "GroupOrderingChicken",
              "Description": "Chicken",
              "Products": [],
              "Name": "Chicken",
              "Tags": {}
            },
            {
              "Categories": [],
              "Code": "GroupOrderingBread",
              "Description": "Breads",
              "Products": [
                "B32PBIT",
                "B8PCSCB"
              ],
              "Name": "Breads",
              "Tags": {}
            },
            {
              "Categories": [],
              "Code": "GroupOrderingDessert",
              "Description": "Desserts",
              "Products": [
                "MARBRWNE"
              ],
              "Name": "Desserts",
              "Tags": {}
            },
            {
              "Categories": [],
              "Code": "GroupOrderingDrink",
              "Description": "Drinks",
              "Products": [
                "2LCOKE",
                "2LDCOKE",
                "2LSPRITE"
              ],
              "Name": "Drinks",
              "Tags": {}
            }
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
                "HNXC_12SCREEN",
                "MPXC_12SCREEN",
                "XCFeCsCpRMORrSiTd_P12IREPV"
              ],
              "Name": "Pizza",
              "Tags": {}
            },
            {
              "Categories": [],
              "Code": "PopularItemsSandwichesSidesDesserts",
              "Description": "Sandwiches Sides Desserts",
              "Products": [
                "RdCKDuPv_PSANSACB",
                "XfDu_PINPASCA",
                "SIDRAN_W08PBBQW",
                "B2PCLAVA"
              ],
              "Name": "Sandwiches Sides Desserts",
              "Tags": {}
            }
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
    "3715": {
      "Code": "3715",
      "ImageCode": "M2TPAN_8C",
      "Description": "",
      "Name": "Medium 2-Topping Handmade Pan Pizza and 8-Piece Chicken",
      "Price": "19.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "EffectiveOn": "2012-09-13"
      },
      "Local": true,
      "Bundle": true
    },
    "4337": {
      "Code": "4337",
      "ImageCode": "2M3T,SCB,2L",
      "Description": "",
      "Name": "2 Medium 3 Topping Pizzas, Stuffed Cheesy Bread & a 2 Liter",
      "Price": "24.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ]
      },
      "Local": true,
      "Bundle": true
    },
    "4342": {
      "Code": "4342",
      "ImageCode": "LSO_L3T,M1T",
      "Description": "",
      "Name": "2 or more Medium 3-Topping Pizzas. Each Priced At:",
      "Price": "8.49",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "LSO_L3T": true,
        "M1T": true
      },
      "Local": true,
      "Bundle": false
    },
    "5162": {
      "Code": "5162",
      "ImageCode": "D4P",
      "Description": "",
      "Name": "Any Large 5-Topping Pizza or Medium 5-Topping Pan Pizza or 5-Topping Gluten Free Pizza - Carry Out Only",
      "Price": "10.99",
      "Tags": {
        "ServiceMethods": "Carryout",
        "ValidServiceMethods": "Carryout"
      },
      "Local": true,
      "Bundle": true
    },
    "5385": {
      "Code": "5385",
      "ImageCode": "2L2T",
      "Description": "",
      "Name": "2 or More Large 2 Topping Pizzas. Each Priced At:",
      "Price": "11.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "EffectiveOn": "2012-02-22",
        "MultiSame": true
      },
      "Local": true,
      "Bundle": false
    },
    "5918": {
      "Code": "5918",
      "ImageCode": "1LSpec,PBB,2LTR",
      "Description": "",
      "Name": "Large Specialty Pizza, 16 pc Parmesan bread bites and a 2 liter",
      "Price": "21.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ]
      },
      "Local": true,
      "Bundle": true
    },
    "5940": {
      "Code": "5940",
      "ImageCode": "5940_Lg_Specialty_pizza_10pc_Chicken_",
      "Description": "",
      "Name": "LG Specialty Pizza and 10pc Chicken",
      "Price": "24.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "EffectiveOn": "2020-08-24"
      },
      "Local": true,
      "Bundle": true
    },
    "8118": {
      "Code": "8118",
      "ImageCode": "16PBB,2L",
      "Description": "",
      "Name": "16 Piece Parmesan Bread Bites and a 2-Liter",
      "Price": "6.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "Combine": "Complementary"
      },
      "Local": true,
      "Bundle": true
    },
    "8575": {
      "Code": "8575",
      "ImageCode": "GardenSalad",
      "Description": "",
      "Name": "Choose any Salad",
      "Price": "6.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "EffectiveOn": "2012-06-25",
        "Combine": "Complementary"
      },
      "Local": true,
      "Bundle": true
    },
    "9003": {
      "Code": "9003",
      "ImageCode": "2L1T,LTR",
      "Description": "",
      "Name": "2 Large 1 Topping Pizzas and a 2-Liter of Coca-Cola®",
      "Price": "22.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ]
      },
      "Local": true,
      "Bundle": true
    },
    "9171": {
      "Code": "9171",
      "ImageCode": "1L1T,C",
      "Description": "",
      "Name": "Large 1-Topping Pizza & a 8-piece order of Chicken",
      "Price": "19.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "EffectiveOn": "2011-02-21"
      },
      "Local": true,
      "Bundle": true
    },
    "9174": {
      "Code": "9174",
      "ImageCode": "AUG19WLC",
      "Description": "",
      "Name": "Carryout pizza & chicken for $7.99 each: All pizzas up to 3 toppings on any of our 5 crusts or 10-piece wings or boneless chicken. Excludes XL & Specialty Pizzas. Crust availability varies by size.",
      "Price": "7.99",
      "Tags": {
        "ServiceMethods": "Carryout",
        "ValidServiceMethods": "Carryout",
        "ShowBestPriceMessage": true,
        "combinedSizeAndCrust": true
      },
      "Local": false,
      "Bundle": false
    },
    "9175": {
      "Code": "9175",
      "ImageCode": "1LSP",
      "Description": "",
      "Name": "Any Large Specialty Pizza",
      "Price": "14.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "MultiSame": true
      },
      "Local": true,
      "Bundle": false
    },
    "9193": {
      "Code": "9193",
      "ImageCode": "599mixmatch",
      "Description": "",
      "Name": "Choose any 2 or more; Medium 2-Topping Pizza, Bread Twists, Salad, Marbled Cookie Brownie, Specialty Chicken, Oven Baked Sandwich, Stuffed Cheesy Bread, 8-Piece Boneless Chicken, or Pasta in a Dish for $5.99 each.",
      "Price": "",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "OnFulFilledUpsellCoupon": "8223",
        "ShowBestPriceMessage": true,
        "EffectiveOn": "2013-01-03",
        "NoPulseDefaults": true,
        "WizardUpsells": [
          "{'Pizza'",
          "{'TitleText'",
          "'Looking for Specialty Pizza?'"
        ],
        "'LinkText':'Upgrade for only $2 more'": true,
        "'CouponCode':'8682'}}": true
      },
      "Local": false,
      "Bundle": false
    },
    "0512": {
      "Code": "0512",
      "ImageCode": "L3T,MCB",
      "Description": "",
      "Name": "Marble Cookie Brownie",
      "Price": "6.99",
      "Tags": {
        "ValidServiceMethods": [
          "Carryout",
          "Delivery",
          "Hotspot"
        ],
        "Combine": "Complementary"
      },
      "Local": true,
      "Bundle": true
    }
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
      "BBOWL": {
        "Code": "BBOWL",
        "Description": "Pasta served in a bread bowl and then baked to perfection.",
        "Local": false,
        "Name": "BreadBowl",
        "SortSeq": "02"
      }
    },
    "Pizza": {
      "HANDTOSS": {
        "Code": "HANDTOSS",
        "Description": "Garlic-seasoned crust with a rich, buttery taste.",
        "Local": false,
        "Name": "Hand Tossed",
        "SortSeq": "01"
      },
      "NPAN": {
        "Code": "NPAN",
        "Description": "Two layers of cheese, toppings to the edge, baked in a pan for a crust that is golden and crispy with a buttery taste.",
        "Local": false,
        "Name": "Handmade Pan",
        "SortSeq": "02"
      },
      "THIN": {
        "Code": "THIN",
        "Description": "Thin enough for the optimum crispy to crunchy ratio and square cut to be perfectly sharable.",
        "Local": false,
        "Name": "Crunchy Thin Crust",
        "SortSeq": "03"
      },
      "BK": {
        "Code": "BK",
        "Description": "Hand stretched to be big, thin and perfectly foldable.",
        "Local": false,
        "Name": "Brooklyn Style",
        "SortSeq": "06"
      },
      "GLUTENF": {
        "Code": "GLUTENF",
        "Description": "Domino's pizza made with a Gluten Free Crust.",
        "Local": false,
        "Name": "Gluten Free Crust",
        "SortSeq": "09"
      }
    },
    "Wings": {
      "BACTOM": {
        "Code": "BACTOM",
        "Description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with garlic parmesan white sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.",
        "Local": false,
        "Name": "Specialty Chicken – Crispy Bacon & Tomato",
        "SortSeq": "01"
      },
      "HOTBUFF": {
        "Code": "HOTBUFF",
        "Description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with classic hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta.",
        "Local": false,
        "Name": "Specialty Chicken – Classic Hot Buffalo",
        "SortSeq": "02"
      },
      "SPCYJP": {
        "Code": "SPCYJP",
        "Description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple.",
        "Local": false,
        "Name": "Specialty Chicken – Spicy Jalapeno - Pineapple",
        "SortSeq": "03"
      },
      "BBQBAC": {
        "Code": "BBQBAC",
        "Description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and smoky BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon.",
        "Local": false,
        "Name": "Specialty Chicken – Sweet BBQ Bacon",
        "SortSeq": "04"
      },
      "HOTWINGS": {
        "Code": "HOTWINGS",
        "Description": "Marinated and oven-baked, then smothered in hot buffalo sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
        "Local": false,
        "Name": "Hot Buffalo Wings",
        "SortSeq": "06"
      },
      "MILDWING": {
        "Code": "MILDWING",
        "Description": "Marinated and oven-baked, then smothered in mild buffalo sauce. Customize with your choice of dipping sauce: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
        "Local": true,
        "Name": "Mild Buffalo Wings",
        "SortSeq": "07"
      },
      "SMANG": {
        "Code": "SMANG",
        "Description": "Marinated and oven-baked and then smothered in Sweet Mango Habanero Sauce. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese, or Ranch",
        "Local": false,
        "Name": "Sweet Mango Habanero Wings",
        "SortSeq": "08"
      },
      "BBQW": {
        "Code": "BBQW",
        "Description": "Marinated and oven-baked, then smothered in honey BBQ sauce. Customize with your choice of dipping sauce: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
        "Local": false,
        "Name": "Honey BBQ Wings",
        "SortSeq": "09"
      },
      "PLNWINGS": {
        "Code": "PLNWINGS",
        "Description": "Marinated and oven-baked and then sauced with your choice of Hot, Sweet Mango Habanero or BBQ sauce.",
        "Local": false,
        "Name": "Plain Wings",
        "SortSeq": "10"
      },
      "GPRMWING": {
        "Code": "GPRMWING",
        "Description": "Marinated and oven-baked, then smothered in garlic Parmesan sauce. Customize with your choice of dipping sauce: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
        "Local": false,
        "Name": "Garlic Parmesan Wings",
        "SortSeq": "11"
      },
      "BCHICK": {
        "Code": "BCHICK",
        "Description": "Lightly breaded with savory herbs, made with 100% whole white breast meat. Customize with your choice of dipping sauce: Sweet Mango Habanero, BBQ, Kicker Hot Sauce, Blue Cheese or Ranch.",
        "Local": false,
        "Name": "Boneless Chicken",
        "SortSeq": "21"
      }
    }
  },
  "Products": {
    "F_PARMT": {
      "AvailableToppings": "",
      "AvailableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
      "Code": "F_PARMT",
      "DefaultToppings": "",
      "DefaultSides": "SIDMAR=1",
      "Description": "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with garlic and Parmesan cheese seasoning, and sprinkled with more Parmesan. Served with a side of marinara sauce for dipping.",
      "ImageCode": "F_PARMT",
      "Local": false,
      "Name": "Parmesan Bread Twists",
      "ProductType": "Bread",
      "Tags": {},
      "Variants": [
        "B8PCPT"
      ]
    },
    "F_GARLICT": {
      "AvailableToppings": "",
      "AvailableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
      "Code": "F_GARLICT",
      "DefaultToppings": "",
      "DefaultSides": "SIDMAR=1",
      "Description": "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with buttery garlic and Parmesan cheese seasoning. Served with a side of marinara sauce for dipping.",
      "ImageCode": "F_GARLICT",
      "Local": false,
      "Name": "Garlic Bread Twists",
      "ProductType": "Bread",
      "Tags": {},
      "Variants": [
        "B8PCGT"
      ]
    },
    "F_SCBRD": {
      "AvailableToppings": "",
      "AvailableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
      "Code": "F_SCBRD",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Our oven-baked breadsticks are generously stuffed and covered with a blend of 100% real mozzarella and cheddar cheeses then seasoned with a touch of garlic. Add marinara or your favorite dipping cup for an additional charge.",
      "ImageCode": "F_SCBRD",
      "Local": false,
      "Name": "Stuffed Cheesy Bread",
      "ProductType": "Bread",
      "Tags": {
        "BazaarVoice": true
      },
      "Variants": [
        "B8PCSCB"
      ]
    },
    "F_SSBRD": {
      "AvailableToppings": "Si=0:0.5:1,Fe=0:0.5:1",
      "AvailableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
      "Code": "F_SSBRD",
      "DefaultToppings": "Si=1,Fe=1",
      "DefaultSides": "",
      "Description": "Our oven-baked breadsticks are stuffed with cheese, fresh spinach and Feta cheese - covered in a blend of cheese made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
      "ImageCode": "F_SSBRD",
      "Local": false,
      "Name": "Stuffed Cheesy Bread with Spinach & Feta",
      "ProductType": "Bread",
      "Tags": {
        "BazaarVoice": true
      },
      "Variants": [
        "B8PCSSF"
      ]
    },
    "F_SBBRD": {
      "AvailableToppings": "K=0:0.5:1,J=0:0.5:1",
      "AvailableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
      "Code": "F_SBBRD",
      "DefaultToppings": "K=1,J=1",
      "DefaultSides": "",
      "Description": "Our oven-baked breadsticks are stuffed with cheese, smoked bacon & jalapeno peppers - covered in a blend of cheeses; made with 100% real mozzarella and cheddar. Seasoned with a touch of garlic and Parmesan. Add marinara or your favorite dipping cup for an additional charge.",
      "ImageCode": "F_SBBRD",
      "Local": false,
      "Name": "Stuffed Cheesy Bread with Bacon & Jalapeno",
      "ProductType": "Bread",
      "Tags": {
        "BazaarVoice": true
      },
      "Variants": [
        "B8PCSBJ"
      ]
    },
    "F_PBITES": {
      "AvailableToppings": "",
      "AvailableSides": "SIDMAR,SIDGAR,SIDRAN,Bd",
      "Code": "F_PBITES",
      "DefaultToppings": "",
      "DefaultSides": "SIDMAR=1",
      "Description": "Oven-baked bread bites handmade from fresh buttery-tasting dough and seasoned with garlic and Parmesan. Available in 16-piece or 32-piece orders. Add marinara or your favorite dipping cup for an additional charge.",
      "ImageCode": "F_PBITES",
      "Local": false,
      "Name": "Parmesan Bread Bites",
      "ProductType": "Bread",
      "Tags": {
        "BazaarVoice": true
      },
      "Variants": [
        "B16PBIT",
        "B32PBIT"
      ]
    },
    "F_CINNAT": {
      "AvailableToppings": "",
      "AvailableSides": "SIDICE",
      "Code": "F_CINNAT",
      "DefaultToppings": "",
      "DefaultSides": "SIDICE=1",
      "Description": "Handmade from fresh buttery-tasting dough and baked to a golden brown. Crusty on the outside and soft on the inside. Drizzled with a perfect blend of cinnamon and sugar, and served with a side of sweet icing for dipping or drizzling.",
      "ImageCode": "F_CINNAT",
      "Local": false,
      "Name": "Cinnamon Bread Twists",
      "ProductType": "Dessert",
      "Tags": {},
      "Variants": [
        "B8PCCT"
      ]
    },
    "F_MRBRWNE": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_MRBRWNE",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Satisfy your sweet tooth! Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie.  Oven-baked to perfection and cut into 9 pieces - this dessert is perfect to share with the whole group.",
      "ImageCode": "F_MRBRWNE",
      "Local": false,
      "Name": "Domino's Marbled Cookie Brownie™",
      "ProductType": "Dessert",
      "Tags": {},
      "Variants": [
        "MARBRWNE"
      ]
    },
    "F_LAVA": {
      "AvailableToppings": "",
      "AvailableSides": "SIDICE",
      "Code": "F_LAVA",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Indulge in two delectable oven-baked chocolate cakes with molten chocolate fudge on the inside.  Perfectly topped with a dash of powdered sugar.",
      "ImageCode": "F_LAVA",
      "Local": false,
      "Name": "Chocolate Lava Crunch Cakes",
      "ProductType": "Dessert",
      "Tags": {
        "BazaarVoice": true
      },
      "Variants": [
        "B2PCLAVA"
      ]
    },
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
    "F_ORAN": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_ORAN",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Exuberant tropical fun to release you from the everyday mundane.",
      "ImageCode": "F_ORAN",
      "Local": false,
      "Name": "Fanta® Orange",
      "ProductType": "Drinks",
      "Tags": {},
      "Variants": [
        "20BORNG",
        "2LMMORANGE"
      ]
    },
    "F_SPRITE": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SPRITE",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Unique Lymon (lemon-lime) flavor, clear, clean and crisp with no caffeine.",
      "ImageCode": "F_SPRITE",
      "Local": false,
      "Name": "Sprite®",
      "ProductType": "Drinks",
      "Tags": {},
      "Variants": [
        "20BSPRITE",
        "2LSPRITE"
      ]
    },
    "F_DIET": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_DIET",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Beautifully balanced adult cola taste in a no calorie beverage.",
      "ImageCode": "F_DIET",
      "Local": false,
      "Name": "Diet Coke®",
      "ProductType": "Drinks",
      "Tags": {},
      "Variants": [
        "2LDCOKE",
        "20BDCOKE"
      ]
    },
    "F_WATER": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_WATER",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Fresh, crisp tasting water.",
      "ImageCode": "F_WATER",
      "Local": false,
      "Name": "Dasani® Bottle Water",
      "ProductType": "Drinks",
      "Tags": {},
      "Variants": [
        "BOTTLWATER"
      ]
    },
    "F_LEMND": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_LEMND",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Made with the goodness of real lemons, Minute Maid® Lemonade is the quintessential refreshing beverage with the great taste of a simpler time.",
      "ImageCode": "F_LEMND",
      "Local": true,
      "Name": "Lemonade Bottle",
      "ProductType": "Drinks",
      "Tags": {},
      "Variants": [
        "D20BLEMO"
      ]
    },
    "F_GARDEN": {
      "AvailableToppings": "",
      "AvailableSides": "CAESAR,ITAL,BALVIN,RANCHPK",
      "Code": "F_GARDEN",
      "DefaultToppings": "",
      "DefaultSides": "RANCHPK=1",
      "Description": "A crisp and colorful combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
      "ImageCode": "F_GARDEN",
      "Local": false,
      "Name": "Classic Garden",
      "ProductType": "GSalad",
      "Tags": {},
      "Variants": [
        "PPSGARSA"
      ]
    },
    "F_CCAESAR": {
      "AvailableToppings": "",
      "AvailableSides": "CAESAR,ITAL,BALVIN,RANCHPK",
      "Code": "F_CCAESAR",
      "DefaultToppings": "",
      "DefaultSides": "CAESAR=1",
      "Description": "The makings of a classic: roasted white meat chicken, Parmesan cheese and brioche garlic croutons, all atop a blend of romaine and iceberg lettuce.",
      "ImageCode": "F_CCAESAR",
      "Local": false,
      "Name": "Chicken Caesar",
      "ProductType": "GSalad",
      "Tags": {},
      "Variants": [
        "PPSCSRSA"
      ]
    },
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
    "S_ALFR": {
      "AvailableToppings": "Xf=1,Du",
      "AvailableSides": "",
      "Code": "S_ALFR",
      "DefaultToppings": "Du=1,Xf=1",
      "DefaultSides": "",
      "Description": "Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection.",
      "ImageCode": "S_ALFR",
      "Local": false,
      "Name": "Chicken Alfredo",
      "ProductType": "Pasta",
      "Tags": {
        "OptionQtys": [
          "0",
          "1"
        ],
        "MaxOptionQty": "3",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PINPASCA",
        "PINBBLCA"
      ]
    },
    "S_CARB": {
      "AvailableToppings": "Xf=1,K,Du,M,O",
      "AvailableSides": "",
      "Code": "S_CARB",
      "DefaultToppings": "M=1,O=1,Du=1,K=1,Xf=1",
      "DefaultSides": "",
      "Description": "Taste the delectable blend of flavorful grilled chicken breast, smoked bacon, fresh onions, and fresh mushrooms mixed with penne pasta. Baked to perfection with rich Alfredo sauce.",
      "ImageCode": "S_CARB",
      "Local": false,
      "Name": "Chicken Carbonara",
      "ProductType": "Pasta",
      "Tags": {
        "OptionQtys": [
          "0",
          "1"
        ],
        "MaxOptionQty": "4",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PINPASCC",
        "PINBBLCC"
      ]
    },
    "S_MARIN": {
      "AvailableToppings": "Xm=1,S,Cp",
      "AvailableSides": "",
      "Code": "S_MARIN",
      "DefaultToppings": "S=1,Cp=1,Xm=1",
      "DefaultSides": "",
      "Description": "Penne pasta baked in a zesty tomato basil marinara sauce with Italian sausage, a blend of Italian seasonings and provolone cheese.",
      "ImageCode": "S_MARIN",
      "Local": false,
      "Name": "Italian Sausage Marinara",
      "ProductType": "Pasta",
      "Tags": {
        "OptionQtys": [
          "0",
          "1"
        ],
        "MaxOptionQty": "3",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PINPASMM",
        "PINBBLMM"
      ]
    },
    "S_PRIM": {
      "AvailableToppings": "Xf=1,M,O,Si,Td",
      "AvailableSides": "",
      "Code": "S_PRIM",
      "DefaultToppings": "M=1,O=1,Td=1,Si=1,Xf=1",
      "DefaultSides": "",
      "Description": "Fresh baby spinach, diced tomatoes, fresh mushrooms and fresh onions, mixed with penne pasta and baked with a creamy Alfredo sauce.",
      "ImageCode": "S_PRIM",
      "Local": false,
      "Name": "Pasta Primavera",
      "ProductType": "Pasta",
      "Tags": {
        "OptionQtys": [
          "0",
          "1"
        ],
        "MaxOptionQty": "4",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PINPASPP",
        "PINBBLPP"
      ]
    },
    "S_DX": {
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_DX",
      "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1",
      "DefaultSides": "",
      "Description": "Pepperoni, Italian sausage, fresh green peppers, fresh mushrooms, fresh onions and cheese made with 100% real mozzarella.",
      "ImageCode": "S_DX",
      "Local": false,
      "Name": "Deluxe",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_MX",
      "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1",
      "DefaultSides": "",
      "Description": "Pepperoni, ham, Italian sausage and beef, all sandwiched between two layers of cheese made with 100% real mozzarella.",
      "ImageCode": "S_MX",
      "Local": false,
      "Name": "MeatZZa",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac",
      "AvailableSides": "",
      "Code": "S_PIZBP",
      "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1",
      "DefaultSides": "",
      "Description": "Grilled chicken breast, fresh onions, provolone, American cheese, cheddar, cheese made with 100% real mozzarella and drizzled with a hot buffalo sauce.",
      "ImageCode": "S_PIZBP",
      "Local": false,
      "Name": "Buffalo Chicken",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_PIZCK",
      "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1",
      "DefaultSides": "",
      "Description": "Grilled chicken breast, honey BBQ sauce, fresh onions, cheddar, provolone and cheese made with 100% real mozzarella",
      "ImageCode": "S_PIZCK",
      "Local": false,
      "Name": "Memphis BBQ Chicken",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd=0:0.5:1:1.5",
      "AvailableSides": "",
      "Code": "S_PIZCR",
      "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1",
      "DefaultSides": "",
      "Description": "Grilled chicken breast, ranch, smoked bacon, diced tomatoes, provolone and cheese made with 100% real mozzarella.",
      "ImageCode": "S_PIZCR",
      "Local": false,
      "Name": "Cali Chicken Bacon Ranch",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_PIZCZ",
      "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1",
      "DefaultSides": "",
      "Description": "Feta, provolone, cheddar, Parmesan-Asiago, cheese made with 100% real mozzarella and sprinkled with oregano.",
      "ImageCode": "S_PIZCZ",
      "Local": false,
      "Name": "Wisconsin 6 Cheese",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "H,B,Sa,P,S,Du,K,Pm,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac",
      "AvailableSides": "",
      "Code": "S_PIZPH",
      "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1",
      "DefaultSides": "",
      "Description": "Tender slices of steak, fresh onions, fresh green peppers, fresh mushrooms, provolone and American cheese.",
      "ImageCode": "S_PIZPH",
      "Local": false,
      "Name": "Philly Cheese Steak",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_PIZPV",
      "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1",
      "DefaultSides": "",
      "Description": "Roasted red peppers, fresh baby spinach, fresh onions, fresh mushrooms, tomatoes, black olives, feta, provolone, cheese made with 100% real mozzarella and sprinkled with a garlic herb seasoning.",
      "ImageCode": "S_PIZPV",
      "Local": false,
      "Name": "Pacific Veggie",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_PIZPX",
      "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5",
      "DefaultSides": "",
      "Description": "Two layers of pepperoni sandwiched between provolone, Parmesan-Asiago and cheese made with 100% real mozzarella then sprinkled with oregano.",
      "ImageCode": "S_PIZPX",
      "Local": false,
      "Name": "Ultimate Pepperoni",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_PIZUH",
      "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1",
      "DefaultSides": "",
      "Description": "Sliced ham, smoked bacon, pineapple, roasted red peppers, provolone and cheese made with 100% real mozzarella.",
      "ImageCode": "S_PIZUH",
      "Local": false,
      "Name": "Honolulu Hawaiian",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_ZZ",
      "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1",
      "DefaultSides": "",
      "Description": "Pepperoni, ham, Italian sausage, beef, fresh onions, fresh green peppers, fresh mushrooms and black olives, all sandwiched between two layers of cheese made with 100% real mozzarella.",
      "ImageCode": "S_ZZ",
      "Local": false,
      "Name": "ExtravaganZZa",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "X=0:0.5:1:1.5,Xm=0:0.5:1:1.5,Bq,Xw=0:0.5:1:1.5,C,H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Xf=0:0.5:1:1.5,Rd",
      "AvailableSides": "",
      "Code": "S_PISPF",
      "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1",
      "DefaultSides": "",
      "Description": "Creamy Alfredo sauce, fresh spinach, fresh onions, feta, Parmesan-Asiago, provolone and cheese made with 100% real mozzarella.",
      "ImageCode": "S_PISPF",
      "Local": false,
      "Name": "Spinach & Feta",
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
        "BazaarVoice": true
      },
      "Variants": [
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
      "AvailableToppings": "H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac",
      "AvailableSides": "",
      "Code": "S_PZTACO",
      "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1",
      "DefaultSides": "",
      "Description": "American cheese, taco seasoning, grilled chicken, fresh onions, fresh green peppers, diced tomatoes, topped with provolone and cheddar cheeses.",
      "ImageCode": "S_PZTACO",
      "Local": false,
      "Name": "Chicken Taco",
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
        "EffectiveOn": "2020-08-24"
      },
      "Variants": [
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
      "AvailableToppings": "H,B,Sa,P,S,Du,K,Pm,Ht,F,J,O,Z,Td,R,M,N,Cp,E,G,Si,Rr,Fe,Cs,Ac,Km",
      "AvailableSides": "",
      "Code": "S_PZBRGR",
      "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1",
      "DefaultSides": "",
      "Description": "American cheese, ketchup-mustard sauce, beef, fresh onions, and diced tomatoes, topped with shredded provolone and cheddar cheeses.",
      "ImageCode": "S_PZBRGR",
      "Local": false,
      "Name": "Cheeseburger",
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
        "EffectiveOn": "2020-08-24",
        "HideOption": "Km"
      },
      "Variants": [
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
      "AvailableToppings": "Rd=0:0.5:1,C=0:0.5:1,K=0:0.5:1,Du,Pv",
      "AvailableSides": "",
      "Code": "S_CHIKK",
      "DefaultToppings": "C=1,Du=1,K=1,Pv=1,Rd=1",
      "DefaultSides": "",
      "Description": "Enjoy our flavorful grilled chicken breast topped with smoked bacon, creamy ranch and provolone cheese on artisan bread baked to golden brown perfection.",
      "ImageCode": "S_CHIKK",
      "Local": false,
      "Name": "Chicken Bacon Ranch",
      "ProductType": "Sandwich",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5"
        ],
        "MaxOptionQty": "9",
        "MaxSauceQty": "2",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PSANSACB"
      ]
    },
    "S_CHIKP": {
      "AvailableToppings": "X=0:0.5:1,C=0:0.5:1,Du,Cs=0:0.5:1,Pv",
      "AvailableSides": "",
      "Code": "S_CHIKP",
      "DefaultToppings": "X=1,C=1,Du=1,Cs=1,Pv=1",
      "DefaultSides": "",
      "Description": "Grilled chicken breast, tomato basil marinara, Parmesan-Asiago and provolone cheese. On artisan bread and baked to a golden brown.",
      "ImageCode": "S_CHIKP",
      "Local": false,
      "Name": "Chicken Parm",
      "ProductType": "Sandwich",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5"
        ],
        "MaxOptionQty": "9",
        "MaxSauceQty": "2",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PSANSACP"
      ]
    },
    "S_ITAL": {
      "AvailableToppings": "C=0:0.5:1,P,H=0:0.5:1,Sa=0:0.5:1,Pv,Z=0:0.5:1,G=0:0.5:1,O=0:0.5:1",
      "AvailableSides": "",
      "Code": "S_ITAL",
      "DefaultToppings": "C=1,P=1,H=1,O=1,G=1,Z=1,Sa=1,Pv=1",
      "DefaultSides": "",
      "Description": "Pepperoni, salami, and ham topped with banana peppers, fresh green peppers, fresh onions, and provolone cheese. On artisan bread and baked to a golden brown.",
      "ImageCode": "S_ITAL",
      "Local": false,
      "Name": "Italian",
      "ProductType": "Sandwich",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5"
        ],
        "MaxOptionQty": "9",
        "MaxSauceQty": "2",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PSANSAIT"
      ]
    },
    "S_PHIL": {
      "AvailableToppings": "Pm,Ac=0:0.5:1,Pv,G=0:0.5:1,M=0:0.5:1,O=0:0.5:1",
      "AvailableSides": "",
      "Code": "S_PHIL",
      "DefaultToppings": "M=1,O=1,G=1,Pm=1,Ac=1,Pv=1",
      "DefaultSides": "",
      "Description": "Experience deliciously tender slices of steak, American and provolone cheeses, fresh onions, fresh green peppers and fresh mushrooms placed on artisan bread and baked to golden brown perfection.",
      "ImageCode": "S_PHIL",
      "Local": false,
      "Name": "Philly Cheese Steak",
      "ProductType": "Sandwich",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5"
        ],
        "MaxOptionQty": "9",
        "MaxSauceQty": "2",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PSANSAPH"
      ]
    },
    "S_BUFC": {
      "AvailableToppings": "Bd=0:0.5:1,Ht=0:0.5:1,C=0:0.5:1,Du,E=0:0.5:1,Pv,O=0:0.5:1",
      "AvailableSides": "",
      "Code": "S_BUFC",
      "DefaultToppings": "C=1,O=1,Du=1,E=1,Ht=1,Pv=1,Bd=1",
      "DefaultSides": "",
      "Description": "Grilled chicken breast, creamy blue cheese sauce, fresh onions, hot buffalo sauce, cheddar and provolone cheese.",
      "ImageCode": "S_BUFC",
      "Local": false,
      "Name": "Buffalo Chicken",
      "ProductType": "Sandwich",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5"
        ],
        "MaxOptionQty": "9",
        "MaxSauceQty": "2",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PSANSABC"
      ]
    },
    "S_CHHB": {
      "AvailableToppings": "Mh=0:0.5:1,C=0:0.5:1,Du,E=0:0.5:1,Pv,J=0:0.5:1,N=0:0.5:1",
      "AvailableSides": "",
      "Code": "S_CHHB",
      "DefaultToppings": "C=1,Du=1,N=1,J=1,E=1,Pv=1,Mh=1",
      "DefaultSides": "",
      "Description": "Grilled chicken breast, pineapple, jalapeños, sweet mango habanero sauce, provolone and cheddar cheeses. On artisan bread and baked to a golden brown.",
      "ImageCode": "S_CHHB",
      "Local": false,
      "Name": "Chicken Habanero",
      "ProductType": "Sandwich",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5"
        ],
        "MaxOptionQty": "9",
        "MaxSauceQty": "2",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PSANSACH"
      ]
    },
    "S_MEDV": {
      "AvailableToppings": "Ac=0:0.5:1,Fe=0:0.5:1,Pv,Z=0:0.5:1,O=0:0.5:1,Rr=0:0.5:1,Si=0:0.5:1,Td=0:0.5:1",
      "AvailableSides": "",
      "Code": "S_MEDV",
      "DefaultToppings": "O=1,Td=1,Rr=1,Si=1,Fe=1,Z=1,Ac=1,Pv=1",
      "DefaultSides": "",
      "Description": "Roasted red peppers, banana peppers, diced tomatoes, fresh baby spinach, fresh onions, feta, provolone and American cheese. On artisan bread and baked to a golden brown.",
      "ImageCode": "S_MEDV",
      "Local": false,
      "Name": "Mediterranean Veggie",
      "ProductType": "Sandwich",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5"
        ],
        "MaxOptionQty": "9",
        "MaxSauceQty": "2",
        "IsDisplayedOnMakeline": true,
        "BazaarVoice": true
      },
      "Variants": [
        "PSANSAMV"
      ]
    },
    "F_SIDBAN": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDBAN",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A mild, sweet pickled sliced pepper.",
      "ImageCode": "F_SIDBAN",
      "Local": true,
      "Name": "Side Banana Peppers",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "SIDBAN"
      ]
    },
    "F_SIDJAL": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDJAL",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Sliced jalapeno peppers",
      "ImageCode": "F_SIDJAL",
      "Local": true,
      "Name": "Side Jalapenos",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "SIDEJAL"
      ]
    },
    "F_SIDPAR": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDPAR",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Grated Parmesan cheese packets",
      "ImageCode": "F_SIDPAR",
      "Local": true,
      "Name": "Parmesan Cheese Packets",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "PARMCHEESE"
      ]
    },
    "F_SIDRED": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDRED",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Crushed red pepper flake packets",
      "ImageCode": "F_SIDRED",
      "Local": true,
      "Name": "Red Pepper Packets",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "REDPEPPER"
      ]
    },
    "F_CAESAR": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_CAESAR",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A savory dressing with a combination of garlic, anchovy and subtle notes of cheese.",
      "ImageCode": "F_CAESAR",
      "Local": false,
      "Name": "Caesar Dressing",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "AGCAESAR"
      ]
    },
    "F_ITAL": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_ITAL",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A classic dressing flavored with red bell pepper, a touch of garlic and spices.",
      "ImageCode": "F_ITAL",
      "Local": true,
      "Name": "Italian Dressing",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "AGITAL"
      ]
    },
    "F_RANCHPK": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_RANCHPK",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A creamy, flavorful dressing with a blend of buttermilk, garlic, onion and spices.",
      "ImageCode": "F_RANCHPK",
      "Local": false,
      "Name": "Ranch Dressing",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "AGRANCH"
      ]
    },
    "F_HOTCUP": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_HOTCUP",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Domino's own spicy buffalo sauce.",
      "ImageCode": "F_HOTCUP",
      "Local": false,
      "Name": "Hot Buffalo Dipping Cup",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "HOTSAUCE"
      ]
    },
    "F_SMHAB": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SMHAB",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A perfect blend of sweet and spicy in one sauce",
      "ImageCode": "F_SMHAB",
      "Local": false,
      "Name": "Sweet Mango Habanero Sauce",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "CEAHABC"
      ]
    },
    "F_BBQC": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_BBQC",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A sweet and smoky BBQ sauce with bold flavor.",
      "ImageCode": "F_BBQC",
      "Local": false,
      "Name": "Honey BBQ Dipping Cup",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "CEABBQC"
      ]
    },
    "F_SIDRAN": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDRAN",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A creamy buttermilk ranch dressing with hints of garlic and onion",
      "ImageCode": "F_SIDRAN",
      "Local": false,
      "Name": "Ranch",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "RANCH"
      ]
    },
    "F_Bd": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_Bd",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A creamy dressing with bits of aged blue cheese",
      "ImageCode": "F_Bd",
      "Local": false,
      "Name": "Blue Cheese",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "BLUECHS"
      ]
    },
    "F_SIDGAR": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDGAR",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A buttery garlic sauce",
      "ImageCode": "F_SIDGAR",
      "Local": false,
      "Name": "Garlic Dipping Sauce",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "GARBUTTER"
      ]
    },
    "F_SIDICE": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDICE",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A thick sweet icing with a hint of vanilla",
      "ImageCode": "F_SIDICE",
      "Local": false,
      "Name": "Icing Dipping Sauce",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "ICING"
      ]
    },
    "F_SIDMAR": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_SIDMAR",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A sweet tomato sauce blended with garlic, basil and oregano",
      "ImageCode": "F_SIDMAR",
      "Local": false,
      "Name": "Marinara Dipping Sauce",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "MARINARA"
      ]
    },
    "F_STJUDE": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_STJUDE",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "",
      "ImageCode": "F_STJUDE",
      "Local": false,
      "Name": "St. Jude Donation",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "STJUDE",
        "STJUDE2",
        "STJUDE5",
        "STJUDE10",
        "STJUDERU"
      ]
    },
    "F_BALVIN": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F_BALVIN",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "A light dressing with a blend of balsamic vinegar, oil and garlic.",
      "ImageCode": "F_BALVIN",
      "Local": false,
      "Name": "Balsamic",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "CEABVI"
      ]
    },
    "F__SCHOOL": {
      "AvailableToppings": "",
      "AvailableSides": "",
      "Code": "F__SCHOOL",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Click here to add the local donation to your order",
      "ImageCode": "F__SCHOOL",
      "Local": true,
      "Name": "Local Donation",
      "ProductType": "Sides",
      "Tags": {},
      "Variants": [
        "_SCHOOLL"
      ]
    },
    "S_BONELESS": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_BONELESS",
      "DefaultToppings": "",
      "DefaultSides": "BBQC=1",
      "Description": "Breaded chicken made with 100% whole white breast meat. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
      "ImageCode": "S_BONELESS",
      "Local": false,
      "Name": "Boneless Chicken",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "Boneless": true,
        "EffectiveOn": "2011-02-21",
        "BvCode": "Boneless",
        "BazaarVoice": true
      },
      "Variants": [
        "W08PBNLW",
        "10WINGBNLS",
        "W16PBNLW",
        "W32PBNLW"
      ]
    },
    "S_HOTWINGS": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_HOTWINGS",
      "DefaultToppings": "",
      "DefaultSides": "Bd=1",
      "Description": "Marinated and oven-baked, then smothered in hot buffalo sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
      "ImageCode": "S_HOTWINGS",
      "Local": false,
      "Name": "Hot Buffalo Wings",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "BvCode": "BoneIn",
        "BazaarVoice": true
      },
      "Variants": [
        "W08PHOTW",
        "10WINGHOT",
        "W16PHOTW",
        "W32PHOTW"
      ]
    },
    "S_BBQW": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_BBQW",
      "DefaultToppings": "",
      "DefaultSides": "Bd=1",
      "Description": "Marinated and oven-baked, then smothered in honey BBQ sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
      "ImageCode": "S_BBQW",
      "Local": false,
      "Name": "Honey BBQ Wings",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "BvCode": "BoneIn",
        "BazaarVoice": true
      },
      "Variants": [
        "W08PBBQW",
        "10WINGBBQ",
        "W16PBBQW",
        "W32PBBQW"
      ]
    },
    "S_MILDWING": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_MILDWING",
      "DefaultToppings": "",
      "DefaultSides": "Bd=1",
      "Description": "Marinated and oven-baked, then smothered in mild buffalo sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
      "ImageCode": "S_MILDWING",
      "Local": true,
      "Name": "Mild Buffalo Wings",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "BvCode": "BoneIn",
        "BazaarVoice": true
      },
      "Variants": [
        "W08PMLDW",
        "10WINGMILD",
        "W16PMLDW",
        "W32PMLDW"
      ]
    },
    "S_PLNWINGS": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_PLNWINGS",
      "DefaultToppings": "",
      "DefaultSides": "Bd=1",
      "Description": "Marinated and oven-baked. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
      "ImageCode": "S_PLNWINGS",
      "Local": false,
      "Name": "Plain Wings",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "BvCode": "BoneIn",
        "BazaarVoice": true
      },
      "Variants": [
        "W08PPLNW",
        "10WINGPLN",
        "W16PPLNW",
        "W32PPLNW"
      ]
    },
    "S_SMANG": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_SMANG",
      "DefaultToppings": "",
      "DefaultSides": "Bd=1",
      "Description": "Marinated and oven-baked, then smothered in sweet mango habanero sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
      "ImageCode": "S_SMANG",
      "Local": false,
      "Name": "Sweet Mango Habanero Wings",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "BvCode": "BoneIn",
        "BazaarVoice": true
      },
      "Variants": [
        "W08PMANW",
        "10WINGMHAB",
        "W16PMANW",
        "W32PMANW"
      ]
    },
    "S_GPRMWING": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_GPRMWING",
      "DefaultToppings": "",
      "DefaultSides": "Bd=1",
      "Description": "Marinated and oven-baked, then smothered in garlic Parmesan sauce. Customize with your choice of dipping cup: ranch, blue cheese, hot buffalo, honey BBQ or sweet mango habanero.",
      "ImageCode": "S_GPRMWING",
      "Local": false,
      "Name": "Garlic Parmesan Wings",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "BvCode": "BoneIn",
        "BazaarVoice": true
      },
      "Variants": [
        "W08PGPMW",
        "10WINGGPMW",
        "W16PGPMW",
        "W32PGPMW"
      ]
    },
    "S_SCCBT": {
      "AvailableToppings": "K=0:1,Td=0:1",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_SCCBT",
      "DefaultToppings": "K=1,Td=1",
      "DefaultSides": "",
      "Description": "Tender bites of breaded chicken made with 100% whole breast white meat topped with garlic Parmesan sauce, a blend of cheese made with mozzarella and cheddar, crispy bacon and tomato.",
      "ImageCode": "S_SCCBT",
      "Local": false,
      "Name": "Specialty Chicken – Crispy Bacon & Tomato",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart"
      },
      "Variants": [
        "CKRGCBT"
      ]
    },
    "S_SCCHB": {
      "AvailableToppings": "",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_SCCHB",
      "DefaultToppings": "",
      "DefaultSides": "",
      "Description": "Tender bites of breaded chicken made with 100% whole breast white meat topped with hot buffalo sauce, ranch, a blend of cheese made with mozzarella and cheddar, and feta.",
      "ImageCode": "S_SCCHB",
      "Local": false,
      "Name": "Specialty Chicken – Classic Hot Buffalo",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart"
      },
      "Variants": [
        "CKRGHTB"
      ]
    },
    "S_SCSJP": {
      "AvailableToppings": "J=0:1,N=0:1",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_SCSJP",
      "DefaultToppings": "J=1,N=1",
      "DefaultSides": "",
      "Description": "Tender bites of lightly breaded, 100% whole breast white meat chicken, topped with sweet and spicy mango-habanero sauce, a blend of cheese made with mozzarella and cheddar, jalapeno and pineapple.",
      "ImageCode": "S_SCSJP",
      "Local": false,
      "Name": "Specialty Chicken – Spicy Jalapeno - Pineapple",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart"
      },
      "Variants": [
        "CKRGSJP"
      ]
    },
    "S_SCSBBQ": {
      "AvailableToppings": "K=0:1",
      "AvailableSides": "HOTCUP,SMHAB,BBQC,SIDRAN,Bd",
      "Code": "S_SCSBBQ",
      "DefaultToppings": "K=1",
      "DefaultSides": "",
      "Description": "Tender bites of breaded chicken made with 100% whole breast white meat topped with sweet and smoky honey BBQ sauce, a blend of cheese made with mozzarella and cheddar, and crispy bacon.",
      "ImageCode": "S_SCSBBQ",
      "Local": false,
      "Name": "Specialty Chicken – Sweet BBQ Bacon",
      "ProductType": "Wings",
      "Tags": {
        "OptionQtys": [
          "0",
          "0.5",
          "1",
          "1.5",
          "2",
          "3",
          "4",
          "5"
        ],
        "MaxOptionQty": "99",
        "IsDisplayedOnMakeline": true,
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart"
      },
      "Variants": [
        "CKRGSBQ"
      ]
    }
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
      "SIDGAR": {
        "Availability": [],
        "Code": "SIDGAR",
        "Description": "A buttery garlic sauce",
        "Local": true,
        "Name": "Garlic Dipping Sauce",
        "Tags": {
          "Side": true
        }
      },
      "SIDRAN": {
        "Availability": [],
        "Code": "SIDRAN",
        "Description": "A creamy buttermilk ranch dressing with hints of garlic and onion",
        "Local": true,
        "Name": "Ranch",
        "Tags": {
          "Side": true
        }
      },
      "Bd": {
        "Availability": [],
        "Code": "Bd",
        "Description": "A creamy dressing with bits of aged blue cheese",
        "Local": true,
        "Name": "Blue Cheese",
        "Tags": {
          "Side": true
        }
      }
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
      "ITAL": {
        "Availability": [],
        "Code": "ITAL",
        "Description": "A classic dressing flavored with spices, red bell pepper and a touch of garlic.",
        "Local": true,
        "Name": "Italian",
        "Tags": {
          "Side": true
        }
      },
      "BALVIN": {
        "Availability": [],
        "Code": "BALVIN",
        "Description": "A light dressing with a blend of balsamic vinegar, oil and garlic.",
        "Local": false,
        "Name": "Balsamic",
        "Tags": {
          "Side": true
        }
      },
      "RANCHPK": {
        "Availability": [],
        "Code": "RANCHPK",
        "Description": "A flavorful creamy dressing with touches of buttermilk and garlic.",
        "Local": false,
        "Name": "Ranch",
        "Tags": {
          "Side": true
        }
      }
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
      "SMHAB": {
        "Availability": [],
        "Code": "SMHAB",
        "Description": "A perfect blend of sweet and spicy in one sauce",
        "Local": false,
        "Name": "Sweet Mango Habanero Sauce",
        "Tags": {
          "Side": true,
          "EffectiveOn": "2010-01-01"
        }
      },
      "BBQC": {
        "Availability": [],
        "Code": "BBQC",
        "Description": "A sweet and smoky BBQ sauce with bold flavor.",
        "Local": false,
        "Name": "Honey BBQ Dipping Cup",
        "Tags": {
          "Side": true,
          "EffectiveOn": "2010-01-01"
        }
      },
      "SIDRAN": {
        "Availability": [],
        "Code": "SIDRAN",
        "Description": "A creamy buttermilk ranch dressing with hints of garlic and onion",
        "Local": false,
        "Name": "Ranch",
        "Tags": {
          "Side": true
        }
      },
      "Bd": {
        "Availability": [],
        "Code": "Bd",
        "Description": "A creamy dressing with bits of aged blue cheese",
        "Local": false,
        "Name": "Blue Cheese",
        "Tags": {
          "Side": true
        }
      }
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
      "BRD16": {
        "Code": "BRD16",
        "Description": "",
        "Local": false,
        "Name": "16-Piece",
        "SortSeq": "06"
      },
      "BRD32": {
        "Code": "BRD32",
        "Description": "",
        "Local": false,
        "Name": "32-Piece",
        "SortSeq": "07"
      }
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
      "DRT8": {
        "Code": "DRT8",
        "Description": "",
        "Local": false,
        "Name": "8-Piece",
        "SortSeq": "05"
      },
      "9PC": {
        "Code": "9PC",
        "Description": "",
        "Local": false,
        "Name": "9-Piece",
        "SortSeq": "06"
      }
    },
    "Drinks": {
      "2LTB": {
        "Code": "2LTB",
        "Description": "",
        "Local": false,
        "Name": "2-Liter Bottle",
        "SortSeq": "01"
      },
      "20OZB": {
        "Code": "20OZB",
        "Description": "",
        "Local": false,
        "Name": "20oz Bottle",
        "SortSeq": "02"
      }
    },
    "Pizza": {
      "10": {
        "Code": "10",
        "Description": "",
        "Local": false,
        "Name": "Small (10\")",
        "SortSeq": "03"
      },
      "12": {
        "Code": "12",
        "Description": "",
        "Local": false,
        "Name": "Medium (12\")",
        "SortSeq": "04"
      },
      "14": {
        "Code": "14",
        "Description": "",
        "Local": false,
        "Name": "Large (14\")",
        "SortSeq": "05"
      },
      "16": {
        "Code": "16",
        "Description": "",
        "Local": true,
        "Name": "X-Large (16\")",
        "SortSeq": "06"
      }
    },
    "Wings": {
      "8PCW": {
        "Code": "8PCW",
        "Description": "",
        "Local": false,
        "Name": "8-Piece",
        "SortSeq": "12"
      },
      "10PCW": {
        "Code": "10PCW",
        "Description": "",
        "Local": false,
        "Name": "10-Piece",
        "SortSeq": "13"
      },
      "12PCB": {
        "Code": "12PCB",
        "Description": "",
        "Local": false,
        "Name": "12-Piece Bites",
        "SortSeq": "15"
      },
      "16PCW": {
        "Code": "16PCW",
        "Description": "",
        "Local": false,
        "Name": "16-Piece",
        "SortSeq": "15"
      },
      "32PCW": {
        "Code": "32PCW",
        "Description": "",
        "Local": false,
        "Name": "32-Piece",
        "SortSeq": "16"
      }
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
      "J": {
        "Availability": [],
        "Code": "J",
        "Description": "",
        "Local": false,
        "Name": "Jalapeno Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Si": {
        "Availability": [],
        "Code": "Si",
        "Description": "",
        "Local": false,
        "Name": "Spinach",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Fe": {
        "Availability": [],
        "Code": "Fe",
        "Description": "",
        "Local": false,
        "Name": "Feta Cheese",
        "Tags": {
          "NonMeat": true
        }
      }
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
      "Xm": {
        "Availability": [],
        "Code": "Xm",
        "Description": "",
        "Local": false,
        "Name": "Hearty Marinara Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "ExclusiveGroup": "Sauce",
          "Sauce": true,
          "NonMeat": true
        }
      },
      "P": {
        "Availability": [],
        "Code": "P",
        "Description": "",
        "Local": false,
        "Name": "Pepperoni",
        "Tags": {
          "Meat": true
        }
      },
      "S": {
        "Availability": [],
        "Code": "S",
        "Description": "",
        "Local": false,
        "Name": "Italian Sausage",
        "Tags": {
          "Meat": true
        }
      },
      "B": {
        "Availability": [],
        "Code": "B",
        "Description": "",
        "Local": false,
        "Name": "Beef",
        "Tags": {
          "Meat": true
        }
      },
      "Pm": {
        "Availability": [],
        "Code": "Pm",
        "Description": "",
        "Local": false,
        "Name": "Philly Steak",
        "Tags": {
          "Meat": true
        }
      },
      "H": {
        "Availability": [],
        "Code": "H",
        "Description": "",
        "Local": false,
        "Name": "Ham",
        "Tags": {
          "Meat": true
        }
      },
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
      "Du": {
        "Availability": [],
        "Code": "Du",
        "Description": "",
        "Local": false,
        "Name": "Premium Chicken",
        "Tags": {
          "Meat": true
        }
      },
      "C": {
        "Availability": [],
        "Code": "C",
        "Description": "",
        "Local": false,
        "Name": "Cheese",
        "Tags": {
          "Cheese": true,
          "NonMeat": true
        }
      },
      "E": {
        "Availability": [],
        "Code": "E",
        "Description": "",
        "Local": false,
        "Name": "Cheddar Cheese",
        "Tags": {
          "Cheese": true,
          "NonMeat": true
        }
      },
      "Fe": {
        "Availability": [],
        "Code": "Fe",
        "Description": "",
        "Local": false,
        "Name": "Feta Cheese",
        "Tags": {
          "Cheese": true,
          "NonMeat": true
        }
      },
      "Cs": {
        "Availability": [],
        "Code": "Cs",
        "Description": "",
        "Local": false,
        "Name": "Shredded Parmesan",
        "Tags": {
          "Cheese": true,
          "NonMeat": true
        }
      },
      "Cp": {
        "Availability": [],
        "Code": "Cp",
        "Description": "",
        "Local": false,
        "Name": "Shredded Provolone Cheese",
        "Tags": {
          "Cheese": true,
          "NonMeat": true
        }
      },
      "F": {
        "Availability": [],
        "Code": "F",
        "Description": "",
        "Local": true,
        "Name": "Garlic",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "G": {
        "Availability": [],
        "Code": "G",
        "Description": "",
        "Local": false,
        "Name": "Green Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "J": {
        "Availability": [],
        "Code": "J",
        "Description": "",
        "Local": false,
        "Name": "Jalapeno Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "M": {
        "Availability": [],
        "Code": "M",
        "Description": "",
        "Local": false,
        "Name": "Mushrooms",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "N": {
        "Availability": [],
        "Code": "N",
        "Description": "",
        "Local": false,
        "Name": "Pineapple",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "O": {
        "Availability": [],
        "Code": "O",
        "Description": "",
        "Local": false,
        "Name": "Onions",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "R": {
        "Availability": [],
        "Code": "R",
        "Description": "",
        "Local": false,
        "Name": "Black Olives",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Rr": {
        "Availability": [],
        "Code": "Rr",
        "Description": "",
        "Local": false,
        "Name": "Roasted Red Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Si": {
        "Availability": [],
        "Code": "Si",
        "Description": "",
        "Local": false,
        "Name": "Spinach",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Td": {
        "Availability": [],
        "Code": "Td",
        "Description": "",
        "Local": false,
        "Name": "Diced Tomatoes",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Z": {
        "Availability": [],
        "Code": "Z",
        "Description": "",
        "Local": false,
        "Name": "Banana Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      }
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
      "Xm": {
        "Availability": [],
        "Code": "Xm",
        "Description": "",
        "Local": false,
        "Name": "Hearty Marinara Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "ExclusiveGroup": "Sauce",
          "Sauce": true,
          "NonMeat": true
        }
      },
      "Bq": {
        "Availability": [],
        "Code": "Bq",
        "Description": "",
        "Local": false,
        "Name": "Honey BBQ Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "ExclusiveGroup": "Sauce",
          "Sauce": true,
          "NonMeat": true
        }
      },
      "Xw": {
        "Availability": [],
        "Code": "Xw",
        "Description": "",
        "Local": false,
        "Name": "Garlic Parmesan Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "ExclusiveGroup": "Sauce",
          "Sauce": true,
          "NonMeat": true
        }
      },
      "C": {
        "Availability": [],
        "Code": "C",
        "Description": "",
        "Local": false,
        "Name": "Cheese",
        "Tags": {
          "Cheese": true,
          "NonMeat": true
        }
      },
      "H": {
        "Availability": [],
        "Code": "H",
        "Description": "",
        "Local": false,
        "Name": "Ham",
        "Tags": {
          "Meat": true
        }
      },
      "B": {
        "Availability": [],
        "Code": "B",
        "Description": "",
        "Local": false,
        "Name": "Beef",
        "Tags": {
          "Meat": true
        }
      },
      "Sa": {
        "Availability": [],
        "Code": "Sa",
        "Description": "",
        "Local": false,
        "Name": "Salami",
        "Tags": {
          "Meat": true
        }
      },
      "P": {
        "Availability": [],
        "Code": "P",
        "Description": "",
        "Local": false,
        "Name": "Pepperoni",
        "Tags": {
          "Meat": true
        }
      },
      "S": {
        "Availability": [],
        "Code": "S",
        "Description": "",
        "Local": false,
        "Name": "Italian Sausage",
        "Tags": {
          "Meat": true
        }
      },
      "Du": {
        "Availability": [],
        "Code": "Du",
        "Description": "",
        "Local": false,
        "Name": "Premium Chicken",
        "Tags": {
          "Meat": true
        }
      },
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
      "Pm": {
        "Availability": [],
        "Code": "Pm",
        "Description": "",
        "Local": false,
        "Name": "Philly Steak",
        "Tags": {
          "Meat": true
        }
      },
      "Ht": {
        "Availability": [],
        "Code": "Ht",
        "Description": "",
        "Local": false,
        "Name": "Hot Buffalo Sauce",
        "Tags": {
          "NonMeat": true
        }
      },
      "F": {
        "Availability": [],
        "Code": "F",
        "Description": "",
        "Local": true,
        "Name": "Garlic",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "J": {
        "Availability": [],
        "Code": "J",
        "Description": "",
        "Local": false,
        "Name": "Jalapeno Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "O": {
        "Availability": [],
        "Code": "O",
        "Description": "",
        "Local": false,
        "Name": "Onions",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Z": {
        "Availability": [],
        "Code": "Z",
        "Description": "",
        "Local": false,
        "Name": "Banana Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Td": {
        "Availability": [],
        "Code": "Td",
        "Description": "",
        "Local": false,
        "Name": "Diced Tomatoes",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "R": {
        "Availability": [],
        "Code": "R",
        "Description": "",
        "Local": false,
        "Name": "Black Olives",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "M": {
        "Availability": [],
        "Code": "M",
        "Description": "",
        "Local": false,
        "Name": "Mushrooms",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "N": {
        "Availability": [],
        "Code": "N",
        "Description": "",
        "Local": false,
        "Name": "Pineapple",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Cp": {
        "Availability": [],
        "Code": "Cp",
        "Description": "",
        "Local": false,
        "Name": "Shredded Provolone Cheese",
        "Tags": {
          "NonMeat": true,
          "BaseOptionQty": "1"
        }
      },
      "E": {
        "Availability": [],
        "Code": "E",
        "Description": "",
        "Local": false,
        "Name": "Cheddar Cheese",
        "Tags": {
          "NonMeat": true
        }
      },
      "G": {
        "Availability": [],
        "Code": "G",
        "Description": "",
        "Local": false,
        "Name": "Green Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Si": {
        "Availability": [],
        "Code": "Si",
        "Description": "",
        "Local": false,
        "Name": "Spinach",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Rr": {
        "Availability": [],
        "Code": "Rr",
        "Description": "",
        "Local": false,
        "Name": "Roasted Red Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Fe": {
        "Availability": [],
        "Code": "Fe",
        "Description": "",
        "Local": false,
        "Name": "Feta Cheese",
        "Tags": {
          "NonMeat": true
        }
      },
      "Cs": {
        "Availability": [],
        "Code": "Cs",
        "Description": "",
        "Local": false,
        "Name": "Shredded Parmesan Asiago",
        "Tags": {
          "NonMeat": true
        }
      },
      "Ac": {
        "Availability": [],
        "Code": "Ac",
        "Description": "",
        "Local": false,
        "Name": "American Cheese",
        "Tags": {
          "NonMeat": true
        }
      },
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
      "Rd": {
        "Availability": [],
        "Code": "Rd",
        "Description": "",
        "Local": false,
        "Name": "Ranch",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "Sauce": true,
          "NonMeat": true
        }
      },
      "Km": {
        "Availability": [],
        "Code": "Km",
        "Description": "",
        "Local": false,
        "Name": "Ketchup-mustard sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "ExclusiveGroup": "Sauce",
          "Sauce": true,
          "NonMeat": true
        }
      }
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
      "Mh": {
        "Availability": [],
        "Code": "Mh",
        "Description": "",
        "Local": false,
        "Name": "Mango Habanero Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "Sauce": true,
          "NonMeat": true
        }
      },
      "Bd": {
        "Availability": [],
        "Code": "Bd",
        "Description": "",
        "Local": false,
        "Name": "Blue Cheese Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "Sauce": true,
          "NonMeat": true
        }
      },
      "Rd": {
        "Availability": [],
        "Code": "Rd",
        "Description": "",
        "Local": false,
        "Name": "Ranch Dressing",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "Sauce": true,
          "Vege": true,
          "NonMeat": true
        }
      },
      "Ht": {
        "Availability": [],
        "Code": "Ht",
        "Description": "",
        "Local": false,
        "Name": "Hot Buffalo Sauce",
        "Tags": {
          "WholeOnly": true,
          "IgnoreQty": true,
          "Sauce": true,
          "Vege": true,
          "NonMeat": true
        }
      },
      "C": {
        "Availability": [],
        "Code": "C",
        "Description": "",
        "Local": false,
        "Name": "Cheese",
        "Tags": {
          "NonMeat": true
        }
      },
      "P": {
        "Availability": [],
        "Code": "P",
        "Description": "",
        "Local": false,
        "Name": "Pepperoni",
        "Tags": {
          "Meat": true
        }
      },
      "Pm": {
        "Availability": [],
        "Code": "Pm",
        "Description": "",
        "Local": false,
        "Name": "Philly Steak",
        "Tags": {
          "Meat": true
        }
      },
      "H": {
        "Availability": [],
        "Code": "H",
        "Description": "",
        "Local": false,
        "Name": "Ham",
        "Tags": {
          "Meat": true
        }
      },
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
      "Sa": {
        "Availability": [],
        "Code": "Sa",
        "Description": "",
        "Local": false,
        "Name": "Salami",
        "Tags": {
          "Meat": true
        }
      },
      "Du": {
        "Availability": [],
        "Code": "Du",
        "Description": "",
        "Local": false,
        "Name": "Premium Chicken",
        "Tags": {
          "Meat": true
        }
      },
      "Ac": {
        "Availability": [],
        "Code": "Ac",
        "Description": "",
        "Local": false,
        "Name": "American Cheese",
        "Tags": {
          "NonMeat": true
        }
      },
      "E": {
        "Availability": [],
        "Code": "E",
        "Description": "",
        "Local": false,
        "Name": "Cheddar Cheese",
        "Tags": {
          "NonMeat": true
        }
      },
      "Fe": {
        "Availability": [],
        "Code": "Fe",
        "Description": "",
        "Local": false,
        "Name": "Feta Cheese",
        "Tags": {
          "NonMeat": true
        }
      },
      "Cs": {
        "Availability": [],
        "Code": "Cs",
        "Description": "",
        "Local": false,
        "Name": "Shredded Parmesan Asiago",
        "Tags": {
          "NonMeat": true
        }
      },
      "Pv": {
        "Availability": [],
        "Code": "Pv",
        "Description": "",
        "Local": false,
        "Name": "Sliced Provolone",
        "Tags": {
          "NonMeat": true
        }
      },
      "Z": {
        "Availability": [],
        "Code": "Z",
        "Description": "",
        "Local": false,
        "Name": "Banana Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "G": {
        "Availability": [],
        "Code": "G",
        "Description": "",
        "Local": false,
        "Name": "Green Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "J": {
        "Availability": [],
        "Code": "J",
        "Description": "",
        "Local": false,
        "Name": "Jalapeno Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "M": {
        "Availability": [],
        "Code": "M",
        "Description": "",
        "Local": false,
        "Name": "Mushrooms",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "N": {
        "Availability": [],
        "Code": "N",
        "Description": "",
        "Local": false,
        "Name": "Pineapple",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "O": {
        "Availability": [],
        "Code": "O",
        "Description": "",
        "Local": false,
        "Name": "Onions",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Rr": {
        "Availability": [],
        "Code": "Rr",
        "Description": "",
        "Local": false,
        "Name": "Roasted Red Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Si": {
        "Availability": [],
        "Code": "Si",
        "Description": "",
        "Local": false,
        "Name": "Spinach",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      },
      "Td": {
        "Availability": [],
        "Code": "Td",
        "Description": "",
        "Local": false,
        "Name": "Diced Tomatoes",
        "Tags": {
          "Vege": true,
          "NonMeat": true
        }
      }
    },
    "Wings": {
      "K": {
        "Availability": [],
        "Code": "K",
        "Description": "",
        "Local": false,
        "Name": "Bacon",
        "Tags": {
          "Meat": true,
          "Side": false
        }
      },
      "Td": {
        "Availability": [],
        "Code": "Td",
        "Description": "",
        "Local": false,
        "Name": "Diced Tomatoes",
        "Tags": {
          "Vege": true,
          "NonMeat": true,
          "Side": false
        }
      },
      "J": {
        "Availability": [],
        "Code": "J",
        "Description": "",
        "Local": false,
        "Name": "Jalapeno Peppers",
        "Tags": {
          "Vege": true,
          "NonMeat": true,
          "Side": false
        }
      },
      "N": {
        "Availability": [],
        "Code": "N",
        "Description": "",
        "Local": false,
        "Name": "Pineapple",
        "Tags": {
          "Vege": true,
          "NonMeat": true,
          "Side": false
        }
      }
    }
  },
  "Variants": {
    "B8PCPT": {
      "Code": "B8PCPT",
      "FlavorCode": "",
      "ImageCode": "B8PCPT",
      "Local": false,
      "Name": "Parmesan Bread Twists",
      "Price": "6.99",
      "ProductCode": "F_PARMT",
      "SizeCode": "BRD8",
      "Tags": {
        "BreadType": "Twists",
        "DefaultSides": "SIDMAR=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "B8PCGT": {
      "Code": "B8PCGT",
      "FlavorCode": "",
      "ImageCode": "B8PCGT",
      "Local": false,
      "Name": "Garlic Bread Twists",
      "Price": "6.99",
      "ProductCode": "F_GARLICT",
      "SizeCode": "BRD8",
      "Tags": {
        "BreadType": "Twists",
        "DefaultSides": "SIDMAR=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "B8PCSCB": {
      "Code": "B8PCSCB",
      "FlavorCode": "",
      "ImageCode": "B8PCSCB",
      "Local": false,
      "Name": "Stuffed Cheesy Bread",
      "Price": "7.49",
      "ProductCode": "F_SCBRD",
      "SizeCode": "BRD8",
      "Tags": {
        "BreadType": "Stuffed",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.49",
        "Price1-0": "7.49",
        "Price1-3": "10.49",
        "Price2-3": "10.49",
        "Price1-4": "11.49",
        "Price2-2": "9.49",
        "Price1-1": "8.49",
        "Price2-1": "8.49",
        "Price1-2": "9.49",
        "Price2-0": "7.49"
      },
      "Surcharge": "0"
    },
    "B8PCSSF": {
      "Code": "B8PCSSF",
      "FlavorCode": "",
      "ImageCode": "B8PCSSF",
      "Local": false,
      "Name": "Stuffed Cheesy Bread with Spinach & Feta",
      "Price": "7.49",
      "ProductCode": "F_SSBRD",
      "SizeCode": "BRD8",
      "Tags": {
        "BreadType": "Stuffed",
        "DefaultSides": "",
        "DefaultToppings": "Si=1,Fe=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.49",
        "Price1-0": "7.49",
        "Price1-3": "10.49",
        "Price2-3": "10.49",
        "Price1-4": "11.49",
        "Price2-2": "9.49",
        "Price1-1": "8.49",
        "Price2-1": "8.49",
        "Price1-2": "9.49",
        "Price2-0": "7.49"
      },
      "Surcharge": "0"
    },
    "B8PCSBJ": {
      "Code": "B8PCSBJ",
      "FlavorCode": "",
      "ImageCode": "B8PCSBJ",
      "Local": false,
      "Name": "Stuffed Cheesy Bread with Bacon & Jalapeno",
      "Price": "7.49",
      "ProductCode": "F_SBBRD",
      "SizeCode": "BRD8",
      "Tags": {
        "BreadType": "Stuffed",
        "DefaultSides": "",
        "DefaultToppings": "K=1,J=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.49",
        "Price1-0": "7.49",
        "Price1-3": "10.49",
        "Price2-3": "10.49",
        "Price1-4": "11.49",
        "Price2-2": "9.49",
        "Price1-1": "8.49",
        "Price2-1": "8.49",
        "Price1-2": "9.49",
        "Price2-0": "7.49"
      },
      "Surcharge": "0"
    },
    "B16PBIT": {
      "Code": "B16PBIT",
      "FlavorCode": "",
      "ImageCode": "B16PBIT",
      "Local": false,
      "Name": "16-Piece Parmesan Bread Bites",
      "Price": "4.99",
      "ProductCode": "F_PBITES",
      "SizeCode": "BRD16",
      "Tags": {
        "DefaultSides": "SIDMAR=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "4.99",
        "Price1-0": "4.99",
        "Price1-3": "4.99",
        "Price2-3": "4.99",
        "Price1-4": "4.99",
        "Price2-2": "4.99",
        "Price1-1": "4.99",
        "Price2-1": "4.99",
        "Price1-2": "4.99",
        "Price2-0": "4.99"
      },
      "Surcharge": "0"
    },
    "B32PBIT": {
      "Code": "B32PBIT",
      "FlavorCode": "",
      "ImageCode": "B32PBIT",
      "Local": false,
      "Name": "32-Piece Parmesan Bread Bites",
      "Price": "7.99",
      "ProductCode": "F_PBITES",
      "SizeCode": "BRD32",
      "Tags": {
        "DefaultSides": "SIDMAR=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "7.99",
        "Price1-0": "7.99",
        "Price1-3": "7.99",
        "Price2-3": "7.99",
        "Price1-4": "7.99",
        "Price2-2": "7.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "7.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "B8PCCT": {
      "Code": "B8PCCT",
      "FlavorCode": "",
      "ImageCode": "B8PCCT",
      "Local": false,
      "Name": "Cinnamon Bread Twists",
      "Price": "6.99",
      "ProductCode": "F_CINNAT",
      "SizeCode": "DRT8",
      "Tags": {
        "BreadType": "Twists",
        "DefaultSides": "SIDICE=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "MARBRWNE": {
      "Code": "MARBRWNE",
      "FlavorCode": "",
      "ImageCode": "MARBRWNE",
      "Local": false,
      "Name": "Domino's Marbled Cookie Brownie™",
      "Price": "6.99",
      "ProductCode": "F_MRBRWNE",
      "SizeCode": "9PC",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "B2PCLAVA": {
      "Code": "B2PCLAVA",
      "FlavorCode": "",
      "ImageCode": "B2PCLAVA",
      "Local": false,
      "Name": "Chocolate Lava Crunch Cakes",
      "Price": "4.99",
      "ProductCode": "F_LAVA",
      "SizeCode": "DRT2",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "7.99",
        "Price1-0": "4.99",
        "Price1-3": "7.24",
        "Price2-3": "7.24",
        "Price1-4": "7.99",
        "Price2-2": "6.49",
        "Price1-1": "5.74",
        "Price2-1": "5.74",
        "Price1-2": "6.49",
        "Price2-0": "4.99"
      },
      "Surcharge": "0"
    },
    "20BCOKE": {
      "Code": "20BCOKE",
      "FlavorCode": "",
      "ImageCode": "20BCOKE",
      "Local": false,
      "Name": "20oz Bottle Coke®",
      "Price": "2.09",
      "ProductCode": "F_COKE",
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
    "20BORNG": {
      "Code": "20BORNG",
      "FlavorCode": "",
      "ImageCode": "20BORNG",
      "Local": false,
      "Name": "20oz Bottle Fanta® Orange",
      "Price": "2.09",
      "ProductCode": "F_ORAN",
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
    "2LCOKE": {
      "Code": "2LCOKE",
      "FlavorCode": "",
      "ImageCode": "2LCOKE",
      "Local": false,
      "Name": "2-Liter Coke®",
      "Price": "2.99",
      "ProductCode": "F_COKE",
      "SizeCode": "2LTB",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "2.99",
        "Price1-0": "2.99",
        "Price1-3": "2.99",
        "Price2-3": "2.99",
        "Price1-4": "2.99",
        "Price2-2": "2.99",
        "Price1-1": "2.99",
        "Price2-1": "2.99",
        "Price1-2": "2.99",
        "Price2-0": "2.99"
      },
      "Surcharge": "0"
    },
    "2LDCOKE": {
      "Code": "2LDCOKE",
      "FlavorCode": "",
      "ImageCode": "2LDCOKE",
      "Local": false,
      "Name": "2-Liter Diet Coke®",
      "Price": "2.99",
      "ProductCode": "F_DIET",
      "SizeCode": "2LTB",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "2.99",
        "Price1-0": "2.99",
        "Price1-3": "2.99",
        "Price2-3": "2.99",
        "Price1-4": "2.99",
        "Price2-2": "2.99",
        "Price1-1": "2.99",
        "Price2-1": "2.99",
        "Price1-2": "2.99",
        "Price2-0": "2.99"
      },
      "Surcharge": "0"
    },
    "20BDCOKE": {
      "Code": "20BDCOKE",
      "FlavorCode": "",
      "ImageCode": "20BDCOKE",
      "Local": false,
      "Name": "20oz Bottle Diet Coke®",
      "Price": "2.09",
      "ProductCode": "F_DIET",
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
    "2LMMORANGE": {
      "Code": "2LMMORANGE",
      "FlavorCode": "",
      "ImageCode": "2LMMORANGE",
      "Local": true,
      "Name": "2-Liter Fanta® Orange",
      "Price": "2.99",
      "ProductCode": "F_ORAN",
      "SizeCode": "2LTB",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "2.99",
        "Price1-0": "2.99",
        "Price1-3": "2.99",
        "Price2-3": "2.99",
        "Price1-4": "2.99",
        "Price2-2": "2.99",
        "Price1-1": "2.99",
        "Price2-1": "2.99",
        "Price1-2": "2.99",
        "Price2-0": "2.99"
      },
      "Surcharge": "0"
    },
    "2LSPRITE": {
      "Code": "2LSPRITE",
      "FlavorCode": "",
      "ImageCode": "2LSPRITE",
      "Local": false,
      "Name": "2-Liter Sprite®",
      "Price": "2.99",
      "ProductCode": "F_SPRITE",
      "SizeCode": "2LTB",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "2.99",
        "Price1-0": "2.99",
        "Price1-3": "2.99",
        "Price2-3": "2.99",
        "Price1-4": "2.99",
        "Price2-2": "2.99",
        "Price1-1": "2.99",
        "Price2-1": "2.99",
        "Price1-2": "2.99",
        "Price2-0": "2.99"
      },
      "Surcharge": "0"
    },
    "BOTTLWATER": {
      "Code": "BOTTLWATER",
      "FlavorCode": "",
      "ImageCode": "BOTTLWATER",
      "Local": false,
      "Name": "20oz Dasani® Bottle Water",
      "Price": "2.09",
      "ProductCode": "F_WATER",
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
    "D20BLEMO": {
      "Code": "D20BLEMO",
      "FlavorCode": "",
      "ImageCode": "D20BLEMO",
      "Local": true,
      "Name": "20oz Lemonade Bottle",
      "Price": "2.09",
      "ProductCode": "F_LEMND",
      "SizeCode": "20OZB",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
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
    "PPSGARSA": {
      "Code": "PPSGARSA",
      "FlavorCode": "",
      "ImageCode": "PPSGARSA",
      "Local": false,
      "Name": "Classic Garden",
      "Price": "6.99",
      "ProductCode": "F_GARDEN",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "RANCHPK=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PPSCSRSA": {
      "Code": "PPSCSRSA",
      "FlavorCode": "",
      "ImageCode": "PPSCSRSA",
      "Local": false,
      "Name": "Chicken Caesar",
      "Price": "6.99",
      "ProductCode": "F_CCAESAR",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "CAESAR=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PINPASBD": {
      "Code": "PINPASBD",
      "FlavorCode": "PASTA",
      "ImageCode": "PINPASBD",
      "Local": false,
      "Name": "Build Your Own Pasta",
      "Price": "7.99",
      "ProductCode": "S_BUILD",
      "SizeCode": "",
      "Tags": {
        "SauceRequired": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "7.99",
        "Price1-3": "7.99",
        "Price2-3": "7.99",
        "Price1-4": "8.99",
        "Price2-2": "7.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "7.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "PINPASCA": {
      "Code": "PINPASCA",
      "FlavorCode": "PASTA",
      "ImageCode": "PINPASCA",
      "Local": false,
      "Name": "Chicken Alfredo Pasta",
      "Price": "7.99",
      "ProductCode": "S_ALFR",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "Du=1,Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "PINPASCC": {
      "Code": "PINPASCC",
      "FlavorCode": "PASTA",
      "ImageCode": "PINPASCC",
      "Local": false,
      "Name": "Chicken Carbonara Pasta",
      "Price": "7.99",
      "ProductCode": "S_CARB",
      "SizeCode": "",
      "Tags": {
        "MaxOptionQty": "4",
        "DefaultSides": "",
        "DefaultToppings": "M=1,O=1,Du=1,K=1,Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "PINPASMM": {
      "Code": "PINPASMM",
      "FlavorCode": "PASTA",
      "ImageCode": "PINPASMM",
      "Local": false,
      "Name": "Italian Sausage Marinara Pasta",
      "Price": "7.99",
      "ProductCode": "S_MARIN",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "S=1,Cp=1,Xm=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "PINPASPP": {
      "Code": "PINPASPP",
      "FlavorCode": "PASTA",
      "ImageCode": "PINPASPP",
      "Local": false,
      "Name": "Pasta Primavera",
      "Price": "7.99",
      "ProductCode": "S_PRIM",
      "SizeCode": "",
      "Tags": {
        "MaxOptionQty": "4",
        "DefaultSides": "",
        "DefaultToppings": "M=1,O=1,Td=1,Si=1,Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "PINBBLBD": {
      "Code": "PINBBLBD",
      "FlavorCode": "BBOWL",
      "ImageCode": "PINBBLBD",
      "Local": false,
      "Name": "Build your Own BreadBowl Pasta",
      "Price": "8.99",
      "ProductCode": "S_BUILD",
      "SizeCode": "",
      "Tags": {
        "SauceRequired": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "9.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "9.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "PINBBLCA": {
      "Code": "PINBBLCA",
      "FlavorCode": "BBOWL",
      "ImageCode": "PINBBLCA",
      "Local": false,
      "Name": "Chicken Alfredo BreadBowl Pasta",
      "Price": "8.99",
      "ProductCode": "S_ALFR",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "Du=1,Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "12.99",
        "Price1-0": "8.99",
        "Price1-3": "11.99",
        "Price2-3": "11.99",
        "Price1-4": "12.99",
        "Price2-2": "10.99",
        "Price1-1": "9.99",
        "Price2-1": "9.99",
        "Price1-2": "10.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "PINBBLCC": {
      "Code": "PINBBLCC",
      "FlavorCode": "BBOWL",
      "ImageCode": "PINBBLCC",
      "Local": false,
      "Name": "Chicken Carbonara BreadBowl Pasta",
      "Price": "8.99",
      "ProductCode": "S_CARB",
      "SizeCode": "",
      "Tags": {
        "MaxOptionQty": "4",
        "DefaultSides": "",
        "DefaultToppings": "M=1,O=1,Du=1,K=1,Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "12.99",
        "Price1-0": "8.99",
        "Price1-3": "11.99",
        "Price2-3": "11.99",
        "Price1-4": "12.99",
        "Price2-2": "10.99",
        "Price1-1": "9.99",
        "Price2-1": "9.99",
        "Price1-2": "10.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "PINBBLMM": {
      "Code": "PINBBLMM",
      "FlavorCode": "BBOWL",
      "ImageCode": "PINBBLMM",
      "Local": false,
      "Name": "Italian Sausage Marinara BreadBowl Pasta",
      "Price": "8.99",
      "ProductCode": "S_MARIN",
      "SizeCode": "",
      "Tags": {
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "S=1,Cp=1,Xm=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "12.99",
        "Price1-0": "8.99",
        "Price1-3": "11.99",
        "Price2-3": "11.99",
        "Price1-4": "12.99",
        "Price2-2": "10.99",
        "Price1-1": "9.99",
        "Price2-1": "9.99",
        "Price1-2": "10.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "PINBBLPP": {
      "Code": "PINBBLPP",
      "FlavorCode": "BBOWL",
      "ImageCode": "PINBBLPP",
      "Local": false,
      "Name": "Pasta Primavera BreadBowl",
      "Price": "8.99",
      "ProductCode": "S_PRIM",
      "SizeCode": "",
      "Tags": {
        "MaxOptionQty": "4",
        "DefaultSides": "",
        "DefaultToppings": "M=1,O=1,Td=1,Si=1,Xf=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "12.99",
        "Price1-0": "8.99",
        "Price1-3": "11.99",
        "Price2-3": "11.99",
        "Price1-4": "12.99",
        "Price2-2": "10.99",
        "Price1-1": "9.99",
        "Price2-1": "9.99",
        "Price1-2": "10.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "10SCDELUX": {
      "Code": "10SCDELUX",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "10SCDELUX",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Deluxe",
      "Price": "12.99",
      "ProductCode": "S_DX",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "10SCMEATZA": {
      "Code": "10SCMEATZA",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "10SCMEATZA",
      "Local": false,
      "Name": "Small (10\") Hand Tossed MeatZZa",
      "Price": "12.99",
      "ProductCode": "S_MX",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IREBP": {
      "Code": "P10IREBP",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IREBP",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Buffalo Chicken",
      "Price": "12.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IRECK": {
      "Code": "P10IRECK",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IRECK",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Memphis BBQ Chicken ",
      "Price": "12.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IRECR": {
      "Code": "P10IRECR",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IRECR",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Cali Chicken Bacon Ranch",
      "Price": "12.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IRECZ": {
      "Code": "P10IRECZ",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IRECZ",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Wisconsin 6 Cheese Pizza",
      "Price": "12.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IREPH": {
      "Code": "P10IREPH",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IREPH",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Philly Cheese Steak",
      "Price": "12.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IREPV": {
      "Code": "P10IREPV",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IREPV",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Pacific Veggie",
      "Price": "12.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "10SCPFEAST": {
      "Code": "10SCPFEAST",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "10SCPFEAST",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Ultimate Pepperoni",
      "Price": "12.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IREUH": {
      "Code": "P10IREUH",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IREUH",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Honolulu Hawaiian",
      "Price": "12.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "10SCREEN": {
      "Code": "10SCREEN",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "10SCREEN",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Pizza",
      "Price": "9.49",
      "ProductCode": "S_PIZZA",
      "SizeCode": "10",
      "Tags": {
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "15.45",
        "Price1-0": "9.49",
        "Price1-3": "13.96",
        "Price2-3": "13.96",
        "Price1-4": "15.45",
        "Price2-2": "12.47",
        "Price1-1": "10.98",
        "Price2-1": "10.98",
        "Price1-2": "12.47",
        "Price2-0": "9.49"
      },
      "Surcharge": "0"
    },
    "10SCEXTRAV": {
      "Code": "10SCEXTRAV",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "10SCEXTRAV",
      "Local": false,
      "Name": "Small (10\") Hand Tossed ExtravaganZZa ",
      "Price": "12.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "12SCDELUX": {
      "Code": "12SCDELUX",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "12SCDELUX",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Deluxe",
      "Price": "14.99",
      "ProductCode": "S_DX",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "12SCMEATZA": {
      "Code": "12SCMEATZA",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "12SCMEATZA",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed MeatZZa",
      "Price": "14.99",
      "ProductCode": "S_MX",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IREBP": {
      "Code": "P12IREBP",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IREBP",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Buffalo Chicken",
      "Price": "14.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IRECK": {
      "Code": "P12IRECK",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IRECK",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Memphis BBQ Chicken ",
      "Price": "14.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IRECR": {
      "Code": "P12IRECR",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IRECR",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Cali Chicken Bacon Ranch",
      "Price": "14.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IRECZ": {
      "Code": "P12IRECZ",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IRECZ",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Wisconsin 6 Cheese Pizza",
      "Price": "14.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IREPH": {
      "Code": "P12IREPH",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IREPH",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Philly Cheese Steak",
      "Price": "14.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
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
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "12SCPFEAST": {
      "Code": "12SCPFEAST",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "12SCPFEAST",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Ultimate Pepperoni",
      "Price": "14.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IREUH": {
      "Code": "P12IREUH",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IREUH",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Honolulu Hawaiian",
      "Price": "14.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "12SCREEN": {
      "Code": "12SCREEN",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "12SCREEN",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Pizza",
      "Price": "11.99",
      "ProductCode": "S_PIZZA",
      "SizeCode": "12",
      "Tags": {
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.75",
        "Price1-0": "11.99",
        "Price1-3": "17.06",
        "Price2-3": "17.06",
        "Price1-4": "18.75",
        "Price2-2": "15.37",
        "Price1-1": "13.68",
        "Price2-1": "13.68",
        "Price1-2": "15.37",
        "Price2-0": "11.99"
      },
      "Surcharge": "0"
    },
    "12SCEXTRAV": {
      "Code": "12SCEXTRAV",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "12SCEXTRAV",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed ExtravaganZZa ",
      "Price": "14.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "12TDELUX": {
      "Code": "12TDELUX",
      "FlavorCode": "THIN",
      "ImageCode": "12TDELUX",
      "Local": false,
      "Name": "Medium (12\") Thin Deluxe",
      "Price": "14.99",
      "ProductCode": "S_DX",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "12TMEATZA": {
      "Code": "12TMEATZA",
      "FlavorCode": "THIN",
      "ImageCode": "12TMEATZA",
      "Local": false,
      "Name": "Medium (12\") Thin MeatZZa",
      "Price": "14.99",
      "ProductCode": "S_MX",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHBP": {
      "Code": "P12ITHBP",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHBP",
      "Local": false,
      "Name": "Medium (12\") Thin Crust Buffalo Chicken",
      "Price": "14.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHCK": {
      "Code": "P12ITHCK",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHCK",
      "Local": false,
      "Name": "Medium (12\") Thin Crust Memphis BBQ Chicken ",
      "Price": "14.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHCR": {
      "Code": "P12ITHCR",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHCR",
      "Local": false,
      "Name": "Medium (12\") Thin Crust Cali Chicken Bacon Ranch",
      "Price": "14.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHCZ": {
      "Code": "P12ITHCZ",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHCZ",
      "Local": false,
      "Name": "Medium (12\") Thin Wisconsin 6 Cheese Pizza",
      "Price": "14.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHPH": {
      "Code": "P12ITHPH",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHPH",
      "Local": false,
      "Name": "Medium (12\") Thin Philly Cheese Steak",
      "Price": "14.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHPV": {
      "Code": "P12ITHPV",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHPV",
      "Local": false,
      "Name": "Medium (12\") Thin Crust Pacific Veggie",
      "Price": "14.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "12TPFEAST": {
      "Code": "12TPFEAST",
      "FlavorCode": "THIN",
      "ImageCode": "12TPFEAST",
      "Local": false,
      "Name": "Medium (12\") Thin Ultimate Pepperoni",
      "Price": "14.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHUH": {
      "Code": "P12ITHUH",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHUH",
      "Local": false,
      "Name": "Medium (12\") Thin Crust Honolulu Hawaiian",
      "Price": "14.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "12THIN": {
      "Code": "12THIN",
      "FlavorCode": "THIN",
      "ImageCode": "12THIN",
      "Local": false,
      "Name": "Medium (12\") Thin Pizza",
      "Price": "11.99",
      "ProductCode": "S_PIZZA",
      "SizeCode": "12",
      "Tags": {
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.75",
        "Price1-0": "11.99",
        "Price1-3": "17.06",
        "Price2-3": "17.06",
        "Price1-4": "18.75",
        "Price2-2": "15.37",
        "Price1-1": "13.68",
        "Price2-1": "13.68",
        "Price1-2": "15.37",
        "Price2-0": "11.99"
      },
      "Surcharge": "0"
    },
    "12TEXTRAV": {
      "Code": "12TEXTRAV",
      "FlavorCode": "THIN",
      "ImageCode": "12TEXTRAV",
      "Local": false,
      "Name": "Medium (12\") Thin ExtravaganZZa ",
      "Price": "14.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "PBKIREDX": {
      "Code": "PBKIREDX",
      "FlavorCode": "BK",
      "ImageCode": "PBKIREDX",
      "Local": false,
      "Name": "Large (14\") Brooklyn Deluxe",
      "Price": "17.99",
      "ProductCode": "S_DX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "PBKIREMX": {
      "Code": "PBKIREMX",
      "FlavorCode": "BK",
      "ImageCode": "PBKIREMX",
      "Local": false,
      "Name": "Large (14\") Brooklyn MeatZZa",
      "Price": "17.99",
      "ProductCode": "S_MX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IBKBP": {
      "Code": "P14IBKBP",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKBP",
      "Local": false,
      "Name": "Large (14\") Brooklyn Buffalo Chicken",
      "Price": "17.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IBKCK": {
      "Code": "P14IBKCK",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKCK",
      "Local": false,
      "Name": "Large (14\") Brooklyn Memphis BBQ Chicken ",
      "Price": "17.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IBKCR": {
      "Code": "P14IBKCR",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKCR",
      "Local": false,
      "Name": "Large (14\") Brooklyn Cali Chicken Bacon Ranch",
      "Price": "17.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IBKCZ": {
      "Code": "P14IBKCZ",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKCZ",
      "Local": false,
      "Name": "Large (14\") Brooklyn Wisconsin 6 Cheese Pizza",
      "Price": "17.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "14",
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
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IBKPH": {
      "Code": "P14IBKPH",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKPH",
      "Local": false,
      "Name": "Large (14\") Brooklyn Philly Cheese Steak",
      "Price": "17.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IBKPV": {
      "Code": "P14IBKPV",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKPV",
      "Local": false,
      "Name": "Large (14\") Brooklyn Pacific Veggie",
      "Price": "17.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "PBKIREPX": {
      "Code": "PBKIREPX",
      "FlavorCode": "BK",
      "ImageCode": "PBKIREPX",
      "Local": false,
      "Name": "Large (14\") Brooklyn Ultimate Pepperoni",
      "Price": "17.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "PBKIREZA": {
      "Code": "PBKIREZA",
      "FlavorCode": "BK",
      "ImageCode": "PBKIREZA",
      "Local": false,
      "Name": "Large (14\") Brooklyn Pizza",
      "Price": "13.99",
      "ProductCode": "S_PIZZA",
      "SizeCode": "14",
      "Tags": {
        "sodiumWarningEnabled": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.55",
        "Price1-0": "13.99",
        "Price1-3": "19.66",
        "Price2-3": "19.66",
        "Price1-4": "21.55",
        "Price2-2": "17.77",
        "Price1-1": "15.88",
        "Price2-1": "15.88",
        "Price1-2": "17.77",
        "Price2-0": "13.99"
      },
      "Surcharge": "0"
    },
    "PBKIREZZ": {
      "Code": "PBKIREZZ",
      "FlavorCode": "BK",
      "ImageCode": "PBKIREZZ",
      "Local": false,
      "Name": "Large (14\") Brooklyn ExtravaganZZa ",
      "Price": "17.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "14SCDELUX": {
      "Code": "14SCDELUX",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "14SCDELUX",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Deluxe",
      "Price": "17.99",
      "ProductCode": "S_DX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "14SCMEATZA": {
      "Code": "14SCMEATZA",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "14SCMEATZA",
      "Local": false,
      "Name": "Large (14\") Hand Tossed MeatZZa",
      "Price": "17.99",
      "ProductCode": "S_MX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IREBP": {
      "Code": "P14IREBP",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IREBP",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Buffalo Chicken",
      "Price": "17.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IRECK": {
      "Code": "P14IRECK",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IRECK",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Memphis BBQ Chicken ",
      "Price": "17.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IRECR": {
      "Code": "P14IRECR",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IRECR",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Cali Chicken Bacon Ranch",
      "Price": "17.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IRECZ": {
      "Code": "P14IRECZ",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IRECZ",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Wisconsin 6 Cheese Pizza",
      "Price": "17.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IREPH": {
      "Code": "P14IREPH",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IREPH",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Philly Cheese Steak",
      "Price": "17.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IREPV": {
      "Code": "P14IREPV",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IREPV",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Pacific Veggie",
      "Price": "17.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "14SCPFEAST": {
      "Code": "14SCPFEAST",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "14SCPFEAST",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Ultimate Pepperoni",
      "Price": "17.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IREUH": {
      "Code": "P14IREUH",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IREUH",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Honolulu Hawaiian",
      "Price": "17.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
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
        "Price1-3": "19.66",
        "Price2-3": "19.66",
        "Price1-4": "21.55",
        "Price2-2": "17.77",
        "Price1-1": "15.88",
        "Price2-1": "15.88",
        "Price1-2": "17.77",
        "Price2-0": "13.99"
      },
      "Surcharge": "0"
    },
    "14SCEXTRAV": {
      "Code": "14SCEXTRAV",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "14SCEXTRAV",
      "Local": false,
      "Name": "Large (14\") Hand Tossed ExtravaganZZa ",
      "Price": "17.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "14TDELUX": {
      "Code": "14TDELUX",
      "FlavorCode": "THIN",
      "ImageCode": "14TDELUX",
      "Local": false,
      "Name": "Large (14\") Thin Deluxe",
      "Price": "17.99",
      "ProductCode": "S_DX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "14TMEATZA": {
      "Code": "14TMEATZA",
      "FlavorCode": "THIN",
      "ImageCode": "14TMEATZA",
      "Local": false,
      "Name": "Large (14\") Thin MeatZZa",
      "Price": "17.99",
      "ProductCode": "S_MX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHBP": {
      "Code": "P14ITHBP",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHBP",
      "Local": false,
      "Name": "Large (14\") Thin Crust Buffalo Chicken",
      "Price": "17.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHCK": {
      "Code": "P14ITHCK",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHCK",
      "Local": false,
      "Name": "Large (14\") Thin Crust Memphis BBQ Chicken ",
      "Price": "17.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHCZ": {
      "Code": "P14ITHCZ",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHCZ",
      "Local": false,
      "Name": "Large (14\") Thin Wisconsin 6 Cheese Pizza",
      "Price": "17.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHPH": {
      "Code": "P14ITHPH",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHPH",
      "Local": false,
      "Name": "Large (14\") Thin Philly Cheese Steak",
      "Price": "17.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHPV": {
      "Code": "P14ITHPV",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHPV",
      "Local": false,
      "Name": "Large (14\") Thin Crust Pacific Veggie",
      "Price": "17.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "14TPFEAST": {
      "Code": "14TPFEAST",
      "FlavorCode": "THIN",
      "ImageCode": "14TPFEAST",
      "Local": false,
      "Name": "Large (14\") Thin Ultimate Pepperoni",
      "Price": "17.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHUH": {
      "Code": "P14ITHUH",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHUH",
      "Local": false,
      "Name": "Large (14\") Thin Crust Honolulu Hawaiian",
      "Price": "17.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "14THIN": {
      "Code": "14THIN",
      "FlavorCode": "THIN",
      "ImageCode": "14THIN",
      "Local": false,
      "Name": "Large (14\") Thin Pizza",
      "Price": "13.99",
      "ProductCode": "S_PIZZA",
      "SizeCode": "14",
      "Tags": {
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.55",
        "Price1-0": "13.99",
        "Price1-3": "19.66",
        "Price2-3": "19.66",
        "Price1-4": "21.55",
        "Price2-2": "17.77",
        "Price1-1": "15.88",
        "Price2-1": "15.88",
        "Price1-2": "17.77",
        "Price2-0": "13.99"
      },
      "Surcharge": "0"
    },
    "14TEXTRAV": {
      "Code": "14TEXTRAV",
      "FlavorCode": "THIN",
      "ImageCode": "14TEXTRAV",
      "Local": false,
      "Name": "Large (14\") Thin ExtravaganZZa ",
      "Price": "17.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P16IBKDX": {
      "Code": "P16IBKDX",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKDX",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Deluxe",
      "Price": "19.99",
      "ProductCode": "S_DX",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKMX": {
      "Code": "P16IBKMX",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKMX",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn MeatZZa",
      "Price": "19.99",
      "ProductCode": "S_MX",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKBP": {
      "Code": "P16IBKBP",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKBP",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Buffalo Chicken",
      "Price": "19.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKCK": {
      "Code": "P16IBKCK",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKCK",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Memphis BBQ Chicken ",
      "Price": "19.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKCR": {
      "Code": "P16IBKCR",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKCR",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Cali Chicken Bacon Ranch",
      "Price": "19.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
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
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKPH": {
      "Code": "P16IBKPH",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKPH",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Philly Cheese Steak",
      "Price": "19.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKPV": {
      "Code": "P16IBKPV",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKPV",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Pacific Veggie",
      "Price": "19.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKPX": {
      "Code": "P16IBKPX",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKPX",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Ultimate Pepperoni",
      "Price": "19.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKUH": {
      "Code": "P16IBKUH",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKUH",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Honolulu Hawaiian",
      "Price": "19.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P16IBKZA": {
      "Code": "P16IBKZA",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKZA",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Pizza",
      "Price": "15.49",
      "ProductCode": "S_PIZZA",
      "SizeCode": "16",
      "Tags": {
        "sodiumWarningEnabled": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "23.45",
        "Price1-0": "15.49",
        "Price1-3": "21.46",
        "Price2-3": "21.46",
        "Price1-4": "23.45",
        "Price2-2": "19.47",
        "Price1-1": "17.48",
        "Price2-1": "17.48",
        "Price1-2": "19.47",
        "Price2-0": "15.49"
      },
      "Surcharge": "0"
    },
    "P16IBKZZ": {
      "Code": "P16IBKZZ",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKZZ",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn ExtravaganZZa ",
      "Price": "19.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P10IGFDX": {
      "Code": "P10IGFDX",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFDX",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Deluxe",
      "Price": "12.99",
      "ProductCode": "S_DX",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFMX": {
      "Code": "P10IGFMX",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFMX",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust MeatZZa",
      "Price": "12.99",
      "ProductCode": "S_MX",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFBP": {
      "Code": "P10IGFBP",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFBP",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Buffalo Chicken",
      "Price": "12.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFCK": {
      "Code": "P10IGFCK",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFCK",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Memphis BBQ Chicken ",
      "Price": "12.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFCR": {
      "Code": "P10IGFCR",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFCR",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Cali Chicken Bacon Ranch",
      "Price": "12.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFCZ": {
      "Code": "P10IGFCZ",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFCZ",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Wisconsin 6 Cheese Pizza",
      "Price": "12.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFPH": {
      "Code": "P10IGFPH",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFPH",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Philly Cheese Steak",
      "Price": "12.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFPV": {
      "Code": "P10IGFPV",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFPV",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Pacific Veggie",
      "Price": "12.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFPX": {
      "Code": "P10IGFPX",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFPX",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Ultimate Pepperoni",
      "Price": "12.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFUH": {
      "Code": "P10IGFUH",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFUH",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Honolulu Hawaiian",
      "Price": "12.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P10IGFZA": {
      "Code": "P10IGFZA",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFZA",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Pizza",
      "Price": "9.49",
      "ProductCode": "S_PIZZA",
      "SizeCode": "10",
      "Tags": {
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "15.45",
        "Price1-0": "9.49",
        "Price1-3": "13.96",
        "Price2-3": "13.96",
        "Price1-4": "15.45",
        "Price2-2": "12.47",
        "Price1-1": "10.98",
        "Price2-1": "10.98",
        "Price1-2": "12.47",
        "Price2-0": "9.49"
      },
      "Surcharge": "3"
    },
    "P10IGFZZ": {
      "Code": "P10IGFZZ",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFZZ",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust ExtravaganZZa ",
      "Price": "12.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P12IPADX": {
      "Code": "P12IPADX",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPADX",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Deluxe",
      "Price": "14.99",
      "ProductCode": "S_DX",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,P=1,S=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPAMX": {
      "Code": "P12IPAMX",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPAMX",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan MeatZZa",
      "Price": "14.99",
      "ProductCode": "S_MX",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,Cp=1,P=1,H=1,B=1,S=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPABP": {
      "Code": "P12IPABP",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPABP",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Buffalo Chicken",
      "Price": "14.99",
      "ProductCode": "S_PIZBP",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Ht=1,Cp=1,Ac=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPACK": {
      "Code": "P12IPACK",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPACK",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Memphis BBQ Chicken ",
      "Price": "14.99",
      "ProductCode": "S_PIZCK",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Bq=1,C=1,Cp=1,E=1,Du=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPACR": {
      "Code": "P12IPACR",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPACR",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Cali Chicken Bacon Ranch",
      "Price": "14.99",
      "ProductCode": "S_PIZCR",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Rd=1,C=1,Cp=1,Du=1,K=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPACZ": {
      "Code": "P12IPACZ",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPACZ",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Wisconsin 6 Cheese Pizza",
      "Price": "14.99",
      "ProductCode": "S_PIZCZ",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,E=1,Fe=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPAPH": {
      "Code": "P12IPAPH",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPAPH",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Philly Cheese Steak",
      "Price": "14.99",
      "ProductCode": "S_PIZPH",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,Pm=1,M=1,O=1,G=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPAPV": {
      "Code": "P12IPAPV",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPAPV",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Pacific Veggie",
      "Price": "14.99",
      "ProductCode": "S_PIZPV",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,Fe=1,Si=1,M=1,O=1,R=1,Td=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPAPX": {
      "Code": "P12IPAPX",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPAPX",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Ultimate Pepperoni",
      "Price": "14.99",
      "ProductCode": "S_PIZPX",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cs=1,Cp=1,P=1.5"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPAUH": {
      "Code": "P12IPAUH",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPAUH",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Honolulu Hawaiian",
      "Price": "14.99",
      "ProductCode": "S_PIZUH",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1,H=1,K=1,N=1,Rr=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPAZA": {
      "Code": "P12IPAZA",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPAZA",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Pizza",
      "Price": "11.99",
      "ProductCode": "S_PIZZA",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "WarnAfterOptionQty": "5",
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "sodiumWarningEnabled": true,
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Cp=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.75",
        "Price1-0": "11.99",
        "Price1-3": "17.06",
        "Price2-3": "17.06",
        "Price1-4": "18.75",
        "Price2-2": "15.37",
        "Price1-1": "13.68",
        "Price2-1": "13.68",
        "Price1-2": "15.37",
        "Price2-0": "11.99"
      },
      "Surcharge": "1.5"
    },
    "P12IPAZZ": {
      "Code": "P12IPAZZ",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPAZZ",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan ExtravaganZZa ",
      "Price": "14.99",
      "ProductCode": "S_ZZ",
      "SizeCode": "12",
      "Tags": {
        "HideOption": "Cp",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1.5,Cp=1,P=1,H=1,B=1,S=1,M=1,O=1,G=1,R=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P10IRESPF": {
      "Code": "P10IRESPF",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IRESPF",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Spinach & Feta",
      "Price": "12.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IGFSPF": {
      "Code": "P10IGFSPF",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFSPF",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Spinach & Feta",
      "Price": "12.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "10",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P12IRESPF": {
      "Code": "P12IRESPF",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IRESPF",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Spinach & Feta",
      "Price": "14.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHSPF": {
      "Code": "P12ITHSPF",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHSPF",
      "Local": false,
      "Name": "Medium (12\") Thin Spinach & Feta",
      "Price": "14.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IPASPF": {
      "Code": "P12IPASPF",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPASPF",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Spinach & Feta",
      "Price": "14.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "12",
      "Tags": {
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P14IBKSPF": {
      "Code": "P14IBKSPF",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKSPF",
      "Local": false,
      "Name": "Large (14\") Brooklyn Spinach & Feta",
      "Price": "17.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IRESPF": {
      "Code": "P14IRESPF",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IRESPF",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Spinach & Feta",
      "Price": "17.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHSPF": {
      "Code": "P14ITHSPF",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHSPF",
      "Local": false,
      "Name": "Large (14\") Thin Spinach & Feta",
      "Price": "17.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "14",
      "Tags": {
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P16IBKSPF": {
      "Code": "P16IBKSPF",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKSPF",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Spinach & Feta",
      "Price": "19.99",
      "ProductCode": "S_PISPF",
      "SizeCode": "16",
      "Tags": {
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Xf=1,C=1,Cs=1,Cp=1,Fe=1,Si=1,O=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P10IRETC": {
      "Code": "P10IRETC",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IRETC",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Chicken Taco",
      "Price": "12.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "10",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IGFTC": {
      "Code": "P10IGFTC",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFTC",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Chicken Taco",
      "Price": "12.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "10",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P12IRETC": {
      "Code": "P12IRETC",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IRETC",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Chicken Taco",
      "Price": "14.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "12",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHTC": {
      "Code": "P12ITHTC",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHTC",
      "Local": false,
      "Name": "Medium (12\") Thin Chicken Taco",
      "Price": "14.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "12",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IPATC": {
      "Code": "P12IPATC",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPATC",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Chicken Taco",
      "Price": "14.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "12",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Cp",
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P14IBKTC": {
      "Code": "P14IBKTC",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKTC",
      "Local": false,
      "Name": "Large (14\") Brooklyn Chicken Taco",
      "Price": "17.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "14",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IRETC": {
      "Code": "P14IRETC",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IRETC",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Chicken Taco",
      "Price": "17.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "14",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHTC": {
      "Code": "P14ITHTC",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHTC",
      "Local": false,
      "Name": "Large (14\") Thin Chicken Taco",
      "Price": "17.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "14",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P16IBKTC": {
      "Code": "P16IBKTC",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKTC",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Chicken Taco",
      "Price": "19.99",
      "ProductCode": "S_PZTACO",
      "SizeCode": "16",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Cp",
        "DisabledToppings": "C",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,Du=1,O=1,G=1,Td=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "P10IRECHB": {
      "Code": "P10IRECHB",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P10IRECHB",
      "Local": false,
      "Name": "Small (10\") Hand Tossed Cheeseburger",
      "Price": "12.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "10",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Km",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "0"
    },
    "P10IGFCHB": {
      "Code": "P10IGFCHB",
      "FlavorCode": "GLUTENF",
      "ImageCode": "P10IGFCHB",
      "Local": false,
      "Name": "Small (10\") Gluten Free Crust Cheeseburger",
      "Price": "12.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "10",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Km",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "18.95",
        "Price1-0": "12.99",
        "Price1-3": "17.46",
        "Price2-3": "17.46",
        "Price1-4": "18.95",
        "Price2-2": "15.97",
        "Price1-1": "14.48",
        "Price2-1": "14.48",
        "Price1-2": "15.97",
        "Price2-0": "12.99"
      },
      "Surcharge": "3"
    },
    "P12IRECHB": {
      "Code": "P12IRECHB",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P12IRECHB",
      "Local": false,
      "Name": "Medium (12\") Hand Tossed Cheeseburger",
      "Price": "14.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "12",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Km",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12ITHCHB": {
      "Code": "P12ITHCHB",
      "FlavorCode": "THIN",
      "ImageCode": "P12ITHCHB",
      "Local": false,
      "Name": "Medium (12\") Thin Cheeseburger",
      "Price": "14.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "12",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Km",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "0"
    },
    "P12IPACHB": {
      "Code": "P12IPACHB",
      "FlavorCode": "NPAN",
      "ImageCode": "P12IPACHB",
      "Local": false,
      "Name": "Medium (12\") Handmade Pan Cheeseburger",
      "Price": "14.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "12",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "Promotion": "PAN",
        "DisabledToppings": "C",
        "HideOption": "Km:Cp",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "21.75",
        "Price1-0": "14.99",
        "Price1-3": "20.06",
        "Price2-3": "20.06",
        "Price1-4": "21.75",
        "Price2-2": "18.37",
        "Price1-1": "16.68",
        "Price2-1": "16.68",
        "Price1-2": "18.37",
        "Price2-0": "14.99"
      },
      "Surcharge": "1.5"
    },
    "P14IBKCHB": {
      "Code": "P14IBKCHB",
      "FlavorCode": "BK",
      "ImageCode": "P14IBKCHB",
      "Local": false,
      "Name": "Large (14\") Brooklyn Cheeseburger",
      "Price": "17.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "14",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DisabledToppings": "C",
        "HideOption": "Km:Cp",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14IRECHB": {
      "Code": "P14IRECHB",
      "FlavorCode": "HANDTOSS",
      "ImageCode": "P14IRECHB",
      "Local": false,
      "Name": "Large (14\") Hand Tossed Cheeseburger",
      "Price": "17.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "14",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Km",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT,GO,NGO",
      "DefaultCookingInstructions": "NB,PIECT,GO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P14ITHCHB": {
      "Code": "P14ITHCHB",
      "FlavorCode": "THIN",
      "ImageCode": "P14ITHCHB",
      "Local": false,
      "Name": "Large (14\") Thin Cheeseburger",
      "Price": "17.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "14",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "HideOption": "Km",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "PIECT,SQCT,UNCT,RGO,NOOR",
      "DefaultCookingInstructions": "SQCT,RGO",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "25.55",
        "Price1-0": "17.99",
        "Price1-3": "23.66",
        "Price2-3": "23.66",
        "Price1-4": "25.55",
        "Price2-2": "21.77",
        "Price1-1": "19.88",
        "Price2-1": "19.88",
        "Price1-2": "21.77",
        "Price2-0": "17.99"
      },
      "Surcharge": "0"
    },
    "P16IBKCHB": {
      "Code": "P16IBKCHB",
      "FlavorCode": "BK",
      "ImageCode": "P16IBKCHB",
      "Local": true,
      "Name": "X-Large (16\") Brooklyn Cheeseburger",
      "Price": "19.99",
      "ProductCode": "S_PZBRGR",
      "SizeCode": "16",
      "Tags": {
        "EffectiveOn": "2020-08-24",
        "Specialty": true,
        "DisabledToppings": "C",
        "HideOption": "Km:Cp",
        "DefaultSides": "",
        "DefaultToppings": "Cp=1,Ac=1,E=1,B=1,O=1,Td=1,Km=1"
      },
      "AllowedCookingInstructions": "WD,NB,PIECT,SQCT,UNCT",
      "DefaultCookingInstructions": "NB,PIECT",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "27.95",
        "Price1-0": "19.99",
        "Price1-3": "25.96",
        "Price2-3": "25.96",
        "Price1-4": "27.95",
        "Price2-2": "23.97",
        "Price1-1": "21.98",
        "Price2-1": "21.98",
        "Price1-2": "23.97",
        "Price2-0": "19.99"
      },
      "Surcharge": "0"
    },
    "PSANSACB": {
      "Code": "PSANSACB",
      "FlavorCode": "",
      "ImageCode": "PSANSACB",
      "Local": false,
      "Name": "Chicken Bacon Ranch Sandwich",
      "Price": "6.99",
      "ProductCode": "S_CHIKK",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "C=1,Du=1,K=1,Pv=1,Rd=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PSANSACP": {
      "Code": "PSANSACP",
      "FlavorCode": "",
      "ImageCode": "PSANSACP",
      "Local": false,
      "Name": "Chicken Parm Sandwich",
      "Price": "6.99",
      "ProductCode": "S_CHIKP",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "X=1,C=1,Du=1,Cs=1,Pv=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PSANSAIT": {
      "Code": "PSANSAIT",
      "FlavorCode": "",
      "ImageCode": "PSANSAIT",
      "Local": false,
      "Name": "Italian Sandwich",
      "Price": "6.99",
      "ProductCode": "S_ITAL",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "C=1,P=1,H=1,O=1,G=1,Z=1,Sa=1,Pv=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PSANSAPH": {
      "Code": "PSANSAPH",
      "FlavorCode": "",
      "ImageCode": "PSANSAPH",
      "Local": false,
      "Name": "Philly Cheese Steak",
      "Price": "6.99",
      "ProductCode": "S_PHIL",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "M=1,O=1,G=1,Pm=1,Ac=1,Pv=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PSANSABC": {
      "Code": "PSANSABC",
      "FlavorCode": "",
      "ImageCode": "PSANSABC",
      "Local": false,
      "Name": "Buffalo Chicken Sandwich",
      "Price": "6.99",
      "ProductCode": "S_BUFC",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "C=1,O=1,Du=1,E=1,Ht=1,Pv=1,Bd=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PSANSACH": {
      "Code": "PSANSACH",
      "FlavorCode": "",
      "ImageCode": "PSANSACH",
      "Local": false,
      "Name": "Chicken Habanero Sandwich",
      "Price": "6.99",
      "ProductCode": "S_CHHB",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "C=1,Du=1,N=1,J=1,E=1,Pv=1,Mh=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "PSANSAMV": {
      "Code": "PSANSAMV",
      "FlavorCode": "",
      "ImageCode": "PSANSAMV",
      "Local": false,
      "Name": "Mediterranean Veggie Sandwich",
      "Price": "6.99",
      "ProductCode": "S_MEDV",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": "O=1,Td=1,Rr=1,Si=1,Fe=1,Z=1,Ac=1,Pv=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "10.99",
        "Price1-0": "6.99",
        "Price1-3": "9.99",
        "Price2-3": "9.99",
        "Price1-4": "10.99",
        "Price2-2": "8.99",
        "Price1-1": "7.99",
        "Price2-1": "7.99",
        "Price1-2": "8.99",
        "Price2-0": "6.99"
      },
      "Surcharge": "0"
    },
    "SIDBAN": {
      "Code": "SIDBAN",
      "FlavorCode": "",
      "ImageCode": "SIDBAN",
      "Local": true,
      "Name": "Side Banana Peppers",
      "Price": "0.5",
      "ProductCode": "F_SIDBAN",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.5",
        "Price1-0": "0.5",
        "Price1-3": "0.5",
        "Price2-3": "0.5",
        "Price1-4": "0.5",
        "Price2-2": "0.5",
        "Price1-1": "0.5",
        "Price2-1": "0.5",
        "Price1-2": "0.5",
        "Price2-0": "0.5"
      },
      "Surcharge": "0"
    },
    "SIDEJAL": {
      "Code": "SIDEJAL",
      "FlavorCode": "",
      "ImageCode": "SIDEJAL",
      "Local": true,
      "Name": "Side Jalapenos",
      "Price": "0.5",
      "ProductCode": "F_SIDJAL",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.5",
        "Price1-0": "0.5",
        "Price1-3": "0.5",
        "Price2-3": "0.5",
        "Price1-4": "0.5",
        "Price2-2": "0.5",
        "Price1-1": "0.5",
        "Price2-1": "0.5",
        "Price1-2": "0.5",
        "Price2-0": "0.5"
      },
      "Surcharge": "0"
    },
    "PARMCHEESE": {
      "Code": "PARMCHEESE",
      "FlavorCode": "",
      "ImageCode": "PARMCHEESE",
      "Local": true,
      "Name": "Parmesan Cheese Packets",
      "Price": "0.25",
      "ProductCode": "F_SIDPAR",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.25",
        "Price1-0": "0.25",
        "Price1-3": "0.25",
        "Price2-3": "0.25",
        "Price1-4": "0.25",
        "Price2-2": "0.25",
        "Price1-1": "0.25",
        "Price2-1": "0.25",
        "Price1-2": "0.25",
        "Price2-0": "0.25"
      },
      "Surcharge": "0"
    },
    "REDPEPPER": {
      "Code": "REDPEPPER",
      "FlavorCode": "",
      "ImageCode": "REDPEPPER",
      "Local": true,
      "Name": "Red Pepper Packets",
      "Price": "0.25",
      "ProductCode": "F_SIDRED",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.25",
        "Price1-0": "0.25",
        "Price1-3": "0.25",
        "Price2-3": "0.25",
        "Price1-4": "0.25",
        "Price2-2": "0.25",
        "Price1-1": "0.25",
        "Price2-1": "0.25",
        "Price1-2": "0.25",
        "Price2-0": "0.25"
      },
      "Surcharge": "0"
    },
    "AGCAESAR": {
      "Code": "AGCAESAR",
      "FlavorCode": "",
      "ImageCode": "AGCAESAR",
      "Local": false,
      "Name": "Caesar Dressing",
      "Price": "0.75",
      "ProductCode": "F_CAESAR",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "AGITAL": {
      "Code": "AGITAL",
      "FlavorCode": "",
      "ImageCode": "AGITAL",
      "Local": true,
      "Name": "Italian Dressing",
      "Price": "0.75",
      "ProductCode": "F_ITAL",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "AGRANCH": {
      "Code": "AGRANCH",
      "FlavorCode": "",
      "ImageCode": "AGRANCH",
      "Local": false,
      "Name": "Ranch Dressing",
      "Price": "0.75",
      "ProductCode": "F_RANCHPK",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "HOTSAUCE": {
      "Code": "HOTSAUCE",
      "FlavorCode": "",
      "ImageCode": "HOTSAUCE",
      "Local": false,
      "Name": "Hot Buffalo Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_HOTCUP",
      "SizeCode": "",
      "Tags": {
        "BONELESS": true,
        "BONEIN": true,
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "CEAHABC": {
      "Code": "CEAHABC",
      "FlavorCode": "",
      "ImageCode": "CEAHABC",
      "Local": false,
      "Name": "Sweet Mango Habanero Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_SMHAB",
      "SizeCode": "",
      "Tags": {
        "EffectiveOn": "2010-01-01",
        "BONELESS": true,
        "BONEIN": true,
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "CEABBQC": {
      "Code": "CEABBQC",
      "FlavorCode": "",
      "ImageCode": "CEABBQC",
      "Local": false,
      "Name": "Honey BBQ Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_BBQC",
      "SizeCode": "",
      "Tags": {
        "BONELESS": true,
        "BONEIN": true,
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "RANCH": {
      "Code": "RANCH",
      "FlavorCode": "",
      "ImageCode": "RANCH",
      "Local": false,
      "Name": "Ranch Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_SIDRAN",
      "SizeCode": "",
      "Tags": {
        "BONELESS": true,
        "BONEIN": true,
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "BLUECHS": {
      "Code": "BLUECHS",
      "FlavorCode": "",
      "ImageCode": "BLUECHS",
      "Local": false,
      "Name": "Blue Cheese Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_Bd",
      "SizeCode": "",
      "Tags": {
        "BONELESS": true,
        "BONEIN": true,
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "GARBUTTER": {
      "Code": "GARBUTTER",
      "FlavorCode": "",
      "ImageCode": "GARBUTTER",
      "Local": false,
      "Name": "Garlic Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_SIDGAR",
      "SizeCode": "",
      "Tags": {
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "ICING": {
      "Code": "ICING",
      "FlavorCode": "",
      "ImageCode": "ICING",
      "Local": false,
      "Name": "Icing Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_SIDICE",
      "SizeCode": "",
      "Tags": {
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "MARINARA": {
      "Code": "MARINARA",
      "FlavorCode": "",
      "ImageCode": "MARINARA",
      "Local": false,
      "Name": "Marinara Sauce Dipping Cup",
      "Price": "0.75",
      "ProductCode": "F_SIDMAR",
      "SizeCode": "",
      "Tags": {
        "SideType": "DippingCup",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "STJUDE": {
      "Code": "STJUDE",
      "FlavorCode": "",
      "ImageCode": "STJUDE",
      "Local": false,
      "Name": "St. Jude Donation",
      "Price": "1",
      "ProductCode": "F_STJUDE",
      "SizeCode": "",
      "Tags": {
        "Donation": "STJUDE",
        "ExcludeFromLoyalty": true,
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "1",
        "Price1-0": "1",
        "Price1-3": "1",
        "Price2-3": "1",
        "Price1-4": "1",
        "Price2-2": "1",
        "Price1-1": "1",
        "Price2-1": "1",
        "Price1-2": "1",
        "Price2-0": "1"
      },
      "Surcharge": "0"
    },
    "STJUDE2": {
      "Code": "STJUDE2",
      "FlavorCode": "",
      "ImageCode": "STJUDE2",
      "Local": false,
      "Name": "St. Jude Donation",
      "Price": "2",
      "ProductCode": "F_STJUDE",
      "SizeCode": "",
      "Tags": {
        "Donation": "STJUDE",
        "ExcludeFromLoyalty": true,
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "2",
        "Price1-0": "2",
        "Price1-3": "2",
        "Price2-3": "2",
        "Price1-4": "2",
        "Price2-2": "2",
        "Price1-1": "2",
        "Price2-1": "2",
        "Price1-2": "2",
        "Price2-0": "2"
      },
      "Surcharge": "0"
    },
    "STJUDE5": {
      "Code": "STJUDE5",
      "FlavorCode": "",
      "ImageCode": "STJUDE5",
      "Local": false,
      "Name": "St. Jude Donation",
      "Price": "5",
      "ProductCode": "F_STJUDE",
      "SizeCode": "",
      "Tags": {
        "Donation": "STJUDE",
        "ExcludeFromLoyalty": true,
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "5",
        "Price1-0": "5",
        "Price1-3": "5",
        "Price2-3": "5",
        "Price1-4": "5",
        "Price2-2": "5",
        "Price1-1": "5",
        "Price2-1": "5",
        "Price1-2": "5",
        "Price2-0": "5"
      },
      "Surcharge": "0"
    },
    "STJUDE10": {
      "Code": "STJUDE10",
      "FlavorCode": "",
      "ImageCode": "STJUDE10",
      "Local": false,
      "Name": "St. Jude Donation",
      "Price": "10",
      "ProductCode": "F_STJUDE",
      "SizeCode": "",
      "Tags": {
        "Donation": "STJUDE",
        "ExcludeFromLoyalty": true,
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "10",
        "Price1-0": "10",
        "Price1-3": "10",
        "Price2-3": "10",
        "Price1-4": "10",
        "Price2-2": "10",
        "Price1-1": "10",
        "Price2-1": "10",
        "Price1-2": "10",
        "Price2-0": "10"
      },
      "Surcharge": "0"
    },
    "STJUDERU": {
      "Code": "STJUDERU",
      "FlavorCode": "",
      "ImageCode": "STJUDERU",
      "Local": false,
      "Name": "St. Jude Donation",
      "Price": "0",
      "ProductCode": "F_STJUDE",
      "SizeCode": "",
      "Tags": {
        "NotEditable": true,
        "Hidden": true,
        "Donation": "STJUDE",
        "ExcludeFromLoyalty": true,
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0",
        "Price1-0": "0",
        "Price1-3": "0",
        "Price2-3": "0",
        "Price1-4": "0",
        "Price2-2": "0",
        "Price1-1": "0",
        "Price2-1": "0",
        "Price1-2": "0",
        "Price2-0": "0"
      },
      "Surcharge": "0"
    },
    "CEABVI": {
      "Code": "CEABVI",
      "FlavorCode": "",
      "ImageCode": "CEABVI",
      "Local": false,
      "Name": "Balsamic",
      "Price": "0.75",
      "ProductCode": "F_BALVIN",
      "SizeCode": "",
      "Tags": {
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0.75",
        "Price1-0": "0.75",
        "Price1-3": "0.75",
        "Price2-3": "0.75",
        "Price1-4": "0.75",
        "Price2-2": "0.75",
        "Price1-1": "0.75",
        "Price2-1": "0.75",
        "Price1-2": "0.75",
        "Price2-0": "0.75"
      },
      "Surcharge": "0"
    },
    "_SCHOOLL": {
      "Code": "_SCHOOLL",
      "FlavorCode": "",
      "ImageCode": "_SCHOOLL",
      "Local": true,
      "Name": "Local Donation",
      "Price": "0",
      "ProductCode": "F__SCHOOL",
      "SizeCode": "",
      "Tags": {
        "Donation": "SCHOOL",
        " ExcludeFromLoyalty": true,
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": false,
      "Pricing": {
        "Price2-4": "0",
        "Price1-0": "0",
        "Price1-3": "0",
        "Price2-3": "0",
        "Price1-4": "0",
        "Price2-2": "0",
        "Price1-1": "0",
        "Price2-1": "0",
        "Price1-2": "0",
        "Price2-0": "0"
      },
      "Surcharge": "0"
    },
    "W08PBNLW": {
      "Code": "W08PBNLW",
      "FlavorCode": "BCHICK",
      "ImageCode": "W08PBNLW",
      "Local": false,
      "Name": "8-piece Boneless Chicken",
      "Price": "8.99",
      "ProductCode": "S_BONELESS",
      "SizeCode": "8PCW",
      "Tags": {
        "Boneless": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "BBQC=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "8.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "W08PHOTW": {
      "Code": "W08PHOTW",
      "FlavorCode": "HOTWINGS",
      "ImageCode": "W08PHOTW",
      "Local": false,
      "Name": "8-piece Hot Buffalo Wings",
      "Price": "8.99",
      "ProductCode": "S_HOTWINGS",
      "SizeCode": "8PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "8.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "W08PBBQW": {
      "Code": "W08PBBQW",
      "FlavorCode": "BBQW",
      "ImageCode": "W08PBBQW",
      "Local": false,
      "Name": "8-piece Honey BBQ Wings",
      "Price": "8.99",
      "ProductCode": "S_BBQW",
      "SizeCode": "8PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "8.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "W08PMLDW": {
      "Code": "W08PMLDW",
      "FlavorCode": "MILDWING",
      "ImageCode": "W08PMLDW",
      "Local": true,
      "Name": "8-piece Mild Buffalo Wings",
      "Price": "8.99",
      "ProductCode": "S_MILDWING",
      "SizeCode": "8PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "8.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "W08PPLNW": {
      "Code": "W08PPLNW",
      "FlavorCode": "PLNWINGS",
      "ImageCode": "W08PPLNW",
      "Local": false,
      "Name": "8-piece Plain Wings",
      "Price": "8.99",
      "ProductCode": "S_PLNWINGS",
      "SizeCode": "8PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "8.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "W08PMANW": {
      "Code": "W08PMANW",
      "FlavorCode": "SMANG",
      "ImageCode": "W08PMANW",
      "Local": false,
      "Name": "8-piece Sweet Mango Habanero Wings",
      "Price": "8.99",
      "ProductCode": "S_SMANG",
      "SizeCode": "8PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "8.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "10WINGBNLS": {
      "Code": "10WINGBNLS",
      "FlavorCode": "BCHICK",
      "ImageCode": "10WINGBNLS",
      "Local": false,
      "Name": "10-piece Boneless Chicken",
      "Price": "10.99",
      "ProductCode": "S_BONELESS",
      "SizeCode": "10PCW",
      "Tags": {
        "Boneless": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "BBQC=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "14.99",
        "Price1-0": "10.99",
        "Price1-3": "13.99",
        "Price2-3": "13.99",
        "Price1-4": "14.99",
        "Price2-2": "12.99",
        "Price1-1": "11.99",
        "Price2-1": "11.99",
        "Price1-2": "12.99",
        "Price2-0": "10.99"
      },
      "Surcharge": "0"
    },
    "W08PGPMW": {
      "Code": "W08PGPMW",
      "FlavorCode": "GPRMWING",
      "ImageCode": "W08PGPMW",
      "Local": false,
      "Name": "8-piece Garlic Parmesan Wings",
      "Price": "8.99",
      "ProductCode": "S_GPRMWING",
      "SizeCode": "8PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "8.99",
        "Price1-0": "8.99",
        "Price1-3": "8.99",
        "Price2-3": "8.99",
        "Price1-4": "8.99",
        "Price2-2": "8.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "8.99",
        "Price2-0": "8.99"
      },
      "Surcharge": "0"
    },
    "10WINGHOT": {
      "Code": "10WINGHOT",
      "FlavorCode": "HOTWINGS",
      "ImageCode": "10WINGHOT",
      "Local": false,
      "Name": "10-piece Hot Buffalo Wings",
      "Price": "10.99",
      "ProductCode": "S_HOTWINGS",
      "SizeCode": "10PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "14.99",
        "Price1-0": "10.99",
        "Price1-3": "13.99",
        "Price2-3": "13.99",
        "Price1-4": "14.99",
        "Price2-2": "12.99",
        "Price1-1": "11.99",
        "Price2-1": "11.99",
        "Price1-2": "12.99",
        "Price2-0": "10.99"
      },
      "Surcharge": "0"
    },
    "10WINGBBQ": {
      "Code": "10WINGBBQ",
      "FlavorCode": "BBQW",
      "ImageCode": "10WINGBBQ",
      "Local": false,
      "Name": "10-piece Honey BBQ Wings",
      "Price": "10.99",
      "ProductCode": "S_BBQW",
      "SizeCode": "10PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "14.99",
        "Price1-0": "10.99",
        "Price1-3": "13.99",
        "Price2-3": "13.99",
        "Price1-4": "14.99",
        "Price2-2": "12.99",
        "Price1-1": "11.99",
        "Price2-1": "11.99",
        "Price1-2": "12.99",
        "Price2-0": "10.99"
      },
      "Surcharge": "0"
    },
    "10WINGMILD": {
      "Code": "10WINGMILD",
      "FlavorCode": "MILDWING",
      "ImageCode": "10WINGMILD",
      "Local": true,
      "Name": "10-piece Mild Buffalo Wings",
      "Price": "10.99",
      "ProductCode": "S_MILDWING",
      "SizeCode": "10PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "14.99",
        "Price1-0": "10.99",
        "Price1-3": "13.99",
        "Price2-3": "13.99",
        "Price1-4": "14.99",
        "Price2-2": "12.99",
        "Price1-1": "11.99",
        "Price2-1": "11.99",
        "Price1-2": "12.99",
        "Price2-0": "10.99"
      },
      "Surcharge": "0"
    },
    "10WINGPLN": {
      "Code": "10WINGPLN",
      "FlavorCode": "PLNWINGS",
      "ImageCode": "10WINGPLN",
      "Local": false,
      "Name": "10-piece Plain Wings",
      "Price": "10.99",
      "ProductCode": "S_PLNWINGS",
      "SizeCode": "10PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "14.99",
        "Price1-0": "10.99",
        "Price1-3": "13.99",
        "Price2-3": "13.99",
        "Price1-4": "14.99",
        "Price2-2": "12.99",
        "Price1-1": "11.99",
        "Price2-1": "11.99",
        "Price1-2": "12.99",
        "Price2-0": "10.99"
      },
      "Surcharge": "0"
    },
    "10WINGMHAB": {
      "Code": "10WINGMHAB",
      "FlavorCode": "SMANG",
      "ImageCode": "10WINGMHAB",
      "Local": false,
      "Name": "10-piece Sweet Mango Habanero Wings",
      "Price": "10.99",
      "ProductCode": "S_SMANG",
      "SizeCode": "10PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "14.99",
        "Price1-0": "10.99",
        "Price1-3": "13.99",
        "Price2-3": "13.99",
        "Price1-4": "14.99",
        "Price2-2": "12.99",
        "Price1-1": "11.99",
        "Price2-1": "11.99",
        "Price1-2": "12.99",
        "Price2-0": "10.99"
      },
      "Surcharge": "0"
    },
    "10WINGGPMW": {
      "Code": "10WINGGPMW",
      "FlavorCode": "GPRMWING",
      "ImageCode": "10WINGGPMW",
      "Local": false,
      "Name": "10-piece Garlic Parmesan Wings",
      "Price": "10.99",
      "ProductCode": "S_GPRMWING",
      "SizeCode": "10PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=1",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "14.99",
        "Price1-0": "10.99",
        "Price1-3": "13.99",
        "Price2-3": "13.99",
        "Price1-4": "14.99",
        "Price2-2": "12.99",
        "Price1-1": "11.99",
        "Price2-1": "11.99",
        "Price1-2": "12.99",
        "Price2-0": "10.99"
      },
      "Surcharge": "0"
    },
    "W16PBNLW": {
      "Code": "W16PBNLW",
      "FlavorCode": "BCHICK",
      "ImageCode": "W16PBNLW",
      "Local": false,
      "Name": "16-piece Boneless Chicken",
      "Price": "15.99",
      "ProductCode": "S_BONELESS",
      "SizeCode": "16PCW",
      "Tags": {
        "Boneless": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "BBQC=2",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "19.99",
        "Price1-0": "15.99",
        "Price1-3": "18.99",
        "Price2-3": "18.99",
        "Price1-4": "19.99",
        "Price2-2": "17.99",
        "Price1-1": "16.99",
        "Price2-1": "16.99",
        "Price1-2": "17.99",
        "Price2-0": "15.99"
      },
      "Surcharge": "0"
    },
    "W16PHOTW": {
      "Code": "W16PHOTW",
      "FlavorCode": "HOTWINGS",
      "ImageCode": "W16PHOTW",
      "Local": false,
      "Name": "16-piece Hot Buffalo Wings",
      "Price": "15.99",
      "ProductCode": "S_HOTWINGS",
      "SizeCode": "16PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=2",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "19.99",
        "Price1-0": "15.99",
        "Price1-3": "18.99",
        "Price2-3": "18.99",
        "Price1-4": "19.99",
        "Price2-2": "17.99",
        "Price1-1": "16.99",
        "Price2-1": "16.99",
        "Price1-2": "17.99",
        "Price2-0": "15.99"
      },
      "Surcharge": "0"
    },
    "W16PBBQW": {
      "Code": "W16PBBQW",
      "FlavorCode": "BBQW",
      "ImageCode": "W16PBBQW",
      "Local": false,
      "Name": "16-piece Honey BBQ Wings",
      "Price": "15.99",
      "ProductCode": "S_BBQW",
      "SizeCode": "16PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=2",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "19.99",
        "Price1-0": "15.99",
        "Price1-3": "18.99",
        "Price2-3": "18.99",
        "Price1-4": "19.99",
        "Price2-2": "17.99",
        "Price1-1": "16.99",
        "Price2-1": "16.99",
        "Price1-2": "17.99",
        "Price2-0": "15.99"
      },
      "Surcharge": "0"
    },
    "W16PMLDW": {
      "Code": "W16PMLDW",
      "FlavorCode": "MILDWING",
      "ImageCode": "W16PMLDW",
      "Local": true,
      "Name": "16-piece Mild Buffalo Wings",
      "Price": "15.99",
      "ProductCode": "S_MILDWING",
      "SizeCode": "16PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=2",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "19.99",
        "Price1-0": "15.99",
        "Price1-3": "18.99",
        "Price2-3": "18.99",
        "Price1-4": "19.99",
        "Price2-2": "17.99",
        "Price1-1": "16.99",
        "Price2-1": "16.99",
        "Price1-2": "17.99",
        "Price2-0": "15.99"
      },
      "Surcharge": "0"
    },
    "W16PPLNW": {
      "Code": "W16PPLNW",
      "FlavorCode": "PLNWINGS",
      "ImageCode": "W16PPLNW",
      "Local": false,
      "Name": "16-piece Plain Wings",
      "Price": "15.99",
      "ProductCode": "S_PLNWINGS",
      "SizeCode": "16PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=2",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "19.99",
        "Price1-0": "15.99",
        "Price1-3": "18.99",
        "Price2-3": "18.99",
        "Price1-4": "19.99",
        "Price2-2": "17.99",
        "Price1-1": "16.99",
        "Price2-1": "16.99",
        "Price1-2": "17.99",
        "Price2-0": "15.99"
      },
      "Surcharge": "0"
    },
    "W16PMANW": {
      "Code": "W16PMANW",
      "FlavorCode": "SMANG",
      "ImageCode": "W16PMANW",
      "Local": false,
      "Name": "16-piece Sweet Mango Habanero Wings",
      "Price": "15.99",
      "ProductCode": "S_SMANG",
      "SizeCode": "16PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=2",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "19.99",
        "Price1-0": "15.99",
        "Price1-3": "18.99",
        "Price2-3": "18.99",
        "Price1-4": "19.99",
        "Price2-2": "17.99",
        "Price1-1": "16.99",
        "Price2-1": "16.99",
        "Price1-2": "17.99",
        "Price2-0": "15.99"
      },
      "Surcharge": "0"
    },
    "W16PGPMW": {
      "Code": "W16PGPMW",
      "FlavorCode": "GPRMWING",
      "ImageCode": "W16PGPMW",
      "Local": false,
      "Name": "16-piece Garlic Parmesan Wings",
      "Price": "15.99",
      "ProductCode": "S_GPRMWING",
      "SizeCode": "16PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=2",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "19.99",
        "Price1-0": "15.99",
        "Price1-3": "18.99",
        "Price2-3": "18.99",
        "Price1-4": "19.99",
        "Price2-2": "17.99",
        "Price1-1": "16.99",
        "Price2-1": "16.99",
        "Price1-2": "17.99",
        "Price2-0": "15.99"
      },
      "Surcharge": "0"
    },
    "W32PBNLW": {
      "Code": "W32PBNLW",
      "FlavorCode": "BCHICK",
      "ImageCode": "W32PBNLW",
      "Local": false,
      "Name": "32-piece Boneless Chicken",
      "Price": "27.99",
      "ProductCode": "S_BONELESS",
      "SizeCode": "32PCW",
      "Tags": {
        "Boneless": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "BBQC=4",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "31.99",
        "Price1-0": "27.99",
        "Price1-3": "30.99",
        "Price2-3": "30.99",
        "Price1-4": "31.99",
        "Price2-2": "29.99",
        "Price1-1": "28.99",
        "Price2-1": "28.99",
        "Price1-2": "29.99",
        "Price2-0": "27.99"
      },
      "Surcharge": "0"
    },
    "W32PHOTW": {
      "Code": "W32PHOTW",
      "FlavorCode": "HOTWINGS",
      "ImageCode": "W32PHOTW",
      "Local": false,
      "Name": "32-piece Hot Buffalo Wings",
      "Price": "27.99",
      "ProductCode": "S_HOTWINGS",
      "SizeCode": "32PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=4",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "31.99",
        "Price1-0": "27.99",
        "Price1-3": "30.99",
        "Price2-3": "30.99",
        "Price1-4": "31.99",
        "Price2-2": "29.99",
        "Price1-1": "28.99",
        "Price2-1": "28.99",
        "Price1-2": "29.99",
        "Price2-0": "27.99"
      },
      "Surcharge": "0"
    },
    "W32PBBQW": {
      "Code": "W32PBBQW",
      "FlavorCode": "BBQW",
      "ImageCode": "W32PBBQW",
      "Local": false,
      "Name": "32-piece Honey BBQ Wings",
      "Price": "27.99",
      "ProductCode": "S_BBQW",
      "SizeCode": "32PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=4",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "31.99",
        "Price1-0": "27.99",
        "Price1-3": "30.99",
        "Price2-3": "30.99",
        "Price1-4": "31.99",
        "Price2-2": "29.99",
        "Price1-1": "28.99",
        "Price2-1": "28.99",
        "Price1-2": "29.99",
        "Price2-0": "27.99"
      },
      "Surcharge": "0"
    },
    "W32PMLDW": {
      "Code": "W32PMLDW",
      "FlavorCode": "MILDWING",
      "ImageCode": "W32PMLDW",
      "Local": true,
      "Name": "32-piece Mild Buffalo Wings",
      "Price": "27.99",
      "ProductCode": "S_MILDWING",
      "SizeCode": "32PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=4",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "31.99",
        "Price1-0": "27.99",
        "Price1-3": "30.99",
        "Price2-3": "30.99",
        "Price1-4": "31.99",
        "Price2-2": "29.99",
        "Price1-1": "28.99",
        "Price2-1": "28.99",
        "Price1-2": "29.99",
        "Price2-0": "27.99"
      },
      "Surcharge": "0"
    },
    "W32PPLNW": {
      "Code": "W32PPLNW",
      "FlavorCode": "PLNWINGS",
      "ImageCode": "W32PPLNW",
      "Local": false,
      "Name": "32-piece Plain Wings",
      "Price": "27.99",
      "ProductCode": "S_PLNWINGS",
      "SizeCode": "32PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=4",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "31.99",
        "Price1-0": "27.99",
        "Price1-3": "30.99",
        "Price2-3": "30.99",
        "Price1-4": "31.99",
        "Price2-2": "29.99",
        "Price1-1": "28.99",
        "Price2-1": "28.99",
        "Price1-2": "29.99",
        "Price2-0": "27.99"
      },
      "Surcharge": "0"
    },
    "W32PMANW": {
      "Code": "W32PMANW",
      "FlavorCode": "SMANG",
      "ImageCode": "W32PMANW",
      "Local": false,
      "Name": "32-piece Sweet Mango Habanero Wings",
      "Price": "27.99",
      "ProductCode": "S_SMANG",
      "SizeCode": "32PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=4",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "31.99",
        "Price1-0": "27.99",
        "Price1-3": "30.99",
        "Price2-3": "30.99",
        "Price1-4": "31.99",
        "Price2-2": "29.99",
        "Price1-1": "28.99",
        "Price2-1": "28.99",
        "Price1-2": "29.99",
        "Price2-0": "27.99"
      },
      "Surcharge": "0"
    },
    "W32PGPMW": {
      "Code": "W32PGPMW",
      "FlavorCode": "GPRMWING",
      "ImageCode": "W32PGPMW",
      "Local": false,
      "Name": "32-piece Garlic Parmesan Wings",
      "Price": "27.99",
      "ProductCode": "S_GPRMWING",
      "SizeCode": "32PCW",
      "Tags": {
        "BundleBuilderProducts": true,
        "Wings": true,
        "EffectiveOn": "2011-02-21",
        "DefaultSides": "Bd=4",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "31.99",
        "Price1-0": "27.99",
        "Price1-3": "30.99",
        "Price2-3": "30.99",
        "Price1-4": "31.99",
        "Price2-2": "29.99",
        "Price1-1": "28.99",
        "Price2-1": "28.99",
        "Price1-2": "29.99",
        "Price2-0": "27.99"
      },
      "Surcharge": "0"
    },
    "CKRGCBT": {
      "Code": "CKRGCBT",
      "FlavorCode": "BACTOM",
      "ImageCode": "CKRGCBT",
      "Local": false,
      "Name": "Specialty Chicken – Crispy Bacon & Tomato",
      "Price": "7.99",
      "ProductCode": "S_SCCBT",
      "SizeCode": "12PCB",
      "Tags": {
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart",
        "DefaultSides": "",
        "DefaultToppings": "K=1,Td=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "CKRGHTB": {
      "Code": "CKRGHTB",
      "FlavorCode": "HOTBUFF",
      "ImageCode": "CKRGHTB",
      "Local": false,
      "Name": "Specialty Chicken – Classic Hot Buffalo",
      "Price": "7.99",
      "ProductCode": "S_SCCHB",
      "SizeCode": "12PCB",
      "Tags": {
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart",
        "DefaultSides": "",
        "DefaultToppings": ""
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "CKRGSJP": {
      "Code": "CKRGSJP",
      "FlavorCode": "SPCYJP",
      "ImageCode": "CKRGSJP",
      "Local": false,
      "Name": "Specialty Chicken – Spicy Jalapeno - Pineapple",
      "Price": "7.99",
      "ProductCode": "S_SCSJP",
      "SizeCode": "12PCB",
      "Tags": {
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart",
        "DefaultSides": "",
        "DefaultToppings": "J=1,N=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    },
    "CKRGSBQ": {
      "Code": "CKRGSBQ",
      "FlavorCode": "BBQBAC",
      "ImageCode": "CKRGSBQ",
      "Local": false,
      "Name": "Specialty Chicken – Sweet BBQ Bacon",
      "Price": "7.99",
      "ProductCode": "S_SCSBBQ",
      "SizeCode": "12PCB",
      "Tags": {
        "SpecialtyChicken": true,
        "Promotion": "SpChkProductNotInCart",
        "PromotionType": "ProductNotInCart",
        "DefaultSides": "",
        "DefaultToppings": "K=1"
      },
      "AllowedCookingInstructions": "",
      "DefaultCookingInstructions": "",
      "Prepared": true,
      "Pricing": {
        "Price2-4": "11.99",
        "Price1-0": "7.99",
        "Price1-3": "10.99",
        "Price2-3": "10.99",
        "Price1-4": "11.99",
        "Price2-2": "9.99",
        "Price1-1": "8.99",
        "Price2-1": "8.99",
        "Price1-2": "9.99",
        "Price2-0": "7.99"
      },
      "Surcharge": "0"
    }
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
    "B32PBIT": {
      "Code": "B32PBIT",
      "Description": "Oven baked, bite-size breadsticks sprinkled with Parmesan Asiago cheese & seasoned with garlic and more Parmesan. Perfectly delicious for sharing!",
      "Name": "Parm Bread Bites",
      "Size": "32-Piece",
      "Options": "",
      "ReferencedProductCode": "B32PBIT",
      "Tags": {}
    },
    "B8PCSCB": {
      "Code": "B8PCSCB",
      "Description": "Oven baked breadsticks stuffed with cheese and covered in cheese made with 100% Mozzarella and Cheddar. Seasoned with garlic, parsley and Romano cheese.",
      "Name": "Cheese Stuffed Cheesy Bread",
      "Size": "8-Piece",
      "Options": "",
      "ReferencedProductCode": "B8PCSCB",
      "Tags": {}
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
    "S_14SCREEN": {
      "Code": "S_14SCREEN",
      "Description": "Sausage and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
      "Name": "Hand Tossed Sausage",
      "Size": "Large (14\")",
      "Options": "S=1",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {}
    },
    "PS_14SCREEN": {
      "Code": "PS_14SCREEN",
      "Description": "Pepperoni, sausage and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
      "Name": "Hand Tossed Pepperoni & Sausage",
      "Size": "Large (14\")",
      "Options": "P=1,S=1",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {}
    },
    "HN_14SCREEN": {
      "Code": "HN_14SCREEN",
      "Description": "Sliced ham, pineapple and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
      "Name": "Hand Tossed Ham & Pineapple",
      "Size": "Large (14\")",
      "Options": "H=1,N=1",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {}
    },
    "PM_14SCREEN": {
      "Code": "PM_14SCREEN",
      "Description": "Pepperoni, fresh mushrooms, and cheese made with 100% real mozzarella on top of our garlic-seasoned crust with a rich, buttery taste.",
      "Name": "Hand Tossed Pepperoni & Mushroom",
      "Size": "Large (14\")",
      "Options": "P=1,M=1",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {}
    },
    "P12IPAZA": {
      "Code": "P12IPAZA",
      "Description": "Two layers of cheese and a crust that bakes up golden and crispy with a buttery taste.",
      "Name": "Medium Cheese Pan",
      "Size": "Medium (12\")",
      "Options": "",
      "ReferencedProductCode": "P12IPAZA",
      "Tags": {
        "Banner": "vegetarian"
      }
    },
    "P_P12IPAZA": {
      "Code": "P_P12IPAZA",
      "Description": "Two layers of cheese, Pepperoni to the edge, and a crust that bakes up golden and crispy with a buttery taste.",
      "Name": "Medium Pepperoni Pan",
      "Size": "Medium (12\")",
      "Options": "P=1",
      "ReferencedProductCode": "P12IPAZA",
      "Tags": {}
    },
    "P_P10IGFZA": {
      "Code": "P_P10IGFZA",
      "Description": "Domino's pepperoni pizza made on a Gluten Free Crust.",
      "Name": "Small Gluten Free Crust Pepperoni",
      "Size": "Small (10\")",
      "Options": "P=1",
      "ReferencedProductCode": "P10IGFZA",
      "Tags": {
        "Banner": "glutenFree"
      }
    },
    "MARBRWNE": {
      "Code": "MARBRWNE",
      "Description": "Satisfy your sweet tooth! Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie.  Oven-baked to perfection and cut into 9 pieces - this dessert is perfect to share with the whole group",
      "Name": "Domino's Marbled Cookie Brownie™ ",
      "Size": "9-Piece",
      "Options": "",
      "ReferencedProductCode": "MARBRWNE",
      "Tags": {}
    },
    "14SCEXTRAV": {
      "Code": "14SCEXTRAV",
      "Description": "Loads of pepperoni, ham, Italian sausage, beef, onions, green peppers, mushrooms and black olives topped with extra cheese made with 100% real mozzarella.",
      "Name": "Hand Tossed ExtravaganZZa",
      "Size": "Large (14\")",
      "Options": "",
      "ReferencedProductCode": "14SCEXTRAV",
      "Tags": {}
    },
    "P14ITHPV": {
      "Code": "P14ITHPV",
      "Description": "Roasted red peppers, baby spinach, onions, mushrooms, tomatoes, black olives, cheeses made with 100% real mozzarella, feta and provolone on a crispy thin crust.",
      "Name": "Thin Crust Pacific Veggie Pizza",
      "Size": "Large (14\")",
      "Options": "",
      "ReferencedProductCode": "P14ITHPV",
      "Tags": {
        "Banner": "vegetarian"
      }
    },
    "2LCOKE": {
      "Code": "2LCOKE",
      "Description": "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments",
      "Name": "Coke",
      "Size": "2-Liter Bottle",
      "Options": "",
      "ReferencedProductCode": "2LCOKE",
      "Tags": {}
    },
    "2LDCOKE": {
      "Code": "2LDCOKE",
      "Description": "Beautifully balanced adult cola taste in a no calorie beverage",
      "Name": "Diet Coke",
      "Size": "2-Liter Bottle",
      "Options": "",
      "ReferencedProductCode": "2LDCOKE",
      "Tags": {}
    },
    "2LSPRITE": {
      "Code": "2LSPRITE",
      "Description": "Unique Lymon (lemon-lime) flavor, clear, clean and crisp with no caffeine.",
      "Name": "Sprite",
      "Size": "2-Liter Bottle",
      "Options": "",
      "ReferencedProductCode": "2LSPRITE",
      "Tags": {}
    },
    "XC_14SCREEN": {
      "Code": "XC_14SCREEN",
      "Description": "",
      "Name": "Large (14\") Hand Tossed Pizza",
      "Size": "Large (14\")",
      "Options": "X=1,C=1",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {}
    },
    "PXC_14SCREEN": {
      "Code": "PXC_14SCREEN",
      "Description": "",
      "Name": "Large (14\") Hand Tossed Pizza Whole: Pepperoni",
      "Size": "Large (14\")",
      "Options": "P=1,X=1,C=1",
      "ReferencedProductCode": "14SCREEN",
      "Tags": {}
    },
    "HNXC_12SCREEN": {
      "Code": "HNXC_12SCREEN",
      "Description": "",
      "Name": "Medium (12\") Hand Tossed Pizza Whole: Ham, Pineapple",
      "Size": "Medium (12\")",
      "Options": "H=1,N=1,X=1,C=1",
      "ReferencedProductCode": "12SCREEN",
      "Tags": {}
    },
    "MPXC_12SCREEN": {
      "Code": "MPXC_12SCREEN",
      "Description": "",
      "Name": "Medium (12\") Hand Tossed Pizza Whole : Mushrooms, Pepperoni",
      "Size": "Medium (12\")",
      "Options": "M=1,P=1,X=1,C=1",
      "ReferencedProductCode": "12SCREEN",
      "Tags": {}
    },
    "XCFeCsCpRMORrSiTd_P12IREPV": {
      "Code": "XCFeCsCpRMORrSiTd_P12IREPV",
      "Description": "",
      "Name": "Medium (12\") Hand Tossed Pacific Veggie Pizza",
      "Size": "Medium (12\")",
      "Options": "X=1,C=1,Fe=1,Cs=1,Cp=1,R=1,M=1,O=1,Rr=1,Si=1,Td=1",
      "ReferencedProductCode": "P12IREPV",
      "Tags": {}
    },
    "RdCKDuPv_PSANSACB": {
      "Code": "RdCKDuPv_PSANSACB",
      "Description": "",
      "Name": "Chicken Bacon Ranch Sandwich",
      "Size": "Sandwich",
      "Options": "Rd=1,C=1,K=1,Du=1,Pv=1",
      "ReferencedProductCode": "PSANSACB",
      "Tags": {}
    },
    "XfDu_PINPASCA": {
      "Code": "XfDu_PINPASCA",
      "Description": "",
      "Name": "Chicken Alfredo Pasta",
      "Size": "Individual",
      "Options": "Xf=1,Du=1",
      "ReferencedProductCode": "PINPASCA",
      "Tags": {}
    },
    "SIDRAN_W08PBBQW": {
      "Code": "SIDRAN_W08PBBQW",
      "Description": "",
      "Name": "8-Piece BBQ Wings (1) Ranch",
      "Size": "8-Piece",
      "Options": "SIDRAN=1",
      "ReferencedProductCode": "W08PBBQW",
      "Tags": {}
    },
    "B2PCLAVA": {
      "Code": "B2PCLAVA",
      "Description": "",
      "Name": "2-Piece Chocolate Lava Crunch Cakes",
      "Size": "2-Piece",
      "Options": "",
      "ReferencedProductCode": "B2PCLAVA",
      "Tags": {}
    }
  },
  "ShortProductDescriptions": {
    "B8PCPT": {
      "Code": "B8PCPT",
      "Description": "Drizzled with garlic and Parmesan cheese seasoning and sprinkled with more Parmesan cheese. Served with marinara sauce."
    },
    "B8PCGT": {
      "Code": "B8PCGT",
      "Description": "Drizzled with buttery garlic and Parmesan cheese seasoning. Served with marinara sauce."
    },
    "B8PCCT": {
      "Code": "B8PCCT",
      "Description": "Drizzled with delicious cinnamon and sugar to satisfy any sweet tooth. Served with sweet icing."
    },
    "B16PBIT": {
      "Code": "B16PBIT",
      "Description": "Handmade, oven-baked bread bites seasoned with garlic and Parmesan."
    },
    "B2PCLAVA": {
      "Code": "B2PCLAVA",
      "Description": "Indulge in two delectable oven-baked chocolate cakes with molten chocolate fudge on the inside. Perfectly topped with a dash of powdered sugar."
    },
    "MARBRWNE": {
      "Code": "MARBRWNE",
      "Description": "Taste the decadent blend of gooey milk chocolate chunk cookie and delicious fudge brownie. Oven baked with 9 pieces to make it perfectly shareable."
    },
    "2LCOKE": {
      "Code": "2LCOKE",
      "Description": "The authentic cola sensation that is a refreshing part of sharing life's enjoyable moments."
    },
    "2LDCOKE": {
      "Code": "2LDCOKE",
      "Description": "Beautifully balanced adult cola taste in a no calorie beverage."
    },
    "CKRGSBQ": {
      "Code": "CKRGSBQ",
      "Description": "Tender bites of 100% whole breast white meat chicken, topped with sweet and smoky BBQ sauce, mozzarella and cheddar cheese, and crispy bacon."
    },
    "CKRGHTB": {
      "Code": "CKRGHTB",
      "Description": "Tender bites of 100% whole breast white meat chicken, topped with classic hot buffalo sauce, ranch, mozzarella and cheddar cheese, and feta."
    },
    "PSANSAPH": {
      "Code": "PSANSAPH",
      "Description": "Experience delicious slices of steak topped with American and provolone cheese, fresh onions, green peppers and mushrooms. Oven-baked to perfection."
    },
    "PSANSACB": {
      "Code": "PSANSACB",
      "Description": "Enjoy our flavorful grilled chicken breast topped with smoked bacon, ranch and provolone cheese on artisan bread baked to golden brown perfection."
    },
    "PINPASCA": {
      "Code": "PINPASCA",
      "Description": "Try our savory Chicken Alfredo Pasta. Grilled chicken breast and creamy Alfredo sauce is mixed with penne pasta and baked to creamy perfection."
    },
    "PINPASCC": {
      "Code": "PINPASCC",
      "Description": "Taste the delectable blend of grilled chicken, smoked bacon, onions and mushrooms mixed with penne pasta. Topped with rich Alfredo sauce."
    },
    "PPSGARSA": {
      "Code": "PPSGARSA",
      "Description": "A crisp combination of grape tomatoes, red onion, carrots, red cabbage, cheddar cheese and croutons on a blend of romaine and iceberg lettuce."
    },
    "PPSCSRSA": {
      "Code": "PPSCSRSA",
      "Description": "The makings of a classic: roasted white meat chicken, Parmesan cheese and croutons, all atop a blend of romaine and iceberg lettuce."
    },
    "PPSCAPSA": {
      "Code": "PPSCAPSA",
      "Description": "Roasted white meat chicken, diced red and green apples, dried cranberries, praline pecans and cheddar cheese paired with a leafy spring mix."
    }
  },
  "ShortCouponDescriptions": {
    "8223": {
      "Code": "8223",
      "Description": "Four 20oz Coke Bundle"
    },
    "8682": {
      "Code": "8682",
      "Description": "Mix & Match"
    },
    "9193": {
      "Code": "9193",
      "Description": "Mix & Match"
    }
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
        "8652C": {
          "Code": "8652C",
          "CouponTierThreshold": 10,
          "CouponTierPercentOff": 20,
          "Name": "20% off all pizzas",
          "Description": "20% de descuento todas las pizzas",
          "ServiceMethod": ""
        }
      }
    },
    "MultiplePizza": {
      "Code": "MultiplePizza",
      "Coupons": {
        "8650": {
          "Code": "8650",
          "CouponTierThreshold": 4,
          "CouponTierPercentOff": 10,
          "Name": "10% off all pizzas",
          "Description": "Group order Discount: 10% off any pizza at menu price. Online only when you order 4+ pizzas",
          "ServiceMethod": ""
        },
        "8651": {
          "Code": "8651",
          "CouponTierThreshold": 7,
          "CouponTierPercentOff": 15,
          "Name": "15% off all pizzas",
          "Description": "Group order Discount: 15% off any pizza at menu price. Online only when you order 7+ pizzas",
          "ServiceMethod": ""
        },
        "8652": {
          "Code": "8652",
          "CouponTierThreshold": 10,
          "CouponTierPercentOff": 20,
          "Name": "20% off all pizzas",
          "Description": "Group Order Discount: 20% off any pizza at menu price. Online Only when you order 10+ pizzas",
          "ServiceMethod": ""
        }
      }
    }
  },
  "UnsupportedProducts": {
    "CEARVI": {
      "PulseCode": "CEARVI",
      "Description": "Each Raspberry Vinaigrette"
    },
    "DN2": {
      "PulseCode": "DN2",
      "Description": "Each DN2"
    },
    "PSANSAEC": {
      "PulseCode": "PSANSAEC",
      "Description": "Sandwich Bread Xtra Meat Ckn Par"
    },
    "DN4": {
      "PulseCode": "DN4",
      "Description": "Each DN4"
    },
    "PSANSAEI": {
      "PulseCode": "PSANSAEI",
      "Description": "Sandwich Bread Xtra Meat Italian"
    },
    "PINBBLBA": {
      "PulseCode": "PINBBLBA",
      "Description": "Build your Own BreadBowl Pasta"
    },
    "PINPASBA": {
      "PulseCode": "PINPASBA",
      "Description": "Build Your Own Pasta"
    },
    "PSANSAEP": {
      "PulseCode": "PSANSAEP",
      "Description": "Sandwich Bread Xtra Meat Philly Sandwich"
    },
    "DN3": {
      "PulseCode": "DN3",
      "Description": "Each DN3"
    },
    "PINBBLBM": {
      "PulseCode": "PINBBLBM",
      "Description": "Build your Own BreadBowl Pasta"
    },
    "PINPASBM": {
      "PulseCode": "PINPASBM",
      "Description": "Build Your Own Pasta"
    },
    "PSANSAEB": {
      "PulseCode": "PSANSAEB",
      "Description": "Sandwich Bread Xtra Meat Chk Bc"
    }
  },
  "UnsupportedOptions": {
    "Bd": {
      "PulseCode": "Bd",
      "Description": "Blue Cheese Dip Cup"
    },
    "Rv": {
      "PulseCode": "Rv",
      "Description": "Rasberry Vinaigrette"
    },
    "Fe": {
      "PulseCode": "Fe",
      "Description": "Feta Cheese"
    }
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
    "GO": {
      "Code": "GO",
      "Name": "Garlic-Seasoned Crust",
      "Description": "",
      "Group": "SEASONING"
    },
    "NGO": {
      "Code": "NGO",
      "Name": "No Garlic-Seasoned Crust",
      "Description": "",
      "Group": "SEASONING"
    },
    "RGO": {
      "Code": "RGO",
      "Name": "Oregano",
      "Description": "",
      "Group": "SEASONING"
    },
    "PIECT": {
      "Code": "PIECT",
      "Name": "Pie Cut",
      "Description": "",
      "Group": "CUT"
    },
    "SQCT": {
      "Code": "SQCT",
      "Name": "Square Cut",
      "Description": "",
      "Group": "CUT"
    },
    "UNCT": {
      "Code": "UNCT",
      "Name": "Uncut",
      "Description": "",
      "Group": "CUT"
    },
    "NOOR": {
      "Code": "NOOR",
      "Name": "No Oregano",
      "Description": "",
      "Group": "SEASONING"
    }
  },
  "CookingInstructionGroups": {
    "BAKE": {
      "Code": "BAKE",
      "Name": "Bake",
      "Tags": {}
    },
    "SEASONING": {
      "Code": "SEASONING",
      "Name": "Seasoning",
      "Tags": {}
    },
    "CUT": {
      "Code": "CUT",
      "Name": "Cut",
      "Tags": {
        "MaxOptions": "1"
      }
    }
  }
}

```