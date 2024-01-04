import "../../css/HostReviews.css";

const reviewsData = [
  {
    rating: 5,
    name: "Elliot",
    date: "January 3, 2023",
    text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
    id: "1",
  },
  {
    rating: 5,
    name: "Sandy",
    date: "December 12, 2022",
    text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
    id: "2",
  },
];

function Reviews() {
  return (
    <div className="reviews-container">
      <div className="reviews-heading-box">
        <h1>Your reviews</h1>
        <p>
          last <strong>30 days</strong>
        </p>
      </div>

      <div className="overall-rating-box">
        <h2>5.0</h2>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="21"
          height="19"
          viewBox="0 0 21 19"
          fill="none"
        >
          <path
            d="M9.30123 0.843597C9.64795 -0.117224 11.0068 -0.117225 11.3535 0.843596L13.0595 5.57118C13.2156 6.0036 13.6259 6.2918 14.0856 6.2918H19.3421C20.4264 6.2918 20.8467 7.70205 19.9393 8.29562L15.8905 10.9443C15.4675 11.221 15.29 11.7521 15.4615 12.2275L17.0532 16.6383C17.4087 17.6236 16.3064 18.495 15.4298 17.9215L10.9246 14.9743C10.5618 14.737 10.0929 14.737 9.73015 14.9743L5.22489 17.9215C4.34834 18.495 3.24599 17.6236 3.60154 16.6383L5.19321 12.2275C5.36479 11.7521 5.18728 11.221 4.76429 10.9443L0.715395 8.29562C-0.191962 7.70205 0.228344 6.2918 1.31261 6.2918H6.56909C7.0288 6.2918 7.43919 6.0036 7.59523 5.57118L9.30123 0.843597Z"
            fill="#FF8C38"
          />
        </svg>
        <p>overall rating</p>
      </div>

      <div className="rating-box">
        <div>
          <p>5 stars</p>
          <div className="progress"></div>
          <p>100%</p>
        </div>
        <div>
          <p>4 stars</p>
          <div className="progress"></div>
          <p>0%</p>
        </div>
        <div>
          <p>3 stars</p>
          <div className="progress"></div>
          <p>0%</p>
        </div>
        <div>
          <p>2 stars</p>
          <div className="progress"></div>
          <p>0%</p>
        </div>
        <div>
          <p>1 stars</p>
          <div className="progress"></div>
          <p>0%</p>
        </div>
      </div>

      <h4 className="h4">Reviews ({reviewsData.length})</h4>

      <div className="reviews-wrapper">
        {reviewsData.map((el) => {
          return <RatingBox data={el} key={el.id} />;
        })}
      </div>
    </div>
  );
}

export default Reviews;

function RatingBox({ data }) {
  return (
    <div className="rating-box-div">
      <div>
        {Array.from(Array(5).keys()).map((_el, i) => {
          return <Star key={i} />;
        })}
      </div>

      <div className="name-date-box">
        <h1>{data.name}</h1>
        <p>{data.date}</p>
      </div>

      <p className="description">{data.text}</p>
    </div>
  );
}

function Star() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M10.9625 3.19315C11.289 2.18808 12.7109 2.18808 13.0375 3.19315L14.4492 7.538C14.5953 7.98747 15.0141 8.2918 15.4868 8.2918H20.0552C21.112 8.2918 21.5514 9.6441 20.6964 10.2653L17.0005 12.9505C16.6181 13.2283 16.4581 13.7207 16.6042 14.1702L18.0159 18.5151C18.3425 19.5201 17.1921 20.3559 16.3372 19.7347L12.6412 17.0495C12.2589 16.7717 11.7411 16.7717 11.3588 17.0495L7.66283 19.7347C6.80787 20.3559 5.65753 19.5201 5.98409 18.5151L7.39582 14.1702C7.54186 13.7207 7.38187 13.2283 6.99952 12.9505L3.30358 10.2653C2.44861 9.6441 2.88801 8.2918 3.9448 8.2918H8.51324C8.98585 8.2918 9.40471 7.98748 9.55076 7.538L10.9625 3.19315Z"
        fill="#FF8C38"
      />
    </svg>
  );
}
