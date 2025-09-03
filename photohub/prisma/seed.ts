import { PrismaClient, UserRole, ServiceType, PortfolioCategory, PricingType, BookingStatus } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting database seed...')

  // Clear existing data
  await prisma.review.deleteMany()
  await prisma.booking.deleteMany()
  await prisma.availabilitySlot.deleteMany()
  await prisma.pricing.deleteMany()
  await prisma.portfolioItem.deleteMany()
  await prisma.listing.deleteMany()
  await prisma.hostProfile.deleteMany()
  await prisma.payout.deleteMany()
  await prisma.user.deleteMany()

  // Create demo users
  const admin = await prisma.user.create({
    data: {
      email: 'admin@photohub.com',
      name: 'Admin User',
      role: UserRole.ADMIN,
    },
  })

  const customer1 = await prisma.user.create({
    data: {
      email: 'customer@photohub.com',
      name: 'John Customer',
      role: UserRole.CUSTOMER,
    },
  })

  const customer2 = await prisma.user.create({
    data: {
      email: 'sarah@example.com',
      name: 'Sarah Wilson',
      role: UserRole.CUSTOMER,
    },
  })

  // Create host profiles
  const host1 = await prisma.user.create({
    data: {
      email: 'sophia@photohub.com',
      name: 'Sophia Miller',
      role: UserRole.HOST,
      hostProfile: {
        create: {
          bio: 'Professional photographer with 8+ years of experience specializing in weddings and corporate events.',
          yearsExperience: 8,
          services: [ServiceType.PHOTOGRAPHY, ServiceType.VIDEOGRAPHY],
          equipment: ['Canon EOS R5', 'Sony A7III', 'DJI Drone', 'Profoto Lighting'],
          city: 'San Francisco, CA',
          ratingAvg: 4.8,
          ratingCount: 127,
        },
      },
    },
    include: {
      hostProfile: true,
    },
  })

  const host2 = await prisma.user.create({
    data: {
      email: 'ethan@photohub.com',
      name: 'Ethan Carter',
      role: UserRole.HOST,
      hostProfile: {
        create: {
          bio: 'Aerial photography specialist with FAA certification. Capturing stunning drone footage for real estate and events.',
          yearsExperience: 5,
          services: [ServiceType.DRONE, ServiceType.PHOTOGRAPHY],
          equipment: ['DJI Mavic 3 Pro', 'DJI Inspire 2', 'GoPro Hero 11', 'ND Filters'],
          city: 'Los Angeles, CA',
          ratingAvg: 4.9,
          ratingCount: 89,
        },
      },
    },
    include: {
      hostProfile: true,
    },
  })

  const host3 = await prisma.user.create({
    data: {
      email: 'anna@photohub.com',
      name: 'Anna Anderson',
      role: UserRole.HOST,
      hostProfile: {
        create: {
          bio: 'Studio photographer with a modern, minimalist approach. Perfect for portraits, product photography, and branding.',
          yearsExperience: 6,
          services: [ServiceType.STUDIO, ServiceType.PHOTOGRAPHY],
          equipment: ['Nikon Z6', 'Studio Lighting Kit', 'Backdrop System', 'Reflectors'],
          city: 'New York, NY',
          ratingAvg: 4.7,
          ratingCount: 156,
        },
      },
    },
    include: {
      hostProfile: true,
    },
  })

  // Create portfolio items
  if (host1.hostProfile) {
    await prisma.portfolioItem.createMany({
      data: [
        {
          hostId: host1.hostProfile.id,
          url: 'https://images.unsplash.com/photo-1519741497674-611481863552?w=800',
          caption: 'Wedding ceremony at Golden Gate Park',
          category: PortfolioCategory.WEDDING,
        },
        {
          hostId: host1.hostProfile.id,
          url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
          caption: 'Corporate team building event',
          category: PortfolioCategory.CORPORATE,
        },
        {
          hostId: host1.hostProfile.id,
          url: 'https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=800',
          caption: 'Birthday celebration photography',
          category: PortfolioCategory.BIRTHDAY,
        },
      ],
    })
  }

  if (host2.hostProfile) {
    await prisma.portfolioItem.createMany({
      data: [
        {
          hostId: host2.hostProfile.id,
          url: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800',
          caption: 'Aerial view of downtown LA',
          category: PortfolioCategory.AERIAL,
        },
        {
          hostId: host2.hostProfile.id,
          url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800',
          caption: 'Real estate drone photography',
          category: PortfolioCategory.OTHER,
        },
      ],
    })
  }

  if (host3.hostProfile) {
    await prisma.portfolioItem.createMany({
      data: [
        {
          hostId: host3.hostProfile.id,
          url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800',
          caption: 'Professional headshot session',
          category: PortfolioCategory.CORPORATE,
        },
        {
          hostId: host3.hostProfile.id,
          url: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800',
          caption: 'Product photography for e-commerce',
          category: PortfolioCategory.OTHER,
        },
      ],
    })
  }

  // Create pricing
  if (host1.hostProfile) {
    await prisma.pricing.create({
      data: {
        hostId: host1.hostProfile.id,
        hourlyRate: 150,
        dailyRate: 1200,
        packages: [
          {
            name: 'Wedding Package',
            desc: 'Full day wedding coverage with 500+ edited photos',
            price: 2500,
          },
          {
            name: 'Corporate Event',
            desc: '4-hour corporate event coverage with 100+ edited photos',
            price: 800,
          },
        ],
      },
    })
  }

  if (host2.hostProfile) {
    await prisma.pricing.create({
      data: {
        hostId: host2.hostProfile.id,
        hourlyRate: 200,
        dailyRate: 1500,
        packages: [
          {
            name: 'Real Estate Package',
            desc: 'Aerial and ground photography for property listings',
            price: 500,
          },
        ],
      },
    })
  }

  if (host3.hostProfile) {
    await prisma.pricing.create({
      data: {
        hostId: host3.hostProfile.id,
        hourlyRate: 120,
        dailyRate: 900,
        packages: [
          {
            name: 'Portrait Session',
            desc: '1-hour professional portrait session with 20 edited photos',
            price: 300,
          },
        ],
      },
    })
  }

  // Create listings
  if (host1.hostProfile) {
    await prisma.listing.create({
      data: {
        hostId: host1.hostProfile.id,
        title: 'Professional Wedding Photography',
        description: 'Capture your special day with our professional wedding photography services. We specialize in candid moments and artistic compositions.',
        baseCity: 'San Francisco, CA',
        tags: ['wedding', 'photography', 'events', 'professional'],
        isActive: true,
      },
    })
  }

  if (host2.hostProfile) {
    await prisma.listing.create({
      data: {
        hostId: host2.hostProfile.id,
        title: 'Aerial Drone Photography & Videography',
        description: 'Stunning aerial footage for real estate, events, and commercial projects. FAA certified pilot with professional equipment.',
        baseCity: 'Los Angeles, CA',
        tags: ['drone', 'aerial', 'real estate', 'videography'],
        isActive: true,
      },
    })
  }

  if (host3.hostProfile) {
    await prisma.listing.create({
      data: {
        hostId: host3.hostProfile.id,
        title: 'Studio Portrait & Product Photography',
        description: 'Professional studio photography for portraits, headshots, and product photography. Modern, clean aesthetic.',
        baseCity: 'New York, NY',
        tags: ['studio', 'portraits', 'product', 'professional'],
        isActive: true,
      },
    })
  }

  // Create availability slots
  const now = new Date()
  const futureDate = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000) // 7 days from now

  if (host1.hostProfile) {
    await prisma.availabilitySlot.createMany({
      data: [
        {
          hostId: host1.hostProfile.id,
          start: new Date(futureDate.getTime() + 9 * 60 * 60 * 1000), // 9 AM
          end: new Date(futureDate.getTime() + 17 * 60 * 60 * 1000), // 5 PM
          isBlocked: false,
        },
        {
          hostId: host1.hostProfile.id,
          start: new Date(futureDate.getTime() + 24 * 60 * 60 * 1000 + 10 * 60 * 60 * 1000), // Next day 10 AM
          end: new Date(futureDate.getTime() + 24 * 60 * 60 * 1000 + 18 * 60 * 60 * 1000), // Next day 6 PM
          isBlocked: false,
        },
      ],
    })
  }

  // Create demo bookings
  const listing1 = await prisma.listing.findFirst({
    where: { hostId: host1.hostProfile?.id },
  })

  if (listing1) {
    await prisma.booking.create({
      data: {
        listingId: listing1.id,
        customerId: customer1.id,
        hostId: host1.id,
        start: new Date(futureDate.getTime() + 10 * 60 * 60 * 1000),
        end: new Date(futureDate.getTime() + 14 * 60 * 60 * 1000),
        pricingType: PricingType.HOURLY,
        hours: 4,
        subtotal: 600,
        fees: 60,
        tax: 48,
        total: 708,
        status: BookingStatus.CONFIRMED,
        paymentRef: 'demo_payment_001',
      },
    })
  }

  console.log('✅ Database seeded successfully!')
  console.log('\n📋 Demo Accounts:')
  console.log('Admin: admin@photohub.com')
  console.log('Customer: customer@photohub.com')
  console.log('Host 1: sophia@photohub.com')
  console.log('Host 2: ethan@photohub.com')
  console.log('Host 3: anna@photohub.com')
}

main()
  .catch((e) => {
    console.error('❌ Error seeding database:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
