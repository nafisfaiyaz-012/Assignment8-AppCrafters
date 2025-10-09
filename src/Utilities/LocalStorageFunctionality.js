const getDataFromLS = () => {
  const dataFromLS = localStorage.getItem("apps");
  const dataFromLSParse = JSON.parse(dataFromLS);

  if (dataFromLS) {
    return [...dataFromLSParse];
  } else {
    return [];
  }
};

const setDataToLS = (id) => {
  const dataFromLS = getDataFromLS();

  if (dataFromLS.includes(Number(id))) {
    localStorage.setItem("apps", JSON.stringify(dataFromLS));
  } else {
    dataFromLS.push(Number(id));
    localStorage.setItem("apps", JSON.stringify(dataFromLS));
  }
};

export { getDataFromLS, setDataToLS };
