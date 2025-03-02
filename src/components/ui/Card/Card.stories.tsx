import type { Meta, StoryObj } from '@storybook/react';

import Card, { type CardData } from './Card';
import ReactLogomark from '@/components/ui/icons';
import FrontEnd from './Contents/FrontEnd/FrontEnd';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    heading: {
      heading: 'React Function Components',
      href: 'https://github.com/MichaelJohnson144/react-function-components',
    },
    subHeading: {
      subHeading: 'Powered by Vite',
      href: 'https://vite.dev/',
      alt: 'Vite',
      src: 'https://vite.dev/logo.svg',
    },
    image: {
      href: 'https://react.dev/',
      alt: 'React',
      icon: <ReactLogomark className={'sm:h-[50px] sm:w-[56px]'} />,
    },
    body: {
      paragraph: `This project includes families of "opinionated" reusable React function components that can be 
                  "optionally" utilized in any React applications powered by Vite or its meta-frameworks, like 
                  Next.js, Astro, Nuxt, SvelteKit, Remix, Gatsby, and others at developers' discretion.`,
    },
    descriptionList: {
      description: 'Status',
      details: 'Ongoing',
      subDescription: 'Technology Stack',
      subDetails: <FrontEnd />,
    },
  },
};

export const WithAsync: Story = {
  render: (args) => {
    const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
    const getDataContent = async (): Promise<CardData> => {
      await delay(1500);
      return {
        heading: args.heading,
        subHeading: args.subHeading,
        image: args.image,
        body: args.body,
        descriptionList: args.descriptionList,
      };
    };

    return <Card {...args} getDataContent={getDataContent} />;
  },
  args: {
    heading: {
      heading: 'React Function Components',
      href: 'https://github.com/MichaelJohnson144/react-function-components',
    },
    subHeading: {
      subHeading: 'Powered by Vite',
      href: 'https://vite.dev/',
      alt: 'Vite',
      src: 'https://vite.dev/logo.svg',
    },
    image: {
      href: 'https://react.dev/',
      alt: 'React',
      icon: <ReactLogomark className={'sm:h-[50px] sm:w-[56px]'} />,
    },
    body: {
      paragraph: `This project includes families of "opinionated" reusable React function components that can be 
                  "optionally" utilized in any React applications powered by Vite or its meta-frameworks, like 
                  Next.js, Astro, Nuxt, SvelteKit, Remix, Gatsby, and others at developers' discretion.`,
    },
    descriptionList: {
      description: 'Status',
      details: 'Ongoing',
      subDescription: 'Technology Stack',
      subDetails: <FrontEnd />,
    },
  },
};
