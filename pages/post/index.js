import Link from 'next/link';
import { Button } from 'antd';

export default () => {
  return (
    <div>
      post index
      <Button>btn</Button>
      <ul>
        <li>
          <Link href='/post/1'>
            <a>id-1</a>
          </Link>
        </li>
        <li>
          <Link href='/post/2'>
            <a>id-2</a>
          </Link>
        </li>
        <li>
          <Link href='/post/3'>
            <a>id-3</a>
          </Link>
        </li>
        <li>
          <Link href='/post/4'>
            <a>id-4</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};
