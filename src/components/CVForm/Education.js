import React from "react";
import EducationItem from "./EducationItem";
import Section from "../Utils/Section";
import Button from "../Utils/Button";

const Education = ({ education, onChange, onAdd, onDelete }) => {
    const educationItems = education.map((educationItem) => (
        <EducationItem
            key={educationItem.id}
            id={educationItem.id}
            educationItem={educationItem}
            onChange={onChange}
            onDelete={onDelete}
        />
    ));

    return (
        <Section title="Education" titlePadding=".5rem" direction="column">
            {educationItems}
            <Button text="Add" onClick={onAdd}/>
        </Section>
    );
};

export default Education;