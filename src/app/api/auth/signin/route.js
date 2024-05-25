// import { compare } from 'bcryptjs';
// import { PrismaClient } from '@prisma/client';
// import { sign } from 'jsonwebtoken';

// const prisma = new PrismaClient();

// export async function POST(req) {
//   const { email, password } = await req.json();
//     console.log("email,pasword received - from signin>route.js")
//   // Validate input
//   if (!email || !password) {
//     return new Response(JSON.stringify({ message: 'Email and password are required' }), {
//       status: 400,
//     });
//   }

//   // Find user by email
//   const user = await prisma.user.findUnique({
//     where: { email },
//   });

//   if (!user) {
//     return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
//       status: 401,
//     });
//   }

//   // Check password
//   const isValid = await compare(password, user.password);

//   if (!isValid) {
//     return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
//       status: 401,
//     });
//   }

//   // Generate token (you can use any strategy you prefer)
//   const token = sign({ userId: user.id }, process.env.JWT_SECRET, {
//     expiresIn: '1h',
//   });

//   return new Response(JSON.stringify({ token }), {
//     status: 200,
//   });
// }


import { compare } from 'bcryptjs';
import { PrismaClient } from '@prisma/client';
import { sign } from 'jsonwebtoken';
import { signIn } from 'next-auth/react';

const prisma = new PrismaClient();

export async function POST(req) {
  const { email, password } = await req.json();
    console.log(email,password)
  // Validate input
  if (!email || !password) {
    return new Response(JSON.stringify({ message: 'Email and password are required' }), {
      status: 400,
    });
  }

  try {
    // Find user by email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
        
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
      });
    }

    // Check password
    const isValid = await compare(password, user.password);
    

    if (!isValid) {
      return new Response(JSON.stringify({ message: 'Invalid email or password' }), {
        status: 401,
      });
    }

    // Generate token (you can use any strategy you prefer)

    //! idhat dikkat ho rhi hai

    const token = signIn({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1h',
    });

    return new Response(JSON.stringify({ token }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error signing in:', error);
    return new Response(JSON.stringify({ message: 'Internal Server Error-ye wala' }), {
      status: 500,
    });
  }
}

