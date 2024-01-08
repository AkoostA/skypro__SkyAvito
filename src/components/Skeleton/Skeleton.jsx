import S from "./Skeleton.module.css";

function Skeleton({ items }) {
  const skeletons = [];

  for (let i = 0; i < items; i += 1) {
    skeletons.push(<div key={i} className={S.skeleton} />);
  }

  return skeletons;
}

export default Skeleton;
