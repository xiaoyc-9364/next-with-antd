import Link from 'next/link';
import Header from '../components/Header';
const About = () => (
  <div>
    <Header />
    <Link href='/'>
      <a>go home</a>
    </Link>
    <div>测试rebase</div>
  </div>
);

export default About;
