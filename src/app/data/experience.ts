export interface ExperienceEntry {
  period: string;
  text: string;
}

export interface ExperienceGroup {
  title: string;
  kicker: string;
  entries: ExperienceEntry[];
}

export const EXPERIENCE: ExperienceGroup[] = [
  {
    title: 'Academia',
    kicker: 'Teaching',
    entries: [
      {
        period: 'Jan 2009 – 2021',
        text: 'Assistant Professor, Indus Valley School of Art and Architecture, Karachi. Taught, designed course outlines and led the Basic Design course, including academic coordination and mentoring.',
      },
      {
        period: 'Jul 2014 – 2016',
        text: 'Adjunct faculty, Graphic Design & Media Studies, Department of Visual Studies, University of Karachi.',
      },
      {
        period: 'Jul 2014 – May 2015',
        text: 'Adjunct faculty, Media Sciences, Iqra University, Karachi.',
      },
      {
        period: 'Jul 2012 – Dec 2012',
        text: 'Adjunct faculty, Media Sciences, SZABIST University, Karachi.',
      },
    ],
  },
  {
    title: 'Exhibitions',
    kicker: 'Selected',
    entries: [
      {
        period: '2025',
        text: 'London Art Biennale, London, UK.',
      },
      {
        period: '2023',
        text: 'In The Crossfire, SEAS – Socially Engaged Art Salon, Brighton, UK.',
      },
      {
        period: '2023',
        text: 'Cut Torn and Mended, Spilt Milk, Scotland, UK. Online group exhibition with accompanying zine.',
      },
      {
        period: '2021',
        text: 'Harris Open, Harris Museum & Art Gallery, Preston, UK.',
      },
      {
        period: '2021',
        text: 'On belonging — Duality, collaboration with Yorkshire-based artist Layla Khoo, funded by Arts Council England.',
      },
      {
        period: '2021',
        text: 'Patterns of Migration, online exhibition supported by the University of Central Lancashire with Gawthorpe Textiles Collection.',
      },
      {
        period: '2017',
        text: 'SUGARCOATED — group show of Pakistani young artists, Hoxton Basement, London, organised by Rangoonwala Trust.',
      },
      {
        period: '2015',
        text: 'HIDDEN FROM VIEW — Women photographers photographing Women, Canadian Embassy, Islamabad.',
      },
    ],
  },
  {
    title: 'Projects',
    kicker: 'Public & participatory',
    entries: [
      {
        period: '2021',
        text: 'Hanover Project mural, University of Central Lancashire, Preston. Collaborative mural Learning in-and-within relation (after Édouard Glissant), with Jade Montserrat.',
      },
      {
        period: '2019',
        text: 'Poster designing activity at Mashaal Orphanage with Foundation Programme students, Indus Valley School of Art and Architecture.',
      },
      {
        period: '2018',
        text: 'Community mural at Lignum Park with Foundation Programme students, Indus Valley School of Art and Architecture.',
      },
      {
        period: '2017',
        text: 'Creative Crosswalks (Zebra Crossings), Indus Valley School of Art and Architecture, Karachi. Community-facing participatory project with Foundation programme students.',
      },
      {
        period: '2017',
        text: 'Reel On Hai, Karachi Biennale. Worked on and launched two reel artworks as part of the public outreach programme.',
      },
      {
        period: '2017',
        text: 'Head & artist, public art project of Shireen Ameer Begum Bhutto flyover in Larkana, Sindh (17 columns and 3 round pillars).',
      },
      {
        period: '2016',
        text: 'FTC Flyover Beautification, Sindh Government, Karachi. Head & artist for a large-scale public-art project, including illuminated columns.',
      },
    ],
  },
  {
    title: 'Publications',
    kicker: 'Writing & books',
    entries: [
      {
        period: '2023',
        text: 'Artworks in Cut Torn and Mended zine, Spilt Milk, Scotland.',
      },
      {
        period: '2023',
        text: 'Tension, artist book, SU4IP, England.',
      },
      {
        period: '2021',
        text: 'Patterns of Pakistan — adult colouring book of 46 tessellation-inspired patterns, Amazon UK.',
      },
      {
        period: '2021',
        text: '‘Public Art: From Karachi Biennale to the Killing Fields of Karachi’, DCA conference proceedings, Kennesaw State University, Atlanta.',
      },
      {
        period: '2018',
        text: '‘Public Art: An Evolution from Traditional Enclosure to Contemporary Invasion’, DCA, Cornell University, Ithaca, New York.',
      },
      {
        period: '2018',
        text: '‘Bridging the Gap, Filling in the Void: Public Art in Diverse Communities’, Altinbas University, Turkey.',
      },
    ],
  },
];
