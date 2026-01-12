
export default function AnimalCard({ name, image, category, funFact, scientificName }) {
  return (
    <div className="aspect-square transition-transform hover:scale-105 relative">
      <img src={image} alt={`Image of ${name}`} />
      <section className="p-4">
        <h6>{name}</h6>
        <span className="italic">{scientificName}</span>
        <span>{category}</span>
        <span>{funFact}</span>
      </section>
    </div>
  );
}