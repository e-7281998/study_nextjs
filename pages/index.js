import Seo from "@/components/Seo";
import { useEffect, useState } from "react";

export default function Home({ results }) {

    return (
        <div className="container">
            <Seo title="Home" />
            {!results && <h4>Loading...</h4>}
            {results?.map(movie => (
                <div className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>{movie.original_title}</h4>
                </div>
            ))}
            <style jsx>{`
                .container{
                    width: 90%;
                    margin: 100px auto;
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }
                .movie{
                    width: 200px;
                    margin: 10px 20px;
                }
                img {
                    width: 100%;
                    object-fit: cover;
                    border-radius: 10px;
                    border: 3px solid darkgrey;
                    transition: all .3s ease;
                }
                .movie:hover img{
                    border: 3px solid white;
                    scale: 1.1;
                }
                h4{
                    padding: 0 10px;
                    text-align: center;
                }
            `}</style>
        </div>

    );
}

//무조건 서버에서 돌아감
export async function getServerSideProps() {
    const { results } = await (await fetch(`http://localhost:3000/api/movies`)).json();

    return {
        props: {
            results,
        },
    }

    // useEffect(() => {
    //     (async () => {
    //         const { results } = await (
    //             await fetch(
    //                 `/api/movies`
    //             )
    //         ).json();
    //         setMovies(results);
    //     })();
    // }, []);

}