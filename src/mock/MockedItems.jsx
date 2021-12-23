

const MockedItems = [
    {
        id: "1",
        title: 'Are you experienced?',
        artist: 'The Jimi Hendrix Experience',
        category: 'Rock Psicodélico',
        categoryId: "1",
        expertsChoice: true,
        description: 'Some dummy description 1',
        longDescription: 'Es el álbum debut de la banda angloamericana de rock Jimi Hendrix Experience, publicado en 1967 a través del sello discográfico Track Records. El LP fue un éxito comercial y de crítica y uno de los más exitosos discos debut de la historia del rock. Se basa en la innovadora forma de componer y tocar la guitarra eléctrica de Jimi Hendrix y supuso el comienzo de una nueva dirección en el rock psicodélico y el hard rock.',
        price: 500,
        pictureUrl: '/images/covers/are_you_experienced.jpg'
    },
    {
        id: "2",
        title: 'One Size Fits All',
        artist: 'Frank Zappa',
        category: 'Rock Progresivo',
        categoryId: "2",
        expertsChoice: false,
        description: 'Some dummy description 2',
        longDescription: 'One Size Fits All es un álbum de rock del músico y compositor Frank Zappa y su banda The Mothers of Invention de 1975. Es el último álbum de estudio que grabaría Zappa con la banda. Se preparó y publicitó una versión cuadrafónica del álbum, pero nunca salió al mercado.',
        price: 1500,
        pictureUrl: '/images/covers/one_size_fits_all.jpg'
    },
    {
        id: "3",
        title: 'In the court of the Crimson King',
        artist: 'King Crimson',
        category: 'Rock Progresivo',
        categoryId: "2",
        expertsChoice: false,
        description: 'Some dummy description 3',
        longDescription: 'In the Court of the Crimson King (An Observation by King Crimson) es el álbum debut del grupo inglés King Crimson, producido y publicado en 1969, considerado uno de los primeros álbumes de rock progresivo.',
        price: 550,
        pictureUrl: '/images/covers/court.jpg'
    },
    {
        id: "4",
        title: 'Atom Heart Mother',
        artist: 'Pink Floyd',
        category: 'Rock Psicodélico',
        categoryId: "1",
        expertsChoice: false,
        description: 'Some dummy description 4',
        longDescription: 'Atom Heart Mother —en español: Madre de corazón atómico— es el quinto álbum de la banda británica Pink Floyd publicado en 1970. Es un trabajo de transición ya que empieza a alejarse del rock psicodélico para entrar en el sinfónico y progresivo.',
        price: 550,
        pictureUrl: '/images/covers/Pink_Floyd_AHM.jpg'
    },
    {
        id: "5",
        title: 'Temple Of The Dog',
        artist: 'Temple Of The Dog',
        category: 'Rock Grunge',
        categoryId: "4",
        expertsChoice: false,
        description: 'Some dummy description 5',
        longDescription: 'Temple of the Dog es el único álbum del grupo de grunge del mismo nombre, editado como tributo al fallecido cantante Andrew Wood, quien fuera cantante del grupo Mother Love Bone y amigo personal de Chris Cornell. El grupo estaba conformado por Chris Cornell y Matt Cameron de Soundgarden y por Eddie Vedder, Mike McCready, Stone Gossard y Jeff Ament de Pearl Jam. El álbum fue presentado el 16 de abril de 1991 a través de A&M Records.',
        price: 550,
        pictureUrl: '/images/covers/TOTD.jpg'
    },
    {
        id: "6",
        title: 'Above',
        artist: 'Mad Season',
        category: 'Rock Grunge',
        categoryId: "4",
        expertsChoice: false,
        description: 'Some dummy description 6',
        longDescription: 'Mad Season fue un supergrupo de grunge creado en 1994 en Seattle por Mike McCready, guitarrista de Pearl Jam, Layne Staley, vocalista de Alice In Chains, Barrett Martin, batería de los Screaming Trees, y John Baker Saunders, bajista de The Walkabouts, editando un solo álbum, titulado Above.',
        price: 550,
        pictureUrl: '/images/covers/mad_season.jpg'
    },
    {
        id: "7",
        title: 'Producto 7',
        artist: 'Alice In Chains',
        category: 'Rock Grunge',
        categoryId: "4",
        expertsChoice: false,
        description: 'Some dummy description 7',
        longDescription: 'Jar of Flies es el segundo EP acústico de la banda de grunge Alice in Chains. Fue escrito y grabado en una semana, siendo lanzado a principios de 1994 y llegando a lo más alto en las listas de Estados Unidos, convirtiéndose en el primer EP en debutar en el puesto 1 del ranking Billboard 200. Contiene temas clásicos de la banda como No Excuses, I Stay Away y Nutshell.',
        price: 550,
        pictureUrl: '/images/covers/aic.jpg'
    },
    {
        id: "8",
        title: '10.000 Days',
        artist: 'TOOL',
        category: 'Rock Experimental',
        categoryId: "3",
        expertsChoice: true,
        description: 'Some dummy description 8',
        longDescription: '10,000 Days es el cuarto álbum de estudio de la banda estadounidense Tool, editado el día 2 de mayo de 2006. Fue publicado por Tool Dissectional y Volcano Entertainment. Los sencillos desprendidos del álbum fueron Vicarious y Jambi.',
        price: 550,
        pictureUrl: '/images/covers/tool.jpg'
    },
    {
        id: "9",
        title: 'Close to the edge',
        artist: 'Yes',
        category: 'Rock Progresivo',
        categoryId: "2",
        expertsChoice: false,
        description: 'Some dummy description 9',
        longDescription: 'Close to the Edge es el quinto álbum del grupo británico de rock progresivo Yes. En junio de 1972, poco después de terminar las grabaciones, el baterista Bill Bruford abandonó la banda obligando a los demás integrantes a encontrar un suplente antes de comenzar su nueva gira en los Estados Unidos.',
        price: 550,
        pictureUrl: '/images/covers/yes.jpg'
    },
    {
        id: "10",
        title: 'Obscured by clouds',
        artist: 'Pink Floyd',
        category: 'Rock Psicodélico',
        categoryId: "1",
        expertsChoice: false,
        description: 'Some dummy description 10',
        longDescription: 'Obscured by Clouds —en español: Oscurecido por nubes— es el séptimo álbum de estudio de la banda británica Pink Floyd. Este disco fue concebido como Banda sonora para la película francesa El valle, dirigida por Barbet Schroeder. Es el segundo proyecto de este tipo, luego de Music from the Film More, que sirvió para la también película de Schroeder, More, de 1969. Este disco no sigue la línea musical que la banda traía hasta el momento, pero ayudó mucho al éxito en Estados Unidos al haber enfocado buena parte de la gira pre-Dark Side of the Moon',
        price: 550,
        pictureUrl: '/images/covers/obscured.jpg'
    },
    {
        id: "11",
        title: 'Producto 11',
        artist: 'The Velvet Underground',
        category: 'Rock Experimental',
        categoryId: "3",
        expertsChoice: false,
        description: 'Some dummy description 11',
        longDescription: 'The Velvet Underground & Nico es el primer álbum de estudio de la banda estadounidense The Velvet Underground, lanzado en 1967 con la colaboración en las voces de la cantante alemana Nico. Su grabación se efectuó en Nueva York y Hollywood entre abril y mayo de 1966 bajo la dirección del líder del movimiento pop art, el estadounidense Andy Warhol.',
        price: 550,
        pictureUrl: '/images/covers/velvet.jpg'
    },
    {
        id: "12",
        title: 'Electric Ladyland',
        artist: 'The Jimi Hendrix Experience',
        category: 'Rock Psicodélico',
        categoryId: "1",
        expertsChoice: false,
        description: 'Some dummy description 12',
        longDescription: 'Electric Ladyland es el tercer álbum de The Jimi Hendrix Experience, el cual fue lanzado en 1968, siendo el último de la banda. Es un álbum doble considerado uno de sus trabajos más destacables. Muestra elementos que anticipan el rock progresivo (Aunque no pertenece a este género pero puede ser considerado una influencia) en canciones como "1983... (A Merman I Should Turn to Be)", y la versión de la canción de Bob Dylan "All Along The Watchtower" (que suele ser considerada por muchos como la mejor versión de la misma, incluso por Dylan)',
        price: 550,
        pictureUrl: '/images/covers/electric.jpg'
    },
];

export default MockedItems;