import Seo from "@/components/Seo";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function Home({ results }) {
    const router = useRouter();
    const onClick = (id, title) => {
        //네비게이팅 방법 1.폼 같은 것 제출 후 자동으로 네비게이팅
        router.push({
            pathname: `/movies/${id}`,
            query: {
                title: title,
            }
        },
            `/movies/${id}` //url 정보 숨겨줌. 현재는 query숨져짐
        );
    }

    return (
        <div className="container">
            <Seo title="Home" />
            {!results && <h4>Loading...</h4>}
            {results?.map(movie => (
                <div onClick={() => onClick(movie.id, movie.original_title)} className="movie" key={movie.id}>
                    <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
                    <h4>
                        {/* 네비게이팅 방법 2.Link 사용 */}
                        <Link href={{
                            pathname: `/movies/${movie.id}`,
                            query: {
                                title: movie.original_title,
                            },
                        }}
                            as={`/movies/${movie.id}`}
                            key={movie.id}>
                            {movie.original_title}
                        </Link>
                    </h4>
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
}