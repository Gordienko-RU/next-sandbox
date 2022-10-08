import type { NextPage, GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router';
import Link from 'next/link';

import { Fragment } from 'react';

interface Props {
  cardNames: Array<string>,
};

export const getStaticProps: GetStaticProps = async () => {
  const cardNames = ['1', '2', String(Date.now())];

  return {
    props: {
      cardNames,
    },
  };
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { cards: ['1', '2'] } },
      { params: { cards: [] } },
    ],
    fallback: true,
  };
}

const Cards: NextPage<Props> = ({ cardNames }) => {
  const router = useRouter();
  const { query } = router;

  const path = Array.isArray(query.cards) &&
    query.cards.join('');

  const cards = 'Cards';

  return (
    <Fragment>
      <h1>{cards}</h1>
      <h2>{path}</h2>
      <Link href="1/7">
        <a>1/7</a>
      </Link>

      <button onClick={() => { router.push('/posts/2') }}>to posts</button>

      {
        cardNames && (
          <ul>
            {cardNames.map(name => (<h3 key={name}>{name}</h3>))}
          </ul>
        )
      }
    </Fragment>
  );
}

export default Cards;
