    import { hash } from 'bcryptjs';
    import { PrismaClient } from '@prisma/client';

    const prisma = new PrismaClient();

    export async function POST(req) {
    const { email, password } = await req.json();

    // Validate input
    if (!email || !password) {
        return new Response(JSON.stringify({ message: 'Email and password are required' }), {
        status: 400,
        });
    }

    try {
        // Check if the user already exists
        const existingUser = await prisma.user.findUnique({
        where: { email },
        });

        if (existingUser) {
        return new Response(JSON.stringify({ message: 'User already exists' }), {
            status: 400,
        });
        }

        // Hash password
        const hashedPassword = await hash(password, 10);

        // Save user to database
        await prisma.user.create({
        data: {
            email,
            password: hashedPassword,
        },
        });

        return new Response(JSON.stringify({ message: 'User created successfully' }), {
        status: 201,
        });
    } catch (error) {
        console.error('Error creating user:', error);
        return new Response(JSON.stringify({ message: 'Internal server error' }), {
        status: 500,
        });
    }
    }
