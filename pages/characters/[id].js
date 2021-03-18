export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('https://rickandmortyapi.com/api/character')
    const data = await res.json();
  
    // Get the paths we want to pre-render based on posts
    const paths = data.results.map((character) => ({
      params: { id: character.id.toString() },
    }))
  
    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: false }
  }

  function Character({ character }) {
    return <h2>Le page de "{character.name}"</h2>
  }

  export async function getStaticProps({ params }) {
    // params contains the post `id`.
    // If the route is like /posts/1, then params.id is 1
    const res = await fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
    const character = await res.json()
  
    // Pass post data to the page via props
    return { props: { character } }
  }
  
  export default Character