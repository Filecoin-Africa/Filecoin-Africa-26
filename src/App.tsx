import { Hero } from './components/filecoin/Hero';
import { UpcomingEvents } from './components/filecoin/UpcomingEvents';
import { CityDirectory } from './components/filecoin/CityDirectory';
import { GetInvolved } from './components/filecoin/GetInvolved';
import { Resources } from './components/filecoin/Resources';
import { BlogNews } from './components/filecoin/BlogNews';
import { FilecoinFooter } from './components/filecoin/FilecoinFooter';
import { FilecoinNav } from './components/filecoin/FilecoinNav';

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <FilecoinNav />
      <Hero />
      <UpcomingEvents />
      <CityDirectory />
      <GetInvolved />
      <Resources />
      <BlogNews />
      <FilecoinFooter />
    </div>
  );
}
