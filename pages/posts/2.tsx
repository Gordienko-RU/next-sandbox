import type { GetServerSideProps, NextPage } from 'next'

export const getServerSideProps: GetServerSideProps = async () => {
  const content = "test";

  await new Promise((resolve) => {
    setTimeout(resolve, 10000);
  });

  return {
    props: { content },
  };
};

interface Props {
  content: string,
};

const Post2: NextPage<Props> = ({ content }) => (
  <div>{content}</div>
)

export default Post2;
