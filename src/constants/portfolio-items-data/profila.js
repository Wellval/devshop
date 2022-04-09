import profilaImg from '../../assets/portfolio/profila.jpg'
import profila1 from '../../assets/modal/profila/profila-1.png';
import profila2 from '../../assets/modal/profila/profila-2.png';
import profila3 from '../../assets/modal/profila/profila-3.png';
import profila4 from '../../assets/modal/profila/profila-4.png';

export const profila = {
    title: 'profila',
    image: profilaImg,
    color: '',
    modalSlides: [
        {
            image: profila1,
            text: [
                {
                    title: 'Technologies used',
                    p: '',
                    listItems: [
                        'Backend API - Node.js, Nest.js',
                        'Frontend - TypeScript, Angular.js',
                        'Mobile development - React Native, Redux',
                        'Cloud Hosting - Microsoft Azure',
                        'NoSQL Database - MongoDB',
                        'Payment gateway - Stripe Payments',
                        'CRM - Microsoft Dynamics Integration, Office 365',
                    ]
                },
                {
                    title: 'How people benefit',
                    p: 'A personalised direct-to brand experience, surveillance-free',
                    listItems: [
                        'Privacy awareness education and personal data control',
                        'Create & share accurate Profila insights through self-discovery',
                        'Communicate with brands that matter in a one-to-one private channel',
                        'Consume personalised advertising, offers and services, tailored to their preferences',
                        'Receive a share in the revenues derived directly from their personal data',
                    ]
                },
            ]
        },
        {
            image: profila2,
            text: [
                {
                    title: 'How brands benefit',
                    p: 'A privacy compliant, one-to-one consumer insights, marketing & communication platform designed for people',
                    listItems: [
                        'Privacy education & data privacy request workflow management',
                        'Personal, demographic & psychographic data insights direct from the end consumer',
                        'Consumer communications, delivering rich positive & negative feedback loops',
                        'Broadcast scale, one-to-one personalised advertising and content delivery',
                    ]
                },
            ]
        },
        {
            image: profila3,
            text: [
                {
                    title: 'Secure Your Data',
                    p: 'Go through the simple privacy awareness module and set your personal data control preferences. Your data will never be shared without your consent and you can revoke your consent anytime.',
                    listItems: []
                },
                {
                    title: 'There is a better way',
                    p: '',
                    listItems: [
                        'A single online platform for your favourite brands to connect with you.',
                        'Personalised brand content and offers, tailored for your needs.',
                        'On a data-secure platform that puts you in-charge of your data and gives you a share of the revenue brands make from your data.',
                        'There is a better way. And Profila is building it.'
                    ]
                },
            ]
        },
        {
            image: profila4,
            text: [
                {
                    title: 'Help Brands Understand You',
                    p: '',
                    listItems: [
                        'Share your preferences and needs, create accurate personas through the engaging, gamified app interface to let your chosen brands know you better'
                    ]
                },
                {
                    title: 'Interact With Brands Privately',
                    p: '',
                    listItems: [
                        'Receive personalised content, ads, offers and services from brands, customised to your needs & preferences'
                    ]
                },
                {
                    title: 'Engage Direct, 1-to-1 With Brands',
                    p: '',
                    listItems: [
                        'Communicate direct 1-to-1 with your favourite brands through a private & data-secure channel'
                    ]
                },
                {
                    title: 'Take Control Of Your Data',
                    p: '',
                    listItems: [
                        'Receive a share of the revenues made from your data and brand transactions directly in your Profila wallet'
                    ]
                },
            ]
        },
    ],
};