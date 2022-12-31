// q: how do i run seed script
// a: npx ts-node site/prisma/seed.ts

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	const deletedUserInfo = await prisma.category.deleteMany();
  console.log(`Deleted ${deletedUserInfo.count} users`);
}
main()
/** Alternatively, you can add arguments to specify which users should be deleted */
// const deletedUserInfo = await prisma.user.deleteMany({
//   where: {
//     email: {
//       endsWith: "@prisma.io"
//     }
//   }
// })


/*
async function main() {
  const newsCategory = await prisma.category.create({ data: { name: 'news' } })
  const opinionCategory = await prisma.category.create({ data: { name: 'opinion' } })
  const artsCategory = await prisma.category.create({ data: { name: 'arts and entertainment' } })
  const sportsCategory = await prisma.category.create({ data: { name: 'sports' } })
  const cartoonsCategory = await prisma.category.create({ data: { name: 'cartoons' } })
  const videosCategory = await prisma.category.create({ data: { name: 'videos' } })

  // Create users
  const user1 = await prisma.user.create({
    data: {
      username: 'user1',
      email: 'user1@example.com',
      password: 'password'
    }
  })
  const user2 = await prisma.user.create({
    data: {
      username: 'user2',
      email: 'user2@example.com',
      password: 'password'
    }
  })
  const user3 = await prisma.user.create({
    data: {
      username: 'user3',
      email: 'user3@example.com',
      password: 'password'
    }
  })

  // Create posts
  const post1 = await prisma.post.create({
    data: {
      title: 'Post 1',
      subtitle: 'Subtitle for post 1',
      description: 'Description for post 1',
      textContent: 'Text content for post 1',
      categories: {
        connect: [{ id: newsCategory.id }, { id: opinionCategory.id }]
      },
      author: {
        connect: { id: user1.id }
      }
    }
  })
  const post2 = await prisma.post.create({
    data: {
      title: 'Post 2',
      subtitle: 'Subtitle for post 2',
      description: 'Description for post 2',
      textContent: 'Text content for post 2',
      categories: {
        connect: [{ id: artsCategory.id }, { id: sportsCategory.id }]
      },
      author: {
        connect: { id: user2.id }
      }
    }
  })
  const post3 = await prisma.post.create({
    data: {
      title: 'Post 3',
      subtitle: 'Subtitle for post 3',
      description: 'Description for post 3',
      textContent: 'Text content for post 3',
      categories: {
        connect: [{ id: cartoonsCategory.id }, { id: videosCategory.id }]
      },
      author: {
        connect: { id: user3.id }
      }
    }
  })
}

main()
	.then(() => {
		console.log("Seed data successfully created");
	})
	.catch(error => {
		console.error("Error creating seed data:", error);
	});
  
