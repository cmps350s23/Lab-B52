import styles from './page.module.css'
import * as repo from '@/app/api/teams/squadBuilder-repo'
import Link from 'next/link';
import TeamsList from './teams/TeamList';


export default async function Home() {
  const teams = await repo.getTeams()
  return (
    <>If you can see this your project worked successfully. Now replace this with your own-SEARCH FOR THE USE ME FILE</>
  )
}
