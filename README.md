# YoustaFrontend
React + Apollo + Graphql

### nodemon 포트충돌 오류 해결법
- netstat -ano | find "LISTENING" | find "4000"
- taskkill /F /PID [PID]

### github 원격저장소에서 로컬로 가져오기
- git fetch origin
- git checkout master
- git pull origin/master

#### Todo List
- [ ] 프로필에서 Post 정리하기
- [ ] 프론트에서 인덱싱 가능하게 하게(백엔드 일단x)



------------------------------------------------
#### 19.0 Deploying Frontend to Netlify
빌드 에러가 발생하였었는데 네티의 환경설정 문제였다,, 해결한 프로세스는 다음과 같다
- Log in to Netlify
- Choose your app and click on Site settings
- Navigate to Build & Deploy
- Under Continuous Deployment select Edit settings
- Update Build command to: CI= npm run build

#### 19.1 Building the Server
백앤드 빌딩을 시작하였다. 백앤드 빌딩을 위해선 못생긴 코드로 바꿔줘야 한다.
스크립트를 "babel src -d build" 로 수정하고,
```
yarn add @babel/cli
yarn add @babel/plugin-transform-runtime -D
yarn add @babel/runtime
```
.babelrc => {"plugins" : ["@babel/plugin-transform-runtime"]}
설치하고 yarn build를 하였다.
graphql파일들을 복사하지 않아서 에러가 발생하였다. graphql파일들을 다음 강의에서 복사할 예정.

#### 19.4 Recap (03:49)
- heroku는 요즘 js코드를 인식을 못함
- babel을 활용하여 못난js로 바꿈
- 그리고 그게 build폴더로 가는데 문제는 graphql을 babel이 인식을 못함
- postbuild -> copy를 이용하여 graphql파일들을 복사한다.
- 그걸 build/api 에 넣었다. 
- 근데 에러가 발생했는데 generated 폴더를 찾을수 없었다. 왜냐하면 우리는 prisma의 endpoint를 숨기기때문에 git에 올리지 않음
- 따라서 서버를 올리기 전에 prebuild를 진행하였다
- 그런데 또 발생한 문제가 prisma.yml파일이 heroku에 숨겨져 있다. 역시나 .gitignore때문,
- 그래서 환경변수 처리함. 
- 그리고 마지막 문제는 heroku가 우리의 환경변수를 모름, 따라서 heroku에서 환경변수를 관리하게 해야할듯.
