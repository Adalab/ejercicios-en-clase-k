import React, { useState } from "react";
import Text from "./Text";
import Select from "./Select";
import Checkbox from "./Checkbox";
import Radio from "./Radio";
import BigText from "./BigText";

const Encuesta = (props) => {

  const provinces = [
    { id: "alicante", name: "Alicante" },
    { id: "baleares", name: "Baleares" },
    { id: "barcelona", name: "Barcelona" },
    { id: "granada", name: "Granada" },
    { id: "las-palmas", name: "Las Palmas" },
    { id: "madrid", name: "Madriz" },
    { id: "sevilla", name: "Sevilla" },
    { id: "valladolid", name: "Valladolid" },
    { id: "bizkaia", name: "Bizkaia" },
  ];

  const petTypes = [
    { id: "cat", text: "Gato" },
    { id: "dog", text: "Perro" },
    { id: "pig", text: "Chancho" },
  ];

  const petCountList = [0, 1, 2, 3];

  const [name, setName] = useState("");
  const [province, setProvince] = useState("");
  const [pet, setPet] = useState([]);
  const [petCount, setPetCount] = useState([]);
  const [comments, setComments] = useState([]);
  const [errors, setErrors] = useState({});

  const handleChange = (id, value) => {

    if (id === "name") {
      setName(value);
      if (value.length >= 5 && !value.toLowerCase().includes("kizzy")) {
        setErrors({ ...errors, name: "El nombre debe ser Kizzy" });
      } else {
        setErrors({ ...errors, name: null });
      }
    }
    else if (id === "province") {
      setProvince(value);
    }
    else if (id === "pet") {
      if (pet.includes(value) ) {
        setPet(pet.filter((petName) => petName !== value));
      } else {
        setPet([...pet, value]);
      }
    }
    else if (id === "many") {
      setPetCount(parseInt(value));
    }
    else if (id === "comments") {
      setComments(value);
    }

  };

  return (
    <div className="Encuesta form">
      <h2 className="form__title">Encuesta anónima</h2>
      <Text
        text="Escribe tu nombre"
        id="name"
        value={name}
        placeholder={'Kizzmekia "Kizzy" Shanta Corbett'}
        error={errors.name}
        handleChange={handleChange}
      />
      <Select
        text="¿De qué provincia eres?"
        id="province"
        value={province}
        list={provinces}
        handleChange={handleChange}
      />
      <Checkbox text="¿Qué mascota tienes?" id="pet" values={pet} list={petTypes} handleChange={handleChange} />
      <Radio text="¿Cuántas mascota tienes?" id="many" value={petCount} list={petCountList} handleChange={handleChange} />
      <BigText text="Algo que decir" id="comments" value={comments} handleChange={handleChange}/>
      {/*
      <input type="file" name="fichero" id="fichero" ref={fileRef} onChange={changeFile} />
      */}
    </div>
  );
};

export default Encuesta;
