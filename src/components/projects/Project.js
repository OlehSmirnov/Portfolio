function Project({image, name}) {
  console.log(image, name)
  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt=""/>
    </div>
  );
}

export default Project;
