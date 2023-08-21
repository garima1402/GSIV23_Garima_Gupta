import React, { useEffect, useRef, useState } from "react";
import "./card.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { getMovieData } from "../../redux/action";

function Card() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const observerTarget = useRef(null);
  const dispatch = useDispatch();

  const movieData = useSelector(
    (state) => state?.movieData?.payload?.movieData
  );
  const searchData = useSelector(
    (state) => state?.searchData?.payload?.searchData
  );
  useEffect(() => {
    if (searchData && searchData?.length) {
      setData(searchData);
    }
  }, [searchData]);
  useEffect(() => {
    dispatch(getMovieData(1));
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    if (searchData && searchData?.length) {
      setData(searchData);
    } else {
      dispatch(
        getMovieData(page + 1, (data) => {
          setData(data);
          setIsLoading(false);
        })
      );
    }
    setPage(page + 1);
  };

  useEffect(() => {
    dispatch(
      getMovieData(page, (data) => {
        setData(data);
      })
    );
  }, [page]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          fetchData();
        }
      },
      { threshold: 1 }
    );
    if (observerTarget.current) {
      observer.observe(observerTarget.current);
    }
    return () => {
      if (observerTarget.current) {
        observer.unobserve(observerTarget.current);
      }
    };
  }, [observerTarget]);
  return (
    <div>
      <div className="container">
        <div className="heading-wrapper">
          <h2 className="main-text">Upcoming Series</h2>
        </div>

        <div className="card-box">
          {data?.map((item, index) => {
            return (
              <div
                key={index}
                className="row"
                onClick={() => {
                  navigate(`/details/${item.id}`);
                }}
              >
                <img
                  className="image"
                  src={
                    item?.poster_path
                      ? `https://image.tmdb.org/t/p/w220_and_h330_face${item?.poster_path}`
                      : "noImage.png"
                  }
                  alt="No Image"
                />
                <div className="movie-des">
                  <h3 className="image-name">{item?.title}</h3>
                  <p>{item.vote_average}</p>
                </div>
                <p style={{ margin: "12px " }}>{item?.overview}</p>
              </div>
            );
          })}
        </div>
      </div>
      {isLoading && <p>Loading...</p>}
      <div ref={observerTarget}></div>
    </div>
  );
}
export default Card;
