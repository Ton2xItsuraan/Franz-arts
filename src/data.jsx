//  icons
import {
    FiYoutube,
    FiInstagram,
    
    FiLayout,
    FiSettings,
    FiPenTool,
    FiTag,
    FiMail,
    FiMapPin,
    FiFacebook,
  } from 'react-icons/fi';
  
 
  
  
  // projects images
  import Project1 from './assets/img/projects/p1.webp';
  import Project2 from './assets/img/projects/p2.webp';
  import Project3 from './assets/img/projects/p3.webp';
  import Project4 from './assets/img/projects/p4.webp';
  import Project5 from './assets/img/projects/p5.webp';
  import Project6 from './assets/img/projects/p6.webp';
  
  
  // testimonial images
  import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
  import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
  import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';
  
  // navigation
  export const navigation = [
    {
      name: 'home',
      href: 'hero',
    },
    {
      name: 'about',
      href: 'about',
    },
    {
      name: 'portfolio',
      href: 'portfolio',
    },
    {
      name: 'services',
      href: 'services',
    },
    {
      name: 'testimonials',
      href: 'testimonials',
    },
    {
      name: 'contact',
      href: 'contact',
    },
  ];
  
  // social
  export const social = [
    {
      icon: <FiYoutube />,
      href: 'https://www.youtube.com/',
    },
    {
      icon: <FiInstagram />,
      href: 'https://www.instagram.com/',
    },
  
    {
      icon: <FiFacebook />,
      href: 'https://www.facebook.com/franz.stodomingo.370',
    },
  ];
  
  
  
  // projects
  export const projectsData = [
    {
      id: '1',
      image: Project1,
      name: 'project name 1',
      category: 'UI/UX design',
    },
    {
      id: '2',
      image: Project2,
      name: 'project name 2',
      category: 'web development',
    },
    {
      id: '3',
      image: Project3,
      name: 'project name 3',
      category: 'UI/UX design',
    },
    {
      id: '4',
      image: Project4,
      name: 'project name 4',
      category: 'branding',
    },
    {
      id: '5',
      image: Project5,
      name: 'project name 5',
      category: 'web development',
    },
    {
      id: '6',
      image: Project6,
      name: 'project name 6',
      category: 'web development',
    },
  ];
  
  // projects
  export const projectsNav = [
    {
      name: 'all',
    },
    {
      name: 'UI/UX Design',
    },
    {
      name: 'web development',
    },
    {
      name: 'branding',
    },
  ];
  
  
  
  // services
  export const services = [
    {
      icon: <FiLayout />,
      name: 'Interior Design',
      description:
        'Interior design is the art of crafting beautiful and functional spaces by harmonizing furniture, colors, and textures to reflect the clients style and optimize the use of space.',
    },
    {
      icon: <FiSettings />,
      name: 'Crafting',
      description:
        'Crafting is the creative process of making something by hand with skill and care.',
    },
    {
      icon: <FiPenTool />,
      name: 'Painting',
      description:
        'Painting is a vibrant symphony where emotions dance upon the canvas, each brushstroke weaving a story of its own.',
    },
    {
      icon: <FiTag />,
      name: 'Sketching',
      description:
        'Sketching is a graceful dance of lines, where imagination meets paper to bring fleeting thoughts into timeless art.',
    },
  ];
  
  // testimonials
  export const testimonials = [
    {
      authorImg: TestiImage1,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage2,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
    {
      authorImg: TestiImage3,
      authorText:
        'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
      authorName: 'Olivia Doe',
      authorPosition: 'Head of Design, Google',
    },
  ];
  
  // contact
  export const contact = [
    {
      icon: <FiMail />,
      title: 'Have a question?',
      subtitle: 'I am here to help you.',
      description: 'Email me at franz@gmail.com',
    },
    {
      icon: <FiMapPin />,
      title: 'Current Location',
      subtitle: 'Tubod, Lanao del Norte',
      description: 'Serving clients nationwide',
    },
  ];