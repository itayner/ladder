import { useNavDropdownMob } from "../contexts/navDropdownMob";
import { useDragContext } from "../contexts/drag";

export default function useMobileClickAndDrag() {
  const { state: menuState, dispatch: dispatchMenuToggle } =
    useNavDropdownMob();
  const { state: dragState, dispatch: dragDispatcher } = useDragContext();

  const onMobileClick = () => {
    if (menuState.visible) dispatchMenuToggle({ type: "toggle" });
    dragDispatcher({ type: "clearPressed" });
  };
  const onMobileMouseMove = () => {
    if (dragState.pressed) dragDispatcher({ type: "setDrag" });
  };
  return { onMobileClick, onMobileMouseMove };
}
