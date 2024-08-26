## 📱 인스타그램 이름 생성 사이트

한글 : https://instanamesuggest.netlify.app/ <br>
영어 : https://ignamegenerator.netlify.app/
<br>
<br>

## 📖 사이트 소개

[인스타그램](https://www.instagram.com/) 가입자를 위한 사용자 닉네임 추천/제작 사이트
<br>
<br>

## ⭐ 닉네임 추천 종류

#### 한글 Ver.
- **한글 이름**을 통한 닉네임 생성
- **영문 이름 (성, 이름)** 을 통한 닉네임 생성
- **출생 정보**를 통한 닉네임 생성
- **단어 조합**을 통한 닉네임 생성
- **현재 시간 (서버 시간)** 을 통한 닉네임 생성
- **예쁜 외국어 (프랑스어, 이탈리아어, 스페인어, 히브리어)** 를 통한 닉네임 생성
- **격언을 인용**한 닉네임 생성
- **이모티콘**을 사용한 닉네임 생성
- **랜덤 (주먹으로 키보드 치기)** 닉네임 생성
<br>

#### 영어 Ver. 
- **이름 (First Name, Middle Name, Last Name)** 을 통한 닉네임 생성
- **생일**을 통한 닉네임 생성
- **단어 조합**을 통한 닉네임 생성
- **현재 시간 (서버 시간)** 을 통한 닉네임 생성
- **예쁜 외국어 (프랑스어, 이탈리아어, 스페인어, 히브리어)** 를 통한 닉네임 생성
- **이모티콘**을 사용한 닉네임 생성
- **랜덤 (주먹으로 키보드 치기)** 닉네임 생성
<br>
<br>

## ⏰ 개발 기간
2024.01 ~ 2024.02 : 개발 및 배포<br>
2024.02           : SEO 설정 및 광고 삽입<br>
2024.03 ~         : 에러 수정 및 유지 보수<br>
<br>

## 🛠 개발 도구
### FrontEnd

<img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=HTML5&logoColor=white">
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=CSS3&logoColor=white">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=JavaScript&logoColor=white">
<img src="https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=Bootstrap&logoColor=white">

### BackEnd

<img src="https://img.shields.io/badge/Node.js-5FA04E?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=Express&logoColor=white">
<img src="https://img.shields.io/badge/Nodemon-76D04B?style=for-the-badge&logo=Nodemon&logoColor=white">

## 🎪 주요 기술
- 사용자가 입력한 한글 이름(별명)을 영문 닉네임으로 번역하기 위해 **DeepL API**,  Express, CloudType 서버를 이용하여 번역 API를 페이지에 사용
- 키보드를 주먹으로 두드려서 닉네임을 짓는 유행을 반영하기 위해 **HTML Image Map**을 사용하여 키보드 이미지의 자판을 클릭하면 반응하게 제작
- 모바일/웹 모두에서 동작하기 위해 **Bootstrap**을 활용하여 반응형 웹으로 화면을 구성
- 해당 사이트의 접근성을 위해 **Google Search Console** 활용, **SEO 개선 (LightHouse 기준 100점)**, 한글/영어 사이트 분리 후 퍼플리싱

## 🔥 개발 중 문제가 생겼던 점과 해결책
- 첫 외부 API, 클라우드 서버 활용으로 연동 부분 문제 발생<br>
→ **Nodemon**을 통해 디버깅 시 시간 감축, **CORS**를 활용하여 웹 보안 문제 해결, [API 공식문서](https://github.com/DeepLcom/deepl-node)를 통해 연결 수행
- DB를 활용하여 닉네임에 활용될 정보 (예쁜 외국 단어, 탄생석 등..)를 가져올 시 성능이 감소<br>
→ data 폴더 속 해당 정보를 하드코딩하여 API 활용을 제외한 부분의 속도를 개선
