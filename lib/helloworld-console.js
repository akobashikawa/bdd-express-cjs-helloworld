module.exports = ({ helloworldService }) => function helloworldConsole() {
    const message = helloworldService();
    console.log(message);
};