import Description from "./Descriprion/Description";

function Slide({ src, desc }) {
  return (
    <>
      <img src={src} alt={desc} />
      <Description>{desc}</Description>
    </>
  );
}

export default Slide;