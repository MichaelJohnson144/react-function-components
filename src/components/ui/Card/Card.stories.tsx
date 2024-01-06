import type { Meta, StoryObj } from '@storybook/react';

import Card, { CardData } from './Card';
import FrontEnd from './Contents/FrontEnd';

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: (args) => <Card {...args} />,
  args: {
    heading: {
      heading: 'React Function Components',
      href: 'https://github.com/MichaelJohnson144/react-function-components',
    },
    subHeading: {
      alt: 'Vite',
      href: 'https://vitejs.dev/',
      src: '/vite-logomark.svg',
      subHeading: 'Powered by Vite',
    },
    image: { alt: 'React', href: 'https://react.dev/', src: '/react-logomark.svg' },
    body: {
      paragraph: `This project includes families of "opinionated" reusable React function components
                  that can be "optionally" utilized in any React application powered by Vite or its 
                  frameworks like Next.js, Gatsby, and others at developers" discretion.`,
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
    function getDataContent() {
      return new Promise<CardData>((resolve) => {
        window.setTimeout(() => {
          const content: CardData = {
            heading: args.heading,
            subHeading: args.subHeading,
            image: args.image,
            body: args.body,
            descriptionList: args.descriptionList,
          };
          resolve(content);
        }, 1500);
      });
    }

    return <Card {...args} getDataContent={getDataContent} />;
  },
  args: {
    heading: {
      heading: 'React Function Components',
      href: 'https://github.com/MichaelJohnson144/react-function-components',
    },
    subHeading: {
      alt: 'Vite',
      href: 'https://vitejs.dev/',
      src: '/vite-logomark.svg',
      subHeading: 'Powered by Vite',
    },
    image: { alt: 'React', href: 'https://react.dev/', src: '/react-logomark.svg' },
    body: {
      paragraph: `This project includes families of "opinionated" reusable React function components
                  that can be "optionally" utilized in any React application powered by Vite or its 
                  frameworks like Next.js, Gatsby, and others at developers" discretion.`,
    },
    descriptionList: {
      description: 'Status',
      details: 'Ongoing',
      subDescription: 'Technology Stack',
      subDetails: <FrontEnd />,
    },
  },
};
