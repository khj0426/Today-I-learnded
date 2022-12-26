# 리액트의 `Ref`에 대해 알아보자

## Ref?

- ref는 `변경이 가능한 변수`이며, 값이 변할 때 `렌더링이 되지 않습니다`

- ref는 주로 `dom`에 접근해서, 컴포넌트 전체 랜더링과 관련없는 작업을 할 때 유용합니다

- 부모컴포넌트에서 자식컴포넌트로 `ref를 내려줄때`는 `forwardRef`를 사용합니다.

- ref는 사실 일반 객체입니다. ref를 찍어보면 다음과 같이 나옵니다.

- useRef는 리렌더링 하지 않습니다. 컴포넌트의 속성만 조회&수정합니다.

<br></br>
![ret](https://github.com/khj0426/Today-I-learnded/blob/main/React/images/code.png?raw=true)]

## Ref와 컴포넌트 리랜더링

`React`에서 `State`는 많이 사용하고 , 중요한 개념입니다. `useRef`를 사용했을 때 이득이 되는 점은, `무분별한 컴포넌트 리랜더링을 방지한다`입니다.

Ref를 출력해보면 `current`프로퍼티를 갖는 객체가 나옵니다. 리액트에서 이 객체를 통해 `DOM의 직접적인 접근`을 가능하게 합니다.

이제 Ref를 사용해봅시다. <br></br>

위와 같은 코드가 있다고 해봅시다. 이 코드는 `input`이 바뀔떄마다, `리랜더링`이 발생하고, 글자를 입력할떄마다, 상당히 많이 랜더링이 발생합니다.

<br></br> ![rerender](https://user-images.githubusercontent.com/59411107/207913948-a98d96bf-512b-4c55-9e03-048c502b4134.png)

이제 `ref`로 `과도한 리랜더링`을 방지해보겠습니다.
<br></br>
![code](https://user-images.githubusercontent.com/59411107/207914626-c4ada34b-6eff-47ea-8823-6f0371b24838.png)

같은 문자열을 입력해도 리랜더링이 굉장히 적어진 것을 볼 수 있었습니다.

<br></br> ![rerendersecond](https://user-images.githubusercontent.com/59411107/207914023-42fb82df-bcd0-4798-8bea-0e472647bd9c.png)

## 그럼 리액트에서 DOM API 쓰면 안되나요?

리액트에서도 `id`,`class`등의 DOM API를 사용 가능합니다. 하지만 사용이 권장되지
는 않습니다.

### 컴포넌트가 여러 개가 생성된 경우

이떄, `id`나 `class`로 특정해서 원하는 `DOM요소`를 갖고 오기 쉽지 않습니다. 예를
들어, 같은 컴포넌트를 여러번 사용한다고 생각해 봅시다. HTML에서 `id`는 유일해야
하는데, 이 경우에는 유일한 `id`가 여러번 반복해서 생기므로, 바람직하지 않는 접근
입니다.
