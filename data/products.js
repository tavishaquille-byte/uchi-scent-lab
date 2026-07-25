// data/products.js
// Katalog produk asli UCHI (14 produk), disalin dari katalog-produk.csv.
// Dipakai sebagai <script src="data/products.js"> biasa (bukan fetch ke
// file .json), sama seperti data/blends.js, supaya index.html tetap bisa
// dibuka langsung lewat klik dua kali tanpa server.
const PRODUCTS = [
  {
    "name": "Java Noir",
    "family": "Oriental",
    "subFamily": "Soft Oriental",
    "dominantNote": "Pink Pepper",
    "elementNotes": ["Cedar", "Orange Blossom"],
    "topNotes": ["Pear", "Pink Pepper", "Orange Blossom"],
    "middleNotes": ["Coffee", "Red Apple", "Virginia Cedar"],
    "baseNotes": ["Vanilla", "Amber", "Cedar"],
    "slug": "java-noir"
  },
  {
    "name": "Jpx. Yakuza",
    "family": "Oriental",
    "subFamily": "Soft Oriental",
    "dominantNote": "Lactone",
    "elementNotes": ["Musk", "Tangerine"],
    "topNotes": ["Tangerine", "Ginger", "Bergamot"],
    "middleNotes": ["Jasmine", "Rose", "Amber"],
    "baseNotes": ["Benzoin", "Lactone", "Musk"],
    "slug": "jpx-yakuza"
  },
  {
    "name": "Ceylon Vibes",
    "family": "Oriental",
    "subFamily": "Woody Oriental",
    "dominantNote": "Cinnamon",
    "elementNotes": ["Praline", "Cognac"],
    "topNotes": ["Cognac"],
    "middleNotes": ["Cinnamon", "Tonka Bean", "Oak", "Hedione"],
    "baseNotes": ["Vanilla", "Praline", "Sandalwood", "Candied Almond"],
    "slug": "ceylon-vibes"
  },
  {
    "name": "Majestic In Monaco",
    "family": "Oriental",
    "subFamily": "Woody Oriental",
    "dominantNote": "Cloves",
    "elementNotes": ["Agarwood", "Ginger"],
    "topNotes": ["Cloves", "Ginger", "Cardamom", "Iris"],
    "middleNotes": ["Tuberose", "Jasmine", "Ylang-Ylang", "Tea"],
    "baseNotes": ["Vanilla", "Cinnamon", "Agarwood", "Sandalwood", "Musk"],
    "slug": "majestic-in-monaco"
  },
  {
    "name": "Summer Breeze",
    "family": "Fresh",
    "subFamily": "Citrus",
    "dominantNote": "Bergamot",
    "elementNotes": ["Mandarin Orange", "Sicilian Orange"],
    "topNotes": ["Bergamot"],
    "middleNotes": ["Mandarin Orange", "Sicilian Orange", "Ginger"],
    "baseNotes": ["Ambergris"],
    "slug": "summer-breeze"
  },
  {
    "name": "Bt. Blue Prince",
    "family": "Fresh",
    "subFamily": "Aromatic",
    "dominantNote": "Musk",
    "elementNotes": ["Orange Blossom", "Mandarin Orange"],
    "topNotes": ["Orange Blossom", "Mandarin Orange"],
    "middleNotes": ["Georgywood", "Orange Blossom"],
    "baseNotes": ["Cedar", "Musk"],
    "slug": "bt-blue-prince"
  },
  {
    "name": "Bitter Elixir",
    "family": "Fresh",
    "subFamily": "Aromatic",
    "dominantNote": "Grapefruit",
    "elementNotes": ["Nutmeg", "Cinnamon"],
    "topNotes": ["Nutmeg", "Cinnamon", "Cardamom", "Grapefruit"],
    "middleNotes": ["Lavender"],
    "baseNotes": ["Licorice", "Sandalwood", "Amber", "Patchouli", "Haitian Vetiver"],
    "slug": "bitter-elixir"
  },
  {
    "name": "Dead Wish Rebel",
    "family": "Fresh",
    "subFamily": "Fruity",
    "dominantNote": "Pineapple",
    "elementNotes": ["Caramel", "Oakmoss"],
    "topNotes": ["Pineapple", "Granny Smith Apple", "Mandarin Orange"],
    "middleNotes": ["Oakmoss", "Vanilla", "Cedarwood"],
    "baseNotes": ["Dry Wood", "Ambergris", "Caramel", "Musk"],
    "slug": "dead-wish-rebel"
  },
  {
    "name": "Bt. Rider Lover",
    "family": "Fresh",
    "subFamily": "Fruity",
    "dominantNote": "Mango",
    "elementNotes": ["Coconut Milk", "Guava"],
    "topNotes": ["Mango", "Guava"],
    "middleNotes": ["Coconut Milk", "Osmanthus", "Pineapple"],
    "baseNotes": ["Vanilla"],
    "slug": "bt-rider-lover"
  },
  {
    "name": "True Love",
    "family": "Floral",
    "subFamily": "Floral Pure",
    "dominantNote": "Orange Blossom",
    "elementNotes": ["Musk", "Neroli"],
    "topNotes": ["Neroli", "Pear", "Bergamot", "Grapefruit", "Lemon"],
    "middleNotes": ["Orange Blossom", "Stephanotis", "Rose", "Peach", "Black Currant"],
    "baseNotes": ["Musk", "Cedar", "Cashmir Wood", "Patchouli"],
    "slug": "true-love"
  },
  {
    "name": "Sweety Blossom",
    "family": "Floral",
    "subFamily": "Floral Oriental",
    "dominantNote": "Orange Blossom",
    "elementNotes": ["Madagascar Vanilla", "Tuberose"],
    "topNotes": ["Orange Blossom", "Bergamot"],
    "middleNotes": ["Tuberose", "Indian Jasmine"],
    "baseNotes": ["Madagascar Vanilla", "White Musk", "Virginia Cedar"],
    "slug": "sweety-blossom"
  },
  {
    "name": "Ba. Medina",
    "family": "Floral",
    "subFamily": "Floral Oriental",
    "dominantNote": "Rose",
    "elementNotes": ["Sandalwood", "Saffron"],
    "topNotes": ["Rose", "Geranium", "Davana", "Orange", "Bergamot"],
    "middleNotes": ["Rose", "Sandalwood", "Saffron", "Orchid", "Jasmine", "Cedar", "Cloves"],
    "baseNotes": ["Sandalwood", "Musk", "Amber", "Cedar", "Cashmeran"],
    "slug": "ba-medina"
  },
  {
    "name": "Uc. Last Kiss",
    "family": "Floral",
    "subFamily": "Floral Oriental",
    "dominantNote": "Lime (Linden) Blossom",
    "elementNotes": ["Ambrofix", "Jasmine Sambac"],
    "topNotes": ["Lime (Linden) Blossom", "Jasmine Sambac", "Broom"],
    "middleNotes": ["Orange Blossom", "Heliotrope", "Vetiver"],
    "baseNotes": ["Ambrofix", "Georgywood"],
    "slug": "uc-last-kiss"
  },
  {
    "name": "Bt. Ph 99 Percent",
    "family": "Floral",
    "subFamily": "Floral Oriental",
    "dominantNote": "Fruity Notes",
    "elementNotes": ["Sandalwood", "Jasmine"],
    "topNotes": ["Fruity Notes", "Bergamot", "Lemon", "Mandarin Orange", "Orange"],
    "middleNotes": ["Jasmine", "Rose", "Raspberry", "Apricot"],
    "baseNotes": ["Sandalwood", "Musk", "Cedarwood", "Amber", "Patchouli", "Vetiver"],
    "slug": "bt-ph-99-percent"
  }
];
