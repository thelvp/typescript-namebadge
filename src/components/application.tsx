import NameBadge from './name-badge';

const Application = () => (
  <main className="application">
    {/* // If not specifying greeting, the default 'Hey there!' applies */}
    <NameBadge name={'Steve'} greeting="Hi!" />
  </main>
);

export default Application;
