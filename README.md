
# 스프링 MVC 프레임워크 프로젝트
## 회원제 게시판 
-------------------------------
### 개요
------------------------------
<details>
  <summary>더보기</summary>

- **개발 인원** : 1명
- **개발 기간** : 2023-08-14 ~ 2023-08-18
- **주요 기능** :
  - 로그인 : Java Servlet API의 Filter 인터페이스를 구현하여 로그인 여부를 체크하는 필터 클래스를 정의
  - 회원가입 : 아이디 중복검사, 패스워드확인
  - 비밀번호 변경 : 로그인 후, 사용자는 메인페이지에서 비밀번호 변경할 수 있게 구현
  - 게시판 CRUD 기능, 조회수, 페이징, 본인이 쓴 글만 수정, 삭제 가능
  - 공통 기능 : ajax 활용해서 입력값에 대한 null과 빈칸을 검증, 데이터를 삭제할 때는 javaScipt의 confirm 함수 사용
####  개발언어
  <img src="https://img.shields.io/badge/JAVA 11-2F2625?style=for-the-badge&logo=coffeescript&logoColor=white">
  
#### 개발 환경
   <img src="https://img.shields.io/badge/Eclipseide-2C2255?style=for-the-badge&logo=eclipseide&logoColor=white">
   <img src="https://img.shields.io/badge/SpringFramework 5.0.2-6DB33F?style=for-the-badge&logo=Spring&logoColor=white">
   <img src="https://img.shields.io/badge/Springjdbc 5.0.2-2962FF?style=for-the-badge&logo=liquibase&logoColor=white">
   <img src="https://img.shields.io/badge/Apache.Tomcat 8.5.27-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black">
   <img src="https://img.shields.io/badge/Jstl 1.2 JSP-000000?style=for-the-badge&logo=42&logoColor=black">
   <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
   <img src="https://img.shields.io/badge/Jquery-0769AD?style=for-the-badge&logo=jquery&logoColor=black">


#### 데이터베이스 
  <img src="https://img.shields.io/badge/Mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
  
#### 형상관리
  <img src="https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=github&logoColor=white">

  </details>

---------------------------

### 요구사항 분석

---------------------------

<details>
  <summary>더보기</summary>

#### 로그인 페이지
- 로그인을 하지 않은 경우 아래 페이지만 이용가능
  - 회원가입 페이지
  - 로그인 페이지
- 로그인 검사
  - 아이디와 암호가 일치하지 않습니다. 알림 메시지 출력
  - 이외 null과 빈칸 검증 / 동일하게 알림 메시지 출력
  - 모든 검사가 통과되었다면 로그인 후 index 페이지로 이동


#### 회원가입 페이지
- 유효성 검사
  - 패스워드와 패스워드 확인란의 입력값이 일치하지 않으면 회원 가입이 진행되지 않음
  - 한 개의 칸이라도 빈칸 있으면 "빈 칸을 모두 입력하세요." alert창 띄움
  - 아이디 입력칸에 한글 입력 시 "한글 입력 불가" alert창 띄움
  - 이름 입력칸에 숫자 입력 시 영문 또는 "한글만 입력 가능합니다." alert창 띄움
  - 모든 검사가 통과되었다면 "회원가입이 완료되었습니다. 로그인 페이지로 이동합니다." alert창 띄우고 login 페이지로 이동
- 중복확인
  - 아이디 중복검사로 데이터베이스에 아이디가 존재하면 가입불가
  - 중복된 아이디이면 "이미 사용중인 아이디입니다." 사용자에게 알림메세지 출력

#### 암호 변경
- 암호 변경은 로그인된 상태에서 로그인 계정 암호만 변경 가능
- ajax 활용해서 입력값에 대한 null과 빈칸을 검증 사용자에게 알림메세지 출력
- 현재암호가 동일해야 암호 변경 가능 틀리 시 "현재 암호가 일치하지 않습니다." 알림 메세지 출력
- 모든 검사가 통과되었다면 "암호변경을 완료했습니다." alert창 띄우고 main 페이지로 이동

#### 게시판 CRUD
- 게시글 조회 페이지
  - 게시물 전체 조회 가능
  - 제목 클릭 시 상세내용 확인 가능
  - 작성일자는 ( ""분 전, ""시간 전, ""일 전  ) 해당 처럼 출력되게 구현
  - 조회 수 기능 구현
  - 한 페이지에 작성한 글이 10개가 넘어가면 페이징되게 구현
  - 페이지가 5개가 넘어가면 다음 버튼 나올 수 있게 구현

- 게시글 쓰기
  - 입력칸이 비어있으면 어디 부분이 비어있는지 alert창 띄움

- 게시물 수정, 삭제
  - 내가 작성한 글만 수정, 삭제 가능
  - 글 수정은 제목, 내용 수정 가능  이외 null과 빈칸 검증
  - 게시글 삭제 시 한번 더 확인할 수있게 javaScipt의 confirm 함수 사용
 

  </details>

----------------------------------

### DB 설계

-------------------------------

<details>
  <summary>더보기</summary>

![ERD](https://github.com/cojuns/1st_solo_project/assets/122452171/fefda7e7-ed81-45ea-b2a3-5b1e0e7ad727)
![member](https://github.com/cojuns/1st_solo_project/assets/122452171/87165826-a52e-4068-85f3-001f2a72203e)
![article](https://github.com/cojuns/1st_solo_project/assets/122452171/f7b8ae61-db7c-4681-88a8-8f48eff83660)
![article_no](https://github.com/cojuns/1st_solo_project/assets/122452171/3a184cf6-f2d2-4fac-9d9a-86f25f1763da)

</details>

----------------------------------

### API 설계

--------------------------------

<details>
  <summary>더보기</summary>

![회원관련_API](https://github.com/cojuns/1st_solo_project/assets/122452171/ce16e84e-bce8-4c3b-9cff-0bc912c15a51)

![게시글관련_API](https://github.com/cojuns/1st_solo_project/assets/122452171/b415b4e3-b95d-4981-b568-11500a640efb)

</details>

----------------------------------

## 실행 화면

--------------------------------

### 회원 관련
<details>
  <summary>더보기</summary>
#### 회원가입

https://github.com/cojuns/1st_solo_project/assets/122452171/7aa6c0aa-becc-4c18-ba6b-0a167bfeac94

#### 로그인

https://github.com/cojuns/1st_solo_project/assets/122452171/cc349500-d66a-48e3-bf27-5779be1f253a

#### 암호변경, 로그아웃

https://github.com/cojuns/1st_solo_project/assets/122452171/c55d8b29-96b0-4992-9e77-551a2fd832be


</details>

----------------------------

### 게시판

<details>
  <summary>더보기</summary>

https://github.com/cojuns/1st_solo_project/assets/122452171/894bcd3e-3bc6-46b0-bf52-5eee34c65cbc

</details>







