import { progression, workout, nutritions, professional, fancy, modern, cycling, karate, power, meditation, martialArts, workout2, fresh, modern2, gym, free, missionIcon, visionIcon } from '../assets/icons';
import { cyclingImg, karateImg, powerImg, meditationImg, martialArtsImg, workoutImg, boxingImg, bodyBuildingImg, powerLiftingImg, crossfitImg, coach1, coach2, coach3, member1, member2, member3, member4, member5, member6, member7, member8, member9, member10, logoBar1, logoBar2, logoBar3, logoBar4, logoBar5, pricing1, pricing2, pricing3, missionImg, visionImg, blog1, blog2, blog3, blog4, blog5, blog6 } from '../assets/images';

export const navLinks = [
    { route: "/", label: "Home" },
    { route: "/about", label: "About" },
    { route: "/gallery", label: "Gallery" },
    { route: "/schedule", label: "Schedule" },
    { route: "/blog", label: "Blog" },
    { route: "/pricing", label: "Pricing" },
    { route: "/classes", label: "Classes" },
    { route: "/contact", label: "Contact" },
];

export const cardInputs = [
    {icon: progression, title: 'progression', description: 'Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.'},
    {icon: workout, title: 'workout', description: "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."},
    {icon: nutritions, title: 'nutritions', description: 'Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.'}
];

export const whoInputs = {
    subject: 'take your health and body to next level',
    description: 'Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.',
    offers: [
        {name: 'professional trainers', icon: professional},
        {name: 'modern equipments', icon: modern},
        {name: 'fancy gym machines', icon: fancy}
    ]
}

export const features = [
    {
        itemImg: cyclingImg, itemIcon: cycling, name: 'cycling', schedule: 'wednesday: 9:00am-10:00am'
    },
    {
        itemImg: karateImg, itemIcon: karate, name: 'karate', schedule: 'friday: 10:00am-11:00am'
    },
    {
        itemImg: powerImg, itemIcon: power, name: 'power', schedule: 'saturday: 9:00am-10:00am'
    },
    {
        itemImg: meditationImg, itemIcon: meditation, name: 'meditation', schedule: 'friday: 1:00pm-2:00pm'
    },
    {
        itemImg: martialArtsImg, itemIcon: martialArts, name: 'martial arts', schedule: 'sunday: 6:00pm-7:00pm'
    },
    {
        itemImg: workoutImg, itemIcon: workout2, name: 'workout', schedule: 'monday: 4:00pm-5:00pm'
    },
    {
        itemImg: boxingImg, itemIcon: martialArts, name: 'boxing', schedule: 'tuesday: 2:00pm-3:00pm'
    },
    {
        itemImg: powerLiftingImg, itemIcon: power, name: 'power lifting', schedule: 'wednesday: 4:00pm-5:00pm'
    },
    {
        itemImg: bodyBuildingImg, itemIcon: workout2, name: 'body building', schedule: 'thursday: 8:00am-9:00am'
    },
    {
        itemImg: crossfitImg, itemIcon: meditation, name: 'crossfit', schedule: 'saturday: 6:00pm-8:00pm'
    },
]

export const chooseInputs = {
    subject: 'We Can Give A Shape Of Your Body Here!',
    description: 'At <strong>Muscle Mansion</strong>, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.',
    items: [
        {name: 'Free Fitness\nTraining', icon: free},
        {name: 'Modern Gym\nEquipments', icon: modern2},
        {name: 'Gym Bag\nEquipments', icon: gym},
        {name: 'Fresh Bottle\nWater', icon: fresh}
    ]
}

export const trainersInputs = {
    subject: 'Team Of Expert Coaches',
    description: 'Expert team of coaches helps you succeed in any goal,\npersonalized guidance and motivation provided!',
    coaches: [
        {name: 'luigi nepomuceno', title: 'yoga trainer', photo: coach1},
        {name: 'jasmine santos', title: 'personal trainer', photo: coach2},
        {name: 'Mash Burnedead', title: 'crossfit trainer', photo: coach3}
    ]
}

export const testimonialInputs = {
    subject: 'our happy members',
    description: 'Words of praise by our valuable members!',
    members: [
        {name: 'Mary', profession: 'doctor', comment: 'Muscle Mansion is my go-to place for an energizing workout session!', photo: member1},
        {name: 'James', profession: 'janitor', comment: "Love the motivating atmosphere at Muscle Mansion – it's my daily dose of fitness inspiration.", photo: member2},
        {name: 'William', profession: 'engineer', comment: 'With top-notch equipment and friendly staff, Muscle Mansion makes every workout enjoyable.', photo: member3},
        {name: 'Patricia', profession: 'model', comment: 'Muscle Mansion helped me achieve my fitness goals with their personalized training programs.', photo: member4},
        {name: 'David', profession: 'wrestler', comment: 'The trainers at Muscle Mansion are knowledgeable and always ready to push you to your limits.', photo: member5},
        {name: 'Susan', profession: 'cashier', comment: 'I feel stronger and healthier since I joined Muscle Mansion – best decision ever!', photo: member6},
        {name: 'Sarah', profession: 'tiktoker', comment: 'The cleanliness and organization at Muscle Mansion gym are truly commendable.', photo: member7},
        {name: 'Daniel', profession: 'construction worker', comment: "Muscle Mansion's variety of classes keeps me engaged and excited about my fitness journey.", photo: member8},
        {name: 'Mark', profession: 'scientist', comment: "From beginner to advanced, Muscle Mansion caters to all fitness levels – it's inclusive and welcoming.", photo: member9},
        {name: 'Emily', profession: 'singer / song writter', comment: 'At Muscle Mansion, I not only gained muscles but also a sense of belonging to a fitness community.', photo: member10},
    ],
    logos: [logoBar1, logoBar2, logoBar3, logoBar4, logoBar5]
}

export const pricingInputs = {
    subject: 'Exclusive Pricing Plan',
    description: 'Elevate your fitness journey with personalized plans, top-notch equipment, and exclusive perks at Muscle Mansion – join us today!',
    prices: [
        { 
            img: pricing1,
            type: 'student', 
            amount: '50', 
            benifits: [
                'Discounted Rates', 
                'Flexible Hours',
                'Specialized Classes',
                'Nutritional Guidance',
                'Study Lounge Access',
                'Social Events'
            ]
        },
        { 
            img: pricing2,
            type: 'regular',
            amount: '500',
            benifits: [
                'Full Gym Access',
                'Personalized Training',
                'Group Fitness Classes',
                'Nutritional Counseling',
                'Discounts on Merchandise',
                'Guest Passes'
            ]
        },
        { 
            img: pricing3,
            type: 'pro',
            amount: '5000',
            benifits: [
                'Priority Access',
                'Advanced Training',
                'Exclusive Workshops',
                'Personalized Nutrition Plan',
                'Complimentary Services',
                'VIP Events'
            ]
        }
    ]
}

export const blogCardInputs = {
    subject: 'Our Recent News',
    description: "Discover our gym's blog for expert fitness advice and inspiration.",
    cards: [
        {
            date: '06/04/2024',
            title: 'Building Strong: The Path to Bodybuilding Success',
            paragraph: "Unlock the secrets to building a strong, sculpted physique with our bodybuilding guide. From effective workout routines to nutrition strategies, we'll provide you with the tools and knowledge to sculpt your dream physique. Get ready to lift, sweat, and transform your body into a powerhouse!"
        },
        {
            date: '25/03/2024',
            title: 'Mindful Moments: Journey into Meditation',
            paragraph: "Embark on a journey of self-discovery and inner peace with our meditation guide. Discover the transformative power of mindfulness as we delve into various meditation practices and techniques. Whether you're a beginner or an experienced practitioner, find serenity amidst life's chaos."
        },
        {
            date: '13/03/2024',
            title: 'Punching to Perfection: The Art of Boxing',
            paragraph: "Step into the ring and explore the art of boxing with our comprehensive guide. From fundamental techniques to advanced strategies, we'll help you unleash your inner fighter and achieve peak performance. Get ready to lace up your gloves and conquer the ring!"
        }
    ]
}

export const footerInputs = {
    description: 'Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.',
    programs: {
        title: 'our classes',
        classes: [
            'Fitness Classes', 'Aerobics Classes', 'Power Yoga', 'Learn Machines', 'Full-body Strength'
        ]
    },
    Hours: {
        title: 'working hours',
        schedule: [
            'Monday - Friday:', '7:00am - 21:00pm', 'Saturday:', '7:00am - 19:00pm', 'Sunday - Closed'
        ]
    }
}

export const aboutPageInputs = {
    subject: 'We Will Give You Strength And Health',
    description: "At Muscle Mansion, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.",
    mission: {
        img: missionImg,
        icon: missionIcon,
        title: 'mission',
        description: 'At Muscle Mansion, we empower fitness journeys through exceptional facilities and expert guidance, fostering a supportive community for personal growth and wellness.'
    },
    vision: {
        img: visionImg,
        icon: visionIcon,
        title: 'vision',
        description: 'Our vision at Muscle Mansion is to be the top fitness destination, offering innovative programs and a vibrant community where individuals thrive and achieve their fitness goals.'
    },
}

export const schedulePageInputs = {
    schedules: {
        mon: [
            {
                cname: 'Fitness', time: '9:00am - 10:00am', trainer: 'Logan Martin'
            },
            {
                cname: 'Body Building', time: '10:00am - 11:00am', trainer: 'Evelyn Scott'
            },
            {
                cname: 'Running', time: '4:00pm - 5:00pm', trainer: 'Abigail Clark'
            },
            {
                cname: 'Cycling', time: '6:00pm - 7:00pm', trainer: 'Elijah Harris'
            },
        ],
        tue: [
            {
                cname: 'Boxing', time: '9:00am - 10:00am', trainer: 'Mike Tyson'
            },
            {
                cname: 'Yoga', time: '10:00am - 11:00am', trainer: 'Ethan Wilson'
            },
            {
                cname: 'Crossfit', time: '4:00pm - 5:00pm', trainer: 'Ava Smith'
            }
        ],
        wed: [
            {
                cname: 'Cycling', time: '9:00am - 10:00am', trainer: 'Emma Jones'
            },
            {
                cname: 'Body Building', time: '10:00am - 11:00am', trainer: 'Sophia Miller'
            },
            {
                cname: 'Fitness', time: '4:00pm - 5:00pm', trainer: 'Abigail Clark'
            },
            {
                cname: 'Running', time: '6:00pm - 7:00pm', trainer: 'Liam Johnson'
            }
        ],
        thu: [
            {
                cname: 'Running', time: '9:00am - 10:00am', trainer: 'Lucas Henry'
            },
            {
                cname: 'Karate', time: '10:00am - 11:00am', trainer: 'James Wilson'
            },
            {
                cname: 'Yoga', time: '4:00pm - 5:00pm', trainer: 'Mia Smith'
            }
        ],
        fri: [
            {
                cname: 'Meditation', time: '9:00am - 10:00am', trainer: 'Emma Jones'
            },
            {
                cname: 'Crossfit', time: '10:00am - 11:00am', trainer: 'Evelyn Scott'
            },
            {
                cname: 'Workout', time: '4:00pm - 5:00pm', trainer: 'Elijah Harris'
            },
            {
                cname: 'Boxing', time: '6:00pm - 7:00pm', trainer: 'Logan Martin'
            }
        ],
        sat: [
            {
                cname: 'Power Lifting', time: '9:00am - 10:00am', trainer: 'Will Henry'
            },
            {
                cname: 'Yoga', time: '10:00am - 11:00am', trainer: 'James Rolley'
            },
            {
                cname: 'Karate', time: '4:00pm - 5:00pm', trainer: 'Bea Smith'
            }
        ],
        sun: [
            {
                cname: 'Crossfit', time: '9:00am - 10:00am', trainer: 'Abigail Clark'
            },
            {
                cname: 'Meditation', time: '10:00am - 11:00am', trainer: 'Jerry Scott'
            },
            {
                cname: 'Workout', time: '4:00pm - 5:00pm', trainer: 'Elijah Ong'
            }
        ]
    }
}

export const contactPageInputs = {
    subject: 'We are here for help you! To Shape Your Body.',
    description: "At Muscle Mansion, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.",
    infos: [
        {
            title: 'Address', line1: '1234 McArthur Highway,', line2: 'Guiguinto, Bulacan'
        },
        {
            title: 'Opening Hours', line1: 'Mon to Fri: 7:30 am — 10:00 pm', line2: 'Sat to Sun: 7:30 am — 8:00 pm'
        },
    ],
    programs: ['Body Building', 'Boxing', 'Fitness', 'Running', 'Yoga', 'Workout', 'Karate', 'Meditation', 'Cycling']
}

export const blogPageInputs = {
    articles: [
        {
            img: blog6, date: 'April 6, 2024', topic: 'Body Building', total: 6, title: 'Building Strong: The Path to Bodybuilding Success', paragraph: "Unlock the secrets to building a strong, sculpted physique with our bodybuilding guide. From effective workout routines to nutrition strategies, we'll provide you with the tools and knowledge to sculpt your dream physique. Get ready to lift, sweat, and transform your body into a powerhouse!"
        },
        {
            img: blog5, date: 'March 25, 2024', topic: 'Meditation', total: 5, title: 'Mindful Moments: Journey into Meditation', paragraph: "Embark on a journey of self-discovery and inner peace with our meditation guide. Discover the transformative power of mindfulness as we delve into various meditation practices and techniques. Whether you're a beginner or an experienced practitioner, find serenity amidst life's chaos."
        },
        {
            img: blog4, date: 'March 13, 2024', topic: 'Boxing', total: 4, title: 'Punching to Perfection: The Art of Boxing', paragraph: "Step into the ring and explore the art of boxing with our comprehensive guide. From fundamental techniques to advanced strategies, we'll help you unleash your inner fighter and achieve peak performance. Get ready to lace up your gloves and conquer the ring!"
        },
        {
            img: blog3, date: 'March 10, 2024', topic: 'Fitness', total: 3, title: 'Meet Fitness Ambassador Grace', paragraph: "Meet Grace, our dynamic Fitness Ambassador, inspiring others with her passion for health and wellness. With a contagious energy and wealth of expertise, Grace empowers individuals to reach their fitness aspirations, one step at a time. Join her journey and discover the transformative power of fitness in your life."
        },
        {
            img: blog2, date: 'February 14, 2024', topic: 'CrossFit', total: 2, title: 'Getting Back Into CrossFit After Vacation', paragraph: "After a rejuvenating vacation, rekindle your CrossFit journey with renewed vigor and energy. Dive back into intense workouts, fueled by your refreshed mind and body, as you reclaim your fitness goals. Embrace the challenge, knowing each session brings you closer to your peak performance."
        },
        {
            img: blog1, date: 'January 24, 2024', topic: 'yoga', total: 1, title: 'Yoga For Everyone In 2024', paragraph: 'After a rejuvenating vacation, rekindle your CrossFit journey with renewed vigor and energy. Dive back into intense workouts, fueled by your refreshed mind and body, as you reclaim your fitness goals. Embrace the challenge, knowing each session brings you closer to your peak performance.'
        },
    ]
}