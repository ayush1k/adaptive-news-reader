function ArticleCard({ title, content, image }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-4 max-w-2xl mx-auto">
      <img src={image} alt={title} className="w-full h-48 object-cover rounded-lg mb-2" />
      <h2 className="text-xl font-bold">{title}</h2>
      <p className="text-gray-600">{content.slice(0, 100)}...</p>
    </div>
  );
}

export default ArticleCard;
