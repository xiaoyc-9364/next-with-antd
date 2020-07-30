import Link from 'next/link';
import Header from '../components/Header';
import { useRouter } from 'next/router';
const Home = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <Header />
      <Link href='/about'>
        <a>about</a>
      </Link>
      <div>master</div>
      <style jsx>{`
        h1,
        a {
          font-family: 'Arial';
          color: green;
        }

        ul {
          padding: 0;
        }

        li {
          list-style: none;
          margin: 5px 0;
        }

        a {
          text-decoration: none;
        }

        a:hover {
          opacity: 0.6;
        }
      `}</style>
    </div>
  );
};

export default Home;
