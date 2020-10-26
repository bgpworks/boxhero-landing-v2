import React from "react"
import sal from "sal.js"

function CommonTransition({
  direction,
  item,
  duration = "800",
  delay = "0",
  is_desktop = null,
  is_mobile = null,
  force_load = false,
}) {
  const [state, setState] = React.useState({ forceLoad: "" , disabled: "sal-disabled"})

  React.useEffect(() => {
    let timer
    const salOptions = () => {
      // 이미 활성화 된 sal의 options를 초기화 하기 위해 reset method를 사용하여 viewport 사이즈에 따라 옵션을 제공한다.
      // sal의 options 인터페이스에 따라 options를 한번 더 호출하여 reset method 처럼 사용하기도 하고, 새로운 옵션을 추가하기도 한다.
      sal({
        options: { once: true },
      })
    }

    // is_desktop && is_mobile의 인자가 바뀌면 옵션을 재 할당한다.,
    // sal의 옵션을 할당하면 다시 sal이 관찰을 시작한다.
    if ((is_desktop || is_mobile) && force_load) {
      salOptions()
      // 가끔 첫 컨텐츠의 reveal 컨텐츠의 중간이 시작점인 경우가 있다.
      // 페이지에 진입하자마자 애니메이션이 시작되어야 하는데 시작되지 않아 컨텐츠가 보이지 않는다.
      // 그런 경우, force_load옵션을 true로 줘서, 강제로 reveal시킨다.
      timer = setTimeout(() => {
        setState({ forceLoad: "sal-animate" })
      }, 600)
    }
    if (is_desktop || is_mobile) {
      salOptions()
    }


    return () => {
      // setTimeout으로 발생하는 메모리 누수를 component가 unmounted될때 cleartimeout을 써서 해결
      clearTimeout(timer)
    }
  }, [force_load, is_desktop, is_mobile, state])
  return (
    <div
      className={`${state.forceLoad}`}
      data-sal-duration={duration}
      data-sal={direction}
      data-sal-delay={delay}
      data-sal-easing="ease"
    >
      {item}
    </div>
  )
}

// slide up transiton
function TransitionUp({
  item, // 필수
  ...arg
}) {
  return CommonTransition({ direction: "slide-up", item: item, ...arg })
}

// slide left transition
function TransitionLeft({
  item, // 필수
  ...arg
}) {
  return CommonTransition({ direction: "slide-left", item: item, ...arg })
}

// slide image transition
function TransitionImage({
  item, // 필수
  ...arg
}) {
  return CommonTransition({
    direction: "slide-up-image",
    duration: 1300,
    item: item,
    ...arg,
  })
}

// slide image transition
function TransitionPiano({
  item, // 필수
  ...arg
}) {
  return CommonTransition({
    direction: "slide-up-image-piano",
    item: item,
    ...arg,
  })
}

export { TransitionUp, TransitionLeft, TransitionImage, TransitionPiano }
