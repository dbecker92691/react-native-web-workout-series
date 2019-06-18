# react-native-web-workout-series


## Tutorial Video
https://www.youtube.com/watch?v=_CBYbEGvxYY


## Docs

react native docs: https://facebook.github.io/react-native/blog/2018/05/07/using-typescript-with-react-native
client side rendering: https://github.com/necolas/react-native-web/blob/master/docs/guides/client-side-rendering.md
yarn nohoist: https://yarnpkg.com/blog/2018/02/15/nohoist/
wml: https://github.com/wix/wml



## Run
Root:
~/root-directory/ $ wml start
    - coppies changes made from common and adds them to app/web


App:
~/packages/app $ yarn start
    - starts server

~/packages/app $ yarn ios
    - launches emulator


Common:
~/packages/common $ yarn watch
    - watches for changes made when compiling

~/packages/common $ yarn build
    - deletes dist and recompiles code


Web:
~/packages/web $ yarn start
    - starts server
