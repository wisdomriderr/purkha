import json from '../data.json';

export default function Home({ people }) {
  return <div>{JSON.stringify(people)}</div>;
}
export async function getServerSideProps(context) {
  const generations = {};
  json.data.people.forEach((e) => {
    generations[e.name] = json.data.people.filter(
      (x) => x.personreference && x.personreference.name === e.name
    );
  });

  console.log(generations);

  return {
    props: {
      people: generations,
    },
  };
}
