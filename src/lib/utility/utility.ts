export const formatNumber = (number: number) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'decimal',
    });
    return formatter.format(number);
}