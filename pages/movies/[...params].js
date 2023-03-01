//next.js에 변수를 포함하는 Dynamic URL이라는 것을 알려주는 유일한 방법
// 파일명에 [변수명].js
///movies/:id (react) ==> movies/12324 입력하면 현재 이 파일 보임
import Seo from "@/components/Seo";
import { useRouter } from "next/router";

export default function Detail({ params }) {
    const [title, id] = params || [];

    //영화 상세 페이지에 다이렉트로 접속할 때만 Loading... 이 표시됨.
    //다이렉트로 들어오면 routere.query.title의 정보가 존재하지 않으므로
    return <div>
        <Seo title={title}></Seo>
        <h4>{title}</h4>
    </div>;
}

//pre-render : 서버에서 미리 렌더링 된다.

export function getServerSideProps({ params: { params } }) {
    return {
        props: {
            params,
        },
    }
}