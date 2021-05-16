import { Avatar } from 'antd';

import axios from '../../helpers/axios';
import { useRouter } from 'next/router'; 

const Hero = ({ image, name, powerstats }) => {

  const { isFallback } = useRouter();
  const {
    intelligence,
    strength,
    speed,
    durability,
    power,
    combat
  } = powerstats;

  if (isFallback) {
    return <p>Data is loading...</p>
  };

  return (
    <div
      style={{
        textAlign : 'center'
      }}
    >
      <h1>Hero {name}</h1>
      <Avatar
        alt={`Photo of ${name}`}
        shape='square'
        size={200}
        src={image.url}
        style={{
          margin : '2em'
        }}
      />
      <h2>Hero's stats</h2>
      <p>
        combat: {combat}   
      </p>
      <p>
        durability: {durability}   
      </p>
      <p>
        intelligence: {intelligence}   
      </p>
      <p>
        power: {power}   
      </p>
      <p>
        speed: {speed}   
      </p>
      <p>
        strength: {strength}   
      </p>
    </div>
  );
};

export async function getStaticPaths() {
  
  const { data } = await axios.get('/search/a');
  const { results } = data;
  const paths = results.map(({ id }) => (
    { params: { id: id.toString() } }
  ));

  return {
    paths,
    fallback: false
  };
};

export async function getStaticProps({ params }) {

  const { data } = await axios.get(`/${params.id}`);

  return {
    props: {
      ...data
    }
  }
}

export default Hero;