export function formatPrice(number: number) {
    let numberString = number.toString();
    let parts = numberString.split('.');

    let wholeParts = parts[0];
    let decimalParts = parts.length > 1 ? '.' + parts[1] : '';

    wholeParts = wholeParts.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

    return wholeParts + decimalParts;
}