import Head from 'next/head'
import DrawTime from '../../components/DrawTime'
import SubHeader from '../../components/SubHeader'
import { getLottery } from '@/services/blockchain.srr'

export default function Draws({ jackpot }) {
  console.log(jackpot)
  return (
    <div className="min-h-screen">
      <Head>
        <title>Dapp Lottery | Draws</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <SubHeader />
        <DrawTime jackpot={jackpot} />
      </div>
    </div>
  )
}

export const getServerSideProps = async (context) => {
  const { jackpotId } = context.query
  const data = await getLottery(jackpotId)
  return {
    props: { jackpot: JSON.parse(JSON.stringify(data)) },
  }
}