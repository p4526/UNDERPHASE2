import React from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import Button from "../components/Button";
import ProgressSection from "../components/ProgressSection";

export default function FilterSwitch() {

    const navigate = useNavigate();
    
      const handleNextPageClick = () => {
        // TODO: '/다음-페이지-경로'를 실제 경로로 바꿔줘
        navigate('/list'); 
      };


  return (
    <Layout title="통신사를 변경해도 되나요?"
    subtitle="통신사를 변경하면 더 좋은 혜택을 받아요."
      showFooter = {false}
      showProgress = {true}
      buttonLabel="내 주변 최저가 대리점 보러가기!"

        onButtonClick={handleNextPageClick}
        step={3}

      >
      <div>
        <p>여기에 기종 선택 UI가 들어갑니다.
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
출처: https://hellomiao.tistory.com/entry/예제용-텍스트가-필요할-때-LipsumLorem-Ipsum [계속해보겠습니다:티스토리]
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
출처: https://hellomiao.tistory.com/entry/예제용-텍스트가-필요할-때-LipsumLorem-Ipsum [계속해보겠습니다:티스토리]
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
출처: https://hellomiao.tistory.com/entry/예제용-텍스트가-필요할-때-LipsumLorem-Ipsum [계속해보겠습니다:티스토리]
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
출처: https://hellomiao.tistory.com/entry/예제용-텍스트가-필요할-때-LipsumLorem-Ipsum [계속해보겠습니다:티스토리]
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
출처: https://hellomiao.tistory.com/entry/예제용-텍스트가-필요할-때-LipsumLorem-Ipsum [계속해보겠습니다:티스토리]
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
출처: https://hellomiao.tistory.com/entry/예제용-텍스트가-필요할-때-LipsumLorem-Ipsum [계속해보겠습니다:티스토리]
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
출처: https://hellomiao.tistory.com/entry/예제용-텍스트가-필요할-때-LipsumLorem-Ipsum [계속해보겠습니다:티스토리]</p>
      </div>
    </Layout>
  );
}