// src/components/PageDescription.tsx

import type { FunctionComponent } from 'react';
import styles from './PageDescription.module.css';

// 💡 Props의 타입을 정의합니다. onGoBack은 선택 사항입니다.
type PageDescriptionProps = {
    title: string;
    subTitle: string;
    onGoBack?: () => void; // 첫 페이지에서는 구현하지 않더라도 타입을 정의해 둡니다.
};

// 💡 컴포넌트에 정의된 Props 타입을 적용합니다.
const PageDescription: FunctionComponent<PageDescriptionProps> = ({ 
    title, 
    subTitle, 
    onGoBack, // onGoBack prop을 받습니다.
}) => {
    return (
        <div className={styles.pageDescription}>
            {/* 💡 2단계 수정: 뒤로 가기 버튼 자리를 항상 만듭니다. 
                onGoBack이 있다면 클릭 이벤트에 연결하고, 없으면 빈 함수를 전달합니다.
                cursor: 'default'를 추가하여 첫 페이지에서 클릭이 안 되는 것처럼 보이게 할 수 있습니다. */}
            <div 
                className={styles.goBack} 
                onClick={onGoBack || (() => {})} // onGoBack이 없으면 아무것도 하지 않는 함수 연결
                style={{ cursor: onGoBack ? 'pointer' : 'default' }} // 커서 스타일 변경
            >
                {/* 뒤로 가기 아이콘 (이미지 또는 SVG)이 들어갈 자리입니다.
                    현재는 구현하지 않으므로 빈 상태로 둡니다. 
                    혹은 배경 이미지로 처리했다면 이 div는 비워두는 것이 맞습니다.
                */}
                {onGoBack && <span></span>}
                {!onGoBack && <div style={{width: '8px', height: '16px'}} />} {/* 아이콘 자리를 위한 최소한의 더미 요소 */}
            </div>
            
            <div className={styles.contents}>
                <div className={styles.title}>{title}</div>
                <div className={styles.subTitle}>{subTitle}</div>
            </div>
        </div>
    );
};

export default PageDescription;