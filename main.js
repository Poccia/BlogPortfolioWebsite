import curriculumData from './curriculum_data.js';

document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('curriculum-container');

  curriculumData.forEach(item => {
    const block = document.createElement('div');
    block.classList.add('curriculum-block');

    const title = document.createElement('h3');
    title.classList.add('curriculum-title');
    title.textContent = item.title;

    const institutionOrCompany = document.createElement('p');
    institutionOrCompany.classList.add('curriculum-institution');
    institutionOrCompany.textContent = item.institution || item.company;

    const dateRange = document.createElement('p');
    dateRange.classList.add('curriculum-dates');
    dateRange.textContent = `${item.startDate} - ${item.endDate}` || item.date;

    block.appendChild(title);
    block.appendChild(institutionOrCompany);
    block.appendChild(dateRange);

    container.appendChild(block);
  });
});
