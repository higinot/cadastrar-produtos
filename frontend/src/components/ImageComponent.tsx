type ImageComponenteProps = {
  infoForm: {
    title: string;
  };
};

function ImageComponente({ infoForm }: ImageComponenteProps) {
  return (
    <>
      <span>{infoForm.title}</span>
    </>
  );
}

export default ImageComponente;
