export type WorkCategory = 'printmaking' | 'photography' | 'public-art';

export interface Work {
  title: string;
  medium: string;
  image: string;
  description: string;
  category: WorkCategory;
}

export const CATEGORIES: { id: 'all' | WorkCategory; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'printmaking', label: 'Print' },
  { id: 'photography', label: 'Photography' },
  { id: 'public-art', label: 'Public art' },
];

export const WORKS: Work[] = [
  {
    title: 'The miracle cream',
    medium: 'Intaglio type etching on Somerset',
    image: 'assets/web-23.png',
    category: 'printmaking',
    description:
      'The artwork ‘The miracle cream’ underlines discrimination based on skin colour in Pakistani society with its strong roots in the British colonial period. The artwork depicts this discrimination through a facial transformation.',
  },
  {
    title: 'Mirror of British Merchandise',
    medium: 'Intaglio type etching on Somerset',
    image: 'assets/web-24.png',
    category: 'printmaking',
    description:
      'In this work, a pair of foxes beside Britannia refers to the British\'s mischief and opportunistic traits at the time of British Raj. A little boy, with signs of famine, is pivoted in the centre of the picture.',
  },
  {
    title: 'Resurrection',
    medium: 'Intaglio type etching on Somerset',
    image: 'assets/web-25.png',
    category: 'printmaking',
    description:
      'The artwork explores the subject of the slave trade during the East India Company\'s (EIC) rule in the Indian Subcontinent. The artwork uses the found image of a banknote issued for the British Raj under King George V of the United Kingdom, Emperor of India. The image shows King George V looking at the statue of a black woman.',
  },
  {
    title: 'Little Henry and His Bearer',
    medium: 'Digital print on Chenille',
    image: 'assets/web-26.png',
    category: 'printmaking',
    description:
      'The work depicts Virgin Mary\'s image with the baby Christ and highlights female servants\' role as custodian mothers and wet nurses during the British Raj. It also idealises racial dichotomy by using a black bearer with unimaginable love for a white child and vice versa.',
  },
  {
    title: 'Ishq (Love)',
    medium: 'Photography (single exposure)',
    image: 'assets/ishq.jpg',
    category: 'photography',
    description:
      'This investigation is about Ishq (love). Love that is divine and unconditional. This piece was part of a gallery exhibition with the theme: ‘Ishq Vishq’.',
  },
  {
    title: 'Vishq (Pseudoword)',
    medium: 'Photography (single exposure)',
    image: 'assets/vishq.jpg',
    category: 'photography',
    description:
      'This investigation is about Vishq: a pseudoword that I had perceived as material love. Love that is impure and conditional.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-3.jpg',
    category: 'photography',
    description:
      'This piece talks about the many readings I had to do as part of my coursework. These readings included various photo books that were meant to increase my visual vocabulary.',
  },
  {
    title: 'Arsi Musaf (A ritual in Pakistani marriages)',
    medium: 'Photography (single exposure)',
    image: 'assets/web-4.jpg',
    category: 'photography',
    description:
      'This work expresses the social pressure of getting married in Pakistan. It depicts a girl being pushed onto the matrimonial stage.',
  },
  {
    title: 'Resemblance',
    medium: 'Photography (single exposure)',
    image: 'assets/web-5.jpg',
    category: 'photography',
    description:
      'This piece discovers the resemblance between mother and daughter by manipulating two photographs.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-6.jpg',
    category: 'photography',
    description:
      'This piece explores the idea of experiencing the young hood of a mother and a daughter at the same time of life.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-8.jpg',
    category: 'photography',
    description:
      'This piece revolves around self exploration and dreams that are undesirable, because they cannot be fulfilled yet they linger as thoughts.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-9.jpg',
    category: 'photography',
    description:
      'This piece is about self-exploration and expresses the dream of flying a space shuttle up into the Milky Way.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-10.jpg',
    category: 'photography',
    description:
      'This piece is about self-exploration. The dream of experiencing the life of an eskimo in and around the igloo.',
  },
  {
    title: 'Candid Conversations',
    medium: 'Photography (single exposure)',
    image: 'assets/web-11.jpg',
    category: 'photography',
    description:
      'The exclusivity of Pakistan was explored by drawing images of Pakistani iconic figures on ‘Chenaks’ (kettles). This installation was exhibited at Hoxton Basement, London, UK.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-12.jpg',
    category: 'photography',
    description:
      'This work was created for a photo exhibition titled ‘Hidden From View - Women photographers photographing Women’, at the Canadian Embassy.',
  },
  {
    title: 'Istanbul',
    medium: 'Photography (single exposure)',
    image: 'assets/web-13.jpg',
    category: 'photography',
    description:
      'I launched my atelier ‘innovative arts’. Under this atelier I introduced hand painted shoes and digitally printed jackets.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-14.jpg',
    category: 'photography',
    description:
      'This photograph has Avon\'s mouth fresh bottle. The texture and colour of the bottle were quite fascinating. The bottle was shot separately. The background includes Monet\'s painting of water lilies with a Plumeria flower in the foreground. In the end text was added.',
  },
  {
    title: 'Independence',
    medium: 'Photography (single exposure)',
    image: 'assets/web-15.jpg',
    category: 'photography',
    description:
      'Since I decided to gift this work to Karachi on August 14th I captured the energy of independence by using the colour green. I chose the national flower Jasmine as a symbol of independence and to fill the air with a spirit of independence!',
  },
  {
    title: 'FTC Flyover, night lighting',
    medium: 'Public art documentation',
    image: 'assets/web-16.jpg',
    category: 'public-art',
    description:
      'The columns, murals and ceilings were to be lit to be viewed at night. The lighting effort was divided into two parts. One was to light up the murals and the second was to light up the columns.',
  },
  {
    title: 'FTC Flyover mural, Jinnah',
    medium: 'Public art documentation',
    image: 'assets/web-17.jpg',
    category: 'public-art',
    description:
      'One of the major projects that I have completed for the government of Sindh, Pakistan was the FTC Flyover beautification in Karachi. This is one of the two murals depicting Jinnah as a modern and progressive leader.',
  },
  {
    title: 'FTC Flyover lighting team',
    medium: 'Public art documentation',
    image: 'assets/web-18.jpg',
    category: 'public-art',
    description:
      'In this photograph I am with my lighting team who worked tremendously day and night on the FTC Flyover beautification project.',
  },
  {
    title: 'FTC Flyover mural, Karachi Sea View',
    medium: 'Public art documentation',
    image: 'assets/web-19.jpg',
    category: 'public-art',
    description:
      'This is the second of the two murals depicting the sunrise of Karachi Sea View. Children playing in the foreground depict peace and harmony.',
  },
  {
    title: 'From the Flux of Daily Life',
    medium: 'Photography (single exposure)',
    image: 'assets/web-20.jpg',
    category: 'photography',
    description:
      'This work was created for a photo-essay on Saddar Karachi. When I was at a hawker who sells mirrors a person passed by and his reflection appeared in the mirror. This provided me a decisive moment and I couldn\'t miss the chance of taking this documentary photograph.',
  },
  {
    title: 'Muntazir',
    medium: 'Photography (single exposure)',
    image: 'assets/web-21.jpg',
    category: 'photography',
    description:
      'This exploration is about an esoteric mystical relationship inspired by the poetry of Hazrat Zaheen Shah Taji, a sufi poet.',
  },
  {
    title: 'Untitled',
    medium: 'Photography (single exposure)',
    image: 'assets/web-22.jpg',
    category: 'photography',
    description:
      'This work was created as part of a portrait series. This photograph reveals the character of a person by exploring an unconventional style of portraiture.',
  },
];
