export interface PortfolioItem {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
  note?: string;
}

const placeholderImage = "/temp-thumbnail.png";

export const videoItems: PortfolioItem[] = [
  {
    title: "My Dollar (2025)",
    description: "A hungry student cannot find his dollar after trying to buy a snack at the vending machine.",
    imageSrc: "https://img.youtube.com/vi/5-NMg_Ddx4I/hqdefault.jpg",
    imageAlt: "Thumbnail for My Dollar",
    href: "https://www.youtube.com/watch?v=5-NMg_Ddx4I",
    note: "Submitted for the UConn Fall 2025 UCTV 5x5 Challenge.",
  },
  {
    title: "Zooming into the Nostalgic Lens - How the Body Processes Memories (2025)",
    description:
      "A short scientific communication film on how the central nervous system helps with memory formation.",
    imageSrc: "https://img.youtube.com/vi/xCRZVGsrBuA/hqdefault.jpg",
    imageAlt: "Thumbnail for Zooming into the Nostalgic Lens",
    href: "https://www.youtube.com/watch?v=xCRZVGsrBuA",
    note: "Submitted for PNB 3120W (Public Communication of Physiology and Neurobiology) at UConn.",
  },
  {
    title: "I Otama-Love You! (2021)",
    description: "A sentient otamatone instrument races to confess to his true love before it's too late.",
    imageSrc: placeholderImage,
    imageAlt: "Thumbnail for I Otama-Love You!",
    href: "https://drive.google.com/open?id=15KIFXZW8oyQPZf11SlUEqmBilv-dpH8G",
  },
  {
    title: "Ocean Park 2025",
    description:
      "A montage video showcasing the sealife footage my family and I filmed at Ocean Park aquarium in the Philippines. This project was shot and edited in collaboration with my cousin, Rhandel Yacat.",
    imageSrc: placeholderImage,
    imageAlt: "Thumbnail for Ocean Park 2025",
    href: "https://drive.google.com/open?id=1_1Yr_ymoEZxfv8cjNKxrAnKJ-sw6GScQ",
  },
];

export const writingItems: PortfolioItem[] = [
  {
    title: "Marlo and the Purple Eyes (2022)",
    description: "A soldier is sent on a quest to find an ancient relic, right after the end of a gruesome war.",
    imageSrc: placeholderImage,
    imageAlt: "Thumbnail for Marlo and the Purple Eyes",
    href: "https://drive.google.com/open?id=11Ks1ESzbNw9Cz3XpiZMGGYQR3Kq-IPhM",
  },
  {
    title: "My Dollar (2025)",
    description: "A hungry student cannot find his dollar after trying to buy a snack at the vending machine.",
    imageSrc: placeholderImage,
    imageAlt: "Thumbnail for My Dollar screenplay",
    href: "https://drive.google.com/open?id=1quC8ZRhDcHbxZlB6Y1PxachQYn9uvlUl",
  },
  {
    title: "The Autonomic Nervous System's Response to Horror and Relaxing Content (2025)",
    description:
      "A physiological laboratory report examining participant reactions to watching videos of different genres.",
    imageSrc: placeholderImage,
    imageAlt: "Thumbnail for The Autonomic Nervous System's Response to Horror and Relaxing Content",
    href: "https://drive.google.com/open?id=11Q-qQvnr0GC9go_aJpzJg62unda7Q5kL",
    note: "Research conducted with Claire Kenny.",
  },
  {
    title: "Working Under Pressure: How the Brain Helps you Focus (2025)",
    description: "A website article discussing an ironic relationship between the stress response and productivity.",
    imageSrc: placeholderImage,
    imageAlt: "Placeholder thumbnail for Working Under Pressure",
    href: "https://pnbyacatjerickblog.weebly.com/",
    note: "Created with Weebly. Submitted for PNB 3120W at UConn.",
  },
  {
    title: "Don't Dive Into Irukandji Syndrome (2025)",
    description: "An infographic listing the potential dangers and treatment options for irukandji jellyfish stings.",
    imageSrc: placeholderImage,
    imageAlt: "Thumbnail for Don't Dive Into Irukandji Syndrome",
    href: "https://drive.google.com/open?id=1q6vYf-aCq1rxIoM3sykgU__yCGU95wEJ",
    note: "Created with Canva. Submitted for PNB 3120W at UConn.",
  },
  {
    title: "Stress VS Hydration: The Importance of Drinking Water (2025)",
    description: "An infographic brochure explaining the physiology behind hydration in the body.",
    imageSrc: placeholderImage,
    imageAlt: "Thumbnail for Stress VS Hydration",
    href: "https://drive.google.com/open?id=14n5RwWNiVABhJrValF_vkMw111l4-qOK",
    note: "Created with Canva. Submitted for PNB 3120W at UConn.",
  },
];
