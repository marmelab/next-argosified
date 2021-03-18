import Link from "next/link";

function Blog({ characters }) {
  return (
    <>
      <h2>Personnages</h2>
      <ul>
        {characters.map((character) => (
          <li>
            <Link href={`/characters/${encodeURIComponent(character.id)}`}>
                <a>{character.name}</a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

  export async function getStaticProps() {
// export async function getServerSideProps() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://rickandmortyapi.com/api/character");
  const data = await res.json();

  return {
    props: {
      characters: data.results,
    },
  };
}

export default Blog;