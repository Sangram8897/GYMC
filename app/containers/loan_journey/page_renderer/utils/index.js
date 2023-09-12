export function stuctureFieldsInGroup(array) {
    const groupedObject = {};
    array.forEach((item) => {
        if (!groupedObject[item?.groupIndex]) {
            groupedObject[item?.groupIndex] = [];
        }
        groupedObject[item?.groupIndex].push(item);
    });
    const groupedArray = Object.values(groupedObject);
    return groupedArray
}

export function modifyInSectionListFormat(array) {
    return array.map((i, index) => {
        let new_item = {
            container_id: `${index + 1}`,
            title: i[0]?.groupName ? i[0]?.groupName : 'page',
            fields: [...i]
        }
        return new_item
    });
}