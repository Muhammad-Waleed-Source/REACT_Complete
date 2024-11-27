function Hello() { // dynamic components

    let myName = 'Waleed';
    let fullName = () => {
        return 'Muhammad Waleed';
    }
    return <p>Hello {fullName()} this is the future speaking</p>
}

export default Hello;