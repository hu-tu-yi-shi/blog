import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from "recoil";

export const StateIsLight = atom({
  key: "StateIsLight",
  default: true,
});
