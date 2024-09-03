// Types for namebadge component
type NameBadgeProps = {
  name: string;
  // make greeting optional with ?, if not specified in app, default Hey there! applies:
  greeting?: string;
};

// Add default value to greeting if not otherwise specified
const NameBadge = ({ name, greeting = 'Hey there!' }: NameBadgeProps) => {
  return (
    <section className="badge">
      <header className="badge-header">
        <h1 className="text-5xl">{greeting}</h1>
        <p>My name is…</p>
      </header>
      <div className="badge-body">
        <p className="badge-name">{name}</p>
      </div>
      <footer className="badge-footer" />
    </section>
  );
};

export default NameBadge;
