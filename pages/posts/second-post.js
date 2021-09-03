import Head from 'next/head'
import Link from 'next/link'
import Alert from '../../components/alert'

export default function FirstPost() {
    return (
      <Alert>
        <Head>
          <title>Second Post</title>
        </Head>
        <h1>Second Post</h1>
        <h2>
          <Link href="/">
            <a>Back to home</a>
          </Link>
        </h2>
      </Alert>
    )
  }