const links = [
    {name: "HOME", link: '/'},
    {name: "SERVICES", link: '/services'},
    {name: "BEFORE AND AFTER", link: '/beforeandafter'},
    {name: "LIBRARY", link: "/library"},
    {name: "GO CAMPING", link: '/camp'},
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
        pdf:'renewal.pdf',
        docx: null, 
    },
    {
        name: 'Electrostatic disinfecting',
        desc: 'A quick overview of Electrostatic Disinfecting',
        pdf:'electrostatic-quick-sheet.pdf',
        docx: null 
    },
    {
        name: 'Electrostatic Q & A',
        desc: 'A more in-depth look into Electrostatic Disinfecting',
        pdf:'electrostatic-qa.pdf',
        docx: null
    },
    {
        name: 'Electrostatic MSDS sheet',
        desc: 'Info on our electrostatic disinfectant',
        pdf:'msds.pdf',
        docx: null
    },
    {
        name: 'Education- Cost savings',
        desc: 'How much can you save by saving your carpets.',
        pdf:'savings.pdf',
        docx: 'savings.docx',
    },
    {
        name: 'CAMP- Preparation is Everything',
        desc: 'Common Area Maintenance Plan- How much can you save.',
        pdf:'camp.pdf',
        docx: 'camp.docx',
    },
]

const beforeAfter = [
    {
        name: 'Fray at bedroom doorway',
        desc: 'It is common for cat owners to see this.',
        before: 'doorway_0-1.jpg',
        after: [
            'doorway_1-1.jpeg',
            'doorway_1-2.jpeg',
            'doorway_1-3.jpeg',
        ],
        afterDesc: 'Most patches can not be seen by the un-trained eye.',
    },
    {
        name: 'Seam coming appart',
        desc: 'Sometimes carpet can degrade at the seams.',
        before: 'doorseam_0-1.jpg',
        after: [
            'doorseam_1-1.jpg',
            'doorseam_1-2.jpg',
        ],
        afterDesc: 'So we cut out the dammaged area and patched in a new piece.',
    },
    {
        name: 'Fraying at the patio door',
        desc: 'This type of dammage is almost always due to a pet. In this case it has already been patched once.',
        before: 'patiodoor_0-1.jpg',
        after: [
            'patiodoor_1-1.jpg',
            'patiodoor_1-2.jpg',
        ],
        afterDesc: 'So we pull out the old patch and put in a new one.',
    },
    {
        name: 'Very dirty carpet',
        desc: 'This carpet was protected in most areas by furniture and throw rugs. This makes the bad areas look worse.',
        before: 'clean_0-1.jpg',
        after: ['clean_1-1.jpg'],
        afterDesc: 'But bad traffic areas are no problem for our Rotovac.',
    },
    {
        name: 'Missing carpet in the corner.',
        desc: 'We dont always know how it happens.',
        before: 'corner_0-1.jpg',
        after: ['corner_1-1.jpg'],
        afterDesc: 'But we know how to fix it.',
    },
    {
        name: 'Hole in carpet by doorway.',
        desc: 'These types of holes pop up all the time.',
        before: 'pet_0-1.jpg',
        after: ['pet_1-1.jpg'],
        afterDesc: 'A quick patch and we are as good as new.',
    },
    {
        name: 'Snagg on a stair lip in a common hallway.',
        desc: 'Woven carpet like this can snagg and over time will look like this. This type of patch is really hard to correct.',
        before: 'stairlip_0-1.jpg',
        after: ['stairlip_1-1.jpg'],
        afterDesc: 'But no patch is impossible with a little time and effort.',
    },
    {
        name: 'Pet dammage on the stairs.',
        desc: 'Cats will scratch and sometimes its on the stairs.',
        before: 'stairs_0-1.jpg',
        after: ['stairs_1-1.jpg'],
        afterDesc: 'We can fix that no problem!',
    },
    {
        name: 'Very wrinkeld carpet.',
        desc: 'If not installed properly you can get carpet that looks like this.',
        before: 'stretch_0-1.jpg',
        after: ['stretch_1-1.jpg'],
        afterDesc: 'All it needs is a little stretching.',
    },
    {
        name: 'Missing carpet.',
        desc: 'You would be surprised how often this can happen at a transition.',
        before: 'tackstrip_0-1.jpg',
        after: ['tackstrip_1-1.jpg'],
        afterDesc: 'Another nice patch.',
    },
    {
        name: 'Carpet starting to dislodge',
        desc: 'This can happen sometimes.',
        before: 'transition_0-1.jpg',
        after: ['transition_1-1.jpg'],
        afterDesc: 'Just need to stretch and tuck it back down and it is as good as new.',
    },



]

export {
    links,
    videos,
    services,
    aboutTags,
    library,
    beforeAfter,
}