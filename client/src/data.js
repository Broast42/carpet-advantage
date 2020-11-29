const links = [
    {name: "HOME", link: '/'},
    {name: "SERVICES", link: '/services'},
    {name: "BEFORE AND AFTER", link: '/beforeandafter'},
    {name: "LIBRARY", link: "/library"},
    {name: "GO CAMPING", link: '/camping'},
    {name: "ABOUT US", link:"/about"}
]

const videos = [
    {name: 'The Rotovac', url: 'https://youtu.be/lOljlH5HTkA' },
    {name: 'Electrostatic Disinfecting', url: 'https://youtu.be/su11f5GGT2M' }
]

const services = [
    {
        cateagory: "Professional Carpet Cleaning",
        services: [
            "Truck-mount or Portable Steam Extraction",
            "Rotovac Powerwand",
            "Proprietary Cleaning Solutions and Powders",
            "Industry Expertise",
            "Complimentary Deodorization",
        ],

    },
    {
        cateagory: "The Rotovac Powerwand",
        services: [
            "2 Stainless Steel Oscillating Scrubbing Heads",
            "6 Vacuum Slots",
            "6 Spray Jets",
            "Rotation at 250 RPM",
            "Major Multi-directional Cleaning",
            "Wait till you see the results. It really revitalizes carpet!"
        ],
        

    },
    {
        cateagory: "Specialty Repairs and Stain Removal ",
        services: [
            "Patch Repairs to Remove Some Stains",
            "Cigarette Burns Repaired",
            "Gum, Wax Removal",
            "Red Stain Removal ",
            "Transition Strips Replaced",
            "Ripples and Wrinkles Removed by Stretching",
            "Seam Repair",
            "Pet Damage Repair",
            "Pad Replacement, Re-tuck and Re-seam",
            "Rust Removal",
            "Ink Removal",
        ],        
    },
    {
        cateagory: "Odors",
        services: [
            "Smoke Treatment",
            "Pet Odor Treatment",
            "Unidentified",
        ],
    },
]

const aboutTags = [
    {
        pic: 'apartment',
        alt: 'A hi-rise appartment complex',
        tagline: 'Specializing in serving the apartment industry since 1989',
        descrips: [
            "Get market ready with us for your vacant apartments!",
            "Reward your residents with renewal cleans of their apartment.",
            "Keep your common areas clean and fresh, your residents will love it!"
        ]
    },
    {
        pic: 'apartment2',
        alt: 'Town home and apartment complex',
        tagline: 'Long term relationships with all sizes of multi-family housing',
        descrips: [
            "Hi Rise Apartment Complexes and Town homes.",
            "1, 2, 3 bedroom apartments in any style complex.",
            "Vacant apartments, Occupied Apartments and Common Areas."
        ]
    },
]

const library = [
    {
        name: 'Renewal Carpet Cleaning',
        desc: 'Information on carpet cleaning for tennants who have renewed their lease.',
        link:'Renewal', 
    },
    {
        name: 'Electrostatic disinfecting',
        desc: 'A quick overview of Electrostatic Disinfecting',
        link:'Electrostatic', 
    },
    {
        name: 'Electrostatic Q & A',
        desc: 'A more in-depth look into Electrostatic Disinfecting',
        link:'ElectroQA', 
    },
]

export {
    links,
    videos,
    services,
    aboutTags,
    library,
}