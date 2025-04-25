const Cards = ({ title, text, image, button}) => {
  return (
    <div className="card m-1" style={{ width: "500px" }}>
      <img
        src={image}
        className="card-img-top"
      />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
        <div class="card-footer bg-secondary-color text-center">
        <a href="#" className="btn btn-primary">
          {button}
        </a>
        </div>
    </div>
  );
};

const CardRow = () => {
  return (
    <div className="d-flex flex-wrap justify-content-start">
      <Cards
        title="Card Title"
        text="This is the first card."
        image="https://placehold.co/500x325"
        button="Button 1"
      />
      <Cards
        title="Card Title"
        text="This is the second card."
        image="https://placehold.co/500x325"
        button="Button 2"
      />
      <Cards
        title="Card Title"
        text="This is the third card."
        image="https://placehold.co/500x325"
        button="Button 3"
      />
      <Cards
        title="Card Title"
        text="This is the fourth card."
        image="https://placehold.co/500x325"
        button="Button 4"
      />
    </div>
  );
};

export default CardRow;
