export const formatCurrency = (value: string) => {
    return Number(value)
        .toLocaleString("fr-FR")
        .replace(/\s/g, " ") + " Ar";
}