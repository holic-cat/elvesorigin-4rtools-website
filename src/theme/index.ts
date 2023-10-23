

interface ITheme {
    primaryColor: string;
    primaryColorDark: string;
    secondaryColor: string;
}

const Theme = ():ITheme => {
    return {
        primaryColor: "#f47635",
        primaryColorDark: "#a14110",
        secondaryColor: "#522d1c"
    }
}

export default Theme();