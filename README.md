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
