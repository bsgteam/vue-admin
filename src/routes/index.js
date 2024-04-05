import { createRouter, createWebHistory } from 'vue-router';

// page 컴포넌트 정보 가져오기




// 라우츠로 맵핑해주기
const routes = [];

// 라우터 객체 생성
const router = createRouter({
    history: createWebHistory('/'),
    routes,
});

// 외부로 export
export default router;