### yarn berry로 cra 설치하는 법

```
$ yarn dlx create-react-app <설치를 윈하는 폴더> --template typescript

-- create-react-app 기본 설치만으로는 동작하지 않았다. 아래 패키지를 설치해야 한다.
$ yarn add eslint-config-react-app -D

-- 실행
$ yarn start
```

### VSCode를 사용할 경우

vscode가 zip 아카이브에서 직접 파일을 읽을 수 있도록 아래 extension 추가

```
$ yarn dlx @yarnpkg/sdks vscode
```
