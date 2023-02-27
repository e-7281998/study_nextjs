//next.js에 변수를 포함하는 Dynamic URL이라는 것을 알려주는 유일한 방법
// 파일명에 [변수명].js
///movies/:id (react) ==> movies/12324 입력하면 현재 이 파일 보임
import { useRouter } from "next/router";

export default function Detail() {
    const router = useRouter();
    console.log(router);
    return "detail";
}