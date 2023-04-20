import { PrismaClient, Prisma } from '@prisma/client';

const prisma = new PrismaClient();

const gameData: Prisma.GameCreateInput[] = [
  {
    id: 2284,
    name: "The Legend of Zelda: Majora's Mask 3D",
    description: "In three days, the moon will fall and the land of Termina will meet with a terrible fate. Can you save it in time? Relive the world’s final 72 hours, solve elaborate puzzles, conquer dungeons, battle giant bosses, and befriend the doomed people of Termina in one of Nintendo’s most suspenseful apocalyptic adventures ever. The Legend of Zelda: Majora’s Mask 3D is a remastered and enhanced version of the Nintendo classic that’s unlike any other Legend of Zelda adventure. In this shadowy tale, a masked Skull Kid drags Link into the world of Termina, where the moon is falling from the sky. Lucky for Termina, Link can reverse time and relive his last 72 hours in limitless ways. Each time, he’ll don any of his 20+ masks, help different citizens, battle different bosses, and ultimately change the fate of a world. This is the definitive version of a dark classic.",
    percentRecommended: '96',
    medianScore: '90',
    firstReleaseDate: '2015-02-13T00:00:00.000Z',
    Rating: '',
    platforms: {
      create: [
        {
          id: 83,
          name: 'Nintendo 64',
        },
      ],
    },
    genres: {
      create: [
        {
          id: 3,
          name: 'Adventure',
        },
        {
          id: 4,
          name: 'Action',
        },
      ],
    },
    images: {
      create: [
        {
          id: 1,
          box: 'game/2284/o/V2asxzwo.jpg',
          masthead: 'game/2284/o/Q1sRyR5T.jpg',
          banner: 'game/2284/o/j5tzyWYC.jpg',
          screenshots: 'game/2284/o/HzWkUTI8.jpg',
        },
      ],
    },
    companies: {
      create: [
        {
          id: 1,
          name: 'Nintendo',
          type: 'PUBLISHER',
        },
      ],
    },
  },
];

async function main() {
  console.log(`Start seeding ...`);
  for (const u of gameData) {
    const game = await prisma.game.create({
      data: u,
    });
    console.log(`Created game with id: ${game.id}`);
  }
  console.log(`Seeding finished.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
