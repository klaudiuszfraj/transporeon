export function getDataQuery(setState, ref) {
    ref.onSnapshot(querySnapshot => {
        const items = [];
        querySnapshot.forEach(doc => {
            items.push(doc.data());
        })
        setState(items);
    })
}

export function getDataOnce(setState, ref) {
    ref.get().then(item => {
        const items = item.docs.map(doc => doc.data());
        setState(items)
    })
}