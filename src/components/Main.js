import React, { useState, useRef } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useReactToPrint } from "react-to-print";
import CVForm from "./CVForm";
import CVPreview from "./CVPreview";
import exampleCV from "./Utils/exampleCV";
import emptyCV from "./Utils/emptyCV";

const Main = () => {
    const [cv, setCV] = useState(emptyCV);

    const handleChangePersonal = (e) => {
        const { name, value, type } = e.target;

        if (type === "file") {
            handleChangeFile(e);
            return;
        }

        setCV((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            },
        }));
    };

    const handleChangeFile = (e) => {
        const { name } = e.target;
        const file = e.target.files[0];
        if(!file) return;

        const reader = new FileReader();
        reader.onload = () => {
            setCV((prevState) => ({
                ...prevState,
                personalInfo: {
                    ...prevState.personalInfo,
                    [name]: reader.result,
                },
            }));
        };
        reader.readAsDataURL(file);
    };

    const handleChangeExperience = (e, id) => {
        const { name, value } = e.target;

        setCV((prevState) => {
            const newExperience = prevState.experience.map((experienceItem) => {
                if(experienceItem.id === id) {
                    return { ...experienceItem, [name]: value };
                }
                return experienceItem;
            });
            return { ...prevState, experience: [...newExperience] };
        });
    };

    const handleAddExperience = () => {
        setCV((prevState) => ({
            ...prevState,
            experience: [
                ...prevState.experience,
                {
                    id: uuidv4(),
                    position: "",
                    company: "",
                    city: "",
                    to: "",
                    from: "",
                },
            ],
        }));
    };

    const handleDeleteExperience = (id) => {
        setCV((prevState) => {
            const newExperience = prevState.experience.filter(
                (experienceItem) => experienceItem.id !== id
            );
            return { ...prevState, experience: [...newExperience] };
        });
    };

    const handleChangeEducation = (e, id) => {
        const { name, value } = e.target;

        setCV((prevState) => {
            const newEducation = prevState.education.map((educationItem) => {
                if(educationItem.id === id) {
                    return { ...educationItem, [name]: value };
                }
                return educationItem;
            });
            return { ...prevState, education: [...newEducation] };
        });
    };

    const handleAddEducation = () => {
        setCV((prevState) => ({
            ...prevState,
            education: [
                ...prevState.education,
                {
                    id: uuidv4(),
                    universityname: "",
                    city: "",
                    degree: "",
                    subject: "",
                    from: "",
                    to: "",
                },
            ],
        }));
    };

    const handleDeleteEducation = (id) => {
        setCV((prevState) => {
            const newEducation = prevState.education.filter(
                (educationItem) => educationItem.id !== id
            );
            return { ...prevState, education: [...newEducation] };
        });
    };

    const handleLoadExample = () => {
        setCV(exampleCV);
    }

    const handleReset = () => {
        setCV(emptyCV);
    };

    const componentRef = useRef();

    // throws warning because react-to-print uses findDOMNodoe
    const handlePrint = useReactToPrint({ content: () => componentRef.current });

    return (
        <MainWrapper>
            <CVForm
                cv={cv}
                onChangePersonal={handleChangePersonal}
                onChangeExperience={handleChangeExperience}
                onAddExperience={handleAddExperience}
                onDeleteExperience={handleDeleteExperience}
                onChangeEducation={handleChangeEducation}
                onAddEducation={handleAddEducation}
                onDeleteEducation={handleDeleteEducation}
                onPrint={handlePrint}
                onLoadExample={handleLoadExample}
                onReset={handleReset}
            />
            <CVPreview cv={cv} ref={componentRef} />
        </MainWrapper>
    );
};

export default Main;

const MainWrapper = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;
    gap: 6mm;
    padding: 5rem;
    margin-bottom: 4rem;
    @media (max-width: 1600px) {
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }
`;