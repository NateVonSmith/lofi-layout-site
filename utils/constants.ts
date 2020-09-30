export const cellColors = ['381d2a', '3e6990', 'aabd8c', 'e9e3b4', 'f39b6d'];
export const gapPxOptions = [5, 10, 15, 20, 30];

export const copyToClipboard = (ref) => {
    ref.current.select();
    document.execCommand('copy');
};
