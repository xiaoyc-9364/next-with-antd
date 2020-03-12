import { useRouter } from 'next/router';
export default () => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <div>
      <p>post id</p>
      <p>{id}</p>
    </div>
  );
};
