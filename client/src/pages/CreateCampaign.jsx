import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ethers } from "ethers";
import { money } from "../assets";
import Button from "../components/shared/Button";
import { checkIfImage } from "../utils";
import classes from "./CreateCampaign.module.css";
import FormField from "../components/shared/FormField";

const CreateCampaign = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    title: "",
    description: "",
    target: "",
    deadline: "",
    image: "",
  });

const handleFormFieldChange = (fieldName, e) => {
  setForm({...form, [fieldName] : e.target.value})
}

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form)
  }

  return (
    <div className={classes.container}>
      {isLoading && "Is loading..."}
      <h1 className={classes.title}>Lancer une campaigne</h1>
      <div className={classes.divider}></div>

      <form onSubmit={handleSubmit} className={classes.form}>
        <div className={classes.containerInput}>
          <FormField
            labelName="votre nom*"
            placeholder="John Doe"
            inputType="text"
            value={form.name}
            handleChange={(e) => handleFormFieldChange('name', e)}
          />
        </div>
        <div className={classes.containerInput}>
          <FormField
            labelName="Nom du projet*"
            placeholder="Ecrivez un nom"
            inputType="text"
            value={form.title}
            handleChange={(e) => handleFormFieldChange('title', e)}
          />
        </div>
        <div className={classes.containerInput}>
          <FormField
            labelName="Votre projet*"
            placeholder="Racontez-nous votre hostoire..."
            isTextArea
            value={form.description}
            handleChange={(e) => handleFormFieldChange('description', e)}
          />
        </div>

        <div className={classes.banner}>
          <img src={money} alt="money" />
          <h4>Obtenez 100% de vos gains</h4>
        </div>

        <div className={classes.containerInput}>
          <FormField
            labelName="Objectif*"
            placeholder="ETH 0.50"
            inputType="text"
            value={form.target}
            handleChange={(e) => handleFormFieldChange('target', e)}
          />
        </div>

        <div className={classes.containerInput}>
          <FormField
            labelName="Date de fin*"
            placeholder="date de fin"
            inputType="date"
            value={form.deadline}
            handleChange={(e) => handleFormFieldChange('deadline', e)}
          />
        </div>

        <div className={classes.containerInput}>
          <FormField
            labelName="Image de couverture*"
            placeholder="Votre image"
            inputType="url"
            value={form.image}
            handleChange={(e) => handleFormFieldChange('image', e)}
          />
        </div>

        <div className={classes.containerbtn}>
          <Button lg>Créer ma campaigne</Button>
        </div>

      </form>
    </div>
  );
};

export default CreateCampaign;
