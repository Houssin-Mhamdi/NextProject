import Layout from '@/components/Layout';
import Head from 'next/head';
import Link from 'next/link';

export default function firstPost() {
  return (
    <>
      <Layout>
        <Head>
          <title>First Post</title>
        </Head>
        <h1>First Post</h1>
        <h2>
          <Link href="/">← Back to home</Link>
        </h2>
      </Layout>
    </>
  )
}
