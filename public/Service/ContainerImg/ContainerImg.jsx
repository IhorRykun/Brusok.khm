import Image from "next/image";

export const ContainerImg = ({ props, children }) => {
  return (
    <div>
      <Image className={} src={props} alt={children} />
    </div>
  );
};
