import React from "react"
import sal from "sal.js"

function CommonTransition({
  direction,
  item,
  duration = "800",
  delay = "200",
  // 스크린 사이즈가 767px이하로 줄어들거나 그 이상으로 커지면,
  // 최상단으로 이동하므로 한번만 전달해도 된다.
  is_mobile = null,
  force_load = false,
  options = { once: true },
}) {
  const [state, setState] = React.useState({ mobile: true, forceLoad: "" })
  // 이미 활성화 된 sal의 options를 초기화 하기 위해 reset method를 사용하여 viewport 사이즈에 따라 옵션을 제공한다.
  // sal의 options 인터페이스에 따라 options를 한번 더 호출하여 reset method 처럼 사용하기도 하고, 새로운 옵션을 추가하기도 한다.
  sal({
    options: options,
  })

  // is_desktop의 인자가 바뀌면 인자를 상태에 저장하여 컴포넌트를 리렌더링 함,
  // sal의 옵션을 리셋하면 다시 sal이 관찰을 시작한다.
  React.useEffect(() => {
    // 가끔 첫 컨텐츠의  reveal 시작점이 컨텐츠의 중간인 경우가 있다.
    // 페이지에 진입하자마자 애니메이션이 시작되어야 하는데 시작되지 않아 컨텐츠가 보이지 않는다.
    // 그런 경우, force_load옵션을 true로 줘서, 강제로 reveal시킨다.
    if (force_load) {
      setTimeout(() => {
        setState({ ...state, forceLoad: "sal-animate" })
      }, 600)
    }
    setState({ forceLoad: "", mobile: is_mobile })

  }, [is_mobile, force_load])

  return (
    <div
      className={state.forceLoad}
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

export {
  TransitionUp,
  TransitionLeft,
  TransitionImage,
  TransitionPiano,
}
