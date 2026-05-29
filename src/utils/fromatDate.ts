export const formatDate = (value: string) =>{

    const date = new Date(value);

    // const day = date.toLocaleDateString("fr-FR", {
    //     day: "2-digit"
    // })
    let month = date.toLocaleDateString("fr-FR", {
        month: "long"
    })
    const year = date.toLocaleDateString("fr-FR", {
        year: "numeric"
    })

    month = month.charAt(0).toUpperCase() + month.slice(1);

    return `${month} - ${year}`
}