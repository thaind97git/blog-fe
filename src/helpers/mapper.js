const populateMapper = (
  data = [],
  { populateField, newPopulateField = 'populateResults' },
) => {
  if (!data.length || !populateField) {
    return [];
  }

  const dataWithoutPopulate = data.filter(item => !item[populateField]) || [];
  const dataExistPopulate = data.filter(item => item[populateField]) || [];

  for (const itemPopulated of dataExistPopulate) {
    const populateFieldId = itemPopulated[populateField].id;

    const currentItemInWithoutPopulate = dataWithoutPopulate.find(
      item => item.id === populateFieldId,
    );
    const indexOfCurrent = dataWithoutPopulate.indexOf(
      currentItemInWithoutPopulate,
    );

    if (indexOfCurrent !== -1) {
      const currentNewPopulateField =
        dataWithoutPopulate[indexOfCurrent][newPopulateField] || [];

      if (
        !(dataWithoutPopulate[indexOfCurrent][newPopulateField] || []).includes(
          itemPopulated,
        )
      ) {
        dataWithoutPopulate[indexOfCurrent][newPopulateField] = [
          ...currentNewPopulateField,
          itemPopulated,
        ];
      }
    }
  }
  return dataWithoutPopulate;
};

export const listResumeMapper = data =>
  populateMapper(data, {
    populateField: 'sectionId',
    newPopulateField: 'subSections',
  });
