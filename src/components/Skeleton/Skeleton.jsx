function Skeleton({ items, w, h }) {
  const style = {
    width: w,
    height: h,
    background: "#F0F0F0",
  };

  const skeletons = [];

  for (let i = 0; i < items; i += 1) {
    skeletons.push(<div key={i} style={style} />);
  }

  return skeletons;
}

export default Skeleton;
