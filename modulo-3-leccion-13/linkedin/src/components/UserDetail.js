const UserDetail = (props) => {

  const { name, image, city, gender, email } = props.data;
  return (
    <article className="users__card">
      Hola!
       <div className="users__card--imgContainer">
        <img className="users__card--img" src={image} alt={`Foto de ${name}`} title={`Foto de NAME`} />
      </div>
      <h4 className="users__card--title">{name}</h4>
      <p className="users__card--description">
        {city} / {gender}
      </p>
      <p><a href="mailto:{email}">{email}</a></p>
    </article>
  );
}

export default UserDetail;