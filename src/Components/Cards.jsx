const Cards = () => {
  return (
    <div className="card" style={{ width: "384px", height: "522px" }}>
      <img
        src="/illustration-article.svg"
        className="card-img-top"
        alt="Article"
        style={{ borderRadius: "10px", marginBottom: "16px" }}
      />
      <div className="card-body">
        <button type="button" className="btn btn-warning category-btn">
          Learning
        </button>

        <p id="dates">Published 21 Dec 2023</p>

        <h2 className="heading">HTML & CSS foundations</h2>

        <p className="card-text">
          These languages are the backbone of every website, defining structure, content, and presentation.
        </p>

        <div className="author">
          <img src="/image-avatar.webp" alt="Greg Hooper" className="avatar" />
          <span className="author-name">Greg Hooper</span>
        </div>
      </div>
    </div>
  );
};

export default Cards;