export type option = {
   modelNumber?: string,
   DIMENSION?: string,
   CAPACITY?: string,
   WEIGHT?: string,
   POWER?: string,
   VOLTAGE?: string,
   hsCode?: string,
   speed?: string,
   WEIGHTRANGE?: string,
   extras?: string,
}
export type product = {
   id: number,
   title: string,
   options: option
   Description: string,
   unit: string,
   unitPrice: string,
   img?: string,
   image?: string,
}

const products: product[] = [
   {
      id: 1,
      title: "THERMO BONDING WADDING PRODUCTION MACHINE",
      options: {
         modelNumber: "TDH-S",
         DIMENSION: "35000*20000*4000MM(L*W *H)",
         CAPACITY: "80-600KG/H",
         WEIGHT: "65000 KG POWER: 2720 W ",
         VOLTAGE: "380V 50HZ",
         hsCode: "8449.00"
      },
      Description: `The Thermo Bonding Wadding Production Machine is a state-of-the-art system designed for producing high-quality thermo-bonded wadding. Utilizing advanced heat and pressure technology, this machine bonds fibers such as polyester and cotton into cohesive, durable sheets or rolls. The resulting wadding is ideal for applications in insulation, bedding, furniture padding, and automotive interiors`,
      unit: "SET",
      unitPrice: "13314560 CNY/SET",
      img: "p1.jpg"
   },
   {
      id: 2,
      title: "COLORFUL SPUNBOND FABRIC MAKING MACHINE",
      options: {
         modelNumber: "AZX-SS2400",
         speed: "300M/MIN",
         DIMENSION: " 6150MMX 3720MM X1950MM",
         POWER: "2520 W",
         WEIGHT: "1000 KG",
         hsCode: "8449.00"
      },
      Description: `The Colorful Spunbond Fabric Making Machine is a sophisticated piece of equipment designed for the production of vibrant, high-quality spunbond nonwoven fabrics. Utilizing advanced melt-blown technology, this machine efficiently processes thermoplastic polymers, such as polypropylene, to create durable and uniform fabric sheets. These fabrics are widely used in various industries, including medical, agricultural, packaging, and home furnishings.`,
      unit: "SET",
      unitPrice: "103590 EUR/SET",
      img: "p2.jpg"
   },
   {
      id: 3,
      title: "KRAFT PAPER MAKING MACHINE",
      options: {
         modelNumber: "1575-6200MM",
         WEIGHT: "3300 KG",
         hsCode: "8439.30",
         WEIGHTRANGE: "70-280G",
         VOLTAGE: "380V ",
      },
      Description: `The Kraft Paper Making Machine is a specialized industrial unit designed for the efficient production of kraft paper, widely used in packaging, wrapping, and various industrial applications. This machine processes raw materials, typically wood pulp, into strong, durable kraft paper known for its high tensile strength and tear resistance. Its versatility and robust performance make it ideal for meeting the demands of various industries, from packaging to construction.`,
      unit: "SET",
      unitPrice: "280000 USD/SET",
      img: "p3.jpg"
   },
   {
      id: 4,
      title: "TEXTILE CUTTING MACHINE",
      options: {
         modelNumber: "860-PK",
         hsCode: "84515000",
      },
      Description: `The TEXTILE CUTTING MACHINE (Model: 860-PK) is a high-precision machine designed for efficient and accurate fabric cutting. It is ideal for various textiles, offering clean, consistent cuts for both small-scale and industrial applications. Built with robust construction and user-friendly controls, this machine ensures durability and ease of operation, making it a valuable asset in any textile production environment.`,
      unit: "SET",
      unitPrice: "2026.5 USD/SET",
      img: "p4.jpg"
   },
   {
      id: 5,
      title: "HESSENPRO ROTARY HAMMER",
      options: {
         modelNumber: "HCD2026",
         WEIGHT: "6 KG",
         hsCode: "84679900",
      },
      Description: `The HessenPro Rotary Hammer is a powerful, versatile tool designed for heavy-duty drilling and chiseling tasks in construction and renovation projects. Engineered for professionals, this rotary hammer offers superior performance, combining high impact energy with efficient drilling capabilities . Ideal for contractors, builders, and serious DIY enthusiasts, the HessenPro Rotary Hammer is a reliable tool that meets the demands of rigorous work environments.`,
      unit: "PCS",
      unitPrice: "90 USD/PCS",
      img: "p5.jpg"
   },
   {
      id: 6,
      title: "MINI INJECTION MOLDING MACHINE",
      options: {
         modelNumber: "AY-150",
         WEIGHT: " 4500 KG",
         hsCode: "84771000",
         DIMENSION: "(L*W*H): 4.97*1.3*1.95 M",
         POWER: "13 KW",
      },
      Description: `The HessenPro Rotary Hammer is a powerful, versatile tool designed for heavy-duty drilling and chiseling tasks in construction and renovation projects. Engineered for professionals, this rotary hammer offers superior performance, combining high impact energy with efficient drilling capabilities.Ideal for contractors, builders, and serious DIY enthusiasts, the HessenPro Rotary Hammer is a reliable tool that meets the demands of rigorous work environments.`,
      unit: "SET",
      unitPrice: "21025.69 USD/SET",
      img: "p6.jpg"
   },
   {
      id: 7,
      title: "INDUSTRIAL SEWING MACHINE ",
      options: {
         extras: `MODEL JUKI DDL-8700, SINGLE NEEDLE LOCKSTITCH, 
FLAT BED, HIGH-SPEED 5,500 STITCHES/MINUTE, MOTOR 
550W, AUTOMATIC THREAD TRIMMER, DIGITAL CONTROL 
PANEL, NEEDLE POSITION CONTROL
`,
         hsCode: "84522110",
      },
      Description: `An industrial sewing machine is a heavy-duty machine designed for high-speed stitching and handling thicker fabrics, multiple layers, and various materials that standard home sewing machines can't handle. These machines are built for continuous use in manufacturing settings, such as garment factories, upholstery shops, and leatherworking.`,
      unit: "SET",
      unitPrice: "1422.5 USD/SET",
      img: "p7.jpg"
   },
   {
      id: 8,
      title: "PAPER CUTTING MACHINE",
      options: {
         modelNumber: " JT-GM1700",
         DIMENSION: " 12000*2900*2200MM",
         WEIGHT: "30 KW",
         hsCode: "8441.10",
         extras: `MAX. CUTTING SPEED: 350 CUTS/MIN , CUTTING LENGTH RANGE: 1600MM , WARRANTY: 2 YEAR `,
      },
      Description: `The paper cutting machine is a precision tool designed for accurate and efficient cutting of paper. It features a sharp, durable blade and a sturdy base, available in manual or electronic models. Manual machines use a lever or rotary handle for adjustments, while electronic versions offer programmable settings for various cut sizes. Safety features, such as blade guards and automatic shutoffs, ensure user protection. Ideal for both high-volume and smaller-scale use, it includes adjustable guides for precise cutting.`,
      unit: "SET",
      unitPrice: "40000 USD/SET",
      img: "p8.jpg"
   },
   {
      id: 9,
      title: "TOILET PAPER REWINDING MACHINE",
      options: {
         modelNumber: "BJ-250C-2900",
         WEIGHT: "2200 KG",
         hsCode: "8441.20",
         extras: `WARRANTY: 1 YEAR`,
      },
      Description: `The model number for a toilet paper rewinding machine can vary depending on the manufacturer and specifications. For accurate information, you might need to check with specific brands or consult product catalogs. Common model numbers often include series names or numbers that denote the machine's features, capacity, or intended use. If you have a specific brand in mind, I can help you look up typical model numbers for that brand.`,
      unit: "SET",
      unitPrice: "45590 USD/SET",
      img: "p9.jpg"
   },
   {
      id: 10,
      title: "STONE CUTTING MACHINE",
      options: {
         WEIGHT: " 58000KG",
         extras: `CUTTING THICKNESS(MAX): 2000MM`,
         POWER: " 110KW ",
         DIMENSION: "11900(L)*5060(W)*4960(H)MM",
      },
      Description: `The stone cutting machine is a precision tool designed for slicing through various stones like granite and marble. It features a powerful motor and a high-speed diamond blade for clean, accurate cuts. Available in manual or automatic models, it includes adjustable guides for precise alignment and safety guards to protect users. Ideal for both industrial and artistic applications, it offers durability and versatility in handling large slabs and intricate designs.`,
      unit: "SET",
      unitPrice: "125000 USD/SET",
      img: "p10.jpg"
   },
]

export const textileProducts = [
   { id: 1, title: "LEATHER FABRIC", items: `LEATHER FABRIC ( CROCODILE SKIN PATTERN EMBOSSED ARTIFICIAL, LEATHER FOR SHOES BAGS FABRIC ECO FRIENDLY RECYCLED) # HS CODE: 4115.10`, describe: "This leather fabric features an embossed crocodile skin pattern, offering the luxurious look of genuine crocodile leather while being eco-friendly.  The embossed pattern adds a textured, high-end appearance, while the fabric's durable construction ensures longevity and resistance to wear. Ideal for fashion-conscious consumers, this fabric combines style, durability, and environmental responsibility.", unit: "M", unitPrice: "6 USD/M", image: "t1.jpg" },

   {
      id: 2, title: "HIGH QUALITY  PEARLS LACE FABRIC", items: `HIGH QUALITY  PEARLS LACE FABRIC FOR WEDDING DRESS # MATERIAL: PEARL BEADS, LACE FABRIC #
MODEL NUMBER: DHBF2305 # WIDTH: 135 CM #
HS CODE: 58043000
`, describe: "High-quality pearls lace fabric for wedding dresses combines elegance and sophistication. The lace is often crafted from fine threads to ensure a soft, delicate texture that drapes beautifully. The pearls are meticulously sewn into the lace, providing a subtle shimmer and enhancing the overall design. Ideal for creating stunning, timeless wedding dresses, this fabric offers both visual appeal and exceptional craftsmanship.", unit: "M", unitPrice: "52 USD/M", image: "t2.jpg"
   },


   {
      id: 3, title: "LUREX METALLIC FABRICS (70% CHILON 24% SILVER AND GOLD ", items: `LUREX METALLIC FABRICS (70% CHILON 24% SILVER AND GOLD 
YARNS 6% SPANDEX) #
HS CODE: 6001.92 # LUREX METALLIC FABRICS :(70% CHILON 24% SILVER AND GOLD 
YARNS 6% SPANDEX)#
HS CODE: 6001.92`, describe: "Lurex metallic fabrics are crafted from a blend of 70% Chilon, 24% silver and gold yarns, and 6% spandex. This combination provides a striking, shimmering effect with the luxurious look of metallic threads woven into the fabric. Chilon offers a soft, lightweight feel, while the silver and gold yarns deliver an eye-catching sparkle. This fabric merges elegance with functionality, perfect for adding a touch of sophistication to any garment..", unit: "M", unitPrice: "6.59 USD/M", image: "t3.jpg"
   },

   {
      id: 4, title: "LUXURY EMBROIDERED LACE FABRIC (COLORED CRYSTAL BEADS AND A COMBINATION OF SEQUIN GEOMETRIC DESIGN - SUITABLE FOR PARTY WEAR)", items: `LUXURY EMBROIDERED LACE FABRIC (COLORED CRYSTAL BEADS AND A COMBINATION OF SEQUIN GEOMETRIC DESIGN - SUITABLE FOR PARTY WEAR) #
HS CODE: 5810`, describe: "Luxury embroidered lace fabric features a rich, intricate design enhanced with colored crystal beads and sequins. The fabric boasts a delicate lace base adorned with a geometric sequin pattern, creating a sophisticated and eye-catching texture. The colored crystal beads add a touch of glamour and sparkle. Ideal for high-fashion garments and special occasion wear, this fabric combines elegance with opulence, making it perfect for creating stunning, standout pieces.", unit: "M", unitPrice: "100 EUR/M", image: "t4.jpg"
   },

   {
      id: 5, title: "SEQUIN FABRIC", items: `SEQUIN FABRIC#
COLOR: PINK BLUE IRIDESCENT#
MODEL NUMBER: NYT-0518#
HS CODE: 5808.10`, describe: "Sequin fabric in pink, blue, and iridescent hues offers a vibrant and dynamic visual effect. The fabric is adorned with shimmering sequins that reflect light, creating a dazzling, multi-colored sparkle. Mix of different colours  give fabric's ability to change colors and shine from different angles. Ideal for evening wear, stage costumes, or any fashion piece requiring a bold, eye-catching look, this sequin fabric brings both glamour and movement to any design.", unit: "M", unitPrice: "15 USD/M", image: "t5.jpg"
   },

   {
      id: 6, title: "MINK FOX FABRIC (FAUX FUR)", items: `MINK FOX FABRIC (FAUX FUR) #
HS CODE : 4304.00`, describe: "Mink fox fabric in faux fur replicates the luxurious appearance and texture of real mink and fox fur while remaining animal-friendly. This fabric features a plush, soft texture with a realistic look, offering warmth and elegance. Its high-quality synthetic fibers are designed to mimic the natural sheen and feel of genuine fur. Ideal for winter fashion, outerwear, and statement pieces, this faux mink fox fabric combines luxury with ethical fashion choices.", unit: "M", unitPrice: "8 USD/M", image: "t6.jpg"
   },


   {
      id: 7, title: "WHITE FLORAL 100% COTTON CORDING JACQUARD LACE FABRIC", items: `WHITE FLORAL 100% COTTON CORDING JACQUARD LACE FABRIC #
MODEL NUMBER: YW1008J #
HS CODE: 5804.10.00`, describe: "White floral 100% cotton cording jacquard lace fabric combines intricate design with a soft, breathable texture. This fabric features a beautiful floral jacquard pattern created with cording, which adds a raised, textured element to the lace.It ensures comfort and durability while maintaining a crisp, elegant appearance. Ideal for delicate garments, elegant dresses, or decorative home textiles, this fabric offers both sophistication and a classic, timeless appeal.", unit: "M", unitPrice: "4.5 USD/M", image: "t7.jpg"
   },


   {
      id: 8, title: "100%POLYESTER TARTAN ", items: `100%POLYESTER TARTAN 
(WOOL POLYESTER PLAID FABRIC) #
HS CODE: 5407.61`, describe: "100% polyester tartan fabric offers the classic, timeless appeal of tartan patterns with the durability and ease of care provided by polyester. Polyester ensures the fabric is resistant to wrinkles, fading, and shrinking, making it ideal for both everyday wear and special occasions. Its robust nature makes it suitable for garments, accessories, and home furnishings, providing both practicality and classic aesthetic.", unit: "M", unitPrice: "10 USD/M", image: "t8.jpg"
   },


   {
      id: 9, title: "POLYESTER MICROFIBER PEACH SKIN FABRIC", items: `POLYESTER MICROFIBER PEACH SKIN FABRIC, 125 GSM, WATERPROOF, #
WIDTH: 150 CM # Use:USED FOR APPAREL AND HOME TEXTILES #
HS CODE: 5407.61.00`, describe: "Polyester microfiber peach skin fabric is a lightweight material with a smooth, soft texture reminiscent of peach skin. At 125 GSM, it offers a balance between durability and comfort. The fabric is waterproof, making it suitable for outerwear, activewear, and accessories that require resistance to moisture. Its fine microfiber construction ensures breathability while maintaining a sleek, luxurious feel. Ideal for both functional and stylish applications, this fabric combines practicality with a refined touch.", unit: "M", unitPrice: "4 USD/M", image: "t9.jpg"
   },

   {
      id: 10, title: "SATIN FABRIC CHIFFON", items: `SATIN FABRIC CHIFFON 
SHINNY PLICATED  #
HS CODE: 54075490`, describe: "Satin fabric chiffon with a shiny, pleated finish combines elegance with a touch of texture. The satin base provides a smooth, lustrous surface that catches the light beautifully, while the chiffon overlay adds a light, airy feel. The pleated design introduces a sophisticated, textured dimension to the fabric, making it ideal for formal gowns, evening wear, and special occasion attire. This fabric offers both visual appeal and graceful drape, enhancing any garment with a refined and stylish look.", unit: "M", unitPrice: "2 USD/M", image: "t10.jpg"
   },
]

const auto = [
   {
      id: 1, title: "CYLINDER HEAD", items: `CYLINDER HEAD#
HS CODE: 84089090`, describe: "Our cylinder head is a vital engine component that sits atop the engine block, sealing the combustion chamber. It houses key parts like valves, spark plugs, and fuel injectors, and plays a crucial role in engine performance, ensuring efficient combustion and proper airflow. Made from high-strength materials, it is designed to withstand high temperatures and pressures, contributing to the overall durability and reliability of the engine.", unit: "PCS", unitPrice: "20 USD/PCS", image: "a1.jpg"
   },

   {
      id: 2, title: "SOLAR WINDOW FILM", items: `sadas #SOLAR WINDOW FILM: GLUE COATING 2PLY ANTI SCRATCH
#SIZE: 50.8CM X 30M# PACKING: 3.5CUFT/9ROLL/CTN #
HS CODE: 39201099`, describe: "This solar window film features a 2-ply construction with glue coating and an anti-scratch surface. Measuring 50.8 cm x 30 m, this film provides effective solar protection and durability. Its glue coating ensures easy application and strong adhesion, while the anti-scratch layer enhances longevity and maintains clarity. Ideal for reducing heat and glare, this film combines functionality with a sleek, protective finish.", unit: "PCS", unitPrice: "20 USD/PCS", image: "a2.jpg"
   },


   {
      id: 3, title: "ROTARY SHAFT SEAL", items: `012925-01
 ROTARY SHAFT SEAL #INNER DIAMETER :80 MM # POS: 7.8  0.04 KG #
HS CODE: 84842000`, describe: "High-quality rotary shaft seal- offering reliable sealing in rotating machinery. It effectively prevents leakage of fluids or contaminants by maintaining a tight seal between the shaft and its housing. The seal's construction is optimized for durability and performance, making it suitable for various industrial applications. With a weight of just 0.04 kg, it is lightweight yet robust, ensuring ease of installation and long-lasting operation.", unit: "PCS", unitPrice: "4.13 USD/PCS", image: "a3.jpg"
   },

   {
      id: 4, title: "HIGH QUALITY COMPRESSION SPRING", items: `HIGH QUALITY COMPRESSION SPRING #MODEL NUMBER: SPRING (MCGR-9H8)
#LOAD CAPACITY: 85LB
#HS CODE: 7320.20.90`, describe: "SPRING (MCGR-9H8) is a premium compression spring designed to handle a load capacity of up to 85 lb. Crafted from high-strength materials, this spring provides exceptional durability and reliable performance in various mechanical applications. Its precise manufacturing ensures consistent compression and resilience, making it suitable for use in automotive, industrial, and engineering contexts. ", unit: "PCS", unitPrice: "1 USD/PCS", image: "a4.jpg"
   },

   {
      id: 5, title: "EXCAVATOR SPARE PARTS BUCKET LINKS", items: `EXCAVATOR SPARE PARTS BUCKET LINKS (H-LINK PC100 FOR KOMATSU)# MACHINE MODEL: PC 100# HS CODE: 8431.49.90`, describe: "H-Link bucket links are designed specifically for Komatsu PC 100 excavators, offering essential support and connectivity for the bucket assembly. Constructed from high-strength materials, these spare parts provide exceptional durability and reliability, ensuring optimal performance under demanding excavation conditions. The precise engineering of these links helps maintain the alignment and stability of the bucket, enhancing the overall efficiency and longevity of the excavator.", unit: "PCS", unitPrice: "145 EUR/PCS", image: "a5.jpg"
   },


   {
      id: 6, title: "WHISKER CERAMIC BRAKE PADS", items: `WHISKER CERAMIC BRAKE PADS (PREMIUM)# MODEL NUMBER: WCB090#
HS CODE: 68138100`, describe: "The Whisker Ceramic Brake Pads, model WCB090, are premium-grade components designed to provide superior braking performance and longevity. These brake pads are crafted from high-quality ceramic materials, ensuring excellent heat resistance, minimal noise, and reduced brake dust. Their precision engineering and premium construction make them a top choice for drivers seeking both performance and comfort.", unit: "PCS", unitPrice: "145 USD/PCS", image: "a6.jpg"
   },

   {
      id: 7, title: "7.00L-15 14PR BLACK TIRE", items: `7.00L-15 14PR BLACK TIRE #
HS CODE: 40111000`, describe: "This 7.00L-15 14PR black tire is designed for heavy-duty applications, providing robust performance and durability. It offers enhanced strength and resistance to wear, making it suitable for demanding conditions. The tire features a rugged construction and reliable traction, ensuring stability and safety in various terrains. Its black color and standard size of 7.00L-15 make it a versatile choice for both off-road and on-road use.", unit: "PCS", unitPrice: "70 USD/PCS", image: "a7.jpg"
   },


   {
      id: 8, title: "MOTORCYCLE CHAIN", items: `MOTORCYCLE CHAIN
(ROLLER CHAIN / #MODEL NUMBER: 428H-142L#
HS CODE: 7315.11`, describe: "Our high-quality motorcycle chain is a heavy-duty roller chain designed for durability and high performance. It is made from high-grade steel to resist wear and corrosion, making it suitable for various motorcycle models and denotes its heavy-duty nature, providing extra strength compared to standard chains. It's an excellent choice for reliable power transmission and long-lasting performance.", unit: "PCS", unitPrice: "2.05 USD/PCS", image: "a8.jpg"
   },

   {
      id: 9, title: "EXCAVATOR PARTS (EXCAVATOR BUCKET TEETH)", items: `EXCAVATOR PARTS (EXCAVATOR BUCKET TEETH)#
MODEL: 60246758P#
HS CODE: 8431.49.00`, describe: "The excavator bucket teeth model 60246758P are durable wear parts designed to enhance the digging efficiency of excavators. Made from high-strength alloy steel, these teeth offer excellent resistance to wear and abrasion. They ensure precise digging and long-lasting performance, making them ideal for construction and mining applications and these teeth are globally recognized for use in earth-moving machinery.", unit: "PCS", unitPrice: "47 USD/M", image: "a9.jpg"
   },

   {
      id: 10, title: "EXCAVATOR BUCKET LINK", items: `EXCAVATOR BUCKET LINK
#MODEL NUMBER: OEM
#HS CODE: 8431.49.00`, describe: "Excavator bucket link is a crucial component designed to connect the bucket to the excavator arm, ensuring smooth and efficient operation. Made from high-strength materials, this OEM part provides reliable performance and durability in demanding environments. Suitable for various excavator models, it is  using mostly in earth-moving machinery.", unit: "PCS", unitPrice: "80 USD/M", image: "a10.jpg"
   },
]

const rawMateial = [
   {
      id: 1, title: "EXCAVATOR PARTS (EXCAVATOR BUCKET TEETH)", items: `EXCAVATOR PARTS (EXCAVATOR BUCKET TEETH)#
MODEL: 60246758P#
HS CODE: 8431.49.00`, describe: "The excavator bucket teeth model 60246758P are durable wear parts designed to enhance the digging efficiency of excavators. Made from high-strength alloy steel, these teeth offer excellent resistance to wear and abrasion. They ensure precise digging and long-lasting performance, making them ideal for construction and mining applications and these teeth are globally recognized for use in earth-moving machinery.", unit: "PCS", unitPrice: "47 USD/M", image: "r1.jpg"
   },
]


export const allCategoriesNames = ["Textile & Fabrics","Auto & Spare","Raw Material","Building Materials","Industrial Machines & Factory"]