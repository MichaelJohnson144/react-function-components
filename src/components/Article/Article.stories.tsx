import type { Meta, StoryObj } from '@storybook/react';

import Article, { type ArticleData } from './Article';

const meta: Meta<typeof Article> = {
  title: 'Components/Article',
  component: Article,
};

export default meta;

type Story = StoryObj<typeof Article>;

export const Default: Story = {
  render: (args) => (
    <div
      className={
        'mx-auto max-w-screen-2xl rounded-md bg-gray-950/5 p-5 shadow-md outline outline-white/15 backdrop-blur dark:bg-white/10'
      }
    >
      <Article {...args} />
    </div>
  ),
  args: {
    title: 'Example Title',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non elementum turpis. Proin blandit 
           sodales imperdiet. Curabitur tincidunt mi et neque porttitor, a gravida metus hendrerit. Praesent pharetra 
           viverra vulputate. Aenean eleifend efficitur metus, id rutrum libero. In pharetra tristique risus. 
           Nam sollicitudin, libero a feugiat faucibus, elit neque mattis mi, vitae euismod ligula purus at dolor. 
           Morbi lobortis sapien massa, vel dictum ex tincidunt vitae. Pellentesque cursus elementum blandit. 
           Maecenas auctor diam urna, id pharetra massa dignissim auctor. Nunc hendrerit odio sapien, eget ornare metus 
           tincidunt et. Maecenas sed massa fermentum, vulputate lorem id, pretium erat.`,
    headerClassName: 'bg-gray-950/5 dark:bg-white/5',
  },
};

export const WithAsync: Story = {
  render: (args) => {
    const delay = (ms: number): Promise<void> => new Promise((resolve) => setTimeout(resolve, ms));
    const getDataContent = async (): Promise<ArticleData> => {
      await delay(1500);
      return {
        title: args.title,
        body: args.body,
      };
    };

    return (
      <div
        className={
          'mx-auto max-w-screen-2xl rounded-md bg-gray-950/5 p-5 shadow-md outline outline-white/15 backdrop-blur dark:bg-white/10'
        }
      >
        <Article {...args} getDataContent={getDataContent} />
      </div>
    );
  },
  args: {
    title: 'Example Title from an Async Response',
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non elementum turpis. Proin blandit 
           sodales imperdiet. Curabitur tincidunt mi et neque porttitor, a gravida metus hendrerit. Praesent pharetra 
           viverra vulputate. Aenean eleifend efficitur metus, id rutrum libero. In pharetra tristique risus. 
           Nam sollicitudin, libero a feugiat faucibus, elit neque mattis mi, vitae euismod ligula purus at dolor. 
           Morbi lobortis sapien massa, vel dictum ex tincidunt vitae. Pellentesque cursus elementum blandit. 
           Maecenas auctor diam urna, id pharetra massa dignissim auctor. Nunc hendrerit odio sapien, eget ornare metus 
           tincidunt et. Maecenas sed massa fermentum, vulputate lorem id, pretium erat.`,
    headerClassName: 'bg-gray-950/5 dark:bg-white/5',
  },
};
