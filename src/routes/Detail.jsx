import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState({});
  const [init, setInit] = useState(false);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();

    setMovie(json.data.movie);
    setInit(true);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movie);

  return (
    <>
      {init ? (
        <div className={styles.container}>
          <div className={styles.img_container}>
            <img src={movie.large_cover_image} alt='' />
          </div>
          <div className={styles.contents_container}>
            <h2 className={styles.title}>{movie.title_long}</h2>
            <p>{movie.description_intro}</p>
            <div className={styles.genre_container}>
              <p className={styles.genre_title}>Genres: </p>
              <ul className={styles.genres}>
                {movie.genres.map((g) => (
                  <li key={g}>{g}</li>
                ))}
              </ul>
            </div>
            <p className={styles.rating}>⭐ {movie.rating}</p>
          </div>
        </div>
      ) : (
        <div>loading</div>
      )}
    </>
  );
};

export default Detail;
