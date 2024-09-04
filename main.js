import curriculumData from "./curriculum_data.js";

const typeTranslations = {
  education: "Educação",
  experience: "Experiência",
  voluntary: "Voluntário",
  acknowledgement: "Reconhecimentos",
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("curriculum-container");

  // listar os `type` do `curriculumData`
  const types = curriculumData.map((item) => item.type);
  const uniqueTypes = [...new Set(types)]; // ['education', 'experience', 'voluntary', 'acknowledgement']

  // criar um bloco para cada type
  const typeBlocks = uniqueTypes.map((type) => {
    const element = document.createElement("div");
    element.classList.add("curriculum-type");
    element.id = type;

    const title = document.createElement("h2");
    title.textContent = typeTranslations[type];

    element.appendChild(title);

    return element;
  });

  // colocar cada tipo no container
  typeBlocks.forEach((block) => {
    container.appendChild(block);
  });

  curriculumData.forEach((item) => {
    const block = document.createElement("div");
    block.classList.add("curriculum-block");

    const title = document.createElement("h3");
    title.classList.add("curriculum-title");
    title.textContent = item.title;

    const institutionOrCompany = document.createElement("p");
    institutionOrCompany.classList.add("curriculum-institution");
    institutionOrCompany.textContent = item.institution || item.company;

    const dateRange = document.createElement("p");
    dateRange.classList.add("curriculum-dates");
    dateRange.textContent = `${item.startDate} - ${item.endDate}` || item.date;

    block.appendChild(title);
    block.appendChild(institutionOrCompany);
    block.appendChild(dateRange);

    // antes o append era feito no `container`
    // mas como na linha 32 nós criamos 1 div com o id de cada type
    // agora é possível fazer o append na div correspondente ao type
    const parent = document.getElementById(item.type);

    parent.appendChild(block);
  });
});
