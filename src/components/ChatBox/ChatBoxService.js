const filterMessagesByText = (msgsList, filterText) => {
    let filteredData = msgsList
    filteredData = filteredData.filter((element) => {
        let returnElement = element["created_by"]
            .toString()
            .toLowerCase()
            .replace(/ /g, "")
            .indexOf(filterText.toString().replace(/ /g, "").toLowerCase()) !== -1
        if(returnElement) return element
        returnElement = element["content"]
            .toString()
            .toLowerCase()
            .replace(/ /g, "")
            .indexOf(filterText.toString().replace(/ /g, "").toLowerCase()) !== -1
        if(returnElement) return element
    });
    return filteredData;
};



export {
    filterMessagesByText
}