import React from "react";
import FormElements from "@/components/FormElements";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Form elemets",
  description: "",
};

const FormElementsPage = () => {
  return (
    <>
      <FormElements />
    </>
  );
};

export default FormElementsPage;
