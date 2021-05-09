import { useRouter } from 'next/router';

export default function PageNotFound() {
  const { back } = useRouter();
  return <p>Page not found! Back to previous page <button onClick={back}>CLICK</button></p>
}