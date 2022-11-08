import { useState } from "react";
import useApi from "../../hooks/useApi";
import { Robot } from "../../types";
import Button from "../Button/Button";
import RobotFormStyled from "./RobotFormStyled";
import { useNavigate } from "react-router-dom";

const RobotForm = (): JSX.Element => {
  const { createOneRobotApi } = useApi();
  const navigate = useNavigate();

  const intialFormData = {
    name: "",
    image: "",
    speed: 0,
    endurance: 0,
    creationDate: "",
  };

  const [formData, setFormData] = useState(intialFormData);

  const handleFormChange = (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [event.target.id]: event.target.value,
    });
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const formDataToSubmit: Robot = {
      _id: "",
      name: formData.name,
      image: formData.image,
      features: {
        speed: formData.speed,
        endurance: formData.endurance,
        creationDate: formData.creationDate,
      },
    };
    createOneRobotApi(formDataToSubmit as Robot);
    navigate("/home");
  };

  return (
    <>
      <RobotFormStyled onSubmit={(event) => handleSubmit(event)}>
        <div className="form__item">
          <label className="form__label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            name="robotName"
            id="name"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <div className="form__item">
          <label className="form__label" htmlFor="image">
            Image URL
          </label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={handleFormChange}
            autoComplete="off"
            required
          />
        </div>
        <fieldset>
          <legend>Features: </legend>
          <div className="form__item">
            <label className="form__label" htmlFor="speed">
              Speed
            </label>
            <input
              type="number"
              name="speed"
              id="speed"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="endurance">
              Endurance
            </label>
            <input
              type="number"
              name="endurance"
              id="endurance"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
          <div className="form__item">
            <label className="form__label" htmlFor="creationDate">
              Creation Date
            </label>
            <input
              type="date"
              name="creationDate"
              id="creationDate"
              onChange={handleFormChange}
              autoComplete="off"
              required
            />
          </div>
        </fieldset>

        <Button text="Create" action={() => {}}></Button>
      </RobotFormStyled>
    </>
  );
};

export default RobotForm;
